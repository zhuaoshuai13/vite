import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec10 = () => {
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec10Ani = () => {
    const tl = gsap
      .timeline()
      .from(".part1 .phone_wrap2", {
        x: "-100%",
        ease: "power2.inOut",
      })
      .to(
        ".part1",
        {
          x: "-100%",
          ease: "power2.inOut",
        },
        "a"
      )
      .to(
        ".part2",
        {
          x: 0,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(".part2 .phone_wrap2", {
        x: "20%",
        y: "30%",
        ease: "power2.inOut",
      })
      .to(
        ".part2",
        {
          x: "-100%",
          ease: "power2.inOut",
        },
        "c"
      )
      .to(
        ".part3",
        {
          x: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from([".part3 .phone_wrap2", ".part3 .phone_wrap3"], {
        clipPath: "inset(100% 0 0 0)",
        ease: "power2.inOut",
      })
    ScrollTrigger.create({
      trigger: ".sec10_wrap",
      start: `top -10%`,
      end: "+=500%",
      pin: true,
      scrub: 0.2,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }
  const sec10AniMb = () => {
    const tl = gsap
      .timeline()
      .from(
        ".phone3",
        {
          x: "3%",
          y: "5%",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
      .from(
        ".phone2",
        {
          x: "12%",
          y: "2%",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
      .from(
        ".phone1",
        {
          x: "66%",
          y: "5%",
          rotate: "-3deg",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
      .from(
        ".phone5",
        {
          x: "-7%",
          y: "-1%",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
      .from(
        ".phone6",
        {
          x: "-16%",
          y: "-6%",
          ease: "power2.inOut",
          duration: 2,
        },
        "a"
      )
      .from(
        ".phone7",
        {
          x: "-98%",
          y: "-20%",
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
          top: "-7%",
          left: "-7%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone2",
        {
          top: "-14%",
          left: "-20%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone1",
        {
          top: "-24%",
          left: "-36%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone5",
        {
          top: "2%",
          left: "18%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone6",
        {
          top: "15%",
          left: "30%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone7",
        {
          top: "56%",
          left: "115%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".phone_items",
        {
          x: "26%",
          y: "36%",
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
          x: "5%",
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
          x: "-29%",
          y: "-16%",
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
          x: "-48%",
          y: "-43%",
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
      end: "+=5000",
      pin: true,
      scrub: 0.2,
      animation: t2,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec10Ani()
      } else {
        sec10AniMb()
      }
    },
    { scope: wrap }
  )

  return (
    <section className='sec10' ref={wrap}>
      <div className='sec10_wrap'>
        <div className='parts'>
          <div className='part equal_parent part1'>
            <div className='text_wrap'>
              <div
                className='title_58'
                dangerouslySetInnerHTML={{
                  __html: config?.sec10?.part1?.title,
                }}
              ></div>
              <div
                className='subtitle_37'
                dangerouslySetInnerHTML={{
                  __html: config?.sec10?.part1?.subtitle,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec10?.part1?.desc }}
              ></p>
            </div>
            <div className='pic_wrap equal_parent'>
              <div className='img_wrap phone_wrap1'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec10_1_1_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec10_1_1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec10_1_1_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone_wrap2'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec10_1_2_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec10_1_2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec10_1_2_pc.webp"}
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className='part equal_parent part2'>
            <div className='text_wrap'>
              <div
                className='title_58'
                dangerouslySetInnerHTML={{
                  __html: config?.sec10?.part2?.title,
                }}
              ></div>
              <div
                className='subtitle_37'
                dangerouslySetInnerHTML={{
                  __html: config?.sec10?.part2?.subtitle,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec10?.part2?.desc }}
              ></p>
            </div>
            <div className='pic_wrap equal_parent'>
              <div className='img_wrap phone_wrap1'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec10_2_1_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec10_2_1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec10_2_1_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone_wrap2'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec10_2_2_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec10_2_2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec10_2_2_pc.webp"}
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className='part equal_parent part3'>
            <div className='text_wrap'>
              <div
                className='title_58'
                dangerouslySetInnerHTML={{
                  __html: config?.sec10?.part3?.title,
                }}
              ></div>
              <div
                className='subtitle_37'
                dangerouslySetInnerHTML={{
                  __html: config?.sec10?.part3?.subtitle,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec10?.part3?.desc }}
              ></p>
              <div className='img_wrap wps_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec10_3_4_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec10_3_4_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec10_3_4_pc.webp"}
                  />
                </picture>
              </div>
            </div>
            <div className='pic_wrap equal_parent'>
              <div className='img_wrap phone_wrap1'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec10_3_1_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec10_3_1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec10_3_1_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone_wrap2'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec10_3_2_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec10_3_2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec10_3_2_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone_wrap3'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec10_3_3_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec10_3_3_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec10_3_3_pc.webp"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec10
