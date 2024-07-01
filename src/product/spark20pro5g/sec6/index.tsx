import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec6 = () => {
  const { spark20pro5gConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)

  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec6Ani = () => {
    if(isPc) {
      const tl1 = gsap
        .timeline()
        .from(
          ".phone_bg",
          1,
          {
            x: -200,
            opacity: 0,
          },
          "same1"
        )
        .from(
          ".phone_8mp",
          1,
          {
            x: -200,
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
        trigger: ".ctt",
        start: `top 75%`,
        animation: tl1,
      })
    }else {
      const tl1 = gsap
        .timeline()
        .from(
          ".text_wrap",
          1,
          {
            x: -200,
            opacity: 0,
          },
          "same1"
        )
        .from(
          ".phone_bg",
          1,
          {
            x: -200,
            opacity: 0,
          },
          "-=0.5"
        )
        .from(
          ".phone_8mp",
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
      sec6Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec6' ref={wrap}>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec6.bg.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec6.bg.pc} />
            <img src={config.sec6.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='ctt'>
          <div className='img_wrap'>
            <picture>
              <source
                media='(max-width: 1080px)'
                srcSet={config.sec6.phone_bg.mb}
              />
              <source
                media='(min-width: 1081px)'
                srcSet={config.sec6.phone_bg.pc}
              />
              <img
                className='phone_bg'
                src={config.sec6.phone_bg.pc}
                loading='lazy'
              />
            </picture>
            <picture>
              <source
                media='(max-width: 1080px)'
                srcSet={config.sec6.phone.mb}
              />
              <source
                media='(min-width: 1081px)'
                srcSet={config.sec6.phone.pc}
              />
              <img
                className='phone_8mp'
                src={config.sec6.phone.pc}
                loading='lazy'
              />
            </picture>
          </div>
          <div className='text_wrap'>
            <div className='title_wrap'>
              <span
                className='title_48'
                dangerouslySetInnerHTML={{ __html: config.sec6.title }}
              ></span>
              <span className='title_icon_white'></span>
            </div>
            <div className='desc_wrap'>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{ __html: config.sec6.desc }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec6
