import { useRef } from "react"

import { Shrink } from "../components/shrink"
import Title from "../components/title"

import "./index.scss"
import { ComponentType } from "../type"
const SecAutomatic = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
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
            trigger: ".secAutomaticText",
            start: "top bottom-=100",
            end: "+=100",
            scrub: 0.5,
          },
        })
        const tl = gsap.timeline()
        tl.to(".photoWrapper", { className: "photoWrapper activea" }, "a")
        tl.to(".infoBox", { className: "infoBox infoBoxa" }, "a")

        tl.to(".photoWrapper", { className: "photoWrapper activeb" }, "b")
        tl.to(".infoBox", { className: "infoBox infoBoxb" }, "b")

        tl.to(".photoWrapper", { className: "photoWrapper activeb" }, "c")
        tl.to(".infoBox", { className: "infoBox infoBoxb" }, "c")

        tl.to(".photoWrapper", { className: "photoWrapper activec" }, "d")
        tl.to(".infoBox", { className: "infoBox infoBoxc" }, "d")

        ScrollTrigger.create({
          trigger: ".secAutomaticWrapper",
          start: "top top",
          end: "+=1500",
          animation: tl,
          scrub: true,
          pin: true,
          preventOverlaps: true,
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className={`secAutomatic imgLoad${load}`} ref={container}>
      <div className='secAutomaticWrapper'>
        <div className='content'>
          <div className='left'>
            <div className='infoBox infoBoxa'></div>
            <div className='phone'></div>
            <div className='photoBox'>
              <div className='photoWrapper activea'>
                <div className='photoa'></div>
                <div className='photob'></div>
                <div className='photoc'></div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Title>
              <div>{config.sec17.title}</div>
            </Title>
            <div className='secAutomaticText'>
              <div className='text'>
                {config.sec17.info}
                <Shrink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecAutomatic
