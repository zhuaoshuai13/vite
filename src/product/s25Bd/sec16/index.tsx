import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec16 = ({
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
        gsap.from("#sec16 .oneTitle", {
          y: 50,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#sec16 .oneTitle",
            start: "center bottom",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from("#sec16 .com", {
          y: 50,
          opacity: 0,
          ease: "none",
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#sec16 .desc",
            start: "bottom bottom",
            toggleActions: "restart none none reverse",
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
    <section id='sec16' ref={ref} className={`imgLoad${load}`}>
      <div className='sec16'>
        <div
          className='oneTitle'
          dangerouslySetInnerHTML={{ __html: config.sec16.title }}
        />
        <div className='content bigContent'>
          <div className='phone'></div>
          <div
            className='desc com'
            dangerouslySetInnerHTML={{ __html: config.sec16.desc }}
          ></div>
        </div>
        <div className='params'>
          <div className='out com'>
            <div
              className='big'
              dangerouslySetInnerHTML={{ __html: config.sec16.f1a }}
            />
            <div
              className='small'
              dangerouslySetInnerHTML={{ __html: config.sec16.f1b }}
            />
          </div>
          <div className='out com'>
            <div
              className='big'
              dangerouslySetInnerHTML={{ __html: config.sec16.f2a }}
            />
            <div
              className='small'
              dangerouslySetInnerHTML={{ __html: config.sec16.f2b }}
            />
          </div>
          <div className='out com'>
            <div
              className='big'
              dangerouslySetInnerHTML={{ __html: config.sec16.f3a }}
            />
            <div
              className='small'
              dangerouslySetInnerHTML={{ __html: config.sec16.f3b }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec16
