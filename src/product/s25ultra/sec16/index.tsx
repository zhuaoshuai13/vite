import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import "./index.scss"

const Sec16 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
  const length = config?.sec11?.color?.length
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [swiperInstance, setSwiperInstance] = useState<any>()
  const swiperRef = useRef<SwiperClass>()

  const sec16Ani = () => {
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
      .to(
        ".part2",
        {
          x: "-100%",
          ease: "power2.inOut",
        },
        "d"
      )
      .to(
        ".part3",
        {
          x: 0,
          ease: "power2.inOut",
        },
        "d"
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
      sec16Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec16' ref={wrap}>
      <div className='sec16_wrap'>
        <div className='spec_part'>
          <div className='spec_text_wrap'>
            <div
              className='spec_title'
              dangerouslySetInnerHTML={{ __html: config?.sec16?.spec_title }}
            ></div>
            <p
              className='spec_desc'
              dangerouslySetInnerHTML={{ __html: config?.sec16?.spec_desc }}
            ></p>
          </div>
        </div>
        <div className='content_wrap'>
          <div className='img_wrap content_bg_wrap'>
            <img src={src + "/images/pc/sec16_bg_pc.png"} />
          </div>
          <div className='part part1'>
            <div className='mp32_wrap'>
              <div className='img_wrap text_bg_wrap'>
                <img src={src + "/images/pc/sec16_32mp_bg_pc.png"} />
              </div>
              <div className='text_wrap'>
                <div className='title_75'>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.front?.title,
                    }}
                  ></span>
                  <span
                    className='desc'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.front?.desc,
                    }}
                  ></span>
                </div>
                <div className='data_wrap'>
                  {config?.sec16?.front?.data?.map(
                    (item: any, index: number) => {
                      return (
                        <div className='data' key={index}>
                          {item.data_title && (
                            <span
                              className='data_title'
                              dangerouslySetInnerHTML={{
                                __html: item.data_title,
                              }}
                            ></span>
                          )}
                          <span
                            className='data_desc'
                            dangerouslySetInnerHTML={{ __html: item.data_desc }}
                          ></span>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            </div>
            <div className='mp50_wrap'>
              <div className='img_wrap text_bg_wrap'>
                <img src={src + "/images/pc/sec16_50mp_bg_pc.png"} />
              </div>
              <div className='text_wrap'>
                <div className='title_75'>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.back?.title,
                    }}
                  ></span>
                  <span
                    className='desc'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.back?.desc,
                    }}
                  ></span>
                </div>
                <div className='data_wrap'>
                  {config?.sec16?.back?.data?.map(
                    (item: any, index: number) => {
                      return (
                        <div className='data' key={index}>
                          {item.data_title && (
                            <span
                              className='data_title'
                              dangerouslySetInnerHTML={{
                                __html: item.data_title,
                              }}
                            ></span>
                          )}
                          <span
                            className='data_desc'
                            dangerouslySetInnerHTML={{ __html: item.data_desc }}
                          ></span>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            </div>
            <div className='img_wrap big_front_phone'>
              <img src={src + "/images/pc/sec16_p1_pc.png"} />
            </div>
            <div className='mp32_line'></div>
            <div className='img_wrap back_phone'>
              <img src={src + "/images/pc/sec16_p3_pc.png"} />
            </div>
            <div className='img_wrap front_phone'>
              <img src={src + "/images/pc/sec16_p2_pc.png"} />
            </div>
            <div className='img_wrap front_phone_shadow'>
              <img src={src + "/images/pc/sec16_p2_shadow_pc.png"} />
            </div>
          </div>
          <div className='part part2'>
            <div className='box_wrap'>
              <div className='img_wrap box_bg'>
                <img src={src + "/images/pc/sec16_box_pc.png"} />
              </div>
              <div className='text_wrap'>
                <div className='top_wrap'>
                  <div className='title_75'>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: config?.sec16?.front?.title,
                      }}
                    ></span>
                    <span
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec16?.front?.desc,
                      }}
                    ></span>
                  </div>
                  <div className='data_wrap'>
                    {config?.sec16?.front?.data?.map(
                      (item: any, index: number) => {
                        return (
                          <div className='data' key={index}>
                            <div
                              className='data_title'
                              dangerouslySetInnerHTML={{
                                __html: item.data_title,
                              }}
                            ></div>
                            <div
                              className='data_desc'
                              dangerouslySetInnerHTML={{
                                __html: item.data_desc,
                              }}
                            ></div>
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
                <div className='bottom_wrap'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.part2?.title,
                    }}
                  ></div>
                  <div
                    className='desc_16'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.part2?.desc,
                    }}
                  ></div>
                </div>
              </div>
              <div className='mp32_swiper'>
                <Swiper
                  effect={"fade"}
                  onSwiper={(swiper) => {
                    setSwiperInstance(swiper)
                    swiperRef.current = swiper
                  }}
                  modules={[Navigation, Pagination]}
                  autoplay={{ delay: 5000 }}
                  slidesPerView={2}
                  loop={true}
                  // onSlideChange={() => handleSwiperSlide()}
                >
                  <SwiperSlide>
                    <div className='img_wrap mp32_img'>
                      <img src={src + "/images/pc/sec16_32mp_p1_pc.png"} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img_wrap mp32_img'>
                      <img src={src + "/images/pc/sec16_32mp_p1_pc.png"} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img_wrap mp32_img'>
                      <img src={src + "/images/pc/sec16_32mp_p1_pc.png"} />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="img_wrap next_wrap">
                <img src={src + "/images/pc/sec16_next_pc.png"} />
              </div>
            </div>
          </div>
          <div className='part part3'>
            <div className='box_wrap'>
              <div className='img_wrap box_bg'>
                <img src={src + "/images/pc/sec16_box_pc.png"} />
              </div>
              <div className='left_wrap'>
                <div className='title_75'>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.back?.title,
                    }}
                  ></span>
                  <span
                    className='desc'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.back?.desc,
                    }}
                  ></span>
                </div>
                <div className='data_wrap'>
                  {config?.sec16?.back?.data?.map(
                    (item: any, index: number) => {
                      return (
                        <div className='data' key={index}>
                          {item.data_title && (
                            <span
                              className='data_title'
                              dangerouslySetInnerHTML={{
                                __html: item.data_title,
                              }}
                            ></span>
                          )}
                          <span
                            className='data_desc'
                            dangerouslySetInnerHTML={{
                              __html: item.data_desc,
                            }}
                          ></span>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
              <div className='right_wrap'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec16?.part3?.title,
                  }}
                ></div>
                <div
                  className='desc_16'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec16?.part3?.desc,
                  }}
                ></div>
              </div>
              <div className='icon_wrap mic_wrap'>
                <div className='img_wrap'>
                  <img src={src + "/images/pc/sec16_mic_pc.png"} />
                </div>
                <div
                  className='icon_title'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec16?.part3?.mic?.title,
                  }}
                ></div>
              </div>
              <div className='icon_wrap smile_wrap'>
                <div className='img_wrap'>
                  <img src={src + "/images/pc/sec16_mic_pc.png"} />
                </div>
                <div
                  className='icon_title'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec16?.part3?.smile?.title,
                  }}
                ></div>
              </div>
              <div className="img_wrap next_wrap">
                <img src={src + "/images/pc/sec16_next_pc.png"} />
              </div>
            </div>
          </div>
          <div className='part part4'>
            <div className='box_wrap'>
              <div className='img_wrap box_bg'>
                <img src={src + "/images/pc/sec16_box_pc.png"} />
              </div>
              <div className="img_wrap next_wrap">
                <img src={src + "/images/pc/sec16_next_pc.png"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec16
