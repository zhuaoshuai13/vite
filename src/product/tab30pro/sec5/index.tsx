import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec5 = () => {
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec5Ani = () => {
    const tl = gsap.timeline().from(
      [".display_light_wrap", ".text_wrap", ".data_box"],
      {
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      },
      "a"
    )
    ScrollTrigger.create({
      trigger: ".sec5_wrap",
      start: `bottom 110%`,
      end: "+=200%",
      pin: true,
      scrub: 0.2,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }
  const sec5AniMb = () => {
    const tl = gsap.timeline().from(
      [".display_light_wrap", ".text_wrap", ".data_box"],
      {
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      },
      "a"
    )
    ScrollTrigger.create({
      trigger: ".sec5_wrap",
      start: `top 0`,
      end: "+=1000",
      pin: true,
      scrub: 0.2,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec5Ani()
      } else {
        sec5AniMb()
      }
    },
    { scope: wrap, dependencies: [isPc] }
  )

  return (
    <section className='sec5' ref={wrap}>
      <div className='sec5_wrap'>
        <div className='pic_wrap'>
          <div className='img_wrap display_dark_wrap'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec5_display_dark_mb.webp"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec5_display_dark_pc.webp"}
              />
              <img
                loading='lazy'
                src={src + "/images/pc/sec5_display_dark_pc.webp"}
              />
            </picture>
          </div>
          <div className='img_wrap display_light_wrap equal_parent'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec5_display_light_mb.webp"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec5_display_light_pc.webp"}
              />
              <img
                loading='lazy'
                src={src + "/images/pc/sec5_display_light_pc.webp"}
              />
            </picture>
          </div>
        </div>
        <div className='text_wrap'>
          <div
            className='title_58'
            dangerouslySetInnerHTML={{ __html: config?.sec5?.title }}
          ></div>
          <div
            className='subtitle_37'
            dangerouslySetInnerHTML={{ __html: config?.sec5?.subtitle }}
          ></div>
          <p
            className='desc_16'
            dangerouslySetInnerHTML={{ __html: config?.sec5?.desc }}
          ></p>
        </div>
        {isPc ? (
          <div className='datas'>
            <div className='data_box'>
              {config?.sec5?.data
                ?.slice(0, 4)
                ?.map((item: any, index: number) => {
                  return (
                    <div className='data' key={index}>
                      <img src={item?.icon} />
                      <div className='data_text'>
                        <div
                          className='data_title'
                          dangerouslySetInnerHTML={{ __html: item?.title }}
                        ></div>
                        <div
                          className='data_desc'
                          dangerouslySetInnerHTML={{ __html: item?.desc }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
            </div>
            <div className='data_box'>
              {config?.sec5?.data?.slice(4)?.map((item: any, index: number) => {
                return (
                  <div className='data' key={index}>
                    <img src={item?.icon} />
                    <div className='data_text'>
                      <div
                        className='data_title'
                        dangerouslySetInnerHTML={{ __html: item?.title }}
                      ></div>
                      <div
                        className='data_desc'
                        dangerouslySetInnerHTML={{ __html: item?.desc }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className='datas'>
            <div className='data_box'>
              {config?.sec5?.data?.map((item: any, index: number) => {
                return (
                  <div className='data' key={index}>
                    <img src={isPc ? item?.icon : item?.iconmb || item?.icon} />
                    <div className='data_text'>
                      <div
                        className='data_title'
                        dangerouslySetInnerHTML={{ __html: item?.title }}
                      ></div>
                      <div
                        className='data_desc'
                        dangerouslySetInnerHTML={{ __html: item?.desc }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Sec5
