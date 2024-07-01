import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec13 = () => {
  const { spark20pro5gConfig: config } = window as any
  const wrap = useRef(null)
  const { isPc } = useContext(ScreenContext)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec13Ani = () => {
    if (isPc) {
      const tl1 = gsap
        .timeline()
        .from(
          ".img_wrap",
          1,
          {
            y: 60,
            opacity: 0,
          },
          "same1"
        )
        .from(
          ".text_wrap",
          1,
          {
            y: 60,
            opacity: 0,
          },
          "-=0.5"
        )

      ScrollTrigger.create({
        trigger: ".ctt",
        start: `top 75%`,
        animation: tl1,
      })
    } else {
      const tl1 = gsap
        .timeline()
        .from(".text_wrap", 1, {
          y: 60,
          opacity: 0,
        })
        .from(
          ".img_wrap",
          1,
          {
            y: 60,
            opacity: 0,
          },
          "-=0.5"
        )

      ScrollTrigger.create({
        trigger: ".ctt",
        start: `top 75%`,
        animation: tl1,
      })
    }
  }

  useGSAP(
    () => {
      sec13Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec13' ref={wrap}>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec13.bg.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec13.bg.pc} />
            <img src={config.sec13.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='ctt'>
          <div className='img_wrap'>
            <picture>
              <source
                media='(max-width: 1080px)'
                srcSet={config.sec13.img.mb}
              />
              <source
                media='(min-width: 1081px)'
                srcSet={config.sec13.img.pc}
              />
              <img src={config.sec13.img.pc} loading='lazy' />
            </picture>
          </div>
          <div className='text_wrap'>
            <div className='title_wrap'>
              <span
                className='title_48'
                dangerouslySetInnerHTML={{ __html: config.sec13.title }}
              ></span>
            </div>
            <div className='desc_wrap'>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{ __html: config.sec13.desc }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec13
