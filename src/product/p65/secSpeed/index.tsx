import { useRef } from "react"

import Title from "../components/title"
import { Shrink } from "../components/shrink"

import "./index.scss"
import { ComponentType } from "../type"

const SecSpeed = ({
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
        gsap.from(".speed-title", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secSpeed-text",
            start: "top bottom-=100",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".info", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secSpeed-text",
            start: "top bottom-=100",
            end: "+=130",
            scrub: 0.5,
          },
        })

        gsap.from(".light", {
          opacity: 0,
          y: 100,
          x: 20,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secSpeed-wrapper",
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        })

        gsap.to(".lightBox", {
          y: -100,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secSpeed-wrapper",
            start: "top top-=100",
            end: "bottom top",
            scrub: true,
          },
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className={`secSpeed imgLoad${load}`} ref={container}>
      <div className='secSpeed-wrapper'>
        <div className='top'>
          <div className='secSpeed-T'>
            <Title>
              <div>{config.sec10.title}</div>
            </Title>
          </div>
          <div className='secSpeed-text'>
            <div className='speed-title'>{config.sec10.subtitlea}</div>
            <div className='info'>
              {config.sec10.infoa} <Shrink />
            </div>
          </div>
        </div>

        <div className='mask'></div>
        <div className='light'></div>

        <div className='lightBox'>
          <div className='light'></div>
        </div>
      </div>
    </div>
  )
}

export default SecSpeed
