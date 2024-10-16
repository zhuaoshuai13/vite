import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec10 = () => {
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec10Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".phone3",
        {
          x: "4%",
          y: "14%",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
      .from(
        ".phone2",
        {
          x: "15%",
          y: "6%",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
      .from(
        ".phone1",
        {
          x: "26%",
          y: "11%",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
      .from(
        ".phone5",
        {
          x: "-9%",
          y: "0%",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
      .from(
        ".phone6",
        {
          x: "-19%",
          y: "-15%",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
      .from(
        ".phone7",
        {
          x: "-28%",
          y: "-33%",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: ".sec10_wrap",
      start: `top 50%`,
      // end: "+=300%",
      animation: tl,
      toggleActions: "play none none reverse",
    })

    const t2 = gsap
      .timeline()
      .to(
        ".phone3",
        {
          left: "-3%",
          top: "-10%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone2",
        {
          left: "-10%",
          top: "-34%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone1",
        {
          left: "-21%",
          top: "-47%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone5",
        {
          left: "10%",
          top: "10%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone6",
        {
          left: "20%",
          top: "20%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone7",
        {
          left: "35%",
          top: "15%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone_items",
        {
          x: "40%",
          y: "50%",
          rotate: "20deg",
          ease: "power2.inOut",
        },
        "c"
      )
      .to(
        ".phone_wrap:not(.phone2)",
        {
          opacity: 0.2,
          ease: "power2.inOut",
        },
        "c"
      )
      .to(
        ".text1",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "c"
      )
      .to(
        ".phone_wrap:not(.phone3):not(.phone4)",
        {
          opacity: 0.2,
          ease: "power2.inOut",
        },
        "d"
      )
      .to(
        [".phone3", ".phone4"],
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "d"
      )
      .to(
        ".phone_items",
        {
          x: "25%",
          y: "10%",
          ease: "power2.inOut",
        },
        "d"
      )
      .to(
        ".text1",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "d"
      )
      .to(
        ".text_wrap:not(.text2)",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "d"
      )
      .to(
        ".text2",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "d+=0.2"
      )
      .to(
        ".phone_wrap:not(.phone5)",
        {
          opacity: 0.2,
          ease: "power2.inOut",
        },
        "e"
      )
      .to(
        ".phone5",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "e"
      )
      .to(
        ".phone_items",
        {
          x: "16%",
          y: "-32%",
          ease: "power2.inOut",
        },
        "e"
      )
      .to(
        ".text_wrap:not(.text3)",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "e"
      )
      .to(
        ".text3",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "e+=0.2"
      )
      .to(
        ".phone_wrap:not(.phone6)",
        {
          opacity: 0.2,
          ease: "power2.inOut",
        },
        "f"
      )
      .to(
        ".phone6",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "f"
      )
      .to(
        ".phone_items",
        {
          x: "-9%",
          y: "-64%",
          ease: "power2.inOut",
        },
        "f"
      )
      .to(
        ".text_wrap:not(.text4)",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "f"
      )
      .to(
        ".text4",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "f+=0.2"
      )
    ScrollTrigger.create({
      trigger: ".sec10_wrap",
      start: `top 0%`,
      end: "+=500%",
      pin: true,
      scrub: 0.2,
      animation: t2,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      sec10Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec10' ref={wrap}>
      <div className='sec10_wrap'>
        <div className='pic_wrap'>
          <div className='img_wrap bg_wrap'>
            <img src={src + "/images/pc/sec10_bg_pc.png"} />
          </div>
          <div className='phone_items'>
            <div className='img_wrap phone_wrap phone7'>
              <img src={src + "/images/pc/sec10_p7_pc.png"} />
            </div>
            <div className='img_wrap phone_wrap phone6'>
              <img src={src + "/images/pc/sec10_p6_pc.png"} />
            </div>
            <div className='img_wrap phone_wrap phone5'>
              <img src={src + "/images/pc/sec10_p5_pc.png"} />
            </div>
            <div className='img_wrap phone_wrap phone4'>
              <img src={src + "/images/pc/sec10_p4_pc.png"} />
            </div>
            <div className='img_wrap phone_wrap phone3'>
              <img src={src + "/images/pc/sec10_p3_pc.png"} />
            </div>
            <div className='img_wrap phone_wrap phone2'>
              <img src={src + "/images/pc/sec10_p2_pc.png"} />
            </div>
            <div className='img_wrap phone_wrap phone1'>
              <img src={src + "/images/pc/sec10_p1_pc.png"} />
            </div>
          </div>
          <div className='text_items'>
            <div className='text_wrap text1'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: config?.sec10?.part1?.title,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec10?.part1?.desc }}
              ></p>
            </div>
            <div className='text_wrap text2'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: config?.sec10?.part2?.title,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec10?.part2?.desc }}
              ></p>
            </div>
            <div className='text_wrap text3'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: config?.sec10?.part3?.title,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec10?.part3?.desc }}
              ></p>
            </div>
            <div className='text_wrap text4'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: config?.sec10?.part4?.title,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec10?.part4?.desc }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec10
