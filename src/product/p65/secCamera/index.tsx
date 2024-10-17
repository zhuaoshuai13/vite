import { useRef } from "react"

import { Shrink } from "../components/shrink"
import Title from "../components/title"
import "./index.scss"
import { ComponentType } from "../type"
const SecCamer = ({
  useGSAP,
  gsap,
  config,
  UseObservable,
  responsive,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const load = UseObservable(container)

  useGSAP(
    () => {
      if (container.current) {
        gsap.from(".title", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".title-box",
            start: "top bottom-=100",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".line", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".title-box",
            start: "top bottom-=100",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".line-box", {
          opacity: 0,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 8,
          duration: 0.4,
          onComplete: function () {
            gsap.set(".line-box", { opacity: 1, duration: 0.5 }) // 将属性设置回初始状态
          },

          scrollTrigger: {
            trigger: ".title-box",
            start: "top bottom+=100",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".text", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".title-box",
            start: "top bottom-=100",
            end: "+=130",
            scrub: 0.5,
          },
        })

        gsap.from(".info", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".title-box",
            start: "top bottom-=100",
            end: "+=150",
            scrub: 0.5,
          },
        })

        gsap.from(".one", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".group",
            start: "top bottom-=200",
            end: "+=200",
            toggleActions: "restart none none reverse",

            // scrub: 0.5,
          },
        })

        gsap.from(".two", {
          opacity: 0,
          y: -60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".group",
            start: "top bottom-=200",
            end: "+=300",
            toggleActions: "restart none none reverse",

            // scrub: 0.5,
          },
        })

        gsap.from(".three", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".group",
            start: "top bottom-=200",
            end: "+=200",
            toggleActions: "restart none none reverse",

            // scrub: 0.5,
          },
        })

        gsap.from(".four", {
          opacity: 0,
          y: -30,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".group",
            start: "top bottom-=200",
            end: "+=300",
            toggleActions: "restart none none reverse",

            // scrub: 1,
          },
        })

        if (responsive?.md) {
          gsap.to(".one .out", {
            y: -30,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".group",
              start: "top bottom+=300",
              end: "bottom top",
              scrub: 0.5,
            },
          })

          gsap.to(".three .out", {
            y: -30,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".group",
              start: "top bottom+=300",
              end: "bottom top",
              scrub: 0.5,
            },
          })

          gsap.to(".two .out", {
            y: 30,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".group",
              start: "top bottom+=300",
              end: "bottom top",
              scrub: 0.5,
            },
          })

          gsap.to(".four .out", {
            y: 30,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".group",
              start: "top bottom+=300",
              end: "bottom top",
              scrub: 0.5,
            },
          })
        } else {
          gsap.to(".group", {
            left: 30,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".group",
              start: "top bottom+=300",
              end: "bottom top",
              scrub: 0.5,
            },
          })
        }
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className={`secCamer imgLoad${load}`} ref={container}>
      <div className='secCamerWrapper'>
        <div className='top'>
          <div className='title-out'>
            <Title>
              <div>{config.sec15.title}</div>
            </Title>
          </div>
          <div className='secCamerText'>
            <div
              className='text'
              dangerouslySetInnerHTML={{ __html: config.sec15.subtitlea }}
            />
            <div className='info'>
              {config.sec15.infoa}
              <Shrink />
            </div>
          </div>
        </div>
        <div className='group'>
          <div className='one'>
            <div className='out'>
              <div className='in'></div>
            </div>
          </div>
          <div className='two'>
            <div className='out'>
              <div className='in'></div>
            </div>
          </div>
          <div className='three'>
            <div className='out'>
              <div className='in'></div>
            </div>
          </div>
          <div className='four'>
            <div className='out'>
              <div className='in'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecCamer
