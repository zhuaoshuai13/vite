import { useEffect, useContext, useRef } from "react"

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
import { ScreenContext } from "../../../provider"
import { Box } from "../components"

type VideoEvent = {
  videoEvent: (ref: React.RefObject<HTMLVideoElement>) => void
}

const Sec14 = () => {
  const { isPc } = useContext(ScreenContext)
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
      .from(".sec14 .hios", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec14 .content",
      start: `top 85%`,
      animation: tl,
    })
    
    const video1 = gsap
      .timeline()

    ScrollTrigger.create({
      trigger: ".sec14 .box:nth-child(1)",
      start: `top 85%`,
      animation: video1,
      onEnter: () => {
        videoClick1.current.videoEvent(videoRef1)
      },
    })
    
    const video2 = gsap
      .timeline()

    ScrollTrigger.create({
      trigger: ".sec14 .box:nth-child(2)",
      start: `top 85%`,
      animation: video2,
      onEnter: () => {
        videoClick2.current.videoEvent(videoRef2)
      },
    })
    
    const video3 = gsap
      .timeline()

    ScrollTrigger.create({
      trigger: ".sec14 .box:nth-child(3)",
      start: `top 85%`,
      animation: video3,
      onEnter: () => {
        videoClick3.current.videoEvent(videoRef3)
      },
    })
    
    const video4 = gsap
      .timeline()

    ScrollTrigger.create({
      trigger: ".sec14 .box:nth-child(4)",
      start: `top 85%`,
      animation: video4,
      onEnter: () => {
        videoClick4.current.videoEvent(videoRef4)
      },
    })
    
    const video5 = gsap
      .timeline()

    ScrollTrigger.create({
      trigger: ".sec14 .box:nth-child(5)",
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
                  <h4 className='title_48'>Dynamic Port</h4>
                  <p className='subtitle_24'>Always-On, Never In the Way</p>
                  <p className='desc_18'>
                    Tecno's self-developed Dynamic Port cleverly merges with the
                    hole screen, giving you early access to the leading-edge
                    cool gadget! Futuristic design and intuitive integration
                    breathe new life to the front camera hole - displaying
                    messages, offering front-end services, while captivating
                    onlookers with an envy-inducing allure.
                  </p>
                </div>
              </div>
            }
          />
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
                  <h4 className='title_48'>
                    Intelligent Internet Speed Improvement
                  </h4>
                  <p className='subtitle_24'>
                    Surfing the Internet, on Multi-Boost!
                  </p>
                  <p className='desc_18'>
                    Boost on all fronts! Smart Dual Panel propels Wi-Fi and
                    cellular in parallel, slashing app loading latency by 25%
                    and ramping up download speed by 25%. Enjoy fast and stable
                    network for utmost satisfaction. Smart Network Allocation
                    places foreground tasks into 'fast lane,' up the priority
                    for most essential apps.
                  </p>
                </div>
                <div className='datas datas1'>
                  <div className='data'>
                    <div className='data_title'>
                      Smart Dual <br /> Panel
                    </div>
                    <p className='data_desc'>WIFI plus Cellular</p>
                  </div>
                  <div className='data'>
                    <div className='data_title'>
                      Smart Network <br /> Allocation
                    </div>
                    <p className='data_desc'>Full Scene Acceleration</p>
                  </div>
                </div>
              </div>
            }
          />
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
                  <h4 className='title_48'>AI Tips</h4>
                  <p className='subtitle_24'>
                    Your Helpful Assistant in the AIGC Era
                  </p>
                  <p className='desc_18'>
                    Meet your savvy AI buddy! It's like a personal assistant,
                    but cooler and smarter - managing schedules, offering
                    thoughtful suggestions, providing upfront services or
                    reminders, and anticipating your needs when juggling
                    multiple tasks. Get ready for its tips and prepare to be
                    WOWed!
                  </p>
                </div>
              </div>
            }
          />
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
                  <h4 className='title_48'>APP Twins</h4>
                  <p className='subtitle_24'>
                    Mastering the Switch between Work & Life
                  </p>
                  <p className='desc_18'>
                    Tired of managing multiple devices for different accounts?
                    APP Twins have it simplified. By cloning apps, it enables
                    simultaneous login to various accounts, effortlessly
                    handling both personal and work profiles. Try it now on
                    WhatsApp, Messenger, Snapchat, Instagram, and more.
                  </p>
                </div>
              </div>
            }
          />
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
                  <h4 className='title_48'>Social Turbo</h4>
                  <p className='subtitle_24'>Turbocharge the FUN of Social</p>
                  <p className='desc_18'>
                    Up your social game with Social Turbo! Tailored for
                    third-party social apps, this video call feature is a rare
                    gem in any smart phone of the same class: In-call beauty &
                    make-up filters, fill light, AR avatars, voice change, and
                    more, spicing up everyday conversations.
                  </p>
                </div>
                <div className='datas datas2'>
                  <div className='data'>
                    <div className='data_title'>Beauty and Make-up</div>
                  </div>
                  <div className='data'>
                    <div className='data_title'>Fill Light</div>
                  </div>
                  <div className='data'>
                    <div className='data_title'>AR Avatar</div>
                  </div>
                  <div className='data'>
                    <div className='data_title'>Voice Change</div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className='tips'>
          * Evidenced by data from TECNO LAB. <br /> * Pictures, videos, and
          texts of the aforementioned page are for reference only, which may
          vary depending on the actual phone.
        </div>
      </div>
    </section>
  )
}

export default Sec14
