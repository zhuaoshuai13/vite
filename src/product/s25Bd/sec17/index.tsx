import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec17 = ({
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
        gsap.from("#sec17 .texta .com", {
          y: 80,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#sec17 .desc",
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        })

        const tl = gsap.timeline({ paused: true })

        tl.to(
          "#sec17 .texta",
          {
            opacity: 0,
            y: -50,
            stagger: 0.2,
            duration: 1,
          },
          "a"
        )

        tl.from(
          "#sec17 .textb .com",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
          },
          "a+=.2"
        )

        tl.from(
          "#sec17 .imgb",
          {
            opacity: 0,
            duration: 1.4,
            clipPath: `inset(0 0 0 100%)`,
          },
          "a+=.4"
        )

        ScrollTrigger.create({
          trigger: "#sec17",
          start: responsive?.md ? "top top+=54" : "top top+=60",
          end: "+=200%",
          onUpdate: (self: { progress: number }) => {
            if (self.progress > 0.3 && !tl.isActive()) {
              tl.play()
            } else if (self.progress <= 0.3 && !tl.isActive()) {
              tl.reverse()
            }
          },
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
    <section id='sec17' ref={ref} className={`imgLoad${load}`}>
      <div className='sec17'>
        <div className='tops'>
          <div className='texta'>
            <div
              className='oneTitle com'
              dangerouslySetInnerHTML={{ __html: config.sec17.titlea }}
            />
            <div
              className='desc com'
              dangerouslySetInnerHTML={{ __html: config.sec17.desca }}
            />
          </div>
          <div className='textb'>
            <div
              className='oneTitle com'
              dangerouslySetInnerHTML={{ __html: config.sec17.titleb }}
            />
            <div
              className='desc com'
              dangerouslySetInnerHTML={{ __html: config.sec17.descb }}
            />
          </div>
        </div>
        <div className='bot'>
          <div className='imga img'></div>
          <div className='imgb img'></div>
        </div>
      </div>
    </section>
  )
}

export default Sec17
