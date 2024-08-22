import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec6 = ({
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
        if (responsive?.md) {
          gsap.from(".sec6 .f2", {
            x: -(643 / 2560) * window.innerWidth,
            duration: 0.75,
            easy: "none",
            scrollTrigger: {
              trigger: ".sec6",
              start: "top center",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec6 .f3", {
            x: -(1286 / 2560) * window.innerWidth,
            duration: 0.75,
            easy: "none",

            scrollTrigger: {
              trigger: ".sec6",
              start: "top center",
              // end: "top top",
              // scrub: true,
              toggleActions: "restart none none reverse",
            },
          })
          const tl = gsap.timeline()
          tl.from(".sec6 .bot", {
            duration: 0.5,
            opacity: 0,
            y: 60,
            stagger: 0.2,
          })

          ScrollTrigger.create({
            trigger: ".sec6 .bot",
            start: "top bottom",
            animation: tl,
            toggleActions: "restart none none reverse",
          })
        } else {
          gsap.from(".sec6 .f1", {
            x: -60,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec6 .f1",
              start: "bottom bottom",

              // end: "top top",
              // scrub: true,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec6 .f2", {
            x: -60,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec6 .f2",
              start: "bottom bottom",
              end: "top top",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec6 .f3", {
            x: 120,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec6",
              start: "top center",
              // end: "top top",
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
      <div className='sec6'>
        <div className='mainContent'>
          <div className='f1 box'>
            <div className='img'></div>
            <div className='bot'>
              <div className='left'></div>
              <div className='right'>
                <div className='number'>{config.sec6.photoNumber}</div>
                <div className='info'>{config.sec6.photo}</div>
              </div>
            </div>
          </div>
          <div className='f2 box'>
            <div className='img'></div>
            <div className='bot'>
              <div className='left'></div>
              <div className='right'>
                <div className='number'>{config.sec6.musicNumber}</div>
                <div className='info'>{config.sec6.music}</div>
              </div>
            </div>
          </div>
          <div className='f3 box'>
            <div className='img'></div>
            <div className='bot'>
              <div className='left'></div>
              <div className='right'>
                <div className='number'>{config.sec6.videoNumber}</div>
                <div className='info'>{config.sec6.video}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec6
