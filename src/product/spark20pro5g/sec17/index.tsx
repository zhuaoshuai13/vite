import { useState, useRef, useContext } from "react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay } from "swiper/modules"
import { ScreenContext } from "../../../provider"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "./index.scss"

const Sec17 = () => {
  const { spark20pro5gConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)
  const [swiperInstance, setSwiperInstance] = useState<any>()
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperClass>()

  const handleSwiperSlide = () => {
    setActiveIndex(swiperInstance.activeIndex)
  }

  const handleBtnClick = (index: number) => {
    setActiveIndex(index)
    swiperInstance.slideTo(index)
  }

  return (
    <section className='sec17'>
      <div className='h_full'>
        <div className='ctt'>
          <div className='sec17_swiper'>
            {config.sec17.hios && config.sec17.hios.length > 0 ? (
              <Swiper
                effect={"fade"}
                onSwiper={(swiper) => {
                  setSwiperInstance(swiper)
                  swiperRef.current = swiper
                }}
                modules={isPc ? [EffectFade] : [EffectFade, Autoplay]}
                className='sec8Swiper'
                autoplay={{ delay: 2000 }}
                onSlideChange={() => handleSwiperSlide()}
              >
                {config.sec17.hios.map((item: any, index: number) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className='hios_item'>
                        <div
                          className='left'
                          style={{
                            background: `url(${item.img_background})`,
                            backgroundColor: item.img_background,
                          }}
                        >
                          <div
                            className='img_wrap'
                            style={{ right: `calc(${item.right}vw / 19.2)` }}
                          >
                            <img
                              src={item.img}
                              style={{ width: `calc(${item.width}vw / 19.2)` }}
                              loading='lazy'
                            />
                          </div>
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
