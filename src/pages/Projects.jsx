import { useEffect } from 'react'
import Sticker from '../components/Sticker.jsx'
import FolderDesktop from '../components/FolderDesktop.jsx'

export default function Projects() {
  useEffect(() => {
    document.documentElement.classList.add('no-scrollbar')
    return () => document.documentElement.classList.remove('no-scrollbar')
  }, [])

  return (
    <>
      <section id="projects" className="scroll-mt-24 min-h-screen bg-pale">
        <div className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-12 md:px-16">
          <Sticker name="spiral" width={120} rotate={-10} className="left-[110px] top-[250px]" />
          <Sticker name="greenstar" width={88} rotate={8} className="right-[150px] top-[300px]" />
          <Sticker name="copypaste" width={170} rotate={6} className="right-[90px] top-[110px]" />
          {/* Context-menu flourish */}
          <div className="mt-12 flex justify-center" aria-hidden="true">
            <div className="relative flex rounded-xl bg-white text-base shadow-[0_8px_20px_rgba(0,0,0,0.12)] md:text-lg">
              {['Cut', 'Copy', 'Paste', 'Open… ▸'].map((t, i, a) => (
                <span key={t} className={`px-4 py-3 md:px-5 ${i < a.length - 1 ? 'border-r border-pale' : ''}`}>{t}</span>
              ))}
              <span className="absolute -bottom-[9px] left-1/2 -ml-[9px] h-[18px] w-[18px] rotate-45 bg-white" />
            </div>
          </div>

          <h1 className="m-0 mt-8 text-center font-display font-normal uppercase leading-[0.95]">
            <span className="block text-[56px] md:text-[115px]">What's inside</span>
            <span className="block text-[56px] md:text-[115px]">this folder</span>
          </h1>

          <div className="mt-14">
            <FolderDesktop />
          </div>
        </div>
      </section>
    </>
  )
}
