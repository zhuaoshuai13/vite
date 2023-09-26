/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useRef } from "react"
import "./index.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

const Sec8 = () => {
  const global = window as any
  const [vPlay, setVPlay] = useState(2)
  const [realIndex, setRealIndex] = useState(0)
  const swiperRef = useRef(null)
  const scrollPlay = (num: number) => {
    // const play = num + 2
    // const pause = vPlay
    // eval(`v${pause}`).current?.pause()
    // eval(`v${pause}`).current.currentTime = 0
    // eval(`v${play}`).current?.play()
    // setVPlay(play)
  }

  const slideChange = (activeIndex: number) => {
    setRealIndex(activeIndex)
  }

  const buttonClick = (index: number) => {
    if (swiperRef) {
      // @ts-ignore
      swiperRef.current.swiper.slideTo(index)
      setRealIndex(index)
    }
  }

  return (
    <section className='pop8 sec8'>
      <div className='bg_wrapper'>
        <div className='icon_container'>
          <div
            className='title_130'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec8.title,
            }}
          ></div>
          <div
            className='icon icon1'
            style={{
              top: global.pop8Config.sec8.icon1Top,
              left: global.pop8Config.sec8.icon1Left,
            }}
          ></div>
          <div
            className='icon icon2'
            style={{
              top: global.pop8Config.sec8.icon2Top,
              left: global.pop8Config.sec8.icon2Left,
            }}
          ></div>
          <div
            className='icon icon3'
            style={{
              top: global.pop8Config.sec8.icon3Top,
              left: global.pop8Config.sec8.icon3Left,
            }}
          ></div>
        </div>
        <div className='sec8_swiper' data-current={realIndex}>
          <Swiper
            slidesPerView={5}
            navigation
            loop
            spaceBetween={50}
            ref={swiperRef}
            onTransitionEnd={(e) => {
              scrollPlay(e.realIndex)
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={(swiper) => slideChange(swiper.realIndex)}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`pic_box ${realIndex === index ? "active" : ""}`}
                  >
                    <div className={`pic pic${index + 1}`}></div>
                  </div>
                </SwiperSlide>
              )
            })}
            {/* <SwiperSlide>
              <div className='pic_box'>
                <div className='pic pic1'></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pic_box'>
                <div className='pic pic2'></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pic_box'>
                <div className='pic pic3'></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pic_box'>
                <div className='pic pic4'></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pic_box'>
                <div className='pic pic5'></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pic_box'>
                <div className='pic pic1'></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pic_box'>
                <div className='pic pic2'></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pic_box'>
                <div className='pic pic3'></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pic_box'>
                <div className='pic pic4'></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pic_box'>
                <div className='pic pic5'></div>
              </div>
            </SwiperSlide> */}
          </Swiper>
          <div className='button_box'>
            {["button1", "button2", "button3", "button4", "button5"].map(
              (item, index) => {
                return (
                  <div
                    className={`button ${
                      realIndex == index || realIndex - 5 == index
                        ? "active"
                        : ""
                    }`}
                    key={index}
                    onClick={() => buttonClick(index)}
                  ></div>
                )
              }
            )}
          </div>
          <div className='text_wrapper'>
            <div
              className='title_48 HBfont'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec8.t1,
              }}
            ></div>
            <div
              className='desc_18'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec8.d1,
              }}
            ></div>
          </div>
        </div>
        <div
          className='tips'
          dangerouslySetInnerHTML={{
            __html: global.pop8Config.sec8.tips,
          }}
        ></div>
      </div>
    </section>
  )
}

export default Sec8
