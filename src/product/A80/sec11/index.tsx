import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec11 = ({
  useGSAP,
  gsap,
  config,
  // ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: ComponentType) => {
  const ref = useRef<HTMLDivElement>(null)
  const playPc = useRef<HTMLDivElement>(null)
  const playMb = useRef<HTMLDivElement>(null)
  const load = UseObservable(ref)
  useGSAP(
    () => {
      if (container.current) {
        const h1 = container.current
          .querySelector(".subInfo")
          ?.getBoundingClientRect().height

        const tl = gsap.timeline()
        tl.from(".sec11 .f1", { duration: 1 }, "z")
        tl.to(".sec11 .f1", { zIndex: 1 }, "z")
        tl.from(".sec11 .f2", { opacity: 0, duration: 1 }, "a")
        tl.to(".sec11 .f2", { zIndex: 2 }, "a")
        tl.from(".sec11 .f3", { opacity: 0, duration: 1 }, "b")
        tl.to(".sec11 .f3", { zIndex: 3 }, "b")
        tl.from(".sec11 .f4", { opacity: 0, duration: 1 }, "c")
        tl.to(".sec11 .f4", { zIndex: 4 }, "c")
        tl.from(".sec11 .f5", { opacity: 0, duration: 1 }, "d")
        tl.to(".sec11 .f5", { zIndex: 5 }, "d")

        tl.pause()

        gsap.from(".sec11 .title", {
          duration: 1,
          opacity: 0,
          y: 60,
          stagger: 0.2,
          onComplete: () => {
            tl.restart()
          },
          scrollTrigger: {
            trigger: ".sec11 .subInfo",
            start: `top bottom-=${h1}`,
            toggleActions: "restart none none reverse",
          },
        })

        // ScrollTrigger.create({
        //   trigger: ".sec11",
        //   start: "top top",
        //   animation: tl,
        // })

        playPc.current?.addEventListener("click", () => {
          tl.restart()
        })

        playMb.current?.addEventListener("click", () => {
          tl.restart()
        })
        return
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )

  return (
    <section ref={ref} className={`imgLoad${load}`}>
      <div className='sec11'>
        <div className='content'>
          <div className='left'>
            <div className='img'>
              {/* <div className='inner'> */}
              <div className='f1'></div>
              <div className='f2'></div>
              <div className='f3'></div>
              <div className='f4'></div>
              <div className='f5'></div>
              {/* </div> */}
            </div>
            <div className='play mb' ref={playMb}>
              {config.sec11.play}
              <span></span>
            </div>
          </div>
          <div className='right'>
            <div className='subTitle title'>{config.sec11.title}</div>
            <div
              className='subInfo title'
              dangerouslySetInnerHTML={{ __html: config.sec11.info }}
            ></div>
            <div className='play pc title' ref={playPc}>
              {config.sec11.play}
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec11
