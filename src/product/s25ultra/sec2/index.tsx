import React, { useRef, useContext } from "react"
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
  const videoRef = useRef<HTMLVideoElement>(null)
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const handlePart2Btn = () => {
    gsap.to(".fullVideo", {
      top: 0,
    })
  }

  const sec2Ani = () => {
    gsap.utils.toArray(".sec2 .title_items p").forEach((item: any) => {
      gsap.from(item, {
        opacity: 0,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      })
    })
    const tl = gsap
      .timeline()
      .to(".title_items p:not(.slogn) span", { opacity: 0 })
      .to(".slogn", { fontSize: "5.2vw" })
      .to(".part1", { y: "-100%" })
      .to(".part2", {})
    ScrollTrigger.create({
      trigger: ".sec2_wrap",
      pin: true,
      scrub: true,
      start: `top 0%`,
      end: "+=3000",
      animation: tl,
    })
  }

  const sec2AniMb = () => {
    gsap.utils.toArray(".sec2 .title_items p").forEach((item: any) => {
      gsap.from(item, {
        opacity: 0,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      })
    })
    const tl = gsap
      .timeline()
      .to(".title_items p:not(.slogn) span", { opacity: 0 })
      .to(".slogn", { fontSize: "7.7vw" })
      .to(".part1", { y: "-100%" })
      .to(".part2", {})
    ScrollTrigger.create({
      trigger: ".sec2_wrap",
      pin: true,
      scrub: true,
      start: `top 0%`,
      end: "+=3000",
      animation: tl,
    })

    gsap.timeline().to(".sec2 .video_wrap", {
      scrollTrigger: {
        trigger: ".sec2 .video_wrap",
        start: "top 100%",
        onEnter: () => {
          if (document.querySelector(".sec2 .video_wrap video")) {
            ;(
              document.querySelector(
                ".sec2 .video_wrap video"
              ) as HTMLVideoElement
            )?.play()
          }
        },
      },
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec2Ani()
      } else {
        sec2AniMb()
      }
    },
    { scope: wrap, dependencies: [isPc], revertOnUpdate: true }
  )

  return (
    <section className='sec2' ref={wrap}>
      <div className='sec2_wrap'>
        <div className='part part2'>
          <div className='video_wrap'>
            <LazyLoad offset={1000}>
              <video
                ref={videoRef}
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
          <div className='text_wrap'>
            <div className='title_items'>
              {config.sec2.text.map((item: string, index: number) => (
                <React.Fragment key={index}>
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                  </p>
                  {index + 1 === Math.floor(config?.sec2?.text?.length / 2) ? (
                    <p className='slogn'>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: config?.sec2?.slogn,
                        }}
                      ></span>
                    </p>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec2
