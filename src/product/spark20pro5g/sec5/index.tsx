import { useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec5 = () => {
  const { spark20pro5gConfig: config } = window as any
  const [isActive, setIsActive] = useState(true)

  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec5Ani = () => {
    const tl1 = gsap
      .timeline()
      .from(
        ".left",
        1,
        {
          x: -200,
          opacity: 0,
          ease: "power2.inOut",
        },
        "same1"
      )
      .from(
        ".right",
        1,
        {
          x: 200,
          opacity: 0,
          ease: "power2.inOut",
        },
        "same1"
      )
      .from(
        [".center", ".button_wrap"],
        1,
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "-=0.5"
      )

    ScrollTrigger.create({
      trigger: ".ctt",
      start: `top 75%`,
      animation: tl1,
    })
  }

  useGSAP(
    () => {
      sec5Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec5' ref={wrap}>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec5.bg.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec5.bg.pc} />
            <img src={config.sec5.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='ctt'>
          <div className='right'>
          </div>
          <div className='button_wrap'>
            <span
              onClick={() => {
                setIsActive(true)
              }}
              className={isActive ? "active" : ""}
            >
              ON
            </span>
            <span className='line'>/</span>
            <span
              onClick={() => {
                setIsActive(false)
              }}
              className={!isActive ? "active" : ""}
            >
              OFF
            </span>
          </div>
          <div className='left'>
            <div className='text_bg'>
              <picture>
                <source
                  media='(max-width: 1080px)'
                  srcSet={config.sec5.text_bg.mb}
                />
                <source
                  media='(min-width: 1081px)'
                  srcSet={config.sec5.text_bg.pc}
                />
                <img src={config.sec5.text_bg.pc} loading='lazy' />
              </picture>
            </div>
            <div className='text_wrap'>
              <div className='title_wrap'>
                <span
                  className='title_48'
                  dangerouslySetInnerHTML={{ __html: config.sec5.title }}
                ></span>
                <span className='title_icon_white'></span>
              </div>
              <div className='desc_wrap'>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{ __html: config.sec5.desc }}
                ></p>
              </div>
            </div>
          </div>
          <div className='center'>
            <picture>
              <source
                media='(max-width: 1080px)'
                srcSet={config.sec5.img.off.mb}
              />
              <source
                media='(min-width: 1081px)'
                srcSet={config.sec5.img.off.pc}
              />
              <img src={config.sec5.img.off.pc} loading='lazy' />
            </picture>
            <picture>
              <source
                media='(max-width: 1080px)'
                srcSet={config.sec5.img.on.mb}
              />
              <source
                media='(min-width: 1081px)'
                srcSet={config.sec5.img.on.pc}
              />
              <img
                className='on_img'
                src={config.sec5.img.on.pc}
                loading='lazy'
                style={{ opacity: isActive ? 1 : 0 }}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec5
