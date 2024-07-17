import { ReactNode, useRef } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { EasePack } from "gsap/EasePack"
import { useGSAP } from "@gsap/react"

import "./index.scss"
const Title = (prop: { children: ReactNode }) => {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(EasePack)
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
        repeat: 5,
        duration: 0.3,
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
    {
      scope: container,
    }
  )
  return (
    <div ref={container}>
      <div className='title-box'>
        <div className='line-box'>
          <div className='line'></div>
        </div>
        <div className='title'>{prop.children}</div>
      </div>
    </div>
  )
}

export default Title
