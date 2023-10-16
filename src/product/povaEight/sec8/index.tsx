/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useRef, useEffect } from "react"
import { SecType } from "../type.ts/type"
import "./index.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import UseObservable from "../../../hooks/useObserve"

const Sec8 = (props: SecType) => {
  const { isPc } = props
  const global = window as any
  // const [vPlay, setVPlay] = useState(2)
  const [realIndex, setRealIndex] = useState(0)
  const swiperRef = useRef(null)
  const ref = useRef<HTMLDivElement>(null)
  const v0 = useRef<HTMLVideoElement>(null)
  const v1 = useRef<HTMLVideoElement>(null)
  const v2 = useRef<HTMLVideoElement>(null)
  const v3 = useRef<HTMLVideoElement>(null)
  const v4 = useRef<HTMLVideoElement>(null)
  const v5 = useRef<HTMLVideoElement>(null)
  const v6 = useRef<HTMLVideoElement>(null)
  const v7 = useRef<HTMLVideoElement>(null)
  const v8 = useRef<HTMLVideoElement>(null)
  const v9 = useRef<HTMLVideoElement>(null)

  const IntersectionObserver = UseObservable(ref)
  const scrollPlay = (num: number) => {
    if (num > 5) {
      setRealIndex(num - 6)
    } else {
      setRealIndex(num)
    }
  }

  const buttonClick = (index: number) => {
    if (swiperRef) {
      eval(`v${realIndex + 2}`).current?.pause()
      eval(`v${realIndex + 2}`).current.currentTime = 0
      eval(`v${index + 2}`).current?.play()
      // @ts-ignore
      swiperRef.current.swiper.slideTo(index)
      setRealIndex(index)
    }
  }

  const slideClick = (index: number) => {
    if(isPc) {
      const showIndex = realIndex + 2
      const move = index - showIndex
      let jumpIndex = realIndex + move
  
      if (jumpIndex >= 5) {
        jumpIndex -= 5
      }
  
      if (jumpIndex < 0) {
        jumpIndex += 5
      }
  
      eval(`v${realIndex + 2}`).current?.pause()
      eval(`v${realIndex + 2}`).current.currentTime = 0
      eval(`v${jumpIndex + 2}`).current?.play()
      console.log("🚀 ~ file: index.tsx:80 ~ slideClick ~ eval(`v${jumpIndex + 2}`).current:", eval(`v${jumpIndex + 2}`).current);
      // @ts-ignore
      swiperRef.current.swiper.slideTo(jumpIndex)
      setRealIndex(jumpIndex)
    }else {
      const showIndex = realIndex + 1
      const move = index - showIndex
      let jumpIndex = realIndex + move
  
      if (jumpIndex >= 5) {
        jumpIndex -= 5
      }
  
      if (jumpIndex < 0) {
        jumpIndex += 5
      }
  
      eval(`v${realIndex + 1}`).current?.pause()
      eval(`v${realIndex + 1}`).current.currentTime = 0
      eval(`v${jumpIndex + 1}`).current?.play()
      // @ts-ignore
      swiperRef.current.swiper.slideTo(jumpIndex)
      setRealIndex(jumpIndex)
    }
  }

  useEffect(() => {
    v0.current?.play()
    v1.current?.play()
    v2.current?.play()
    v3.current?.play()
    v4.current?.play()
    v5.current?.play()
    v6.current?.play()
    v7.current?.play()
    v8.current?.play()
    v9.current?.play()
  })

  return (
    <section className={`pop8 sec8 ${IntersectionObserver}`} ref={ref}>
      <div className='bg_wrapper'>
        <div className='icon_container'>
          <div
            className='title_130'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec8.title,
            }}
          ></div>
          <div
            className='icon icon2'
            style={{
              top: isPc ? global.pop8Config.sec8.icon2Top : global.pop8Config.sec8.icon2MobTop,
              left: isPc ? global.pop8Config.sec8.icon2Left : global.pop8Config.sec8.icon2MobLeft,
            }}
          ></div>
          <div
            className='icon icon3'
            style={{
              top: isPc ? global.pop8Config.sec8.icon3Top : global.pop8Config.sec8.icon3MobTop,
              left: isPc ? global.pop8Config.sec8.icon3Left : global.pop8Config.sec8.icon3MobLeft,
            }}
          ></div>
        </div>
        <div className='sec8_swiper' data-current={realIndex}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={isPc ? 5 : 3}
            allowTouchMove={true}
            spaceBetween={50}
            ref={swiperRef}
            onTransitionEnd={(e) => {
              scrollPlay(e.realIndex)
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div
                className={`pic_box ${realIndex === 0 ? "active" : ""}`}
                onClick={() => slideClick(0)}
              >
                <div className='pic_border'></div>
                <div className={`pic pic1`}>
                  <video
                    src={global.pop8Config.sec8Video.v1}
                    poster={global.pop8Config.sec8Video.v1Post}
                    ref={v0}
                    className='video'
                    autoPlay={false}
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`pic_box ${realIndex === 1 ? "active" : ""}`}
                onClick={() => slideClick(1)}
              >
                <div className='pic_border'></div>
                <div className={`pic pic2`}>
                  <video
                    src={global.pop8Config.sec8Video.v2}
                    poster={global.pop8Config.sec8Video.v2Post}
                    ref={v1}
                    className='video'
                    autoPlay={false}
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`pic_box ${realIndex === 2 ? "active" : ""}`}
                onClick={() => slideClick(2)}
              >
                <div className='pic_border'></div>
                <div className={`pic pic3`}>
                  <video
                    src={global.pop8Config.sec8Video.v4}
                    poster={global.pop8Config.sec8Video.v4Post}
                    ref={v2}
                    className='video'
                    autoPlay={true}
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`pic_box ${realIndex === 3 ? "active" : ""}`}
                onClick={() => slideClick(3)}
              >
                <div className='pic_border'></div>
                <div className={`pic pic4`}>
                  <video
                    src={global.pop8Config.sec8Video.v5}
                    poster={global.pop8Config.sec8Video.v5Post}
                    ref={v3}
                    className='video'
                    autoPlay={false}
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`pic_box ${realIndex === 4 ? "active" : ""}`}
                onClick={() => slideClick(4)}
              >
                <div className='pic_border'></div>
                <div className={`pic pic5`}>
                  <video
                    src={global.pop8Config.sec8Video.v6}
                    poster={global.pop8Config.sec8Video.v6Post}
                    ref={v4}
                    className='video'
                    autoPlay={false}
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`pic_box ${realIndex === 5 ? "active" : ""}`}
                onClick={() => slideClick(5)}
              >
                <div className='pic_border'></div>
                <div className={`pic pic5`}>
                  <video
                    src={global.pop8Config.sec8Video.v1}
                    poster={global.pop8Config.sec8Video.v1Post}
                    ref={v5}
                    className='video'
                    autoPlay={false}
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`pic_box ${realIndex === 6 ? "active" : ""}`}
                onClick={() => slideClick(6)}
              >
                <div className='pic_border'></div>
                <div className={`pic pic5`}>
                  <video
                    src={global.pop8Config.sec8Video.v2}
                    poster={global.pop8Config.sec8Video.v2Post}
                    ref={v6}
                    className='video'
                    autoPlay={false}
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`pic_box ${realIndex === 7 ? "active" : ""}`}
                onClick={() => slideClick(7)}
              >
                <div className='pic_border'></div>
                <div className={`pic pic5`}>
                  <video
                    src={global.pop8Config.sec8Video.v4}
                    poster={global.pop8Config.sec8Video.v4Post}
                    ref={v7}
                    className='video'
                    autoPlay={false}
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`pic_box ${realIndex === 8 ? "active" : ""}`}
                onClick={() => slideClick(8)}
              >
                <div className='pic_border'></div>
                <div className={`pic pic5`}>
                  <video
                    src={global.pop8Config.sec8Video.v5}
                    poster={global.pop8Config.sec8Video.v5Post}
                    ref={v8}
                    className='video'
                    autoPlay={false}
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`pic_box ${realIndex === 9 ? "active" : ""}`}
                onClick={() => slideClick(9)}
              >
                <div className='pic_border'></div>
                <div className={`pic pic5`}>
                  <video
                    src={global.pop8Config.sec8Video.v6}
                    poster={global.pop8Config.sec8Video.v6Post}
                    ref={v9}
                    className='video'
                    autoPlay={false}
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className='button_box'>
            {[
              "button1",
              "button2",
              "button3",
              "button4",
              "button5",
            ].map((_, index) => {
              return (
                <div
                  className={`button ${
                    realIndex == index || realIndex - 5 == index ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => buttonClick(index)}
                ></div>
              )
            })}
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
          className='tips pc'
          dangerouslySetInnerHTML={{
            __html: global.pop8Config.sec8.tips,
          }}
        ></div>
      </div>
      <div className='bot_img'></div>
    </section>
  )
}

export default Sec8
