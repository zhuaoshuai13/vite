import { useRef } from "react"
import { ComponentType } from "../type"

import "./index.scss"
const Sec14 = ({
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
  const btnA = useRef<HTMLDivElement>(null)
  const btnB = useRef<HTMLDivElement>(null)
  const btnC = useRef<HTMLDivElement>(null)

  // const { contextSafe } = useGSAP({ scope: container })
  useGSAP(
    () => {
      if (container.current) {
        const nav = 54
        const winHeight = window.innerHeight - nav
        const winWidth = window.innerWidth

        const computenum = (num: number) => {
          return (num / 2560) * winWidth
        }
        let dis = 0
        const domHeight = computenum(1100)

        // 如果屏幕高度>nav+domHeight，则定在顶部)
        console.log(winHeight - domHeight)

        if (!responsive?.md) {
          dis = (0 / 720) * winWidth - 60
        } else {
          // dis = (0 / 2560) * winWidth - 54
          if (winHeight >= domHeight) {
            // 固定在中间
            dis = (domHeight - winHeight) / 2 - 54
          } else {
            dis = 0
          }
        }

        const tl = gsap.timeline()
        tl.to(".sec14 .f1", { x: 0 }, "a")
        tl.to(".sec14 .f1", { className: "f1 com" }, "b")
        tl.to(".sec14 .f2", { className: "f2 com active" }, "b")
        tl.to(".sec14 .titlea", { className: "titlea" }, "b")
        tl.to(".sec14 .titleb", { className: "titleb active" }, "b")
        tl.to(
          ".sec14 .btnWhite",
          { className: "btns btnWhite", duration: 0 },
          "b"
        )
        tl.to(
          ".sec14 .btnBlue",
          { className: "btns btnBlue active", duration: 0 },
          "b"
        )
        tl.to(".sec14 .f2", { className: "f2 com" }, "d")
        tl.to(".sec14 .f3", { className: "f3 com active" }, "d")
        tl.to(".sec14 .titleb", { className: "titleb" }, "d")
        tl.to(".sec14 .titlec", { className: "titlec active" }, "d")

        tl.to(
          ".sec14 .btnBlue",
          { className: "btns btnBlue", duration: 0 },
          "d"
        )
        tl.to(
          ".btnBlack",
          { className: "btns btnBlack active", duration: 0 },
          "d"
        )

        const scrollTriggerInstance = ScrollTrigger.create({
          trigger: ".sec14",
          start: `top top-=${dis}`,
          end: "+=2400",
          easy: "none",
          animation: tl,
          scrub: true,
          pin: true,
        })

        btnA.current?.addEventListener("click", () => {
          scrollTriggerInstance.scroll(scrollTriggerInstance.start) // 跳转到开始位置
        })

        btnB.current?.addEventListener("click", () => {
          const progress = 0.4
          const scroll =
            scrollTriggerInstance.start +
            progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
          scrollTriggerInstance.scroll(scroll)
        })

        btnC.current?.addEventListener("click", () => {
          const progress = 0.67
          const scroll =
            scrollTriggerInstance.start +
            progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
          scrollTriggerInstance.scroll(scroll)
        })

        return
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <section ref={ref} className={`imgLoad${load}`}>
      <div className='sec14'>
        <div className='mb'>
          <div className='titleBox mainContent'>
            <div className='titlea active'>
              <div className='text'>{config.sec14.whiteTitle}</div>
              <div className='desc'>{config.sec14.whiteInfo}</div>
            </div>
            <div className='titleb'>
              <div className='text'>{config.sec14.blueTitle}</div>
              <div className='desc'>{config.sec14.blueInfo}</div>
            </div>
            <div className='titlec'>
              <div className='text'>{config.sec14.blackTitle}</div>
              <div className='desc'>{config.sec14.balckInfo}</div>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='f1 com active'>
            <div className='left f1l'></div>
            <div className='right f1r'></div>
            <div className='title'>{config.sec14.whiteTitle}</div>
            <div className='info'>{config.sec14.whiteInfo}</div>
          </div>
          <div className='f2 com'>
            <div className='left f2l'></div>
            <div className='right f2r'></div>
            <div className='title'>{config.sec14.blueTitle}</div>
            <div className='info'>{config.sec14.blueInfo}</div>
          </div>
          <div className='f3 com'>
            <div className='left f3l'></div>
            <div className='right f3r'></div>
            <div className='title'>{config.sec14.blackTitle}</div>
            <div className='info'>{config.sec14.balckInfo}</div>
          </div>

          <div className='btnGroup'>
            <div className='btns btnWhite active' ref={btnA}></div>
            <div className='btns btnBlue' ref={btnB}></div>
            <div className='btns btnBlack' ref={btnC}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec14
