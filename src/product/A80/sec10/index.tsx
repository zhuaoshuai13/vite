import { useRef, useState, useEffect } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec10 = ({
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
  const [index, setIndex] = useState<number>(1)
  const [clickPosition, setClickPosition] = useState<number>(0)
  const [time, setTime] = useState<number>(0)

  useGSAP(
    () => {
      if (container.current) {
        if (responsive?.md) {
          const winWidth = window.innerWidth
          const winHeight = window.innerHeight - 54
          const nav = 54

          const computenum = (num: number) => {
            return (num / 2560) * winWidth
          }

          // 占据的高度
          const domH = computenum(1164)

          let dis = 0

          if (winHeight > domH) {
            // 空间足够 居中
            dis = computenum(420) - nav - (winHeight - domH) / 2
          } else {
            dis = computenum(420) - nav
          }

          // const dis = computenum(420) - nav

          const h1 = container.current
            .querySelector(".subInfo")
            ?.getBoundingClientRect().height

          gsap.from(".sec10 .title", {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec10 .subInfo",
              start: `top bottom-=${h1}`,
              toggleActions: "restart none none reverse",
            },
          })

          const tl = gsap.timeline()
          tl.to(".sec10 .inner", { x: -computenum(621) }, "a")
          tl.to(
            ".sec10 .box1 .img",
            {
              width: computenum(607),
              height: computenum(453),
              opacity: 0.5,
              ease: "none",
            },
            "a"
          )

          tl.to(
            ".sec10 .box1",
            {
              opacity: 0.5,
              ease: "none",
            },
            "a"
          )
          tl.to(
            ".sec10 .box2 .img",
            {
              width: computenum(495),
              height: computenum(667),
              opacity: 1,
              ease: "none",
            },
            "a"
          )
          tl.from(
            ".sec10 .box2 ",
            {
              opacity: 0.5,
              ease: "none",
            },
            "a"
          )
          tl.to(".sec10 .inner", { x: -computenum(971), ease: "none" }, "b")
          tl.to(
            ".sec10 .box2 .img",
            {
              width: computenum(336),
              height: computenum(453),
              opacity: 0.5,
              ease: "none",
            },
            "b"
          )

          tl.to(
            ".sec10 .box2 ",
            {
              opacity: 0.5,
              ease: "none",
            },
            "b"
          )
          tl.to(
            ".sec10 .box3 .img",
            {
              width: computenum(890),
              height: computenum(667),
              opacity: 1,
              ease: "none",
            },
            "b"
          )

          tl.from(
            ".sec10 .box3",
            {
              opacity: 0.5,
              ease: "none",
            },
            "b"
          )
          tl.to(".sec10 .inner", { x: -computenum(1592), ease: "none" }, "c")
          tl.to(
            ".sec10 .box3 .img",
            {
              width: computenum(607),
              height: computenum(453),
              opacity: 0.5,
              ease: "none",
            },
            "c"
          )
          tl.to(
            ".sec10 .box3",
            {
              opacity: 0.5,
              ease: "none",
            },
            "c"
          )
          tl.to(
            ".sec10 .box4 .img",
            {
              width: computenum(495),
              height: computenum(667),
              opacity: 1,
              ease: "none",
            },
            "c"
          )
          tl.from(
            ".sec10 .box4",
            {
              opacity: 0.5,
              ease: "none",
            },
            "c"
          )
          tl.to(".sec10 .inner", { x: -computenum(1942), ease: "none" }, "d")
          tl.to(
            ".sec10 .box4 .img",
            {
              width: computenum(336),
              height: computenum(453),
              opacity: 0.5,
              ease: "none",
            },
            "d"
          )
          tl.to(
            ".sec10 .box4",
            {
              opacity: 0.5,
              ease: "none",
            },
            "d"
          )
          tl.to(
            ".sec10 .box5 .img",
            {
              width: computenum(894),
              height: computenum(667),
              opacity: 1,
              ease: "none",
            },
            "d"
          )
          tl.from(
            ".sec10 .box5",
            {
              opacity: 0.5,
              ease: "none",
            },
            "d"
          )
          tl.to(".sec10 .inner", { x: -computenum(2563), ease: "none" }, "e")
          tl.to(
            ".sec10 .box5 .img",
            {
              width: computenum(607),
              height: computenum(453),
              opacity: 0.5,
              ease: "none",
            },
            "e"
          )
          tl.to(
            ".sec10 .box5",
            {
              opacity: 0.5,
              ease: "none",
            },
            "e"
          )
          tl.to(
            ".sec10 .box6 .img",
            {
              width: computenum(494),
              height: computenum(667),
              opacity: 1,
              ease: "none",
            },
            "e"
          )

          tl.from(
            ".sec10 .box6",
            {
              opacity: 0.5,
              ease: "none",
            },
            "e"
          )

          ScrollTrigger.create({
            trigger: ".sec10",
            start: `top top-=${dis}`,
            end: `+=${computenum(2563) * 2}`,
            scrub: true,
            animation: tl,
            pin: true,
          })
        } else {
          gsap.from(".sec10 .title", {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec10 .subInfo",
              start: `bottom bottom`,
              toggleActions: "restart none none reverse",
            },
          })
        }
        return
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )

  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })

  const btnClick = contextSafe((where: string) => {
    // gap
    const gap = (16 / 750) * window.innerWidth
    // width
    const width = (334 / 750) * window.innerWidth
    // pl
    const pl = (34 / 750) * window.innerWidth
    // fir
    const fir = (176 / 750) * window.innerWidth
    if (where === "next") {
      if (index === 6) {
        return
      }
      if (index === 1) {
        gsap.to(".sec10 .inner", {
          x: -fir,
        })
      } else if (index === 5) {
        const total = width + width + gap + gap + pl
        gsap.to(".sec10 .inner", {
          x: -(
            (width + gap) * (index - 2) +
            (width + pl) +
            (total - window.innerWidth)
          ),
        })
      } else {
        gsap.to(".sec10 .inner", {
          x: -((width + gap) * (index - 1) + fir),
        })
      }

      setIndex(index + 1)
    }

    if (where === "prev") {
      if (index === 1) {
        return
      }

      if (index === 2) {
        gsap.to(".sec10 .inner", {
          x: 0,
        })
      } else {
        gsap.to(".sec10 .inner", {
          x: -((width + gap) * (index - 3) + fir),
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
    const dom = e.currentTarget
    // 获取当前group的transformX
    let transform = "matrix(1, 0, 0, 1, -0, 0)"
    const regex =
      /matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), ([^,]+), ([^,]+)\)/
    if (getComputedStyle(dom).transform !== "none") {
      transform = getComputedStyle(dom)?.transform
    }
    const matches = transform.match(regex)!
    const translateX = Number(parseFloat(matches[5]).toFixed(0))
    const cpt = (num: number) => {
      return Math.floor((num / 750) * window.innerWidth)
    }
    const arr = [0, cpt(176), cpt(526), cpt(876), cpt(1226), cpt(1402)]

    if (Date.now() - time < 300) {
      if (Math.abs(translateX) <= arr[index - 1]) {
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

    let min = 99999
    let idx = 0
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

    gsap.to(dom, {
      transform: `matrix(1, 0, 0, 1, ${end}, 0)`,
    })
  }

  useEffect(() => {
    const handleTouchStart = (e: any) => {
      if (e.target.closest(".bigTouchs")) {
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

  return (
    <section ref={ref} className={`imgLoad${load}`}>
      <div className='sec10'>
        <div
          className='subTitle title'
          dangerouslySetInnerHTML={{ __html: config.sec10.title }}
        ></div>
        <div
          className='subInfo title'
          dangerouslySetInnerHTML={{ __html: config.sec10.info }}
        ></div>
        <div className='imgGroup'>
          <div
            className='inner bigTouchs'
            onTouchMove={handleTouchMove}
            onTouchStart={touchStarts}
            onTouchEnd={touchEndes}
          >
            <div className={`box box1 ${index === 1 ? "active" : ""}`}>
              <div className='img'></div>
              <div className='bot'>
                <div className='icon'></div>
                <div className='name'>{config.sec10.portraits}</div>
              </div>
            </div>
            <div className={`box box2 ${index === 2 ? "active" : ""}`}>
              <div className='img'></div>
              <div className='bot'>
                <div className='icon'></div>
                <div className='name'>{config.sec10.bulidings}</div>
              </div>
            </div>
            <div className={`box box3 ${index === 3 ? "active" : ""}`}>
              <div className='img'></div>
              <div className='bot'>
                <div className='icon'></div>
                <div className='name'>{config.sec10.sky}</div>
              </div>
            </div>
            <div className={`box box4 ${index === 4 ? "active" : ""}`}>
              <div className='img'></div>
              <div className='bot'>
                <div className='icon'></div>
                <div className='name'>{config.sec10.beach}</div>
              </div>
            </div>
            <div className={`box box5 ${index === 5 ? "active" : ""}`}>
              <div className='img'></div>
              <div className='bot'>
                <div className='icon'></div>
                <div className='name'>{config.sec10.food}</div>
              </div>
            </div>
            <div className={`box box6 ${index === 6 ? "active" : ""}`}>
              <div className='img'></div>
              <div className='bot'>
                <div className='icon'></div>
                <div className='name'>{config.sec10.pets}</div>
              </div>
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
    </section>
  )
}
export default Sec10
