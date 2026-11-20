/** Pill that says which part of the portfolio a section belongs to (Projects or Case Study). */
export default function PartLabel({ part, detail, light = false }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.14em] ${light ? 'bg-white text-red' : 'bg-ink text-white'}`}>
      <span>{part}</span>
      {detail && <span className={light ? 'text-ink/60' : 'text-white/60'}>· {detail}</span>}
    </div>
  )
}
