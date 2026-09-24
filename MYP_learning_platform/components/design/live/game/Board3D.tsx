'use client'

// The 3D board for Sustainability Check (three.js). It is a view, nothing more:
// it draws whatever the host's GameState says. The world itself is the
// feedback — a low-poly globe that browns and smogs as the class's
// externality grows and greens again as carbon debt is paid down, with pawns
// that hop tile by tile.

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { BOARD, ROLES, SECTOR_META, tilePosition, type RoleKey } from '@/lib/design-live/sustainability'

export interface PawnInfo { id: string; role: RoleKey; pos: number; name: string }

interface Props {
  pawns: PawnInfo[]
  /** 0..1 how healthy the world looks */
  health: number
  /** 0..1 how smoggy */
  smog: number
  /** tile to highlight (e.g. where the active student landed) */
  activePos?: number | null
  /** the viewer's own pawn gets a ring */
  youId?: string | null
  height?: number
}

const N_SMOKE = 140
const N_TREES = 28
const HALF = 8

function emojiTexture(emoji: string, size = 128): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = c.height = size
  const ctx = c.getContext('2d')!
  ctx.font = `${size * 0.72}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(emoji, size / 2, size / 2 + size * 0.04)
  const t = new THREE.CanvasTexture(c)
  t.anisotropy = 4
  return t
}

const lerpColor = (a: THREE.Color, b: THREE.Color, t: number) => new THREE.Color().copy(a).lerp(b, t)

export default function Board3D({ pawns, health, smog, activePos = null, youId = null, height = 460 }: Props) {
  const mountRef = useRef<HTMLDivElement>(null)
  const live = useRef({ pawns, health, smog, activePos, youId })
  const [failed, setFailed] = useState(false)
  live.current = { pawns, health, smog, activePos, youId }

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    } catch {
      setFailed(true)
      return undefined
    }
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    mount.appendChild(renderer.domElement)
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.touchAction = 'pan-y'

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x0e1a14, 32, 62)
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200)

    scene.add(new THREE.HemisphereLight(0xdfeee0, 0x2a2a20, 1.05))
    const sun = new THREE.DirectionalLight(0xfff2d0, 1.6)
    sun.position.set(10, 18, 8)
    scene.add(sun)

    const disposables: { dispose: () => void }[] = []
    const track = <T extends { dispose: () => void }>(o: T): T => { disposables.push(o); return o }

    // Platform
    const platformMat = track(new THREE.MeshStandardMaterial({ color: 0x6b5a45, roughness: 0.95 }))
    const platform = new THREE.Mesh(track(new THREE.CylinderGeometry(14.5, 15.2, 0.7, 64)), platformMat)
    platform.position.y = -0.45
    scene.add(platform)

    // Tiles
    const tileMeshes: THREE.Mesh[] = []
    const tileGeo = track(new THREE.BoxGeometry(2.7, 0.5, 2.7))
    const iconTex: Record<string, THREE.CanvasTexture> = {}
    BOARD.forEach((space, i) => {
      const meta = SECTOR_META[space.sector]
      const mat = track(new THREE.MeshStandardMaterial({ color: new THREE.Color(meta.color), roughness: 0.6, emissive: new THREE.Color(meta.color), emissiveIntensity: 0 }))
      const m = new THREE.Mesh(tileGeo, mat)
      const p = tilePosition(i, BOARD.length, HALF)
      m.position.set(p.x, 0.05, p.z)
      scene.add(m)
      tileMeshes.push(m)
      const tex = (iconTex[meta.icon] ||= track(emojiTexture(meta.icon)))
      const icon = new THREE.Mesh(track(new THREE.PlaneGeometry(1.5, 1.5)), track(new THREE.MeshBasicMaterial({ map: tex, transparent: true })))
      icon.rotation.x = -Math.PI / 2
      icon.position.set(0, 0.27, 0)
      m.add(icon)
    })

    // Globe: low-poly, vertex-coloured so land and sea can each decay
    const globeGeo = track(new THREE.IcosahedronGeometry(3.4, 2)).toNonIndexed()
    disposables.push(globeGeo)
    const faceCount = globeGeo.attributes.position.count / 3
    const landFace: boolean[] = []
    const seed = (i: number) => { const s = Math.sin(i * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s) }
    for (let f = 0; f < faceCount; f++) landFace.push(seed(Math.floor(f / 3) * 7 + 1) > 0.42)
    globeGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(faceCount * 9), 3))
    const globe = new THREE.Mesh(globeGeo, track(new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.85 })))
    globe.position.y = 4.4
    scene.add(globe)
    const cLandGood = new THREE.Color(0x2f9e5f), cLandBad = new THREE.Color(0x7a5a34)
    const cSeaGood = new THREE.Color(0x2c7fa8), cSeaBad = new THREE.Color(0x6b6c50)
    let paintedHealth = -1
    const paintGlobe = (h: number) => {
      const col = globeGeo.attributes.color as THREE.BufferAttribute
      for (let f = 0; f < faceCount; f++) {
        const jitter = (seed(f) - 0.5) * 0.12
        const base = landFace[f] ? lerpColor(cLandBad, cLandGood, h) : lerpColor(cSeaBad, cSeaGood, h)
        base.offsetHSL(0, 0, jitter)
        for (let v = 0; v < 3; v++) col.setXYZ(f * 3 + v, base.r, base.g, base.b)
      }
      col.needsUpdate = true
      paintedHealth = h
    }

    // Chimneys + smoke
    const chimneyMat = track(new THREE.MeshStandardMaterial({ color: 0x4a4038, roughness: 0.9 }))
    const chimneyGeo = track(new THREE.CylinderGeometry(0.35, 0.5, 2.6, 10))
    const chimneys: THREE.Vector3[] = []
    ;[[-4.6, -1.5], [4.4, -2.2], [-2.5, 4.4], [3.2, 3.9]].forEach(([x, z]) => {
      const c = new THREE.Mesh(chimneyGeo, chimneyMat)
      c.position.set(x, 1.0, z)
      scene.add(c)
      chimneys.push(new THREE.Vector3(x, 2.4, z))
    })
    const smokePos = new Float32Array(N_SMOKE * 3)
    const smokeAge = new Float32Array(N_SMOKE)
    const smokeSrc = new Uint8Array(N_SMOKE)
    for (let i = 0; i < N_SMOKE; i++) { smokeAge[i] = Math.random(); smokeSrc[i] = i % chimneys.length }
    const smokeGeo = track(new THREE.BufferGeometry())
    smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3))
    const smokeMat = track(new THREE.PointsMaterial({ color: 0x8a8a80, size: 0.9, transparent: true, opacity: 0.5, depthWrite: false }))
    const smoke = new THREE.Points(smokeGeo, smokeMat)
    smoke.frustumCulled = false
    scene.add(smoke)

    // Trees that appear as the world recovers
    const treeGeo = track(new THREE.ConeGeometry(0.55, 1.5, 7))
    const trunkGeo = track(new THREE.CylinderGeometry(0.12, 0.14, 0.5, 6))
    const treeMat = track(new THREE.MeshStandardMaterial({ color: 0x2f9e5f, roughness: 0.8 }))
    const trunkMat = track(new THREE.MeshStandardMaterial({ color: 0x6b4a2a }))
    const trees: { g: THREE.Group; threshold: number }[] = []
    for (let i = 0; i < N_TREES; i++) {
      const ang = (i / N_TREES) * Math.PI * 2 + seed(i) * 0.2
      const r = 5.6 + seed(i + 50) * 1.6
      const g = new THREE.Group()
      const trunk = new THREE.Mesh(trunkGeo, trunkMat); trunk.position.y = 0.25
      const crown = new THREE.Mesh(treeGeo, treeMat); crown.position.y = 1.2
      g.add(trunk, crown)
      g.position.set(Math.cos(ang) * r, 0.0, Math.sin(ang) * r)
      g.scale.setScalar(0.001)
      scene.add(g)
      trees.push({ g, threshold: 0.35 + (i / N_TREES) * 0.6 })
    }

    // Pawns
    interface PawnObj { group: THREE.Group; ring: THREE.Mesh; cur: number; queue: number[]; hop: number; from: THREE.Vector3; to: THREE.Vector3; role: RoleKey }
    const pawnObjs = new Map<string, PawnObj>()
    const bodyGeo = track(new THREE.CylinderGeometry(0.32, 0.42, 0.9, 16))
    const headGeo = track(new THREE.SphereGeometry(0.3, 16, 12))
    const ringGeo = track(new THREE.TorusGeometry(0.62, 0.06, 8, 32))
    const roleTex: Partial<Record<RoleKey, THREE.CanvasTexture>> = {}
    const tilePoint = (pos: number, slot: number, count: number) => {
      const p = tilePosition(pos, BOARD.length, HALF)
      const a = (slot / Math.max(1, count)) * Math.PI * 2
      const r = count > 1 ? 0.75 : 0
      return new THREE.Vector3(p.x + Math.cos(a) * r, 0.3, p.z + Math.sin(a) * r)
    }
    const makePawn = (info: PawnInfo): PawnObj => {
      const color = new THREE.Color(ROLES[info.role].color)
      const group = new THREE.Group()
      const mat = track(new THREE.MeshStandardMaterial({ color, roughness: 0.45 }))
      const body = new THREE.Mesh(bodyGeo, mat); body.position.y = 0.45
      const head = new THREE.Mesh(headGeo, mat); head.position.y = 1.15
      group.add(body, head)
      const tex = (roleTex[info.role] ||= track(emojiTexture(ROLES[info.role].icon)))
      const sprite = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false })))
      sprite.scale.set(1.2, 1.2, 1); sprite.position.y = 2.0; sprite.renderOrder = 10
      group.add(sprite)
      const ring = new THREE.Mesh(ringGeo, track(new THREE.MeshBasicMaterial({ color: 0xffffff })))
      ring.rotation.x = Math.PI / 2; ring.position.y = 0.05; ring.visible = false
      group.add(ring)
      scene.add(group)
      const start = tilePoint(info.pos, 0, 1)
      group.position.copy(start)
      return { group, ring, cur: info.pos, queue: [], hop: 1, from: start.clone(), to: start.clone(), role: info.role }
    }

    // Sizing + drag-to-rotate
    let yaw = 0.6, pitch = 0.62, zoom = 1, fit = 34, autoPause = 0
    let dragging = false, lastX = 0, lastY = 0
    const onDown = (e: PointerEvent) => { dragging = true; lastX = e.clientX; lastY = e.clientY; autoPause = performance.now() + 4000 }
    const onMove = (e: PointerEvent) => {
      if (!dragging) return
      yaw -= (e.clientX - lastX) * 0.008
      pitch = Math.max(0.25, Math.min(1.2, pitch + (e.clientY - lastY) * 0.005))
      lastX = e.clientX; lastY = e.clientY; autoPause = performance.now() + 4000
    }
    const onUp = () => { dragging = false }
    const onWheel = (e: WheelEvent) => { e.preventDefault(); zoom = Math.max(0.55, Math.min(1.25, zoom + e.deltaY * 0.0006)) }
    const el = renderer.domElement
    el.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    el.addEventListener('wheel', onWheel, { passive: false })

    const resize = () => {
      const w = mount.clientWidth || 600
      const h = mount.clientHeight || height
      renderer.setSize(w, h, false)
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      camera.aspect = w / h
      // fit the whole ring on screen whatever the shape of the panel
      fit = Math.max(32, Math.min(52, 14 / (0.344 * (w / h))))
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(resize)
    ro.observe(mount)
    resize()

    let raf = 0
    let last = performance.now()
    let shownHealth = live.current.health
    let shownSmog = live.current.smog
    const tmp = new THREE.Vector3()
    const frame = (t: number) => {
      raf = requestAnimationFrame(frame)
      if (document.hidden) { last = t; return }
      const dt = Math.min(0.05, (t - last) / 1000)
      last = t
      const cur = live.current

      // ease the world toward the target state
      shownHealth += (cur.health - shownHealth) * Math.min(1, dt * 1.6)
      shownSmog += (cur.smog - shownSmog) * Math.min(1, dt * 1.6)
      if (Math.abs(shownHealth - paintedHealth) > 0.015) paintGlobe(shownHealth)
      platformMat.color.copy(lerpColor(new THREE.Color(0x6b5a45), new THREE.Color(0x3f8f5a), shownHealth))
      ;(scene.fog as THREE.Fog).color.copy(lerpColor(new THREE.Color(0x14120e), new THREE.Color(0x0e1a14), shownHealth))
      if (!reduced) globe.rotation.y += dt * 0.12

      // smoke
      smokeMat.opacity = 0.15 + shownSmog * 0.55
      const active = Math.floor(shownSmog * N_SMOKE)
      smokeGeo.setDrawRange(0, active)
      for (let i = 0; i < active; i++) {
        smokeAge[i] += dt * (0.18 + (i % 5) * 0.03)
        if (smokeAge[i] > 1) { smokeAge[i] = 0; smokeSrc[i] = (Math.random() * chimneys.length) | 0 }
        const s = chimneys[smokeSrc[i]], a = smokeAge[i]
        smokePos[i * 3] = s.x + Math.sin(i * 12.9 + a * 4) * 0.5 + a * 1.4
        smokePos[i * 3 + 1] = s.y + a * 8
        smokePos[i * 3 + 2] = s.z + Math.cos(i * 7.7 + a * 3) * 0.5
      }
      smokeGeo.attributes.position.needsUpdate = true

      // trees grow in as health rises
      trees.forEach((tr) => {
        const target = shownHealth >= tr.threshold ? 1 : 0.001
        const s = tr.g.scale.x + (target - tr.g.scale.x) * Math.min(1, dt * 2.5)
        tr.g.scale.setScalar(Math.max(0.001, s))
      })

      // tile highlight
      tileMeshes.forEach((m, i) => {
        const on = cur.activePos === i
        const mat = m.material as THREE.MeshStandardMaterial
        mat.emissiveIntensity += ((on ? 0.7 + Math.sin(t / 220) * 0.2 : 0) - mat.emissiveIntensity) * Math.min(1, dt * 8)
        m.position.y += ((on ? 0.35 : 0.05) - m.position.y) * Math.min(1, dt * 8)
      })

      // sync pawns
      const seen = new Set<string>()
      const bySlot = new Map<number, string[]>()
      cur.pawns.forEach((p) => { const arr = bySlot.get(p.pos) ?? []; arr.push(p.id); bySlot.set(p.pos, arr) })
      cur.pawns.forEach((info) => {
        seen.add(info.id)
        let po = pawnObjs.get(info.id)
        if (!po) { po = makePawn(info); pawnObjs.set(info.id, po) }
        // queue hops toward the target tile, one tile at a time
        const lastQueued = po.queue.length ? po.queue[po.queue.length - 1] : po.cur
        if (lastQueued !== info.pos) {
          const steps = (info.pos - lastQueued + BOARD.length) % BOARD.length
          if (reduced || steps > 8) po.queue = [info.pos]
          else for (let s = 1; s <= steps; s++) po.queue.push((lastQueued + s) % BOARD.length)
        }
        if (po.hop >= 1 && po.queue.length) {
          const nextTile = po.queue.shift()!
          const group = bySlot.get(nextTile) ?? [info.id]
          po.from.copy(po.group.position)
          po.to.copy(tilePoint(nextTile, Math.max(0, group.indexOf(info.id)), group.length))
          po.cur = nextTile
          po.hop = 0
        }
        if (po.hop < 1) {
          po.hop = Math.min(1, po.hop + dt / 0.22)
          tmp.lerpVectors(po.from, po.to, po.hop)
          tmp.y += Math.sin(po.hop * Math.PI) * 0.9
          po.group.position.copy(tmp)
        } else {
          const group = bySlot.get(po.cur) ?? [info.id]
          const rest = tilePoint(po.cur, Math.max(0, group.indexOf(info.id)), group.length)
          po.group.position.lerp(rest, Math.min(1, dt * 6))
        }
        po.ring.visible = cur.youId === info.id
        if (po.ring.visible) po.ring.rotation.z += dt * 2
      })
      pawnObjs.forEach((po, id) => { if (!seen.has(id)) { scene.remove(po.group); pawnObjs.delete(id) } })

      // camera
      if (!dragging && !reduced && performance.now() > autoPause) yaw += dt * 0.09
      const dist = fit * zoom
      camera.position.set(Math.sin(yaw) * Math.cos(pitch) * dist, Math.sin(pitch) * dist, Math.cos(yaw) * Math.cos(pitch) * dist)
      camera.lookAt(0, 1.5, 0)
      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      el.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      el.removeEventListener('wheel', onWheel)
      Object.values(iconTex).forEach((t) => t.dispose())
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
    // the scene is built once; live data flows in through the `live` ref
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (failed) return <Board2DFallback pawns={pawns} activePos={activePos} />

  return (
    <div
      ref={mountRef}
      role="img"
      aria-label="3D board of the materials economy. Drag to rotate."
      style={{ width: '100%', height, borderRadius: 16, overflow: 'hidden', background: 'radial-gradient(ellipse at 50% 30%, #1f3a2c 0%, #0e1a14 70%)', border: '2px solid rgba(255,255,255,0.15)', cursor: 'grab' }}
    />
  )
}

/** Shown only when the device cannot create a WebGL context. */
function Board2DFallback({ pawns, activePos }: { pawns: PawnInfo[]; activePos: number | null }) {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 520, margin: '0 auto', aspectRatio: '1 / 1', background: 'rgba(255,255,255,0.06)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: 16 }}>
      {BOARD.map((s, i) => {
        const p = tilePosition(i, BOARD.length, 42)
        return (
          <div key={i} title={s.name} style={{ position: 'absolute', left: `${50 + p.x}%`, top: `${50 + p.z}%`, transform: 'translate(-50%,-50%)', width: 30, height: 30, borderRadius: 7, display: 'grid', placeItems: 'center', fontSize: 14, background: SECTOR_META[s.sector].color, outline: activePos === i ? '3px solid #fff' : 'none' }}>
            {SECTOR_META[s.sector].icon}
            {pawns.filter((p2) => p2.pos === i).map((p2) => (
              <span key={p2.id} style={{ position: 'absolute', bottom: -9, fontSize: 12 }}>{ROLES[p2.role].icon}</span>
            ))}
          </div>
        )
      })}
      <div style={{ position: 'absolute', inset: '30%', display: 'grid', placeItems: 'center', textAlign: 'center', color: '#fff', fontSize: 12 }}>3D view is not available on this device</div>
    </div>
  )
}
