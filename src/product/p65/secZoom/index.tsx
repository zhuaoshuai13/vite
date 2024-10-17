import { useRef, useState, useEffect } from "react"

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
  const [per, setPer] = useState(100)
  const load = UseObservable(container)

  // const handleMouseMove = (e: any) => {
  //   // 获取 div 的顶部位置
  //   if (e.target) {
  //     const dom = e.target as Element

  //     // 获取鼠标相对于 div 顶部的距离
  //     const mouseY = e.clientY - dom.getBoundingClientRect().top
  //     // 容器高度
  //     const hei =
  //       dom.getBoundingClientRect().bottom - dom.getBoundingClientRect().top

  //     const percent = Math.floor((2 - mouseY / hei) * 100)
  //     setPer(percent)

  //     setDistance(mouseY)
  //   }
  // }
  // const handleTouchMove = (e: any) => {
  //   // e.preventDefault() // 阻止默认的滚动行为
  //   // document.body.style.overflow = "hidden"
  //   const touch = e.touches[0]
  //   const dom = e.target

  //   const touchY = touch.clientY - dom.getBoundingClientRect().top
  //   const hei = dom.getBoundingClientRect().height

  //   const percent = Math.floor((2 - touchY / hei) * 100)
  //   setPer(percent)
  //   setDistance(touchY)
  // }

  // const handleTouchStart = (e) => {
  //   if (e.target.closest(".bigTouch")) {
  //     document.body.style.overflow = "hidden"
  //   }
  // }

  // const handleTouchEnd = (e) => {
  //   if (e.target.closest(".bigTouch")) {
  //     document.body.style.overflow = ""
  //   }
  // }

  const handleMouseMove = (e: any) => {
    const dom = e.currentTarget

    const mouseY = e.clientY - dom.getBoundingClientRect().top
    const hei = dom.getBoundingClientRect().height

    const percent = Math.floor((2 - mouseY / hei) * 100)
    setPer(percent)
    setDistance(mouseY)
  }

  const handleTouchMove = (e: any) => {
    const touch = e.touches[0]
    const dom = e.currentTarget

    let touchY = touch.clientY - dom.getBoundingClientRect().top
    const hei = dom.getBoundingClientRect().height

    // 限制 mouseY 在 0 到 hei 之间
    if (touchY < 0) touchY = 0
    if (touchY > hei) touchY = hei

    const percent = Math.floor((2 - touchY / hei) * 100)
    setPer(percent)
    setDistance(touchY)
  }

  // const handleTouchStart = (e) => {
  //   // if (e.target.closest(".bigTouch")) {
  //   document.body.style.overflow = "hidden"
  //   // }
  // }

  useEffect(() => {
    const handleTouchStart = (e: any) => {
      if (e.target.closest(".bigTouch")) {
        e.preventDefault()
      }
    }

    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    })

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
    }
  }, [])

  useGSAP(
    () => {
      if (container.current) {
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
                <div
                  className='bigTouch'
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  // onTouchStart={handleTouchStart}
                  // onTouchEnd={handleTouchEnd}
                  // onTouchEnd={() => {
                  //   document.body.style.overflow = "auto"
                  // }}
                ></div>
                <div
                  className='big'
                  style={{
                    clipPath: `inset(${distance}px 0 0 0)`,
                  }}
                ></div>
                <div
                  className='small'
                  style={{
                    backgroundSize: `${per}% ${per}%`,
                  }}
                ></div>
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
