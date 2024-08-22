import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec7 = ({
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
            .querySelector(".f1")
            ?.getBoundingClientRect().height

          const h2 = container.current
            .querySelector(".f2")
            ?.getBoundingClientRect().height
          gsap.from(".sec7 .f1", {
            duration: 1,
            y: 100,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec7 .f1",
              start: `top bottom-=${h1}`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec7 .f2", {
            duration: 1,
            opacity: 0,
            y: 100,
            scrollTrigger: {
              trigger: ".sec7 .f2",
              start: `top bottom-=${h2}`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.to(".sec7", {
            "--gradient-angle": "-200%",
            "--gradient-angle1": "-100%",
            "--gradient-angle2": "0%",
            "--gradient-angle3": "100%",
            "delay": 0.5,
            "scrollTrigger": {
              trigger: ".sec7 .f2",
              start: "top bottom-=200",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec7 .img", {
            duration: 1,
            transform: "scaleX(1.2)",
            scrollTrigger: {
              trigger: ".sec7 .img",
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
              toggleActions: "restart none none reverse",
            },
          })
        } else {
          gsap.from(".sec7 .f1", {
            duration: 1,
            y: 100,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec7 .f1",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec7 .f2", {
            duration: 1,
            opacity: 0,
            y: 100,
            scrollTrigger: {
              trigger: ".sec7 .f2",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec7 .mb", {
            duration: 1,
            opacity: 0,
            y: 100,
            scrollTrigger: {
              trigger: ".sec7 .f2",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.to(".sec7", {
            "--gradient-angle": "-200%",
            "--gradient-angle1": "-100%",
            "--gradient-angle2": "0%",
            "--gradient-angle3": "100%",
            "scrollTrigger": {
              trigger: ".sec7 .mb",
              start: "center bottom",
              end: "bottom center",
              scrub: true,
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
      <div className='sec7'>
        <div className='mainContent'>
          <div className='f1 common'>
            <div
              className='subTitle'
              dangerouslySetInnerHTML={{ __html: config.sec7.title }}
            />
            <div className='right pc'>
              <div className='top'>
                {config.sec7.four}
                <span>{config.sec7.fourGB}</span>
              </div>
              <div className='bot'>{config.sec7.tip}</div>
            </div>
          </div>
          <div className='f2 common'>
            <div
              className='subInfo'
              dangerouslySetInnerHTML={{ __html: config.sec7.info }}
            ></div>
            <div className='right pc'>
              <div className='top'>
                {config.sec7.three}
                <span>{config.sec7.fiveGB}</span>
              </div>
              <div className='bot'>{config.sec7.tip}</div>
            </div>
          </div>

          <div className='mb params'>
            <div className='right mb'>
              <div className='top'>
                {config.sec7.four}
                <span>{config.sec7.fourGB}</span>
              </div>
              <div className='bot'>{config.sec7.tip}</div>
            </div>
            <div className='right mb'>
              <div className='top'>
                {config.sec7.three}
                <span>{config.sec7.fiveGB}</span>
              </div>
              <div className='bot'>{config.sec7.tip}</div>
            </div>
          </div>
          <div className='img'></div>
        </div>
      </div>
    </section>
  )
}
export default Sec7
