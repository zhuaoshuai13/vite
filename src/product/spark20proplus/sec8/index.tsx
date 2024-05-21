import { useEffect, useState, useContext, useRef } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Swiper, SwiperSlide } from "swiper/react"
import LazyLoad from "react-lazyload"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import { EffectFade, Autoplay } from "swiper/modules"
import "./index.scss"
import { ScreenContext } from "../../../provider"

const Sec8 = () => {
  const { isPc } = useContext(ScreenContext)
  const { spark20proplusConfig } = window as any
  const [index, setIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<any>(null)
  const swiperRef = useRef<any>()
  const { colorList } = spark20proplusConfig.sec8

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const handleSwiperSlide = () => {
    setIndex(swiperInstance.activeIndex)
  }

  const handleButtonClick = (index: number) => {
    setIndex(index)
    swiperInstance.slideTo(index)
  }

  const sec8Ani = () => {
    if (isPc) {
      const tl = gsap
        .timeline()
        .to(".sec8 .double_curved", 2, { y: "-100%", ease: "power1.in" })
        .to(".sec8 .sec8Swiper", 2, {})
      ScrollTrigger.create({
        trigger: ".sec8",
        start: "top 0",
        end: "+=200%",
        animation: tl,
        pin: true,
        scrub: 0.25,
        // onUpdate: ({ progress }) => {
        //   if (progress > 0.2 && progress < 0.3) {
        //     swiperRef.current.slideTo(0)
        //   } else if (progress > 0.3 && progress < 0.53) {
        //     swiperRef.current.slideTo(1)
        //   } else if (progress > 0.53 && progress < 0.76) {
        //     swiperRef.current.slideTo(2)
        //   } else if (progress > 0.76 && progress < 1) {
        //     swiperRef.current.slideTo(3)
        //   }
        // },
      })
    }
  }

  useEffect(() => {
    sec8Ani()
  }, [])

  return (
    <section className='sec8' id="magic_skin">
      <div className='content'>
        <div className='double_curved'>
          <div className='video_box'>
            <LazyLoad offset={1000}>
              <video
                src={spark20proplusConfig.sec8.double_curved.bg.src}
                poster={spark20proplusConfig.sec8.double_curved.bg.poster}
                autoPlay
                muted
                loop
                className='sound'
                webkit-playsinline='true'
                playsInline={true}
              ></video>
            </LazyLoad>
          </div>
          <div className='content_wrapper'>
            <div className='text_wrapper'>
              <h4
                className='title_48'
                dangerouslySetInnerHTML={{
                  __html: spark20proplusConfig.sec8.double_curved.title,
                }}
              ></h4>
              <p
                className='subtitle_24'
                dangerouslySetInnerHTML={{
                  __html: spark20proplusConfig.sec8.double_curved.subtitle,
                }}
              ></p>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: spark20proplusConfig.sec8.double_curved.desc,
                }}
              ></p>
            </div>
            <div className='datas'>
              {spark20proplusConfig.sec8.double_curved.datas.map(
                (item: any, index: number) => {
                  return (
                    <div className='data' key={index}>
                      <div className='data_title'>
                        <span
                          dangerouslySetInnerHTML={{ __html: item.name }}
                        ></span>
                      </div>
                      <p
                        className='data_desc'
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      ></p>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            setSwiperInstance(swiper)
            swiperRef.current = swiper
          }}
          modules={isPc ? [EffectFade] : [EffectFade, Autoplay]}
          className='sec8Swiper'
          autoplay={{ delay: 2000 }}
          onSlideChange={() => handleSwiperSlide()}
        >
          {colorList.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <picture>
                  <source media='(min-width: 1081px)' srcSet={item.image.pc} />
                  <source media='(max-width: 1080px)' srcSet={item.image.mb} />
                  <img src={item.image.pc} loading='lazy' />
                </picture>
              </SwiperSlide>
            )
          })}
          <div className='color_content'>
            <div
              className='color_text'
              style={{ color: colorList[index].text_color }}
            >
              {colorList[index].color}
            </div>
            <div className='button_wrapper' data-index={index}>
              {colorList.map((item: any, colorIndex: number) => {
                return (
                  <button
                    key={colorIndex}
                    className={index === colorIndex ? "active" : ""}
                    onClick={() => handleButtonClick(colorIndex)}
                  >
                    <div className={`circle_big ${item.color}`}>
                      <div className='circle_small'></div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Sec8
