import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import UseImagesLoad from "../../../hooks/useImagesLoad"

import "./index.scss"

const Sec1 = () => {
  const { ear571hConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
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
      sec1Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec1' ref={wrap}>
      {/* <a href="music://geo.itunes.apple.com/albums/album/%E4%B8%83%E9%87%8C%E9%A6%99/536114662?i=536115195">cccccc</a> */}
      <div className='sec1_wrap'>
        <video
          className='sec1_video'
          src={src + '/videos/sec1.mp4'}
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  )
}

export default Sec1
