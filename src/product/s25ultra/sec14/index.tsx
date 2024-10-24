import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec14 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
  const length = config?.sec11?.color?.length
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  const sec14Ani = () => {
    const tl = gsap
      .timeline()
      .from(".pic_wrap", { opacity: 0, y: 100, ease: "power2.inOut" })
    ScrollTrigger.create({
      trigger: ".sec14_wrap",
      start: `top 50%`,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      sec14Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec14' ref={wrap}>
      <div className='sec14_wrap'>
        <div className='top_wrap'>
          <div className='img_wrap ellipse_wrap'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec14_ellipse_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec14_ellipse_pc.webp"}
              />
              <img
                loading='lazy'
                src={src + "/images/pc/sec14_ellipse_pc.webp"}
              />
            </picture>
          </div>
          <div className='img_wrap wifi_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec14_wifi_pc.webp"} />
          </div>
        </div>
        <div className='bottom_wrap'>
          <div className='text_wrap'>
            <div
              className='title_75'
              dangerouslySetInnerHTML={{ __html: config?.sec14?.title }}
            ></div>
          </div>
          <div className='pic_wrap'>
            <div className='img_wrap bg_wrap'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec14_bg_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec14_bg_pc.webp"}
                />
                <img loading='lazy' src={src + "/images/pc/sec14_bg_pc.webp"} />
              </picture>
            </div>
            <div className='img_wrap left_hand1'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec14_lefthand1_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec14_lefthand1_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec14_lefthand1_pc.webp"}
                />
              </picture>
            </div>
            <div className='img_wrap right_hand1'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec14_righthand1_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec14_righthand1_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec14_righthand1_pc.webp"}
                />
              </picture>
            </div>
            <div className='img_wrap phone_wrap'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec14_phone_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec14_phone_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec14_phone_pc.webp"}
                />
              </picture>
            </div>
            <div className='circleBox left_circle'>
              <div className='circle'></div>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
            </div>
            <div className='circleBox right_circle'>
              <div className='circle'></div>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
            </div>
            <div className='img_wrap left_hand2'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec14_lefthand2_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec14_lefthand2_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec14_lefthand2_pc.webp"}
                />
              </picture>
            </div>
            <div className='img_wrap right_hand2'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec14_righthand2_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec14_righthand2_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec14_righthand2_pc.webp"}
                />
              </picture>
            </div>
            <div className='text_wrap bottom_text'>
              <div
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec14?.desc }}
              ></div>
            </div>
          </div>
          <div className='data_wrap'>
            {config?.sec14?.data?.map((item: any, index: number) => {
              return (
                <div className='data' key={index}>
                  <div
                    className='data_title'
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></div>
                  <div
                    className='desc_16'
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec14
