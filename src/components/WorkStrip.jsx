import { workStrip } from '../data/content.js'
import Sticker from './Sticker.jsx'

/** Full-width swipeable row of project cards (CSS scroll-snap, no library). */
export default function WorkStrip() {
  return (
    <div
      role="region"
      aria-label="Selected work, swipe or scroll sideways to see more"
      tabIndex={0}
      className="no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-hidden px-5 pb-11 pt-10 [scroll-padding-left:20px] md:px-16 md:[scroll-padding-left:64px] focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-gold"
    >
      <ul className="mx-auto flex w-max gap-6">
        {workStrip.map((it, i) => (
          <li key={i} className="snap-start">
            <a
              href={it.to}
              aria-label={`${it.name}, ${it.kind}`}
              className="block w-[256px] rounded-[14px] bg-white p-2.5 no-underline shadow-[0_10px_22px_rgba(20,40,80,0.16)] transition duration-300 ease-out hover:z-10 hover:scale-110 hover:shadow-[0_22px_40px_rgba(20,40,80,0.32)] focus-visible:scale-110 focus-visible:outline-3 focus-visible:outline-gold md:w-[220px]"
            >
              <span
                className="relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-lg p-3.5"
                style={{
                  backgroundColor: it.cover.color,
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              >
                <span className="absolute -right-7 -top-8 h-32 w-32 rounded-full opacity-50" style={{ backgroundColor: it.cover.accent }} aria-hidden="true" />
                <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-ink">
                  {it.kind}
                </span>
                <Sticker name={it.cover.sticker} width={120} rotate={it.cover.rotate} className="right-1 top-9" hideOnMobile={false} />
                <span
                  className="relative z-[3] shrink-0 rounded-[50%] border border-ink px-5 py-4 text-center font-display text-[26px] uppercase leading-[0.95] shadow-[0_3px_5px_rgba(20,19,16,0.28)]"
                  style={{ backgroundColor: it.cover.accent, color: it.cover.label, width: it.cover.labelWidth }}
                >
                  {it.cover.lines.map((line) => <span key={line} className="block whitespace-nowrap">{line}</span>)}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
