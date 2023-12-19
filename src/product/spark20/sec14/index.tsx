import { useEffect, useRef } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import sec14PcHios from "../../../assets/spark20/sec14PcHios.png"
import sec14PcIcon1 from "../../../assets/spark20/sec14PcIcon1.png"
import sec14PcIcon2 from "../../../assets/spark20/sec14PcIcon2.png"
import sec14PcIcon3 from "../../../assets/spark20/sec14PcIcon3.png"
import sec14PcIcon4 from "../../../assets/spark20/sec14PcIcon4.png"
import sec14PcIcon5 from "../../../assets/spark20/sec14PcIcon5.png"
import { Box } from "../components"

type VideoEvent = {
  videoEvent: (ref: React.RefObject<HTMLVideoElement>) => void
}

const Sec14 = () => {
  const { spark20Config } = window as any
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const videoRef3 = useRef<HTMLVideoElement>(null)
  const videoRef4 = useRef<HTMLVideoElement>(null)
  const videoRef5 = useRef<HTMLVideoElement>(null)
  const videoClick1 = useRef({} as VideoEvent)
  const videoClick2 = useRef({} as VideoEvent)
  const videoClick3 = useRef({} as VideoEvent)
  const videoClick4 = useRef({} as VideoEvent)
  const videoClick5 = useRef({} as VideoEvent)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec14Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec14 .hios", 1, { y: "50%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec14 .content",
      start: `top 80%`,
      animation: tl,
    })

    const video1 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec14 .sec14_box:nth-child(1)",
      start: `top 85%`,
      animation: video1,
      onEnter: () => {
        videoClick1.current.videoEvent(videoRef1)
      },
    })

    const video2 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec14 .sec14_box:nth-child(2)",
      start: `top 85%`,
      animation: video2,
      onEnter: () => {
        videoClick2.current.videoEvent(videoRef2)
      },
    })

    const video3 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec14 .sec14_box:nth-child(3)",
      start: `top 85%`,
      animation: video3,
      onEnter: () => {
        videoClick3.current.videoEvent(videoRef3)
      },
    })

    const video4 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec14 .sec14_box:nth-child(4)",
      start: `top 85%`,
      animation: video4,
      onEnter: () => {
        videoClick4.current.videoEvent(videoRef4)
      },
    })

    const video5 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec14 .sec14_box:nth-child(5)",
      start: `top 85%`,
      animation: video5,
      onEnter: () => {
        videoClick5.current.videoEvent(videoRef5)
      },
    })
  }

  useEffect(() => {
    sec14Ani()
  })

  return (
    <section className='sec14'>
      <div className='content'>
        <div className='pic_box hios'>
          <img src={sec14PcHios} alt='hios' loading='lazy' />
        </div>
        <div className='box_container'>
          {spark20Config.sec14.dynamicPort && (
            <Box
              videoClick={videoClick1}
              video_ref={videoRef1}
              video_src={spark20Config.sec14.dynamicPortVideo.src}
              video_poster={spark20Config.sec14.dynamicPortVideo.poster}
              pause_color='black'
              text_box={
                <div className='text_box'>
                  <div className='icon icon1'>
                    <img src={sec14PcIcon1} loading='lazy' />
                  </div>
                  <div className='text_wrapper'>
                    <h4
                      className='title_48'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.dynamicPort.title,
                      }}
                    ></h4>
                    <p
                      className='subtitle_24'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.dynamicPort.subtitle,
                      }}
                    ></p>
                    <p
                      className='desc_18'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.dynamicPort.desc,
                      }}
                    ></p>
                  </div>
                </div>
              }
            />
          )}
          {spark20Config.sec14.internet && (
            <Box
              videoClick={videoClick2}
              video_ref={videoRef2}
              video_src={spark20Config.sec14.internetVideo.src}
              video_poster={spark20Config.sec14.internetVideo.poster}
              pause_color='white'
              text_box={
                <div className='text_box'>
                  <div className='icon icon2'>
                    <img src={sec14PcIcon2} loading='lazy' />
                  </div>
                  <div className='text_wrapper'>
                    <h4
                      className='title_48'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.internet.title,
                      }}
                    ></h4>
                    <p
                      className='subtitle_24'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.internet.subtitle,
                      }}
                    ></p>
                    <p
                      className='desc_18'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.internet.desc,
                      }}
                    ></p>
                  </div>
                  <div className='datas datas1'>
                    {spark20Config.sec14.internet.datas.map(
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
              }
            />
          )}
          {spark20Config.sec14.aiTips && (
            <Box
              videoClick={videoClick3}
              video_ref={videoRef3}
              video_src={spark20Config.sec14.aiTipsVideo.src}
              video_poster={spark20Config.sec14.aiTipsVideo.poster}
              pause_color='black'
              text_box={
                <div className='text_box'>
                  <div className='icon icon3'>
                    <img src={sec14PcIcon3} loading='lazy' />
                  </div>
                  <div className='text_wrapper'>
                    <h4
                      className='title_48'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.aiTips.title,
                      }}
                    ></h4>
                    <p
                      className='subtitle_24'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.aiTips.subtitle,
                      }}
                    ></p>
                    <p
                      className='desc_18'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.aiTips.desc,
                      }}
                    ></p>
                  </div>
                </div>
              }
            />
          )}
          {spark20Config.sec14.appTwins && (
            <Box
              videoClick={videoClick4}
              video_ref={videoRef4}
              video_src={spark20Config.sec14.appTwinsVideo.src}
              video_poster={spark20Config.sec14.appTwinsVideo.poster}
              pause_color='black'
              text_box={
                <div className='text_box'>
                  <div className='icon icon4'>
                    <img src={sec14PcIcon4} loading='lazy' />
                  </div>
                  <div className='text_wrapper'>
                    <h4
                      className='title_48'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.appTwins.title,
                      }}
                    ></h4>
                    <p
                      className='subtitle_24'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.appTwins.subtitle,
                      }}
                    ></p>
                    <p
                      className='desc_18'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.appTwins.desc,
                      }}
                    ></p>
                  </div>
                </div>
              }
            />
          )}
          {spark20Config.sec14.social && (
            <Box
              videoClick={videoClick5}
              video_ref={videoRef5}
              video_src={spark20Config.sec14.socialVideo.src}
              video_poster={spark20Config.sec14.socialVideo.poster}
              pause_color='black'
              text_box={
                <div className='text_box'>
                  <div className='icon icon5'>
                    <img src={sec14PcIcon5} loading='lazy' />
                  </div>
                  <div className='text_wrapper'>
                    <h4
                      className='title_48'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.social.title,
                      }}
                    ></h4>
                    <p
                      className='subtitle_24'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.social.subtitle,
                      }}
                    ></p>
                    <p
                      className='desc_18'
                      dangerouslySetInnerHTML={{
                        __html: spark20Config.sec14.social.desc,
                      }}
                    ></p>
                  </div>
                  <div className='datas datas2'>
                    {spark20Config.sec14.social.datas.map(
                      (item: any, index: number) => {
                        return (
                          <div className='data' key={index}>
                            <div
                              className='data_title'
                              dangerouslySetInnerHTML={{ __html: item.name }}
                            ></div>
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
              }
            />
          )}
        </div>
        <div
          className='tips'
          dangerouslySetInnerHTML={{ __html: spark20Config.sec14.tips }}
        ></div>
      </div>
    </section>
  )
}

export default Sec14
