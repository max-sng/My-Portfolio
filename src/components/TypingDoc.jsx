import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import { RotateCcw } from 'lucide-react'
import { profile } from '../data/content.js'

const SEGMENTS = ["Hi, I'm", profile.fullName, 'but you can call me', profile.nickname, profile.intro]
const HEAD_LEN = SEGMENTS.slice(0, 4).join('').length
const TOTAL = SEGMENTS.join('').length

/** Hook: returns how many characters have been "typed" and a replay function. */
function useTyping(active) {
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? TOTAL : 0)
  const timer = useRef()

  const start = () => {
    clearTimeout(timer.current)
    if (reduce) { setN(TOTAL); return }
    setN(0)
    let i = 0
    const tick = () => {
      i += 1
      setN(i)
      if (i < TOTAL) timer.current = setTimeout(tick, i < HEAD_LEN ? 55 : 14)
    }
    timer.current = setTimeout(tick, 400)
  }

  // Start only once the laptop has scrolled into view
  useEffect(() => { if (active) start(); return () => clearTimeout(timer.current) }, [reduce, active]) // eslint-disable-line react-hooks/exhaustive-deps
  return { n, done: n >= TOTAL, replay: start }
}

/** The About page laptop: a document that types out the intro. */
export default function TypingDoc({ onDone }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const { n, done, replay } = useTyping(inView)

  useEffect(() => { if (done && onDone) onDone() }, [done, onDone])

  // Split typed count across the segments and find where the caret sits
  let offset = 0
  let current = SEGMENTS.length - 1
  const typed = SEGMENTS.map((s, i) => {
    const k = Math.max(0, Math.min(s.length, n - offset))
    if (current === SEGMENTS.length - 1 && k < s.length && i < current) current = i
    offset += s.length
    return s.slice(0, k)
  })
  const caret = (i, h) => (current === i ? <span className="caret" style={{ height: h }} /> : null)

  return (
    <div ref={ref}>
      <div className="relative rounded-t-[26px] bg-[#17181A] px-3 pb-5 pt-4 shadow-[0_30px_60px_rgba(20,40,80,0.3)] md:px-[18px]">
        <span className="absolute left-1/2 top-[7px] -ml-[3px] h-1.5 w-1.5 rounded-full bg-[#3A3C40]" aria-hidden="true" />
        <div className="bg-[#E9EDF2]">
          {/* App chrome */}
          <div className="border-b border-[#D5DAE0] bg-white">
            <div className="flex items-center gap-3.5 px-3.5 pb-1 pt-2">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-[11px] w-[11px] rounded-full bg-red" />
                <span className="h-[11px] w-[11px] rounded-full bg-gold" />
                <span className="h-[11px] w-[11px] rounded-full bg-sky" />
              </span>
              <span className="h-5 w-4 rounded-[3px] bg-sky" aria-hidden="true" />
              <span className="text-sm font-bold">about-me.doc</span>
              <span className="text-[11px] text-[#6B7280]" aria-live="polite">{done ? 'Saved' : 'Typing…'}</span>
            </div>
            <div className="flex items-center gap-2.5 px-3.5 pb-2 pt-1.5 text-[13px] text-[#374151]">
              <span className="rounded-md border border-[#D5DAE0] px-2.5 py-0.5">DM Sans ▾</span>
              <span className="hidden rounded-md border border-[#D5DAE0] px-2.5 py-0.5 sm:inline">18 ▾</span>
              <b className="text-[15px]">B</b><i className="text-[15px]">I</i><u className="text-[15px]">U</u>
              <span className="flex-1" />
              <button type="button" onClick={replay} className="inline-flex min-h-[30px] cursor-pointer items-center gap-1.5 rounded-md border border-[#D5DAE0] bg-white px-3 text-xs font-bold text-[#374151] focus-visible:outline-3 focus-visible:outline-red">
                <RotateCcw size={12} aria-hidden="true" /> Replay
              </button>
            </div>
          </div>
          {/* Page */}
          <div className="flex justify-center px-3 pt-4 md:px-[18px]">
            <div className="w-full max-w-[760px] bg-white px-5 pb-9 pt-7 shadow-[0_2px_8px_rgba(0,0,0,0.12)] md:min-h-[470px] md:px-10 md:pt-8">
              <p className="sr-only">Hi, I'm {profile.firstName} Suñga, but you can call me Sammi. {profile.intro}</p>
              <div aria-hidden="true">
                <div className="min-h-[30px] text-2xl font-medium">{typed[0]}{caret(0, '1em')}</div>
                <div className="min-h-[1.05em] whitespace-nowrap font-display text-[34px] leading-[1.05] text-red sm:text-[60px] md:text-[75px]">{typed[1]}{caret(1, '0.85em')}</div>
                <div className="mt-2 flex min-h-[66px] flex-wrap items-center gap-3.5">
                  <span className="text-xl font-medium">{typed[2]}{caret(2, '1em')}</span>
                  <span className="font-display text-[40px] leading-[1.05] text-navy md:text-[51px]">{typed[3]}{caret(3, '0.85em')}</span>
                </div>
                <p className="mt-3.5 min-h-[174px] text-[17px] leading-relaxed text-[#2B2B2B] md:text-lg">{typed[4]}{caret(4, '1.1em')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop base */}
      <div className="relative -mx-4 h-[26px] rounded-b-[22px] bg-[#C9CDD3] shadow-[0_16px_30px_rgba(20,40,80,0.25)] md:-mx-10" aria-hidden="true">
        <span className="absolute left-1/2 top-0 -ml-[70px] h-2.5 w-[140px] rounded-b-[10px] bg-[#A9AEB6]" />
      </div>
    </div>
  )
}
