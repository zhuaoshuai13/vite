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

const Sec19 = ({
  part4SwiperInstance,
  setPart4SwiperInstance,
}: {
  part4SwiperInstance: any
  setPart4SwiperInstance: any
}) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
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

  const sec19Ani = () => {
    const tl = gsap
      .timeline()
      .to(".spec_part", { y: "-100%", ease: "power2.inOut" })
    ScrollTrigger.create({
      trigger: ".sec19_wrap .pin_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=100%",
      animation: tl,
      scrub: 0.2,
    })

    const t3 = gsap
      .timeline()
      .to(".spec_part", { y: "-100%", ease: "power2.inOut" })

    ScrollTrigger.create({
      trigger: ".sec19_wrap .part4",
      pin: true,
      start: `top 0%`,
      end: "+=300%",
      animation: t3,
      scrub: 0.2,
      onUpdate: (self) => {
        if (self.progress < 0.3) {
          part4SwiperInstance.slideTo(0)
        } else if (self.progress >= 0.3 && self.progress < 0.6) {
          part4SwiperInstance.slideTo(1)
        } else {
          part4SwiperInstance.slideTo(2)
        }
      },
    })

    const tl2 = gsap
      .timeline()
      .from(".pop1", { x: "10%", y: "100%", ease: "power2.inOut" }, "a")
      .from(".pop2", { x: "30%", y: "0%", ease: "power2.inOut" }, "a")
      .from(".pop3", { x: "0%", y: "0%", ease: "power2.inOut" }, "a")
      .from(".pop4", { x: "20%", y: "-100%", ease: "power2.inOut" }, "a")
      .from(".pop5", { x: "20%", y: "-300%", ease: "power2.inOut" }, "a")
    ScrollTrigger.create({
      trigger: ".sec19 .part5 .pic_wrap",
      start: `top 80%`,
      animation: tl2,
      toggleActions: "play none none reverse",
    })

    const tl3 = gsap.timeline().from(".part6 .pop_wrap", {
      rotate: "30deg",
      duration: 1,
      ease: "power2.inOut",
    })
    ScrollTrigger.create({
      trigger: ".sec19 .part6",
      start: `top 50%`,
      animation: tl3,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      if (isPc && part4SwiperInstance) {
        sec19Ani()
      } else {
        // sec19AniMb()
      }
    },
    {
      scope: wrap,
      dependencies: [part4SwiperInstance],
    }
  )

  return (
    <section className='sec19' ref={wrap}>
      <div className='sec19_wrap'>
        <div className='pin_wrap'>
          <div className='spec_part'>
            <div className='spec_text_wrap'>
              <div
                className='spec_title'
                dangerouslySetInnerHTML={{ __html: config?.sec19?.spec_title }}
              ></div>
              <p
                className='spec_desc'
                dangerouslySetInnerHTML={{ __html: config?.sec19?.spec_desc }}
              ></p>
            </div>
          </div>
          <div className='part part1'>
            <div className='img_wrap logo_wrap'>
              <img
                loading='lazy'
                src={src + "/images/pc/sec19_part1_logo_pc.webp"}
              />
            </div>
            <div className='text_wrap slide_up'>
              <div
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec19?.part1?.desc }}
              ></div>
            </div>
          </div>
        </div>
        <div className='content_wrap'>
          <div className='part part2'>
            <div className='text_wrap slide_up'>
              <div
                className='title_75'
                dangerouslySetInnerHTML={{
                  __html: config?.sec19?.part2?.title,
                }}
              ></div>
              <div
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec19?.part2?.desc }}
              ></div>
              {isPc ? (
                <div className='img_wrap android_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_part2_android_pc.webp"}
                  />
                </div>
              ) : null}
            </div>
            <div className='img_box'>
              <div className='img_wrap phone_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec19_part2_f1_mb.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec19_part2_f1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_part2_f1_pc.webp"}
                  />
                </picture>
              </div>
              {!isPc ? (
                <div className='img_wrap android_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_part2_android_pc.webp"}
                  />
                </div>
              ) : null}
            </div>
          </div>
          {isPc ? (
            <div className='part part3'>
              <div className='left_wrap'>
                <div className='img_box phone_wrap1'>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part3_f1_pc.webp"}
                    />
                  </div>
                </div>
                <div className='left_slide slide_up'>
                  <div
                    className='title_75'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec19?.part3?.title,
                    }}
                  ></div>
                  <div
                    className='desc_16'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec19?.part3?.desc,
                    }}
                  ></div>
                </div>
              </div>
              <div className='img_box phone_wrap2'>
                <div className='shadow_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_part3_f3_pc.webp"}
                  />
                </div>
                <div className='img_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_part3_f2_pc.webp"}
                  />
                </div>
              </div>
            </div>
          ) : null}
          <div className='part part4'>
            <Swiper
              effect={"fade"}
              onSwiper={(swiper) => {
                setPart4SwiperInstance(swiper)
                part4SwiperRef.current = swiper
              }}
              modules={
                isPc
                  ? [Navigation, Pagination]
                  : [Navigation, Pagination, Autoplay]
              }
              autoplay={{ delay: 2000 }}
              slidesPerView={1}
              pagination={{ clickable: true, el: ".sec19 .swiper_pagination" }}
            >
              {!isPc ? (
                <>
                  <SwiperSlide>
                    <div className='ai_wrap ai_assistant'>
                      {/* <div className='img_wrap bg_wrap'>
                        <img
                          loading='lazy'
                          src={src + "/images/pc/sec19_part4_assist_mb.webp"}
                        />
                      </div> */}
                      <div className='img_wrap phone_wrap'>
                        <img
                          loading='lazy'
                          src={src + "/images/mb/sec19_part4_assist_mb.webp"}
                        />
                      </div>
                      <div className='text_wrap'>
                        <div
                          className='title_75'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec19?.part3?.title,
                          }}
                        ></div>
                        <p
                          className='desc_16'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec19?.part3?.desc,
                          }}
                        ></p>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ) : null}
              <SwiperSlide>
                <div className='ai_wrap ai_noise'>
                  <div className='img_wrap bg_wrap'>
                    <picture>
                      <source
                        media='(max-width: 750px)'
                        srcSet={src + "/images/mb/sec19_part4_bg1_mb.webp"}
                      />
                      <source
                        media='(min-width: 751px)'
                        srcSet={src + "/images/pc/sec19_part4_bg1_pc.webp"}
                      />
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec19_part4_bg1_pc.webp"}
                      />
                    </picture>
                  </div>
                  <div className='img_wrap phone_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part4_f1_pc.webp"}
                    />
                  </div>
                  <div className='text_wrap'>
                    <div
                      className='title_75'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part4?.content1?.title,
                      }}
                    ></div>
                    <p
                      className='desc_16'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part4?.content1?.desc,
                      }}
                    ></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ai_wrap ai_wallpaper'>
                  <div className='img_wrap phone_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part4_f2_pc.webp"}
                    />
                  </div>
                  <div className='img_wrap icon_wrap1'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part4_icon1_pc.webp"}
                    />
                  </div>
                  <div className='img_wrap icon_wrap2'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part4_icon2_pc.webp"}
                    />
                  </div>
                  <div className='text_wrap'>
                    <div
                      className='title_75'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part4?.content2?.title,
                      }}
                    ></div>
                    <p
                      className='desc_16'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part4?.content2?.desc,
                      }}
                    ></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ai_wrap ai_ask'>
                  <div className='img_wrap phone_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part4_f3_pc.webp"}
                    />
                  </div>
                  <div className='text_wrap'>
                    <div
                      className='title_75'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part4?.content3?.title,
                      }}
                    ></div>
                    <p
                      className='desc_16'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part4?.content3?.desc,
                      }}
                    ></p>
                  </div>
                </div>
              </SwiperSlide>
              {!isPc ? (
                <>
                  <SwiperSlide>
                    <div className='ai_wrap dynamic_bar'>
                      <div className='img_wrap bg_wrap'>
                        <img
                          loading='lazy'
                          src={src + "/images/mb/sec19_part4_bar_bg_mb.webp"}
                        />
                      </div>
                      <div className='img_wrap phone_wrap'>
                        <img
                          loading='lazy'
                          src={src + "/images/mb/sec19_part4_bar_mb.webp"}
                        />
                      </div>
                      <div className='img_wrap pop pop1'>
                        <img
                          loading='lazy'
                          src={src + "/images/mb/sec19_part4_pop1_mb.webp"}
                        />
                      </div>
                      <div className='img_wrap pop pop2'>
                        <img
                          loading='lazy'
                          src={src + "/images/mb/sec19_part4_pop2_mb.webp"}
                        />
                      </div>
                      <div className='img_wrap pop pop3'>
                        <img
                          loading='lazy'
                          src={src + "/images/mb/sec19_part4_pop3_mb.webp"}
                        />
                      </div>
                      <div className='img_wrap pop pop4'>
                        <img
                          loading='lazy'
                          src={src + "/images/mb/sec19_part4_pop4_mb.webp"}
                        />
                      </div>
                      <div className='img_wrap pop pop5'>
                        <img
                          loading='lazy'
                          src={src + "/images/mb/sec19_part4_pop5_mb.webp"}
                        />
                      </div>
                      <div className='text_wrap'>
                        <div
                          className='title_75'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec19?.part5?.title,
                          }}
                        ></div>
                        <p
                          className='desc_16'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec19?.part5?.desc,
                          }}
                        ></p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='ai_wrap smart_aod'>
                      <div className='img_wrap phone_wrap'>
                        <img
                          loading='lazy'
                          src={src + "/images/mb/sec19_part4_smart_mb.webp"}
                        />
                      </div>
                      <div className='text_wrap'>
                        <div
                          className='title_75'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec19?.part6?.title,
                          }}
                        ></div>
                        <p
                          className='desc_16'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec19?.part6?.desc,
                          }}
                        ></p>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ) : null}
            </Swiper>
            <div className='swiper_pagination'></div>
          </div>
          {isPc ? (
            <>
              <div className='part part5'>
                <div className='pic_wrap'>
                  <div className='img_wrap bg_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part5_bg_pc.webp"}
                    />
                  </div>
                  <div className='img_wrap phone_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part5_phone_pc.webp"}
                    />
                  </div>
                  <div className='text_wrap slide_up'>
                    <div
                      className='title_75'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part5?.title,
                      }}
                    ></div>
                    <p
                      className='desc_16'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part5?.desc,
                      }}
                    ></p>
                  </div>
                  <div className='img_wrap pop pop1'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part5_f1_pc.webp"}
                    />
                  </div>
                  <div className='img_wrap pop pop2'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part5_f2_pc.webp"}
                    />
                  </div>
                  <div className='img_wrap pop pop3'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part5_f3_pc.webp"}
                    />
                  </div>
                  <div className='img_wrap pop pop4'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part5_f4_pc.webp"}
                    />
                  </div>
                  <div className='img_wrap pop pop5'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec19_part5_f5_pc.webp"}
                    />
                  </div>
                </div>
              </div>
              <div className='part part6'>
                <div className='img_wrap bg_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_part6_bg.webp"}
                  />
                </div>
                <div className='text_wrap slide_up'>
                  <div
                    className='title_75'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec19?.part6?.title,
                    }}
                  ></div>
                  <div
                    className='desc_16'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec19?.part6?.desc,
                    }}
                  ></div>
                </div>
                <div className='img_wrap phone_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_part6_f1.webp"}
                  />
                </div>
                <div className='img_wrap pop_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec19_part6_f2.webp"}
                  />
                </div>
              </div>
            </>
          ) : null}
          <div className='part part7'>
            <div className='items'>
              <div className='item active' onMouseEnter={() => handleHover(0)}>
                <div className='pic_wrap'>
                  <div className='img_wrap'>
                    <picture>
                      <source
                        media='(max-width: 750px)'
                        srcSet={src + "/images/mb/sec19_part7_f1_mb.webp"}
                      />
                      <source
                        media='(min-width: 751px)'
                        srcSet={src + "/images/pc/sec19_part7_f1_pc.webp"}
                      />
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec19_part7_f1_pc.webp"}
                      />
                    </picture>
                  </div>
                  <div className='text_wrap'>
                    <div
                      className='title_75'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part7?.content1?.title,
                      }}
                    ></div>
                    <p
                      className='desc_16'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part7?.content1?.desc,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              <div className='item' onMouseEnter={() => handleHover(1)}>
                <div className='pic_wrap'>
                  <div className='img_wrap'>
                    <picture>
                      <source
                        media='(max-width: 750px)'
                        srcSet={src + "/images/mb/sec19_part7_f2_mb.webp"}
                      />
                      <source
                        media='(min-width: 751px)'
                        srcSet={src + "/images/pc/sec19_part7_f2_pc.webp"}
                      />
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec19_part7_f2_pc.webp"}
                      />
                    </picture>
                  </div>
                  <div className='text_wrap'>
                    <div
                      className='title_75'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part7?.content2?.title,
                      }}
                    ></div>
                    <p
                      className='desc_16'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part7?.content2?.desc,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              <div className='item' onMouseEnter={() => handleHover(2)}>
                <div className='pic_wrap'>
                  <div className='img_wrap'>
                    <picture>
                      <source
                        media='(max-width: 750px)'
                        srcSet={src + "/images/mb/sec19_part7_f3_mb.webp"}
                      />
                      <source
                        media='(min-width: 751px)'
                        srcSet={src + "/images/pc/sec19_part7_f3_pc.webp"}
                      />
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec19_part7_f3_pc.webp"}
                      />
                    </picture>
                  </div>
                  <div className='text_wrap'>
                    <div
                      className='title_75'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part7?.content3?.title,
                      }}
                    ></div>
                    <p
                      className='desc_16'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec19?.part7?.content3?.desc,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='part part8'>
            <div className='text_wrap slide_up'>
              <div
                className='title_75'
                dangerouslySetInnerHTML={{
                  __html: config?.sec19?.part8?.title,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{
                  __html: config?.sec19?.part8?.desc,
                }}
              ></p>
            </div>
            <div className='img_wrap bg_wrap'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec19_part8_bg_mb.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec19_part8_bg_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec19_part8_bg_pc.webp"}
                />
              </picture>
            </div>
            <div className='img_wrap watch_wrap'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec19_part8_watch_mb.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec19_part8_watch_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec19_part8_watch_pc.webp"}
                />
              </picture>
            </div>
            <div className='img_wrap phone_wrap'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec19_part8_phone_mb.webp"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec19_part8_phone_pc.webp"}
                />
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec19_part8_phone_pc.webp"}
                />
              </picture>
            </div>
          </div>
          <div className='part part9'>
            <div className='text_wrap'>
              <p
                className='desc_16 note'
                dangerouslySetInnerHTML={{ __html: config?.sec19?.part9?.note }}
              ></p>
              {config?.sec19?.part9?.tips?.map(
                (item: string, index: number) => (
                  <p
                    className='desc_16'
                    dangerouslySetInnerHTML={{ __html: item }}
                    key={index}
                  ></p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec19
