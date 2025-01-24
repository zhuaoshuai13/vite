import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"
const Sec2 = ({ isload, destination }) => {
  const { ear571hConfig: config, src } = window as any
  const wrap = useRef<HTMLDivElement>(null)
  const [timeline, setTimeline] = useState()
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const videoRef3 = useRef<HTMLVideoElement>(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec2Ani = () => {
    const tl = gsap
      .timeline()
      .to(
        ".feature_item",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          stagger: 0.2,
        },
        "a"
      )
      .to(
        ".feature_item .pdp_desc",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          stagger: 0.2,
          onComplete: () => {
            handleVideoPlay()
          },
        },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec2",
      start: `top 75%`,
      animation: tl,
      toggleActions: "play none none reverse",
    })
    setTimeline(tl)
  }

  const handleVideoPlay = () => {
    if (videoRef1.current) {
      videoRef1.current.play()
    }
  }

  useGSAP(
    () => {
      if (!isload && destination?.index == 1) {
        sec2Ani()
        // handleVideoPlay()
      } else {
        if (timeline) {
          timeline.progress(0).pause()
        }
        if (videoRef1.current && videoRef2.current && videoRef3.current) {
          videoRef1.current.pause()
          videoRef1.current.currentTime = 0
          videoRef2.current.pause()
          videoRef2.current.currentTime = 0
          videoRef3.current.pause()
          videoRef3.current.currentTime = 0
        }
      }
    },
    { scope: wrap, dependencies: [isload, destination] }
  )

  return (
    <section className='section sec2 slide_sec' ref={wrap} id='nav_link_0'>
      <div className='sec2_wrap'>
        <div className='feature_items'>
          <div className='feature_item'>
            <div className='img_wrap'>
              <video
                ref={videoRef1}
                className='sec2_video'
                src={src + "/video/c/o/control_headphone_1.mp4"}
                // src={src + "/videos/control_headphone_1.mp4"}
                // autoPlay
                muted
                onEnded={() => {
                  if (videoRef1.current) {
                    videoRef1.current.currentTime = 0
                  }
                  videoRef2.current?.play()
                }}
                // loop
              ></video>
            </div>
            <div className='text_wrap'>
              <div className='number'>1</div>
              <p className='pdp_desc'>
                戴上戴森 OnTrac™
                <br /> 将头梁调整到舒适的状态
              </p>
            </div>
          </div>
          <div className='feature_item'>
            <div className='img_wrap'>
              <video
                ref={videoRef2}
                className='sec2_video'
                src={src + "/video/c/o/control_headphone_2.mp4"}
                // src={src + "/videos/control_headphone_2.mp4"}
                // autoPlay
                muted
                onEnded={() => {
                  if (videoRef2.current) {
                    videoRef2.current.currentTime = 0
                  }
                  videoRef3.current?.play()
                }}
                // loop
              ></video>
            </div>
            <div className='text_wrap'>
              <div className='number'>2</div>
              <p className='pdp_desc'>
                使用音频操纵摇杆 <br /> 即可调整播放
              </p>
            </div>
          </div>
          <div className='feature_item'>
            <div className='img_wrap'>
              <video
                ref={videoRef3}
                className='sec2_video'
                src={src + "/video/c/o/control_headphone_3.mp4"}
                // src={src + "/videos/control_headphone_3.mp4"}
                // autoPlay
                muted
                onEnded={() => {
                  if (videoRef3.current) {
                    videoRef3.current.currentTime = 0
                  }
                  videoRef1.current?.play()
                }}
                // loop
              ></video>
            </div>
            <div className='text_wrap'>
              <div className='number'>3</div>
              <p className='pdp_desc'>
                轻轻双击外壳， 即可
                <br />
                切换沉浸模式和通透模式
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec2
