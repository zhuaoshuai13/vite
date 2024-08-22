import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec17 = ({
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
          gsap.from(".sec17 .img", {
            transform: "scale(1.3)",

            scrollTrigger: {
              trigger: ".sec17",
              start: "top center",
              end: "top top",
              scrub: true,
            },
          })

          gsap.from(".sec17 .fcom", {
            duration: 1,
            opacity: 0,
            stagger: {
              amount: 1,
            },
            scrollTrigger: {
              trigger: ".sec17 .right",
              start: `center bottom`,
              scrub: true,
              end: "bottom bottom-=100",
              toggleActions: "restart none none reverse",
            },
          })
        } else {
          gsap.from(".sec17 .mb .subTitle", {
            duration: 1,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec17 .mb .subTitle",
              start: `bottom bottom`,
              // end: "+=400",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec17 .mb .subInfo", {
            duration: 1,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec17 .mb .subInfo",
              start: `bottom bottom`,
              // end: "+=400",
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from(".sec17 .img", {
            transform: "scaleX(1.3)",
            scrollTrigger: {
              trigger: ".sec17 .img",
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          })

          gsap.from(".sec17 .fcom", {
            duration: 1,
            opacity: 0,
            stagger: {
              amount: 1,
            },
            scrollTrigger: {
              trigger: ".sec17 .right",
              start: `center bottom`,
              scrub: true,
              end: "bottom bottom-=100",
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
      <div className='sec17'>
        <div className='mb'>
          <div
            className='subTitle title'
            dangerouslySetInnerHTML={{ __html: config.sec17.title }}
          ></div>
          <div className='subInfo title'>{config.sec17.info}</div>
        </div>
        <div className='img'></div>
        <div className='mainContent'>
          <div className='left pc'>
            <div
              className='subTitle title'
              dangerouslySetInnerHTML={{ __html: config.sec17.title }}
            ></div>
            <div className='subInfo title'>{config.sec17.info}</div>
          </div>
          <div className='right'>
            <div className='top'>
              <div className='f1 fcom'>
                <div className='param'>
                  {config.sec17.f1n} <span>{config.sec17.f1p}</span>
                </div>
                <div className='desc'>{config.sec17.f1}</div>
              </div>
              <div className='line'></div>
              <div className='f2 fcom'>
                <div className='param'>
                  {config.sec17.f2n} <span>{config.sec17.f2p}</span>
                </div>
                <div className='desc'>{config.sec17.f2}</div>
              </div>
            </div>
            <div className='bot'>
              <div className='f3 fcom'>
                <div className='param'>
                  {config.sec17.f3n} <span>{config.sec17.f3p}</span>
                </div>
                <div className='desc'>{config.sec17.f3}</div>
              </div>
              <div className='lineb'></div>
              <div className='f4 fcom'>
                <div className='param'>{config.sec17.f4n}</div>
                <div className='desc'>{config.sec17.f4}</div>
              </div>
              <div className='lineb'></div>
              <div className='f5 fcom'>
                <div className='param'>
                  {config.sec17.f5n} <span>{config.sec17.f5p}</span>
                </div>
                <div className='desc'>{config.sec17.f5}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec17
