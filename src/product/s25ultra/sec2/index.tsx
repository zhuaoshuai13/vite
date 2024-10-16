import { useRef, useState } from "react"
// import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec2 = () => {
  const { s25ultraConfig: config } = window as any
  // const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)
  const length = config?.sec2?.text.length

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec2Ani = () => {
    const tl = gsap.timeline()
    ScrollTrigger.create({
      trigger: ".sec2_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=2000",
      animation: tl,
      onUpdate: (self) => {
        const active = Math.round(self.progress * (length - 1))
        if (active == 0) {
          setActiveIndex(1)
        } else {
          setActiveIndex(active)
        }
      },
    })
  }

  useGSAP(
    () => {
      sec2Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec2' ref={wrap}>
      <div className='sec2_wrap'>
        <div className='video_wrap'>
          <LazyLoad offset={1000}>
            <video
              src={config.sec2.video.src}
              poster={config.sec2.video.poster ? config.sec2.video.poster : ""}
              muted
              preload='auto'
              webkit-playsinline='true'
              playsInline={true}
              autoPlay
              loop
              controls={false}
            ></video>
          </LazyLoad>
        </div>
        <div className='text_wrap'>
          <div className='title_items'>
            {config.sec2.text.map((item: string, index: number) => (
              <p key={index} className={index === activeIndex ? "active" : ""}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <button className='video_play_btn'></button>
      </div>
    </section>
  )
}

export default Sec2
