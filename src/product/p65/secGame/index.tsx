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

  useGSAP(
    () => {
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
      tl.to(".BoxA .newLight .btnLight", { opacity: 0 }, "a")
      tl.to(".BoxA .newLight .btnText", { opacity: 0 }, "a")
      tl.to(".BoxA .newLight .mask", { filter: "blur(0)" }, "a")
      tl.to(".BoxA .linea", { opacity: 0 }, "a")
      tl.to(".BoxA .newLight .mask", { opacity: 1 }, "a+=.1")

      tl.to(".BoxB .mask", { filter: "blur(10px)" }, "a+=.1")
      tl.to(".BoxB .btn", { opacity: 1 }, "a+=.2")
      tl.to(".BoxB .btnLight", { opacity: 1 }, "a+=.2")
      tl.to(".BoxB .btnText", { opacity: 1 }, "a+=.2")
      tl.to(".BoxB .mask", { opacity: 0 }, "a+=.1")
      tl.from(
        ".BoxB .lineb",
        { clipPath: "inset(0 0 0 100%)", opacity: 0 },
        "a+=.1"
      )
      tl.to(".BoxB .btn", { opacity: 0 }, "a+=.5")
      tl.to(".BoxB .btnLight", { opacity: 0 }, "a+=.5")
      tl.to(".BoxB .btnText", { opacity: 0 }, "a+=.5")
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
      tl.to(".BoxC .btnLight", { opacity: 1 }, "a+=.7")
      tl.to(".BoxC .btnText", { opacity: 1 }, "a+=.7")

      if (container.current) {
        ScrollTrigger.create({
          trigger: ".secGameWrapper",
          // start: "top top-=100",
          start: `${responsive?.md ? "top top-=100" : `top top`}`,

          end: "+=3000",
          animation: tl,
          scrub: true,
          pin: true,
          preventOverlaps: true,
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
          <div className='BoxA'>
            <div className='newLight'>
              <div className='mask'></div>
              <div className='btn'></div>
              <div className='btnLight'></div>
              <div className='btnText'>{config.sec11.pointa}</div>
              <div className='linea'></div>
            </div>
          </div>
          <div className='BoxB'>
            <div className='newLight'>
              <div className='mask'></div>
              <div className='btn'></div>
              <div className='btnLight'></div>
              <div className='btnText'>{config.sec11.pointb}</div>
              <div className='lineb'></div>
            </div>
          </div>
          <div className='BoxC'>
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
