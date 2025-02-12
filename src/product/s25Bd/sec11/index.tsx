import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec11 = ({
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
        gsap.from(".sec11 .gp", {
          opacity: 0,
          y: 100,
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".sec11 .info",
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        })

        const tl = gsap.timeline({ paused: true })
        tl.to(
          ".sec11 .linea",
          {
            y: "100%",
          },
          "a"
        )

        tl.to(
          ".sec11 .img2",
          {
            opacity: 1,
          },
          "a"
        )

        tl.to(
          ".sec11 .f1 .word",
          {
            opacity: 0.4,
          },
          "a"
        )

        tl.from(
          ".sec11 .f2 .word",
          {
            opacity: 0.4,
          },
          "a"
        )

        const tl2 = gsap.timeline({ paused: true })
        tl2.to(
          ".sec11 .linea",
          {
            y: "200%",
          },
          "a"
        )

        tl2.to(
          ".sec11 .img3",
          {
            opacity: 1,
          },
          "a"
        )

        tl2.to(
          ".sec11 .f2 .word",
          {
            opacity: 0.4,
          },
          "a"
        )

        tl2.from(
          ".sec11 .f3 .word",
          {
            opacity: 0.4,
          },
          "a"
        )

        ScrollTrigger.create({
          trigger: "#sec11",
          start: responsive?.md ? "top top+=54" : "top top+=60",
          end: "+=300%",
          pin: true,
          onUpdate: (self: { progress: number }) => {
            if (self.progress > 0.3 && !tl.isActive()) {
              tl.play()
            } else if (self.progress <= 0.3 && !tl.isActive()) {
              tl.reverse()
            }

            if (self.progress > 0.6 && !tl2.isActive()) {
              tl2.play()
            } else if (
              self.progress > 0.3 &&
              self.progress <= 0.6 &&
              !tl2.isActive()
            ) {
              tl2.reverse()
            }
          },
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
    <section id='sec11' ref={ref} className={`imgLoad${load}`}>
      <div className='sec11'>
        <div className='text smallContent'>
          <div
            className='oneTitle gp'
            dangerouslySetInnerHTML={{ __html: config.sec11.title }}
          />
          <div
            className='info gp'
            dangerouslySetInnerHTML={{ __html: config.sec11.desc }}
          />
          <div
            className='desc gp'
            dangerouslySetInnerHTML={{ __html: config.sec11.info }}
          />
          <div className='grouop'>
            <div className='f1 com'>
              <div className='line'>
                <div className='linea'></div>
              </div>
              <div
                className='word'
                dangerouslySetInnerHTML={{ __html: config.sec11.f1 }}
              />
            </div>
            <div className='f2 com'>
              <div className='line'></div>
              <div
                className='word'
                dangerouslySetInnerHTML={{ __html: config.sec11.f2 }}
              />
            </div>
            <div className='f3 com'>
              <div className='line'></div>
              <div
                className='word'
                dangerouslySetInnerHTML={{ __html: config.sec11.f3 }}
              />
            </div>
          </div>
        </div>
        <div className='img img1'></div>
        <div className='img img2'></div>
        <div className='img img3'></div>
      </div>
    </section>
  )
}

export default Sec11
