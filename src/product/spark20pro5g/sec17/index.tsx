import { useState, useRef, useContext } from "react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay } from "swiper/modules"
import { ScreenContext } from "../../../provider"
import LazyLoad from "react-lazyload"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "./index.scss"

interface StyleObject {
  [key: string]: string
}

const Sec17 = () => {
  const { spark20pro5gConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)
  const [swiperInstance, setSwiperInstance] = useState<any>()
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperClass>()
  const wrap = useRef(null)

  const handleSwiperSlide = () => {
    setActiveIndex(swiperInstance.activeIndex)
  }

  const handleBtnClick = (index: number) => {
    setActiveIndex(index)
    swiperInstance.slideTo(index)
  }

  const parseStyleString = (styleString: string): StyleObject => {
    return styleString.split(";").reduce((acc, style) => {
      if (style.trim()) {
        const [key, value] = style.split(":")
        const camelCaseKey = key
          .trim()
          .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
        acc[camelCaseKey] = value.trim()
      }
      return acc
    }, {} as StyleObject)
  }

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec15Ani = () => {
    const tl1 = gsap
      .timeline()
      .from(
        ".a_cont",
        1,
        {
          // opacity: 1,
        },
      )

    ScrollTrigger.create({
      trigger: ".a_cont",
      start: `top 75%`,
      animation: tl1,
      onEnter: () => {
        document.querySelectorAll(".sec17 video").forEach((item: any) => item.play())
      },
    })
  }

  useGSAP(
    () => {
      sec15Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec17' ref={wrap}>
      <div className='a_cont'>
        <div className='ctt'>
          <div className='sec17_swiper'>
            {config.sec17.hios && config.sec17.hios.length > 0 ? (
              <Swiper
                effect={"fade"}
                onSwiper={(swiper) => {
                  setSwiperInstance(swiper)
                  swiperRef.current = swiper
                }}
                modules={[EffectFade, Autoplay]}
                className='sec8Swiper'
                autoplay={{ delay: 5000 }}
                onSlideChange={() => handleSwiperSlide()}
              >
                {config.sec17.hios.map((item: any, index: number) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className='hios_item'>
                        <div
                          className='left'
                          style={
                            item.video.src
                              ? {
                                  background: item.video.video_background,
                                }
                              : {
                                  background: `url(${item.img.img_background})`,
                                  backgroundColor: item.img.img_background,
                                }
                          }
                        >
                          {item.video.src ? (
                            <div className='video_wrap'>
                              <LazyLoad offset={1000}>
                                <video
                                  src={item.video.src}
                                  poster={
                                    item.video.poster ? item.video.poster : ""
                                  }
                                  muted
                                  preload='auto'
                                  webkit-playsinline='true'
                                  playsInline={true}
                                  autoPlay
                                  loop
                                  controls={false}
                                  style={
                                    item.video.style
                                      ? parseStyleString(item.video.style)
                                      : {}
                                  }
                                ></video>
                              </LazyLoad>
                            </div>
                          ) : (
                            <div
                              className='img_wrap'
                              style={{
                                right: isPc
                                  ? `calc(${item.img.right.pc}vw / 19.2)`
                                  : `calc(${item.img.right.mb}vw / 10.8)`,
                                bottom: isPc
                                  ? `calc(${item.img.bottom.pc}vw / 19.2)`
                                  : `calc(${item.img.bottom.mb}vw / 10.8)`,
                              }}
                            >
                              <picture>
                                <source
                                  media='(max-width: 1080px)'
                                  srcSet={item.img.src.mb}
                                />
                                <source
                                  media='(min-width: 1081px)'
                                  srcSet={item.img.src.pc}
                                />
                                <img
                                  src={item.img.src.pc}
                                  style={{
                                    width: isPc
                                      ? `calc(${item.img.width.pc}vw / 19.2)`
                                      : `calc(${item.img.width.mb}vw / 10.8)`,
                                  }}
                                  loading='lazy'
                                />
                              </picture>
                            </div>
                          )}
                        </div>
                        <div className='right'>
                          <div className='text_bg'>
                            <img src={item.text_bg} loading='lazy' />
                          </div>
                          <div className='text_wrap'>
                            <div
                              className='title_48'
                              dangerouslySetInnerHTML={{
                                __html: item.title,
                              }}
                            ></div>
                            <div
                              className='desc_18'
                              dangerouslySetInnerHTML={{
                                __html: item.desc,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            ) : null}
            <div className='button_wrap'>
              {config.sec17.hios.map((_: any, index: number) => {
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec17
