import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import "./index.scss"

const Sec1 = ({ destination }) => {
  const { src } = window as any
  const wrap = useRef(null)
  const [isMute, setIsMute] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const videoRef3 = useRef<HTMLVideoElement>(null)
  const swiperRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec1Ani = () => {
    const tl = gsap.timeline().to(
      ".sec1_video",
      {
        y: "50%",
        ease: "power2.inOut",
        duration: 1,
      },
      "a"
    )

    ScrollTrigger.create({
      trigger: ".sec1_wrap",
      start: `top 0%`,
      animation: tl,
      scrub: 0.5,
    })
  }

  const handleVideoEnd = () => {
    if (swiperRef.current.isEnd) {
      swiperRef.current.slideTo(0) // 回到第一个 Slide
    } else {
      swiperRef.current.slideNext()
    }
  }

  const handleSlideChange = () => {
    const slides = swiperRef.current.slides
    const activeIndex = swiperRef.current.activeIndex
    setActiveIndex(activeIndex)
    console.log("🚀 ~ handleSlideChange ~ activeIndex:", activeIndex)
    // const video = currentSlide.querySelector("video");
    // if (video) {
    //   video.play(); // 自动播放当前视频
    // }
    slides.forEach((slide, index) => {
      const video = slide.querySelector("video")
      if (video) {
        if (index === activeIndex) {
          video.play() // 当前视频播放
        } else {
          video.pause() // 其他视频暂停
          video.currentTime = 0 // 可选：将视频进度重置为 0
        }
      }
    })
  }

  useGSAP(
    () => {
      // sec1Ani()
    },
    { scope: wrap }
  )

  useEffect(() => {
    if (
      videoRef.current &&
      videoRef2.current &&
      videoRef3.current &&
      swiperRef.current
    ) {
      if (destination?.index == 0) {
        const slides = swiperRef.current.slides
        slides.forEach((slide, index) => {
          const video = slide.querySelector("video")
          if (video) {
            if (index === activeIndex) {
              video.play() // 当前视频播放
            }
          }
        })
      } else {
        // swiperRef.current.slideTo(0)
        videoRef.current.pause()
        videoRef2.current.pause()
        videoRef3.current.pause()
      }
    }
  }, [destination])

  return (
    <section className='section sec1 slide_sec' ref={wrap}>
      <div className='sec1_wrap'>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(e) => {
            handleSlideChange()
          }}
          loop
        >
          <SwiperSlide>
            <video
              className='sec1_video'
              src={src + "/video/m/a/main_kv1.mp4"}
              autoPlay
              muted
              // loop
              ref={videoRef}
              onEnded={handleVideoEnd}
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              className='sec1_video'
              src={src + "/video/m/a/main_kv3.mp4"}
              // autoPlay
              muted
              // loop
              ref={videoRef2}
              onEnded={handleVideoEnd}
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              className='sec1_video'
              src={src + "/video/m/a/main_kv2.mp4"}
              // autoPlay
              muted
              // loop
              ref={videoRef3}
              onEnded={handleVideoEnd}
            ></video>
          </SwiperSlide>
        </Swiper>
        <div
          className='voice_icon'
          onClick={() => {
            if (videoRef.current && videoRef2.current && videoRef3.current) {
              videoRef.current.muted = !isMute
              videoRef2.current.muted = !isMute
              videoRef3.current.muted = !isMute
            }
            setIsMute(!isMute)
          }}
        >
          <img
            className={!isMute ? "active" : ""}
            src={src + "/wysiwyg/ipadassets/571/volume-_notice.png"}
          />
          <img
            className={isMute ? "active" : ""}
            src={src + "/wysiwyg/ipadassets/571/volume-mute.png"}
          />
        </div>
      </div>
    </section>
  )
}

export default Sec1
