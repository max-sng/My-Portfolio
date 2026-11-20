import Sticker from '../components/Sticker.jsx'
import BizCard from '../components/BizCard.jsx'

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-screen scroll-mt-24 flex-col justify-center"
        style={{
          backgroundColor: '#4A8FD8',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.32) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.32) 1px, transparent 1px), linear-gradient(180deg, #EAF2FB 0%, #A9CCF0 45%, #4A8FD8 100%)',
          backgroundSize: '48px 48px, 48px 48px, 100% 100%',
        }}
      >
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-24 pt-28 md:px-16 md:pt-32">
          <Sticker name="sun" width={110} className="left-[110px] top-[110px]" />
          <Sticker name="spiral" width={100} rotate={12} className="right-[110px] top-[120px]" />
          <Sticker name="smiley" width={80} rotate={-10} className="bottom-5 left-[48%]" />
          <h1 className="m-0 mt-6 text-center font-display text-[48px] font-normal leading-[1.05] md:text-[79px]">AS PROMISED, MY CONTACTS.</h1>

          <div className="mt-20 flex justify-center">
            <div className="h-[204px] w-[336px] sm:h-[340px] sm:w-[560px]">
              <div className="origin-top-left scale-[0.6] sm:scale-100"><div className="-rotate-4"><BizCard /></div></div>
            </div>
          </div>
        </div>
    </section>
  )
}
