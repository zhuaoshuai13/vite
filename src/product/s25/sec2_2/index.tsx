import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec2_2 = ({
  useGSAP,
  gsap,
  ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)

  useGSAP(
    () => {
      const tl = gsap.timeline()
      tl.to(
        "#sec2_2",
        {
          opacity: 1,
          ease: "none",
          duration: 1,
        },
        "a"
      )

      ScrollTrigger.create({
        trigger: "#sec2_2",
        start: "top top",
        end: "+=150%",
        animation: tl,
        scrub: true,
        pin: true,
      })
    },
    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )

  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })

  const fa = contextSafe(() => {
    const video = document.querySelector(".fullVideo video") as HTMLVideoElement
    if (video) {
      video.setAttribute("autoplay", "true")
      video.play()
    }
    gsap.to(".fullVideo", {
      top: 0,
    })
  })

  return (
    <section id='sec2_2' ref={ref} className={`imgLoad${load}`}>
      <div className='sec2_2'>
        <div className='video'>
          <video
            // ref={videoRef}
            className='v1'
            // src={
            //   responsive?.md
            //     ? config.sec1.shortVideo.H
            //     : config.sec1.shortVideo.V
            // }
            src='/src/assets/videos/shortPc.mp4'
            // poster={
            //   responsive?.md
            //     ? config.sec1.video.H.post
            //     : config.sec1.video.V.post
            // }
            autoPlay={true}
            webkit-playsinline='true'
            playsInline={true}
            preload='auto'
            muted
            loop={true}
          ></video>
          <div className='play' onClick={fa}></div>
        </div>
      </div>
    </section>
  )
}

export default Sec2_2
