import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import "./index.scss"

const Sec17 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
  const length = config?.sec11?.color?.length
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [swiperInstance, setSwiperInstance] = useState<any>()
  const swiperRef = useRef<SwiperClass>()

  return (
    <section className='sec17' ref={wrap}>
      <div className='sec17_wrap'>
        <div className='text_wrap slide_up'>
          <div
            className='title_75'
            dangerouslySetInnerHTML={{ __html: config?.sec17?.title }}
          ></div>
          <p
            className='desc_16'
            dangerouslySetInnerHTML={{ __html: config?.sec17?.desc }}
          ></p>
        </div>
        <div className='sec17_swiper'>
          <Swiper
            effect={"fade"}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper)
              swiperRef.current = swiper
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            pagination={{
              el: ".sec17 .swiper_pagination",
              type: "bullets",
              clickable: true,
            }}
            // slidesPerView={1}
            // onSlideChange={() => handleSwiperSlide()}
          >
            {config?.sec17?.data?.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <div className='swiper_item'>
                  <div className='img_wrap'>
                    <img loading='lazy' src={src + "/images/pc/" + item.pic} />
                  </div>
                  <div className='mode_name'>{item.mode}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='swiper_pagination'></div>
        </div>
      </div>
    </section>
  )
}

export default Sec17
