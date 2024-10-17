import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import "./index.scss"

const Sec18 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
  const length = config?.sec11?.color?.length
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [swiperInstance, setSwiperInstance] = useState<any>()
  const swiperRef = useRef<SwiperClass>()

  const sec18Ani = () => {
    // const tl = gsap.timeline().to("", { ease: "power2.inOut" })
    // ScrollTrigger.create({
    //   trigger: ".sec18_wrap",
    //   pin: true,
    //   start: `top 0%`,
    //   end: "+=500%",
    //   animation: tl,
    //   scrub: 0.2,
    // })
  }

  useGSAP(
    () => {
      sec18Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec18' ref={wrap}>
      <div className='sec18_wrap'>
        <div className='text_wrap'>
          <div
            className='title_75'
            dangerouslySetInnerHTML={{ __html: config?.sec18?.title }}
          ></div>
        </div>
        <div className="pic_wrap"></div>
        <div className='text_wrap'>
          <p
            className='desc_16'
            dangerouslySetInnerHTML={{ __html: config?.sec18?.desc }}
          ></p>
        </div>
      </div>
    </section>
  )
}

export default Sec18
