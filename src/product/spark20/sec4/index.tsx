import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import sec4PcF2_2 from "../../../assets/spark20/sec4PcF2_2.jpg"
import sec4PcF3 from "../../../assets/spark20/sec4PcF3.png"
import { Button, useButton } from "../components"
import { ScreenContext } from "../../../provider"

const Sec4 = () => {
  const { isOpen, setIsOpen } = useButton()
  const { isPc } = useContext(ScreenContext)
  const { spark20Config } = window as any

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
  })

  return (
    <section className='sec4'>
      <div className='content'>
        <h3 className='title_96'>
          {spark20Config.sec4.bigTitle.map((item: string, index: number) => {
            return (
              <p key={index}>
                <span dangerouslySetInnerHTML={{ __html: item }}></span>
              </p>
            )
          })}
        </h3>
        <div className='spark20_container'>
          <video
            className='camera'
            src={spark20Config.sec4.cameraVideo.src}
            poster={spark20Config.sec4.cameraVideo.poster}
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
                  __html: spark20Config.sec4.camera.title,
                }}
              ></h4>
              <p
                className='subtitle_24'
                dangerouslySetInnerHTML={{
                  __html: spark20Config.sec4.camera.subtitle,
                }}
              ></p>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: spark20Config.sec4.camera.desc,
                }}
              ></p>
            </div>
            <div className='datas'>
              {spark20Config.sec4.camera.datas.map(
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
        <div className='container2'>
          <div className='left2'>
            <img
              src={sec4PcF2_2}
              alt='Super Night Mode'
              className={isOpen ? "night_pic" : "night_pic off"}
            />
          </div>
          <div className='right2'>
            <img src={sec4PcF3} className='icon' />
            <div className='text_wrapper'>
              <h4
                className='title_48'
                dangerouslySetInnerHTML={{
                  __html: spark20Config.sec4.night_mode.title,
                }}
              ></h4>
              <p
                className='subtitle_24'
                dangerouslySetInnerHTML={{
                  __html: spark20Config.sec4.night_mode.subtitle,
                }}
              ></p>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: spark20Config.sec4.night_mode.desc,
                }}
              ></p>
            </div>
            <div className='datas'>
              {spark20Config.sec4.night_mode.datas.map(
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
