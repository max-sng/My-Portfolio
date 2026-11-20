import { Play } from 'lucide-react'

const links = [
  { to: '#home', label: 'Home' },
  { to: '#about', label: 'About & Skills' },
  { to: '#projects', label: 'Projects' },
  { to: '#case-study', label: 'Case Study' },
  { to: '#contact', label: 'Contact', arrow: true },
]

export default function Nav() {
  return (
    <nav aria-label="Primary" className="fixed left-1/2 top-6 z-20 -translate-x-1/2 md:top-9">
      <ul className="no-scrollbar flex max-w-[calc(100vw-24px)] overflow-x-auto rounded-[14px] bg-white text-[13px] font-medium shadow-[0_10px_24px_rgba(20,40,80,0.22)] sm:text-base">
        {links.map((l, i) => (
          <li key={l.to} className={i < links.length - 1 ? 'border-r border-[#E3E6EA]' : ''}>
            <a href={l.to} className="flex items-center gap-2 whitespace-nowrap px-3 py-3 text-ink transition-colors hover:bg-red hover:text-white sm:px-5 sm:py-[15px]">
              {l.label}
              {l.arrow && <Play size={9} fill="currentColor" aria-hidden="true" />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
