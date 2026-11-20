import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

// Same bar pattern every render so the barcode never jumps
function bars(n, seed) {
  const out = []
  let s = seed
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280
    const r = s / 233280
    out.push({ w: r < 0.35 ? 1 : r < 0.7 ? 2 : r < 0.9 ? 3 : 4, g: r < 0.5 ? 1 : 2 })
  }
  return out
}
const shortBars = bars(20, 3)
const longBars = bars(60, 7)

function Barcode({ list, height }) {
  return (
    <span className="flex items-end" style={{ height }} aria-hidden="true">
      {list.map((b, i) => (
        <span key={i} className="block bg-ink" style={{ height, width: b.w, marginRight: b.g }} />
      ))}
    </span>
  )
}

const roles = ['Computer Science student', 'Student journalist', 'Layout artist']
const tech = ['HTML · CSS', 'JavaScript', 'Python', 'GitHub', 'VS Code']
const creative = ['Publication layout', 'Editorial design', 'Graphic design', 'Figma', 'Canva']

/**
 * The flippable profile ID (400 × 620).
 * `side` sets which face shows first. `onFlipAttempt` lets a parent cancel a flip (used after dragging).
 */
export default function IdCard({ side = 'front', onFlipAttempt }) {
  const [flipped, setFlipped] = useState(side === 'back')

  const toggle = () => {
    if (onFlipAttempt && onFlipAttempt() === false) return
    setFlipped((f) => !f)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={flipped}
      aria-label={flipped ? 'ID card, back side. Press to see the front.' : 'ID card, front side. Press to see the back.'}
      className="flip-scene group block h-[620px] w-[400px] cursor-pointer rounded-[26px] border-0 bg-transparent p-0 text-left focus-visible:outline-3 focus-visible:outline-offset-6 focus-visible:outline-gold"
    >
      <span className="block h-full w-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-[1.5deg]">
        <span className="flip-inner block" style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
          {/* FRONT */}
          <span
            className="flip-face bg-card-grid block overflow-hidden rounded-[26px] shadow-[0_20px_36px_rgba(74,10,12,0.4)]"
            style={{ visibility: flipped ? 'hidden' : 'visible' }}
          >
            <span className="absolute left-[168px] top-4 h-3 w-16 rounded-lg bg-mist shadow-[inset_0_2px_3px_rgba(0,0,0,0.3)]" />
            <span className="absolute inset-x-[22px] top-10 flex justify-between text-[10px] font-bold tracking-[0.12em] text-white">
              <span>SAMMI.SUÑGA / ID</span>
              <span>PORTFOLIO PASS</span>
            </span>
            <span className="absolute inset-x-0 top-[54px] text-center font-display text-[140px] leading-[1.05] text-mist">SAMMI</span>
            <img src="images/portrait.webp" alt="Portrait of Samantha Suñga" className="absolute bottom-[116px] left-[62px] block w-[290px]" />
            <svg className="absolute left-[18px] top-[246px] -rotate-12" width="56" height="56" viewBox="0 0 54 54" aria-hidden="true">
              <path d="M27 2l6.5 16.5L51 20l-13.5 11.5L42 50 27 40 12 50l4.5-18.5L3 20l17.5-1.5z" fill="#E4B849" stroke="#141310" strokeWidth="1.5" />
            </svg>
            <span className="absolute right-1.5 top-[350px] -rotate-6 whitespace-nowrap rounded-[50%] border-3 border-red bg-gold px-[22px] py-2.5 font-sub text-[30px] font-bold leading-[1.15] text-red shadow-[0_6px_12px_rgba(0,0,0,0.3)]">
              LAYOUT ARTIST
            </span>
            <span className="absolute inset-x-3.5 bottom-3.5 flex h-28 items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3">
              <span className="flex min-w-0 flex-col">
                <span className="whitespace-nowrap font-display text-[30px] leading-[1.1] text-ink">SAMANTHA SUÑGA</span>
                <span className="mt-1 whitespace-nowrap text-sm font-bold text-red">Computer Science Student</span>
                <span className="mt-0.5 whitespace-nowrap text-xs text-slate">Student Journalist · Layout Artist</span>
              </span>
              <Barcode list={shortBars} height={56} />
            </span>
            <span className="absolute right-5 top-[220px] flex items-center gap-1 text-[9px] font-bold tracking-[0.12em] text-white">
              <RefreshCw size={12} aria-hidden="true" /> FLIP
            </span>
          </span>

          {/* BACK */}
          <span
            className="flip-face flip-back block overflow-hidden rounded-[26px] border border-line bg-mist text-ink shadow-[0_20px_36px_rgba(74,10,12,0.3)]"
            style={{ visibility: flipped ? 'visible' : 'hidden' }}
          >
            <span className="absolute inset-x-0 top-0 h-3 bg-red" />
            <span className="absolute inset-x-[26px] bottom-6 top-[34px] flex flex-col">
              <span className="flex items-end justify-between">
                <span className="font-display text-[54px] leading-[1.05] text-red">PORTFOLIO<br />PASS</span>
                <span className="flex h-[74px] w-[74px] rotate-12 items-center justify-center rounded-full border-[2.5px] border-red text-center font-sub text-[11px] font-bold leading-[1.15] tracking-[0.06em] text-red">
                  APPROVED<br />FOR<br />PRINT
                </span>
              </span>
              <span className="mt-4 text-[10px] font-bold tracking-[0.12em] text-slate">HOLDER IS A</span>
              <span className="mt-1.5 flex flex-col gap-1">
                {roles.map((r) => (
                  <span key={r} className="flex items-center gap-2 text-[15px] font-bold">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#141310" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7 12l4 4 8-9" stroke="#B3121B" strokeWidth="2.6" />
                    </svg>
                    {r}
                  </span>
                ))}
              </span>
              <span className="mt-4 grid grid-cols-2 gap-3.5 border-t-[1.5px] border-ink pt-3">
                <span className="flex flex-col gap-[3px]">
                  <span className="text-[10px] font-bold tracking-[0.12em] text-red">TECHNICAL</span>
                  {tech.map((t) => <span key={t} className="text-[13px] font-medium">{t}</span>)}
                </span>
                <span className="flex flex-col gap-[3px]">
                  <span className="text-[10px] font-bold tracking-[0.12em] text-navy">CREATIVE</span>
                  {creative.map((t) => <span key={t} className="text-[13px] font-medium">{t}</span>)}
                </span>
              </span>
              <span className="mt-auto flex items-end gap-3">
                <span className="flex-1 border-b border-ink pl-1 text-[32px] font-medium italic leading-none text-red">Sammi</span>
                <span className="text-[9px] font-bold tracking-[0.1em] text-slate">HOLDER</span>
              </span>
              <span className="mt-3.5"><Barcode list={longBars} height={40} /></span>
            </span>
          </span>
        </span>
      </span>
    </button>
  )
}
