import { useRef, useState, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec2 = () => {
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const length = config?.sec2?.text.length
  const [timeline, setTimeline] = useState<any>()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const handlePart2Btn = () => {
    gsap.to(".fullVideo", {
      top: 0,
    })
  }

  const sec2Ani = () => {
    const tl = gsap
      .timeline()
      .to(".slogn", { opacity: 0, y: 100 })
      .to(".text_wrap", { opacity: 1 })
      .to(".title_items p:nth-child(1)", { margin: "2vw 0" })
      .to(".title_items p:nth-child(1)", { margin: "0 0" }, "a")
      .to(".title_items p:nth-child(2)", { margin: "2vw 0" }, "a")
      .to(".title_items p:nth-child(2)", { margin: "0 0" }, "b")
      .to(".title_items p:nth-child(3)", { margin: "2vw 0" }, "b")
      .to(".title_items p:nth-child(3)", { margin: "0 0" }, "c")
      .to(".title_items p:nth-child(4)", { margin: "2vw 0" }, "c")
      .to(".title_items p:nth-child(4)", { margin: "0 0" })
      .to(".part1", { y: "-100%" }, "part2")
      .to(".part2", {}, "part3")
    ScrollTrigger.create({
      trigger: ".sec2_wrap",
      pin: true,
      scrub: true,
      start: `top 0%`,
      end: "+=300%",
      animation: tl,
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
                src={isPc ? config.sec2.video.pc : config.sec2.video.mb}
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
              <img src={src + "/images/pc/sec2_play_pc.webp"} />
            </div>
          </button>
        </div>
        <div className='part part1'>
          <div className='img_wrap bg_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec2_bg_pc.webp"} />
          </div>
          <p
            className='slogn'
            dangerouslySetInnerHTML={{ __html: config.sec2.slogn }}
          ></p>
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
        </div>
      </div>
    </section>
  )
}

export default Sec2
