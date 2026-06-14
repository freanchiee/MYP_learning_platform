export interface GenericSVGData {
  /** Complete SVG element as a string, e.g. '<svg viewBox="0 0 200 200">...</svg>' */
  svg: string
}

/** Strips script tags from an SVG string to prevent XSS */
function sanitizeSvg(svg: string): string {
  return svg.replace(/<script[\s\S]*?<\/script>/gi, '')
}

export default function GenericSVG({ data }: { data: GenericSVGData }) {
  return (
    <div
      className="figure-surface w-full overflow-auto p-2"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: sanitizeSvg(data.svg) }}
    />
  )
}
