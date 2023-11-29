import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import { EffectFade } from "swiper/modules"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import sec8PcF1 from "../../../assets/spark20/sec8PcF1.jpg"
import sec8PcF2 from "../../../assets/spark20/sec8PcF2.jpg"
import sec8PcF3 from "../../../assets/spark20/sec8PcF3.jpg"
import sec8PcF4 from "../../../assets/spark20/sec8PcF4.jpg"
import sec8MbF1 from "../../../assets/spark20/sec8MbF1.jpg"
import sec8MbF2 from "../../../assets/spark20/sec8MbF2.jpg"
import sec8MbF3 from "../../../assets/spark20/sec8MbF3.jpg"
import sec8MbF4 from "../../../assets/spark20/sec8MbF4.jpg"

const Sec8 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec8'>
      <div className='content'>
        <Swiper
          // effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade]}
          className='sec8Swiper'
          loop
          autoplay={{ delay: 2000 }}
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
        </Swiper>
        <div className='button_wrapper'>
          <button className='active'>
            <span>Magic Skin 2.0</span>
            <div className='circle_big'>
              <div className='circle_small'></div>
            </div>
          </button>
          <button>
            {/* <span>Magic Skin 2.0</span> */}
            <div className='circle_big'>
              <div className='circle_small'></div>
            </div>
          </button>
          <button>
            {/* <span>Magic Skin 2.0</span> */}
            <div className='circle_big'>
              <div className='circle_small'></div>
            </div>
          </button>
          <button>
            {/* <span>Magic Skin 2.0</span> */}
            <div className='circle_big'>
              <div className='circle_small'></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sec8
