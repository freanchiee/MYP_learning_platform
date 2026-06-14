#!/usr/bin/env python3
# Ball-and-stick ester molecules for chemistry-nov-2017 Q2 (page-09).
# Methanoate esters HCOO-R: methyl, ethyl, propyl, butyl, pentyl methanoate.
# Skeleton: H-C(=O)-O-CH2-(CH2)n-CH3 . Each backbone C carries H's to complete valence.
# Layout matches reference: formyl group (H-C=O with O below) on the left, then -O- bridge, then alkyl chain.

import math

OUT = "public/images/papers/chemistry-nov-2017/q2-ester-structures.svg"

# colours (distinct from IB but conventional CPK-ish): C dark grey, O red, H light
C_COL = "#5b6168"; C_HI="#7c828a"
O_COL = "#d6453f"; O_HI="#ef6b66"
H_COL = "#e9edf2"; H_HI="#ffffff"
BOND  = "#9aa3ad"

R_C=11; R_O=12; R_H=7.5

def atom(x,y,r,col,hi):
    return (f'<circle cx="{x}" cy="{y}" r="{r}" fill="{col}"/>'
            f'<circle cx="{x-r*0.32:.1f}" cy="{y-r*0.32:.1f}" r="{r*0.45:.1f}" fill="{hi}" opacity="0.55"/>')

def bond(x1,y1,x2,y2,w=5):
    return f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{BOND}" stroke-width="{w}" stroke-linecap="round"/>'

def dbond(x1,y1,x2,y2):
    # double bond: two parallel lines
    dx,dy=x2-x1,y2-y1; L=math.hypot(dx,dy); ox,oy=-dy/L*3,dx/L*3
    return (bond(x1+ox,y1+oy,x2+ox,y2+oy,3)+bond(x1-ox,y1-oy,x2-ox,y2-oy,3))

def molecule(ox, oy, n_alkyl, label):
    """n_alkyl = number of carbons in the alcohol-derived alkyl chain (methyl=1..pentyl=5)."""
    s=[]
    bonds=[]; atoms=[]
    step=34
    # formyl carbon C0 at (ox,oy)
    cx,cy = ox, oy
    # carbonyl O above-left (double bond), H to the left
    Ocarb=(cx-6, cy-26)
    Hform=(cx-30, cy-2)
    # ester O below the C0
    Oester=(cx+14, cy+24)
    bonds.append(dbond(cx,cy,*Ocarb))
    bonds.append(bond(cx,cy,*Hform))
    bonds.append(bond(cx,cy,*Oester))
    atoms.append((Ocarb,R_O,O_COL,O_HI))
    atoms.append((Hform,R_H,H_COL,H_HI))
    atoms.append((Oester,R_O,O_COL,O_HI))
    atoms.append(((cx,cy),R_C,C_COL,C_HI))
    # alkyl chain starts from ester O, going right along a zig-zag
    px,py = Oester
    up=True
    prev=(Oester)
    for i in range(n_alkyl):
        nx = px + step
        ny = oy + ( -10 if up else 14 )
        bonds.append(bond(prev[0],prev[1],nx,ny))
        # hydrogens on this carbon (2 up/down + terminal extra)
        is_last = (i==n_alkyl-1)
        # top & bottom H
        hy_top=(nx-4, ny-24); hy_bot=(nx+2, ny+24)
        bonds.append(bond(nx,ny,*hy_top)); bonds.append(bond(nx,ny,*hy_bot))
        atoms.append((hy_top,R_H,H_COL,H_HI)); atoms.append((hy_bot,R_H,H_COL,H_HI))
        if is_last:
            ht=(nx+26, ny-6)
            bonds.append(bond(nx,ny,*ht)); atoms.append((ht,R_H,H_COL,H_HI))
        atoms.append(((nx,ny),R_C,C_COL,C_HI))
        prev=(nx,ny); px=nx; up=not up
    s.extend(bonds)
    for (pos,r,col,hi) in atoms:
        s.append(atom(pos[0],pos[1],r,col,hi))
    # label
    lblx = ox + (step*n_alkyl)/2 + 6
    s.append(f'<text x="{lblx:.0f}" y="{oy+62}" text-anchor="middle" font-size="15" fill="#e8edf3" font-weight="600">{label}</text>')
    return "\n".join(s)

W=980; H=560
parts=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="Arial, Helvetica, sans-serif">']
parts.append(f'<rect width="{W}" height="{H}" rx="10" fill="#1b1d22"/>')
parts.append(f'<text x="{W/2}" y="36" text-anchor="middle" font-size="20" font-weight="bold" fill="#ffffff">Some esters with different volatilities</text>')

# Row 1: methyl, ethyl, propyl
parts.append(molecule(120, 130, 1, "Methyl methanoate"))
parts.append(molecule(420, 130, 2, "Ethyl methanoate"))
parts.append(molecule(700, 130, 3, "Propyl methanoate"))
# Row 2: butyl, pentyl
parts.append(molecule(160, 330, 4, "Butyl methanoate"))
parts.append(molecule(520, 330, 5, "Pentyl methanoate"))

# Key
kx,ky=820,330
parts.append(f'<text x="{kx+20}" y="{ky-6}" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">Key</text>')
for i,(lab,col,hi,r) in enumerate([("H",H_COL,H_HI,R_H),("C",C_COL,C_HI,R_C),("O",O_COL,O_HI,R_O)]):
    yy=ky+24+i*40
    parts.append(atom(kx,yy,r,col,hi))
    parts.append(f'<text x="{kx+24}" y="{yy+5}" font-size="15" fill="#e8edf3">{lab}</text>')

parts.append('</svg>')
open(OUT,"w").write("\n".join(parts))
print("wrote",OUT)
