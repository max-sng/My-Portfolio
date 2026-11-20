import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from 'motion/react'
import IdCard from './IdCard.jsx'

const STRAP = 130 // resting strap length in px
const SCALE = 0.84 // card size on the Home page

/**
 * The profile ID hanging on a lanyard.
 * - Drops in and dangles when the page loads
 * - Drag it anywhere; it swings back when released
 * - A plain click still flips the card
 * Place it inside a `relative` container; the strap hangs from the container's top.
 */
export default function Lanyard() {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const dragged = useRef(false)

  // Pendulum angle from the card's offset
  const rotate = useTransform([x, y], ([vx, vy]) => {
    const deg = (Math.atan2(-vx, Math.max(STRAP + vy, STRAP * 0.8)) * 180) / Math.PI
    return Math.max(-55, Math.min(55, deg))
  })
  const strapHeight = useTransform([x, y], ([vx, vy]) => {
    const dy = STRAP + vy
    return dy > 0 ? Math.sqrt(vx * vx + dy * dy) + 6 : 0
  })

  const swingHome = (bouncy = true) => {
    const spring = bouncy && !reduce ? { type: 'spring', stiffness: 70, damping: 5 } : { duration: 0.2 }
    animate(x, 0, spring)
    animate(y, 0, bouncy && !reduce ? { type: 'spring', stiffness: 110, damping: 9 } : { duration: 0.2 })
  }

  // Drop-in on load
  useEffect(() => {
    if (reduce) return
    x.set(140)
    y.set(-720)
    const t = setTimeout(() => swingHome(true), 120)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce])

  return (
    <div className="relative h-[700px] w-full">
      {/* Strap */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[-40px] z-[1] w-[30px] -ml-[15px] overflow-hidden bg-red shadow-[2px_0_6px_rgba(0,0,0,0.2)]"
        style={{ height: strapHeight, rotate, originX: 0.5, originY: 0 }}
      >
        <span className="absolute inset-y-0 left-[3px] right-[3px] border-x-[1.5px] border-white/70" />
        <span className="absolute left-[7px] top-[50px] whitespace-nowrap font-sub text-xs font-bold tracking-[0.3em] text-white [writing-mode:vertical-rl]">
          SAMMI · SAMMI · SAMMI
        </span>
      </motion.div>

      {/* Card */}
      <motion.div
        className="absolute left-1/2 z-[2] w-[436px] cursor-grab touch-none active:cursor-grabbing"
        style={{ x, y, rotate, top: -40 + STRAP, marginLeft: -218, scale: SCALE, originX: 0.5, originY: 0 }}
        drag
        dragMomentum={false}
        onDragStart={() => { dragged.current = true }}
        onDragEnd={() => {
          swingHome(true)
          setTimeout(() => { dragged.current = false }, 60)
        }}
      >
        <div className="mx-auto h-[30px] w-[46px] rounded-[8px_8px_4px_4px] border-2 border-[#8E949C] bg-[#C9CDD3] relative" aria-hidden="true">
          <span className="absolute left-3 top-2 h-2 w-[18px] rounded bg-[#8E949C]" />
        </div>
        <div className="-mt-1 rounded-[40px] border-2 border-white/80 bg-white/30 p-[18px] shadow-[0_24px_40px_rgba(20,40,80,0.3)]">
          <IdCard onFlipAttempt={() => !dragged.current} />
        </div>
        <p className="mt-2.5 text-center font-sub text-[15px] font-bold tracking-[0.1em] text-navy">DRAG ME · CLICK TO FLIP</p>
      </motion.div>
    </div>
  )
}
