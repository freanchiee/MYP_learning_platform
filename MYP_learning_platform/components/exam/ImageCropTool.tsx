'use client'

/**
 * ImageCropTool — Canvas-based smart crop editor for edit mode
 *
 * Features:
 *  • Drag anywhere on image → draw new crop rect
 *  • Corner handles (nw/ne/sw/se) → resize crop
 *  • Inside crop box → move
 *  • ⚡ Smart Crop → auto-detects non-white content bounds via pixel analysis
 *  • Rule-of-thirds grid overlay inside crop area
 *  • Output: canvas.toDataURL('image/png') stored as imageOverride
 *
 * CORS note: works for same-origin images (/images/...).
 * For external URLs the browser will taint the canvas; the tool shows a warning.
 */

import { useState, useRef, useEffect, useCallback } from 'react'

// ── Types ────────────────────────────────────────────────────────────────────
interface Rect { x: number; y: number; w: number; h: number }
type Handle = 'nw' | 'ne' | 'sw' | 'se'
type DragMode = 'new' | 'move' | Handle

interface ImageCropToolProps {
  src: string
  onApply: (dataUrl: string) => void
  onClose: () => void
}

// ── Constants ─────────────────────────────────────────────────────────────────
const HANDLE_HIT = 12    // px radius for corner handle hit-test
const MIN_CROP   = 20    // minimum crop dimension in display px
const SMART_PAD  = 12    // padding added around smart-crop detected bounds (natural px)

// ── Smart crop: pixel analysis ───────────────────────────────────────────────
async function detectContentBounds(
  img: HTMLImageElement,
): Promise<Rect | null> {
  try {
    const W = img.naturalWidth, H = img.naturalHeight
    const offscreen = document.createElement('canvas')
    offscreen.width = W; offscreen.height = H
    const ctx = offscreen.getContext('2d')!
    ctx.drawImage(img, 0, 0)
    const data = ctx.getImageData(0, 0, W, H).data

    let minX = W, maxX = 0, minY = H, maxY = 0
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4
        const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3]
        // Non-white, non-transparent, non-near-cream pixel
        if (a > 30 && (r < 238 || g < 238 || b < 218)) {
          if (x < minX) minX = x
          if (x > maxX) maxX = x
          if (y < minY) minY = y
          if (y > maxY) maxY = y
        }
      }
    }

    if (maxX <= minX || maxY <= minY) return null   // all white — skip

    return {
      x: Math.max(0, minX - SMART_PAD),
      y: Math.max(0, minY - SMART_PAD),
      w: Math.min(W, maxX + SMART_PAD) - Math.max(0, minX - SMART_PAD),
      h: Math.min(H, maxY + SMART_PAD) - Math.max(0, minY - SMART_PAD),
    }
  } catch {
    return null
  }
}

// ── Canvas drawing ────────────────────────────────────────────────────────────
function drawCropCanvas(
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
  crop: Rect | null,
  activeHandle: Handle | null,
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const W = canvas.width, H = canvas.height

  // 1. Draw image
  ctx.clearRect(0, 0, W, H)
  ctx.drawImage(img, 0, 0, W, H)

  if (!crop) return

  // 2. Four dark overlay rects (outside crop)
  ctx.fillStyle = 'rgba(0,0,0,0.58)'
  ctx.fillRect(0, 0, W, crop.y)                                              // top
  ctx.fillRect(0, crop.y + crop.h, W, H - crop.y - crop.h)                  // bottom
  ctx.fillRect(0, crop.y, crop.x, crop.h)                                    // left
  ctx.fillRect(crop.x + crop.w, crop.y, W - crop.x - crop.w, crop.h)        // right

  // 3. Rule-of-thirds grid
  ctx.strokeStyle = 'rgba(255,255,255,0.30)'
  ctx.lineWidth = 1
  ctx.setLineDash([4, 4])
  for (let t = 1; t <= 2; t++) {
    const gx = crop.x + (crop.w / 3) * t
    const gy = crop.y + (crop.h / 3) * t
    ctx.beginPath(); ctx.moveTo(gx, crop.y);       ctx.lineTo(gx, crop.y + crop.h); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(crop.x, gy);       ctx.lineTo(crop.x + crop.w, gy); ctx.stroke()
  }
  ctx.setLineDash([])

  // 4. Crop border
  ctx.strokeStyle = '#fbbf24'
  ctx.lineWidth = 1.5
  ctx.strokeRect(crop.x + 0.5, crop.y + 0.5, crop.w - 1, crop.h - 1)

  // 5. Corner handles
  const HSIZ = 9
  const corners: { x: number; y: number; handle: Handle }[] = [
    { x: crop.x,           y: crop.y,           handle: 'nw' },
    { x: crop.x + crop.w,  y: crop.y,           handle: 'ne' },
    { x: crop.x,           y: crop.y + crop.h,  handle: 'sw' },
    { x: crop.x + crop.w,  y: crop.y + crop.h,  handle: 'se' },
  ]
  for (const c of corners) {
    const isActive = activeHandle === c.handle
    ctx.fillStyle   = isActive ? '#ffffff' : '#fbbf24'
    ctx.strokeStyle = '#78350f'
    ctx.lineWidth   = 1.5
    ctx.beginPath()
    ctx.roundRect(c.x - HSIZ / 2, c.y - HSIZ / 2, HSIZ, HSIZ, 2)
    ctx.fill()
    ctx.stroke()
  }

  // 6. Dimension label
  const scaleX = img.naturalWidth / W, scaleY = img.naturalHeight / H
  const nw = Math.round(crop.w * scaleX), nh = Math.round(crop.h * scaleY)
  const label = `${nw} × ${nh} px`
  ctx.font = 'bold 11px system-ui, sans-serif'
  const textW = ctx.measureText(label).width
  const lx = Math.min(crop.x + 6, W - textW - 12)
  const ly = crop.y - 7 > 12 ? crop.y - 7 : crop.y + 16
  ctx.fillStyle = 'rgba(0,0,0,0.65)'
  ctx.fillRect(lx - 4, ly - 12, textW + 8, 16)
  ctx.fillStyle = '#fbbf24'
  ctx.fillText(label, lx, ly - 1)
}

// ── Hit testing ───────────────────────────────────────────────────────────────
function getHandle(px: number, py: number, crop: Rect): Handle | null {
  const corners: { handle: Handle; x: number; y: number }[] = [
    { handle: 'nw', x: crop.x,           y: crop.y },
    { handle: 'ne', x: crop.x + crop.w,  y: crop.y },
    { handle: 'sw', x: crop.x,           y: crop.y + crop.h },
    { handle: 'se', x: crop.x + crop.w,  y: crop.y + crop.h },
  ]
  for (const c of corners) {
    if (Math.abs(px - c.x) <= HANDLE_HIT && Math.abs(py - c.y) <= HANDLE_HIT) return c.handle
  }
  return null
}

function insideCrop(px: number, py: number, crop: Rect): boolean {
  return px > crop.x && px < crop.x + crop.w && py > crop.y && py < crop.y + crop.h
}

function cursorForMode(mode: DragMode | null): string {
  if (!mode) return 'crosshair'
  if (mode === 'move') return 'move'
  if (mode === 'new')  return 'crosshair'
  const map: Record<Handle, string> = { nw: 'nw-resize', ne: 'ne-resize', sw: 'sw-resize', se: 'se-resize' }
  return map[mode as Handle]
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ImageCropTool({ src, onApply, onClose }: ImageCropToolProps) {
  const canvasRef     = useRef<HTMLCanvasElement>(null)
  const loadedImgRef  = useRef<HTMLImageElement | null>(null)
  const dragRef       = useRef<{
    mode: DragMode; startX: number; startY: number; startCrop: Rect
  } | null>(null)

  const [crop,         setCrop]         = useState<Rect | null>(null)
  const [activeHandle, setActiveHandle] = useState<Handle | null>(null)
  const [cursor,       setCursor]       = useState('crosshair')
  const [canvasSize,   setCanvasSize]   = useState({ w: 800, h: 500 })
  const [imageLoaded,  setImageLoaded]  = useState(false)
  const [smartRunning, setSmartRunning] = useState(false)
  const [error,        setError]        = useState<string | null>(null)

  // ── Load image ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      loadedImgRef.current = img

      // Fit to 85vw × 65vh
      const maxW = Math.min(window.innerWidth * 0.85, 1000)
      const maxH = window.innerHeight * 0.62
      const ratio = img.naturalWidth / img.naturalHeight
      let w = maxW, h = maxW / ratio
      if (h > maxH) { h = maxH; w = maxH * ratio }
      setCanvasSize({ w: Math.round(w), h: Math.round(h) })

      // Default: full image selected
      setCrop({ x: 0, y: 0, w: Math.round(w), h: Math.round(h) })
      setImageLoaded(true)
    }
    img.onerror = () => setError('Could not load image (possible CORS restriction for external URLs).')
    img.src = src
  }, [src])

  // ── Redraw canvas whenever crop/state changes ────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    const img    = loadedImgRef.current
    if (!canvas || !img || !imageLoaded) return
    canvas.width  = canvasSize.w
    canvas.height = canvasSize.h
    drawCropCanvas(canvas, img, crop, activeHandle)
  }, [crop, activeHandle, canvasSize, imageLoaded])

  // ── Canvas pointer helpers ───────────────────────────────────────────────────
  const getCanvasPos = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect()
    const scaleX = canvasSize.w / rect.width
    const scaleY = canvasSize.h / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top)  * scaleY,
    }
  }, [canvasSize])

  // ── Mouse events ─────────────────────────────────────────────────────────────
  function onMouseDown(e: React.MouseEvent<HTMLCanvasElement>) {
    const { x, y } = getCanvasPos(e)

    if (crop) {
      const handle = getHandle(x, y, crop)
      if (handle) {
        dragRef.current = { mode: handle, startX: x, startY: y, startCrop: { ...crop } }
        setActiveHandle(handle)
        return
      }
      if (insideCrop(x, y, crop)) {
        dragRef.current = { mode: 'move', startX: x, startY: y, startCrop: { ...crop } }
        setCursor('move')
        return
      }
    }

    // Start a new crop rect from scratch
    dragRef.current = { mode: 'new', startX: x, startY: y, startCrop: { x, y, w: 0, h: 0 } }
    setCrop({ x, y, w: 0, h: 0 })
  }

  function onMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
    const { x, y } = getCanvasPos(e)
    const drag = dragRef.current

    if (!drag) {
      // Update hover cursor
      if (crop) {
        const handle = getHandle(x, y, crop)
        if (handle)               { setCursor(cursorForMode(handle)); return }
        if (insideCrop(x, y, crop)) { setCursor('move'); return }
      }
      setCursor('crosshair')
      return
    }

    const { mode, startX, startY, startCrop } = drag
    const dx = x - startX, dy = y - startY

    setCrop(prev => {
      if (!prev) return prev
      const W = canvasSize.w, H = canvasSize.h

      if (mode === 'new') {
        const nx = Math.min(startX, x), ny = Math.min(startY, y)
        const nw = Math.abs(x - startX),   nh = Math.abs(y - startY)
        return { x: nx, y: ny, w: nw, h: nh }
      }

      if (mode === 'move') {
        return {
          x: Math.max(0, Math.min(W - startCrop.w, startCrop.x + dx)),
          y: Math.max(0, Math.min(H - startCrop.h, startCrop.y + dy)),
          w: startCrop.w,
          h: startCrop.h,
        }
      }

      // Resize by handle
      let { x: cx, y: cy, w: cw, h: ch } = startCrop
      if (mode === 'nw') { cx = Math.min(startCrop.x + dx, startCrop.x + startCrop.w - MIN_CROP); cy = Math.min(startCrop.y + dy, startCrop.y + startCrop.h - MIN_CROP); cw = startCrop.w - (cx - startCrop.x); ch = startCrop.h - (cy - startCrop.y) }
      if (mode === 'ne') { cw = Math.max(MIN_CROP, startCrop.w + dx); cy = Math.min(startCrop.y + dy, startCrop.y + startCrop.h - MIN_CROP); ch = startCrop.h - (cy - startCrop.y) }
      if (mode === 'sw') { cx = Math.min(startCrop.x + dx, startCrop.x + startCrop.w - MIN_CROP); cw = startCrop.w - (cx - startCrop.x); ch = Math.max(MIN_CROP, startCrop.h + dy) }
      if (mode === 'se') { cw = Math.max(MIN_CROP, startCrop.w + dx); ch = Math.max(MIN_CROP, startCrop.h + dy) }

      return {
        x: Math.max(0, Math.min(cx, W - MIN_CROP)),
        y: Math.max(0, Math.min(cy, H - MIN_CROP)),
        w: Math.min(cw, W - Math.max(0, cx)),
        h: Math.min(ch, H - Math.max(0, cy)),
      }
    })
  }

  function onMouseUp() {
    dragRef.current = null
    setActiveHandle(null)
    setCursor('crosshair')
  }

  // ── Smart crop ────────────────────────────────────────────────────────────────
  async function runSmartCrop() {
    const img = loadedImgRef.current
    if (!img) return
    setSmartRunning(true)
    const bounds = await detectContentBounds(img)
    if (bounds) {
      // Convert natural → display coordinates
      const sx = canvasSize.w / img.naturalWidth
      const sy = canvasSize.h / img.naturalHeight
      setCrop({
        x: Math.round(bounds.x * sx),
        y: Math.round(bounds.y * sy),
        w: Math.round(bounds.w * sx),
        h: Math.round(bounds.h * sy),
      })
    }
    setSmartRunning(false)
  }

  // ── Apply crop ────────────────────────────────────────────────────────────────
  function applyCrop() {
    const img = loadedImgRef.current
    if (!img || !crop || crop.w < MIN_CROP || crop.h < MIN_CROP) return

    const scaleX = img.naturalWidth  / canvasSize.w
    const scaleY = img.naturalHeight / canvasSize.h

    const nx = Math.round(crop.x * scaleX)
    const ny = Math.round(crop.y * scaleY)
    const nw = Math.round(crop.w * scaleX)
    const nh = Math.round(crop.h * scaleY)

    const out = document.createElement('canvas')
    out.width = nw; out.height = nh
    const ctx = out.getContext('2d')!
    ctx.drawImage(img, nx, ny, nw, nh, 0, 0, nw, nh)

    try {
      onApply(out.toDataURL('image/png'))
    } catch {
      setError('Canvas was tainted (CORS). Use "Replace URL" for external images instead.')
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────────
  const canHaveCrop = crop && crop.w >= MIN_CROP && crop.h >= MIN_CROP

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 p-4"
      style={{ background: 'rgba(0,0,0,0.85)' }}
    >
      {/* ── Header ── */}
      <div className="w-full flex items-center justify-between" style={{ maxWidth: canvasSize.w }}>
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-sm">✂ Crop Image</span>
          <span className="text-gray-400 text-xs font-mono truncate max-w-xs">{src.split('/').pop()}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={runSmartCrop}
            disabled={!imageLoaded || smartRunning}
            title="Auto-detect content bounds by pixel analysis"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold
                       bg-violet-600 hover:bg-violet-500 disabled:opacity-40
                       text-white transition-colors"
          >
            {smartRunning ? '…' : '⚡'} Smart Crop
          </button>
          <button
            onClick={() => setCrop({ x: 0, y: 0, w: canvasSize.w, h: canvasSize.h })}
            disabled={!imageLoaded}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gray-600 hover:bg-gray-500
                       text-white transition-colors disabled:opacity-40"
          >
            Reset
          </button>
        </div>
      </div>

      {/* ── Canvas ── */}
      <div
        className="rounded-xl overflow-hidden shadow-2xl border border-gray-700"
        style={{ maxWidth: '100%', maxHeight: '65vh', lineHeight: 0 }}
      >
        {!imageLoaded && !error && (
          <div
            className="flex items-center justify-center bg-gray-800 text-gray-400 text-sm"
            style={{ width: 600, height: 400 }}
          >
            Loading image…
          </div>
        )}
        {error && (
          <div
            className="flex items-center justify-center bg-gray-800 text-red-400 text-sm px-6 text-center"
            style={{ width: 600, height: 200 }}
          >
            {error}
          </div>
        )}
        {imageLoaded && (
          <canvas
            ref={canvasRef}
            style={{ cursor, display: 'block', maxWidth: '85vw', maxHeight: '65vh' }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          />
        )}
      </div>

      {/* ── Info bar ── */}
      {imageLoaded && (
        <div className="flex items-center gap-4 text-xs text-gray-400" style={{ maxWidth: canvasSize.w }}>
          {canHaveCrop ? (
            <>
              <span>
                Selection:{' '}
                <span className="text-amber-300 font-mono">
                  {Math.round(crop!.w * (loadedImgRef.current!.naturalWidth / canvasSize.w))}
                  {' × '}
                  {Math.round(crop!.h * (loadedImgRef.current!.naturalHeight / canvasSize.h))} px
                </span>
              </span>
              <span className="text-gray-600">|</span>
              <span>Drag corners to resize · Drag inside to move · Drag outside to redraw</span>
            </>
          ) : (
            <span>Drag on the image to select a crop area</span>
          )}
        </div>
      )}

      {/* ── Footer buttons ── */}
      <div className="flex items-center gap-3">
        <button
          onClick={onClose}
          className="px-5 py-2 rounded-xl text-sm font-semibold bg-gray-700 hover:bg-gray-600
                     text-white transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={applyCrop}
          disabled={!canHaveCrop}
          className="px-6 py-2 rounded-xl text-sm font-bold
                     bg-amber-500 hover:bg-amber-400 disabled:opacity-35 disabled:cursor-not-allowed
                     text-black transition-colors"
        >
          ✓ Apply Crop
        </button>
      </div>
    </div>
  )
}
