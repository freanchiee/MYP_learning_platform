'use client'

import EditableImage from '@/components/exam/EditableImage'
import LineGraph, { type LineGraphData } from '@/components/exam/figures/LineGraph'
import DataTable, { type DataTableData } from '@/components/exam/figures/DataTable'
import CircuitDiagram, { type CircuitDiagramData } from '@/components/exam/figures/CircuitDiagram'
import WaveDiagram, { type WaveDiagramData } from '@/components/exam/figures/WaveDiagram'
import GenericSVG, { type GenericSVGData } from '@/components/exam/figures/GenericSVG'

export interface QuestionImageProps {
  image_type: 'original' | 'code_rendered' | 'ai_generated' | 'text_only' | 'pending'
  src?: string | null
  generated_src?: string | null
  render_component?: string | null
  render_data?: unknown
  needs_review?: boolean
  /** Admin overlay — set true in the review dashboard only */
  show_review_badge?: boolean
  alt?: string
  className?: string
  style?: React.CSSProperties
}

function Placeholder({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-gray-400 text-sm py-8">
      {label ?? 'Image pending'}
    </div>
  )
}

function CodeRendered({
  render_component,
  render_data,
}: {
  render_component: string | null | undefined
  render_data: unknown
}) {
  switch (render_component) {
    case 'LineGraph':
      return <LineGraph data={render_data as LineGraphData} />
    case 'DataTable':
      return <DataTable data={render_data as DataTableData} />
    case 'CircuitDiagram':
      return <CircuitDiagram data={render_data as CircuitDiagramData} />
    case 'WaveDiagram':
      return <WaveDiagram data={render_data as WaveDiagramData} />
    case 'GenericSVG':
      return <GenericSVG data={render_data as GenericSVGData} />
    default:
      return <Placeholder label={`Unknown component: ${render_component ?? '—'}`} />
  }
}

export default function QuestionImage({
  image_type,
  src,
  generated_src,
  render_component,
  render_data,
  needs_review,
  show_review_badge = false,
  alt,
  className,
  style,
}: QuestionImageProps) {
  // 1. text_only → nothing
  if (image_type === 'text_only') return null

  let imageElement: React.ReactNode

  // 2. code_rendered → SVG component
  if (image_type === 'code_rendered') {
    imageElement = (
      <CodeRendered render_component={render_component} render_data={render_data} />
    )
  }
  // 3. ai_generated with a generated path → show the generated image
  else if (image_type === 'ai_generated' && generated_src) {
    imageElement = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={generated_src}
        alt={alt ?? 'Generated figure'}
        className={className}
        style={style}
      />
    )
  }
  // 4. original → EditableImage (preserves edit-mode toolbar)
  else if (image_type === 'original' && src) {
    imageElement = (
      <EditableImage
        src={src}
        alt={alt ?? 'Question figure'}
        className={className}
        style={style}
      />
    )
  }
  // 5. pending / missing / no src → placeholder
  else {
    imageElement = <Placeholder label={src ? 'Image pending' : undefined} />
  }

  // 6. Admin review badge overlay
  if (show_review_badge && needs_review) {
    return (
      <div className="relative">
        {imageElement}
        <span className="absolute top-2 right-2 bg-amber-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full select-none">
          Pending Review
        </span>
      </div>
    )
  }

  return <>{imageElement}</>
}
