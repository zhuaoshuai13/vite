import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec14 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  const sec14Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".phone_wrap",
        {
          x: "100%",
          duration: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".datas",
        {
          y: 150,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: ".phone_wrap",
      start: `top 80%`,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      sec14Ani()
    },
    { scope: wrap, dependencies: [isPc] }
  )

  return (
    <section className='sec14'>
      <div className='sec14_wrap' ref={wrap}>
        <div className='text_wrap slide_up'>
          <div className='left_wrap'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{ __html: config?.sec14?.title }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{ __html: config?.sec14?.subtitle }}
            ></div>
          </div>
          <div className='right_wrap'>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec14?.desc }}
            ></p>
          </div>
        </div>
        <div className='img_wrap phone_wrap'>
          <picture>
            <source
              media='(max-width: 750px)'
              srcSet={src + "/images/mb/sec14_f1_mb.webp"}
            />
            <source
              media='(min-width: 751px)'
              srcSet={src + "/images/pc/sec14_f1_pc.webp"}
            />
            <img loading='lazy' src={src + "/images/pc/sec14_f1_pc.webp"} />
          </picture>
        </div>
        <div className='datas'>
          {config?.sec14?.data?.map((item: any, index: number) => {
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

export default Sec14
