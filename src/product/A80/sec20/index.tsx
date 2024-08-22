import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec20 = ({
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
          gsap.from(".sec20 .title", {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec20 .left",
              start: `top bottom`,
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from(".sec20 .phoneOut", {
            transform: "rotate3d(-4, 9, 0, 20deg)",
            x: 100,
            y: -200,
            easy: "none",
            duration: 0.75,

            scrollTrigger: {
              trigger: ".sec20",
              start: "top center",
              end: "top top",
              // scrub: true,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec20 .line", {
            transform: "translate3d(-40px, 100px, 22px)",
            easy: "none",

            duration: 0.75,

            scrollTrigger: {
              trigger: ".sec20",
              start: "top center",
              end: "top top",
              // scrub: true,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec20 .fcom", {
            duration: 0.8,
            opacity: 0,
            stagger: {
              amount: 0.8,
            },
            scrollTrigger: {
              trigger: ".sec20",
              start: "top center",
              end: "top top",
              scrub: true,
              toggleActions: "restart none none reverse",
            },
          })
        } else {
          gsap.from(".sec20 .title", {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec20 .subInfo",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec20 .phonea", {
            transform: "rotate3d(-4, 9, 0, 20deg)",
            x: -100,
            y: 200,
            opacity: 0,
            duration: 1.5,
            easy: "none",
            scrollTrigger: {
              trigger: ".sec20 .phoneOut",
              start: "center bottom",
              end: "top top",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec20 .phone", {
            transform: "rotate3d(-4, 9, 0, 20deg)",
            x: -100,
            y: 200,
            opacity: 0,
            duration: 1.5,
            easy: "none",
            scrollTrigger: {
              trigger: ".sec20 .phoneOut",
              start: "center bottom",
              end: "top top",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec20 .line", {
            transform: "translate3d(-120px, 240px, 22px)",
            opacity: 0,
            duration: 1.5,
            easy: "none",
            scrollTrigger: {
              trigger: ".sec20 .phoneOut",
              start: "center bottom",
              end: "top top",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.to(".sec20 .line", {
            className: "line active",
            duration: 0.1,
            delay: 1.5,
            scrollTrigger: {
              trigger: ".sec20 .phoneOut",
              start: "center bottom",
              end: "top top",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.to(".sec20 .phonea", {
            className: "phonea active",
            duration: 0.1,
            delay: 1.5,
            scrollTrigger: {
              trigger: ".sec20 .phoneOut",
              start: "center bottom",
              end: "top top",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.to(".sec20 .phone", {
            className: "phone active",
            duration: 0.1,
            delay: 1.5,
            scrollTrigger: {
              trigger: ".sec20 .phoneOut",
              start: "center bottom",
              end: "top top",
              toggleActions: "restart none none reverse",
              immediateRender: true,
            },
          })

          gsap.from(".sec20 .fcom", {
            duration: 0.8,
            opacity: 0,
            stagger: {
              amount: 0.8,
            },
            scrollTrigger: {
              trigger: ".sec20 .params",
              start: "center bottom",
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
      <div className='sec20'>
        <div className='left'>
          <div className='subTitle title'>{config.sec20.title}</div>
          <div
            className='subInfo title'
            dangerouslySetInnerHTML={{ __html: config.sec20.info }}
          ></div>
          <div className='phoneOut'>
            <div className='phoneInner'>
              <div className='phone'></div>
              <div className='phonea'></div>
              <div className='line'></div>
            </div>
          </div>
          <div className='params'>
            <div className='f1 fcom'>
              <div className='top'>
                {config.sec20.f1n} <span>{config.sec20.day}</span>
              </div>
              <div className='bot'>{config.sec20.f1}</div>
            </div>
            <div className='f2 fcom'>
              <div className='top'>
                {config.sec20.f2n} <span>{config.sec20.hour}</span>
              </div>
              <div className='bot'>{config.sec20.f2}</div>
            </div>
            <div className='f5 fcom'></div>
            <div className='f3 fcom'>
              <div className='top'>
                {config.sec20.f3n} <span>{config.sec20.hour}</span>
              </div>
              <div className='bot'>{config.sec20.f3}</div>
            </div>
            <div className='f4 fcom'>
              <div className='top'>
                {config.sec20.f4n} <span>{config.sec20.hour}</span>
              </div>
              <div className='bot'>{config.sec20.f4}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec20
