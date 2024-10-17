import { useRef } from "react"

import Title from "../components/title"
import { Shrink } from "../components/shrink"

import "./index.scss"
import { ComponentType } from "../type"
const SecGame = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const load = UseObservable(container)
  const btnA = useRef<HTMLDivElement>(null)
  const btnB = useRef<HTMLDivElement>(null)
  const btnC = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // return
      // 170 290  1140
      const h = window.innerHeight - 54
      let dis = 0

      // 容器总的高度
      const h1 = ((1140 - 170) / 1920) * window.innerWidth
      if (h1 < h) {
        // 直接顶部固定
        dis = (170 / 1920) * window.innerWidth - 54
      } else {
        // 固定在第二个文本框
        dis = (290 / 1920) * window.innerWidth - 54
      }
      gsap.from(".title", {
        opacity: 0,
        y: 60,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".title-box",
          start: "top bottom-=100",
          end: "+=100",
          scrub: 0.5,
        },
      })

      gsap.from(".line", {
        opacity: 0,
        y: 60,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".title-box",
          start: "top bottom-=100",
          end: "+=100",
          scrub: 0.5,
        },
      })

      gsap.from(".line-box", {
        opacity: 0,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 8,
        duration: 0.4,
        onComplete: function () {
          gsap.set(".line-box", { opacity: 1, duration: 0.5 }) // 将属性设置回初始状态
        },

        scrollTrigger: {
          trigger: ".title-box",
          start: "top bottom+=100",
          toggleActions: "restart none none reverse",
        },
      })
      gsap.from(".game-titl-a", {
        opacity: 0,
        y: 60,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".secGameText",
          start: "top bottom-=100",
          end: "+=100",
          scrub: 0.5,
        },
      })
      gsap.from(".game-info-a", {
        opacity: 0,
        y: 60,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".secGameText",
          start: "top bottom-=140",
          end: "+=100",
          scrub: 0.5,
        },
      })

      gsap.from(".hand", {
        transform: "rotate(9deg)",
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".secGameText",
          start: "top bottom-=240",
          end: "+=200",
          scrub: 0.5,
        },
      })
      const tl = gsap.timeline()
      // tl.to(".BoxA .newLight .mask", { opacity: 1 }, "a")
      // tl.to(".BoxA .newLight .mask", { filter: "blur(0)" }, "a")
      // tl.to(".BoxA .newLight .mask", { opacity: 1 }, "a")
      tl.to(".BoxA .newLight .btn", { opacity: 0 }, "a")
      tl.to(
        ".BoxA .newLight .btnLight",
        {
          opacity: 0,
          animation: "unset",
          display: "none",
        },
        "a"
      )
      tl.to(".BoxA .newLight .btnText", { opacity: 0 }, "a")
      tl.to(".BoxA .newLight .mask", { filter: "blur(0)" }, "a")
      tl.to(".BoxA .linea", { opacity: 0 }, "a")
      tl.to(".BoxA .newLight .mask", { opacity: 1 }, "a+=.1")

      tl.to(".BoxB .mask", { filter: "blur(10px)" }, "a+=.1")
      tl.to(".BoxB .btn", { opacity: 1 }, "a+=.2")
      tl.to(".BoxB .btnLight", { opacity: 1 }, "a+=.2")
      tl.from(".BoxB .btnLight", { display: "none" }, "a+=.2")
      tl.to(".BoxB .btnText", { opacity: 1 }, "a+=.2")
      tl.to(".BoxB .mask", { opacity: 0 }, "a+=.1")
      tl.from(
        ".BoxB .lineb",
        { clipPath: "inset(0 0 0 100%)", opacity: 0 },
        "a+=.1"
      )
      tl.to(".BoxB .btn", { opacity: 0 }, "a+=.5")
      tl.to(".BoxB .btnText", { opacity: 0 }, "a+=.5")
      tl.to(
        ".BoxB .btnLight",
        {
          opacity: 0,
          animation: "unset",
          display: "none",
        },
        "a+=.5"
      )
      tl.to(".BoxB .mask", { filter: "blur(0)" }, "a+=.6")
      tl.to(".BoxB .lineb", { opacity: 0 }, "a+=.6")
      tl.to(".BoxB .mask", { opacity: 1 }, "a+=.6")

      tl.to(".BoxC .mask", { filter: "blur(10px)" }, "a+=.6")
      tl.to(".BoxC .mask", { opacity: 0 }, "a+=.6")
      tl.from(
        ".BoxC .linec",
        { clipPath: "inset(0 0 0 100%)", opacity: 0 },
        "a+=.6"
      )
      tl.to(".BoxC .btn", { opacity: 1 }, "a+=.7")
      tl.from(".BoxC .btnLight", { display: "none" }, "a+=.7")
      tl.to(".BoxC .btnText", { opacity: 1 }, "a+=.7")

      if (container.current) {
        const scrollTriggerInstance = ScrollTrigger.create({
          trigger: ".secGameWrapper",
          // start: "top top-=100",
          start: `${responsive?.md ? `top top-=${dis}` : `top top`}`,

          end: "+=3000",
          animation: tl,
          scrub: true,
          pin: true,
          preventOverlaps: true,
        })

        btnA.current?.addEventListener("click", () => {
          const progress = 0.01
          const scroll =
            scrollTriggerInstance.start +
            progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
          scrollTriggerInstance.scroll(scroll)
        })

        btnB.current?.addEventListener("click", () => {
          const progress = 0.43
          const scroll =
            scrollTriggerInstance.start +
            progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
          scrollTriggerInstance.scroll(scroll)
        })

        btnC.current?.addEventListener("click", () => {
          const progress = 0.94
          const scroll =
            scrollTriggerInstance.start +
            progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
          scrollTriggerInstance.scroll(scroll)
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className={`secGame imgLoad${load}`} ref={container}>
      <div className='secGameWrapper'>
        <div className='gameTitle'>
          <Title>
            <div>{config.sec11.title}</div>
          </Title>
        </div>
        <div className='secGameText'>
          <div className='game-text game-text-a'>
            <div className='game-title'>
              <div className='game-titl-a'>{config.sec11.subtitlea}</div>
            </div>
            <div className='game-info'>
              <div className='game-info-a'>
                {config.sec11.infoa}
                <Shrink />
              </div>
            </div>
          </div>
        </div>
        <div className='LightingBox'>
          <div className='BoxA' ref={btnA}>
            <div className='newLight'>
              <div className='mask'></div>
              <div className='btn'></div>
              <div className='btnLight'></div>
              <div className='btnText'>{config.sec11.pointa}</div>
              <div className='linea'></div>
            </div>
          </div>
          <div className='BoxB' ref={btnB}>
            <div className='newLight'>
              <div className='mask'></div>
              <div className='btn'></div>
              <div className='btnLight'></div>
              <div className='btnText'>{config.sec11.pointb}</div>
              <div className='lineb'></div>
            </div>
          </div>
          <div className='BoxC' ref={btnC}>
            <div className='newLight'>
              <div className='mask'></div>
              <div className='btn'></div>
              <div className='btnLight'></div>
              <div className='btnText'>{config.sec11.pointc}</div>
              <div className='linec'></div>
            </div>
          </div>
        </div>
        <div className='game'>
          <div className='in'>
            <div className='out'></div>
            <div className='hand'></div>

            <div className='circleBox'>
              <div className='circleIn'>
                <div className='f1'></div>
                <div className='f2'></div>
                <div className='f3'></div>
              </div>
            </div>

            <div className='circleBox circleBoxB'>
              <div className='circleIn'>
                <div className='f1'></div>
                <div className='f2'></div>
                <div className='f3'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecGame
