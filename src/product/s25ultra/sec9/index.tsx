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
      .from(
        ".sec9_bg",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".stone1_wrap",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".stone2_wrap",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".stone3_wrap",
        {
          opacity: 0,
          scale: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: ".sec9_wrap",
      // pin: true,
      start: `top 50%`,
      // end: "+=300%",
      animation: tl,
      // scrub: 0.2,
      toggleActions: "play none none reverse",
    })

    // gsap.to(".stone3_wrap", {
    //   y: -50,
    //   duration: 1.5,
    //   ease: "power1.inOut",
    //   repeat: -1,
    //   yoyo: true,
    // })
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
        <div className='text_wrap slide_up'>
          <div
            className='title_75'
            dangerouslySetInnerHTML={{ __html: config?.sec9?.title }}
          ></div>
          <p
            className='desc_16'
            dangerouslySetInnerHTML={{ __html: config?.sec9?.desc }}
          ></p>
        </div>
        {isPc ? (
          <div className='img_wrap sec9_bg'>
            <img loading='lazy' src={src + "/images/pc/sec9_bg_pc.webp"} />
          </div>
        ) : null}
        <div className='pic_wrap'>
          {!isPc ? (
            <div className='img_wrap sec9_bg'>
              <img loading='lazy' src={src + "/images/mb/sec9_bg_mb.png"} />
            </div>
          ) : null}
          <div className='img_wrap stone1_wrap'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec9_stone_behind_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec9_stone_behind_pc.webp"}
              />
              <img
                loading='lazy'
                src={src + "/images/pc/sec9_stone_behind_pc.webp"}
              />
            </picture>
          </div>
          <div className='img_wrap phone_wrap'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec9_phone_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec9_phone_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec9_phone_pc.webp"} />
            </picture>
          </div>
          <div className='img_wrap stone2_wrap'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec9_stone_front_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec9_stone_front_pc.webp"}
              />
              <img
                loading='lazy'
                src={src + "/images/pc/sec9_stone_front_pc.webp"}
              />
            </picture>
          </div>
          <div className='img_wrap stone3_wrap'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec9_stone_move_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec9_stone_move_pc.webp"}
              />
              <img
                loading='lazy'
                src={src + "/images/pc/sec9_stone_move_pc.webp"}
              />
            </picture>
          </div>
        </div>
        <div className='data_wrap slide_up'>
          {config?.sec9?.data?.map((item: any, index: number) => (
            <div className='data' key={index}>
              <div className='title'>
                {item.title}
                {item.unit && <span className='unit'>{item.unit}</span>}
              </div>
              <div className='desc'>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sec9
