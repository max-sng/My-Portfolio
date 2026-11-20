import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackButton({ to = '/' }) {
  return (
    <Link
      to={to}
      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-[18px] text-sm font-bold text-ink no-underline shadow-[0_4px_12px_rgba(20,40,80,0.15)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold"
    >
      <ArrowLeft size={16} strokeWidth={2.4} aria-hidden="true" />
      Back
    </Link>
  )
}
