'use client'

import { DIGITAL_PRODUCTS, WILD_PRODUCT_ID, getProduct, isWildProduct, productsByGroup } from '@/data/design/live/digital-products'
import { ROLES, ROLE_ORDER, type RoleKey } from '@/lib/design-live/sustainability'
import { cardStyle, btnStyle, inputStyle } from './ui'

interface ProductValue {
  productId: string
  /** Only for the wild card: the student's own digital product. */
  custom?: string
}

/** The MYP5 menu of 25 digital-product starting points, grouped by who they
 *  serve. The student's own community group (from the research section) is
 *  listed first. Only the choice — and, for the wild card, the student's own
 *  description — is saved. */
export default function ProductCardsField({
  value,
  onChange,
  onPersist,
  preferredGroup,
}: {
  value: ProductValue | undefined
  onChange: (v: ProductValue) => void
  onPersist: (v: ProductValue) => void
  /** The label the student picked for their community, e.g. "Frontline Community". */
  preferredGroup?: string
}) {
  const chosen = value?.productId ? (isWildProduct(value.productId) ? { id: WILD_PRODUCT_ID } : getProduct(value.productId)) : undefined

  const choose = (productId: string) => {
    const next: ProductValue = { productId, custom: '' }
    onChange(next)
    onPersist(next)
  }
  const surprise = (g: RoleKey) => {
    const pool = productsByGroup(g)
    if (pool.length) choose(pool[Math.floor(Math.random() * pool.length)].id)
  }
  const mineKey = ROLE_ORDER.find((r) => ROLES[r].name === preferredGroup)
  const ordered = [...ROLE_ORDER].sort((a, b) => Number(b === mineKey) - Number(a === mineKey))

  if (!chosen) {
    return (
      <div style={{ display: 'grid', gap: 16 }}>
        {ordered.map((g) => {
          const mine = g === mineKey
          return (
            <div key={g}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: mine ? ROLES[g].color : 'var(--text-muted)' }}>
                  {mine ? '★ ' : ''}{ROLES[g].icon} {ROLES[g].name.toUpperCase()}{mine ? ' — YOUR COMMUNITY' : ''}
                </div>
                <button onClick={() => surprise(g)} style={{ ...btnStyle('var(--surface)'), fontSize: 11, padding: '4px 10px' }}>🎲 Surprise me</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 8 }}>
                {productsByGroup(g).map((p) => (
                  <button key={p.id} onClick={() => choose(p.id)} style={{ ...btnStyle('var(--surface)'), textAlign: 'left', display: 'grid', gap: 4, alignContent: 'start', fontSize: 12.5 }}>
                    <span style={{ fontSize: 26 }}>{p.icon}</span>
                    <strong>{p.name}</strong>
                    <span style={{ fontWeight: 400, fontSize: 11.5, color: 'var(--text-muted)' }}>{p.what}</span>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
        <button onClick={() => choose(WILD_PRODUCT_ID)} style={{ ...btnStyle('var(--surface)'), textAlign: 'left', border: '2.5px dashed var(--text)' }}>
          <span style={{ fontSize: 24 }}>🃏</span> <strong>Wild card</strong> — {DIGITAL_PRODUCTS.length} ideas not enough? Propose your own digital product.
        </button>
      </div>
    )
  }

  const wild = isWildProduct(chosen.id)
  const p = wild ? undefined : getProduct(chosen.id)
  const block = (label: string, text: string) => (
    <div>
      <div style={{ fontSize: 10.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 12.5 }}>{text}</div>
    </div>
  )

  return (
    <div style={{ ...cardStyle(p ? ROLES[p.group].color : '#E8672A'), display: 'grid', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 34 }}>{p?.icon ?? '🃏'}</span>
        <div style={{ fontWeight: 800, fontSize: 15 }}>{wild ? 'Wild card — your own digital product' : p!.name}</div>
      </div>
      {wild ? (
        <label style={{ display: 'grid', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
          What digital product will you design, and for whom?
          <textarea
            value={value?.custom || ''}
            onChange={(e) => onChange({ productId: WILD_PRODUCT_ID, custom: e.target.value })}
            onBlur={() => onPersist({ productId: WILD_PRODUCT_ID, custom: value?.custom || '' })}
            placeholder="e.g. A website that helps river-town residents log water tests and share them with the council"
            style={{ ...inputStyle, minHeight: 64, fontWeight: 400 }}
          />
        </label>
      ) : (
        <>
          {block('What it is', p!.what)}
          {block('Who it is for', p!.who)}
          {block('Prototype it with', p!.prototype)}
          {block('The first version must prove', p!.proves)}
        </>
      )}
      <button onClick={() => choose('')} style={{ ...btnStyle('var(--surface)'), justifySelf: 'start', fontSize: 11 }}>← Choose a different product</button>
    </div>
  )
}
