import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec14 = () => {
  const { spark20pro5gConfig: config } = window as any
  const wrap = useRef(null)
  const { isPc } = useContext(ScreenContext)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec14Ani = () => {
    if (isPc) {
      const tl1 = gsap
        .timeline()
        .from(
          ".img_wrap2",
          1,
          {
            x: 200,
            opacity: 0,
          },
          "same1"
        )
        .from(
          ".img_wrap",
          1,
          {
            x: -100,
            y: 100,
            opacity: 0,
          },
          "-=0.5"
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
        trigger: ".a_cont",
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
          ".img_wrap2",
          1,
          {
            x: 200,
            opacity: 0,
          },
          "-=0.5"
        )
        .from(
          ".img_wrap",
          1,
          {
            x: -100,
            y: 100,
            opacity: 0,
          },
          "-=0.5"
        )

      ScrollTrigger.create({
        trigger: ".a_cont",
        start: `top 75%`,
        animation: tl1,
      })
    }
  }

  useGSAP(
    () => {
      sec14Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec14' ref={wrap}>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec14.bg.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec14.bg.pc} />
            <img src={config.sec14.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='img_wrap2'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec14.img2.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec14.img2.pc} />
            <img src={config.sec14.img2.pc} loading='lazy' />
          </picture>
        </div>
        <div className='text_wrap'>
          <div className='title_wrap'>
            <span
              className='title_48'
              dangerouslySetInnerHTML={{ __html: config.sec14.title }}
            ></span>
            <span className='title_icon_white'></span>
          </div>
          <div className='desc_wrap'>
            <p
              className='desc_18'
              dangerouslySetInnerHTML={{ __html: config.sec14.desc }}
            ></p>
          </div>
        </div>
        <div className='img_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec14.img.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec14.img.pc} />
            <img src={config.sec14.img.pc} loading='lazy' />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Sec14
