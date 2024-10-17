import { useRef } from "react"
import { ComponentType } from "../type"
import Title from "../components/title"
import { Shrink } from "../components/shrink"

import "./index.scss"
const Sec5 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const btnA = useRef<HTMLDivElement>(null)
  const btnB = useRef<HTMLDivElement>(null)
  const btnC = useRef<HTMLDivElement>(null)
  const load = UseObservable(container)

  useGSAP(
    () => {
      if (container.current) {
        const hei = window.innerHeight
        let dis = 0
        const minHei = (910 / 1920) * window.innerWidth
        if (hei < minHei) {
          dis = (minHei - hei) / 2 + 54
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
        gsap.from(".phoneBox", {
          y: 60,
          ease: "slow(0.5, 0.8)",
          scrollTrigger: {
            trigger: ".lightBox",
            start: "top bottom-=250",
            end: "+=200",
            scrub: true,
          },
        })

        gsap.from(".line-blue", {
          opacity: 0,
          clipPath: "inset(0 100% 0 0px)",
          ease: "slow(0.5, 0.8)",
          scrollTrigger: {
            trigger: ".lightBox",
            start: "top bottom-=250",
            end: "+=200",
            scrub: true,
          },
        })

        gsap.from(".titleBlue .titlea", {
          y: 60,
          ease: "slow(0.5, 0.8)",
          scrollTrigger: {
            trigger: ".textWrapper",
            start: "top bottom-=100",
            end: "+=200",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".titleBlue .titleb", {
          y: 60,
          ease: "slow(0.5, 0.8)",
          scrollTrigger: {
            trigger: ".textWrapper",
            start: "top bottom-=150",
            end: "+=200",
            toggleActions: "restart none none reverse",
          },
        })

        const tl = gsap.timeline()
        // 固定一会儿
        tl.to(".blue", { opacity: 1, duration: 10 }, "m")
        tl.to(
          ".shineBlue",
          { className: "shineBlue active", duration: 0.1 },
          "m"
        )

        // // 蓝色消失
        tl.to(".blue", { opacity: 0, duration: 20 }, "a")
        tl.to(".textBlue", { opacity: 0, duration: 20 }, "a")
        tl.to(".shineBlue", { opacity: 0, duration: 20 }, "a")

        tl.to(".btnBoxA .mask", { opacity: 0.5, duration: 20 }, "a")
        tl.to(".btnBoxA .btn", { opacity: 0, duration: 20 }, "a")
        tl.to(".btnBoxA .btnText", { opacity: 0, duration: 20 }, "a")
        tl.to(".btnBoxA .btnLight", { display: "none", duration: 20 }, "a")
        tl.to(
          ".line-blue .line",
          { clipPath: "inset(0 100% 0 0px)", duration: 20, delay: 0.2 },
          "a"
        )

        // 绿色出现
        tl.from(".green", { opacity: 0, duration: 20 }, "a")
        tl.from(".textGreen", { opacity: 0, duration: 20 }, "a")
        tl.from(".shineGreen", { opacity: 0, duration: 20 }, "b")
        tl.to(".shineBlue", { className: "shineBlue" }, "b")
        tl.to(".shineGreen", { className: "shineGreen active" }, "b")

        tl.to(".btnBoxA .mask", { filter: "blur(0)", duration: 20 }, "b")
        tl.to(".btnBoxB .mask", { filter: "blur(10px)", duration: 20 }, "c")
        tl.to(".btnBoxB .mask", { opacity: 0, zIndex: 0, duration: 20 }, "c")
        tl.from(".btnBoxB .btn", { opacity: 0, duration: 20 }, "c")
        tl.from(".btnBoxB .btnText", { opacity: 0, duration: 20 }, "c")
        tl.from(".btnBoxB .btnLight", { display: "none", duration: 20 }, "c")
        tl.from(
          ".line-green ",
          { clipPath: "inset(0 100% 0 0px)", duration: 20 },
          "c"
        )

        // 固定一会儿
        tl.to(".sec5-wrapper", { x: 0, duration: 50 }, "j")

        // 绿色消失
        tl.to(".green", { opacity: 0, duration: 20 }, "d")
        tl.to(".textGreen", { opacity: 0, duration: 20 }, "d")
        tl.to(".shineGreen", { opacity: 0, duration: 20 }, "d")
        tl.to(".shineGreen", { className: "shineGreen" }, "d")

        tl.to(".btnBoxB .mask", { opacity: 1, duration: 20 }, "d")
        tl.to(
          ".line-green .line",
          { clipPath: "inset(0 100% 0 0px)", duration: 20, delay: 0.2 },
          "d"
        )
        tl.from(".purple", { opacity: 0, duration: 20 }, "d")
        tl.from(".textPurple", { opacity: 0, duration: 20 }, "d")

        // 紫色出现
        tl.from(".green", { opacity: 0, duration: 20 }, "e")
        tl.from(".textGreen", { opacity: 0, duration: 20 }, "e")
        tl.from(".shinePurple", { opacity: 0, duration: 20 }, "e")
        tl.to(
          ".shinePurple",
          { className: "shinePurple active", duration: 20 },
          "e"
        )

        tl.to(
          ".btnBoxB .mask",
          { filter: "blur(0)", zIndex: 5, duration: 20 },
          "e"
        )

        tl.to(".btnBoxB .btn", { opacity: 0, duration: 20 }, "e")
        tl.to(".btnBoxB .btnText", { opacity: 0, duration: 20 }, "e")
        tl.to(".btnBoxB .btnLight", { display: "none", duration: 20 }, "e")
        tl.to(".btnBoxC .mask", { filter: "blur(10px)", duration: 20 }, "f")
        tl.to(".btnBoxC .mask", { opacity: 0, zIndex: 0, duration: 20 }, "f")
        tl.from(".btnBoxC .btn", { opacity: 0, duration: 20 }, "f")
        tl.from(".btnBoxC .btnText", { opacity: 0, duration: 20 }, "f")
        tl.from(".btnBoxC .btnLight", { display: "none", duration: 20 }, "f")
        tl.from(
          ".line-purple ",
          { clipPath: "inset(0 100% 0 0px)", duration: 20 },
          "f"
        )

        tl.to(".sec5-wrapper", { x: 0, duration: 30 }, "o")

        const scrollTriggerInstance = ScrollTrigger.create({
          trigger: ".sec5-wrapper",
          start: `${
            responsive?.md
              ? `top top-=${dis}`
              : `top top+=${window.innerHeight * 0.1}`
          }`,
          end: "+=3000",
          animation: tl,
          scrub: true,
          pin: true,
        })

        btnA.current?.addEventListener("click", () => {
          const progress = 0.023
          const scroll =
            scrollTriggerInstance.start +
            progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
          scrollTriggerInstance.scroll(scroll)
        })

        btnB.current?.addEventListener("click", () => {
          const progress = 0.36
          const scroll =
            scrollTriggerInstance.start +
            progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
          scrollTriggerInstance.scroll(scroll)
        })

        btnC.current?.addEventListener("click", () => {
          const progress = 0.86
          const scroll =
            scrollTriggerInstance.start +
            progress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
          // gsap.to(window, {
          //   scrollTo: { y: scroll, autoKill: false },
          //   duration: 1, // 1秒动画
          //   ease: "power2.inOut",
          // })
          scrollTriggerInstance.scroll(scroll)
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )

  return (
    <div className={`sec5 imgLoad${load}`} ref={container}>
      <div className='sec5-wrapper'>
        <Title>
          <div
            dangerouslySetInnerHTML={{
              __html: config.sec5.title,
            }}
          />
        </Title>
        <div className='lightBox'>
          <div className='lightBoxIn'>
            <div className='blue'></div>
            <div className='green'></div>
            <div className='purple'></div>
          </div>
        </div>
        <div className='btnGroup'>
          <div className='btnBox btnBoxA' ref={btnA}>
            <div className='btn'></div>
            <div className='mask' style={{ zIndex: 0 }}></div>
            <div className='btnLight'></div>
            <div className='btnText'>{config.sec5.pointa}</div>
          </div>
          <div className='btnBox btnBoxB' ref={btnB}>
            <div className='btn'></div>
            <div className='mask'></div>
            <div className='btnLight'></div>
            <div className='btnText'></div>
            <div className='btnText'>{config.sec5.pointb}</div>
          </div>
          <div className='btnBox btnBoxC' ref={btnC}>
            <div className='btn'></div>
            <div className='mask'></div>
            <div className='btnLight'></div>
            <div className='btnText'>{config.sec5.pointc}</div>
          </div>
        </div>
        <div className='phoneBox'>
          <div className='phone'></div>
        </div>
        <div className='line-blue'>
          <div className='line'></div>
        </div>
        <div className='line-green'>
          <div className='line'></div>
        </div>
        <div className='line-purple'>
          <div className='line'></div>
        </div>
        <div className='shineBox'>
          <div className='shineIn'>
            <div className='shineBlue'></div>
            <div className='shineGreen'></div>
            <div className='shinePurple'></div>
          </div>
        </div>
        <div className='textBox'>
          <div className='textIn'>
            <div className='textBlue'></div>
            <div className='textGreen'></div>
            <div className='textPurple'></div>
            <div className='textWrapper'>
              <div className='titleBox titleBlue'>
                <div className='titlea'>
                  <div>{config.sec5.subtitlea}</div>
                </div>
                <div className='titleb'>
                  <div>
                    {config.sec5.infoa}
                    <Shrink />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec5
