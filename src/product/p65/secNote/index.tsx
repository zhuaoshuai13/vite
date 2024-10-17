import { useRef } from "react"
import Title from "../components/title"
import { ComponentType } from "../type"

import "./index.scss"
const SecNote = ({ config, useGSAP, responsive, gsap }: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
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
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className='secNote' ref={container}>
      <Title>
        <div>Notes: </div>
      </Title>
      <div className='content'>
        <p>{config.sec19.f1}</p>
        <p>{config.sec19.f2}</p>
        <p>{config.sec19.f3}</p>
        <p>{config.sec19.f4}</p>
        <p>{config.sec19.f5}</p>
        <p>{config.sec19.f6}</p>
        <p>{config.sec19.f7}</p>
      </div>
    </div>
  )
}

export default SecNote
