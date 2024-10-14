import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec2 = () => {
  const { s25ultraConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec1Ani = () => {
    // const tl = gsap
    //   .timeline()
    //   .to(".title_items", { y: -100, ease: "power2.inOut" }, "a")

    // ScrollTrigger.create({
    //   trigger: ".sec2_wrap",
    //   pin: true,
    //   start: `top 0%`,
    //   end: "+=2000",
    //   animation: tl,
    // })
    // const titleList = gsap.utils.toArray(".sec2 .title_items p")
    // titleList.forEach((item, index) =>
    //   gsap.to(item, {
    //     scrollTrigger: {
    //       trigger: ".sec2_wrap",
    //       scrub: true,
    //       pin: true,
    //       start: "top 0%",
    //       end: "+=100%",
    //     },
    //     fontSize: 75,
    //     ease: "none",
    //   })
    // )
  }

  useGSAP(
    () => {
      sec1Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec2' ref={wrap}>
      <div className='sec2_wrap'>
        <div className='video_wrap'>
          <LazyLoad offset={1000}>
            <video
              src={config.sec2.video.src}
              poster={config.sec2.video.poster ? config.sec2.video.poster : ""}
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
        <div className='text_wrap'>
          <div className='title_items'>
            {config.sec2.text.map((item: string, index: number) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <button className='video_play_btn'></button>
      </div>
    </section>
  )
}

export default Sec2
