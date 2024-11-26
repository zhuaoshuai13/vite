import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec13 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  const sec13Ani = () => {
    const tl = gsap
      .timeline()
      .to(".text_wrap>.desc_16", { opacity: 0, ease: "power2.inOut" })
      .to(".text_wrap>.desc_16", {
        display: "none",
        duration: 0.1,
        ease: "power2.inOut",
      })
      .to(
        [".datas", ".compare_wrap"],
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".score_line",
        {
          width: 0,
          ease: "power2.inOut",
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: ".sec13_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=200%",
      animation: tl,
      scrub: 0.2,
    })
  }

  const sec13AniMb = () => {
    const tl = gsap
      .timeline()
      .to(".text_wrap>.desc_16", { opacity: 0, ease: "power2.inOut" })
      .to(".text_wrap>.desc_16", {
        display: "none",
        duration: 0.1,
        ease: "power2.inOut",
      })
      .to(
        [".datas", ".compare_wrap"],
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".score_line",
        {
          width: 0,
          ease: "power2.inOut",
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: ".sec13_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=1500",
      animation: tl,
      scrub: 0.2,
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec13Ani()
      } else {
        sec13AniMb()
      }
    },
    { scope: wrap }
  )

  return (
    <section className='sec13' ref={wrap}>
      <div className='sec13_wrap'>
        <div className='pic_wrap equal_parent'>
          <div className='img_wrap bg_wrap equal_parent'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec13_bg_mb.webp"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec13_bg_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec13_bg_pc.webp"} />
            </picture>
          </div>
          <div className='img_wrap processor_wrap slide_up'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec13_processor_mb.webp"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec13_processor_pc.webp"}
              />
              <img
                loading='lazy'
                src={src + "/images/pc/sec13_processor_pc.webp"}
              />
            </picture>
          </div>
        </div>
        <div className='text_wrap slide_up'>
          <div
            className='title_58'
            dangerouslySetInnerHTML={{
              __html: config?.sec13?.title,
            }}
          ></div>
          <div
            className='subtitle_37'
            dangerouslySetInnerHTML={{
              __html: config?.sec13?.subtitle,
            }}
          ></div>
          <p
            className='desc_16'
            dangerouslySetInnerHTML={{ __html: config?.sec13?.desc }}
          ></p>
          <div className='datas'>
            {config?.sec13?.data?.map((item: any, index: number) => {
              return (
                <div className='data_item' key={index}>
                  <div
                    className='data_title'
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                  ></div>
                  <div
                    className='desc_16'
                    dangerouslySetInnerHTML={{ __html: item?.desc }}
                  ></div>
                </div>
              )
            })}
          </div>
          <div className='compare_wrap'>
            <div className='processor_modal_wrap'>
              <div
                className='processor_name'
                dangerouslySetInnerHTML={{ __html: config?.sec13?.cpu1 }}
              ></div>
              <div
                className='processor_name'
                dangerouslySetInnerHTML={{ __html: config?.sec13?.cpu2 }}
              ></div>
            </div>
            <div className='improve_wrap'>
              <div className='improve_item'>
                <div
                  className='improve'
                  dangerouslySetInnerHTML={{ __html: config?.sec13?.improve1 }}
                ></div>
                <div className='score_line new_score'></div>
                <div className='score_line old_score'></div>
              </div>
              <div className='improve_item'>
                <div
                  className='improve'
                  dangerouslySetInnerHTML={{ __html: config?.sec13?.improve2 }}
                ></div>
                <div className='score_line new_score'></div>
                <div className='score_line old_score'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec13
