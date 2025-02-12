import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec10_1 = ({
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
        gsap.from(".sec10_1 .colora .com", {
          opacity: 0,
          y: 80,
          stagger: 0.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".sec10_1 .colora .tops",
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(".sec10_1 .colora .com2", {
          opacity: 0,
          y: 80,
          stagger: 0.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".sec10_1 .colora .bot",
            start: "top bottom",
            toggleActions: "play none none reverse",
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
    <section id='sec10_1' ref={ref} className={`imgLoad${load}`}>
      <div className='sec10_1 smallContent'>
        <div className='colora color'>
          <div className='tops'>
            <div
              className='oneTitle com'
              dangerouslySetInnerHTML={{ __html: config.sec10.titleb }}
            />
            <div
              className='desc com'
              dangerouslySetInnerHTML={{ __html: config.sec10.descb }}
            />
          </div>
          <div className='imgc'></div>
          <div className='bot'>
            <div
              className='colorTitle com2'
              dangerouslySetInnerHTML={{ __html: config.sec10.colorc }}
            />
            <div
              className='desc com2'
              dangerouslySetInnerHTML={{ __html: config.sec10.infoc }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec10_1
