import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import LazyLoad from "react-lazyload"
import "./index.scss"
import sec4PcF3 from "../../../assets/spark20pro/sec4PcF3.png"
import { Button, useButton } from "../components"
import { ScreenContext } from "../../../provider"

const Sec4 = () => {
  const { isOpen, setIsOpen } = useButton()
  const { spark20proConfig } = window as any
  const { isPc } = useContext(ScreenContext)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec4Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec4 .title_96", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec4",
      start: `top 85%`,
      animation: tl,
    })

    if (isPc) {
      const t2 = gsap
        .timeline()
        .from(
          ".sec4 .spark20_container .text_wrapper",
          1,
          { y: "30%", opacity: 0 },
          "a"
        )
        .from(
          ".sec4 .spark20_container .datas",
          1,
          { y: "30%", opacity: 0, delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec4 .right1",
        start: `top 85%`,
        animation: t2,
      })
    } else {
      const t2 = gsap
        .timeline()
        .from(
          ".sec4 .spark20_container .datas",
          1,
          { y: "30%", opacity: 0 },
          "a"
        )
        .from(
          ".sec4 .spark20_container .text_wrapper",
          1,
          { y: "30%", opacity: 0, delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec4 .spark20_container .datas",
        start: `top 85%`,
        animation: t2,
      })
    }

    const t3 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec4 .container2",
      start: `top 30%`,
      animation: t3,
      onEnter: () => {
        setIsOpen(true)
      },
    })
  }

  useEffect(() => {
    sec4Ani()
  }, [])

  return (
    <section className='sec4'>
      <div className='content'>
        <h3 className='title_96'>
          {spark20proConfig.sec4.bigTitle.map((item: string, index: number) => {
            return (
              <p key={index}>
                <span dangerouslySetInnerHTML={{ __html: item }}></span>
              </p>
            )
          })}
        </h3>
        <div className='spark20_container'>
          <div className='video_box'>
            <LazyLoad offset={1000}>
              <video
                className='camera'
                src={spark20proConfig.sec4.cameraVideo.src}
                poster={spark20proConfig.sec4.cameraVideo.poster}
                muted
                autoPlay
                loop
                webkit-playsinline='true'
                playsInline={true}
              ></video>
            </LazyLoad>
          </div>
          {!isPc ? (
            <div className='datas'>
              {spark20proConfig.sec4.camera.datas.map(
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
          ) : null}
          <div className='right1'>
            <div className='text_wrapper'>
              <h4
                className='title_48'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec4.camera.title,
                }}
              ></h4>
              <p
                className='subtitle_24'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec4.camera.subtitle,
                }}
              ></p>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec4.camera.desc,
                }}
              ></p>
            </div>
          </div>
          {isPc ? (
            <div className='datas'>
              {spark20proConfig.sec4.camera.datas.map(
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
          ) : null}
        </div>
        <div className='container2'>
          <div className='left2'>
            <img
              src={spark20proConfig.image.sec4.super_night_mode}
              alt='Super Night Mode'
              className={isOpen ? "night_pic" : "night_pic off"}
              loading='lazy'
            />
          </div>
          <div className='right2'>
            <img src={sec4PcF3} className='icon' loading='lazy' />
            <div className='text_wrapper'>
              <h4
                className='title_48'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec4.night_mode.title,
                }}
              ></h4>
              <p
                className='subtitle_24'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec4.night_mode.subtitle,
                }}
              ></p>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec4.night_mode.desc,
                }}
              ></p>
            </div>
            <div className='datas'>
              {spark20proConfig.sec4.night_mode.datas.map(
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
            <Button isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec4