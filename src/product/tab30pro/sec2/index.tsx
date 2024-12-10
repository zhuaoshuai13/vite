import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec2 = () => {
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePart2Btn = () => {
    gsap.to(".fullVideo", {
      top: 0,
    })

    {
      ;(document.querySelector(".fullVideo video") as HTMLVideoElement)?.play()
    }
  }

  useGSAP(
    () => {
      if (!isPc) {
        gsap.timeline().to(".sec2 .video_wrap", {
          scrollTrigger: {
            trigger: ".sec2 .video_wrap",
            start: "top 100%",
            onEnter: () => {
              if (document.querySelector(".sec2 .video_wrap video")) {
                (
                  document.querySelector(
                    ".sec2 .video_wrap video"
                  ) as HTMLVideoElement
                )?.play()
              }
            },
          },
        })
      }
    },
    { scope: wrap, dependencies: [isPc] }
  )

  return (
    <section className='sec2' ref={wrap}>
      <div className='sec2_wrap'>
        <div className='video_wrap'>
          <LazyLoad offset={1000}>
            <video
              ref={videoRef}
              src={
                isPc
                  ? config?.sec2?.preview_video?.pc
                  : config?.sec2?.preview_video?.mb
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
        <div className='img_wrap play_wrap' onClick={() => handlePart2Btn()}>
          <img loading='lazy' src={src + "/images/pc/sec2_play_pc.webp"} />
        </div>
      </div>
    </section>
  )
}

export default Sec2
