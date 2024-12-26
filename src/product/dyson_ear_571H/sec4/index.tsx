import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec4 = ({isload, destination}) => {
  const wrap = useRef(null)
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { ear571hConfig: config, src } = window as any

  const sec4Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".pdp_title",
        {
          opacity: 0,
          y: -200,
          ease: "power2.inOut",
          duration: 1,
          // delay: 0.2,
        },
        "a"
      )
      .from(
        ".pdp_desc",
        {
          opacity: 0,
          y: -100,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .from(
        ".video_wrap",
        {
          // y: -200,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: ".sec4",
      // scrub: 1,
      start: "top 75%",
      // end: "+=80%",
      // end: `+=${.8 * window.innerHeight}`,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      if (!isload && destination?.index == 4) {
        sec4Ani()
      }
    },
    { scope: wrap, dependencies: [isload, destination] }
  )
  return (
    <section className='section sec4 slide_sec' id='nav_link_1' ref={wrap}>
      <div className='sec4_wrap'>
        <div className='video_wrap'>
          <video
            src={src + "/video/s/e/sec4_1.mp4"}
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className='text_wrap'>
          <h3 className='pdp_title'>颜色多选，颜值百变</h3>
          <p className='pdp_desc'>
            通过可更换外壳和耳垫，在同一部耳机上实现不同风格的切换。 <br />
            心情，穿搭，或是风格？由你而定。
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sec4
