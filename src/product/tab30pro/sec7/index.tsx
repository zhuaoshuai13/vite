import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { getTriggerSpace } from "../../../utils/getTriggerSpace"

import "./index.scss"

const Sec7 = () => {
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef<HTMLDivElement>(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec7Ani = () => {
    const tl = gsap
      .timeline()
      .to(".text_wrap:not(:nth-child(2))", {
        opacity: 0,
        ease: "power2.inOut",
      })
      .to(
        ".text_wrap:nth-child(2)",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".icon_wrap1",
        {
          x: "100%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "a"
      )
      .to(".icon_wrap1", {
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".text_wrap:not(:nth-child(3))",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".text_wrap:nth-child(3)",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".bg_wrap2",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "b"
      )
      .from(
        ".icon_wrap2",
        {
          x: "363%",
          y: "204%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(
        ".icon_wrap3",
        {
          x: "227%",
          y: "189%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(
        ".icon_wrap4",
        {
          x: "-147%",
          y: "228%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(
        ".icon_wrap5",
        {
          x: "-338%",
          y: "67%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(
        ".icon_wrap6",
        {
          x: "-48%",
          y: "-102%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(".icon_wrap", {
        ease: "power2.inOut",
      })
    ScrollTrigger.create({
      trigger: ".sec7_wrap",
      pin: true,
      start:
        window.innerHeight > (wrap.current?.offsetHeight || 0)
          ? `top ${getTriggerSpace(wrap.current, config?.navHeightPc)}`
          : `top 0%`,
      end: "+=300%",
      animation: tl,
      scrub: 0.2,
    })
  }
  const sec7AniMb = () => {
    const tl = gsap
      .timeline()
      .to(".text_wrap:not(:nth-child(2))", {
        opacity: 0,
        ease: "power2.inOut",
      })
      .to(
        ".text_wrap:nth-child(2)",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".icon_wrap1",
        {
          x: "100%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "a"
      )
      .to(".icon_wrap1", {
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".text_wrap:not(:nth-child(3))",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".text_wrap:nth-child(3)",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".bg_wrap2",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "b"
      )
      .from(
        ".icon_wrap2",
        {
          x: "363%",
          y: "204%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(
        ".icon_wrap3",
        {
          x: "227%",
          y: "189%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(
        ".icon_wrap4",
        {
          x: "-147%",
          y: "228%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(
        ".icon_wrap5",
        {
          x: "-338%",
          y: "67%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(
        ".icon_wrap6",
        {
          x: "-48%",
          y: "-102%",
          opacity: 0,
          ease: "power2.inOut",
        },
        "c"
      )
      .from(".icon_wrap", {
        ease: "power2.inOut",
      })
    ScrollTrigger.create({
      trigger: ".sec7_wrap",
      pin: true,
      start: `top ${getTriggerSpace(wrap.current, config?.navHeightMb)}`,
      end: "+=300%",
      animation: tl,
      scrub: 0.2,
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec7Ani()
      } else {
        sec7AniMb()
      }
    },
    { scope: wrap, dependencies: [isPc] }
  )

  return (
    <section className='sec7' ref={wrap}>
      <div className='sec7_wrap'>
        <div className='content_wrap'>
          <div className='pic_wrap'>
            <div className='img_wrap bg_wrap bg_wrap1'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec7_bg1_mb.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec7_bg1_pc.webp"}
                />
                <img loading='lazy' src={src + "/images/pc/sec7_bg1_pc.webp"} />
              </picture>
            </div>
            <div className='img_wrap bg_wrap bg_wrap2'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec7_bg2_mb.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec7_bg2_pc.webp"}
                />
                <img loading='lazy' src={src + "/images/pc/sec7_bg2_pc.webp"} />
              </picture>
            </div>
            <div className='img_wrap icon_wrap icon_wrap1'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/pc/sec7_icon1_pc.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec7_icon1_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec7_icon1_pc.webp"}
                />
              </picture>
            </div>
            <div className='img_wrap icon_wrap icon_wrap2'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/pc/sec7_icon2_pc.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec7_icon2_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec7_icon2_pc.webp"}
                />
              </picture>
            </div>
            <div className='img_wrap icon_wrap icon_wrap3'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/pc/sec7_icon3_pc.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec7_icon3_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec7_icon3_pc.webp"}
                />
              </picture>
            </div>
            <div className='img_wrap icon_wrap icon_wrap4'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/pc/sec7_icon4_pc.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec7_icon4_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec7_icon4_pc.webp"}
                />
              </picture>
            </div>
            <div className='img_wrap icon_wrap icon_wrap5'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/pc/sec7_icon5_pc.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec7_icon5_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec7_icon5_pc.webp"}
                />
              </picture>
            </div>
            <div className='img_wrap icon_wrap icon_wrap6'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/pc/sec7_icon6_pc.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec7_icon6_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec7_icon6_pc.webp"}
                />
              </picture>
            </div>
          </div>
          <div className='all_text'>
            <div className='text_wrap'>
              <div
                className='title_58'
                dangerouslySetInnerHTML={{ __html: config?.sec7?.part1?.title }}
              ></div>
              <div
                className='subtitle_37'
                dangerouslySetInnerHTML={{
                  __html: config?.sec7?.part1?.subtitle,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec7?.part1?.desc }}
              ></p>
            </div>
            <div className='text_wrap'>
              <div
                className='title_58'
                dangerouslySetInnerHTML={{ __html: config?.sec7?.part2?.title }}
              ></div>
              <div
                className='subtitle_37'
                dangerouslySetInnerHTML={{
                  __html: config?.sec7?.part2?.subtitle,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec7?.part2?.desc }}
              ></p>
            </div>
            <div className='text_wrap'>
              <div
                className='title_58'
                dangerouslySetInnerHTML={{ __html: config?.sec7?.part3?.title }}
              ></div>
              <div
                className='subtitle_37'
                dangerouslySetInnerHTML={{
                  __html: config?.sec7?.part3?.subtitle,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec7?.part3?.desc }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec7
