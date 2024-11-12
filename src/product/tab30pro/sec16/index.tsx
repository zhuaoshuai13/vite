import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import "./index.scss"

const Sec16 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [part2SwiperInstance, setPart2SwiperInstance] = useState<any>()
  const part2SwiperRef = useRef<SwiperClass>()
  const [part4SwiperInstance, setPart4SwiperInstance] = useState<any>()
  const part4SwiperRef = useRef<SwiperClass>()
  const [part5IsOpen, setPart5IsOpen] = useState(true)
  const [timeline, setTimeline] = useState<any>()

  return (
    <section className='sec16' ref={wrap}>
      <div className='sec16_wrap'>
        <div className='spec_part'>
          <div className='text_wrap'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{ __html: config?.sec16?.spec_title }}
            ></div>
            <p
              className='spec_desc'
              dangerouslySetInnerHTML={{ __html: config?.sec16?.spec_desc }}
            ></p>
          </div>
          <div className='img_wrap content_bg_wrap'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec16_bg_mb.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec16_bg_pc.png"}
              />
              <img loading='lazy' src={src + "/images/pc/sec16_bg_pc.png"} />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec16
