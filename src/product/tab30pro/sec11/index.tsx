import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { getTriggerSpace } from "../../../utils/getTriggerSpace"

import "./index.scss"

const Sec11 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef<HTMLDivElement>(null)

  const sec11Ani = () => {
    const tl = gsap
      .timeline()
      .to(".pic_wrap", { x: "-39vw", ease: "power2.inOut", duration: 2 }, "a")
      .to(
        ".text_wrap:nth-child(1)",
        { opacity: 0, ease: "power2.inOut", duration: 1 },
        "a"
      )
      .to(
        ".text_wrap:nth-child(2)",
        { opacity: 1, ease: "power2.inOut", duration: 1 },
        "a+=1"
      )
      .to(".text_wrap:nth-child(2)", { ease: "power2.inOut", duration: 1 })
    ScrollTrigger.create({
      trigger: ".sec11_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=150%",
      animation: tl,
      scrub: 0.2,
    })
  }

  const sec11AniMb = () => {
    const tl = gsap
      .timeline()
      .to(".pic_wrap", { x: "-186vw", ease: "power2.inOut", duration: 2 }, "a")
      .to(
        ".text_wrap:nth-child(1)",
        { opacity: 0, ease: "power2.inOut", duration: 1 },
        "a"
      )
      .to(
        ".text_wrap:nth-child(2)",
        { opacity: 1, ease: "power2.inOut", duration: 1 },
        "a+=1"
      )
      .to(".text_wrap:nth-child(2)", { ease: "power2.inOut", duration: 1 })
    ScrollTrigger.create({
      trigger: ".sec11_wrap",
      pin: true,
      start: `top ${getTriggerSpace(wrap.current, config?.navHeightMb)}`,
      end: "+=1000",
      animation: tl,
      scrub: 0.2,
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec11Ani()
      } else {
        sec11AniMb()
      }
    },
    { scope: wrap, dependencies: [isPc] }
  )

  return (
    <section className='sec11' ref={wrap}>
      <div className='sec11_wrap'>
        <div className='all_text'>
          <div className='text_wrap'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{
                __html: config?.sec11?.part1?.title,
              }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{
                __html: config?.sec11?.part1?.subtitle,
              }}
            ></div>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec11?.part1?.desc }}
            ></p>
          </div>
          <div className='text_wrap'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{
                __html: config?.sec11?.part2?.title,
              }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{
                __html: config?.sec11?.part2?.subtitle,
              }}
            ></div>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec11?.part2?.desc }}
            ></p>
          </div>
        </div>
        <div className='pic_wrap'>
          <div className='img_wrap phone_wrap1'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec11_f1_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec11_f1_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec11_f1_pc.webp"} />
            </picture>
          </div>
          <div className='img_wrap phone_wrap2'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec11_f2_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec11_f2_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec11_f2_pc.webp"} />
            </picture>
          </div>
          <div className='pic_wrap2'>
            <div className='img_wrap phone_wrap3'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec11_f3_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec11_f3_pc.webp"}
                />
                <img loading='lazy' src={src + "/images/pc/sec11_f3_pc.webp"} />
              </picture>
            </div>
            <div className='img_wrap phone_wrap4'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec11_f4_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec11_f4_pc.webp"}
                />
                <img loading='lazy' src={src + "/images/pc/sec11_f4_pc.webp"} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec11
