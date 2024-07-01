import { useState, useRef, useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade } from "swiper/modules"
import { ScreenContext } from "../../../provider"

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "./index.scss"

const Sec9 = () => {
  const { spark20pro5gConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)
  const [swiperInstance, setSwiperInstance] = useState<any>()
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<any>()
  const wrap = useRef(null)

  const handleSwiperSlide = () => {
    setActiveIndex(swiperInstance.activeIndex)
  }

  const handleBtnClick = (index: number) => {
    setActiveIndex(index)
    swiperInstance.slideTo(index)
  }

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec9Ani = () => {
    if (isPc) {
      const tl = gsap
        .timeline()
        .from(".ani", 4, {})
        .to(
          ".content_wrap",
          1,
          {
            display: "flex",
            opacity: 1,
            ease: "power4.out",
          },
          "same1"
        )
        .from(
          ".left",
          1,
          {
            x: "-100%",
            ease: "power4.out",
          },
          "same1"
        )
        .from(
          ".right",
          1,
          {
            x: "100%",
            ease: "power4.out",
          },
          "same1"
        )
        .to(
          ".swiper-slide:last-child .img_wrap",
          1,
          {
            width: "73%",
            ease: "power4.out",
          },
          "same1+=0.25"
        )
        .to(
          ".button_wrap",
          1,
          {
            opacity: 0,
            ease: "power4.out",
          },
          "same1"
        )

      ScrollTrigger.create({
        trigger: ".ani",
        start: `top 0%`,
        end: `+=500%`,
        animation: tl,
        pin: true,
        scrub: 0.25,
        onUpdate: ({ progress }) => {
          if (progress < 0.2) {
            swiperRef.current.slideTo(0)
          } else if (progress > 0.2 && progress < 0.4) {
            swiperRef.current.slideTo(1)
          } else if (progress > 0.4 && progress < 0.6) {
            swiperRef.current.slideTo(2)
          } else if (progress > 0.6 && progress < 0.8) {
            swiperRef.current.slideTo(3)
          }
        },
      })
    } else {
      const tl = gsap
        .timeline()
        .from(".ani", 4, {})
        .to(
          ".content_wrap",
          1,
          {
            display: "flex",
            opacity: 1,
            ease: "power4.out",
          },
          "same1"
        )
        .from(
          ".left",
          1,
          {
            x: "-100%",
            ease: "power4.out",
          },
          "same1"
        )

      ScrollTrigger.create({
        trigger: ".ani",
        start: `top 0%`,
        end: `+=400%`,
        animation: tl,
        pin: true,
        scrub: 0.25,
        onUpdate: ({ progress }) => {
          if (progress < 0.2) {
            swiperRef.current.slideTo(0)
          } else if (progress > 0.2 && progress < 0.4) {
            swiperRef.current.slideTo(1)
          } else if (progress > 0.4 && progress < 0.6) {
            swiperRef.current.slideTo(2)
          } else if (progress > 0.6 && progress < 0.8) {
            swiperRef.current.slideTo(3)
          }
        },
      })
    }
  }

  useGSAP(
    () => {
      sec9Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec9' ref={wrap}>
      <div className='h_full ani'>
        <div className='ctt'>
          <div className='sec9_swiper'>
            {config.sec9.colors && config.sec9.colors.length > 0 ? (
              <Swiper
                effect={"fade"}
                onSwiper={(swiper) => {
                  setSwiperInstance(swiper)
                  swiperRef.current = swiper
                }}
                modules={isPc ? [EffectFade] : [EffectFade]}
                className='sec8Swiper'
                autoplay={{ delay: 2000 }}
                onSlideChange={() => handleSwiperSlide()}
              >
                {config.sec9.colors.map((item: any, index: number) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className='color_item'>
                        <div className='img_wrap'>
                          <picture>
                            <source
                              media='(max-width: 1080px)'
                              srcSet={item.img.mb}
                            />
                            <source
                              media='(min-width: 1081px)'
                              srcSet={item.img.pc}
                            />
                            <img src={item.img.pc} loading='lazy' />
                          </picture>
                        </div>
                        <div className='color_name'>
                          {isPc ? (
                            <div
                              className='color_line'
                              style={{ backgroundColor: item.text_color }}
                            ></div>
                          ) : null}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.color_name,
                            }}
                            style={{ color: item.text_color }}
                          ></span>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            ) : null}
            <div className='button_wrap'>
              {config.sec9.colors.map((_: any, index: number) => {
                return (
                  <div
                    className={`swiper_btn ${
                      activeIndex === index ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleBtnClick(index)}
                  ></div>
                )
              })}
            </div>
            <div className='content_wrap'>
              <div className='left'>
                <div className='text_bg'>
                  <picture>
                    <source
                      media='(max-width: 1080px)'
                      srcSet={config.sec9.text_bg.mb}
                    />
                    <source
                      media='(min-width: 1081px)'
                      srcSet={config.sec9.text_bg.pc}
                    />
                    <img src={config.sec9.text_bg.pc} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrap'>
                  <div className='title_wrap'>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{ __html: config.sec9.title }}
                    ></div>
                  </div>
                  <div className='datas'>
                    {config.sec9.datas.map((item: any, index: number) => {
                      return (
                        <div className='data' key={index}>
                          <div
                            className='data_title'
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              {isPc ? <div className='right'></div> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec9
