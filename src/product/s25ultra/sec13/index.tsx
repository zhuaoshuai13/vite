import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec13 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
  const length = config?.sec11?.color?.length
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  const sec13Ani = () => {
    const tl = gsap
      .timeline()
      .to(".spec_part", 1, { y: "-100%", ease: "power2.inOut" })
      .from(
        ".part1 .chip_wrap1",
        {
          x: "-4%",
          y: "42%",
          rotate: "-7deg",
          rotateX: "62deg",
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".part1 .clip_light_wrap1 img",
        {
          clipPath: "inset(400px 0 0)",
          ease: "power2.inOut",
        },
        "b"
      )
      .from(
        ".part1 .clip_light_circle_wrap1",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "b"
      )
      .from(
        ".part1 .chip_wrap2",
        {
          x: "-2%",
          y: "47%",
          rotate: "-7deg",
          rotateX: "60deg",
          skewX: "4deg",
          skewY: "2deg",
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".part1 .clip_light_wrap2 img",
        {
          clipPath: "inset(400px 0 0)",
          ease: "power2.inOut",
        },
        "b"
      )
      .from(
        ".part1 .clip_light_circle_wrap2",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "b"
      )
      .from(".part1 .data_wrap", {
        opacity: 0,
        ease: "power2.inOut",
      })
      .to(
        ".part1",
        {
          x: "-100%",
          ease: "power2.inOut",
        },
        "c"
      )
      .to(
        ".part2",
        {
          x: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(".part2 .chip_wrap1", {
        x: "-4%",
        y: "58%",
        rotate: "-6deg",
        rotateX: "60deg",
        ease: "power2.inOut",
      })
      .from(
        ".part2 .clip_light_wrap1 img",
        {
          clipPath: "inset(400px 0 0)",
          ease: "power2.inOut",
        },
        "d"
      )
      .from(
        ".part2 .clip_light_circle_wrap1",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "d"
      )
      .to(".part2 .clip_light_circle_wrap1", {})
    ScrollTrigger.create({
      trigger: ".sec13_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=500%",
      animation: tl,
      scrub: 0.2,
    })
  }

  useGSAP(
    () => {
      sec13Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec13' ref={wrap}>
      <div className='sec13_wrap'>
        <div className='spec_part'>
          <div className='spec_text_wrap'>
            <div
              className='spec_title'
              dangerouslySetInnerHTML={{ __html: config?.sec13?.spec_title }}
            ></div>
            <p
              className='spec_desc'
              dangerouslySetInnerHTML={{ __html: config?.sec13?.spec_desc }}
            ></p>
          </div>
        </div>
        <div className='content_wrap'>
          <div className='part part1'>
            <div className='text_wrap'>
              <div
                className='title_75'
                dangerouslySetInnerHTML={{
                  __html: config?.sec13?.part1?.title,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec13?.part1?.desc }}
              ></p>
            </div>
            <div className='pic_wrap'>
              <div className='img_wrap phone_wrap'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec13_part1_pc.png"}
                />
              </div>
              <div className='img_wrap clip_light_circle_wrap2'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec13_512g_light_circle_pc.png"}
                />
              </div>
              <div className='img_wrap clip_light_wrap2'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec13_512g_light_pc.png"}
                />
              </div>
              <div className='img_wrap chip_wrap2'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec13_512g_pc.png"}
                />
              </div>
              <div className='img_wrap clip_light_circle_wrap1'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec13_16g_light_circle_pc.png"}
                />
              </div>
              <div className='img_wrap clip_light_wrap1'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec13_16g_light_pc.png"}
                />
              </div>
              <div className='img_wrap chip_wrap1'>
                <img loading='lazy' src={src + "/images/pc/sec13_16g_pc.png"} />
              </div>
            </div>
            <div className='data_wrap'>
              {config?.sec13?.part1?.data?.map((item: any, index: number) => {
                return (
                  <div className='data' key={index}>
                    <div
                      className='data_subtitle'
                      dangerouslySetInnerHTML={{ __html: item?.subtitle }}
                    ></div>
                    <div
                      className='data_title'
                      dangerouslySetInnerHTML={{ __html: item?.title }}
                    ></div>
                    <div
                      className='data_desc'
                      dangerouslySetInnerHTML={{ __html: item?.desc }}
                    ></div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='part part2'>
            <div className='text_wrap'>
              <div
                className='title_75'
                dangerouslySetInnerHTML={{
                  __html: config?.sec13?.part2?.title,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec13?.part2?.desc }}
              ></p>
            </div>
            <div className='pic_wrap'>
              <div className='img_wrap phone_wrap'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec13_part2_pc.png"}
                />
              </div>
              <div className='img_wrap clip_light_circle_wrap1'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec13_t620_light_circle_pc.png"}
                />
              </div>
              <div className='img_wrap clip_light_wrap1'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec13_t620_light_pc.png"}
                />
              </div>
              <div className='img_wrap chip_wrap1'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec13_t620_pc.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec13
