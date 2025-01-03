import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"
const Sec3 = ({ isload, destination }) => {
  const wrap2 = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlay, setIsPlay] = useState(false)
  const [timeline, setTimeline] = useState()
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { src } = window as any

  const playVideo = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play()
      setIsPlay(true)
    } else {
      videoRef.current?.pause()
      setIsPlay(false)
    }
  }

  const sec32Ani = () => {
    const tl2 = gsap
      .timeline()
      .to(
        ".sec32 .part2 .pdp_title",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .to(
        ".sec32 .part2 .pdp_desc",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.2,
        },
        "a"
      )
      .to(
        ".sec32 .part2 .action_wrap",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.4,
        },
        "a"
      )
      .to(
        ".sec32 .part2 .voice_wrap",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.4,
        },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec32",
      start: `top 75%`,
      animation: tl2,
      toggleActions: "play none none reverse",
    })
    setTimeline(tl2)
  }

  useGSAP(
    () => {
      if (!isload && destination?.index == 3) {
        sec32Ani()
      } else {
        if (timeline) {
          timeline.progress(0).pause()
        }
      }
    },
    { scope: wrap2, dependencies: [isload, destination] }
  )

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current?.addEventListener("ended", () => setIsPlay(false))
    }

    return () => {
      if (videoRef.current) {
        videoRef.current?.removeEventListener("ended", () => setIsPlay(false))
      }
    }
  }, [])

  return (
    <section className='section sec32' ref={wrap2}>
      <div className='sec32_wrap'>
        <div className='content_wrap'>
          <div className='part part2 slide_sec'>
            <h3 className='pdp_title'>非同凡响的现场级音质</h3>
            <p className='pdp_desc'>
              戴森采用尖端 DSP 技术，突破频率界限，6Hz 至 <br />
              21kHz音频细腻呈现，音质卓越，完美适配各类音乐风格。
            </p>
            <div className='action_wrap'>
              <div className='action_box'>
                <button className='' onClick={() => playVideo()}>
                  <div className='play_icon img_wrap'>
                    <img
                      src={src + "/wysiwyg/ipadassets/571/pause_icon.png"}
                      style={{ display: isPlay ? "block" : "none" }}
                    />
                    <img
                      src={src + "/wysiwyg/ipadassets/571/play_icon.png"}
                      style={{ display: isPlay ? "none" : "block" }}
                    />
                  </div>
                  <div className='icon_desc'>{isPlay ? "暂停" : "PLAY"}</div>
                </button>
                <div className='btn_desc'>试听宽广音域表现</div>
              </div>
              <div className='action_box'>
                <a
                  target='_blank'
                  href='https://music.apple.com/cn/album/%E4%B8%83%E9%87%8C%E9%A6%99/536114662?i=536115195'
                >
                  <button className=''>
                    <div className='link_icon img_wrap'>
                      <img
                        src={src + "/wysiwyg/ipadassets/571/link_icon.png"}
                      />
                    </div>
                  </button>
                </a>
                <div className='btn_desc'>试听歌单歌曲</div>
              </div>
            </div>
            <div className='voice_wrap'>
              <video
                src={src + "/video/s/e/sec3_voice.mp4"}
                ref={videoRef}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec3
