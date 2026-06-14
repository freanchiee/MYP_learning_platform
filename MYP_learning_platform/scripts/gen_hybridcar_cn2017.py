#!/usr/bin/env python3
# page-32: hybrid car schematic (top: hybrid; bottom: plug-in hybrid) for chemistry-nov-2017 Q7.
OUT="public/images/papers/chemistry-nov-2017/q7-hybrid-car.svg"

def car(ox, oy, body_top, body_bot, caption, plugin):
    """Draw a side-view sedan with labelled drivetrain. body colours given."""
    s=[f'<g transform="translate({ox},{oy})">']
    # car body
    s.append(f'<defs>')
    s.append(f'</defs>')
    s.append(f'<path d="M 30 120 '
             f'C 60 70 120 60 180 58 '
             f'C 230 30 320 30 380 60 '
             f'C 440 62 480 80 500 120 '
             f'L 500 150 L 30 150 Z" '
             f'fill="{body_top}" stroke="#444" stroke-width="1.5"/>')
    # roof shading
    s.append(f'<path d="M 180 58 C 230 34 320 34 380 60 L 360 92 L 200 92 Z" fill="{body_bot}" opacity="0.55"/>')
    # windows
    s.append('<path d="M 200 64 L 255 64 L 255 90 L 210 90 Z" fill="#cfe6f2" stroke="#7a8a96"/>')
    s.append('<path d="M 268 64 L 350 64 L 360 90 L 268 90 Z" fill="#cfe6f2" stroke="#7a8a96"/>')
    # wheels
    for wx in (120, 400):
        s.append(f'<circle cx="{wx}" cy="150" r="34" fill="#2b2f36"/>')
        s.append(f'<circle cx="{wx}" cy="150" r="20" fill="#c7ccd2"/>')
        s.append(f'<circle cx="{wx}" cy="150" r="6" fill="#7a828c"/>')
        for a in range(0,360,45):
            import math
            dx=math.cos(math.radians(a))*16; dy=math.sin(math.radians(a))*16
            s.append(f'<line x1="{wx}" y1="150" x2="{wx+dx:.0f}" y2="{150+dy:.0f}" stroke="#9aa0a8" stroke-width="3"/>')

    # label box helper
    def lab(x,y,w,text,fill):
        return (f'<rect x="{x}" y="{y}" width="{w}" height="26" rx="4" fill="#10131a" stroke="{fill}" stroke-width="2"/>'
                f'<text x="{x+w/2}" y="{y+18}" text-anchor="middle" font-size="15" font-weight="bold" fill="#ffffff">{text}</text>')
    # Battery (front-left), Motor (front-right wait reference: Battery left, Motor right)
    s.append(lab(70,108,96,"Battery","#3b5bd6"))
    s.append(lab(360,108,96,"Motor","#3b5bd6"))
    s.append(lab(180,138,110,"Fuel tank","#3aa54a"))
    s.append(lab(360,138,96,"Engine","#3aa54a"))
    # blue arrow battery<->motor
    s.append('<line x1="168" y1="121" x2="358" y2="121" stroke="#3b5bd6" stroke-width="6" marker-end="url(#bluea)" marker-start="url(#blueas)"/>')
    # green arrow fuel tank -> engine
    s.append('<line x1="292" y1="151" x2="358" y2="151" stroke="#3aa54a" stroke-width="6" marker-end="url(#greena)"/>')

    # petrol station icon + green pipe down into fuel tank
    s.append('<g transform="translate(470,-30)">'
             '<rect x="0" y="0" width="34" height="46" rx="4" fill="#3aa54a"/>'
             '<rect x="6" y="6" width="22" height="14" fill="#bff0c4"/>'
             '<path d="M 34 14 q 12 0 12 12 l 0 14" fill="none" stroke="#3aa54a" stroke-width="5"/>'
             '<circle cx="46" cy="42" r="4" fill="#3aa54a"/></g>')
    s.append('<text x="470" y="-44" text-anchor="middle" font-size="15" font-weight="bold" fill="#2b3a4a">Petrol station</text>')
    s.append('<path d="M 487 16 L 487 90 L 290 90 L 290 138" fill="none" stroke="#3aa54a" stroke-width="5" marker-end="url(#greena)"/>')

    if plugin:
        # electricity plug icon + blue cable to battery
        s.append('<g transform="translate(60,-44)">'
                 '<rect x="0" y="0" width="34" height="46" rx="6" fill="#3b5bd6"/>'
                 '<text x="17" y="20" text-anchor="middle" font-size="16" fill="#fff" font-weight="bold">e</text>'
                 '<circle cx="11" cy="34" r="3" fill="#fff"/><circle cx="23" cy="34" r="3" fill="#fff"/></g>')
        s.append('<text x="35" y="-54" text-anchor="middle" font-size="15" font-weight="bold" fill="#2b3a4a">Electricity</text>')
        s.append('<path d="M 55 -10 C 30 20 60 70 118 108" fill="none" stroke="#3b5bd6" stroke-width="5" marker-end="url(#bluea)"/>')

    s.append(f'<text x="265" y="200" text-anchor="middle" font-size="13" fill="#33475b">{caption}</text>')
    s.append('</g>')
    return "\n".join(s)

W=620; H=560
p=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="Arial, Helvetica, sans-serif">']
p.append('<defs>'
         '<marker id="bluea" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#3b5bd6"/></marker>'
         '<marker id="blueas" markerWidth="9" markerHeight="9" refX="3" refY="4.5" orient="auto"><path d="M9,0 L0,4.5 L9,9 Z" fill="#3b5bd6"/></marker>'
         '<marker id="greena" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#3aa54a"/></marker>'
         '</defs>')
p.append(f'<rect width="{W}" height="{H}" fill="#ffffff"/>')
p.append(f'<text x="{W/2}" y="28" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2d3d">Hybrid &amp; plug-in hybrid cars</text>')

p.append(car(50, 90, "#e04a3c", "#b5392d", "A hybrid car is a cross between a petrol car and an electric car.", False))
p.append(f'<line x1="40" y1="320" x2="{W-40}" y2="320" stroke="#1f2d3d" stroke-width="3"/>')
p.append(car(50, 360, "#c2c7cd", "#9aa0a8", "A plug-in hybrid can be charged from mains electricity.", True))

p.append('</svg>')
open(OUT,"w").write("\n".join(p))
print("wrote",OUT)
