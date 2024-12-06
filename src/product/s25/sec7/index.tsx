import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec7 = ({
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
        const tl = gsap.timeline()
        tl.to(
          ".sec7 .t1",
          {
            x: -50,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
          },
          "a"
        )

        tl.to(
          ".sec7 .imga",
          {
            opacity: 0,
          },
          "a"
        )

        tl.to(
          ".sec7 .move",
          {
            x: "100%",
          },
          "a"
        )

        tl.from(
          ".sec7 .t2",
          {
            x: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
          },
          "a+=.4"
        )
        if (responsive?.md) {
          ScrollTrigger.create({
            trigger: "#sec7",
            start: "top top+=54",
            end: "+=100%",
            animation: tl,
            scrub: true,
            pin: true,
          })
        } else {
          ScrollTrigger.create({
            trigger: "#sec7 .bigContent",
            start: "bottom bottom",
            end: "+=20%",
            scrub: true,
            animation: tl,
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
    <section id='sec7' ref={ref} className={`imgLoad${load}`}>
      <div className='sec7 bigContent'>
        <div className='left'>
          <div className='textBox'>
            <div className='texta com'>
              <div
                className='oneTitle t1'
                dangerouslySetInnerHTML={{ __html: config.sec7.titlea }}
              />
              <div
                className='desc t1'
                dangerouslySetInnerHTML={{ __html: config.sec7.desca }}
              />
            </div>
            <div className='textb com'>
              <div
                className='oneTitle t2'
                dangerouslySetInnerHTML={{ __html: config.sec7.titleb }}
              />
              <div
                className='desc t2'
                dangerouslySetInnerHTML={{ __html: config.sec7.descb }}
              />
            </div>
            <div className='lineBox'>
              <div className='move'></div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='imga'></div>
          <div className='imgb'></div>
        </div>
      </div>
    </section>
  )
}

export default Sec7
