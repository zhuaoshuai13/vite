import { useEffect, useRef, useState } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import LazyLoad from "react-lazyload"
import "./index.scss"
import { useButton, Button } from "../components"

const Sec5 = () => {
  const { isOpen, setIsOpen } = useButton()
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [slide, setSlide] = useState("")
  const videoRef = useRef<HTMLVideoElement>(null)
  const slowMotionVideoRef = useRef<HTMLVideoElement>(null)
  const { spark20proplusConfig } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const slowMotionVideo = () => {
    if (isOpen3) {
      slowMotionVideoRef.current?.pause()
    } else {
      slowMotionVideoRef.current?.play()
    }
    setIsOpen3(!isOpen3)
  }

  const customClickEvent = () => {
    if (isOpen2) {
      videoRef.current?.pause()
    } else {
      videoRef.current?.play()
    }
    setIsOpen2(!isOpen2)
  }

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec5Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec5 .title_96", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec5",
      start: `top 85%`,
      animation: tl,
    })

    const t2 = gsap
      .timeline()
      .from(
        ".sec5 .spark20_container .text_wrapper",
        1,
        { y: "30%", opacity: 0 },
        "a"
      )
      .from(
        ".sec5 .spark20_container .datas",
        1,
        { y: "30%", opacity: 0, delay: 0.5 },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec5 .right1",
      start: `top 85%`,
      animation: t2,
    })

    const t3 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec5 #Flash_Light",
      start: `top 30%`,
      animation: t3,
      onEnter: () => {
        setIsOpen(true)
      },
    })

    const t4 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec5 #height_quality_Video",
      start: `top 30%`,
      animation: t4,
      onEnter: () => {
        customClickEvent()
      },
    })

    const t5 = gsap.timeline().to(
      ".sec_container1",
      1,
      {
        scale: 0.9,
        clipPath: "inset(0px round 14px)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
      "a"
    )

    ScrollTrigger.create({
      trigger: ".sec5_bottom_mask",
      start: `bottom 85%`,
      animation: t5,
      scrub: 0.25,
    })

    const t6 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec5 #slow-motion",
      start: `top 50%`,
      animation: t6,
      onEnter: () => {
        slowMotionVideo()
      },
    })

    const t7 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec5 #dual-video",
      start: `top 50%`,
      animation: t7,
      onEnter: () => {
        setSlide("bottom")
      },
    })
  }

  useEffect(() => {
    setIsOpen(false)
    sec5Ani()
  }, [])

  return (
    <>
      <section className='sec5'>
        <div className='content'>
          <h3 className='title_96'>
            {spark20proplusConfig.sec5.bigTitle.map(
              (item: string, index: number) => {
                return (
                  <p key={index}>
                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                  </p>
                )
              }
            )}
          </h3>
          <div className='spark20_container'>
            <div className='video_box'>
              <LazyLoad offset={1000}>
                <video
                  className='camera_video'
                  src={spark20proplusConfig.sec5.selfie.selfieVideo.src}
                  poster={spark20proplusConfig.sec5.selfie.selfieVideo.poster}
                  muted
                  autoPlay
                  loop
                  webkit-playsinline='true'
                  playsInline={true}
                ></video>
              </LazyLoad>
            </div>
            <div className='right1'>
              <div className='text_wrapper'>
                <h4
                  className='title_48'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec5.selfie.title,
                  }}
                ></h4>
                <p
                  className='subtitle_24'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec5.selfie.subtitle,
                  }}
                ></p>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec5.selfie.desc,
                  }}
                ></p>
              </div>
              <div className='datas'>
                {spark20proplusConfig.sec5.selfie.datas.map(
                  (item: any, index: number) => {
                    return (
                      <div className='data' key={index}>
                        <div
                          className='data_title'
                          dangerouslySetInnerHTML={{ __html: item.name }}
                        ></div>
                        <p
                          className='data_desc'
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        ></p>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          </div>
          <div>
            <div className='container2' id='Flash_Light'>
              <div className='left2'>
                <img
                  src={spark20proplusConfig.sec5.super_flash_light.image}
                  className={
                    isOpen ? "Super_Flash_Light" : "Super_Flash_Light off"
                  }
                  loading='lazy'
                />
              </div>
              <div className='right2'>
                <img
                  src={spark20proplusConfig.sec5.super_flash_light.bg_icon}
                  className='icon'
                  loading='lazy'
                />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.super_flash_light.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html:
                        spark20proplusConfig.sec5.super_flash_light.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.super_flash_light.desc,
                    }}
                  ></p>
                </div>
                <Button isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
            <div className='container2' id='dual-video'>
              <div className='left2'>
                <img
                  src={spark20proplusConfig.sec5.dual_video.image}
                  className={slide + " Super_Flash_Light"}
                  loading='lazy'
                />
                <div
                  className='tips'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec5.dual_video.tips,
                  }}
                ></div>
              </div>
              <div className='right2'>
                <img
                  src={spark20proplusConfig.sec5.dual_video.bg_icon}
                  className='icon'
                  loading='lazy'
                />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.dual_video.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.dual_video.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.dual_video.desc,
                    }}
                  ></p>
                </div>
                <div className='slide_button'>
                  <div
                    className='arrow_wrapper arrow_top'
                    onClick={() => setSlide("top")}
                  >
                    <img
                      src={spark20proplusConfig.sec5.dual_video.arrow}
                      loading='lazy'
                    />
                  </div>
                  <div
                    className='arrow_wrapper arrow_bottom'
                    onClick={() => setSlide("bottom")}
                  >
                    <img
                      src={spark20proplusConfig.sec5.dual_video.arrow}
                      loading='lazy'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='container2' id='slow-motion'>
              <div className='left2'>
                <LazyLoad offset={1000}>
                  <video
                    ref={slowMotionVideoRef}
                    src={spark20proplusConfig.sec5.slow_motion.video.src}
                    poster={spark20proplusConfig.sec5.slow_motion.video.poster}
                    muted
                    loop
                    webkit-playsinline='true'
                    playsInline={true}
                  ></video>
                </LazyLoad>
              </div>
              <div className='right2'>
                <img
                  src={spark20proplusConfig.sec5.slow_motion.bg_icon}
                  className='icon'
                  loading='lazy'
                />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.slow_motion.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.slow_motion.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.slow_motion.desc,
                    }}
                  ></p>
                </div>
                <Button isOpen={isOpen3} setIsOpen={setIsOpen3} customClickEvent={() => slowMotionVideo()} />
              </div>
            </div>
            <div className='container2' id='height_quality_Video'>
              <div className='left2'>
                <LazyLoad offset={1000}>
                  <video
                    ref={videoRef}
                    src={
                      spark20proplusConfig.sec5.video_2k.heightQualityVideo.src
                    }
                    poster={
                      spark20proplusConfig.sec5.video_2k.heightQualityVideo
                        .poster
                    }
                    muted
                    loop
                    webkit-playsinline='true'
                    playsInline={true}
                  ></video>
                </LazyLoad>
              </div>
              <div className='right2'>
                <img
                  src={spark20proplusConfig.sec5.video_2k.bg_icon}
                  className='icon'
                  loading='lazy'
                />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.video_2k.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.video_2k.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec5.video_2k.desc,
                    }}
                  ></p>
                </div>
                <Button
                  isOpen={isOpen2}
                  setIsOpen={setIsOpen2}
                  customClickEvent={() => customClickEvent()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='sec5_bottom_mask'></div>
      </section>
    </>
  )
}

export default Sec5
