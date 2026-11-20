import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Sticker from '../components/Sticker.jsx'
import TypingDoc from '../components/TypingDoc.jsx'
import { aboutCards, skillGroups } from '../data/content.js'

export default function About() {
  const [done, setDone] = useState(false)

  return (
    <>
      <section id="about" className="scroll-mt-24 bg-pale-grid min-h-screen">
        {/* Opener */}
        <section className="bg-red text-white">
          <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-10 md:px-16">
            <Sticker name="designer" width={240} rotate={6} className="right-[90px] top-[60px]" />
            <Sticker name="sun" width={110} className="left-[150px] top-[150px]" />
            <div className="mt-2 flex justify-center">
              <h1 className="m-0 mb-4 inline-flex -rotate-4 items-center justify-center whitespace-nowrap rounded-[50%] border-[6px] border-deepred bg-gold px-10 py-5 font-display text-6xl font-normal leading-[1.1] text-red shadow-[10px_10px_0_#7A0D12] md:px-[110px] md:py-[34px] md:text-[124px]">
                ABOUT ME
              </h1>
            </div>
          </div>
        </section>

        {/* Laptop + cards */}
        <section className="mx-auto flex max-w-[1440px] flex-wrap items-start gap-12 px-5 pb-20 pt-16 md:px-16">
          <div className="min-w-0 flex-[999_1_760px]">
            <TypingDoc onDone={() => setDone(true)} />
          </div>
          <aside className="flex min-w-0 flex-[1_1_340px] flex-col gap-4">
            {aboutCards.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white px-[22px] py-5 shadow-[0_14px_28px_rgba(20,40,80,0.16)]">
                <h2 className="m-0 font-sub text-[26px] font-bold leading-[1.15]">{c.title}</h2>
                {c.body && <p className="mt-1.5 mb-0 text-[15px] leading-relaxed">{c.body}</p>}
                {c.roles?.map((r) => (
                  <p key={r.role} className="mt-2 mb-0 text-[15px] leading-snug">
                    <b>{r.role}</b>, {r.org}<br /><span className="text-slate">{r.when}</span>
                  </p>
                ))}
                {c.lines && <p className="mt-1.5 mb-0 text-[15px] leading-relaxed">{c.lines.map((l) => <span key={l} className="block">{l}</span>)}</p>}
              </div>
            ))}
            {done && (
              <a href="#contact" className="flex min-h-[54px] items-center justify-between rounded-[14px] bg-red px-[22px] text-base font-bold text-white no-underline">
                See my contacts <ArrowRight size={16} aria-hidden="true" />
              </a>
            )}
          </aside>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills-title" className="relative mx-auto max-w-[1440px] px-5 pb-20 md:px-16">
          <Sticker name="fish" width={170} rotate={-6} className="right-16 top-[-40px]" />
          <Sticker name="greenstar" width={62} rotate={12} className="left-[230px] top-[-18px]" />
          <h2 id="skills-title" className="m-0 font-display text-[54px] font-normal leading-[1.1]">SKILLS</h2>
          <div className="mt-[18px] grid grid-cols-1 gap-5 md:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-2xl bg-white p-[22px] shadow-[0_14px_28px_rgba(20,40,80,0.16)]">
                <h3 className="m-0 font-sub text-[22px] font-bold leading-[1.2]" style={{ color: g.color }}>{g.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2 p-0">
                  {g.items.map((s) => (
                    <li key={s} className="list-none rounded-full border border-line bg-mist px-[13px] py-[7px] text-sm font-medium">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
