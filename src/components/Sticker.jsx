// Decorative die-cut sticker. Hidden from screen readers and never blocks clicks.
// Pass position with className (e.g. "left-10 top-20") and size/rotation as props.
export default function Sticker({ name, width = 100, rotate = 0, className = '', hideOnMobile = true }) {
  return (
    <img
      src={`/images/stickers/${name}.webp`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      draggable="false"
      className={`pointer-events-none absolute z-[2] select-none ${hideOnMobile ? 'hidden md:block' : ''} ${className}`}
      style={{ width, transform: `rotate(${rotate}deg)`, filter: 'drop-shadow(0 6px 10px rgba(20,40,80,0.22))' }}
    />
  )
}
