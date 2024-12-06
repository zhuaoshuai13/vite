import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec10 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)

  useGSAP(
    () => {
      if (container?.current) {
        gsap.from(".sec10 .colora .com", {
          opacity: 0,
          y: 80,
          stagger: 0.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".sec10 .colora .tops",
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(".sec10 .colora .com2", {
          opacity: 0,
          y: 80,
          stagger: 0.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".sec10 .colora .bot",
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        })
        const tl = gsap.timeline()
        tl.to(".sec10", {})
        ScrollTrigger.create({
          trigger: "#sec10",
          start: responsive?.md ? "top top+=54" : "top top+=60",
          end: "+=100%",
          onUpdate: (self: { progress: number }) => {
            const ca = document.querySelector(".colora")
            const cb = document.querySelector(".colorb")
            if (ca && cb) {
              if (self.progress > 0.5) {
                ca.classList.remove("active")
                cb.classList.add("active")
              } else {
                ca.classList.add("active")
                cb.classList.remove("active")
              }
            }
          },
          animation: tl,
          scrub: true,
          pin: true,
        })
      }
    },
    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )

  return (
    <section id='sec10' ref={ref} className={`imgLoad${load}`}>
      <div className='sec10 smallContent'>
        <div className='colora color active'>
          <div className='tops'>
            <div
              className='oneTitle com'
              dangerouslySetInnerHTML={{ __html: config.sec10.titlea }}
            />
            <div
              className='desc com'
              dangerouslySetInnerHTML={{ __html: config.sec10.desca }}
            />
          </div>
          <div className='imga'></div>
          <div className='bot'>
            <div
              className='colorTitle com2'
              dangerouslySetInnerHTML={{ __html: config.sec10.colora }}
            />
            <div
              className='desc com2'
              dangerouslySetInnerHTML={{ __html: config.sec10.infoa }}
            />
          </div>
        </div>
        <div className='colorb color'>
          <div className='tops'>
            <div
              className='oneTitle'
              dangerouslySetInnerHTML={{ __html: config.sec10.titlea }}
            />
            <div
              className='desc'
              dangerouslySetInnerHTML={{ __html: config.sec10.desca }}
            />
          </div>
          <div className='imgb'></div>
          <div className='bot'>
            <div
              className='colorTitle'
              dangerouslySetInnerHTML={{ __html: config.sec10.colorb }}
            />
            <div
              className='desc'
              dangerouslySetInnerHTML={{ __html: config.sec10.infob }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec10
