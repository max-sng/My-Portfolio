import { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { folders } from '../data/content.js'

function FolderIcon({ active }) {
  return (
    <svg className="transition-transform duration-150 group-hover:-translate-y-1.5" width="170" height="124" viewBox="0 0 150 110" aria-hidden="true">
      <path d="M4 18c0-6 4-10 10-10h40l10 10h72c6 0 10 4 10 10v68c0 6-4 10-10 10H14c-6 0-10-4-10-10z" fill={active ? '#C99A2E' : '#E0BC5E'} />
      <path d="M4 34h142v62c0 6-4 10-10 10H14c-6 0-10-4-10-10z" fill={active ? '#E4B849' : '#EDCB73'} />
    </svg>
  )
}

/** Three project folders. Clicking one opens a window of its contents. */
export default function FolderDesktop() {
  const [open, setOpen] = useState(0)
  const f = folders[open]

  return (
    <div>
      <div role="tablist" aria-label="Project folders" className="flex flex-wrap justify-center gap-6 md:gap-[72px]">
        {folders.map((fd, i) => {
          const active = i === open
          return (
            <button
              key={fd.label}
              role="tab"
              aria-selected={active}
              aria-controls="folder-window"
              onClick={() => setOpen(i)}
              className={`group flex cursor-pointer flex-col items-center gap-2.5 rounded-[14px] border-0 px-[18px] py-3.5 focus-visible:outline-3 focus-visible:outline-red ${active ? 'bg-red/[0.08]' : 'bg-transparent'}`}
            >
              <FolderIcon active={active} />
              <span className={`rounded-md px-3 py-1 text-lg font-bold ${active ? 'bg-red text-white' : 'text-ink'}`}>{fd.label}</span>
              <span className="text-[11px] font-bold text-slate">{fd.files.length} items</span>
            </button>
          )
        })}
      </div>

      <div id="folder-window" role="tabpanel" className="mt-10 overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_rgba(0,0,0,0.18)]">
        <div className="flex items-center gap-2 border-b border-line bg-mist px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-gold" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-sky" aria-hidden="true" />
          <span className="flex-1 text-center text-sm font-bold">~/sammi/{f.label.toLowerCase().replace(' ', '-')}</span>
          <span className="text-[11px] font-bold text-slate">{f.files.length} items</span>
        </div>
        <div className="flex flex-wrap">
          <ul className="grid min-w-0 flex-[999_1_560px] grid-cols-[repeat(auto-fill,minmax(150px,1fr))] content-start gap-4 p-6">
            {f.files.map((it) => (
              <li key={it.name}>
                <a href={it.to} className="flex flex-col gap-2 rounded-[10px] p-2.5 no-underline transition-colors hover:bg-[#F1EEE7] focus-visible:outline-3 focus-visible:outline-red">
                  {it.img ? (
                    <img src={it.img} alt="" loading="lazy" className={`block aspect-[4/5] w-full rounded bg-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] ${it.fit === 'contain' ? 'object-contain p-2' : 'object-cover'}`} />
                  ) : (
                    <span className="flex aspect-[4/5] w-full flex-col justify-between rounded p-3" style={{ background: f.color, color: '#FFFFFF' }}>
                      <span className="text-[10px] font-bold tracking-[0.1em]">{it.kind}</span>
                      <span className="font-display text-[28px] leading-[1.05]">{it.big}</span>
                    </span>
                  )}
                  <span className="text-sm font-bold leading-tight text-ink">{it.name}</span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-slate">{it.kind} <ArrowUpRight size={11} aria-hidden="true" /></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex min-w-0 flex-[1_1_300px] flex-col border-l border-line p-7">
            <div className="text-[11px] font-bold tracking-[0.12em] text-slate">GET INFO</div>
            <div className="mt-2.5 font-display text-5xl leading-[1.05]" style={{ color: f.color }}>{f.title}</div>
            <p className="mt-2.5 text-[15px] leading-normal">{f.blurb}</p>
            <div className="mt-5 text-[11px] font-bold tracking-[0.12em] text-slate">SKILLS IN THIS FOLDER</div>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {f.skills.map((s) => (
                <li key={s} className="rounded-full border-[1.5px] border-ink px-3 py-1.5 text-[13px] font-medium">{s}</li>
              ))}
            </ul>
            {f.cta && (
              <a href={f.to} className="mt-8 flex min-h-[46px] items-center justify-between gap-2.5 rounded-xl px-[17px] text-base font-bold text-white no-underline md:mt-auto" style={{ background: f.color }}>
                {f.cta} <ArrowRight size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
