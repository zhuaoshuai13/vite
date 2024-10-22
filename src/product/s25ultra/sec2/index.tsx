import { useRef, useState } from "react"
// import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec2 = () => {
  const { s25ultraConfig: config, src } = window as any
  // const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)
  const length = config?.sec2?.text.length
  const [timeline, setTimeline] = useState<any>()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const handlePart1Btn = () => {
    gsap.to(window, {
      scrollTo: {
        y: timeline.scrollTrigger.labelToScroll("part3"),
      },
      ease: "power2.inOut",
    })
  }

  const handlePart2Btn = () => {
    gsap.to(".fullVideo", {
      top: 0,
    })
  }

  const sec2Ani = () => {
    const tl = gsap
      .timeline()
      .to(".title_items p", {})
      .to(".part1", { y: "-100%" }, "part2")
      .to(".part2", {}, "part3")
    ScrollTrigger.create({
      trigger: ".sec2_wrap",
      pin: true,
      scrub: 0.2,
      start: `top 0%`,
      end: "+=300%",
      animation: tl,
      onUpdate: (self) => {
        const active = Math.round((self.progress + 0.6) * (length - 1))
        if (active >= 0 && active < length) {
          if (self.progress == 0) {
            setActiveIndex(1)
          } else {
            setActiveIndex(active)
          }
        }
      },
    })
    setTimeline(tl)
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
        <div className='part part2'>
          <div className='video_wrap'>
            <LazyLoad offset={1000}>
              <video
                src={config.sec2.video.src}
                poster={
                  config.sec2.video.poster ? config.sec2.video.poster : ""
                }
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
          <button className='video_play_btn part2_btn' onClick={handlePart2Btn}>
            <div className='img_wrap'>
              <img src={src + "/images/pc/sec2_play_pc.png"} />
            </div>
          </button>
        </div>
        <div className='part part1'>
          <div className='img_wrap bg_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec2_bg_pc.png"} />
          </div>
          <div className='text_wrap'>
            <div className='title_items'>
              {config.sec2.text.map((item: string, index: number) => (
                <p
                  key={index}
                  className={index === activeIndex ? "active" : ""}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <button className='video_play_btn' onClick={handlePart1Btn}>
            <div className='img_wrap'>
              <img src={src + "/images/pc/sec2_play_pc.png"} />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sec2
