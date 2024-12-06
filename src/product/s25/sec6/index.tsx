import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec6 = ({
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
        gsap.from(".sec6 .com", {
          opacity: 0,
          y: 80,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".sec6 .oneTitle",
            start: "center bottom",
            toggleActions: "restart none none reverse",
          },
        })
        const tl = gsap.timeline()

        tl.from(
          ".sec6 .text",
          {
            opacity: 0,
            // y: responsive?.md
            //   ? `-${(200 * window.innerWidth) / 1920}`
            //   : `-${(150 * window.innerWidth) / 750}`,
            // x: responsive?.md
            //   ? `${(120 * window.innerWidth) / 1920}`
            //   : `${(90 * window.innerWidth) / 1920}`,
          },
          "a+=.3"
        )

        tl.to(
          ".sec6 .phonea",
          {
            opacity: 0,
          },
          "a+=.3"
        )

        if (responsive?.md) {
          ScrollTrigger.create({
            trigger: "#sec6",
            start: `top top-=${-54}`,
            end: "+=200%",
            animation: tl,
            pin: true,
            scrub: true,
          })
        } else {
          ScrollTrigger.create({
            trigger: "#sec6 .text",
            start: `bottom bottom`,
            end: "+=200%",
            animation: tl,
            toggleActions: "restart none none reverse",
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
    <section id='sec6' ref={ref} className={`imgLoad${load}`}>
      <div className='sec6'>
        <div className='smallContent'>
          <div
            className='oneTitle com'
            dangerouslySetInnerHTML={{ __html: config.sec6.title }}
          />
          <div
            className='desc com'
            dangerouslySetInnerHTML={{ __html: config.sec6.desc }}
          />
          <div className='phonea'></div>
          <div className='phoneb'></div>
          <div className='text'></div>
        </div>
      </div>
    </section>
  )
}

export default Sec6
