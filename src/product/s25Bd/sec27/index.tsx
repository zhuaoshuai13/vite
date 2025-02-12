import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec27 = ({
  useGSAP,
  gsap,
  config,
  // ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)

  useGSAP(
    () => {
      if (container?.current) {
        gsap.from(".sec27 .text", {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".sec27 .oneTitle",
            start: "top bottom",
            toggleActions: "restart none none reverse",
          },
        })

        if (responsive?.md) {
          gsap.from(".sec27 .ect", {
            opacity: 0,
            x: 100,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec27 .desc",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })
        } else {
          gsap.from(".sec27 .mb .phone", {
            opacity: 0,
            y: 200,
            scrollTrigger: {
              trigger: ".sec27 .mb .phone",
              start: "top bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec27 .mb .watch", {
            opacity: 0,
            y: 200,
            scrollTrigger: {
              trigger: ".sec27 .mb .watch",
              start: "top bottom",
              toggleActions: "restart none none reverse",
            },
          })
        }
      }
    },
    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )

  return (
    <section id='sec27' ref={ref} className={`imgLoad${load}`}>
      <div className='sec27 smallContent'>
        <div className='textGroup'>
          <div
            className='oneTitle text'
            dangerouslySetInnerHTML={{ __html: config.sec27.title }}
          />
          <div
            className='desc text'
            dangerouslySetInnerHTML={{ __html: config.sec27.desc }}
          />
        </div>
        <div className='watch ect pc'></div>
        <div className='phone ect pc'></div>
        <div className='mb'>
          <div className='watch ect'></div>
          <div className='phone ect'></div>
        </div>
      </div>
    </section>
  )
}

export default Sec27
