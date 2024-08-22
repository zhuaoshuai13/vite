import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec22 = ({
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
          const h1 = container.current
            .querySelector(".subInfo")
            ?.getBoundingClientRect().height

          gsap.from(".sec22 .titlea", {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec22 .subInfo",
              start: `top bottom-=${h1}`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec22 .f2", {
            opacity: 0,
            x: -100,
            scrollTrigger: {
              trigger: ".sec22 .f2",
              start: `center bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec22 .f1", {
            opacity: 0,
            x: 100,
            scrollTrigger: {
              trigger: ".sec22 .f1",
              start: `center bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec22 .f3", {
            opacity: 0,
            x: 100,
            scrollTrigger: {
              trigger: ".sec22 .f3",
              start: `center bottom`,
              toggleActions: "restart none none reverse",
            },
          })
        } else {
          gsap.from(".sec22 .titlea", {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec22 .subInfo",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec22 .f1", {
            opacity: 0,
            y: 100,
            scrollTrigger: {
              trigger: ".sec22 .f1",
              start: `center bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec22 .f2", {
            opacity: 0,
            x: -50,
            scrollTrigger: {
              trigger: ".sec22 .f2",
              start: `center bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec22 .f3", {
            opacity: 0,
            x: 50,
            scrollTrigger: {
              trigger: ".sec22 .f2",
              start: `center bottom`,
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
      <div className='sec22'>
        <div className='subTitle titlea'>{config.sec22.title}</div>
        <div className='subInfo titlea'>{config.sec22.info}</div>
        <div className='mainContent'>
          <div className='box'>
            <div className='f1'>
              <div className='title'>{config.sec22.subTitlea}</div>
              <div className='img'></div>
              <div className='info'>{config.sec22.subInfoa}</div>
            </div>
            <div className='f2'>
              <div>
                <div className='title'>{config.sec22.subTitleb}</div>
                <div
                  className='info'
                  dangerouslySetInnerHTML={{ __html: config.sec22.subInfob }}
                ></div>
              </div>
              <div className='img'></div>
            </div>
            <div className='f3'>
              <div>
                <div className='title'>{config.sec22.subTitlec}</div>
                <div className='info'>{config.sec22.subInfoc}</div>
              </div>
              <div className='img'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec22
