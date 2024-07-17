import { useRef } from "react"

import { ComponentType } from "../type"

import { Shrink } from "../components/shrink"
import { Lighting } from "../components/lighting"
import "./index.scss"
const Sec3 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)
  const load = UseObservable(container)

  useGSAP(
    () => {
      if (container.current && content.current && wrapper.current) {
        console.log(content.current)
        const { top: topWrapper } = wrapper.current.getBoundingClientRect()

        const { height, top: topPin } = content.current.getBoundingClientRect()
        console.log(topPin - topWrapper)

        const h = Number(height.toFixed(0))
        const max = Number(window.innerHeight)

        const pinH = (max - h) / 2

        const dis = topPin - topWrapper - pinH

        gsap.to(".sec3-title-a", {
          className: "sec3-title-a title-active",
          // ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".sec3-title-trigger",
            start: "top bottom-=150",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.to(".sec3-title-b", {
          className: "sec3-title-b title-active",
          // ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".sec3-title-trigger",
            start: "top bottom-=150",
            toggleActions: "restart none none reverse",
          },
        })

        const tl = gsap.timeline()

        if (responsive?.md) {
          gsap.from(".title-line", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec3-sub-title-box",
              start: "top bottom-=100",
              end: "+=100",
              scrub: 0.5,
            },
          })

          gsap.from(".sec3-sub-title", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec3-sub-title-box",
              start: "top bottom-=100",
              end: "+=100",
              scrub: 0.5,
            },
          })

          gsap.to(".title-line-box", {
            opacity: 0,
            ease: "sine.inOut",
            yoyo: true,
            repeat: 5,
            duration: 0.3,
            onComplete: function () {
              gsap.set(".title-line-box", { opacity: 1, duration: 0.5 }) // 将属性设置回初始状态
            },

            scrollTrigger: {
              trigger: ".sec3-sub-title-box",
              start: "top bottom+=100",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec3-color-a", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec3-color-a",
              start: "top bottom-=100",
              end: "+=100",
              scrub: 0.2,
            },
          })

          gsap.from(".sec3-color-b", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec3-color-b",
              start: "top bottom-=150",
              end: "+=100",
              scrub: true,
            },
          })

          gsap.to(".sec3-color-a-line", {
            duration: 3,
            clipPath: "inset(0 0px 0 0px)",
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec3-color-a",
              start: "top bottom-=100",
              end: "+=200",
              scrub: true,
            },
          })

          gsap.from(".sec3-desc-title", {
            opacity: 0,
            y: 60,
            ease: "slow(0.5, 0.8)",
            scrollTrigger: {
              trigger: ".sec3-desc-box",
              start: "top bottom-=150",
              end: "+=100",
              scrub: true,
            },
          })

          gsap.from(".sec3-desc-info", {
            opacity: 0,
            y: 60,
            ease: "slow(0.3, 0.9)",
            scrollTrigger: {
              trigger: ".sec3-desc-box",
              start: "top bottom-=180",
              end: "+=100",
              scrub: true,
            },
          })
          tl.to(".sec3-color-a-line", { opacity: 0 }, "b")
          tl.to(".sec3-color-a .mask", { opacity: 1 }, "b")
          tl.from(".sec3-color-a .mask", { filter: "blur(10px)" }, "b+=.5")
          tl.to(
            ".sec3-color-a .sec3-color-b-mask",
            { opacity: 0, duration: 0 },
            "b"
          )
          tl.to(".sec3-color-b .mask", { filter: "blur(10px)" }, "b")
          tl.to(".sec3-color-b-line", { clipPath: "inset(0 0px 0 0px)" }, "c")
          tl.to(".sec3-color-b .mask", { opacity: 0 }, "c")
          tl.to(".phonea", { opacity: "0" }, "d")
          tl.to(".sec3-desc-title-control", { y: -60, opacity: 0 }, "a")
          tl.to(
            ".sec3-desc-info-control",
            { y: -60, opacity: 0, delay: 0.2 },
            "a"
          )
          tl.from(".sec3-desc-title-b", { opacity: 0, y: 30, delay: 0.4 }, "a")
          tl.from(".sec3-desc-info-b", { opacity: 0, y: 30, delay: 0.5 }, "a")
          tl.to(".sec3-content", { x: 0 }, "m")
        } else {
          gsap.from(".title-line", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec3-sub-title-box",
              start: "top bottom-=100",
              end: "+=100",
              scrub: 0.5,
            },
          })

          gsap.from(".sec3-sub-title", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec3-sub-title-box",
              start: "top bottom-=100",
              end: "+=100",
              scrub: 0.5,
            },
          })

          gsap.to(".title-line-box", {
            opacity: 0,
            ease: "sine.inOut",
            yoyo: true,
            repeat: 5,
            duration: 0.3,
            onComplete: function () {
              gsap.set(".title-line-box", { opacity: 1, duration: 0.5 }) // 将属性设置回初始状态
            },

            scrollTrigger: {
              trigger: ".sec3-sub-title-box",
              start: "top bottom-=100",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec3-color-a", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec3-color-a",
              start: "top bottom+=100",
              end: "+=100",
              scrub: 0.2,
            },
          })

          gsap.to(".sec3-color-a-line", {
            duration: 3,
            clipPath: "inset(0 0px 0 0px)",
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec3-color-a",
              start: "top bottom+=100",
              end: "+=200",
              scrub: true,
            },
          })

          gsap.from(".sec3-desc-title", {
            opacity: 0,
            y: 60,
            ease: "slow(0.5, 0.8)",
            scrollTrigger: {
              trigger: ".sec3-desc-box",
              start: "top bottom-=150",
              end: "+=100",
              scrub: true,
            },
          })

          gsap.from(".sec3-desc-info", {
            opacity: 0,
            y: 60,
            ease: "slow(0.3, 0.9)",
            scrollTrigger: {
              trigger: ".sec3-desc-box",
              start: "top bottom-=180",
              end: "+=100",
              scrub: true,
            },
          })

          tl.to(".sec3-color-a-line", { opacity: 0 }, "b")
          tl.to(".sec3-color-a .mask", { opacity: 1 }, "b")
          tl.from(".sec3-color-a .mask", { filter: "blur(10px)" }, "b+=.5")
          tl.to(
            ".sec3-color-a .sec3-color-b-mask",
            { opacity: 0, duration: 0 },
            "b"
          )
          tl.to(".sec3-color-b .mask", { filter: "blur(10px)" }, "b")
          tl.to(".sec3-color-a .btnLight", { display: "none" }, "b")
          tl.to(".sec3-color-a .btnText", { opacity: 0 }, "b")
          tl.to(".sec3-color-a .btn", { opacity: 1 }, "b")

          tl.to(".sec3-color-b-line", { clipPath: "inset(0 0px 0 0px)" }, "c")
          tl.to(".sec3-color-b .btnLight", { display: "block" }, "c")
          tl.to(".sec3-color-b .btn", { opacity: 1 }, "c-=.1")
          tl.to(".sec3-color-b .btnText", { opacity: 1 }, "c")
          tl.to(".sec3-color-b .mask", { opacity: 0 }, "c")
          tl.to(".phonea", { clipPath: "inset(0 0 0 100%)" }, "d")
          tl.to(".sec3-desc-title-control", { y: -60, opacity: 0 }, "a")
          tl.to(
            ".sec3-desc-info-control",
            { y: -60, opacity: 0, delay: 0.2 },
            "a"
          )
          tl.from(".sec3-desc-title-b", { opacity: 0, y: 30, delay: 0.4 }, "a")
          tl.from(".sec3-desc-info-b", { opacity: 0, y: 30, delay: 0.5 }, "a")
          tl.to(".sec3-content", { x: 0 }, "m")
        }

        ScrollTrigger.create({
          trigger: ".wrapper",

          start: () => {
            if (responsive?.md) {
              return `top top-=${dis}`
            } else {
              return `top top-=${window.innerHeight * 0.2}`
            }
          }, // 20% of the viewport height
          end: () => `bottom bottom-=${window.innerHeight}`,
          animation: tl,
          scrub: true,
          pin: true,
        })
      }
    },

    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  ) // <-- scope for selector text (optional)
  return (
    <div className={`sec3 imgLoad${load}`} ref={container}>
      <div className='wrapper' ref={wrapper}>
        <div className='sec3-title-box'>
          <div className='sec3-title-a'></div>
          <div className='sec3-title-b'></div>
        </div>
        <div className='sec3-title-trigger'></div>
        <div className='sec3-content'>
          <div ref={content}>
            <div className='sec3-sub-title-box'>
              <div className='title-line-box'>
                <div className='title-line'></div>
              </div>

              <div className='sec3-sub-title'>{config.sec3.title}</div>
            </div>

            <div className='phone phonea'></div>
            <div className='phone phoneb'></div>

            <div className='mbLayout'>
              <div className='sec3-color-a'>
                <div className='sec3-color-a-line'></div>
                <Lighting text={config.sec3.pointa} />
              </div>
              <div className='sec3-color-b'>
                <div className='sec3-color-b-line'></div>
                <Lighting text={config.sec3.pointb} />
              </div>
              <div className='sec3-desc-box'>
                <div>
                  <div className='sec3-desc-title'>
                    <div className='sec3-desc-title-control'>
                      {config.sec3.subtitlea}
                    </div>
                  </div>
                  <div className='sec3-desc-info'>
                    <div className='sec3-desc-info-control'>
                      {config.sec3.infoa}
                      <Shrink />
                    </div>
                  </div>
                </div>
                <div className='sec3-desc-b'>
                  <div className='sec3-desc-title-b'>
                    {config.sec3.subtitleb}
                  </div>
                  <div className='sec3-desc-info-b'>
                    {config.sec3.infob} <Shrink />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec3
