import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec23 = ({
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

        gsap.from(".sec23 .title", {
          duration: 1,
          opacity: 0,
          y: 60,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".sec23 .subInfo",
            start: `top bottom-=${h1}`,
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".sec23 .img", {
          duration: 1,
          transform: "scaleX(1.2)",
          scrollTrigger: {
            trigger: ".sec23 .img",
            start: "top bottom",
            end: "top top",
            scrub: true,
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
      <div className='sec23'>
        <div className='subTitle title'>{config.sec23.title}</div>
        <div className='subInfo title'>{config.sec23.info}</div>
        <div className='img'></div>
      </div>
    </section>
  )
}
export default Sec23
