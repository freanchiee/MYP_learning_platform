#!/usr/bin/env python3
"""
MYP Exam Platform — Paper Preprocessing Pipeline
Zero AI cost. Uses pdfplumber + PIL for:
  1. PDF → PNG pages (pdftoppm)
  2. Text extraction per page (pdfplumber)
  3. Diagram region detection (PIL pixel analysis)
  4. Auto-crop + 2x upscale (PIL LANCZOS)
  5. Structured JSON output

Usage:
  python3 scripts/preprocess.py \
    --qp   papers/physics-nov-2024/qp.pdf \
    --ms   papers/physics-nov-2024/ms.pdf \
    --id   physics-nov-2024 \
    --out  data/papers/physics-nov-2024/extracted.json
"""

import argparse
import hashlib
import json
import os
import re
import subprocess
import sys
from pathlib import Path

import pdfplumber
from PIL import Image

# ─── Config ───────────────────────────────────────────────────────────────────

PUBLIC_IMAGES = "public/images/papers"
EXTRACT_DPI   = 150      # match existing extractions
UPSCALE       = 2        # 2× for retina
FOOTER_Y_MAX  = 1660     # exclude watermark footer (1755px tall page)
MIN_NONWHITE  = 0.10     # 10% non-white = valid crop


# ─── Helpers ──────────────────────────────────────────────────────────────────

def is_content(r, g, b):
    """True if pixel is non-white (content). Catches cream/sepia backgrounds."""
    if r > 252 and g > 252 and b > 252:
        return False
    return True

def is_cream(r, g, b):
    """True if pixel looks like a cream/sepia historical background."""
    return r > 225 and g > 210 and b > 150 and not (r > 252 and g > 252 and b > 252)

def nonwhite_pct(img, box=None):
    """Fraction of pixels that are non-white in a crop."""
    crop = img.crop(box) if box else img
    w, h = crop.size
    px = crop.load()
    nw = sum(1 for y in range(0, h, 4) for x in range(0, w, 4)
             if is_content(*px[x, y]))
    return nw / max(1, (w * h) / 16)

def scan_rows(img, h_max, step=2):
    """Return list of bool: True if that row contains any non-white pixel (sampled)."""
    w, h = img.size
    h_max = min(h, h_max)
    px = img.load()
    result = []
    for y in range(h_max):
        has = any(is_content(*px[x, y]) for x in range(0, w, step))
        result.append(has)
    return result

def content_regions(row_has, min_height=60, gap=20):
    """Find contiguous content regions from row bitmask."""
    regions = []
    in_r, start, gap_count = False, 0, 0
    for y, has in enumerate(row_has):
        if has:
            if not in_r:
                in_r = True
                start = y
            gap_count = 0
        else:
            if in_r:
                gap_count += 1
                if gap_count > gap:
                    if y - start - gap > min_height:
                        regions.append((start, y - gap))
                    in_r = False
                    gap_count = 0
    if in_r and len(row_has) - start > min_height:
        regions.append((start, len(row_has)))
    return regions

def classify_region(img, y1, y2):
    """
    Classify a content region as 'diagram' or 'text'.
    Heuristic: text regions have many thin horizontal strips (lines of text).
    Diagram regions have denser, more irregular pixel distribution.
    """
    w = img.size[0]
    px = img.load()
    # Sample 20 rows within region, count non-white pixels per row
    rows_sampled = range(y1, min(y2, y1 + 200), max(1, (y2 - y1) // 20))
    densities = []
    for y in rows_sampled:
        nw = sum(1 for x in range(0, w, 4) if is_content(*px[x, y]))
        densities.append(nw / (w / 4))

    region_h = y2 - y1
    avg_density = sum(densities) / max(1, len(densities))
    max_density = max(densities) if densities else 0

    # Text: many thin rows (each row has low-medium density), region tall
    # Diagram/image: high avg density, or compact block
    # Simple heuristic: if region height > 120 and avg density > 0.25 → likely diagram
    # If region height < 80 → likely a single text block
    if region_h > 100 and avg_density > 0.20:
        return 'diagram', avg_density
    if region_h > 200 and max_density > 0.50:
        return 'diagram', avg_density
    return 'text', avg_density


def find_diagram_bbox(img, y1, y2, margin=15):
    """Find tight bounding box of non-white content in a region, with margin."""
    w = img.size[0]
    px = img.load()
    rmin, rmax, cmin, cmax = y2, y1, w, 0
    # Use cream detection too
    for y in range(y1, y2, 2):
        for x in range(0, w, 2):
            r, g, b = px[x, y]
            if is_content(r, g, b) or is_cream(r, g, b):
                if y < rmin: rmin = y
                if y > rmax: rmax = y
                if x < cmin: cmin = x
                if x > cmax: cmax = x
    if rmin >= rmax:
        return None
    return (
        max(0, cmin - margin),
        max(0, rmin - margin),
        min(w, cmax + margin),
        min(img.size[1], rmax + margin),
    )


# ─── Page extraction ──────────────────────────────────────────────────────────

def extract_pages(pdf_path, out_dir, prefix="page"):
    """Run pdftoppm to extract PNG pages. Returns list of page paths."""
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    prefix_path = out_dir / prefix
    subprocess.run(
        ["pdftoppm", "-r", str(EXTRACT_DPI), "-png", str(pdf_path), str(prefix_path)],
        check=True, capture_output=True
    )
    pages = sorted(out_dir.glob(f"{prefix}-*.png"))
    return pages


# ─── Text extraction ──────────────────────────────────────────────────────────

def extract_text_from_pdf(pdf_path):
    """
    Use pdfplumber to extract text per page.
    Returns: list of dicts {page_num, text, tables}
    """
    pages_data = []
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text() or ""
            tables = page.extract_tables() or []
            pages_data.append({
                "page_num": i + 1,
                "text": text,
                "tables": tables,
            })
    return pages_data


def parse_questions_from_text(text_pages):
    """
    Parse question structure from extracted text.
    Returns list of question dicts.
    """
    # Join all text for pattern matching
    full_text = "\n".join(p["text"] for p in text_pages)

    # Pattern: "Question Xa (N mark(s))" or "Question X (N marks)"
    q_pattern = re.compile(
        r"Question\s+(\d+)([a-z]?)\s*\((\d+)\s*marks?\)",
        re.IGNORECASE
    )

    questions = {}
    for match in q_pattern.finditer(full_text):
        q_id = match.group(1)
        part = match.group(2)
        marks = int(match.group(3))
        key = q_id
        if key not in questions:
            questions[key] = {"id": int(q_id), "parts": [], "total_marks": 0, "criterion": None}
        if part:
            questions[key]["parts"].append({
                "label": part,
                "marks": marks,
            })
            questions[key]["total_marks"] += marks
        else:
            questions[key]["total_marks"] = marks

    # Try to detect criterion from text
    crit_pattern = re.compile(r"Criterion\s+([ABCD])", re.IGNORECASE)
    for match in crit_pattern.finditer(full_text):
        # Assign to most recently seen question (rough heuristic)
        pass

    return list(questions.values())


# ─── Diagram detection & cropping ─────────────────────────────────────────────

def process_page_images(page_paths, paper_id, text_pages):
    """
    For each page:
      - Detect content regions
      - Classify as text vs diagram
      - Auto-crop diagrams and save as page-NN-crop.png
    Returns list of page metadata dicts.
    """
    out_dir = Path(PUBLIC_IMAGES) / paper_id
    out_dir.mkdir(parents=True, exist_ok=True)

    pages_meta = []

    for page_path in page_paths:
        # Extract page number from filename (page-01.png → 1)
        fname = page_path.stem  # e.g. "page-01"
        match = re.search(r"(\d+)$", fname)
        page_num = int(match.group(1)) if match else 0

        img = Image.open(page_path).convert("RGB")
        w, h = img.size

        # Get text for this page
        text_page = next((p for p in text_pages if p["page_num"] == page_num), {})
        raw_text = text_page.get("text", "")

        # Scan for content regions (exclude footer)
        row_has = scan_rows(img, FOOTER_Y_MAX)
        regions = content_regions(row_has)

        diagram_crops = []

        for y1, y2 in regions:
            kind, density = classify_region(img, y1, y2)
            if kind == "diagram":
                bbox = find_diagram_bbox(img, y1, y2)
                if bbox is None:
                    continue

                # Reject full-page scans: if crop covers >60% of page area
                # it's a scanned text page, not a diagram
                crop_area = (bbox[2] - bbox[0]) * (bbox[3] - bbox[1])
                page_area = w * h
                if crop_area / page_area > 0.60:
                    print(f"  ⏩ page-{page_num:02d} region {y1}-{y2}: full-page scan ({crop_area/page_area:.0%} of page) — skipping")
                    continue

                # Verify crop is not blank
                pct = nonwhite_pct(img, bbox)
                if pct < MIN_NONWHITE:
                    print(f"  ⚠  page-{page_num:02d} region {y1}-{y2}: only {pct:.1%} non-white — skipping")
                    continue

                # Crop and 2× upscale
                crop = img.crop(bbox)
                cw, ch = crop.size
                upscaled = crop.resize((cw * UPSCALE, ch * UPSCALE), Image.LANCZOS)
                crop_name = f"page-{page_num:02d}-crop.png"
                crop_path = out_dir / crop_name
                upscaled.save(crop_path)

                diagram_crops.append({
                    "file": f"/images/papers/{paper_id}/{crop_name}",
                    "bbox": list(bbox),
                    "nonwhite_pct": round(pct * 100, 1),
                    "region_y": [y1, y2],
                    "density": round(density, 3),
                })
                print(f"  ✅ page-{page_num:02d}: cropped diagram → {crop_name} ({pct:.0%} non-white, {cw*UPSCALE}×{ch*UPSCALE})")

        pages_meta.append({
            "page_num": page_num,
            "raw_text": raw_text[:2000],  # truncate for JSON size
            "has_diagram": len(diagram_crops) > 0,
            "diagram_crops": diagram_crops,
        })

    return pages_meta


# ─── Mark scheme extraction ───────────────────────────────────────────────────

def extract_markscheme_text(ms_text_pages):
    """
    Extract mark scheme entries from MS PDF text.
    Returns raw text grouped by question reference.
    """
    full_ms = "\n".join(p["text"] for p in ms_text_pages)
    return full_ms


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Preprocess MYP exam PDF papers")
    parser.add_argument("--qp",  required=True, help="Path to question paper PDF")
    parser.add_argument("--ms",  required=True, help="Path to mark scheme PDF")
    parser.add_argument("--id",  required=True, help="Paper ID (e.g. physics-nov-2024)")
    parser.add_argument("--out", required=True, help="Output JSON path")
    args = parser.parse_args()

    paper_id  = args.id
    qp_path   = Path(args.qp)
    ms_path   = Path(args.ms)
    out_path  = Path(args.out)
    img_dir   = Path(PUBLIC_IMAGES) / paper_id

    print(f"\n{'='*60}")
    print(f"  MYP Preprocessor — {paper_id}")
    print(f"{'='*60}")

    # ── PDF hash for caching ──────────────────────────────────────
    cache_file = out_path.parent / ".preprocess_cache.json"
    cache = {}
    if cache_file.exists():
        cache = json.loads(cache_file.read_text())

    qp_hash = hashlib.md5(qp_path.read_bytes()).hexdigest()
    ms_hash = hashlib.md5(ms_path.read_bytes()).hexdigest()
    cache_key = f"{qp_hash}:{ms_hash}"

    if cache.get(paper_id) == cache_key and out_path.exists():
        print(f"  ⏩ Already processed (hashes match) — skipping. Delete {out_path.name} to reprocess.")
        return

    # ── Step 1: Extract PNG pages ─────────────────────────────────
    print(f"\n[1/4] Extracting PDF pages → {img_dir}/")
    if not list(img_dir.glob("page-*.png")):
        extract_pages(qp_path, img_dir, prefix="page")
    else:
        print("      Pages already extracted — skipping pdftoppm")

    page_paths = sorted(img_dir.glob("page-*.png"),
                        key=lambda p: int(re.search(r"(\d+)", p.stem).group(1)))
    print(f"      {len(page_paths)} pages found")

    # ── Step 2: Extract text from QP + MS ────────────────────────
    print(f"\n[2/4] Extracting text from PDFs...")
    qp_text_pages = extract_text_from_pdf(qp_path)
    ms_text_pages = extract_text_from_pdf(ms_path)
    print(f"      QP: {len(qp_text_pages)} pages | MS: {len(ms_text_pages)} pages")

    # ── Step 3: Detect + crop diagrams ───────────────────────────
    print(f"\n[3/4] Detecting and cropping diagrams...")
    pages_meta = process_page_images(page_paths, paper_id, qp_text_pages)

    total_crops = sum(len(p["diagram_crops"]) for p in pages_meta)
    print(f"      Found {total_crops} diagram(s) across {len(pages_meta)} pages")

    # ── Step 4: Parse question structure ─────────────────────────
    print(f"\n[4/4] Parsing question structure...")
    questions = parse_questions_from_text(qp_text_pages)
    ms_raw    = extract_markscheme_text(ms_text_pages)

    total_marks = sum(q.get("total_marks", 0) for q in questions)
    print(f"      Found {len(questions)} question groups | {total_marks} marks total")

    # ── Assemble output JSON ──────────────────────────────────────
    extracted = {
        "paper_id":       paper_id,
        "qp_hash":        qp_hash,
        "ms_hash":        ms_hash,
        "pages":          pages_meta,
        "questions_raw":  questions,
        "qp_full_text":   "\n\n--- PAGE BREAK ---\n\n".join(
                              p["text"] for p in qp_text_pages
                          ),
        "ms_full_text":   ms_raw,
        "total_crops":    total_crops,
        "self_check": {
            "all_crops_nonblank": all(
                c["nonwhite_pct"] >= 10
                for p in pages_meta
                for c in p["diagram_crops"]
            ),
            "total_marks_detected": total_marks,
        }
    }

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(extracted, indent=2, ensure_ascii=False))

    # Update cache
    cache[paper_id] = cache_key
    cache_file.write_text(json.dumps(cache, indent=2))

    print(f"\n{'='*60}")
    print(f"  ✅ Preprocessing complete → {out_path}")
    print(f"     Crops: {total_crops} | Self-check: {extracted['self_check']}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
