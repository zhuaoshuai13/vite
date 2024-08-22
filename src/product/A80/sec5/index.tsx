import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec5 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: ComponentType) => {
  const main = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const load = UseObservable(ref)

  useGSAP(
    () => {
      if (container.current) {
        const windowHeight = window.innerHeight
        const domHeight = main.current?.getBoundingClientRect().height ?? 0
        let top = ""
        if (windowHeight >= domHeight) {
          // 整体居中
          const distans = (windowHeight - domHeight) / 2
          top = `top top+=${distans}`
        } else {
          // 高度不够，保证文字居中
          const innerHeight = inner.current?.getBoundingClientRect().height ?? 0
          const distans = (windowHeight - innerHeight) / 2
          top = `top top-=${distans}`
        }
        const grid = responsive?.md ? [3, 6] : [4, 5]
        const tl = gsap.timeline()
        const tl2 = gsap.timeline()

        tl.from(".sec5 .box", {
          duration: 0.5,
          opacity: 0,
          scale: 0,
          ease: "power1.inOut",
          stagger: {
            amount: 1.5,
            grid: grid,
            from: "center",
          },
        })

        tl2.from(
          ".sec5 .contentB",
          {
            opacity: 0,
          },
          "a"
        )

        tl2.from(
          ".sec5 .text",
          {
            duration: 0.5,
            opacity: 0,
            y: 60,
            ease: "none",
            stagger: {
              amount: 1.5,
            },
          },
          "a+=.5"
        )

        ScrollTrigger.create({
          trigger: ".sec5",
          start: "top bottom",
          end: `top top`,
          animation: tl,
          scrub: responsive?.md,
          toggleActions: "restart none none reverse",
        })

        ScrollTrigger.create({
          trigger: ".sec5",
          start: responsive?.md ? top : "top center",
          end: responsive?.md ? `+=${window.innerHeight * 1}` : "top top",
          animation: tl2,
          scrub: responsive?.md,
          pin: responsive?.md,
          toggleActions: "restart none none reverse",
        })
        return
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <section ref={ref} className={`imgLoad${load}`}>
      <div className='sec5'>
        <div className='mainContent' ref={main}>
          <div className='contentA'>
            <div className='grid'>
              <div className='f1 box'></div>
              <div className='f2 box'></div>
              <div className='f3 box'></div>
              <div className='f4 box'></div>
              <div className='f5 box'></div>
              <div className='f6 box'></div>
              <div className='f7 box'></div>
              <div className='f8 box'></div>
              <div className='f9 box'></div>
              <div className='f10 box'></div>
              <div className='f11 box'></div>
              <div className='f12 box'></div>
              <div className='f13 box'></div>
              <div className='f14 box'></div>
              <div className='f15 box'></div>
              <div className='f16 box'></div>
              <div className='f17 box'></div>
              <div className='f18 box'></div>
            </div>
          </div>
          <div className='contentB'>
            <div className='inner' ref={inner}>
              <div className='subTitle text'>{config.sec5.titlea}</div>
              <div
                className='subInfo infoa text'
                dangerouslySetInnerHTML={{ __html: config.sec5.infoa }}
              ></div>
              <div className='subTitle text'>{config.sec5.titleb}</div>
              <div
                className='subInfo infob text'
                dangerouslySetInnerHTML={{ __html: config.sec5.infob }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec5
