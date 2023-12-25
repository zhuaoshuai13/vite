import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import LazyLoad from "react-lazyload"
import "./index.scss"

const Sec13 = () => {
  const { spark20proplusConfig } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec13Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec13 .title_96", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec13 .title_96",
      start: `top 85%`,
      animation: tl,
    })

    const t2 = gsap
      .timeline()
      .from(
        ".sec13 .spark20_container .text_wrapper",
        1,
        { y: "30%", opacity: 0 },
        "a"
      )
      .from(
        ".sec13 .spark20_container .pic_box",
        1,
        { y: "30%", opacity: 0, delay: 0.25 },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec13 .spark20_container",
      start: `top 85%`,
      animation: t2,
    })

    const t3 = gsap
      .timeline()
      .from(".sec13 .spark20_container .box", 1, { y: "30%", opacity: 0 }, "a")
      .from(
        ".sec13 .spark20_container .line1",
        1,
        { width: 0, delay: 0.5 },
        "a"
      )
      .from(
        ".sec13 .spark20_container .line2",
        1,
        { width: 0, delay: 0.5 },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec13 .spark20_container .box",
      start: `top 85%`,
      animation: t3,
    })

    const t4 = gsap
      .timeline()
      .from(".sec13 .container2 .left", 1, { y: "30%", opacity: 0 }, "a")
      .from(".sec13 .container2 .datas", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec13 .container2",
      start: `top 0`,
      animation: t4,
      pin: true,
      scrub: 0.25,
    })

    // const t5 = gsap
    //   .timeline()
    //   .fromTo(".sec13 .pic_box img", { scale: 1.2 }, { scale: 0.9 })

    // ScrollTrigger.create({
    //   trigger: ".sec13 .container2 .pic_box",
    //   start: `top 65%`,
    //   end: "+=50%",
    //   animation: t5,
    //   scrub: 0.25,
    // })

    // const t6 = gsap
    //   .timeline()
    //   .to(
    //     ".sec_container3",
    //     1,
    //     {
    //       scaleX: 0.93,
    //       scaleY: 0.96,
    //       clipPath: "inset(0px round 14px)",
    //     },
    //     "a"
    //   )
    //   .to(
    //     ".sec13",
    //     1,
    //     {
    //       scale: 0.9,
    //       clipPath: "inset(0px round 14px)",
    //     },
    //     "a"
    //   )

    // ScrollTrigger.create({
    //   trigger: ".sec_container3",
    //   start: `bottom 85%`,
    //   animation: t6,
    //   scrub: 0.25,
    // })
  }

  useEffect(() => {
    sec13Ani()
  })

  return (
    <section className='sec13'>
      <div className='content'>
        <h3 className='title_96 pc'>
          {spark20proplusConfig.sec13.bigTitle.map(
            (item: string, index: number) => {
              return (
                <p key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </p>
              )
            }
          )}
        </h3>
        <h3 className='title_96 mob'>
          {spark20proplusConfig.sec13.bigTitleMb.map(
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
          <div className='text_wrapper'>
            <h4
              className='title_48'
              dangerouslySetInnerHTML={{
                __html: spark20proplusConfig.sec13.speaker.title,
              }}
            ></h4>
            <p
              className='desc_18'
              dangerouslySetInnerHTML={{
                __html: spark20proplusConfig.sec13.speaker.desc,
              }}
            ></p>
          </div>
          <div className='pic_box'>
            <LazyLoad offset={1000}>
              <video
                src={spark20proplusConfig.sec13.speakerVideo.src}
                poster={spark20proplusConfig.sec13.speakerVideo.poster}
                autoPlay
                muted
                loop
                className='sound'
                webkit-playsinline='true'
                playsInline={true}
              ></video>
            </LazyLoad>
          </div>
          <div className='box'>
            <div className='left'>
              <div className='items'>
                <div className='item'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec13.speaker.small_volume,
                    }}
                  ></div>
                  <div className='line line1'></div>
                </div>
                <div className='item'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec13.speaker.big_volume,
                    }}
                  ></div>
                  <div className='line line2'></div>
                </div>
              </div>
            </div>
            <div className='datas'>
              {spark20proplusConfig.sec13.speaker.datas.map(
                (item: any, index: number) => {
                  return (
                    <div className='data' key={index}>
                      {item.name === "dts" ? (
                        <div className='dts'></div>
                      ) : (
                        <div
                          className='data_title'
                          dangerouslySetInnerHTML={{ __html: item.name }}
                        ></div>
                      )}
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
        <div className='mic_box'>
          <div className='text_wrapper'>
            <h4
              className='title_48'
              dangerouslySetInnerHTML={{
                __html: spark20proplusConfig.sec13.mic.title,
              }}
            ></h4>
            <p
              className='subtitle_24'
              dangerouslySetInnerHTML={{
                __html: spark20proplusConfig.sec13.mic.subtitle,
              }}
            ></p>
            <p
              className='desc_18'
              dangerouslySetInnerHTML={{
                __html: spark20proplusConfig.sec13.mic.desc,
              }}
            ></p>
          </div>
          <div className="img_box">
            <img className="mic_icon" src={spark20proplusConfig.sec13.mic.img.mic_icon} />
            <img className="voice_red" src={spark20proplusConfig.sec13.mic.img.voice_red} />
            <img className="voice_blue" src={spark20proplusConfig.sec13.mic.img.voice_blue} />
          </div>
        </div>
        <div className='container2'>
          <div className='pic_box'>
            <picture>
              <source media='(min-width: 1081px)' srcSet={spark20proplusConfig.sec13.screen.phone.img_pc} />
              <source media='(max-width: 1080px)' srcSet={spark20proplusConfig.sec13.screen.phone.img_mb} />
              <img src={spark20proplusConfig.sec13.screen.phone.img_pc} className='screen' loading='lazy' />
            </picture>
          </div>
          <div className='box'>
            <div className='left'>
              <div className='text_wrapper'>
                <h4
                  className='title_48'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec13.screen.title,
                  }}
                ></h4>
                <p
                  className='subtitle_24'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec13.screen.subtitle,
                  }}
                ></p>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec13.screen.desc,
                  }}
                ></p>
              </div>
            </div>
            <div className='datas'>
              {spark20proplusConfig.sec13.screen.datas.map(
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
        <div className='container3'>
        <div className='pic_box'>
            <picture>
              <source media='(min-width: 1081px)' srcSet={spark20proplusConfig.sec13.fod.phone.img_pc} />
              <source media='(max-width: 1080px)' srcSet={spark20proplusConfig.sec13.fod.phone.img_mb} />
              <img src={spark20proplusConfig.sec13.fod.phone.img_pc} className='screen' loading='lazy' />
            </picture>
          </div>
          <div className='box'>
            <div className='left'>
              <div className='text_wrapper'>
                <h4
                  className='title_48'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec13.fod.title,
                  }}
                ></h4>
                <p
                  className='subtitle_24'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec13.fod.subtitle,
                  }}
                ></p>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec13.fod.desc,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec13
