import { useContext, useRef, useState } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"
let flag = true

const Sec10 = ({ isload, destination }) => {
  const wrap = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { ear571hConfig: config, src } = window as any

  const sec10Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".pdp_title",
        {
          y: 200,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".pdp_desc",
        {
          y: 200,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          delay: 0.1,
        },
        "a"
      )
      .from(
        ".img_wrap",
        {
          y: 300,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".img_wrap img",
        {
          y: -150,
          duration: 1,
          ease: "power2.inOut",
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: wrap.current,
      scrub: 1,
      start: "top 100%",
      // end: "+=80%",
      end: `+=${wrap.current?.clientHeight}`,
      animation: tl,
      toggleActions: "play none none reverse",
      scroller: document.querySelector(".bottom_part"),
    })
  }

  useGSAP(
    () => {
      if (!isload && destination?.index == 7 && flag) {
        sec10Ani()
        flag = false
      }
    },
    { scope: wrap, dependencies: [isload, destination] }
  )

  return (
    <section className='sec10'>
      <div className='sec10_wrap' ref={wrap}>
        <div className='content_wrap'>
          <div className='img_wrap'>
            <img src={src + "/wysiwyg/ipadassets/571/sec10.jpg"} />
          </div>
          <div className='text_wrap'>
            <h3 className='pdp_title'>
              重量和质感的
              <br />
              理想平衡
            </h3>
            <p className='pdp_desc'>
              戴森从马鞍的设计汲取灵感，并大胆引入新材质，在重量和质感上取得了平衡。戴森将这份重量均匀分布在左右两侧，减少佩戴时对头部的压力。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec10
