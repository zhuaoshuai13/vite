import { useRef, useState, useEffect } from "react"

import { Shrink } from "../components/shrink"
import Title from "../components/title"
import "./index.scss"
import { ComponentType } from "../type"
const SecFlex = ({
  useGSAP,
  gsap,
  config,
  UseObservable,
  responsive,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(1)
  const load = UseObservable(container)

  useEffect(() => {
    setTimeout(() => {
      if (activeIndex === 6) {
        setActiveIndex(1)
      } else {
        setActiveIndex(activeIndex + 1)
      }
    }, 2000)
  }, [activeIndex]) // 确保只在组件挂载时调用一次

  useGSAP(
    () => {
      gsap.from(".secFlexTitle", {
        y: 60,
        opacity: 0,
        ease: "slow(0.5, 0.8)",
        scrollTrigger: {
          trigger: ".secFlexText",
          start: "top bottom-=150",
          end: "+=200",
          toggleActions: "restart none none reverse",
        },
      })

      gsap.from(".secFlexIcona", {
        y: 70,
        opacity: 0,
        ease: "slow(0.5, 0.8)",
        scrollTrigger: {
          trigger: ".secFlexIconBox",
          start: "top bottom-=100",
          end: "+=200",
          toggleActions: "restart none none reverse",
        },
      })

      gsap.from(".secFlexIconb", {
        y: 80,
        opacity: 0,
        ease: "slow(0.5, 0.8)",
        scrollTrigger: {
          trigger: ".secFlexIconBox",
          start: "top bottom-=110",
          end: "+=200",
          toggleActions: "restart none none reverse",
        },
      })
      gsap.from(".secFlexIconc", {
        y: 90,
        opacity: 0,
        ease: "slow(0.5, 0.8)",
        scrollTrigger: {
          trigger: ".secFlexIconBox",
          start: "top bottom-=120",
          end: "+=200",
          toggleActions: "restart none none reverse",
        },
      })
      gsap.from(".secFlexIcond", {
        y: 100,
        opacity: 0,
        ease: "slow(0.5, 0.8)",
        scrollTrigger: {
          trigger: ".secFlexIconBox",
          start: "top bottom-=130",
          end: "+=200",
          toggleActions: "restart none none reverse",
        },
      })
      gsap.from(".secFlexIcone", {
        y: 110,
        opacity: 0,
        ease: "slow(0.5, 0.8)",
        scrollTrigger: {
          trigger: ".secFlexIconBox",
          start: "top bottom-=140",
          end: "+=200",
          toggleActions: "restart none none reverse",
        },
      })
      gsap.from(".secFlexIconf", {
        y: 120,
        opacity: 0,
        ease: "slow(0.5, 0.8)",
        onComplete: () => {
          //   a()
        },
        scrollTrigger: {
          trigger: ".secFlexIconBox",
          start: "top bottom-=150",
          end: "+=200",
          toggleActions: "restart none none reverse",
        },
      })

      gsap.from(".phoneBox", {
        y: 120,

        ease: "slow(0.5, 0.8)",
        scrollTrigger: {
          trigger: ".secFlexIconBox",
          start: "top bottom",
          end: "+=300",
          scrub: true,
        },
      })
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className={`secFlex imgLoad${load}`} ref={container}>
      <div className='secFlexWrapper'>
        <Title>
          <div>{config.sec13.title}</div>
        </Title>

        <div className='secFlexText'>
          <div className='secFlexTitle'>
            {config.sec13.info}
            <Shrink />
          </div>
        </div>
        <div className='secFlexIconBox'>
          <div className='secFlexIcona'>
            <div className={`secFlexIcon ${activeIndex === 1 ? "active" : ""}`}>
              <div className='camer'></div>
            </div>
          </div>

          <div className='secFlexIconb'>
            <div className={`secFlexIcon ${activeIndex === 2 ? "active" : ""}`}>
              <div className='scand'></div>
            </div>
          </div>

          <div className='secFlexIconc'>
            <div className={`secFlexIcon ${activeIndex === 3 ? "active" : ""}`}>
              <div className='game'></div>
            </div>
          </div>
          <div className='secFlexIcond'>
            <div className={`secFlexIcon ${activeIndex === 4 ? "active" : ""}`}>
              <div className='light'></div>
            </div>
          </div>
          <div className='secFlexIcone'>
            <div className={`secFlexIcon ${activeIndex === 5 ? "active" : ""}`}>
              <div className='fly'></div>
            </div>
          </div>
          <div className='secFlexIconf'>
            <div className={`secFlexIcon ${activeIndex === 6 ? "active" : ""}`}>
              <div className='photo'></div>
            </div>
          </div>
        </div>

        <div className='phoneBox'>
          <div className='phone'></div>
          <div className='circleBOx'></div>
          <div className='circle'>
            <div className='circleIn'>
              <div className='f1'></div>
              <div className='f2'></div>
              <div className='f3'></div>
              <div className='f4'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecFlex
