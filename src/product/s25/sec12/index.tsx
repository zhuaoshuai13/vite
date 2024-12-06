import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec12 = ({
  useGSAP,
  gsap,
  config,
  UseObservable,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)

  useGSAP(
    () => {
      if (container?.current) {
        gsap.from(".sec12 .oneTitle", {
          opacity: 0,
          y: 100,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".sec12 .oneTitle",
            start: "center bottom",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(".sec12 .f1 .desc", {
          opacity: 0,
          y: 100,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".sec12 .f1 .desc",
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        })

        if (responsive?.md) {
          gsap.to(".sec12 .f1", {
            opacity: 0,
            clipPath: `inset(0 100% 0 0)`,
            duration: 0.5,
            scrollTrigger: {
              trigger: ".sec12",
              start: "top top+=54",
              end: "+=100%",
              scrub: true,
              pin: true,
            },
          })
        } else {
          gsap.to(".sec12 .f1", {
            opacity: 0,
            clipPath: `inset(0 100% 0 0)`,
            duration: 0.5,
            scrollTrigger: {
              trigger: ".sec12 .desc.mb",
              start: "bottom bottom",
              toggleActions: "play none none reverse",
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

  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })

  const fa = contextSafe(() => {
    const tl1 = gsap.timeline({ paused: true })
    tl1.to(".sec12 .f1", {
      opacity: 1,
      clipPath: `inset(0 0% 0 0)`,
      duration: 0.5,
    })

    tl1.play()
  })

  const fb = contextSafe(() => {
    const tl1 = gsap.timeline({ paused: true })
    tl1.to(".sec12 .f1", {
      opacity: 0,
      clipPath: `inset(0 100% 0 0)`,
      duration: 0.5,
    })

    tl1.play()
  })

  return (
    <section id='sec12' ref={ref} className={`imgLoad${load}`}>
      <div className='sec12'>
        <div
          className='oneTitle'
          dangerouslySetInnerHTML={{ __html: config.sec12.title }}
        />
        <div className='group'>
          <div className='f1'>
            <div
              className='desc pc'
              dangerouslySetInnerHTML={{ __html: config.sec12.desc }}
            ></div>
            <div className='btns' onClick={fb}></div>
          </div>
          <div className='f2'>
            <div
              className='desc pc'
              dangerouslySetInnerHTML={{ __html: config.sec12.desc }}
            ></div>
            <div className='btns' onClick={fa}></div>
          </div>
        </div>
        <div
          className='desc mb'
          dangerouslySetInnerHTML={{ __html: config.sec12.desc }}
        ></div>
      </div>
    </section>
  )
}

export default Sec12
