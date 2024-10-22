import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec6 = () => {
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec6Ani = () => {
    const tl = gsap
      .timeline()
      .to(".sec6 .part1", 1, { opacity: 0, ease: "power2.inOut" }, "a")
      .to(
        ".sec6 .part2",
        1,
        { opacity: 1, ease: "power2.inOut", delay: 0.5 },
        "a"
      )
      .to(".sec6 .part2", 1, { opacity: 0, ease: "power2.inOut" }, "b")
      .to(
        ".sec6 .part3",
        1,
        { opacity: 1, ease: "power2.inOut", delay: 0.5 },
        "b"
      )
    ScrollTrigger.create({
      trigger: ".sec6_wrap",
      pin: true,
      start: `top 0`,
      end: "+=400%",
      animation: tl,
      scrub: true,
      toggleActions: "play none none reverse",
    })

    const t2 = gsap
      .timeline()
      .from(".sec6 .part1 .hand_wrap", 1, {
        x: "50%",
        y: "-50%",
        ease: "power4.inOut",
      })
      .from(".sec6 .part1 .circle_wrap", 1, {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      })
    ScrollTrigger.create({
      trigger: ".sec6_wrap",
      start: `top 50%`,
      animation: t2,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      sec6Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec6' ref={wrap}>
      <div className='sec6_wrap'>
        <div className='part part1'>
          <div className='text_wrap'>
            <div
              className='title_75'
              dangerouslySetInnerHTML={{ __html: config?.sec6?.part1?.title }}
            ></div>
            <p
              className='desc'
              dangerouslySetInnerHTML={{ __html: config?.sec6?.part1?.desc }}
            ></p>
          </div>
          <div className='pic_wrap'>
            <div className='img_wrap phone_wrap'>
              <img loading='lazy' src={src + "/images/pc/sec6_p1_pc.png"} />
            </div>
            <div className='img_wrap circle_wrap'>
              <img loading='lazy' src={src + "/images/pc/sec6_circle_pc.png"} />
            </div>
          </div>
          <div className='img_wrap hand_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec6_f1_pc.png"} />
          </div>
        </div>
        <div className='part part2'>
          <div className='text_wrap'>
            <div
              className='title_75'
              dangerouslySetInnerHTML={{ __html: config?.sec6?.part2?.title }}
            ></div>
            <p
              className='desc'
              dangerouslySetInnerHTML={{ __html: config?.sec6?.part2?.desc }}
            ></p>
          </div>
          <div className='pic_wrap'>
            <div className='img_wrap phone_wrap'>
              <img loading='lazy' src={src + "/images/pc/sec6_p2_pc.png"} />
            </div>
            <div className='img_wrap nit_wrap'>
              {/* <img loading="lazy" src={src + "/images/pc/sec5_nit_pc.png"} /> */}
            </div>
          </div>
          <div className='img_wrap hand_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec6_f2_pc.png"} />
          </div>
        </div>
        <div className='part part3'>
          <div className='text_wrap'>
            <div
              className='title_75'
              dangerouslySetInnerHTML={{ __html: config?.sec6?.part3?.title }}
            ></div>
            <p
              className='desc'
              dangerouslySetInnerHTML={{ __html: config?.sec6?.part3?.desc }}
            ></p>
          </div>
          <div className='pic_wrap'>
            <div className='img_wrap phone_wrap'>
              <img loading='lazy' src={src + "/images/pc/sec6_p3_pc.png"} />
            </div>
            <div className='img_wrap fingerprint_wrap'>
              <img
                loading='lazy'
                src={src + "/images/pc/sec6_fingerprint_pc.png"}
              />
            </div>
            <div className='img_wrap fingerprintlight_wrap1'>
              <img
                loading='lazy'
                src={src + "/images/pc/sec6_fingerprintlight1_pc.png"}
              />
            </div>
            <div className='img_wrap fingerprintlight_wrap2'>
              <img
                loading='lazy'
                src={src + "/images/pc/sec6_fingerprintlight2_pc.png"}
              />
            </div>
          </div>
          <div className='img_wrap hand_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec6_f1_pc.png"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec6
