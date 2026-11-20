import { useState } from 'react'
import { RefreshCw, Mail, MapPin, Github, Facebook } from 'lucide-react'
import { profile } from '../data/content.js'

/** Landscape business card (560 × 340). Front: name. Back: contacts. */
export default function BizCard({ side = 'front' }) {
  const [flipped, setFlipped] = useState(side === 'back')

  const rows = [
    { icon: Facebook, text: 'Samantha Suñga' },
    { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, text: profile.location },
    { icon: Github, text: profile.github.replace(/^https?:\/\//, ''), href: profile.github },
  ]

  return (
    <div className="flip-scene h-[340px] w-[560px]">
      <div className="flip-inner" style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        {/* FRONT */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          aria-label="Business card. Press to see contacts."
          className="flip-face block cursor-pointer overflow-hidden rounded-[22px] border-0 bg-white p-0 text-left text-ink shadow-[0_18px_34px_rgba(20,40,80,0.3)] focus-visible:outline-3 focus-visible:outline-gold"
          style={{ visibility: flipped ? 'hidden' : 'visible' }}
        >
          <span className="bg-blue-grid absolute inset-y-0 left-0 w-[190px]" style={{ backgroundSize: '20px 20px' }} />
          <span className="absolute left-[34px] top-[34px] flex h-[122px] w-[122px] items-center justify-center rounded-[26px] bg-red font-display text-[92px] leading-none text-mist shadow-[inset_0_-8px_0_#7A0D12,0_8px_14px_rgba(0,0,0,0.25)]">S</span>
          <span className="absolute bottom-[30px] left-[30px] -rotate-6 whitespace-nowrap rounded-[50%] border-[2.5px] border-red bg-gold px-4 py-2 font-sub text-lg font-bold text-red">HIRE ME!</span>
          <span className="absolute left-[222px] right-[30px] top-10 flex flex-col">
            <span className="mt-3.5 font-display text-[58px] leading-[1.1]">SAMANTHA<br />SUÑGA</span>
            <span className="mt-3.5 text-base font-bold text-red">Graphic Designer · Layout Artist</span>
            <span className="mt-0.5 text-sm text-slate">Computer Science Student</span>
          </span>
          <span className="absolute bottom-[18px] right-[22px] flex items-center gap-1 text-[10px] font-bold tracking-[0.12em] text-slate">
            <RefreshCw size={12} aria-hidden="true" /> FLIP FOR CONTACTS
          </span>
        </button>

        {/* BACK */}
        <div
          className="flip-face flip-back overflow-hidden rounded-[22px] bg-card-grid text-white shadow-[0_18px_34px_rgba(74,10,12,0.35)]"
          style={{ visibility: flipped ? 'visible' : 'hidden', backgroundSize: '20px 20px' }}
        >
          <div className="absolute left-[34px] top-8 flex w-[310px] flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <span className="font-display text-4xl leading-[1.05]">GET IN TOUCH</span>
              <button
                type="button"
                onClick={() => setFlipped(false)}
                aria-label="Show the front of the business card"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-transparent text-white focus-visible:outline-3 focus-visible:outline-gold"
              >
                <RefreshCw size={18} aria-hidden="true" />
              </button>
            </div>
            {rows.map(({ icon: Icon, text, href }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-white text-red"><Icon size={16} aria-hidden="true" /></span>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="break-all text-[15px] font-medium text-white underline-offset-4 hover:underline">{text}</a>
                ) : (
                  <span className="text-[15px] font-medium">{text}</span>
                )}
              </div>
            ))}
          </div>
          <div className="absolute right-[34px] top-[105px] flex w-[150px] flex-col items-center rounded-xl bg-white p-2.5 text-center text-ink">
            <img src="images/github-qr.svg" alt="Scan to open Samantha's GitHub profile" className="block h-[126px] w-[126px]" />
            <span className="mt-1 text-[10px] font-bold tracking-[0.08em]">SCAN QR FOR GITHUB</span>
          </div>
        </div>
      </div>
    </div>
  )
}
