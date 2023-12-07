import { useEffect, useRef, useState, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
// import sec4PcF2 from "../../../assets/spark20/sec4PcF2.jpg"
import sec5PcCamera from "../../../assets/spark20/sec5PcCamera.png"
import sec5PcF1_cold from "../../../assets/spark20/sec5PcF1_cold.jpg"
import sec5PcF1_default from "../../../assets/spark20/sec5PcF1_default.jpg"
import sec5PcF1_warm from "../../../assets/spark20/sec5PcF1_warm.jpg"
import sec5PcF2_2 from "../../../assets/spark20/sec5PcF2_2.jpg"
import sec5PcF3 from "../../../assets/spark20/sec5PcF3.jpg"
import sec5PcIcon1 from "../../../assets/spark20/sec5PcIcon1.png"
import sec5PcIcon2 from "../../../assets/spark20/sec5PcIcon2.png"
import sec5PcIcon3 from "../../../assets/spark20/sec5PcIcon3.png"
import sec5PcStep1 from "../../../assets/spark20/sec5PcStep1.png"
import sec5PcStep2 from "../../../assets/spark20/sec5PcStep2.png"
import sec5PcStep3 from "../../../assets/spark20/sec5PcStep3.png"
import { useButton, Button } from "../components"
import { ScreenContext } from "../../../provider"

const Sec5 = () => {
  const { isPc } = useContext(ScreenContext)
  const { isOpen, setIsOpen } = useButton()
  const [isOpen2, setIsOpen2] = useState(false)
  const [statusIndex, setStatusIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { spark20Config } = window as any
  const { statusList } = spark20Config.sec5

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

    const t5 = gsap
      .timeline()
      .to(".sec_container1", 1, { scale: 0.9 }, "a")
      .to(
        ".sec5_bottom_mask",
        1,
        { opacity: 0.7, clipPath: "inset(0px round 14px)" },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec5_bottom_mask",
      start: `bottom 85%`,
      animation: t5,
      scrub: 0.25,
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
            {spark20Config.sec5.bigTitle.map((item: string, index: number) => {
              return (
                <p key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </p>
              )
            })}
          </h3>
          <div className='spark20_container'>
            <img src={sec5PcCamera} className='camera' />
            <video
              className='camera_video'
              src={spark20Config.sec5.selfieVideo.src}
              poster={spark20Config.sec5.selfieVideo.poster}
              muted
              autoPlay
              loop
              webkit-playsinline='true'
              playsInline={true}
            ></video>
            <div className='right1'>
              <div className='text_wrapper'>
                <h4
                  className='title_48'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec5.selfie.title,
                  }}
                ></h4>
                <p
                  className='subtitle_24'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec5.selfie.subtitle,
                  }}
                ></p>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec5.selfie.desc,
                  }}
                ></p>
              </div>
              <div className='datas'>
                {spark20Config.sec5.selfie.datas.map(
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
            <div className='container2'>
              <div className='left2'>
                {statusIndex === 0 ? <img src={sec5PcF1_cold} /> : ""}
                {statusIndex === 1 ? <img src={sec5PcF1_default} /> : ""}
                {statusIndex === 2 ? <img src={sec5PcF1_warm} /> : ""}
              </div>
              <div className='right2'>
                <img src={sec5PcIcon1} className='icon' />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec5.dual_colour.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec5.dual_colour.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec5.dual_colour.desc,
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
                            onClick={() => {
                              handleStatusClick(index)
                            }}
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
                      <img src={sec5PcStep1} />
                    </div>
                    <div className='step'>
                      <img src={sec5PcStep2} />
                    </div>
                    <div className='step'>
                      <img src={sec5PcStep3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container2' id='Flash_Light'>
              <div className='right2'>
                <img src={sec5PcIcon2} className='icon' />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec5.super_flash_light.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec5.super_flash_light.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec5.super_flash_light.desc,
                    }}
                  ></p>
                </div>
                <Button isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
              <div className='left2'>
                <img
                  src={sec5PcF2_2}
                  className={
                    isOpen ? "Super_Flash_Light" : "Super_Flash_Light off"
                  }
                />
              </div>
            </div>
            <div className='container2' id='height_quality_Video'>
              <div className='left2'>
                <video
                  ref={videoRef}
                  src={spark20Config.sec5.heightQualityVideo.src}
                  poster={spark20Config.sec5.heightQualityVideo.poster}
                  muted
                  loop
                  webkit-playsinline='true'
                  playsInline={true}
                ></video>
              </div>
              <div className='right2'>
                <img src={sec5PcIcon3} className='icon' />
                <div className='text_wrapper'>
                  <h4
                    className='title_48'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec5.video_2k.title,
                    }}
                  ></h4>
                  <p
                    className='subtitle_24'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec5.video_2k.subtitle,
                    }}
                  ></p>
                  <p
                    className='desc_18'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec5.video_2k.desc,
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
