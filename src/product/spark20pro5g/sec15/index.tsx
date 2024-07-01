import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec15 = () => {
  const { spark20pro5gConfig: config } = window as any
  const wrap = useRef(null)
  const { isPc } = useContext(ScreenContext)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec15Ani = () => {
    if (isPc) {
      const tl1 = gsap
        .timeline()
        .from(
          ".bg_wrap",
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
        trigger: ".bg_wrap",
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
          ".bg_wrap img",
          1,
          {
            y: 60,
            opacity: 0,
          },
          "-=0.5"
        )

      ScrollTrigger.create({
        trigger: ".bg_wrap",
        start: `top 75%`,
        animation: tl1,
      })
    }
  }

  useGSAP(
    () => {
      sec15Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec15' ref={wrap}>
      <div className='volume_wrap'>
        <div className='volume_icon'></div>
        <div className='volume_title'>
          <span
            className='volume_big'
            dangerouslySetInnerHTML={{
              __html: config.sec15.volume_big,
            }}
          ></span>
          <span
            className='volume_small'
            dangerouslySetInnerHTML={{
              __html: config.sec15.volume_small,
            }}
          ></span>
        </div>
        <div className='volume_icon'></div>
      </div>
      <div className='bg_wrap'>
        <picture>
          <source media='(max-width: 1080px)' srcSet={config.sec15.bg.mb} />
          <source media='(min-width: 1081px)' srcSet={config.sec15.bg.pc} />
          <img src={config.sec15.bg.pc} loading='lazy' />
        </picture>
        <div className='ctt'>
          <div className='text_wrap'>
            <div className='title_wrap'>
              <span
                className='title_48'
                dangerouslySetInnerHTML={{ __html: config.sec15.title }}
              ></span>
              <span className='title_icon_white'></span>
            </div>
            <div className='desc_wrap'>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{ __html: config.sec15.desc }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec15
