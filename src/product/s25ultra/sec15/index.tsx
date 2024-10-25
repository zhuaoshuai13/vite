import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec15 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
  const length = config?.sec11?.color?.length
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  const sec15Ani = () => {
    const tl = gsap
      .timeline()
      .to(
        ".phone1",
        {
          x: "-24%",
          y: "24%",
          rotate: "44.7deg",
          ease: "power2.inOut",
        },
        "a"
      )
      .to(
        ".text_wrap1",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "a"
      )
      .to(
        ".text_wrap2",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone2",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "b"
      )
    ScrollTrigger.create({
      trigger: ".sec15_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=500%",
      animation: tl,
      scrub: 0.2,
    })
  }

  const sec15AniMb = () => {
    const tl = gsap
      .timeline()
      .to(
        ".text_wrap1",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "a"
      )
      .to(
        ".text_wrap2",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone2",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "b"
      )
    ScrollTrigger.create({
      trigger: ".sec15_wrap",
      pin: true,
      start: `top 10%`,
      end: "+=200%",
      animation: tl,
      scrub: 0.2,
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec15Ani()
      } else {
        sec15AniMb()
      }
    },
    { scope: wrap }
  )

  return (
    <section className='sec15' ref={wrap}>
      <div className='sec15_wrap'>
        <div className='pic_wrap'>
          <div className='img_wrap phone1'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec15_p1_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec15_p1_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec15_p1_pc.webp"} />
            </picture>
          </div>
          <div className='img_wrap phone2'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec15_p2_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec15_p2_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec15_p2_pc.webp"} />
            </picture>
          </div>
        </div>
        <div className='all_text'>
          <div className='text_wrap text_wrap1'>
            <div
              className='title_75'
              dangerouslySetInnerHTML={{
                __html: config?.sec15?.part1?.title,
              }}
            ></div>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec15?.part1?.desc }}
            ></p>
          </div>
          <div className='text_wrap text_wrap2'>
            <div
              className='title_75'
              dangerouslySetInnerHTML={{
                __html: config?.sec15?.part2?.title,
              }}
            ></div>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec15?.part2?.desc }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec15
