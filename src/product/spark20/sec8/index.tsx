import { useEffect, useState, useContext, useRef } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import { EffectFade } from "swiper/modules"
import "./index.scss"
import sec8PcF1 from "../../../assets/spark20/sec8PcF1.jpg"
import sec8PcF2 from "../../../assets/spark20/sec8PcF2.jpg"
import sec8PcF3 from "../../../assets/spark20/sec8PcF3.jpg"
import sec8PcF4 from "../../../assets/spark20/sec8PcF4.jpg"
import sec8MbF1 from "../../../assets/spark20/sec8MbF1.jpg"
import sec8MbF2 from "../../../assets/spark20/sec8MbF2.jpg"
import sec8MbF3 from "../../../assets/spark20/sec8MbF3.jpg"
import sec8MbF4 from "../../../assets/spark20/sec8MbF4.jpg"
import { ScreenContext } from "../../../provider"

const Sec8 = () => {
  const { isPc } = useContext(ScreenContext)
  const { spark20Config } = window as any
  const [index, setIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<any>(null)
  const swiperRef = useRef<any>()
  const { colorList } = spark20Config.sec8

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const handleSwiperSlide = () => {
    setIndex(swiperInstance.activeIndex)
  }

  const handleButtonClick = (index: number) => {
    setIndex(index)
    swiperInstance.slideTo(index)
  }

  const sec8Ani = () => {
    const tl = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec8",
      start: isPc ? `top 0%` : "top 20%",
      end: "+=200%",
      animation: tl,
      pin: true,
      scrub: true,
      onUpdate: ({ progress }) => {
        if (progress < 0.25) {
          swiperRef.current.slideTo(0)
        } else if (progress > 0.25 && progress < 0.5) {
          swiperRef.current.slideTo(1)
        } else if (progress > 0.5 && progress < 0.75) {
          swiperRef.current.slideTo(2)
        } else if (progress > 0.75 && progress < 1) {
          swiperRef.current.slideTo(3)
        }
      },
    })
  }

  useEffect(() => {
    sec8Ani()
    console.log("动画加载swiper")
  }, [])

  return (
    <section className='sec8'>
      <div className='content'>
        <Swiper
          // effect={"fade"}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper)
            swiperRef.current = swiper
          }}
          modules={[EffectFade]}
          className='sec8Swiper'
          autoplay={{ delay: 2000 }}
          onSlideChange={() => handleSwiperSlide()}
        >
          <SwiperSlide>
            <picture>
              <source media='(min-width: 1081px)' srcSet={sec8PcF1} />
              <source media='(max-width: 1080px)' srcSet={sec8MbF1} />
              <img src={sec8PcF1} loading='lazy' />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media='(min-width: 1081px)' srcSet={sec8PcF2} />
              <source media='(max-width: 1080px)' srcSet={sec8MbF2} />
              <img src={sec8PcF2} loading='lazy' />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media='(min-width: 1081px)' srcSet={sec8PcF3} />
              <source media='(max-width: 1080px)' srcSet={sec8MbF3} />
              <img src={sec8PcF3} loading='lazy' />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media='(min-width: 1081px)' srcSet={sec8PcF4} />
              <source media='(max-width: 1080px)' srcSet={sec8MbF4} />
              <img src={sec8PcF4} loading='lazy' />
            </picture>
          </SwiperSlide>
          <div className='color_content'>
            <div className='color_text'>{colorList[index]}</div>
            <div className='button_wrapper' data-index={index}>
              {colorList.map((item: string, colorIndex: number) => {
                return (
                  <button
                    key={colorIndex}
                    className={index === colorIndex ? "active" : ""}
                    onClick={() => handleButtonClick(colorIndex)}
                  >
                    <div className='circle_big'>
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
