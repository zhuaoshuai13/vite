import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec8 = ({
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
        gsap.from(".sec8 .titles", {
          duration: 1,
          opacity: 0,
          y: 60,
          scrollTrigger: {
            trigger: ".sec8 .titles",
            start: `bottom bottom`,
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".sec8 .title", {
          duration: 1,
          opacity: 0,
          y: 80,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".sec8 .text",
            start: `center bottom`,
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".sec8 .light", {
          opacity: 0,
          scrollTrigger: {
            trigger: responsive?.md ? ".sec8" : ".sec8 .light",
            start: responsive?.md ? "top top" : "top center",
            end: responsive?.md ? "bottom bottom" : "bottom center",
            // scrub: responsive?.md ? 1 : false,
            scrub: 1,
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
      <div className='sec8'>
        <div className='light'></div>
        <div className='dark mb'></div>
        <div className='text'>
          <div className='subTitle title'>{config.sec9.title}</div>
          <div className='subInfo title'>{config.sec9.info}</div>
        </div>
      </div>
    </section>
  )
}
export default Sec8
