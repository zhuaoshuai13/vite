import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScreenContext } from "../../../provider"
import LazyLoad from "react-lazyload"
import "./index.scss"

const Sec13 = () => {
  const { spark20proplusConfig } = window as any
  const { isPc } = useContext(ScreenContext)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec13Ani = () => {
    if (isPc) {
      const t4 = gsap
        .timeline()
        .to(".sec13 .container2 .pic_box", {
          x: "34%",
          y: "-20%",
          maskPosition: "43% 0",
          ease: "power1.inOut",
        })
        .from(".sec13 .container2 .left", { y: "30%", opacity: 0 }, "a")
        .from(".sec13 .container2 .datas", { y: "30%", opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec13 .container2",
        start: `top 0`,
        end: "+=150%",
        animation: t4,
        pin: true,
        scrub: 0.25,
      })

      const t7 = gsap
        .timeline()
        .to(".sec13 .container3 .pic_box", {
          width: "62.5vw",
          x: "5%",
          ease: "power1.inOut",
        })
        .from(".sec13 .container3 .left", { y: "30%", opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec13 .container3",
        start: `top 0`,
        end: "+=150%",
        animation: t7,
        // pin: true,
        scrub: 0.25,
      })
    } else {
      const t4 = gsap
        .timeline()
        .from(".sec13 .container2 .left", { y: "30%", opacity: 0 })
        .fromTo(
          ".sec13 .container2 .pic_box",
          {
            x: "34%",
            y: "-20%",
            maskPosition: "0 0",
            ease: "power1.inOut",
            duration: 2,
          },
          {
            x: "0%",
            y: "0%",
            maskPosition: "43% 0",
            ease: "power1.inOut",
            duration: 2,
          }
        )
        .from(".sec13 .container2 .datas", { y: "30%", opacity: 0 })

      ScrollTrigger.create({
        trigger: ".sec13 .container2",
        start: `top 85%`,
        animation: t4,
      })

      const t7 = gsap
        .timeline()
        .from(".sec13 .container3 .pic_box", {
          y: "30%",
          opacity: 0,
        })
        .from(".sec13 .container3 .left", { y: "30%", opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec13 .container3",
        start: `top 85%`,
        animation: t7,
      })
    }

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

    const mic = gsap.timeline().from(".sec13 .mic_box", {
      y: "30%",
      opacity: 0,
    })

    ScrollTrigger.create({
      trigger: ".sec13 .mic_box",
      start: `top 85%`,
      animation: mic,
    })

    const mask = gsap
      .timeline()
      .to(".sec13 .container3", {
        scaleX: 0.93,
      }, 'a')
      .to(".sec_container3", {
        scaleX: 0.93,
        clipPath: "inset(0px round 14px)"
      }, 'a')

    ScrollTrigger.create({
      trigger: ".sec_container3",
      start: `bottom 85%`,
      animation: mask,
      scrub: 0.25
    })
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
                src={spark20proplusConfig.sec13.speaker.speakerVideo.src}
                poster={spark20proplusConfig.sec13.speaker.speakerVideo.poster}
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
                      {item.type === "img" ? (
                        <div className={item.name}>
                          <img src={item.dts_icon} />
                        </div>
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
          <div className='img_box'>
            <img
              className='mic_icon'
              src={spark20proplusConfig.sec13.mic.img.mic_icon}
            />
            <div className='voice_red'>
              <img src={spark20proplusConfig.sec13.mic.img.voice_red} />
            </div>
            <div className='voice_blue'>
              <img src={spark20proplusConfig.sec13.mic.img.voice_blue} />
            </div>
          </div>
        </div>
        <div className='container2'>
          {isPc ? (
            <div className='pic_box'>
              <picture>
                <source
                  media='(min-width: 1081px)'
                  srcSet={spark20proplusConfig.sec13.screen.phone.img_pc}
                />
                <source
                  media='(max-width: 1080px)'
                  srcSet={spark20proplusConfig.sec13.screen.phone.img_mb}
                />
                <img
                  src={spark20proplusConfig.sec13.screen.phone.img_pc}
                  className='screen'
                  loading='lazy'
                />
              </picture>
            </div>
          ) : null}
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
            {!isPc ? (
              <div className='pic_box'>
                <picture>
                  <source
                    media='(min-width: 1081px)'
                    srcSet={spark20proplusConfig.sec13.screen.phone.img_pc}
                  />
                  <source
                    media='(max-width: 1080px)'
                    srcSet={spark20proplusConfig.sec13.screen.phone.img_mb}
                  />
                  <img
                    src={spark20proplusConfig.sec13.screen.phone.img_pc}
                    className='screen'
                    loading='lazy'
                  />
                </picture>
              </div>
            ) : null}
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
          <div className='sticky_wrapper'>
            <div className='pic_box'>
              <picture>
                <source
                  media='(min-width: 1081px)'
                  srcSet={spark20proplusConfig.sec13.fod.phone.img_pc}
                />
                <source
                  media='(max-width: 1080px)'
                  srcSet={spark20proplusConfig.sec13.fod.phone.img_mb}
                />
                <img
                  src={spark20proplusConfig.sec13.fod.phone.img_pc}
                  className='screen'
                  loading='lazy'
                />
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
      </div>
    </section>
  )
}

export default Sec13
