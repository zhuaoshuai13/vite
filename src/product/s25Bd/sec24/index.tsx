import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec24 = ({
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
        if (responsive?.md) {
          gsap.to("#sec24", {
            yPercent: -100,
            ease: "none",
            scrollTrigger: {
              trigger: "#sec24",
              start: "top top",
              end: "+=100%",
              scrub: true,
              pin: true,
            },
          })
        }

        gsap.from("#sec24 span", {
          y: 20,
          opacity: 0,
          ease: "none",
          stagger: {
            each: 0.1,
            from: "random",
          },
          scrollTrigger: {
            trigger: "#sec24 .textGroup",
            start: "center bottom",
            end: "bottom bottom-=10%",
            scrub: true,
          },
        })

        gsap.from("#sec24 .desc", {
          y: 50,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#sec24 .desc",
            start: "center bottom",
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
    <section id='sec24' ref={ref} className={`imgLoad${load}`}>
      <div className='sec24'>
        <div className='textGroup'>
          <p className='bigTitle'>
            {config.sec24.titlea.split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </p>
          <p className='bigTitle'>
            {config.sec24.titleb.split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </p>
        </div>

        <div
          className='desc'
          dangerouslySetInnerHTML={{ __html: config.sec24.desc }}
        />
      </div>
    </section>
  )
}

export default Sec24
