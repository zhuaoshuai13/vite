import { useRef } from "react"

import { Shrink } from "../components/shrink"
import "./index.scss"
import { ComponentType } from "../type"
const SecOs = ({
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
          y: 90,
          opacity: 0,
          scrollTrigger: {
            trigger: ".bottom",
            start: "top bottom-=100",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".info", {
          y: 90,
          opacity: 0,
          scrollTrigger: {
            trigger: ".bottom",
            start: "top bottom-=300",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".outa", {
          y: 90,
          opacity: 0,
          scrollTrigger: {
            trigger: ".bottom",
            start: "top bottom-=500",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".outb", {
          y: 90,
          opacity: 0,
          scrollTrigger: {
            trigger: ".bottom",
            start: "top bottom-=600",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".outc", {
          y: 90,
          opacity: 0,
          scrollTrigger: {
            trigger: ".bottom",
            start: "top bottom-=700",
            toggleActions: "restart none none reverse",
          },
        })

        const tl = gsap.timeline()
        tl.from(".osBg", { y: 100 }, "a")
        tl.to(".osBgBox", { y: -100 }, "b")

        ScrollTrigger.create({
          trigger: ".secOsWrapper",
          start: "top bottom",
          end: "top top",
          animation: tl,
          scrub: true,
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className={`secOs imgLoad${load}`} ref={container}>
      <div className='secOsWrapper'>
        <div className='osBox'>
          <div className='osMask'></div>
          <div className='osBgBox'>
            <div className='osBg'></div>
          </div>
        </div>
        <div className='bottom'>
          <div className='title'>{config.sec18.title}</div>
          <div className='info'>{config.sec18.desc}</div>
          <div className='group'>
            <div className='out outa'>
              <div className='textg'>
                <div className='subtitle'>{config.sec18.subtitlea}</div>
                <div className='text'>{config.sec18.infoa}</div>
                <div className='light'>
                  <Shrink />
                </div>
              </div>
              <div className='img'></div>
              <div className='outBox'></div>
            </div>
            <div className='out outb'>
              <div className='textg'>
                <div className='subtitle'>{config.sec18.subtitleb}</div>
                <div className='text'>{config.sec18.infob}</div>
                <div className='light'>
                  <Shrink />
                </div>
              </div>
              <div className='img'></div>
              <div className='outBox'></div>
            </div>
            <div className='out outc'>
              <div className='textg'>
                <div className='subtitle'>{config.sec18.subtitlec}</div>
                <div className='text'>{config.sec18.infoc}</div>
                <div className='light'>
                  <Shrink />
                </div>
              </div>
              <div className='img'></div>
              <div className='outBox'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecOs
