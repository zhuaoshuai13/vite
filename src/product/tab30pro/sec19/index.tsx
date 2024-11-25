import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import "./index.scss"

const Sec19 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  const sec19Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".left_wrap",
        1,
        {
          opacity: 0,
          x: "-20%",
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".right_wrap",
        1,
        {
          opacity: 0,
          x: "20%",
          ease: "power2.inOut",
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: wrap.current,
      start: `top 90%`,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec19Ani()
      }
    },
    { scope: wrap }
  )

  return (
    <section className='sec19' ref={wrap}>
      <div className='sec19_wrap'>
        <div className='box_wrap'>
          <div className='left_wrap'>
            <div className='box_item'>
              <div className='text_wrap'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec19?.camera?.title,
                  }}
                ></div>
                <div
                  className='desc_16'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec19?.camera?.desc,
                  }}
                ></div>
              </div>
              <div className='img_wrap img_wrap1'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec19_f1_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec19_f1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_f1_pc.webp"}
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className='right_wrap'>
            <div className='box_item'>
              <div className='text_wrap'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec19?.game?.title,
                  }}
                ></div>
                <div
                  className='desc_16'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec19?.game?.desc,
                  }}
                ></div>
              </div>
              <div className='img_wrap img_wrap2'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec19_f2_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec19_f2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_f2_pc.webp"}
                  />
                </picture>
              </div>
            </div>
            <div className='box_item'>
              <div className='text_wrap'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec19?.android?.title,
                  }}
                ></div>
                <div
                  className='desc_16'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec19?.android?.desc,
                  }}
                ></div>
              </div>
              <div className='img_wrap img_wrap3'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec19_f3_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec19_f3_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_f3_pc.webp"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className='tips_wrap'>
          <div
            className='note'
            dangerouslySetInnerHTML={{ __html: config?.sec19?.notes + ":" }}
          ></div>
          {config?.sec19?.tips?.map((item: string, index: number) => (
            <p
              dangerouslySetInnerHTML={{ __html: item }}
              key={index}
              className='desc_16'
            ></p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sec19
