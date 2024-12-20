import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { getTriggerSpace } from "../../../utils/getTriggerSpace"

import "./index.scss"

const Sec3 = () => {
  const wrap = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlay, setIsPlay] = useState(false)
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { ear571hConfig: config, src } = window as any

  const playVideo = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play()
      setIsPlay(true)
    } else {
      videoRef.current?.pause()
      setIsPlay(false)
    }
  }

  const sec3Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".sec3 .part1 .pdp_title",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .from(
        ".sec3 .part1 .desc_wrap",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.2,
        },
        "a"
      )
      .from(
        ".sec3 .part1 .switch_box",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.4,
        },
        "a"
      )
      .from(
        ".sec3 .video_wrap",
        {
          opacity: 0,
          y: 200,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.4,
        },
        "a"
      )
      .from(
        ".sec3 .line1",
        {
          clipPath: "inset(0% 0% 0% 100%)",
          ease: "power2.inOut",
          duration: 2,
        },
        "line"
      )
      .from(
        ".sec3 .line2",
        {
          clipPath: "inset(100% 0% 0% 0%)",
          ease: "power2.inOut",
          duration: 1,
        },
        "line"
      )
      .from(
        ".sec3 .line3",
        {
          clipPath: "inset(100% 0% 0% 0%)",
          ease: "power2.inOut",
          duration: 1,
        },
        "line"
      )
      .from(
        ".sec3 .line4",
        {
          clipPath: "inset(100% 0% 0% 0%)",
          ease: "power2.inOut",
          duration: 1,
          delay: 1,
        },
        "line"
      )
      .from(
        ".sec3 .line5",
        {
          clipPath: "inset(0% 0% 0% 100%)",
          ease: "power2.inOut",
          duration: 1,
        },
        "line"
      )
      .from(
        ".sec3 .line6",
        {
          clipPath: "inset(0% 0% 100% 0%)",
          ease: "power2.inOut",
          duration: 1,
        },
        "line"
      )
      .from(
        ".sec3 .line7",
        {
          clipPath: "inset(0% 0% 100% 0%)",
          ease: "power2.inOut",
          duration: 1,
        },
        "line"
      )

    ScrollTrigger.create({
      trigger: ".sec3_wrap .part1",
      start: `top 75%`,
      animation: tl,
      toggleActions: "play none none reverse",
    })

    const tl2 = gsap
      .timeline()
      .to(
        ".sec3 .part1",
        {
          opacity: 0,
          y: "-100%",
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .to(
        ".sec3 .part2",
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .from(
        ".sec3 .part2 .pdp_title",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .from(
        ".sec3 .part2 .pdp_desc",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.2,
        },
        "a"
      )
      .from(
        ".sec3 .part2 .action_wrap",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.4,
        },
        "a"
      )
      .from(
        ".sec3 .part2 .voice_wrap",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
          delay: 0.4,
        },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec3",
      start: `top -75%`,
      animation: tl2,
      toggleActions: "play none none reverse",
    })

    const tl3 = gsap.timeline().to(".sec3 .part1", {
      ease: "power2.inOut",
      duration: 1,
    })

    ScrollTrigger.create({
      trigger: ".sec3_wrap",
      start: `top ${getTriggerSpace(wrap.current)}`,
      end: "+=150%",
      animation: tl3,
      toggleActions: "play none none reverse",
      pin: true,
    })
  }
  useGSAP(
    () => {
      sec3Ani()
    }
    // { scope: wrap }
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
    <section className='sec3' ref={wrap}>
      <div className='sec3_wrap'>
        <div className='video_wrap'>
          <video src={src + "/videos/sec3.mp4"} autoPlay muted loop></video>
        </div>
        <div className='content_wrap'>
          <div className='part part1'>
            <h3 className='pdp_title'>先进降噪，声临其境</h3>
            <div className='desc_wrap'>
              <p className='pdp_desc'>
                8 个主动降噪麦克风，
                <br /> 高达 40 分贝降噪深度。
              </p>
              <p className='pdp_desc'>
                戴森双麦克风波束成型技术，
                <br /> 嘈杂中精准捕声，通话更清晰。
              </p>
            </div>
            <div className='switch_box'>
              <div className='double_click img_wrap'>
                <img src={src + "/images/double_click.gif"} />
              </div>
              <p className='pdp_desc'>
                双击切换 <br />
                通透模式 / 沉浸模式
              </p>
            </div>
            <div className='line line1'></div>
            <div className='line line2'></div>
            <div className='line line3'></div>
            <div className='line line4'></div>
            <div className='line line5'></div>
            <div className='line line6'></div>
            <div className='line line7'></div>
          </div>
          <div className='part part2'>
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
                      src={src + "/images/pause_icon.png"}
                      style={{ display: isPlay ? "block" : "none" }}
                    />
                    <img
                      src={src + "/images/play_icon.png"}
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
                      <img src={src + "/images/link_icon.png"} />
                    </div>
                  </button>
                </a>
                <div className='btn_desc'>试听歌单歌曲</div>
              </div>
            </div>
            <div className='voice_wrap'>
              <video
                src={src + "/videos/sec3_voice.mp4"}
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
