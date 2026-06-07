'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

type Allele = string // single character

interface Cross {
  p1a1: Allele; p1a2: Allele
  p2a1: Allele; p2a2: Allele
}

function getPunnett(cross: Cross): string[][] {
  const { p1a1, p1a2, p2a1, p2a2 } = cross
  const row1 = [`${p1a1}${p2a1}`, `${p1a1}${p2a2}`]
  const row2 = [`${p1a2}${p2a1}`, `${p1a2}${p2a2}`]
  return [row1, row2]
}

function isDominant(allele: string) {
  return allele === allele.toUpperCase() && allele.trim() !== ''
}

function phenotypeOf(genotype: string, trait: string, trait2: string): string {
  const [a, b] = [genotype[0], genotype[1]]
  if (!a || !b) return '—'
  const dom = isDominant(a) || isDominant(b)
  return dom ? trait : trait2
}

function colorForGenotype(g: string): string {
  if (!g[0] || !g[1]) return 'rgba(31,54,116,0.05)'
  const dom1 = isDominant(g[0])
  const dom2 = isDominant(g[1])
  if (dom1 && dom2) return 'rgba(31,54,116,0.13)'   // homozygous dominant
  if (dom1 || dom2) return 'rgba(84,124,164,0.13)'   // heterozygous
  return 'rgba(195,40,45,0.10)'                       // homozygous recessive
}

export default function PunnettSquare() {
  const [p1a1, setP1a1] = useState('T')
  const [p1a2, setP1a2] = useState('t')
  const [p2a1, setP2a1] = useState('T')
  const [p2a2, setP2a2] = useState('t')
  const [dominantTrait, setDominantTrait] = useState('Tall')
  const [recessiveTrait, setRecessiveTrait] = useState('Short')

  const cross = { p1a1, p1a2, p2a1, p2a2 }
  const grid = getPunnett(cross)
  const allCells = grid.flat()

  const ratios = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const g of allCells) {
      const pheno = phenotypeOf(g, dominantTrait, recessiveTrait)
      counts[pheno] = (counts[pheno] ?? 0) + 1
    }
    return counts
  }, [allCells, dominantTrait, recessiveTrait])

  const genotypeCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const g of allCells) {
      // normalize: TT and TT, Tt and tT → same key
      const key = isDominant(g[0]) && !isDominant(g[1]) ? g[0] + g[1]
        : !isDominant(g[0]) && isDominant(g[1]) ? g[1] + g[0]
        : g
      counts[key] = (counts[key] ?? 0) + 1
    }
    return counts
  }, [allCells])

  const AllelInput = ({ val, set, label }: { val: string; set: (v: string) => void; label: string }) => (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-[10px] font-medium" style={{ color: 'rgba(31,54,116,0.5)' }}>{label}</span>
      <input
        type="text"
        maxLength={1}
        value={val}
        onChange={e => set(e.target.value.slice(-1) || val)}
        className="w-9 h-9 text-center text-base font-bold rounded-lg border-2 outline-none"
        style={{ borderColor: '#1f3674', color: '#1f3674', background: 'rgba(31,54,116,0.05)' }}
      />
    </div>
  )

  return (
    <div className="space-y-4 select-none">
      {/* Parent Inputs */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl" style={{ background: 'rgba(31,54,116,0.05)', border: '1px solid rgba(31,54,116,0.12)' }}>
          <p className="text-xs font-bold mb-2" style={{ color: '#1f3674' }}>Parent 1 (P₁)</p>
          <div className="flex gap-3 justify-center">
            <AllelInput val={p1a1} set={setP1a1} label="Allele 1" />
            <AllelInput val={p1a2} set={setP1a2} label="Allele 2" />
          </div>
        </div>
        <div className="p-3 rounded-xl" style={{ background: 'rgba(84,124,164,0.07)', border: '1px solid rgba(84,124,164,0.15)' }}>
          <p className="text-xs font-bold mb-2" style={{ color: '#547ca4' }}>Parent 2 (P₂)</p>
          <div className="flex gap-3 justify-center">
            <AllelInput val={p2a1} set={setP2a1} label="Allele 1" />
            <AllelInput val={p2a2} set={setP2a2} label="Allele 2" />
          </div>
        </div>
      </div>

      {/* Punnett Grid */}
      <div className="flex justify-center">
        <div>
          {/* Column headers */}
          <div className="flex">
            <div className="w-14 h-10" />
            {[p2a1, p2a2].map((a, i) => (
              <div key={i} className="w-20 h-10 flex items-center justify-center text-lg font-bold" style={{ color: '#547ca4' }}>
                {a}
              </div>
            ))}
          </div>
          {grid.map((row, ri) => (
            <div key={ri} className="flex">
              {/* Row header */}
              <div className="w-14 h-16 flex items-center justify-center text-lg font-bold" style={{ color: '#1f3674' }}>
                {ri === 0 ? p1a1 : p1a2}
              </div>
              {row.map((cell, ci) => (
                <motion.div
                  key={ci}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: (ri * 2 + ci) * 0.07, type: 'spring', stiffness: 260, damping: 20 }}
                  className="w-20 h-16 flex flex-col items-center justify-center rounded-lg m-0.5"
                  style={{
                    background: colorForGenotype(cell),
                    border: '1.5px solid rgba(31,54,116,0.15)',
                  }}
                >
                  <span className="text-base font-bold" style={{ color: '#1f3674' }}>{cell}</span>
                  <span className="text-[10px] font-medium mt-0.5" style={{ color: '#547ca4' }}>
                    {phenotypeOf(cell, dominantTrait, recessiveTrait)}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Trait labels */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Dominant phenotype', val: dominantTrait, set: setDominantTrait, color: '#1f3674' },
          { label: 'Recessive phenotype', val: recessiveTrait, set: setRecessiveTrait, color: '#c3282d' },
        ].map(({ label, val, set, color }) => (
          <div key={label}>
            <label className="text-[10px] font-semibold block mb-1" style={{ color: 'rgba(31,54,116,0.55)' }}>{label}</label>
            <input
              type="text"
              value={val}
              onChange={e => set(e.target.value)}
              className="w-full px-2 py-1 text-xs rounded-lg border outline-none"
              style={{ borderColor: color, color, background: `rgba(${color === '#1f3674' ? '31,54,116' : '195,40,45'},0.04)` }}
            />
          </div>
        ))}
      </div>

      {/* Ratios */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl" style={{ background: 'rgba(173,241,196,0.15)', border: '1px solid rgba(173,241,196,0.35)' }}>
          <p className="text-xs font-bold mb-2" style={{ color: '#274e68' }}>Phenotype Ratio</p>
          {Object.entries(ratios).map(([pheno, count]) => (
            <div key={pheno} className="flex justify-between text-xs">
              <span style={{ color: '#274e68' }}>{pheno}</span>
              <span className="font-mono font-bold" style={{ color: '#1f3674' }}>{count}/4 ({count * 25}%)</span>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-xl" style={{ background: 'rgba(31,54,116,0.05)', border: '1px solid rgba(31,54,116,0.12)' }}>
          <p className="text-xs font-bold mb-2" style={{ color: '#1f3674' }}>Genotype Ratio</p>
          {Object.entries(genotypeCounts).map(([g, count]) => (
            <div key={g} className="flex justify-between text-xs">
              <span className="font-mono" style={{ color: '#1f3674' }}>{g}</span>
              <span className="font-mono font-bold" style={{ color: '#547ca4' }}>{count}/4</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
