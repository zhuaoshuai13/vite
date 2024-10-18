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

const Sec19 = () => {
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

  const pageTionClick = (index: number) => {
    gsap.to(window, {
      scrollTo: {
        y: timeline.scrollTrigger.labelToScroll("part" + (index + 2)),
      },
      ease: "power2.inOut",
    })
  }

  // const Pagetion = ({
  //   length,
  //   activeIndex,
  // }: {
  //   length: number
  //   activeIndex: number
  // }) => {
  //   return (
  //     <div className='pagination_wrap'>
  //       {new Array(length).fill(null).map((_, index) => {
  //         return (
  //           <span
  //             className={`pagination_item ${
  //               index === activeIndex ? "active" : ""
  //             }`}
  //             key={index}
  //             onClick={() => pageTionClick(index)}
  //           ></span>
  //         )
  //       })}
  //     </div>
  //   )
  // }

  const sec19Ani = () => {
    const tl = gsap
      .timeline()
      .to(".spec_part", { y: "-100%", ease: "power2.inOut" })
    ScrollTrigger.create({
      trigger: ".sec19_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=100%",
      animation: tl,
      scrub: 0.2,
    })

    setTimeline(tl)
  }

  useGSAP(
    () => {
      sec19Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec19' ref={wrap}>
      <div className='sec19_wrap'>
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
        <div className='content_wrap'>
          <div className='part part1'>
            <div className='img_wrap logo_wrap'>
              <img src={src + "/images/pc/sec19_part1_logo_pc.png"} />
            </div>
            <div className='text_wrap'>
              <div
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec19?.part1?.desc }}
              ></div>
            </div>
          </div>
          <div className='part part2'>
            <div className='text_wrap'>
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
              <div className='img_wrap android_wrap'>
                <img src={src + "/images/pc/sec19_part2_android_pc.png"} />
              </div>
            </div>
            <div className='img_wrap phone_wrap'>
              <img src={src + "/images/pc/sec19_part2_f1_pc.png"} />
            </div>
          </div>
          <div className='part part3'>
            <div className='left_wrap'>
              <div className='img_wrap phone_wrap1'>
                <img src={src + "/images/pc/sec19_part3_f1_pc.png"} />
              </div>
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
            <div className='img_wrap phone_wrap2'>
              <img src={src + "/images/pc/sec19_part3_f2_pc.png"} />
            </div>
          </div>
          <div className='part part4'></div>
          <div className='part part6'>
            <div className='img_wrap bg_wrap'>
              <img src={src + "/images/pc/sec19_part6_bg.png"} />
            </div>
            <div className='text_wrap'>
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
              <img src={src + "/images/pc/sec19_part6_f1.png"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec19
