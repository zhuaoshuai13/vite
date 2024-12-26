import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec1 = () => {
  const { src } = window as any
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec1Ani = () => {
    const tl = gsap.timeline().to(
      ".sec1_video",
      {
        y: "50%",
        ease: "power2.inOut",
        duration: 1,
      },
      "a"
    )

    ScrollTrigger.create({
      trigger: ".sec1_wrap",
      start: `top 0%`,
      animation: tl,
      scrub: 0.5,
    })
  }

  useGSAP(
    () => {
      // sec1Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='section sec1 slide_sec' ref={wrap}>
      <div className='sec1_wrap'>
        <video
          className='sec1_video'
          src={src + "/video/s/e/sec1.mp4"}
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  )
}

export default Sec1
