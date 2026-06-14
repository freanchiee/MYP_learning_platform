"""
graph_svg.py — generate numerically ACCURATE scientific graphs as SVG.

Why this exists
---------------
IB / MYP exam graphs are not decoration. Later parts of the SAME question routinely
ask the student to read a value off the graph: the period of a wave, the x-intercept
of a best-fit line, the volume at p = 75 kPa, the gradient. If the axis range, the
tick values, the gridline spacing, or a single plotted point is off, the question
becomes unanswerable or gives a wrong answer.

Hand-placing pixels (x="217" y="186") cannot achieve this — you end up guessing.
Instead, declare the graph in REAL UNITS (axis min/max, explicit tick values, data
points as (value, value)) and let this module map units → pixels. That is the whole
point: the numbers are correct by construction.

Core API
--------
    from graph_svg import Graph, Axis, svg_document

    g = Graph(
        x=Axis(0, 450, ticks=range(0,451,50), label="Pressure / kPa"),
        y=Axis(0, 160, ticks=range(0,161,20), label="Volume / cm³"),
        width=320, height=260, title="",
    )
    g.grid()                       # light gridlines at every tick
    g.axes()                       # axis lines, ticks, tick labels, axis titles
    g.scatter([(100,110),(150,73),(200,55),(250,44),(300,37),(350,31),(400,28)])
    g.curve(lambda p: 11000/p, x_from=70)          # optional model line
    print(svg_document([g]))       # full <svg> string

Compose several panels (e.g. options A–D, or a 3-graph figure) with svg_document(
[g1,g2,g3,g4], cols=2). Each Graph keeps its own real-unit coordinate system.

Tips
----
* Pass tick values EXACTLY as they appear on the original (read them off the image).
  Use `tick_labels={1000:"1000", ...}` only when the printed label differs from the
  number (e.g. scientific notation, or "1/V × 10⁻³").
* For a wave: Axis(y) spanning negatives makes the x-axis cross at 0 automatically.
* curve() takes a function of x in real units — sine, 1/x, m*x+c — sampled densely,
  so the shape is mathematically faithful, not eyeballed.
* Colours are deliberately distinct from the IB original: this module defaults to
  TEAL lines/curves and thin '×' cross markers (not filled dots), so a recreation
  never reads as a screenshot. Override per-call with color=/marker= if needed.
"""
import math

# Default palette — deliberately UNLIKE the IB originals (royal-blue dots, red curves),
# so a recreation never reads as a screenshot of the real paper. Teal lines/curves and
# thin cross ("×") data markers instead of filled dots.
DATA_COLOR = "#0b7285"   # deep teal — lines, curves, and markers


def _fmt(v):
    if isinstance(v, float) and v.is_integer():
        return str(int(v))
    return str(v)


class Axis:
    def __init__(self, vmin, vmax, ticks=None, label="", tick_labels=None, minor=None):
        self.vmin = float(vmin)
        self.vmax = float(vmax)
        self.ticks = list(ticks) if ticks is not None else []
        self.tick_labels = tick_labels or {}
        self.label = label
        # minor = spacing (in real units) of the fine sub-gridlines BETWEEN the major
        # labelled ticks. IB graphs almost always print these (e.g. majors every 10,
        # minors every 2). Omitting them makes the recreation read as a different graph
        # and makes precise read-off harder. Always set this to match the original.
        self.minor = minor

    def label_for(self, v):
        if v in self.tick_labels:
            return self.tick_labels[v]
        return _fmt(v)

    def minor_positions(self):
        if not self.minor:
            return []
        out = []
        start = math.ceil(self.vmin / self.minor - 1e-9) * self.minor
        v = start
        while v <= self.vmax + 1e-9:
            out.append(round(v, 10))
            v += self.minor
        return out


class Graph:
    def __init__(self, x, y, width=340, height=280, title="",
                 pad_left=58, pad_bottom=46, pad_top=18, pad_right=18):
        self.x = x
        self.y = y
        self.W = width
        self.H = height
        self.title = title
        self.pl, self.pb, self.pt, self.pr = pad_left, pad_bottom, pad_top, pad_right
        self.parts = []
        self.x0, self.x1 = self.pl, self.W - self.pr          # left, right (pixels)
        self.y0, self.y1 = self.H - self.pb, self.pt          # bottom, top (pixels)

    def px(self, vx, vy):
        fx = (vx - self.x.vmin) / (self.x.vmax - self.x.vmin)
        fy = (vy - self.y.vmin) / (self.y.vmax - self.y.vmin)
        return (self.x0 + fx * (self.x1 - self.x0),
                self.y0 + fy * (self.y1 - self.y0))

    # axis crossing positions (cross at 0 when 0 is inside the range)
    def _axis_y_value(self):
        return 0 if (self.y.vmin < 0 < self.y.vmax) else self.y.vmin

    def grid(self, color="#d7dce0", minor_color="#eef1f3"):
        # minor sub-gridlines first (drawn under the majors) — match Axis.minor to the
        # original's fine divisions so the recreation reads identically and supports
        # precise value read-off.
        for tv in self.x.minor_positions():
            x, _ = self.px(tv, self.y.vmin)
            self.parts.append(f'<line x1="{x:.1f}" y1="{self.y1:.1f}" x2="{x:.1f}" y2="{self.y0:.1f}" stroke="{minor_color}" stroke-width="0.5"/>')
        for tv in self.y.minor_positions():
            _, yy = self.px(self.x.vmin, tv)
            self.parts.append(f'<line x1="{self.x0:.1f}" y1="{yy:.1f}" x2="{self.x1:.1f}" y2="{yy:.1f}" stroke="{minor_color}" stroke-width="0.5"/>')
        # major gridlines at the labelled ticks
        for tv in self.x.ticks:
            x, _ = self.px(tv, self.y.vmin)
            self.parts.append(f'<line x1="{x:.1f}" y1="{self.y1:.1f}" x2="{x:.1f}" y2="{self.y0:.1f}" stroke="{color}" stroke-width="0.8"/>')
        for tv in self.y.ticks:
            _, yy = self.px(self.x.vmin, tv)
            self.parts.append(f'<line x1="{self.x0:.1f}" y1="{yy:.1f}" x2="{self.x1:.1f}" y2="{yy:.1f}" stroke="{color}" stroke-width="0.8"/>')

    def axes(self, color="#333"):
        axv = self._axis_y_value()
        _, ax_y_px = self.px(self.x.vmin, axv)
        # y-axis (vertical, at left)
        self.parts.append(f'<line x1="{self.x0:.1f}" y1="{self.y1:.1f}" x2="{self.x0:.1f}" y2="{self.y0:.1f}" stroke="{color}" stroke-width="1.5"/>')
        # x-axis (horizontal, at y=0 or bottom)
        self.parts.append(f'<line x1="{self.x0:.1f}" y1="{ax_y_px:.1f}" x2="{self.x1:.1f}" y2="{ax_y_px:.1f}" stroke="{color}" stroke-width="1.5"/>')
        # x ticks + labels
        for tv in self.x.ticks:
            x, _ = self.px(tv, axv)
            self.parts.append(f'<line x1="{x:.1f}" y1="{ax_y_px:.1f}" x2="{x:.1f}" y2="{ax_y_px + 4:.1f}" stroke="{color}" stroke-width="1"/>')
            self.parts.append(f'<text x="{x:.1f}" y="{ax_y_px + 16:.1f}" font-size="10" fill="#333" text-anchor="middle">{self.x.label_for(tv)}</text>')
        # y ticks + labels
        for tv in self.y.ticks:
            _, yy = self.px(self.x.vmin, tv)
            self.parts.append(f'<line x1="{self.x0 - 4:.1f}" y1="{yy:.1f}" x2="{self.x0:.1f}" y2="{yy:.1f}" stroke="{color}" stroke-width="1"/>')
            self.parts.append(f'<text x="{self.x0 - 7:.1f}" y="{yy + 3.5:.1f}" font-size="10" fill="#333" text-anchor="end">{self.y.label_for(tv)}</text>')
        # axis titles
        cx = (self.x0 + self.x1) / 2
        cy = (self.y0 + self.y1) / 2
        self.parts.append(f'<text x="{cx:.1f}" y="{self.H - 6:.1f}" font-size="11" fill="#222" text-anchor="middle">{self.x.label}</text>')
        self.parts.append(f'<text x="14" y="{cy:.1f}" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 {cy:.1f})">{self.y.label}</text>')
        if self.title:
            self.parts.append(f'<text x="{cx:.1f}" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">{self.title}</text>')

    def scatter(self, points, color=None, marker="cross", size=4.0, stroke=1.3):
        """Plot data points. Default marker is a thin '×' cross (not a filled dot) in
        teal, so the figure is visibly distinct from the IB original's blue diamonds.
        marker: 'cross' (×), 'plus' (+), or 'dot' (filled circle)."""
        color = color or DATA_COLOR
        for vx, vy in points:
            x, y = self.px(vx, vy)
            if marker == "dot":
                self.parts.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{size * 0.7:.1f}" fill="{color}"/>')
            elif marker == "plus":
                self.parts.append(f'<line x1="{x - size:.1f}" y1="{y:.1f}" x2="{x + size:.1f}" y2="{y:.1f}" stroke="{color}" stroke-width="{stroke}"/>')
                self.parts.append(f'<line x1="{x:.1f}" y1="{y - size:.1f}" x2="{x:.1f}" y2="{y + size:.1f}" stroke="{color}" stroke-width="{stroke}"/>')
            else:  # 'cross'  ×
                self.parts.append(f'<line x1="{x - size:.1f}" y1="{y - size:.1f}" x2="{x + size:.1f}" y2="{y + size:.1f}" stroke="{color}" stroke-width="{stroke}"/>')
                self.parts.append(f'<line x1="{x - size:.1f}" y1="{y + size:.1f}" x2="{x + size:.1f}" y2="{y - size:.1f}" stroke="{color}" stroke-width="{stroke}"/>')

    def polyline(self, points, color=None, width=2.0):
        """Straight segments joining points (dot-to-dot). Use ONLY when the original
        literally joins points with straight rules. If the original draws a SMOOTH
        trend/best-fit curve through the points, use smooth() instead — recreating a
        smooth curve as polyline is a common, visible error."""
        color = color or DATA_COLOR
        pts = " ".join(f"{x:.1f},{y:.1f}" for x, y in (self.px(vx, vy) for vx, vy in points))
        self.parts.append(f'<polyline points="{pts}" fill="none" stroke="{color}" stroke-width="{width}"/>')

    def smooth(self, points, color=None, width=2.0, tension=1.0):
        """Smooth curve THROUGH the given value-points (Catmull-Rom → cubic Bézier).
        Use this when the original shows a hand-drawn smooth trend/best-fit curve rather
        than straight segments. The curve passes exactly through every point, so read-off
        values stay correct, while the interpolation between them is smooth.

        IMPORTANT nuances to honour by choosing/placing points well:
        - End gradient: if the original curve FLATTENS (gradient → 0) at one end, add a
          near-horizontal pair of points there so the spline flattens too.
        - Plateau-then-turn (e.g. a cooling curve that bottoms out, holds, then rises):
          include 2–3 points across the flat minimum so the curve plateaus before turning,
          instead of a single sharp V.
        - Domain: pass only the points within the real data domain — do NOT add a (0,0)
          point unless the original line actually reaches the origin."""
        color = color or DATA_COLOR
        pts = [self.px(vx, vy) for vx, vy in points]
        if len(pts) < 3:
            d = "M" + " L".join(f"{x:.1f},{y:.1f}" for x, y in pts)
            self.parts.append(f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{width}"/>')
            return
        d = f"M{pts[0][0]:.1f},{pts[0][1]:.1f}"
        n = len(pts)
        for i in range(n - 1):
            p0 = pts[i - 1] if i > 0 else pts[0]
            p1 = pts[i]
            p2 = pts[i + 1]
            p3 = pts[i + 2] if i + 2 < n else pts[i + 1]
            c1x = p1[0] + (p2[0] - p0[0]) / 6.0 * tension
            c1y = p1[1] + (p2[1] - p0[1]) / 6.0 * tension
            c2x = p2[0] - (p3[0] - p1[0]) / 6.0 * tension
            c2y = p2[1] - (p3[1] - p1[1]) / 6.0 * tension
            d += f" C{c1x:.1f},{c1y:.1f} {c2x:.1f},{c2y:.1f} {p2[0]:.1f},{p2[1]:.1f}"
        self.parts.append(f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{width}"/>')

    def line(self, p1, p2, color=None, width=2.0):
        color = color or DATA_COLOR
        x1, y1 = self.px(*p1)
        x2, y2 = self.px(*p2)
        self.parts.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{color}" stroke-width="{width}"/>')

    def curve(self, func, x_from=None, x_to=None, color=None, width=2.0, n=300, clamp=True):
        color = color or DATA_COLOR
        a = self.x.vmin if x_from is None else x_from
        b = self.x.vmax if x_to is None else x_to
        pts = []
        for i in range(n + 1):
            vx = a + (b - a) * i / n
            vy = func(vx)
            if vy is None:
                continue
            if clamp:
                vy = max(self.y.vmin, min(self.y.vmax, vy))
            pts.append(self.px(vx, vy))
        s = " ".join(f"{x:.1f},{y:.1f}" for x, y in pts)
        self.parts.append(f'<polyline points="{s}" fill="none" stroke="{color}" stroke-width="{width}"/>')

    def text(self, vx, vy, s, color="#222", size=11, anchor="middle"):
        x, y = self.px(vx, vy)
        self.parts.append(f'<text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{color}" text-anchor="{anchor}">{s}</text>')

    def panel_label(self, s):
        """Big letter (A/B/C/D) in the top-left, for multi-option figures."""
        self.parts.append(f'<text x="{self.x0 - 40:.1f}" y="20" font-size="15" font-weight="bold" fill="#222">{s}</text>')

    def render(self, ox=0, oy=0):
        body = "".join(self.parts)
        return f'<g transform="translate({ox},{oy})">{body}</g>'


def svg_document(graphs, cols=1, gap=12, bg="#ffffff"):
    rows = math.ceil(len(graphs) / cols)
    cw = max(g.W for g in graphs)
    ch = max(g.H for g in graphs)
    W = cols * cw + (cols + 1) * gap
    H = rows * ch + (rows + 1) * gap
    items = []
    for i, g in enumerate(graphs):
        r, c = divmod(i, cols)
        items.append(g.render(gap + c * (cw + gap), gap + r * (ch + gap)))
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.0f} {H:.0f}" '
        f'font-family="Arial, Helvetica, sans-serif">'
        f'<rect width="{W:.0f}" height="{H:.0f}" fill="{bg}"/>'
        + "".join(items) + "</svg>"
    )
