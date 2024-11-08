import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec18 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const sec18Ani = () => {
    const tl = gsap.timeline().from(".text_wrap .desc_16", 1, {
      opacity: 0,
      y: 100,
      ease: "power2.inOut",
    })
    ScrollTrigger.create({
      trigger: ".text_wrap .desc_16",
      start: `top 105%`,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }

  const sec18AniMb = () => {
    gsap.timeline().to(".sec18 .video_wrap", {
      scrollTrigger: {
        trigger: ".sec18 .video_wrap",
        start: "top 100%",
        onEnter: () => {
          if (document.querySelector(".sec18 .video_wrap video")) {
            ;(
              document.querySelector(
                ".sec18 .video_wrap video"
              ) as HTMLVideoElement
            )?.play()
          }
          videoRef.current?.play()
        },
      },
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec18Ani()
      } else {
        sec18AniMb()
      }
    },
    { scope: wrap }
  )

  return (
    <section className='sec18' ref={wrap}>
      <div className='sec18_wrap'>
        <div className='text_wrap slide_up'>
          <div
            className='title_75'
            dangerouslySetInnerHTML={{ __html: config?.sec18?.title }}
          ></div>
          {!isPc ? (
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec18?.desc }}
            ></p>
          ) : null}
        </div>
        <div className='pic_wrap'>
          <div className='video_wrap'>
            <LazyLoad offset={1000}>
              <video
                ref={videoRef}
                src={config.sec18.video.src}
                preload='auto'
                webkit-playsinline='true'
                playsInline={true}
                controls={false}
                autoPlay
                loop
                muted
              ></video>
            </LazyLoad>
          </div>
          <div className='img_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec18_phone_pc.webp"} />
          </div>
        </div>
        {isPc ? (
          <div className='text_wrap'>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec18?.desc }}
            ></p>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default Sec18
