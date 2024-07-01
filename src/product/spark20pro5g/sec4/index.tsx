import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec4 = () => {
  const { spark20pro5gConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec4Ani = () => {
    if (isPc) {
      const tl1 = gsap
        .timeline()
        .from(".img_wrap", 1, {
          x: -200,
          opacity: 0,
          ease: "power2.inOut",
        })
        .from(
          ".text_wrap",
          1,
          {
            y: 60,
            opacity: 0,
            ease: "power2.inOut",
          },
          "-=0.5"
        )

      ScrollTrigger.create({
        trigger: ".img_wrap",
        start: `top 75%`,
        animation: tl1,
      })
    } else {
      const tl1 = gsap
        .timeline()
        .from(".text_wrap", 1, {
          y: 60,
          opacity: 0,
          ease: "power2.inOut",
        })
        .from(
          ".img_wrap",
          1,
          {
            x: -200,
            opacity: 0,
            ease: "power2.inOut",
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
      sec4Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec4' ref={wrap}>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec4.bg.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec4.bg.pc} />
            <img src={config.sec4.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='ctt'>
          <div className='img_wrap'>
            <img src={config.sec4.img} loading='lazy' />
          </div>
          <div className='text_wrap'>
            <div className='title_wrap'>
              <span
                className='title_48'
                dangerouslySetInnerHTML={{ __html: config.sec4.title }}
              ></span>
              <span className='title_icon_white'></span>
            </div>
            <div className='desc_wrap'>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{ __html: config.sec4.desc }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec4
