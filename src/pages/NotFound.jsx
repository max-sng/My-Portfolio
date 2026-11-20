import BackButton from '../components/BackButton.jsx'

export default function NotFound() {
  return (
    <main className="bg-sky-grid flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center text-white">
      <h1 className="m-0 font-display text-[120px] font-normal leading-[1.05] [text-shadow:5px_5px_0_#B3121B]">404</h1>
      <p className="m-0 text-xl font-medium">This page fell off the layout grid.</p>
      <BackButton to="/" />
    </main>
  )
}
