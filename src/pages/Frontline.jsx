import { useState } from 'react'
import { ArrowRight, ImageIcon } from 'lucide-react'
import { frontline } from '../data/content.js'
import PartLabel from '../components/PartLabel.jsx'

export default function Frontline() {
  const [tab, setTab] = useState(0)
  const screen = frontline.screens[tab]

  return (
    <>
      <section id="development" className="scroll-mt-24 min-h-screen bg-white">
        <section className="border-b border-[#E3E6EA] bg-mist" style={{ backgroundImage: 'linear-gradient(rgba(74,143,216,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(74,143,216,0.12) 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
          <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-10 md:px-16">
            <PartLabel part="PROJECTS" detail="DEVELOPMENT" />
            <div className="mt-7 flex flex-wrap items-end justify-between gap-8">
              <h1 className="m-0">
                <img src="/images/frontline-logo.webp" alt="The Frontline: CMS and digital archive for campus journalism" className="block w-[480px] max-w-full" />
              </h1>
              <p className="m-0 mb-[18px] max-w-[360px] text-lg leading-normal">{frontline.tagline}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-[1440px] flex-wrap gap-12 px-5 pb-20 pt-14 md:px-16">
          <div className="min-w-0 flex-[999_1_720px]">
            <div role="tablist" aria-label="Screens" className="mb-3.5 flex flex-wrap gap-1.5">
              {frontline.screens.map((s, i) => (
                <button
                  key={s.slug}
                  role="tab"
                  aria-selected={i === tab}
                  onClick={() => setTab(i)}
                  className={`min-h-11 cursor-pointer rounded-full border-[1.5px] px-[18px] text-[15px] font-bold focus-visible:outline-3 focus-visible:outline-sky ${i === tab ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink'}`}
                >
                  {s.name}
                </button>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl border border-line shadow-[0_20px_40px_rgba(20,40,80,0.12)]">
              <div className="flex items-center gap-1.5 border-b border-line bg-mist px-3.5 py-2.5">
                {[0, 1, 2].map((d) => <span key={d} className="h-[11px] w-[11px] rounded-full bg-line" aria-hidden="true" />)}
                <span className="ml-3 text-xs text-slate">the-frontline/{screen.slug}</span>
              </div>
              {screen.src ? (
                <img src={screen.src} alt={`The Frontline: ${screen.name}`} className="block w-full" />
              ) : (
                <div className="m-4 flex aspect-[16/10] flex-col items-center justify-center gap-2.5 rounded-[10px] border-2 border-dashed border-[#C9CED6] text-slate">
                  <ImageIcon size={40} strokeWidth={1.6} aria-hidden="true" />
                  <span className="text-[13px] font-bold tracking-[0.08em]">[SCREENSHOT: {screen.name.toUpperCase()}]</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex min-w-0 flex-[1_1_360px] flex-col">
            <h2 className="m-0 font-display text-5xl font-normal leading-[1.05]">THE STORY, IN BRIEF</h2>
            <p className="mt-3.5 text-[17px] leading-relaxed">{frontline.brief}</p>
            <dl className="mt-[22px] grid grid-cols-[86px_minmax(0,1fr)] gap-x-3.5 gap-y-2.5 border-t border-line pt-4 text-[15px]">
              {frontline.facts.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="pt-[3px] text-[11px] font-bold tracking-[0.08em] text-slate">{k}</dt>
                  <dd className="m-0 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <a href="#case-study" className="mt-7 flex min-h-14 items-center justify-between rounded-[14px] bg-frontline px-[22px] text-[17px] font-bold text-white no-underline">
              Read the case study <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </section>
      </section>
    </>
  )
}
