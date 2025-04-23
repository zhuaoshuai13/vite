import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
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
  const videoRef4 = useRef<HTMLVideoElement>(null)
  const videoRef5 = useRef<HTMLVideoElement>(null)
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
      videoRef4.current &&
      videoRef5.current &&
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
        videoRef4.current.pause()
        videoRef5.current.pause()
      }
    }
  }, [destination])

  return (
    <section className='section sec1 slide_sec' ref={wrap}>
      <div className='sec1_wrap'>
        <div className='swiper_btn swiper_prev img_wrap'>
          <img src={src + "/.thumbswysiwyg/ipadassets/571/arrow_left.png"} />
        </div>
        <div className='swiper_btn swiper_next img_wrap'>
          <img
            style={{ transform: "rotate(180deg)" }}
            src={src + "/.thumbswysiwyg/ipadassets/571/arrow_left.png"}
          />
        </div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(e) => {
            handleSlideChange()
          }}
          loop
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper_next",
            prevEl: ".swiper_prev",
          }}
        >
          <SwiperSlide className="sec1_slide">
            <video
              className='sec1_video'
              src={
                src +
                "/video/1/2/1206296353_dyson_ec_ipad_content_kv_video_20s_2360x1152_pp01.mp4"
              }
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
              src={src + "/video/1/_/1_launch_film.mp4"}
              autoPlay
              muted
              // loop
              ref={videoRef2}
              onEnded={handleVideoEnd}
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              className='sec1_video'
              src={src + "/video/2/_/2_media_endorsement_.mp4"}
              // autoPlay
              muted
              // loop
              ref={videoRef3}
              onEnded={handleVideoEnd}
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              className='sec1_video'
              src={src + "/video/3/_/3_raye.mp4"}
              // autoPlay
              muted
              // loop
              ref={videoRef4}
              onEnded={handleVideoEnd}
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              className='sec1_video'
              src={src + "/video/4/_/4_ac_milan.mp4"}
              // autoPlay
              muted
              // loop
              ref={videoRef5}
              onEnded={handleVideoEnd}
            ></video>
          </SwiperSlide>
        </Swiper>
        <div
          className='voice_icon'
          onClick={() => {
            if (
              videoRef.current &&
              videoRef2.current &&
              videoRef3.current &&
              videoRef4.current &&
              videoRef5.current
            ) {
              videoRef.current.muted = !isMute
              videoRef2.current.muted = !isMute
              videoRef3.current.muted = !isMute
              videoRef4.current.muted = !isMute
              videoRef5.current.muted = !isMute
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
        <a
          target='_blank'
          className='music_icon_wrap'
          href='https://music.apple.com/cn/playlist/barefoot-acoustic/pl.8e7d5f0c316f4d9da9db9c29281f10a4?l=en-GB'
        >
          <img
            className='music_icon'
            src={src + "/.thumbswysiwyg/ipadassets/571/apple_music_icon.png"}
          />
          <div className='music_text'>推荐歌单</div>
        </a>
      </div>
    </section>
  )
}

export default Sec1
