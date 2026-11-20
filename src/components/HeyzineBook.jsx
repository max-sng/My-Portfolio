import { ExternalLink } from 'lucide-react'

/** Embeds a Heyzine flipbook with a fallback link to open it full screen. */
export default function HeyzineBook({ url, title, tone = 'light' }) {
  const ink = tone === 'dark' ? 'text-white' : 'text-ink'
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_rgba(0,0,0,0.25)]">
        <iframe
          src={url}
          title={`${title} flipbook`}
          allowFullScreen
          allow="autoplay; fullscreen; clipboard-write"
          scrolling="no"
          className="block h-[360px] w-full border-0 sm:h-[460px] lg:h-[520px]"
        />
      </div>
      <a href={url} target="_blank" rel="noopener" className={`mt-3.5 inline-flex items-center gap-2 text-sm font-bold underline-offset-4 hover:underline ${ink}`}>
        Open on Heyzine <ExternalLink size={14} aria-hidden="true" />
      </a>
    </div>
  )
}
