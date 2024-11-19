import { useContext, useRef, useState } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec9 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const triggerSpace = () => {
    if (wrap.current) {
      return (
        (window.innerHeight -
          wrap?.current?.offsetHeight -
          config?.navHeightPc) /
          2 +
        config?.navHeightPc
      )
    }
    return window.innerHeight
  }

  const sec9Ani = () => {
    const tl = gsap.timeline().from(".text_wrap .desc_16", 1, {
      // opacity: 0,
      // y: 100,
      ease: "power2.inOut",
    })
    ScrollTrigger.create({
      trigger: wrap.current,
      start: `top ${triggerSpace()}`,
      end: "+=200%",
      pin: true,
      scrub: 0.2,
      animation: tl,
      toggleActions: "play none none reverse",
      onUpdate: (self) => {
        setActiveIndex(Math.round(self.progress * 2))
      },
    })
  }

  const sec9AniMb = () => {
    gsap.timeline().to(".sec9 .video_wrap", {
      scrollTrigger: {
        trigger: ".sec9 .video_wrap",
        start: "top 100%",
        onEnter: () => {
          if (document.querySelector(".sec9 .video_wrap video")) {
            ;(
              document.querySelector(
                ".sec9 .video_wrap video"
              ) as HTMLVideoElement
            )?.play()
          }
          videoRef.current?.play()
        },
      },
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec9Ani()
      } else {
        sec9AniMb()
      }
    },
    { scope: wrap }
  )

  return (
    <section className='sec9'>
      <div className='sec9_wrap' ref={wrap}>
        <div className='img_wrap bg_wrap'>
          <picture>
            <source
              media='(max-width: 750px)'
              srcSet={src + "/images/mb/sec9_bg_mb.png"}
            />
            <source
              media='(min-width: 751px)'
              srcSet={src + "/images/pc/sec9_bg_pc.webp"}
            />
            <img loading='lazy' src={src + "/images/pc/sec9_bg_pc.webp"} />
          </picture>
        </div>
        <div className='text_wrap slide_up'>
          <div className='left_wrap'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{ __html: config?.sec9?.title }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{ __html: config?.sec9?.subtitle }}
            ></div>
          </div>
          <div className='right_wrap'>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec9?.desc }}
            ></p>
          </div>
        </div>
        <div className='box_wrap'>
          <div className='switch_content'>
            <div className='line_wrap'>
              <div
                className='active_line'
                style={{ transform: `translateY(${activeIndex * 100}%)` }}
              ></div>
            </div>
            <div className='datas'>
              {config?.sec9?.data?.map((item: any, index: number) => {
                return (
                  <div
                    className={`data_wrap ${
                      index === activeIndex ? "active_data" : ""
                    }`}
                    key={index}
                  >
                    <div
                      className='data_title'
                      dangerouslySetInnerHTML={{ __html: item?.title }}
                    ></div>
                    <div className='tran_wrap'>
                      <p
                        className='desc_16'
                        dangerouslySetInnerHTML={{ __html: item?.desc }}
                      ></p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='data_pic equal_parent'>
            <div
              className={`pic_wrap equal_parent ${
                activeIndex === 0 ? "active_pic_wrap" : ""
              }`}
            >
              <div className='img_wrap wave_wrap1'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec9_wave_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone1_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec9_1_1_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_1_1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_1_1_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone2_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec9_1_2_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_1_2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_1_2_pc.webp"}
                  />
                </picture>
              </div>
            </div>
            <div
              className={`pic_wrap equal_parent ${
                activeIndex === 1 ? "active_pic_wrap" : ""
              }`}
            >
              <div className='img_wrap wave_wrap2'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec9_wave_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap wave_wrap3'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec9_wave_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone3_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec9_2_1_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_2_1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_2_1_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone4_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec9_2_2_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_2_2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_2_2_pc.webp"}
                  />
                </picture>
              </div>
            </div>
            <div
              className={`pic_wrap equal_parent ${
                activeIndex === 2 ? "active_pic_wrap" : ""
              }`}
            >
              <div className='img_wrap wave_wrap4'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec9_wave_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone5_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec9_3_1_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_3_1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_3_1_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone6_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec9_3_2_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_3_2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_3_2_pc.webp"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec9
