#!/usr/bin/env python3
# US penny composition table + coin row for chemistry-nov-2017 Q4 (page-17).
OUT="public/images/papers/chemistry-nov-2017/q4-coin-composition.svg"

rows=[
 ("1793 – 1849","100.0","0.0","0.0","0.0"),
 ("1849 – 1857","95.5","0.0","0.0","5.0"),
 ("1857 – 1865","88.0","12.0","0.0","0.0"),
 ("1865 – 1943","95.0","0.0","2.5","2.5"),
 ("1943 – 1962","100.0","0.0","0.0","0.0"),
 ("1962 – 1982","95.0","0.0","5.0","0.0"),
 ("1982 – present","2.5","0.0","97.5","0.0"),
]
# coin tints to evoke the 7 reference coins (copper/gold/silver/bronze/steel/dark/red)
coin_cols=["#b08d57","#c9a23a","#bfc3c6","#c07a3a","#cfd2d4","#7d6a52","#b5552e"]

W=820; H=720
p=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="Arial, Helvetica, sans-serif">']
p.append(f'<rect width="{W}" height="{H}" fill="#ffffff"/>')
p.append('<defs>')
for i,c in enumerate(coin_cols):
    p.append(f'<radialGradient id="cn{i}" cx="0.38" cy="0.34" r="0.75">'
             f'<stop offset="0" stop-color="#ffffff" stop-opacity="0.7"/>'
             f'<stop offset="0.35" stop-color="{c}"/>'
             f'<stop offset="1" stop-color="#3a2f22"/></radialGradient>')
p.append('</defs>')

p.append(f'<text x="{W/2}" y="38" text-anchor="middle" font-size="20" font-weight="bold" fill="#1f2d3d">US penny (1 cent) &#8212; changing composition</text>')

# coin row
cy=92; r=38; n=len(coin_cols); x0=70; gap=(W-2*x0)/(n-1)
for i in range(n):
    cx=x0+i*gap
    p.append(f'<circle cx="{cx:.0f}" cy="{cy}" r="{r}" fill="url(#cn{i})" stroke="#2a2017" stroke-width="1.5"/>')
    p.append(f'<circle cx="{cx:.0f}" cy="{cy}" r="{r-6}" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.25"/>')

# Table
tx=60; ty=180; tw=W-120
colw=[ (tx,200), (tx+200,150), (tx+350,150), (tx+500,110), (tx+610,150) ]
# recompute: keep within tw
labels_w=200; data_w=(tw-labels_w)/4
cols=[("Year",labels_w)]
for nm in ["Copper","Nickel","Zinc","Tin"]:
    cols.append((nm,data_w))
rowh=58
# header group title "Composition / %"
hy=ty
p.append(f'<rect x="{tx}" y="{hy}" width="{tw}" height="34" fill="#33475b"/>')
p.append(f'<rect x="{tx}" y="{hy}" width="{labels_w}" height="34" fill="#1f2d3d"/>')
p.append(f'<text x="{tx+labels_w+(tw-labels_w)/2}" y="{hy+23}" text-anchor="middle" font-size="15" font-weight="bold" fill="#ffffff">Composition / %</text>')
hy+=34
# column header row
cx=tx
headfill="#46586b"
p.append(f'<rect x="{tx}" y="{hy}" width="{tw}" height="{rowh}" fill="{headfill}"/>')
for nm,wd in cols:
    p.append(f'<text x="{cx+wd/2:.0f}" y="{hy+rowh/2+5:.0f}" text-anchor="middle" font-size="15" font-weight="bold" fill="#ffffff">{nm}</text>')
    cx+=wd
# rows
ry=hy+rowh
for ri,row in enumerate(rows):
    fill="#eef2f7" if ri%2==0 else "#ffffff"
    p.append(f'<rect x="{tx}" y="{ry}" width="{tw}" height="{rowh}" fill="{fill}"/>')
    cx=tx
    for ci,(val,wd) in enumerate(zip(row,[c[1] for c in cols])):
        weight="bold" if ci==0 else "normal"
        col="#1f2d3d" if ci==0 else "#2b3a4a"
        p.append(f'<text x="{cx+wd/2:.0f}" y="{ry+rowh/2+5:.0f}" text-anchor="middle" font-size="14" font-weight="{weight}" fill="{col}">{val}</text>')
        cx+=wd
    ry+=rowh
# grid lines
p.append(f'<rect x="{tx}" y="{ty}" width="{tw}" height="{ry-ty}" fill="none" stroke="#9aa4b0" stroke-width="1.5"/>')
# vertical lines
cx=tx
for nm,wd in cols[:-1]:
    cx+=wd
    p.append(f'<line x1="{cx:.0f}" y1="{ty}" x2="{cx:.0f}" y2="{ry}" stroke="#c2cdda" stroke-width="1"/>')
# horizontal lines between data rows
yy=hy+rowh
for _ in range(len(rows)+1):
    p.append(f'<line x1="{tx}" y1="{yy}" x2="{tx+tw}" y2="{yy}" stroke="#c2cdda" stroke-width="1"/>')
    yy+=rowh

p.append('</svg>')
open(OUT,"w").write("\n".join(p))
print("wrote",OUT)
