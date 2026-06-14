#!/usr/bin/env python3
# page-07: perfume ester molecules evaporating from skin surface (decorative illustration).
import math, random
OUT="public/images/papers/chemistry-nov-2017/q2-perfume-evaporation.svg"
random.seed(7)

C_COL="#5b6168"; C_HI="#7c828a"; O_COL="#d6453f"; O_HI="#ef6b66"; H_COL="#eef1f5"; H_HI="#ffffff"; BOND="#aab2bb"

def atom(x,y,r,col,hi):
    return (f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" fill="{col}"/>'
            f'<circle cx="{x-r*0.32:.1f}" cy="{y-r*0.32:.1f}" r="{r*0.45:.1f}" fill="{hi}" opacity="0.5"/>')
def bond(x1,y1,x2,y2,w=3.2):
    return f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{BOND}" stroke-width="{w}" stroke-linecap="round"/>'

def small_ester(ox,oy,scale,rot,nC):
    """A small ester molecule HCOO-(CH2)n-CH3, simplified ball-stick, rotated."""
    rc=7*scale; ro=7.5*scale; rh=4.5*scale; step=20*scale
    s=[f'<g transform="translate({ox:.0f},{oy:.0f}) rotate({rot:.0f})">']
    # formyl C at 0,0; O double up; H left; ester O down-right
    s.append(bond(0,0,-4,-15*scale)); # to carbonyl O
    s.append(bond(0,0,-15*scale,2))   # to H
    s.append(bond(0,0,9*scale,14*scale)) # to ester O
    px,py=9*scale,14*scale
    up=True
    prev=(px,py)
    for i in range(nC):
        nx=prev[0]+step; ny=14*scale+(-6*scale if up else 8*scale)
        s.append(bond(prev[0],prev[1],nx,ny))
        s.append(bond(nx,ny,nx-2,ny-12*scale)); s.append(bond(nx,ny,nx+2,ny+12*scale))
        s.append(atom(nx-2,ny-12*scale,rh,H_COL,H_HI)); s.append(atom(nx+2,ny+12*scale,rh,H_COL,H_HI))
        s.append(atom(nx,ny,rc,C_COL,C_HI))
        prev=(nx,ny); up=not up
    s.append(atom(-4,-15*scale,ro,O_COL,O_HI))
    s.append(atom(-15*scale,2,rh,H_COL,H_HI))
    s.append(atom(9*scale,14*scale,ro,O_COL,O_HI))
    s.append(atom(0,0,rc,C_COL,C_HI))
    s.append('</g>')
    return "\n".join(s)

W=900; H=560
p=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="Arial, Helvetica, sans-serif">']
p.append('<defs>'
         '<linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">'
         '<stop offset="0" stop-color="#c79b78"/><stop offset="1" stop-color="#9c6f4f"/></linearGradient>'
         '<linearGradient id="skin2" x1="0" y1="0" x2="0" y2="1">'
         '<stop offset="0" stop-color="#b58a66"/><stop offset="1" stop-color="#8a5f42"/></linearGradient></defs>')

# top panel
p.append(f'<rect x="20" y="20" width="{W-40}" height="240" rx="8" fill="url(#skin)"/>')
# scattered molecules top
positions=[(140,90,1.2,-15,1),(330,70,1.0,10,2),(560,70,1.1,-20,1),(760,95,1.0,25,3),
           (110,180,1.0,30,2),(420,180,1.1,-10,1),(640,170,1.0,15,2),(820,180,0.9,-25,1),
           (250,140,0.9,40,1),(700,210,0.9,-30,2)]
for (x,y,s,r,n) in positions:
    p.append(small_ester(x,y,s,r,n))
p.append(f'<text x="{W/2}" y="155" text-anchor="middle" font-size="22" font-weight="bold" fill="#fff" stroke="#5a3a24" stroke-width="0.6">The molecules in the perfume</text>')
p.append(f'<text x="{W/2}" y="183" text-anchor="middle" font-size="22" font-weight="bold" fill="#fff" stroke="#5a3a24" stroke-width="0.6">start to evaporate and leave</text>')
p.append(f'<text x="{W/2}" y="211" text-anchor="middle" font-size="22" font-weight="bold" fill="#fff" stroke="#5a3a24" stroke-width="0.6">the surface of the skin</text>')

# bottom panel: After 1 hour - fewer, larger molecules near surface
p.append(f'<rect x="20" y="290" width="{W-40}" height="250" rx="8" fill="url(#skin2)"/>')
# skin surface line
p.append(f'<rect x="20" y="470" width="{W-40}" height="70" fill="#7a5238" opacity="0.55"/>')
p.append(f'<text x="60" y="330" font-size="22" font-weight="bold" fill="#fff" stroke="#5a3a24" stroke-width="0.6">After 1 hour</text>')
botpos=[(200,360,1.7,-8,1),(470,355,1.9,10,1),(720,360,1.5,-15,2),
        (300,500,1.6,5,1),(620,500,1.5,-10,1),(150,470,1.2,20,1),(820,485,1.2,-20,1)]
for (x,y,s,r,n) in botpos:
    p.append(small_ester(x,y,s,r,n))
p.append('</svg>')
open(OUT,"w").write("\n".join(p))
print("wrote",OUT)
