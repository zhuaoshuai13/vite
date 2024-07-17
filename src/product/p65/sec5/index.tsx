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
  const load = UseObservable(container)

  useGSAP(
    () => {
      if (container.current) {
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

        // // 蓝色消失
        tl.to(".blue", { opacity: 0, duration: 20 }, "a")
        tl.to(".textBlue", { opacity: 0, duration: 20 }, "a")
        tl.to(".shineBlue", { opacity: 0, duration: 20 }, "a")
        tl.to(
          ".titleBlue .titlea div",
          { opacity: 0, y: -30, duration: 15 },
          "a"
        )
        tl.to(
          ".titleBlue .titleb div",
          { opacity: 0, y: -60, duration: 20, delay: 0.2 },
          "a"
        )

        tl.to(".btnBoxA .mask", { opacity: 1, duration: 20 }, "a")
        tl.to(
          ".line-blue .line",
          { clipPath: "inset(0 100% 0 0px)", duration: 20, delay: 0.2 },
          "a"
        )

        // 绿色出现
        tl.from(".green", { opacity: 0, duration: 20 }, "a")
        tl.from(".textGreen", { opacity: 0, duration: 20 }, "a")
        tl.from(".shineGreen", { opacity: 0, duration: 20 }, "b")
        tl.to(".shineGreen", { className: "shineGreen active" }, "b")

        tl.to(".btnBoxA .mask", { filter: "blur(0)", duration: 20 }, "b")
        tl.to(".btnBoxB .mask", { filter: "blur(10px)", duration: 20 }, "c")
        tl.to(".btnBoxB .mask", { opacity: 0, duration: 20 }, "c")
        tl.from(
          ".line-green ",
          { clipPath: "inset(0 100% 0 0px)", duration: 20 },
          "c"
        )
        tl.from(
          ".titleGreen .titleb ",
          { opacity: 0, y: 60, duration: 20 },
          "c"
        )
        tl.from(
          ".titleGreen .titlea ",
          { opacity: 0, y: 30, duration: 15 },
          "c"
        )

        // 固定一会儿
        tl.to(".sec5-wrapper", { x: 0, duration: 50 }, "j")

        // 绿色消失
        tl.to(".green", { opacity: 0, duration: 20 }, "d")
        tl.to(".textGreen", { opacity: 0, duration: 20 }, "d")
        tl.to(".shineGreen", { opacity: 0, duration: 20 }, "d")
        tl.to(".shineGreen", { className: "shineGreen" }, "d")

        tl.to(
          ".titleGreen .titlea div",
          { opacity: 0, y: -30, duration: 15 },
          "d"
        )
        tl.to(
          ".titleGreen .titleb div",
          { opacity: 0, y: -60, duration: 20, delay: 0.2 },
          "d"
        )

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

        tl.to(".btnBoxB .mask", { filter: "blur(0)", duration: 20 }, "e")
        tl.to(".btnBoxC .mask", { filter: "blur(10px)", duration: 20 }, "f")
        tl.to(".btnBoxC .mask", { opacity: 0, duration: 20 }, "f")
        tl.from(
          ".line-purple ",
          { clipPath: "inset(0 100% 0 0px)", duration: 20 },
          "f"
        )
        tl.from(
          ".titlePurple .titleb ",
          { opacity: 0, y: 60, duration: 20 },
          "f"
        )
        tl.from(
          ".titlePurple .titlea ",
          { opacity: 0, y: 30, duration: 15 },
          "f"
        )

        tl.to(".sec5-wrapper", { x: 0, duration: 30 }, "o")

        ScrollTrigger.create({
          trigger: ".sec5-wrapper",
          start: `${
            responsive?.md
              ? "top top-=50"
              : `top top+=${window.innerHeight * 0.1}`
          }`,
          end: "+=3000",
          animation: tl,
          scrub: true,
          pin: true,
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
          <div className='btnBox btnBoxA'>
            <div className='btn'></div>
            <div className='mask'></div>
            <div className='btnLight'></div>
            <div className='btnText'>{config.sec5.pointa}</div>
          </div>
          <div className='btnBox btnBoxB'>
            <div className='btn'></div>
            <div className='mask'></div>
            <div className='btnLight'></div>
            <div className='btnText'></div>
            <div className='btnText'>{config.sec5.pointb}</div>
          </div>
          <div className='btnBox btnBoxC'>
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
              <div className='titleBox titleGreen'>
                <div className='titlea'>
                  <div>{config.sec5.subtitleb}</div>
                </div>
                <div className='titleb'>
                  <div>
                    {config.sec5.infob}
                    <Shrink />
                  </div>
                </div>
              </div>
              <div className='titleBox titlePurple'>
                <div className='titlea'>
                  <div>{config.sec5.subtitlec}</div>
                </div>
                <div className='titleb'>
                  <div>
                    {config.sec5.infoc}
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
