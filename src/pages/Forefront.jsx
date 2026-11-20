import { useState } from 'react'
import Sticker from '../components/Sticker.jsx'
import Flipbook from '../components/Flipbook.jsx'
import Lightbox from '../components/Lightbox.jsx'
import PartLabel from '../components/PartLabel.jsx'
import { forefront } from '../data/content.js'

const toc = [
  { n: '01', id: 'luto', name: 'LUTO NEWSLETTER', kind: 'Newsletter' },
  { n: '02', id: 'kontesera', name: 'KONTESERA E-MAGAZINE', kind: 'E-magazine' },
  { n: '03', id: 'templates', name: 'TEMPLATES & PROMOS', kind: 'Templates' },
]

function Title({ text, className }) {
  const [first, ...rest] = text.split(' ')
  return (
    <h2 className={`m-0 mt-3 font-display font-normal leading-[1.05] text-[52px] md:text-[72px] ${className}`}>
      <span className="block whitespace-nowrap">{first}</span>
      <span className="block whitespace-nowrap">{rest.join(' ')}</span>
    </h2>
  )
}

function Award({ rank, text, dark }) {
  return (
    <div className={`mt-5 inline-flex items-center gap-3 rounded-[14px] px-[18px] py-3 ${dark ? 'bg-white text-ink' : 'border-2 border-ink'}`}>
      <span className="font-display text-[40px] leading-none text-red">{rank}</span>
      <span className="max-w-[230px] text-sm font-medium leading-snug">{text}</span>
    </div>
  )
}

export default function Forefront() {
  const [open, setOpen] = useState(null)
  const { luto, kontesera, board } = forefront

  return (
    <>
      <section id="forefront" className="scroll-mt-24">
        {/* Opener */}
        <section className="bg-red text-white">
          <div className="relative mx-auto flex max-w-[1440px] flex-wrap justify-between gap-10 px-5 pb-16 pt-12 md:px-16">
            <Sticker name="smiley" width={110} rotate={10} className="left-[700px] top-[70px]" />
            <Sticker name="justanother" width={210} rotate={-5} className="bottom-5 left-[600px]" />
            <div>
              <PartLabel part="PROJECTS" detail="LAYOUT" light />
              <h1 className="m-0 mt-6 font-display text-[90px] font-normal leading-[1.05] md:text-[187px]">THE<br />FOREFRONT</h1>
              <p className="mt-6 max-w-[500px] text-lg leading-relaxed">Gordon College's official student publication, where I went from Junior Graphic Artist to Head Layout Artist.</p>
            </div>
            <nav aria-label="In this chapter" className="w-full self-end md:w-[460px]">
              <div className="border-b border-white/40 pb-2 text-[11px] font-bold tracking-[0.14em] text-gold">IN THIS CHAPTER</div>
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`} className="flex items-baseline gap-4 border-b border-white/25 py-3 text-white no-underline hover:opacity-85">
                  <span className="w-6 text-xs font-bold text-gold">{t.n}</span>
                  <span className="flex-1 font-sub text-[28px] font-bold leading-none">{t.name}</span>
                  <span className="text-[13px] opacity-85">{t.kind}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Luto */}
        <section id="luto" className="bg-blue-grid scroll-mt-24 text-white">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-10 px-5 py-[72px] md:px-16">
            <div className="min-w-0 flex-[1_1_340px]">
              <div className="text-xs font-bold tracking-[0.14em]">PROJECT 01 · NEWSLETTER</div>
              <Title text={luto.title} />
              <Award {...luto.award} dark />
            </div>
            <div className="min-w-0 flex-[999_1_640px]">
              <Flipbook url={luto.flipbook} title="Luto Newsletter" tone="dark" />
            </div>
          </div>
        </section>

        {/* Kontesera */}
        <section id="kontesera" className="scroll-mt-24 bg-white">
          <div className="mx-auto flex max-w-[1440px] flex-wrap-reverse items-center gap-10 px-5 py-[72px] md:px-16">
            <div className="min-w-0 flex-[999_1_640px] rounded-3xl bg-pale p-4 md:p-6">
              <Flipbook url={kontesera.flipbook} title="Kontesera E-Magazine" />
            </div>
            <div className="min-w-0 flex-[1_1_340px]">
              <div className="text-xs font-bold tracking-[0.14em] text-sky">PROJECT 02 · E-MAGAZINE</div>
              <Title text={kontesera.title} className="text-red" />
              <Award {...kontesera.award} />
            </div>
          </div>
        </section>

        {/* Pinboard */}
        <section id="templates" className="bg-pale-grid scroll-mt-24">
          <div className="relative mx-auto max-w-[1440px] px-5 pb-[88px] pt-[72px] md:px-16">
            <Sticker name="fish" width={180} rotate={6} className="right-20 top-[50px]" />
            <Sticker name="cool" width={140} rotate={-8} className="right-[300px] top-[70px]" />
            <div className="text-xs font-bold tracking-[0.14em] text-sky">PROJECT 03 · TEMPLATES &amp; PROMOS</div>
            <h2 className="m-0 mt-3 font-display text-[56px] font-normal leading-[1.05] md:text-[79px]">ON THE BOARD</h2>
            <ul className="mt-10 grid grid-cols-2 items-start gap-4 p-0 md:grid-cols-3 md:gap-7 lg:grid-cols-6">
              {board.map((it) => (
                <li key={it.title} className="min-w-0 list-none">
                  <button
                    type="button"
                    onClick={() => setOpen(it)}
                    aria-label={`Open ${it.title}`}
                    className="relative block w-full cursor-pointer border-0 bg-white p-2.5 shadow-[0_12px_24px_rgba(20,40,80,0.15)] transition-transform duration-200 hover:-translate-y-1"
                    style={{ transform: `rotate(${it.rot}deg)` }}
                  >
                    <span className="absolute -top-2.5 left-1/2 -ml-2.5 h-5 w-5 rounded-full bg-red shadow-[0_3px_4px_rgba(0,0,0,0.3)]" aria-hidden="true" />
                    <img src={it.src} alt="" loading="lazy" className="block w-full object-cover" style={{ aspectRatio: it.ratio }} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </>
  )
}
