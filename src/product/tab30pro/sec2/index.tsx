import React, { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec2 = () => {
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const handlePart2Btn = () => {
    gsap.to(".fullVideo", {
      top: 0,
    })

    {
      ;(document.querySelector(".fullVideo video") as HTMLVideoElement)?.play()
    }
  }

  return (
    <section className='sec2' ref={wrap}>
      <div className='sec2_wrap'>
        <div className='img_wrap bg_wrap'>
          <img loading='lazy' src={src + "/images/pc/sec2_bg_pc.png"} />
        </div>
        <div className='img_wrap play_wrap' onClick={() => handlePart2Btn()}>
          <img loading='lazy' src={src + "/images/pc/sec2_play_pc.png"} />
        </div>
      </div>
    </section>
  )
}

export default Sec2
