import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec15 = ({
  useGSAP,
  gsap,
  config,
  // ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: ComponentType) => {
  const ref = useRef<HTMLDivElement>(null)
  const load = UseObservable(ref)
  useGSAP(
    () => {
      if (container.current) {
        gsap.from(".sec15 .subTitle", {
          duration: 1,
          opacity: 0,
          y: 60,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".sec15 .subTitle",
            start: `bottom bottom`,
            toggleActions: "restart none none reverse",
          },
        })

        if (responsive?.md) {
          gsap.from(".sec15 .img", {
            duration: 1,
            x: -300,
            y: 300,
            scrollTrigger: {
              trigger: ".sec15",
              start: `top center`,
              end: "top top",
              scrub: true,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec15 .texta", {
            duration: 1,
            x: -300,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec15 .texta",
              start: `top center`,
              end: "top top",
              // scrub: true,
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from(".sec15 .textb", {
            duration: 1,
            x: 300,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec15 .texta",
              start: `top center`,
              end: "top top",
              toggleActions: "restart none none reverse",
            },
          })
        } else {
          gsap.from(".sec15 .img", {
            duration: 1,
            opacity: 0,
            x: -300,
            y: 300,
            scrollTrigger: {
              trigger: ".sec15",
              start: `top center`,
              end: "top top",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec15 .texta", {
            duration: 1,
            x: -300,
            delay: 0.5,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec15",
              start: `top center`,
              end: "top top",
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from(".sec15 .textb", {
            duration: 1,
            x: 300,
            delay: 0.65,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec15",
              start: `top center`,
              end: "top top",
              toggleActions: "restart none none reverse",
            },
          })
        }
        return
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <section ref={ref} className={`imgLoad${load}`}>
      <div className='sec15'>
        <div className='mainContent'>
          <div
            className='subTitle title'
            dangerouslySetInnerHTML={{ __html: config.sec15.title }}
          ></div>
          <div className='texta'>{config.sec15.eight}</div>
          <div className='textb'>{config.sec15.mm}</div>
          <div className='img'></div>
        </div>
      </div>
    </section>
  )
}
export default Sec15
