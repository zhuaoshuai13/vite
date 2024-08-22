import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec18 = ({
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
        const h1 = container.current
          .querySelector(".subInfo")
          ?.getBoundingClientRect().height

        gsap.from(".sec18 .title", {
          duration: 1,
          opacity: 0,
          y: 60,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".sec18 .subInfo",
            start: `top bottom-=${h1}`,
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".sec18 .f1", {
          duration: 1,
          y: 1200,
          opacity: 0,
          // opacity: 0,
          scrollTrigger: {
            trigger: ".sec18 .img",
            start: `top bottom`,
            end: "top top ",
            // scrub: true,
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".sec18 .f2", {
          duration: 1,
          y: 900,
          opacity: 0,
          scrollTrigger: {
            trigger: ".sec18 .img",
            start: `top bottom-=300`,
            end: "top top ",
            // scrub: true,
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".sec18 .f3", {
          duration: 1,
          y: 1200,
          opacity: 0,
          scrollTrigger: {
            trigger: ".sec18 .img",
            start: `top bottom-=200`,
            end: "top top ",
            // scrub: true,
            toggleActions: "restart none none reverse",
          },
        })

        return
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <section ref={ref} className={`imgLoad${load}`}>
      <div className='sec18'>
        <div className='subTitle title'>{config.sec18.title}</div>
        <div className='subInfo title'>{config.sec18.info}</div>
        <div className='img'>
          <div className='f1 imgs'></div>
          <div className='f2 imgs'></div>
          <div className='f3 imgs'></div>
        </div>
      </div>
    </section>
  )
}
export default Sec18
