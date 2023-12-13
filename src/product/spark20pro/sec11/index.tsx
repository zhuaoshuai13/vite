import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import LazyLoad from "react-lazyload"
import "./index.scss"
import sec11PcF3 from "../../../assets/spark20pro/sec11PcF3.png"
import sec11MbF3 from "../../../assets/spark20pro/sec11MbF3.jpg"
import sec11PcF4 from "../../../assets/spark20pro/sec11PcF4.png"
import sec11MbF4 from "../../../assets/spark20pro/sec11MbF4.png"

const Sec11 = () => {
  const { spark20proConfig } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec11Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec11 .title_96", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec11 .title_96",
      start: `top 85%`,
      animation: tl,
    })

    const t2 = gsap
      .timeline()
      .from(
        ".sec11 .container1 .text_wrapper",
        1,
        { y: "30%", opacity: 0 },
        "a"
      )
      .from(
        ".sec11 .container1 .datas",
        1,
        { y: "30%", opacity: 0, delay: 0.5 },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec11 .container1 .right1",
      start: `top 85%`,
      animation: t2,
    })

    const t3 = gsap
      .timeline()
      .from(
        ".sec11 .container2 .left2 .text_wrapper",
        1,
        { y: "30%", opacity: 0 },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec11 .container2 .left2 .text_wrapper",
      start: `top 85%`,
      animation: t3,
    })

    const t4 = gsap
      .timeline()
      .from(".sec11 .container3 .box", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec11 .container3 .box",
      start: `top 85%`,
      animation: t4,
    })

    const t5 = gsap
      .timeline()
      .from(".sec11 .container4 .box", 1, { y: "30%", opacity: 0 }, "a")
      .from(".sec11 .container4 .pic_box", 1, { x: "50%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec11 .container4 .box",
      start: `top 85%`,
      animation: t5,
    })
  }

  useEffect(() => {
    sec11Ani()
  })

  return (
    <section className='sec11'>
      <div className='content'>
        <h3 className='title_96'>
          {spark20proConfig.sec11.bigTitle.map(
            (item: string, index: number) => {
              return (
                <p key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </p>
              )
            }
          )}
        </h3>

        <div className='container1'>
          <div className='video_box'>
            <LazyLoad offset={1000}>
              <video
                src={spark20proConfig.sec11.processorVideo.src}
                poster={spark20proConfig.sec11.processorVideo.poster}
                autoPlay
                muted
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
                  __html: spark20proConfig.sec11.processor.title,
                }}
              ></h4>
              <p
                className='subtitle_24'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec11.processor.subtitle,
                }}
              ></p>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec11.processor.desc,
                }}
              ></p>
            </div>
            <div className='datas'>
              {spark20proConfig.sec11.processor.datas.map(
                (item: string, index: number) => {
                  return (
                    <div className='data' key={index}>
                      <div
                        className='data_title'
                        dangerouslySetInnerHTML={{ __html: item }}
                      ></div>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </div>

        <div className='container2'>
          <div className='left2'>
            <div className='text_wrapper'>
              <h4
                className='title_48'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec11.engine.title,
                }}
              ></h4>
              <p
                className='subtitle_24'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec11.engine.subtitle,
                }}
              ></p>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec11.engine.desc,
                }}
              ></p>
            </div>
          </div>
          <div className='right2'>
            <div className='pic_box'>
              <LazyLoad offset={1000}>
                <video
                  src={spark20proConfig.sec11.engineVideo.src}
                  poster={spark20proConfig.sec11.engineVideo.poster}
                  autoPlay
                  muted
                  loop
                  webkit-playsinline='true'
                  playsInline={true}
                ></video>
              </LazyLoad>
              <div className='text_wrapper text1'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec11.engine_video_text1.title,
                  }}
                ></div>
                <p
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec11.engine_video_text1.desc,
                  }}
                ></p>
              </div>
              <div className='text_wrapper text2'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec11.engine_video_text2.title,
                  }}
                ></div>
                <p
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec11.engine_video_text2.desc,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>

        <div className='container3'>
          <picture>
            <source media='(min-width: 1081px)' srcSet={sec11PcF3} />
            <source media='(max-width: 1080px)' srcSet={sec11MbF3} />
            <img src={sec11PcF3} className='memory' loading='lazy' />
          </picture>
          <div className='box'>
            <div className='left3'>
              <div className='text_wrapper'>
                <h4
                  className='title_48'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec11.memory.title,
                  }}
                ></h4>
                <p
                  className='subtitle_24'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec11.memory.subtitle,
                  }}
                ></p>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec11.memory.desc,
                  }}
                ></p>
              </div>
            </div>
            <div className='right3'>
              <div className='datas'>
                {spark20proConfig.sec11.memory.datas.map(
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
          <div
            className='tips'
            dangerouslySetInnerHTML={{
              __html: spark20proConfig.sec11.memory.tips,
            }}
          ></div>
        </div>

        <div className='container4'>
          <div className='pic_box'>
            <picture>
              <source media='(min-width: 1081px)' srcSet={sec11PcF4} />
              <source media='(max-width: 1080px)' srcSet={sec11MbF4} />
              <img src={sec11PcF4} className='battery' loading='lazy' />
            </picture>
          </div>
          <div className='box'>
            <div className='left4'>
              <div className='text_wrapper'>
                <h4
                  className='title_48'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec11.battery.title,
                  }}
                ></h4>
                <p
                  className='subtitle_24'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec11.battery.subtitle,
                  }}
                ></p>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec11.battery.desc,
                  }}
                ></p>
              </div>
            </div>
            <div className='right4'>
              <div className='datas'>
                {spark20proConfig.sec11.battery.datas.map(
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
        </div>
      </div>
    </section>
  )
}

export default Sec11
