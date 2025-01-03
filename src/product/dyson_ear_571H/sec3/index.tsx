import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"
const Sec3 = ({ isload, destination }) => {
  const wrap = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { src } = window as any
  const [timeline, setTimeline] = useState()

  const sec3Ani = () => {
    const tl = gsap
      .timeline()
      .to(
        ".sec3 .part1 .pdp_title",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .to(
        ".sec3 .part1 .desc_wrap",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.2,
        },
        "a"
      )
      .to(
        ".sec3 .part1 .switch_box",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.4,
        },
        "a"
      )
      .to(
        ".sec3 .video_wrap",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.4,
        },
        "a"
      )
      .to(
        ".sec3 .line1",
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.inOut",
          duration: 2,
        },
        "line"
      )
      .to(
        ".sec3 .line2",
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.inOut",
          duration: 1,
        },
        "line"
      )
      .to(
        ".sec3 .line3",
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.inOut",
          duration: 1,
        },
        "line"
      )
      .to(
        ".sec3 .line4",
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.inOut",
          duration: 1,
          delay: 1,
        },
        "line"
      )
      .to(
        ".sec3 .line5",
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.inOut",
          duration: 1,
        },
        "line"
      )
      .to(
        ".sec3 .line6",
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.inOut",
          duration: 1,
        },
        "line"
      )
      .to(
        ".sec3 .line7",
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.inOut",
          duration: 1,
        },
        "line"
      )

    const ss = ScrollTrigger.create({
      trigger: ".sec3",
      start: `top 75%`,
      animation: tl,
      toggleActions: "play none none reverse",
    })
    setTimeline(tl)
  }

  const sec32Ani = () => {
    const tl2 = gsap
      .timeline()
      .from(
        ".sec32 .part2 .pdp_title",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .from(
        ".sec32 .part2 .pdp_desc",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.2,
        },
        "a"
      )
      .from(
        ".sec32 .part2 .action_wrap",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.4,
        },
        "a"
      )
      .from(
        ".sec32 .part2 .voice_wrap",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.4,
        },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec32",
      start: `top 75%`,
      animation: tl2,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      if (!isload && destination?.index == 2) {
        sec3Ani()
      } else {
        if (timeline) {
          timeline.progress(0).pause()
        }
      }
    },
    { scope: wrap, dependencies: [isload, destination] }
  )

  return (
    <section className='section sec3' ref={wrap}>
      <div className='sec3_wrap'>
        {/* <div className='video_wrap'>
          <video src={src + "/video/s/e/sec3.mp4"} autoPlay muted loop></video>
        </div> */}
        <div className='content_wrap'>
          <div className='part part1 slide_sec'>
            <h3 className='pdp_title'>先进降噪，声临其境</h3>
            <div className='desc_wrap'>
              <p className='pdp_desc'>
                8 个主动降噪麦克风，
                <br /> 高达 40 分贝降噪深度。
              </p>
              <p className='pdp_desc'>
                戴森双麦克风波束成型技术，
                <br /> 嘈杂中精准捕声，通话更清晰。
              </p>
            </div>
            <div className='switch_box'>
              <div className='double_click img_wrap'>
                <img src={src + "/wysiwyg/ipadassets/571/double_click.gif"} />
              </div>
              <p className='pdp_desc'>
                双击切换 <br />
                通透模式 / 沉浸模式
              </p>
            </div>
            <div className='line line1'></div>
            <div className='line line2'></div>
            <div className='line line3'></div>
            <div className='line line4'></div>
            <div className='line line5'></div>
            <div className='line line6'></div>
            <div className='line line7'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec3
