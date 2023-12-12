import { useEffect, useRef, useState } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import LazyLoad from "react-lazyload"
import "./index.scss"
import sec5PcIcon1 from "../../../assets/spark20pro/sec5PcIcon1.png"
import sec5PcIcon2 from "../../../assets/spark20pro/sec5PcIcon2.png"
import sec5PcIcon3 from "../../../assets/spark20pro/sec5PcIcon3.png"
import sec5PcIcon4 from "../../../assets/spark20pro/sec5PcIcon4.png"
import sec5PcStep1 from "../../../assets/spark20pro/sec5PcStep1.png"
import sec5PcStep2 from "../../../assets/spark20pro/sec5PcStep2.png"
import sec5PcStep3 from "../../../assets/spark20pro/sec5PcStep3.png"
import { useButton, Button } from "../components"

const Sec5 = () => {
  const { isOpen, setIsOpen } = useButton()
  const [isOpen2, setIsOpen2] = useState(false)
  const [statusIndex, setStatusIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { spark20proConfig } = window as any
  const { statusList } = spark20proConfig.sec5

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const customClickEvent = () => {
    if (isOpen2) {
      videoRef.current?.pause()
    } else {
      videoRef.current?.play()
    }
    setIsOpen2(!isOpen2)
  }

  const handleStatusClick = (index: number) => {
    setStatusIndex(index)
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
      trigger: ".sec5 #dual-colour",
      start: `top 50%`,
      animation: t6,
      onEnter: () => {
        handleStatusClick(0)
        setTimeout(() => {
          handleStatusClick(1)
          setTimeout(() => {
            handleStatusClick(2)
          }, 1000)
        }, 1000)
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
            {spark20proConfig.sec5.bigTitle.map(
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
                  src={spark20proConfig.sec5.selfieVideo.src}
                  poster={spark20proConfig.sec5.selfieVideo.poster}
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
                    __html: spark20proConfig.sec5.selfie.title,
                  }}
                ></h4>
                <p
                  className='subtitle_24'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec5.selfie.subtitle,
                  }}
                ></p>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec5.selfie.desc,
                  }}
                ></p>
              </div>
              <div className='datas'>
                {spark20proConfig.sec5.selfie.datas.map(
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
            <div className='container2' id='dual-colour'>
              <div className='left2'>
                <img
                  src={spark20proConfig.image.sec5.cold}
                  loading='lazy'
                  className={statusIndex === 0 ? "active" : ""}
                />
                <img
                  src={spark20proConfig.image.sec5.default}
                  loading='lazy'
                  className={statusIndex === 1 ? "active" : ""}
                />
                <img
                  src={spark20proConfig.image.sec5.warm}
                  loading='lazy'
                  className={statusIndex === 2 ? "active" : ""}
                />
              </div>
              <div className='right2'>
                <img src={sec5PcIcon1} className='icon' loading='lazy' />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.dual_colour.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.dual_colour.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.dual_colour.desc,
                    }}
                  ></p>
                </div>
                <div className='button_img'>
                  <div className='all_status'>
                    <div className='active_statu' data-index={statusIndex}>
                      {statusList[statusIndex]}
                    </div>
                    <div className='status'>
                      {statusList.map((item: string, index: number) => {
                        return (
                          <div
                            className={`statu ${
                              statusIndex === index ? "active" : ""
                            }`}
                            key={index}
                          >
                            <span>{item}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className='steps' data-index={statusIndex}>
                    <div className='current_block'></div>
                    <div className='step'>
                      <img src={sec5PcStep1} loading='lazy' />
                    </div>
                    <div className='step'>
                      <img src={sec5PcStep2} loading='lazy' />
                    </div>
                    <div className='step'>
                      <img src={sec5PcStep3} loading='lazy' />
                    </div>
                  </div>
                  <div className='click_block'>
                    {statusList.map((_: string, index: number) => {
                      return (
                        <div
                          className='click_item'
                          key={index}
                          onClick={() => {
                            handleStatusClick(index)
                          }}
                        ></div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className='container2' id='Flash_Light'>
              <div className='left2'>
                <img
                  src={spark20proConfig.image.sec5.super_flash_light}
                  className={
                    isOpen ? "Super_Flash_Light" : "Super_Flash_Light off"
                  }
                  loading='lazy'
                />
              </div>
              <div className='right2'>
                <img src={sec5PcIcon2} className='icon' loading='lazy' />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.super_flash_light.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.super_flash_light.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.super_flash_light.desc,
                    }}
                  ></p>
                </div>
                <Button isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
            <div className='container2' id='dual_video'>
              <div className='left2'>
                <img
                  src={spark20proConfig.image.sec5.super_flash_light}
                  className={
                    isOpen ? "Super_Flash_Light" : "Super_Flash_Light off"
                  }
                  loading='lazy'
                />
              </div>
              <div className='right2'>
                <img src={sec5PcIcon4} className='icon' loading='lazy' />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.dual_video.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.dual_video.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.dual_video.desc,
                    }}
                  ></p>
                </div>
              </div>
            </div>
            <div className='container2' id='height_quality_Video'>
              <div className='left2'>
                <LazyLoad offset={1000}>
                  <video
                    ref={videoRef}
                    src={spark20proConfig.sec5.heightQualityVideo.src}
                    poster={spark20proConfig.sec5.heightQualityVideo.poster}
                    muted
                    loop
                    webkit-playsinline='true'
                    playsInline={true}
                  ></video>
                </LazyLoad>
              </div>
              <div className='right2'>
                <img src={sec5PcIcon3} className='icon' loading='lazy' />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.video_2k.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.video_2k.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec5.video_2k.desc,
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
