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

const Sec17 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
  const length = config?.sec11?.color?.length
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [swiperInstance, setSwiperInstance] = useState<any>()
  const swiperRef = useRef<SwiperClass>()

  const sec17Ani = () => {
    const tl = gsap
      .timeline()
      .to(".spec_part", { y: "-100%", ease: "power2.inOut" })
      .from(
        ".mp32_wrap",
        {
          x: "-49%",
          y: "-12%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".mp32_line",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(".big_front_phone", {
        x: "33%",
        y: "-15.30%",
        scale: 0.68,
        // x: 0,
        // y: 0,
        // scale: 1,
        ease: "power2.inOut",
      })
      .from(
        [
          ".mp50_wrap",
          ".mp32_wrap .text_bg_wrap",
          ".back_phone",
          ".front_phone",
          ".front_phone_shadow",
        ],
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "a"
      )
      .to(
        ".part1",
        {
          x: "-100%",
          ease: "power2.inOut",
        },
        "c"
      )
      .to(
        ".part2",
        {
          x: 0,
          ease: "power2.inOut",
        },
        "c"
      )
    ScrollTrigger.create({
      trigger: ".sec16_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=500%",
      animation: tl,
      scrub: 0.2,
    })
  }

  useGSAP(
    () => {
      sec17Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec17' ref={wrap}>
      <div className='sec17_wrap'>
        <div className='text_wrap'>
          <div
            className='title_75'
            dangerouslySetInnerHTML={{ __html: config?.sec17?.title }}
          ></div>
          <p
            className='desc_16'
            dangerouslySetInnerHTML={{ __html: config?.sec17?.desc }}
          ></p>
        </div>
        <div className='sec17_swiper'>
          <Swiper
            effect={"fade"}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper)
              swiperRef.current = swiper
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            pagination={{
              el: ".sec17 .swiper_pagination",
              type: "bullets",
              clickable: true,
            }}
            // slidesPerView={1}
            // onSlideChange={() => handleSwiperSlide()}
          >
            {config?.sec17?.data?.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <div className='swiper_item'>
                  <div className='img_wrap'>
                    <img loading='lazy' src={src + "/images/pc/" + item.pic} />
                  </div>
                  <div className='mode_name'>{item.mode}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='swiper_pagination'></div>
        </div>
      </div>
    </section>
  )
}

export default Sec17
