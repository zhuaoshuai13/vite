import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { getTriggerSpace } from "../../../utils/getTriggerSpace"

import "./index.scss"

const Sec10 = () => {
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec10Ani = () => {
    const tl = gsap
      .timeline()
      // .from(".part1 .phone_wrap2", {
      //   x: "-100%",
      //   ease: "power2.inOut",
      // })
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
      // .from(".part1 .phone_wrap2", {
      //   x: "-100%",
      //   ease: "power2.inOut",
      // })
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
      start: `top ${getTriggerSpace(wrap.current, config?.navHeightMb)}`,
      end: "+=2000",
      pin: true,
      scrub: 0.2,
      animation: tl,
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
                    srcSet={src + "/images/mb/sec10_1_1_mb.png"}
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
                    srcSet={src + "/images/mb/sec10_1_2_mb.png"}
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
                    srcSet={src + "/images/mb/sec10_2_1_mb.png"}
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
                    srcSet={src + "/images/mb/sec10_2_2_mb.png"}
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
                    srcSet={src + "/images/pc/sec10_3_4_pc.webp"}
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
                    srcSet={src + "/images/mb/sec10_3_1_mb.png"}
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
                    srcSet={src + "/images/mb/sec10_3_2_mb.png"}
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
                    srcSet={src + "/images/mb/sec10_3_3_mb.png"}
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
