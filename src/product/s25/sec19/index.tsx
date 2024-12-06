import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec19 = ({
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
        if (responsive?.md) {
          const tl = gsap.timeline()
          tl.to(
            "#sec19",
            {
              opacity: 1,
              ease: "none",
              duration: 1,
            },
            "a"
          )

          tl.from(
            "#sec19 .phonea",
            { y: "-50%", ease: "none", duration: 1 },
            "a"
          )

          tl.from(
            "#sec19 .phoneb",
            { y: "50%", ease: "none", duration: 1 },
            "a"
          )

          tl.from(
            "#sec19 .texta",
            { y: "50%", opacity: 0, duration: 0.4 },
            "a+=.8"
          )

          tl.from(
            "#sec19 .textb",
            { y: "-50%", opacity: 0, duration: 0.4 },
            "a+=.8"
          )

          ScrollTrigger.create({
            trigger: "#sec19",
            start: "top top",
            end: "+=250%",
            animation: tl,
            scrub: true,
            pin: true,
          })
        } else {
          const tl = gsap.timeline()

          tl.from(
            "#sec19 .phonea",
            { y: "-50%", ease: "none", duration: 1 },
            "a"
          )

          tl.from(
            "#sec19 .phoneb",
            { y: "50%", ease: "none", duration: 1 },
            "a"
          )

          tl.from(
            "#sec19 .texta",
            { y: "50%", opacity: 0, duration: 0.4 },
            "a+=.8"
          )

          tl.from(
            "#sec19 .textb",
            { y: "-50%", opacity: 0, duration: 0.4 },
            "a+=.8"
          )

          ScrollTrigger.create({
            trigger: "#sec19",
            start: "center bottom",
            end: "bottom bottom",
            animation: tl,
            scrub: true,
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
    <section id='sec19' ref={ref} className={`imgLoad${load}`}>
      <div className='sec19'>
        <div className='phonea'></div>
        <div className='phoneb'></div>
        <div className='texta'>
          <div className='tops'>
            <div
              className='big'
              dangerouslySetInnerHTML={{ __html: config.sec19.f1a }}
            />
            <div
              className='mid'
              dangerouslySetInnerHTML={{ __html: config.sec19.f1b }}
            />
          </div>
          <div className='small'>
            <div dangerouslySetInnerHTML={{ __html: config.sec19.f1c }} />
            <div dangerouslySetInnerHTML={{ __html: config.sec19.f1d }} />
          </div>
        </div>
        <div className='textb'>
          <div className='tops'>
            <div
              className='big'
              dangerouslySetInnerHTML={{ __html: config.sec19.f2a }}
            />
            <div
              className='mid'
              dangerouslySetInnerHTML={{ __html: config.sec19.f2b }}
            />
          </div>
          <div className='small'>
            <div dangerouslySetInnerHTML={{ __html: config.sec19.f2c }} />
            <div dangerouslySetInnerHTML={{ __html: config.sec19.f2d }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec19
