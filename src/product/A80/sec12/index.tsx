import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec12 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: ComponentType) => {
  const ref = useRef<HTMLDivElement>(null)
  const load = UseObservable(ref)
  useGSAP(
    () => {
      if (container.current) {
        const h = (1384 / 2560) * window.innerWidth
        const h2 = window.innerHeight
        const pd = (380 / 2560) * window.innerWidth
        if (responsive?.md) {
          gsap.from(".sec12 .f2", {
            duration: 1,
            y: 520,
            scrollTrigger: {
              trigger: ".sec12",
              start: `top center`,
              toggleActions: "restart none none reverse",
            },
          })

          const tl = gsap.timeline()

          tl.to(".sec12 .f2", { opacity: 0 }, "a")
          tl.to(".sec12 .bg", { opacity: 0 }, "a")
          tl.from(".sec12 .f1", { opacity: 0 }, "a")

          ScrollTrigger.create({
            trigger: ".sec12",
            start: `${h < h2 ? "bottom bottom" : `top top-=${pd}`}`,
            end: `+=500`,
            scrub: true,
            animation: tl,
            pin: true,
          })
        } else {
          gsap.from(".sec12 .title", {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec12 .subInfo",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from(".sec12 .f2", {
            duration: 1,
            y: 520,
            scrollTrigger: {
              trigger: ".sec12 .right",
              start: `top bottom`,
              end: "+=600",
              toggleActions: "restart none none reverse",
            },
          })

          const tl = gsap.timeline()

          tl.to(".sec12 .f2", { opacity: 0 }, "a")
          tl.to(".sec12 .bg", { opacity: 0 }, "a")
          tl.from(".sec12 .f1", { opacity: 0 }, "a")

          ScrollTrigger.create({
            trigger: ".sec12",
            start: "bottom bottom",
            end: `+=800`,
            scrub: true,
            animation: tl,
            pin: true,
          })

          // gsap.from(".sec12 .bg", {
          //   duration: 1,
          //   y: 200,
          //   scrollTrigger: {
          //     trigger: ".sec12 .right",
          //     start: `top bottom`,
          //     end: "+=600",
          //     scrub: true,
          //     toggleActions: "restart none none reverse",
          //   },
          // })

          // gsap.to(".sec12 .bg", {
          //   opacity: 0,
          //   duration: 1,
          //   scrollTrigger: {
          //     trigger: ".sec12 .right",
          //     start: `top bottom-=600`,
          //     end: "+=600",
          //     toggleActions: "restart none none reverse",
          //   },
          // })
          // gsap.to(".sec12 .f2", {
          //   opacity: 0,
          //   duration: 1,
          //   scrollTrigger: {
          //     trigger: ".sec12 .right",
          //     start: `top bottom-=600`,
          //     end: "+=600",
          //     toggleActions: "restart none none reverse",
          //   },
          // })

          // gsap.from(".sec12 .f1", {
          //   opacity: 0,
          //   duration: 1,
          //   scrollTrigger: {
          //     trigger: ".sec12 .right",
          //     start: `top bottom-=600`,
          //     end: "+=600",
          //     pin: true,
          //     toggleActions: "restart none none reverse",
          //   },
          // })
        }
        return
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <section ref={ref} className={`imgLoad${load} sec12out`}>
      <div className='sec12'>
        <div className='content'>
          <div className='left'>
            <div className='subTitle title'>{config.sec12.title}</div>
            <div
              className='subInfo title'
              dangerouslySetInnerHTML={{ __html: config.sec12.info }}
            ></div>
          </div>
          <div className='right'>
            <div className='bg'></div>
            <div className='f1'></div>
            <div className='f2'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec12
