'use client'

import EditableImage from '@/components/exam/EditableImage'
import LineGraph, { type LineGraphData } from '@/components/exam/figures/LineGraph'
import DataTable, { type DataTableData } from '@/components/exam/figures/DataTable'
import CircuitDiagram, { type CircuitDiagramData } from '@/components/exam/figures/CircuitDiagram'
import WaveDiagram, { type WaveDiagramData } from '@/components/exam/figures/WaveDiagram'
import GenericSVG, { type GenericSVGData } from '@/components/exam/figures/GenericSVG'
import DemolitionCraneDiagram from '@/components/exam/figures/DemolitionCraneDiagram'
import SmokeAlarm from '@/components/exam/figures/SmokeAlarm'
import ChoroplethWorld, { type ChoroplethData } from '@/components/exam/figures/ChoroplethWorld'
import InteractiveChart, { type InteractiveChartData } from '@/components/exam/figures/InteractiveChart'
import SourceDocViewer, { type SourceDocData } from '@/components/exam/figures/SourceDocViewer'
import NetworkGraph, { type NetworkGraphData } from '@/components/exam/figures/NetworkGraph'
import SlideDeck, { type SlideDeckData } from '@/components/exam/figures/SlideDeck'
import InfoGraphicPanel, { type InfoGraphicPanelData } from '@/components/exam/figures/InfoGraphicPanel'
import TimelineScrubber, { type TimelineScrubberData } from '@/components/exam/figures/TimelineScrubber'
import DataTableInteractive, { type DataTableInteractiveData } from '@/components/exam/figures/DataTableInteractive'
import LocatedMap, { type LocatedMapData } from '@/components/exam/figures/LocatedMap'
import PieChart, { type PieChartData } from '@/components/exam/figures/PieChart'
import DragAnnotate, { type DragAnnotateData } from '@/components/exam/figures/DragAnnotate'
import ImageCompareSlider, { type ImageCompareSliderData } from '@/components/exam/figures/ImageCompareSlider'
import VennOverlap, { type VennOverlapData } from '@/components/exam/figures/VennOverlap'
// Interactive science artifacts — replace video/animation/simulation IB originals (physics + chemistry)
import OrbitSim, { type OrbitSimData } from '@/components/exam/figures/OrbitSim'
import DecaySim, { type DecaySimData } from '@/components/exam/figures/DecaySim'
import ProjectileSim, { type ProjectileSimData } from '@/components/exam/figures/ProjectileSim'
import OscillatorSim, { type OscillatorSimData } from '@/components/exam/figures/OscillatorSim'
import WaveSim, { type WaveSimData } from '@/components/exam/figures/WaveSim'
import CircuitSim, { type CircuitSimData } from '@/components/exam/figures/CircuitSim'
import GasLawSim, { type GasLawSimData } from '@/components/exam/figures/GasLawSim'
import DragSort, { type DragSortData } from '@/components/exam/figures/DragSort'
import ThermalSim, { type ThermalSimData } from '@/components/exam/figures/ThermalSim'
import GraphSim, { type GraphSimData } from '@/components/exam/figures/GraphSim'
import EchemCellSim, { type EchemCellSimData } from '@/components/exam/figures/EchemCellSim'
import ParticleSim, { type ParticleSimData } from '@/components/exam/figures/ParticleSim'
import SankeySim, { type SankeySimData } from '@/components/exam/figures/SankeySim'
import SpectrumSim, { type SpectrumSimData } from '@/components/exam/figures/SpectrumSim'
import RateSim, { type RateSimData } from '@/components/exam/figures/RateSim'
import FieldSim, { type FieldSimData } from '@/components/exam/figures/FieldSim'
import OpticsSim, { type OpticsSimData } from '@/components/exam/figures/OpticsSim'
import { resolveAssetUrl } from '@/lib/assets'

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
    case 'DemolitionCraneDiagram':
      return <DemolitionCraneDiagram className="w-full h-auto" />
    case 'SmokeAlarm':
    case 'Smoke Alarm':  // sidecar may have been saved with a space
      return <SmokeAlarm className="w-full h-auto" />
    case 'ChoroplethWorld':
      return <ChoroplethWorld data={render_data as ChoroplethData | undefined} />
    case 'InteractiveChart':
      return <InteractiveChart data={render_data as InteractiveChartData} />
    case 'SourceDocViewer':
      return <SourceDocViewer data={render_data as SourceDocData} />
    case 'NetworkGraph':
      return <NetworkGraph data={render_data as NetworkGraphData} />
    case 'SlideDeck':
      return <SlideDeck data={render_data as SlideDeckData} />
    case 'InfoGraphicPanel':
      return <InfoGraphicPanel data={render_data as InfoGraphicPanelData} />
    case 'TimelineScrubber':
      return <TimelineScrubber data={render_data as TimelineScrubberData} />
    case 'DataTableInteractive':
      return <DataTableInteractive data={render_data as DataTableInteractiveData} />
    // ── Geography pre-stubbed components (flesh out internals; see encode-humanities-paper/references/geography.md) ──
    case 'LocatedMap':
      return <LocatedMap data={render_data as LocatedMapData | undefined} />
    case 'PieChart':
      return <PieChart data={render_data as PieChartData | undefined} />
    case 'DragAnnotate':
      return <DragAnnotate data={render_data as DragAnnotateData | undefined} />
    case 'ImageCompareSlider':
      return <ImageCompareSlider data={render_data as ImageCompareSliderData | undefined} />
    case 'VennOverlap':
      return <VennOverlap data={render_data as VennOverlapData | undefined} />
    // ── Interactive science artifacts (physics + chemistry) ──
    case 'OrbitSim':
      return <OrbitSim data={render_data as OrbitSimData} />
    case 'DecaySim':
      return <DecaySim data={render_data as DecaySimData} />
    case 'ProjectileSim':
      return <ProjectileSim data={render_data as ProjectileSimData} />
    case 'OscillatorSim':
      return <OscillatorSim data={render_data as OscillatorSimData} />
    case 'WaveSim':
    case 'SoundDistanceSim':
      return <WaveSim data={render_data as WaveSimData} />
    case 'CircuitSim':
      return <CircuitSim data={render_data as CircuitSimData} />
    case 'GasLawSim':
      return <GasLawSim data={render_data as GasLawSimData} />
    case 'DragSort':
      return <DragSort data={render_data as DragSortData} />
    case 'ThermalSim':
      return <ThermalSim data={render_data as ThermalSimData} />
    case 'GraphSim':
      return <GraphSim data={render_data as GraphSimData} />
    case 'EchemCellSim':
      return <EchemCellSim data={render_data as EchemCellSimData} />
    case 'ParticleSim':
      return <ParticleSim data={render_data as ParticleSimData} />
    case 'SankeySim':
      return <SankeySim data={render_data as SankeySimData} />
    case 'SpectrumSim':
      return <SpectrumSim data={render_data as SpectrumSimData} />
    case 'RateSim':
      return <RateSim data={render_data as RateSimData} />
    case 'FieldSim':
      return <FieldSim data={render_data as FieldSimData} />
    case 'OpticsSim':
      return <OpticsSim data={render_data as OpticsSimData} />
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
        src={resolveAssetUrl(generated_src)}
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
        src={resolveAssetUrl(src)}
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
