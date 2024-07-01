import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec8 = () => {
  const { spark20pro5gConfig: config } = window as any
  const wrap = useRef(null)
  const { isPc } = useContext(ScreenContext)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec8Ani = () => {
    if (isPc) {
      const tl1 = gsap
        .timeline()
        .from(
          [".bg_wrap", ".img_wrap"],
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
        trigger: ".img_wrap",
        start: `top 80%`,
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
          [".bg_wrap", ".img_wrap"],
          1,
          {
            y: 60,
            opacity: 0,
          },
          "-=0.5"
        )

      ScrollTrigger.create({
        trigger: ".text_wrap",
        start: `top 90%`,
        animation: tl1,
      })
    }
  }

  useGSAP(
    () => {
      sec8Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec8' ref={wrap}>
      <div className='text_wrap'>
        <div className='title_wrap'>
          <span
            className='title_48'
            dangerouslySetInnerHTML={{ __html: config.sec8.title }}
          ></span>
        </div>
        <div className='desc_wrap'>
          <p
            className='desc_18'
            dangerouslySetInnerHTML={{ __html: config.sec8.desc }}
          ></p>
        </div>
      </div>
      <div className='bg_wrap'>
        <picture>
          <source media='(max-width: 1080px)' srcSet={config.sec8.bg.mb} />
          <source media='(min-width: 1081px)' srcSet={config.sec8.bg.pc} />
          <img src={config.sec8.bg.pc} loading='lazy' />
        </picture>
      </div>
      <div className='img_wrap'>
        <picture>
          <source media='(max-width: 1080px)' srcSet={config.sec8.img.mb} />
          <source media='(min-width: 1081px)' srcSet={config.sec8.img.pc} />
          <img src={config.sec8.img.pc} loading='lazy' />
        </picture>
      </div>
    </section>
  )
}

export default Sec8
