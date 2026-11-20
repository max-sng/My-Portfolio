import { ArrowRight } from 'lucide-react'
import Lanyard from '../components/Lanyard.jsx'
import WorkStrip from '../components/WorkStrip.jsx'
import Sticker from '../components/Sticker.jsx'
import { profile } from '../data/content.js'

export default function Home() {
  return (
    <section id="home" className="scroll-mt-24 bg-sky-grid relative min-h-screen overflow-hidden">
      {/* Top half: two columns */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 lg:min-h-[720px] lg:grid-cols-[minmax(0,1fr)_560px]">
        <div className="relative px-5 pb-10 pt-32 text-white md:px-16 md:pt-[168px] lg:pr-6">
          <Sticker name="stars3" width={74} rotate={-8} className="left-[150px] top-[110px]" />
          <Sticker name="cool" width={150} rotate={9} className="right-10 top-[120px]" />

          <p className="m-0 text-2xl font-medium">Hi, I'm</p>
          <h1 className="m-0 mt-2 whitespace-nowrap font-display text-[clamp(52px,8vw,120px)] font-normal leading-[1.1] tracking-[0.01em] [text-shadow:5px_5px_0_#B3121B]">
            {profile.fullName}
          </h1>
          <div className="mt-[18px] flex items-center gap-4">
            <span className="text-xl font-medium leading-tight">but you<br />can call me</span>
            <span className="-rotate-4 rounded-[50%] border-3 border-red bg-gold px-7 py-1 font-display text-[44px] leading-[1.2] text-red">{profile.nickname}</span>
          </div>
          <p className="mt-[26px] max-w-[520px] text-[19px] font-medium leading-normal">
            Computer Science student and Head Layout Artist of <b>The Forefront</b>.
          </p>
          <div className="mt-[22px] flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex min-h-[50px] items-center gap-2.5 rounded-full bg-red px-6 text-base font-bold text-white no-underline shadow-[0_8px_18px_rgba(122,13,18,0.3)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold">
              See my projects <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <Sticker name="smiley" width={92} rotate={12} className="left-[470px] top-[560px]" />
          <Sticker name="artist" width={170} rotate={-5} className="left-[600px] top-[600px]" />
        </div>

        {/* Lanyard hangs from the top of the page on the right */}
        <div className="relative mt-8 overflow-visible lg:mt-0">
          <Lanyard />
        </div>
      </section>

      {/* Bottom: full-width work strip */}
      <section aria-label="Selected work" className="relative border-t border-white/90 bg-white/70 shadow-[0_-10px_30px_rgba(20,40,80,0.08)]">
        <Sticker name="justanother" width={200} rotate={-6} className="left-10 top-[-52px] z-[3]" />
        <Sticker name="spiral" width={110} rotate={14} className="right-9 top-[-60px] z-[3]" />
        <WorkStrip />
      </section>
    </section>
  )
}
