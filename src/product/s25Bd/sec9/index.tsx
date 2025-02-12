import { useRef } from "react"

import { CompontentType } from "../type"

import "./index.scss"

const Sec9 = ({
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
          //   翻页
          tl.to(
            "#sec9",
            {
              opacity: 1,
              ease: "none",
              duration: 1.2,
            },
            "a"
          )
          tl.to(
            "#sec9 .light",
            {
              x: "85vw",
              duration: 1,
              ease: "none",
            },
            "a+=.4"
          )

          tl.from(
            "#sec9 .com",
            {
              x: -40,
              opacity: 0,
              stagger: 0.2,
              ease: "none",
              duration: 0.5,
            },
            "a+=.5"
          )

          tl.to(
            "#sec9",
            {
              opacity: 1,
              ease: "none",
              duration: 0.3,
            },
            "m"
          )

          ScrollTrigger.create({
            trigger: "#sec9",
            start: "top top",
            end: "+=200%",
            animation: tl,
            scrub: true,
            pin: true,
          })
        } else {
          gsap.from("#sec9 .com", {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
            delay: 0.3,
            ease: "none",
            scrollTrigger: {
              trigger: "#sec9 .phone",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })
          gsap.to("#sec9 .light", {
            x: "105vw",
            duration: 1,
            scrollTrigger: {
              trigger: "#sec9 .phone",
              start: "center bottom",
              toggleActions: "restart none none reverse",
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

  return (
    <section id='sec9' ref={ref} className={`imgLoad${load}`}>
      <div className='sec9'>
        <div
          className='oneTitle com'
          dangerouslySetInnerHTML={{ __html: config.sec9.title }}
        />
        <div
          className='desc com'
          dangerouslySetInnerHTML={{ __html: config.sec9.desc }}
        />
      </div>
      <div className='phoneBox'>
        <div className='phone'></div>
        <div className='phoneTop'></div>
        <div className='light'></div>
      </div>
    </section>
  )
}

export default Sec9
