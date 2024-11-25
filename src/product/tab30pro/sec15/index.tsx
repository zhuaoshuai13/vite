import React, { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { getTriggerSpace } from "../../../utils/getTriggerSpace"

import "./index.scss"

const Sec15 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  const sec15Ani = () => {
    const tl = gsap
      .timeline()
      .to(
        ".text_wrap1",
        {
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .to(
        [".text_wrap2", ".bg_wrap2", ".datas"],
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.5,
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: ".sec15_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=200%",
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
          duration: 1,
        },
        "a"
      )
      .to(
        [".text_wrap2", ".bg_wrap2", ".datas"],
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.5,
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: ".sec15_wrap",
      pin: true,
      start: `top ${getTriggerSpace(wrap.current, config?.navHeightMb)}`,
      end: "+=1500",
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
          <div className='img_wrap equal_parent bg_wrap1'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec15_f1_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec15_f1_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec15_f1_pc.webp"} />
            </picture>
          </div>
          <div className='img_wrap equal_parent bg_wrap2'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec15_f2_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec15_f2_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec15_f2_pc.webp"} />
            </picture>
          </div>
        </div>
        <div className='all_text'>
          <div className='text_wrap text_wrap1'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{
                __html: config?.sec15?.part1?.title,
              }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{
                __html: config?.sec15?.part1?.subtitle,
              }}
            ></div>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec15?.part1?.desc }}
            ></p>
          </div>
          <div className='text_wrap text_wrap2'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{
                __html: config?.sec15?.part2?.title,
              }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{
                __html: config?.sec15?.part2?.subtitle,
              }}
            ></div>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec15?.part2?.desc }}
            ></p>
          </div>
        </div>
        <div className='datas'>
          {config?.sec15?.part2?.data?.map((item: any, index: number) => {
            return (
              <React.Fragment key={index}>
                <div className='data_item'>
                  <div
                    className='data_title'
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                  ></div>
                  <div
                    className='data_desc'
                    dangerouslySetInnerHTML={{ __html: item?.desc }}
                  ></div>
                </div>
                {index !== config?.sec14?.data?.length - 1 && (
                  <div className='data_line'></div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Sec15
