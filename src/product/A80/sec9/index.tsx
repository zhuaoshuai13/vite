import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec9 = ({
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
        if (responsive?.md) {
          gsap.from(".sec9 .title", {
            duration: 1,
            opacity: 0,
            y: 80,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec9",
              start: `top center`,
              toggleActions: "restart none none reverse",
            },
          })

          // gsap.from(".sec9 .fcom", {
          //   opacity: 0,
          //   y: 60,
          //   stagger: 0.2,
          //   scrollTrigger: {
          //     trigger: ".sec9 .text",
          //     start: `bottom bottom`,
          //     scrub: true,
          //     end: "+=150",
          //     toggleActions: "restart none none reverse",
          //   },
          // })
        } else {
          gsap.from(".sec9 .subTitle", {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec9 .subTitle",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec9 .subInfo", {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec9 .subInfo",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec9 .f1 .text", {
            duration: 1,
            opacity: 0,
            y: 60,
            scrollTrigger: {
              trigger: ".sec9 .f1 .text",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec9 .f1 .desc", {
            duration: 1,
            opacity: 0,
            y: 60,
            scrollTrigger: {
              trigger: ".sec9 .f1 .desc",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec9 .f1 .img", {
            duration: 1,
            opacity: 0,
            y: 60,
            scrollTrigger: {
              trigger: ".sec9 .f1 .img",
              start: `top bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec9 .f2 .text", {
            duration: 1,
            opacity: 0,
            y: 60,
            scrollTrigger: {
              trigger: ".sec9 .f2 .text",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec9 .f2 .desc", {
            duration: 1,
            opacity: 0,
            y: 60,
            scrollTrigger: {
              trigger: ".sec9 .f2 .desc",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec9 .f2 .img", {
            duration: 1,
            opacity: 0,
            y: 60,
            scrollTrigger: {
              trigger: ".sec9 .f2 .img",
              start: `top bottom`,
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
    <section ref={ref} className={`imgLoad${load} sec9out`}>
      <div className='sec9'>
        <div className='mainContent'>
          <div className='imgGroup'>
            <div className='f1'>
              <div className='img title'>
                <div className='inner'></div>
              </div>
              <div className='text fcom'>{config.sec9.subTitlea}</div>
              <div className='desc fcom'>{config.sec9.subInfoa}</div>
            </div>
            <div className='f2 '>
              <div className='img title'>
                <div className='inner'></div>
              </div>
              <div className='text fcom'>{config.sec9.subTitleb}</div>
              <div className='desc fcom'>{config.sec9.subInfob}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec9
