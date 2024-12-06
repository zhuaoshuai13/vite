import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec25 = ({
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
            "#sec25",
            {
              opacity: 1,
              ease: "none",
              duration: 1,
            },
            "a"
          )

          tl.from(
            ".sec25 .bg",
            {
              y: 100,
              transform: "scale(2)",
              opacity: 1,
              ease: "none",
              duration: 1.2,
            },
            "a+=.4"
          )
          tl.from(
            ".sec25 .com",
            {
              y: 80,
              opacity: 0,
              stagger: 0.2,
              ease: "none",
              duration: 0.6,
            },
            "a+=.8"
          )

          tl.to(
            "#sec25",
            {
              opacity: 1,
              ease: "none",
              duration: 0.4,
            },
            "b"
          )

          ScrollTrigger.create({
            trigger: "#sec25",
            start: "top top",
            end: "+=200%",
            animation: tl,
            scrub: true,
            pin: true,
          })
        } else {
          gsap.from(".sec25 .bg", {
            y: 100,
            transform: "scale(1.3)",
            ease: "none",
            scrollTrigger: {
              trigger: ".sec25 .bg",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec25 .com", {
            y: 100,
            opacity: 0,
            ease: "none",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec25 .oneTitle",
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
    <section id='sec25' ref={ref} className={`imgLoad${load}`}>
      <div className='sec25'>
        <div className='bg'></div>

        <div
          className='oneTitle com'
          dangerouslySetInnerHTML={{ __html: config.sec25.title }}
        />
        <div
          className='desc com'
          dangerouslySetInnerHTML={{ __html: config.sec25.desc }}
        />
      </div>
    </section>
  )
}

export default Sec25
