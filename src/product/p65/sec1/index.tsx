import { useRef } from "react"
import { ComponentType } from "../type"

import "./index.scss"

const Sec1 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
  out,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const btnA = useRef<HTMLDivElement>(null)
  // const videoRef = useRef<HTMLVideoElement>(null)
  const load = UseObservable(container)

  useGSAP(
    () => {
      gsap.to(window, { duration: 1, scrollTo: ".sec1" })
      if (container.current) {
        gsap.from(".leftHand", {
          x: -200,
          y: -200,
          duration: 1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".leftPhone", {
          x: -200,
          y: -400,
          delay: 0.1,
          duration: 1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".rightPhone", {
          x: 200,
          y: 400,
          duration: 1,
          delay: 0.1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".rightHand", {
          x: 200,
          y: 400,
          duration: 1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".rightMask", {
          x: 20,
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "sine.inOut",
          delay: 0.3,
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".leftMask", {
          opacity: 0,
          ease: "sine.inOut",
          delay: 0.3,
          duration: 1,
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })
        // if (responsive?.md) {
        //   gsap.from(".sec1-box", {
        //     opacity: 0,
        //     y: 200,
        //     ease: "sine.inOut",
        //     scrollTrigger: {
        //       trigger: ".sec1-box-tirgger",
        //       start: "top bottom",
        //       end: "+=500",
        //       scrub: true,
        //     },
        //   })
        // }

        gsap.to(".sec1-text-wrapper .title", {
          duration: 1,
          opacity: 1,
          text: `${config.sec1.title}`,
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })

        gsap.to(".sec1-text-wrapper .spana.pc", {
          duration: 1,
          opacity: 1,
          delay: 0.25,
          text: `${config.sec1.subtitlea}`,
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })

        gsap.to(".sec1-text-wrapper .spanb.pc", {
          duration: 1,
          opacity: 1,
          delay: 0.5,
          text: `${config.sec1.subtitleb}`,
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })
        gsap.to(".sec1-text-wrapper .spanc.pc", {
          duration: 1,
          opacity: 1,
          delay: 0.75,
          text: `${config.sec1.subtitlec}`,
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })

        gsap.from(".sec1-text-wrapper .info span", {
          duration: 1,
          delimiter: " ",
          delay: 1,
          speed: 0.5,
          text: "",
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })
        gsap.from(".sec1-text-wrapper .info", {
          duration: 0,
          opacity: 0,
          delay: 1,
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })
      }

      gsap.to(".sec1-text-wrapper .mbspana", {
        duration: 1,
        opacity: 1,
        delay: 0.5,
        text: `${config.sec1.moba}`,
        scrollTrigger: {
          trigger: ".sec1-box-tirgger",
          start: "top center",
        },
      })

      gsap.to(".sec1-text-wrapper .mbspanb", {
        duration: 1,
        opacity: 1,
        delay: 0.5,
        text: `${config.sec1.mobb}`,
        scrollTrigger: {
          trigger: ".sec1-box-tirgger",
          start: "top center",
        },
      })

      gsap.to(".sec1-text-wrapper .mbspanc", {
        duration: 1,
        opacity: 1,
        delay: 0.5,
        text: `${config.sec1.mobc}`,
        scrollTrigger: {
          trigger: ".sec1-box-tirgger",
          start: "top center",
        },
      })

      gsap.to(".sec1-text-wrapper .mbspand", {
        duration: 1,
        opacity: 1,
        delay: 0.5,
        text: `${config.sec1.mobd}`,
        scrollTrigger: {
          trigger: ".sec1-box-tirgger",
          start: "top center",
        },
      })

      gsap.to(".sec1-text-wrapper .mbspane", {
        duration: 1,
        opacity: 1,
        delay: 0.5,
        text: `${config.sec1.mobe}`,
        scrollTrigger: {
          trigger: ".sec1-box-tirgger",
          start: "top center",
        },
      })

      const tl2 = gsap.timeline()

      tl2.to(
        ".fout",
        {
          y: -window.innerHeight,
          duration: 1,
        },
        "a"
      )
      tl2.to(
        ".adam",
        {
          opacity: 1,
          duration: 0.5,
        },
        "b"
      )
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: container.current,
        start: `bottom bottom`,
        end: `+=${window.innerHeight * 1.5}`,
        // start: `${responsive?.md ? "bottom bottom" : "top center-=200"}`,
        // end: "+=400",
        animation: tl2,
        scrub: 1,
        easy: "none",
        // scrub: true,
        pin: true,
        toggleActions: "restart none none reverse",
      })
      btnA.current?.addEventListener("click", () => {
        const progress = 0.65
        // const scroll = scrollTriggerInstance.start
        const scroll =
          scrollTriggerInstance.start +
          progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
        scrollTriggerInstance.scroll(scroll)
      })

      // if (responsive?.md) {
      //   const tl2 = gsap.timeline()

      //   tl2.to(
      //     ".fout",
      //     {
      //       y: -window.innerHeight,
      //       duration: 1,
      //     },
      //     "a"
      //   )
      //   tl2.to(
      //     ".adam",
      //     {
      //       opacity: 1,
      //       duration: 0.5,
      //     },
      //     "b"
      //   )
      //   const scrollTriggerInstance = ScrollTrigger.create({
      //     trigger: container.current,
      //     start: `bottom bottom`,
      //     end: `+=${window.innerHeight * 1.5}`,
      //     // start: `${responsive?.md ? "bottom bottom" : "top center-=200"}`,
      //     // end: "+=400",
      //     animation: tl2,
      //     scrub: true,
      //     pin: true,
      //     toggleActions: "restart none none reverse",
      //   })
      //   btnA.current?.addEventListener("click", () => {
      //     const progress = 0.61
      //     // const scroll = scrollTriggerInstance.start
      //     const scroll =
      //       scrollTriggerInstance.start +
      //       progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
      //     scrollTriggerInstance.scroll(scroll)
      //   })
      // } else {
      //   btnA.current?.addEventListener("click", () => {
      //     const tl2 = gsap.timeline()

      //     tl2.to(".video", {
      //       className: "video active",
      //       duration: 0.1,
      //     })
      //     const scrollTriggerInstance = ScrollTrigger.create({
      //       trigger: ".sec1Bg2",
      //       start: "bottom bottom",
      //       end: "+=400",
      //       // start: `${responsive?.md ? "bottom bottom" : "top center-=200"}`,
      //       // end: "+=400",
      //       animation: tl2,
      //       scrub: true,
      //       // pin: true,
      //       toggleActions: "restart none none reverse",
      //     })
      //     const progress = 0.01
      //     // const scroll = scrollTriggerInstance.start
      //     const scroll =
      //       scrollTriggerInstance.start +
      //       progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
      //     scrollTriggerInstance.scroll(scroll)
      //   })
      // }
    },

    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  ) // <-- scope for selector text (optional)

  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: out,
    revertOnUpdate: true,
  })
  const fa = contextSafe(() => {
    const video = document.querySelector(".fullVideo video") as HTMLVideoElement
    if (video) {
      console.log(video.autoplay)
      video.setAttribute("autoplay", "true")
      video.play()
    }
    gsap.to(".fullVideo", {
      top: 0,
    })
  })

  return (
    <div className={`sec1 imgLoad${load}`} ref={container}>
      <div className='fout'>
        <div className='sec1Bg'>
          <div className='phoneBox'>
            <div className='leftHand'></div>
            <div className='leftPhone'></div>
            <div className='leftMask'></div>
            <div className='rightHand'></div>
            <div className='rightPhone'></div>
            <div className='rightMask'></div>
            <div className='kvText'>
              <div>
                <div className='sec1Text'></div>
                <div className='textGroup'>
                  <div className='text1'>{config.sec1.paramsa}</div>
                  <div className='line pc'></div>
                  <div>{config.sec1.paramsb}</div>
                  <div className='line'></div>
                  <div>{config.sec1.paramsc}</div>
                </div>
              </div>
              <div className='sec1Logo'>
                <div className='logoWrapper'>
                  <div className='sec1Logoa'>{config.sec1.slogena}</div>
                  <div className='sec1Logob'>{config.sec1.slogenb}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sec1Bg2'>
          <div className='sec1-box-tirgger'></div>
          <div className='sec1-box'>
            <div className='sec1-text-wrapper'>
              <div className='title'>{"-_/\\/-/</_\\_\\_/-_>\\_<_"}</div>

              <div className='description'>
                <div className='spana pc'>
                  {"-<</_\\><\\_/-/>/\\__-/-></<_<<-\\><>>>--->"}
                </div>
                <div className='spanb pc'>
                  {
                    "<--__-<___<>/-/>>/-//</-<--<><>>>/>-_<<_>___\\\\>->\\\\><>/<><->_>-/>-__/<>-<>_<<--_/_-<"
                  }
                </div>
                <div className='spanc pc'>
                  {
                    "</-\\<_/>_\\/->-->>\\-_<\\-</_><>/>>/_/<->-_\\>>-_\\-\\___---\\<\\>\\<>><<</<<->\\<<_"
                  }
                </div>
                <div className='mbspana mb'>{"-_/\\/-/</_\\_\\_/-_>\\_<_"}</div>
                <div className='mbspanb mb'>
                  {"-<</_\\><\\_/-/>/\\__-/-></<_<<-\\><>>>--->"}
                </div>
                <div className='mbspanc mb'>
                  {"<--__-<___<>/-/>>/-//</-<--<><>>>/>-_<<_>"}
                </div>
                <div className='mbspand mb'>
                  {"\\\\>->\\\\><>/<><->_>-/>-__/<>-<>_<<--_/_-<"}
                </div>
                <div className='mbspane mb'>
                  {"</-\\<_/>_\\/->-->>\\-_<\\-</_><>/></>"}
                </div>
              </div>
              <div className='info' ref={btnA}>
                <span>{config.sec1.btnText}</span>_
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='adam'>
        <div className='video'>
          <video
            // ref={videoRef}
            className='v1'
            src={
              responsive?.md
                ? config.sec1.shortVideo.H
                : config.sec1.shortVideo.V
            }
            // src='/src/assets/videos/enV.mp4'
            // poster={
            //   responsive?.md
            //     ? config.sec1.video.H.post
            //     : config.sec1.video.V.post
            // }
            autoPlay={true}
            webkit-playsinline='true'
            playsInline={true}
            muted
            loop={true}
          ></video>

          <div className='playIcon' onClick={fa}></div>
        </div>
      </div>
    </div>
  )
}

export default Sec1
