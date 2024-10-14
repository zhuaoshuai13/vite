import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec9 = () => {
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec9Ani = () => {
    const tl = gsap
      .timeline()
      .from(".phone_wrap", {
        x: "-100%",
        y: "-100%",
        opacity: 0,
        ease: "power2.inOut",
      })
      .from(".sec9_bg", {
        opacity: 0,
        ease: "power2.inOut",
      }, "a")
      .from(".stone1_wrap", {
        opacity: 0,
        ease: "power2.inOut",
      }, "a")
      .from(".stone2_wrap", {
        opacity: 0,
        ease: "power2.inOut",
      }, "a")
      .from(".stone3_wrap", {
        opacity: 0,
        ease: "power2.inOut",
      })
    ScrollTrigger.create({
      trigger: ".sec9_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=300%",
      animation: tl,
      scrub: 0.2,
    })
  }

  useGSAP(
    () => {
      sec9Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec9' ref={wrap}>
      <div className='sec9_wrap'>
        <div className='img_wrap sec9_bg'>
          <img src={src + "/images/pc/sec9_bg_pc.png"} />
        </div>
        <div className='pic_wrap'>
          <div className='img_wrap stone1_wrap'>
            <img src={src + "/images/pc/sec9_stone_behind_pc.png"} />
          </div>
          <div className='img_wrap phone_wrap'>
            <img src={src + "/images/pc/sec9_phone_pc.png"} />
          </div>
          <div className='img_wrap stone2_wrap'>
            <img src={src + "/images/pc/sec9_stone_front_pc.png"} />
          </div>
          <div className='img_wrap stone3_wrap'>
            <img src={src + "/images/pc/sec9_stone_move_pc.png"} />
          </div>
        </div>
        <div className='text_wrap'>
          <div
            className='title_75'
            dangerouslySetInnerHTML={{ __html: config?.sec9?.title }}
          ></div>
          <p
            className='desc_16'
            dangerouslySetInnerHTML={{ __html: config?.sec9?.desc }}
          ></p>
        </div>
      </div>
    </section>
  )
}

export default Sec9
