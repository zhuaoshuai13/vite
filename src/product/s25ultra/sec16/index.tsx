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
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [part2SwiperInstance, setPart2SwiperInstance] = useState<any>()
  const part2SwiperRef = useRef<SwiperClass>()
  const [part4SwiperInstance, setPart4SwiperInstance] = useState<any>()
  const part4SwiperRef = useRef<SwiperClass>()
  const [part5IsOpen, setPart5IsOpen] = useState(true)
  const [timeline, setTimeline] = useState<any>()

  const handlePart2SwiperNext = () => {
    part2SwiperInstance.slideNext()
  }
  const handlePart4SwiperNext = () => {
    part4SwiperInstance.slideNext()
  }

  const pageTionClick = (index: number) => {
    gsap.to(window, {
      scrollTo: {
        y: timeline.scrollTrigger.labelToScroll("part" + (index + 2)),
      },
      ease: "power2.inOut",
    })
  }

  const Pagetion = ({
    length,
    activeIndex,
  }: {
    length: number
    activeIndex: number
  }) => {
    return (
      <div className='pagination_wrap'>
        {new Array(length).fill(null).map((_, index) => {
          return (
            <span
              className={`pagination_item ${
                index === activeIndex ? "active" : ""
              }`}
              key={index}
              onClick={() => pageTionClick(index)}
            ></span>
          )
        })}
      </div>
    )
  }

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
      .to(
        ".big_front_phone",
        {
          x: "33%",
          y: "-15.30%",
          scale: 0.68,
          // x: 0,
          // y: 0,
          // scale: 1,
          ease: "power2.inOut",
        },
        "b"
      )
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
        "part2"
      )
      .to(
        ".part3",
        {
          x: 0,
          ease: "power2.inOut",
        },
        "part2"
      )
      .to(
        ".part3",
        {
          x: "-100%",
          ease: "power2.inOut",
        },
        "part3"
      )
      .to(
        ".part4",
        {
          x: 0,
          ease: "power2.inOut",
        },
        "part3"
      )
      .to(
        ".part4",
        {
          x: "-100%",
          ease: "power2.inOut",
        },
        "part4"
      )
      .to(
        ".part5",
        {
          x: 0,
          ease: "power2.inOut",
        },
        "part4"
      )
      .to(
        ".part5",
        {
          x: "-100%",
          ease: "power2.inOut",
        },
        "part5"
      )
      .to(
        ".part6",
        {
          x: 0,
          ease: "power2.inOut",
        },
        "part5"
      )
      .to(
        ".part6",
        {
          ease: "power2.inOut",
        },
        "part6"
      )
    ScrollTrigger.create({
      trigger: ".sec16_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=1000%",
      animation: tl,
      scrub: 0.2,
    })

    setTimeline(tl)
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
            <img loading='lazy' src={src + "/images/pc/sec16_bg_pc.webp"} />
          </div>
          <div className='part part1'>
            <div className='mp32_wrap'>
              <div className='img_wrap text_bg_wrap'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec16_32mp_bg_pc.webp"}
                />
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
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec16_50mp_bg_pc.webp"}
                />
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
              <img loading='lazy' src={src + "/images/pc/sec16_p1_pc.webp"} />
            </div>
            <div className='mp32_line'></div>
            <div className='img_wrap back_phone'>
              <img loading='lazy' src={src + "/images/pc/sec16_p3_pc.webp"} />
            </div>
            <div className='img_wrap front_phone'>
              <img loading='lazy' src={src + "/images/pc/sec16_p2_pc.webp"} />
            </div>
            <div className='img_wrap front_phone_shadow'>
              <img
                loading='lazy'
                src={src + "/images/pc/sec16_p2_shadow_pc.webp"}
              />
            </div>
          </div>
          <div className='part part2'>
            <div className='box_wrap'>
              <div className='img_wrap box_bg'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec16_box_pc.webp"}
                />
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
                    setPart2SwiperInstance(swiper)
                    part2SwiperRef.current = swiper
                  }}
                  modules={[Navigation, Pagination]}
                  autoplay={{ delay: 5000 }}
                  slidesPerView={2}
                  loop={true}
                  // onSlideChange={() => handleSwiperSlide()}
                >
                  <SwiperSlide>
                    <div className='img_wrap mp32_img'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec16_32mp_p1_pc.webp"}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img_wrap mp32_img'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec16_32mp_p2_pc.webp"}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img_wrap mp32_img'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec16_32mp_p1_pc.webp"}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img_wrap mp32_img'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec16_32mp_p2_pc.webp"}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div
                className='img_wrap next_wrap'
                onClick={handlePart2SwiperNext}
              >
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec16_next_pc.webp"}
                />
              </div>
              <Pagetion length={5} activeIndex={0} />
            </div>
          </div>
          <div className='part part3'>
            <div className='box_wrap'>
              <div className='img_wrap box_bg'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec16_box_pc.webp"}
                />
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
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec16_mic_pc.webp"}
                  />
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
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec16_mic_pc.webp"}
                  />
                </div>
                <div
                  className='icon_title'
                  dangerouslySetInnerHTML={{
                    __html: config?.sec16?.part3?.smile?.title,
                  }}
                ></div>
              </div>
              <Pagetion length={5} activeIndex={1} />
            </div>
          </div>
          <div className='part part4'>
            <div className='box_wrap'>
              <div className='img_wrap box_bg'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec16_box_pc.webp"}
                />
              </div>
              <div className='text_wrap'>
                <div className='top_wrap'>
                  <div
                    className='title_75'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.back?.title,
                    }}
                  ></div>
                  <div className='title_75'>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec16?.back?.desc,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='bottom_wrap'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.part4?.title,
                    }}
                  ></div>
                </div>
              </div>
              <div className='mp50_swiper'>
                <Swiper
                  effect={"fade"}
                  onSwiper={(swiper) => {
                    setPart4SwiperInstance(swiper)
                    part4SwiperRef.current = swiper
                  }}
                  modules={[Navigation, Pagination]}
                  autoplay={{ delay: 5000 }}
                  slidesPerView={2}
                  loop={true}
                  // onSlideChange={() => handleSwiperSlide()}
                >
                  <SwiperSlide>
                    <div className='img_wrap mp50_img'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec16_50mp_p1_pc.webp"}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img_wrap mp50_img'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec16_50mp_p2_pc.webp"}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img_wrap mp50_img'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec16_50mp_p1_pc.webp"}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img_wrap mp50_img'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec16_50mp_p2_pc.webp"}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div
                className='img_wrap next_wrap'
                onClick={handlePart4SwiperNext}
              >
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec16_next_pc.webp"}
                />
              </div>
              <Pagetion length={5} activeIndex={2} />
            </div>
          </div>
          <div className='part part5'>
            <div className='box_wrap'>
              <div className='img_wrap box_bg'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec16_box_pc.webp"}
                />
              </div>
              <div className='text_wrap'>
                <div className='top_wrap'>
                  <div
                    className='title_75'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.back?.title,
                    }}
                  ></div>
                  <div className='title_75'>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec16?.back?.desc,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='bottom_wrap'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.part5?.title,
                    }}
                  ></div>
                  <button
                    className={part5IsOpen ? "active" : ""}
                    onClick={() => {
                      setPart5IsOpen(!part5IsOpen)
                    }}
                  >
                    <div
                      className={`white_circle ${part5IsOpen ? "active" : ""}`}
                    ></div>
                    <div
                      className={`btn_text ${part5IsOpen ? "active" : ""}`}
                      dangerouslySetInnerHTML={{
                        __html: config?.sec16?.part5?.on,
                      }}
                    ></div>
                    <div
                      className={`btn_text ${!part5IsOpen ? "active" : ""}`}
                      dangerouslySetInnerHTML={{
                        __html: config?.sec16?.part5?.off,
                      }}
                    ></div>
                  </button>
                </div>
              </div>
              <div className='pic_wrap'>
                <div className={`img_wrap ${part5IsOpen ? "active" : ""}`}>
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec16_hdr_on_pc.webp"}
                  />
                </div>
                <div className={`img_wrap ${!part5IsOpen ? "active" : ""}`}>
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec16_hdr_off_pc.webp"}
                  />
                </div>
              </div>
              <Pagetion length={5} activeIndex={3} />
            </div>
          </div>
          <div className='part part6'>
            <div className='box_wrap'>
              <div className='img_wrap box_bg'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec16_box_pc.webp"}
                />
              </div>
              <div className='text_wrap'>
                <div className='top_wrap'>
                  <div
                    className='title_75'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.back?.title,
                    }}
                  ></div>
                  <div className='title_75'>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec16?.back?.desc,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='bottom_wrap'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec16?.part6?.title,
                    }}
                  ></div>
                </div>
              </div>
              <div className={`img_wrap night_wrap`}>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec16_night_pc.webp"}
                />
              </div>
              <Pagetion length={5} activeIndex={4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec16
