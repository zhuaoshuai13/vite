import { useRef, useState } from "react"

import { Shrink } from "../components/shrink"
import Title from "../components/title"
import "./index.scss"
import { ComponentType } from "../type"
const SecZoom = ({
  useGSAP,
  gsap,
  config,
  UseObservable,
  responsive,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(100)
  const load = UseObservable(container)

  const handleMouseMove = (e: any) => {
    // 获取 div 的顶部位置
    if (e.target) {
      const dom = e.target as Element

      // 获取鼠标相对于 div 顶部的距离
      const mouseY = e.clientY - dom.getBoundingClientRect().top

      setDistance(mouseY)
    }

    // 更新状态
    // setDistance(mouseY);
  }

  useGSAP(
    () => {
      if (container.current) {
        gsap.from(".info", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secZoomText",
            start: "top bottom-=100",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".right", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secZoomText",
            start: "top bottom-=100",
            end: "+=200",
            scrub: 0.5,
          },
        })

        gsap.from(".lineBox", {
          top: "100%",
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secZoomWrapper",
            start: `${responsive?.md ? "top top+=200" : "top top+=300"}`,
            end: "+=100",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".big", {
          clipPath: "inset(100% 0 0 0 )",
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secZoomWrapper",
            start: `${responsive?.md ? "top top+=200" : "top top+=300"}`,
            end: "+=100",
            toggleActions: "restart none none reverse",
          },
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )

  return (
    <div className={`secZoom imgLoad${load}`} ref={container}>
      <div className='secZoomWrapper'>
        <div className='content'>
          <div className='left'>
            <Title>
              <div dangerouslySetInnerHTML={{ __html: config.sec16.title }} />
            </Title>
            <div className='secZoomText'>
              <div className='info'>
                {config.sec16.info} <Shrink />
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='inner'>
              <div className='in'>
                <div className='bigTouch' onMouseMove={handleMouseMove}></div>
                <div
                  className='big'
                  style={{
                    clipPath: `inset(${distance}px 0 0 0)`,
                  }}
                ></div>
                <div className='small'></div>
                <div
                  className='lineBox'
                  style={{
                    top: `${distance}px`,
                  }}
                >
                  <div className='line'>
                    <div className='lineText'>10X</div>
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

export default SecZoom
