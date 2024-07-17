import { useRef } from "react"
import { ComponentType } from "../type"
import { Shrink } from "../components/shrink"
import UseObservable from "../../../hooks/useObserve"
import "./index.scss"
const Sec4 = ({ useGSAP, gsap, config, responsive }: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (container.current) {
        if (responsive?.md) {
          gsap.from(".sec4-line", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom-=100",
              end: "+=100",
              scrub: 0.5,
            },
          })

          gsap.from(".sec4-title", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom-=100",
              end: "+=100",
              scrub: 0.5,
            },
          })

          gsap.from(".title-line-box", {
            opacity: 0,
            ease: "sine.inOut",
            yoyo: true,
            repeat: 5,
            duration: 0.3,
            onComplete: function () {
              gsap.set(".title-line-box", { opacity: 1, duration: 0.5 }) // 将属性设置回初始状态
            },

            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom+=100",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec4-desc-box div", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-desc-box",
              start: "top bottom-=100",
              end: "+=150",
              scrub: 0.5,
            },
          })

          gsap.to(".phoneGai", {
            y: -60,
            x: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom",
              end: "top center",
              scrub: 0.5,
            },
          })

          gsap.to(".phoneLight", {
            clipPath: "circle(100% at center)",
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-desc-box",
              start: "top bottom-=200",
              end: "+=300",
              scrub: 0.5,
              toggleClass: "active",
            },
          })

          gsap.to(".phoneLight", {
            y: -60,
            x: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom",
              end: "top center",
              scrub: 1,
              toggleClass: "active",
            },
          })
        } else {
          gsap.from(".sec4-line", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom-=100",
              end: "+=100",
              scrub: 0.5,
            },
          })
          gsap.from(".sec4-title", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom-=100",
              end: "+=100",
              scrub: 0.5,
            },
          })
          gsap.from(".title-line-box", {
            opacity: 0,
            ease: "sine.inOut",
            yoyo: true,
            repeat: 5,
            duration: 0.3,
            onComplete: function () {
              gsap.set(".title-line-box", { opacity: 1, duration: 0.5 }) // 将属性设置回初始状态
            },

            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom+=100",
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from(".sec4-desc-box div", {
            opacity: 0,
            y: 60,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-desc-box",
              start: "top bottom-=100",
              end: "+=150",
              scrub: 0.5,
            },
          })

          gsap.to(".phoneGai", {
            y: -30,
            x: 30,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom-=100",
              end: "+=300",
              scrub: 1,
            },
          })

          gsap.from(".phoneMask", {
            opacity: 0,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom-=100",
              end: "+=300",
              scrub: 1,
            },
          })

          gsap.to(".phoneLight", {
            y: -30,
            x: 30,
            clipPath: "circle(100% at center)",
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".sec4-title-box",
              start: "top bottom-=100",
              end: "+=300",
              scrub: 1,
              toggleClass: "active",
            },
          })
        }
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )

  const load = UseObservable(container)
  return (
    <div className={`sec4 imgLoad${load}`} ref={container}>
      <div className='sec4Wrapper'>
        <div className='phone'>
          <div className='phoneBox'>
            <div className='phoneGai'></div>
            <div className='phoneLight'></div>
            <div className='phone-inner'></div>
            <div className='phoneMask mb'></div>
          </div>
        </div>
        <div className='sec4-title-box'>
          <div className='title-line-box'>
            <div className='sec4-line'></div>
          </div>

          <div className='sec4-title'>{config.sec4.title}</div>
        </div>
        <div className='sec4-desc-box'>
          <div>
            {config.sec4.info}
            <Shrink />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec4
