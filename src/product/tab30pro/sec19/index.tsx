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
  const part4SwiperRef = useRef<SwiperClass>()

  const handleHover = (activeIndex: number) => {
    document.querySelectorAll(".sec19 .part7 .item").forEach((item, index) => {
      item.classList.remove("active")
      if (index === activeIndex) {
        item.classList.add("active")
      }
    })
  }

  return (
    <section className='sec19' ref={wrap}>
      <div className='sec19_wrap'>
        <div className='box_wrap'>
          <div className='left_wrap'>
            <div className='box_item'>
              <div className='img_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec6_p2_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec6_p2_pc.png"}
                  />
                  <img loading='lazy' src={src + "/images/pc/sec6_p2_pc.png"} />
                </picture>
              </div>
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
            </div>
          </div>
          <div className='right_wrap'>
            <div className='box_item'>
              <div className='img_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec6_p2_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec6_p2_pc.png"}
                  />
                  <img loading='lazy' src={src + "/images/pc/sec6_p2_pc.png"} />
                </picture>
              </div>
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
            </div>
            <div className='box_item'>
              <div className='img_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec6_p2_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec6_p2_pc.png"}
                  />
                  <img loading='lazy' src={src + "/images/pc/sec6_p2_pc.png"} />
                </picture>
              </div>
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
            </div>
          </div>
        </div>
        <div className='tips_wrap'>
          <div
            className='note'
            dangerouslySetInnerHTML={{ __html: config?.sec19?.notes + ":" }}
          ></div>
          {config?.sec19?.tips?.map((item, index) => (
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
