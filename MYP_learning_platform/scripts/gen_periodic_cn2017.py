#!/usr/bin/env python3
# Periodic table for chemistry-nov-2017 Q1a: highlight Pb (group 4, period 6, green) and As (group 5, period 4, red).
# MYP short-form periodic table layout: groups 1,2 ... 3,4,5,6,7,0 (transition block in middle).

OUT = "public/images/papers/chemistry-nov-2017/q1-periodic-table.svg"

# Grid: column index 0..17 across the page. Period rows 1..7.
# We mirror the reference: groups labelled 1 2 (cols 0,1), transition (cols 2-11), 3 4 5 6 7 0 (cols 12-17).
# Reference layout per row:
rows = {
    1: [("H",0), ("He",17)],
    2: [("Li",0),("Be",1),("B",12),("C",13),("N",14),("O",15),("F",16),("Ne",17)],
    3: [("Na",0),("Mg",1),("Al",12),("Si",13),("P",14),("S",15),("Cl",16),("Ar",17)],
    4: [("K",0),("Ca",1),("Sc",2),("Ti",3),("V",4),("Cr",5),("Mn",6),("Fe",7),("Co",8),("Ni",9),("Cu",10),("Zn",11),("Ga",12),("Ge",13),("As",14),("Se",15),("Br",16),("Kr",17)],
    5: [("Rb",0),("Sr",1),("Y",2),("Zr",3),("Nb",4),("Mo",5),("Tc",6),("Ru",7),("Rh",8),("Pd",9),("Ag",10),("Cd",11),("In",12),("Sn",13),("Sb",14),("Te",15),("I",16),("Xe",17)],
    6: [("Cs",0),("Ba",1),("La",2),("Hf",3),("Ta",4),("W",5),("Re",6),("Os",7),("Ir",8),("Pt",9),("Au",10),("Hg",11),("Tl",12),("Pb",13),("Bi",14),("Po",15),("At",16),("Rn",17)],
    7: [("Fr",0),("Ra",1),("Ac",2),("Rf",3),("Db",4),("Sg",5),("Bh",6),("Hs",7),("Mt",8),("Ds",9),("Rg",10)],
}

# subscript markers on La and Ac in reference (Laf / Acf) -> we render La† Ac† small; keep simple "La" "Ac".

CELL = 38
GAP = 3
X0 = 40
Y0 = 70
PITCH = CELL + GAP

# group-number header positions (col -> label). Reference: 1,2 over cols 0,1 ; 3,4,5,6,7,0 over cols 12..17
group_labels = {0:"1",1:"2",12:"3",13:"4",14:"5",15:"6",16:"7",17:"0"}

W = X0 + 18*PITCH + 30
H = Y0 + 7*PITCH + 90

HIGHLIGHT = {"Pb":"#2e8b57", "As":"#d64545"}  # green, red - distinct from IB

def cell_xy(col,row):
    x = X0 + col*PITCH
    y = Y0 + (row-1)*PITCH
    return x,y

parts = []
parts.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="Arial, Helvetica, sans-serif">')
parts.append(f'<rect x="0" y="0" width="{W}" height="{H}" fill="#ffffff"/>')
parts.append('<defs><linearGradient id="cellg" x1="0" y1="0" x2="0" y2="1">'
             '<stop offset="0" stop-color="#fbfcfe"/><stop offset="1" stop-color="#eef2f8"/></linearGradient>'
             '<linearGradient id="pbg" x1="0" y1="0" x2="0" y2="1">'
             '<stop offset="0" stop-color="#3aa56b"/><stop offset="1" stop-color="#247a4c"/></linearGradient>'
             '<linearGradient id="asg" x1="0" y1="0" x2="0" y2="1">'
             '<stop offset="0" stop-color="#e25b5b"/><stop offset="1" stop-color="#c63a3a"/></linearGradient></defs>')

# Title
parts.append(f'<text x="{W/2}" y="34" text-anchor="middle" font-size="20" font-weight="bold" fill="#1f2d3d">Periodic Table</text>')
parts.append(f'<text x="{W/2}" y="54" text-anchor="middle" font-size="12" fill="#5a6b7b">Pb = lead (Group 4, Period 6) &#183; As = arsenic (Group 5, Period 4)</text>')

# Group headers
for col,lab in group_labels.items():
    x,_ = cell_xy(col,1)
    parts.append(f'<text x="{x+CELL/2}" y="{Y0-8}" text-anchor="middle" font-size="13" font-weight="bold" fill="#33475b">{lab}</text>')

# Period numbers (left)
for r in range(1,8):
    _,y = cell_xy(0,r)
    parts.append(f'<text x="{X0-12}" y="{y+CELL/2+5}" text-anchor="middle" font-size="13" font-weight="bold" fill="#33475b">{r}</text>')

# Cells
for r,els in rows.items():
    for sym,col in els:
        x,y = cell_xy(col,r)
        if sym in HIGHLIGHT:
            fill = "url(#pbg)" if sym=="Pb" else "url(#asg)"
            tcol = "#ffffff"
            stroke = "#1f5c3a" if sym=="Pb" else "#9c2b2b"
            parts.append(f'<rect x="{x}" y="{y}" width="{CELL}" height="{CELL}" rx="4" fill="{fill}" stroke="{stroke}" stroke-width="1.6"/>')
            parts.append(f'<text x="{x+CELL/2}" y="{y+CELL/2+6}" text-anchor="middle" font-size="16" font-weight="bold" fill="{tcol}">{sym}</text>')
        else:
            parts.append(f'<rect x="{x}" y="{y}" width="{CELL}" height="{CELL}" rx="4" fill="url(#cellg)" stroke="#c2cdda" stroke-width="1"/>')
            parts.append(f'<text x="{x+CELL/2}" y="{y+CELL/2+5}" text-anchor="middle" font-size="14" fill="#2b3a4a">{sym}</text>')

# Legend
ly = Y0 + 7*PITCH + 24
parts.append(f'<rect x="{X0}" y="{ly}" width="22" height="22" rx="4" fill="url(#pbg)" stroke="#1f5c3a"/>')
parts.append(f'<text x="{X0+30}" y="{ly+16}" font-size="13" fill="#2b3a4a">Lead (Pb) &#8212; metal, Group 4, Period 6</text>')
parts.append(f'<rect x="{X0+330}" y="{ly}" width="22" height="22" rx="4" fill="url(#asg)" stroke="#9c2b2b"/>')
parts.append(f'<text x="{X0+360}" y="{ly+16}" font-size="13" fill="#2b3a4a">Arsenic (As) &#8212; metalloid, Group 5, Period 4</text>')

parts.append('</svg>')
open(OUT,"w").write("\n".join(parts))
print("wrote", OUT)
