import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec15 = ({
  useGSAP,
  gsap,
  config,
  UseObservable,
  ScrollTrigger,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)

  useGSAP(
    () => {
      if (container?.current) {
        const tl = gsap.timeline()
        tl.from("#sec15 .f2", {
          duration: 1,
          y: -30,
        })
        tl.from("#sec15 .f3", {
          clipPath: `inset(0 0 40% 0)`,
          opacity: 0,
          duration: 2,
        })
        gsap.from("#sec15 .com", {
          y: 80,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#sec15 .desc",
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        })
        if (responsive?.md) {
          ScrollTrigger.create({
            trigger: "#sec15",
            start: `top top+=${54}`,
            end: "+=250%",
            animation: tl,
            scrub: true,
            pin: true,
          })
        } else {
          ScrollTrigger.create({
            trigger: "#sec15",
            start: `bottom bottom`,
            end: "+=20%",
            animation: tl,
            toggleActions: "restart none none reverse",
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
    <section id='sec15' ref={ref} className={`imgLoad${load}`}>
      <div className='sec15'>
        <div
          className='oneTitle com'
          dangerouslySetInnerHTML={{ __html: config.sec15.title }}
        />
        <div
          className='desc com'
          dangerouslySetInnerHTML={{ __html: config.sec15.desc }}
        />
        <div className='f1'></div>
        <div className='f2'></div>
        <div className='f3'></div>
        <div className='imgGroup'></div>
      </div>
    </section>
  )
}

export default Sec15
