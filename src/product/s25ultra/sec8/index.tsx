import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec8 = () => {
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // const sec7Ani = () => {
  //   const tl = gsap
  //     .timeline()
  //     .to(".spec_part", { y: "-100%", ease: "power2.inOut" })
  //     .to(".phone1", { opacity: 0, ease: "power2.inOut" }, "a")
  //     .fromTo(
  //       ".phone2",
  //       { rotateX: 90 },
  //       { rotateX: 0, opacity: 1, ease: "power2.inOut" },
  //       "a+=0.2"
  //     )
  //   ScrollTrigger.create({
  //     trigger: ".sec7_wrap",
  //     pin: true,
  //     start: `top 0%`,
  //     end: "+=300%",
  //     animation: tl,
  //     scrub: 0.2,
  //   })
  // }

  // useGSAP(
  //   () => {
  //     sec7Ani()
  //   },
  //   { scope: wrap }
  // )

  return (
    <section className='sec8' ref={wrap}>
      <div className='sec8_wrap'>
        <div className='img_wrap sec8_bg'>
          <img loading='lazy' src={src + "/images/pc/sec8_bg_pc.png"} />
        </div>
        <div className='text_wrap'>
          <div
            className='title_75'
            dangerouslySetInnerHTML={{ __html: config?.sec8?.title }}
          ></div>
          <p
            className='desc_16'
            dangerouslySetInnerHTML={{ __html: config?.sec8?.desc }}
          ></p>
        </div>
      </div>
    </section>
  )
}

export default Sec8
