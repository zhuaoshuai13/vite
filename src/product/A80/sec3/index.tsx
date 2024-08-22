import { useRef, useState, useEffect } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec3 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: ComponentType) => {
  const group = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const load = UseObservable(ref)
  const [index, setIndex] = useState<number>(1)
  const [clickPosition, setClickPosition] = useState<number>(0)
  // 记录时间戳
  const [time, setTime] = useState<number>(0)
  useGSAP(
    () => {
      if (container.current && group.current) {
        if (responsive?.md) {
          const { width: domWidth } = group.current.getBoundingClientRect()
          const windowWdith = Number(window.innerWidth)
          const dis = domWidth - windowWdith
          let pinD = 0

          // 当前高度
          const hei = window.innerHeight
          // 容器需要的高度
          const domH = (1382 / 2560) * window.innerWidth
          // 内部高度
          const domIH = (822 / 2560) * window.innerWidth
          //
          const pt = (280 / 2560) * window.innerWidth

          // 容器大于当前高度 顶部定屏
          if (domH > hei) {
            pinD = pt - 54 - (hei - 54 - domIH) / 2
          }

          const tl = gsap.timeline()

          tl.to(".sec3 .group", {
            x: -dis,
          })

          ScrollTrigger.create({
            trigger: ".sec3",
            start: `top top-=${pinD}`,
            end: `+=${window.innerHeight * 2}`,
            animation: tl,
            scrub: true,
            pin: true,
          })
        }
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )

  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })

  // const fa = contextSafe(() => {
  //   gsap.to(window, {
  //     duration: 0,
  //     immediateRender: false,
  //     scrollTo: { y: ".sec4", offsetY: 50 },
  //   })
  // })
  // const fb = contextSafe(() => {
  //   // gsap.to(window, {
  //   //   duration: 0,
  //   //   scrollTo: { y: ".secAdd", offsetY: 50 },
  //   // })
  //   document.querySelector(".secAdd")?.scrollIntoView({ behavior: "auto" })
  // })
  // const fc = contextSafe(() => {
  //   gsap.to(window, {
  //     duration: 0,
  //     scrollTo: { y: ".sec13", offsetY: 50 },
  //   })
  // })
  // const fd = contextSafe(() => {
  //   gsap.to(window, {
  //     duration: 0,
  //     scrollTo: { y: ".sec16", offsetY: 50 },
  //   })
  // })

  // const fe = contextSafe(() => {
  //   gsap.to(window, {
  //     duration: 0,
  //     scrollTo: { y: ".sec19", offsetY: 50 },
  //   })
  // })

  // const ff = contextSafe(() => {
  //   gsap.to(window, {
  //     duration: 0,
  //     scrollTo: { y: ".sec21", offsetY: 50 },
  //   })
  // })
  const btnClick = contextSafe((where: string) => {
    // gap
    const gap = (16 / 750) * window.innerWidth
    // width
    const width = (480 / 750) * window.innerWidth

    // pl
    const pl = (34 / 750) * window.innerWidth
    if (where === "next") {
      if (index === 6) {
        return
      }
      if (index === 1) {
        gsap.to(".sec3 .group", {
          x: -(width + pl),
        })
      } else if (index === 5) {
        const total = width + width + gap + gap + pl
        gsap.to(".sec3 .group", {
          x: -(
            (width + gap) * (index - 2) +
            (width + pl) +
            (total - window.innerWidth)
          ),
        })
      } else {
        gsap.to(".sec3 .group", {
          x: -((width + gap) * (index - 1) + (width + pl)),
        })
      }

      setIndex(index + 1)
    }

    if (where === "prev") {
      if (index === 1) {
        return
      }

      if (index === 2) {
        gsap.to(".sec3 .group", {
          x: 0,
        })
      } else {
        gsap.to(".sec3 .group", {
          x: -((width + gap) * (index - 2) + gap),
        })
      }
      setIndex(index - 1)
    }
  })

  const touchStarts = (e: any) => {
    const touch = e.touches[0]
    const dom = e.currentTarget
    const touchX = touch.clientX - dom.getBoundingClientRect().left
    setClickPosition(Number(touchX.toFixed(0)))
    setTime(Date.now())
  }

  const touchEndes = (e: any) => {
    const cpt = (num: number) => {
      return Math.floor((num / 750) * window.innerWidth)
    }
    const dom = e.currentTarget
    // const touch = e.changedTouches[0]
    // 获取当前group的transformX
    let transform = "matrix(1, 0, 0, 1, -0, 0)"
    const regex =
      /matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), ([^,]+), ([^,]+)\)/
    if (getComputedStyle(dom).transform !== "none") {
      transform = getComputedStyle(dom)?.transform
    }
    const matches = transform.match(regex)!
    const translateX = Number(parseFloat(matches[5]).toFixed(0))
    const arr = [0, cpt(514), cpt(1010), cpt(1506), cpt(2002), cpt(2278)]

    let min = 99999
    let idx = 0
    if (Math.abs(translateX) == arr[index - 1]) {
      return
    }
    if (Date.now() - time < 300) {
      if (Math.abs(translateX) < arr[index - 1]) {
        let acc = index - 1
        if (acc <= 0) {
          acc = 1
        }
        gsap.to(dom, {
          x: -arr[acc - 1],
          duration: 0.5,
        })

        setIndex(acc)
      } else {
        let acc = index + 1
        if (acc >= 6) {
          acc = 6
        }
        gsap.to(dom, {
          x: -arr[acc - 1],
          duration: 0.5,
        })

        setIndex(acc)
      }

      return
    }

    arr.forEach((item, index) => {
      if (item - Math.abs(translateX) < min) {
        min = Math.abs(item - Math.abs(translateX))
        idx = index
      }
    })
    gsap.to(dom, {
      x: -arr[idx],
      duration: 0.5,
    })
    setIndex(idx + 1)
  }

  const handleTouchMove = (e: any) => {
    const touch = e.touches[0]
    const dom = e.currentTarget
    // 获取当前group的transformX
    let transform = "matrix(1, 0, 0, 1, -0, 0)"
    const regex =
      /matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), ([^,]+), ([^,]+)\)/
    if (getComputedStyle(dom).transform !== "none") {
      transform = getComputedStyle(dom)?.transform
    }
    const matches = transform.match(regex)!
    const translateX = Number(parseFloat(matches[5]))

    // 点击时X轴的位置
    const touchX = Math.floor(touch.clientX - dom.getBoundingClientRect().left)
    // 移动距离
    const move = clickPosition - touchX
    // 最终位移
    let end = translateX - move
    if (end > 0) {
      end = 0
    }
    // if (end < (0 - 1678 / 750) * window.innerWidth) {
    //   end = (0 - 1678 / 750) * window.innerWidth
    // }
    gsap.to(dom, {
      transform: `matrix(1, 0, 0, 1, ${end}, 0)`,
    })
  }

  useEffect(() => {
    const handleTouchStart = (e: any) => {
      if (e.target.closest(".bigTouch")) {
        console.log(e.target)
        if (e.target.className === "alink") {
          return
        } else {
          e.preventDefault()
        }
      }
    }

    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    })

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
    }
  }, [])

  return (
    <section ref={ref} className={`imgLoad${load}`}>
      <div className='sec3'>
        <div className='wrapper'>
          <div
            className='group bigTouch'
            ref={group}
            // onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={touchStarts}
            onTouchEnd={touchEndes}
          >
            <div className='box f1'>
              <div className='text'>{config.sec3.f1}</div>
              <div className='icon'>
                <a href='#sec4Id' className='alink'></a>
              </div>
            </div>
            <div className='box f2'>
              <div className='text'>{config.sec3.f2}</div>
              <div className='icon'>
                <a href='#secAddId' className='alink'></a>
              </div>
            </div>
            <div className='box f3'>
              <div className='text'>{config.sec3.f3}</div>
              <div className='icon'>
                <a href='#sec13Id' className='alink'></a>
              </div>
            </div>
            <div className='box f4'>
              <div className='text'>{config.sec3.f4}</div>
              <div className='icon'>
                <a href='#sec16Id' className='alink'></a>
              </div>
            </div>
            <div className='box f5'>
              <div className='text'>{config.sec3.f5}</div>
              <div className='icon'>
                <a href='#sec19Id' className='alink'></a>
              </div>
            </div>
            <div className='box f6'>
              <div className='text'>{config.sec3.f6}</div>
              <div className='icon'>
                <a href='#sec21Id' className='alink'></a>
              </div>
            </div>
          </div>
          <div className='btn mb'>
            <div
              className={`left ${index === 1 && "dis"}`}
              onClick={() => {
                btnClick("prev")
              }}
            ></div>
            <div
              className={`right ${index === 6 && "dis"}`}
              onClick={() => {
                btnClick("next")
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec3
