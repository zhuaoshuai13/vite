/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject } from "react"
import { MutableRefObject } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap-trial/TextPlugin"
import { ScrollToPlugin } from "gsap-trial/ScrollToPlugin"

import UseResponse from "../../hooks/useResponse"

interface AniType {
  trigger: string
  animation: gsap.core.Timeline
  start?: number
  end?: number
  scrub?: boolean
  pin?: boolean
  anticipatePin?: number
  toggleActions?: boolean
}

import { useCountUp } from "react-countup"

const pxToVw = (num: number) => {
  const res = (num * 1) / 25.6
  return `${res}vw`
}
const FirstPcTs = (
  total: string | object | undefined,
  ca: MutableRefObject<null>,
  countUpRef1: MutableRefObject<null>,
  countUpRef2: MutableRefObject<null>,
  countUpRef3: MutableRefObject<null>,
  countUpRef4: MutableRefObject<null>,
  videoRef: MutableRefObject<null>,
  ca2: MutableRefObject<null>,
  playRef1: RefObject<HTMLVideoElement>,
  btnRefPc: RefObject<HTMLDivElement>
) => {
  const { responsive } = UseResponse()
  if (responsive?.md !== undefined) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin)
  }

  const { update: firstUpDate } = useCountUp({
    ref: countUpRef1,
    start: 0,
    end: 0,
    duration: 2,
  })

  const { update: secondUpDate } = useCountUp({
    ref: countUpRef2,
    start: 0,
    end: 0,
    duration: 2,
  })

  const { update: thirdUpDate } = useCountUp({
    ref: countUpRef3,
    start: 0,
    end: 0,
    duration: 2,
  })

  const { update: fourUpDate } = useCountUp({
    ref: countUpRef4,
    start: 0,
    end: 0,
    duration: 2,
  })

  /**
   *
   * @param trigger 触发的元素
   * @param animation 动画
   * @param start 开始位置
   * @param end 结束位置 0为一屏 1为2屏,越大,定屏时间越久
   * @param scrub 元素是否根据滚动条滚动而运动
   * @param pin 是否定屏
   * @param anticipatePin 定屏的延时
   * @param toggleActions
   * @returns
   */
  const setAni = ({
    trigger,
    animation,
    start = 0,
    end = 0,
    scrub = false,
    pin = false,
    anticipatePin,
    toggleActions = false,
  }: AniType) => {
    return ScrollTrigger.create({
      trigger: trigger,
      start: `top ${start * 100}%`,
      end: `bottom -${end * 100}%`,
      scrub: scrub,
      pin: pin,
      animation: animation,
      anticipatePin: anticipatePin,
      toggleActions: !toggleActions
        ? "play none none none"
        : "restart none none reverse",
    })
  }

  const textHover = (className: Array<string>) => {
    const func = (cla: string) => {
      const ctx = gsap.context((self) => {
        const wrap = self?.selector?.(cla) ?? []
        const textAni = self?.selector?.(`${cla} .textAni`) ?? []

        textAni.forEach((box: string, index: number) => {
          gsap.from(box, {
            opacity: 0,
            y: "100px",
            duration: 1,
            ease: "power2.out",
            delay: index * 0.2,

            scrollTrigger: {
              trigger: wrap[0],
              start: "top 30%",
              toggleActions: "restart none none reverse",
            },
          })
        })
      }, total)
      return () => ctx.revert() // <- Cleanup!
    }
    className.forEach(
      (cla) => func(cla)

      // <- Scope!
    )
  }

  const sec4FirstAni = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec4First .roboat", 1, { x: 100 }, "a")
        .from(".sec4First .roboat", 0.3, { opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec4First",
        start: `top 30%`,
        animation: tl,
        // scrub: true,
        toggleActions: "restart none none reverse",
        toggleClass: "active",
      })

      const tl2 = gsap
        .timeline()
        .from(".sec4First .bg", 1, { opacity: 0, y: 100 })

      ScrollTrigger.create({
        trigger: ".sec4First",
        start: `top 60%`,
        animation: tl2,
        // scrub: true,
        toggleActions: "restart none none reverse",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec7Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec7 .roboat", 1, { opacity: 0, x: 100 })

      ScrollTrigger.create({
        trigger: ".sec7",
        start: `top 30%`,
        animation: tl,
        // scrub: true,
        toggleActions: "restart none none reverse",
        toggleClass: "active",
      })
      const tl2 = gsap
        .timeline()
        .from(".sec7 .bg", 1, { y: 100 }, "a")
        .from(".sec7 .bg", 0.3, { opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec7",
        start: `top 60%`,
        animation: tl2,
        // scrub: true,
        toggleActions: "restart none none reverse",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec10Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec10 .roboat", 1, { opacity: 0, x: 100 })

      ScrollTrigger.create({
        trigger: ".sec10",
        start: `top 30%`,
        animation: tl,
        // scrub: true,
        toggleActions: "restart none none reverse",
        toggleClass: "active",
      })

      const tl2 = gsap
        .timeline()
        .from(".sec10 .bg", 1, { y: 100 }, "a")
        .from(".sec10 .bg", 0.3, { opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec10",
        start: `top 60%`,
        animation: tl2,
        // scrub: true,
        toggleActions: "restart none none reverse",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }
  const sec16Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec16 .roboat", 1, { opacity: 0, x: 100 })

      ScrollTrigger.create({
        trigger: ".sec16",
        start: `top 30%`,
        animation: tl,
        // scrub: true,
        toggleActions: "restart none none reverse",
        toggleClass: "active",
      })

      const tl2 = gsap
        .timeline()
        .from(".sec16 .bg", 1, { y: 100 }, "a")
        .from(".sec16 .bg", 0.3, { opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec16",
        start: `top 60%`,
        animation: tl2,
        // scrub: true,
        toggleActions: "restart none none reverse",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec20Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".sec20 .fb", 1, { clipPath: `inset(0% 0 0)` }, "a")
        .to(".sec20 .fc", 1, { clipPath: `inset(0% 0 0)` }, "b")
        .to(".sec20 .fd", 1, { clipPath: `inset(0% 0 0)` }, "c")

      ScrollTrigger.create({
        trigger: ".sec20",
        start: `top 0`,
        end: "+=300%",
        animation: tl,
        scrub: true,
        pin: true,
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec22Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      ScrollTrigger.create({
        trigger: ".sec22",
        start: `top 30%`,
        animation: tl,
        // scrub: true,
        toggleActions: "restart none none reverse",
        toggleClass: "active",
      })

      const tl2 = gsap
        .timeline()
        .from(".sec22 .bg", 1, { y: 100 }, "a")
        .from(".sec22 .bg", 0.3, { opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec22",
        start: `top 60%`,
        animation: tl2,
        // scrub: true,
        toggleActions: "restart none none reverse",
      })

      const tl3 = gsap.timeline().from(".sec22 .log", 1, { opacity: 0, x: 100 })

      ScrollTrigger.create({
        trigger: ".sec22",
        start: `top 30%`,
        animation: tl3,
        // scrub: true,
        toggleActions: "restart none none reverse",
        toggleClass: "active",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const secgroupAAni = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec5", 0.5, { opacity: 0, ease: "none" }, "a")
        .from(".sec5", 1, { y: pxToVw(100), ease: "none" }, "a")

      ScrollTrigger.create({
        trigger: ".sec5",
        start: `top 80%`,
        // end: "+=80%",
        // scrub: true,
        animation: tl,
        anticipatePin: 0,
        toggleActions: "restart none none reverse",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec2Ani = () => {
    const ctx = gsap.context((self) => {
      const item = self?.selector?.(".sec2 .out") ?? []
      item.forEach((box: string, index: number) => {
        gsap.from(box, {
          opacity: 0,
          x: "100",
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: ".sec2",
            start: "top 50%",
            toggleActions: "restart none none reverse",
          },
        })
      })
      // const tl = gsap.timeline().from(".sec2 .group", 1, { opacity: 0 }, "a")

      // ScrollTrigger.create({
      //   trigger: ".sec2",
      //   start: `top 50%`,
      //   animation: tl,
      //   anticipatePin: 1,
      //   toggleActions: "restart none none reverse",
      // })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const groupTop = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".groupTop .sec1", 1, { top: "-50%", ease: "none" }, "a")
        .to(".groupTop .sec2", 1, { top: 0, ease: "none" }, "a")

      setAni({
        trigger: ".groupTop",
        animation: tl,
        start: 0,
        pin: true,
        scrub: true,
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const groupB = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(
          ".sec8 .bg",
          0.3,
          { y: pxToVw(100), opacity: 0, ease: "none" },
          "a"
        )
      ScrollTrigger.create({
        trigger: ".sec8",
        start: `top 70%`,
        end: "+=80%",
        // scrub: true,
        // pin: pin,
        animation: tl,
        anticipatePin: 0,
        toggleActions: "restart none none reverse",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const groupC = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec11", 0.3, { opacity: 0, ease: "none" }, "a")
        .from(".sec11", 1, { y: pxToVw(100), ease: "none" }, "a")

      ScrollTrigger.create({
        trigger: ".sec11",
        start: `top 80%`,
        // end: "+=80%",
        animation: tl,
        anticipatePin: 0,
        toggleActions: "restart none none reverse",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const groupD = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec17 .bg", 1, { y: pxToVw(100) }, "a")
        .from(".sec17 .bg", 0.3, { opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec17",
        start: `top 80%`,
        toggleActions: "restart none none reverse",
        // end: "+=80%",
        // scrub: true,
        animation: tl,
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec17Ani = () => {
    const ctx = gsap.context(() => {
      const tl2 = gsap
        .timeline()
        .to(".sec17", 0.2, { opacity: 1, ease: "none" }, "m")
        .to(".sec17 .phone", 3, { scale: 30, ease: "none" }, "a")
        .to(".sec17 .group", 0.1, { opacity: 0, ease: "none" }, "a")
        .to(".sec17 .img", 1, { opacity: 0, ease: "none" }, "a")
        .to(".sec17 .phone", 3, { x: "1000%", ease: "none" }, "a")
        .to(".sec17 .phone", 3, { y: "750%", ease: "none" }, "a")
        .to(".sec17 .phone", 3, { opacity: 0, ease: "none" }, "a")
        .from(".sec17 .bigImg", 1, { opacity: 0, delay: 2, ease: "none" }, "a")

      ScrollTrigger.create({
        trigger: ".sec17",
        animation: tl2,
        start: "top 0%",
        end: "+=400%",
        pin: true,
        anticipatePin: 0,
        scrub: true,
      })
    })
    return () => ctx.revert() // <- Cleanup!
  }

  const otherAni = () => {
    const ctx = gsap.context(() => {
      const tl2 = gsap
        .timeline()
        .from(".sec5 .left", 1, { x: "-50%", opacity: 0 }, "a")
        .from(".sec5 .phone", 1, { x: "50%", opacity: 0 }, "a")
      // .from(".sec5 .phone", 1, { x: "-130%", opacity: 0 }, "a")

      setAni({
        trigger: ".sec5",
        animation: tl2,
        start: -0.1,
        toggleActions: true,
      })
    })
    return () => ctx.revert() // <- Cleanup!
  }

  const sec8Ani = () => {
    const ctxs = (ca2 as any).current.getContext("2d")
    ctxs.globalCompositeOperation = "copy"

    const imgs: HTMLImageElement[] = []
    const images = []

    for (let i = 0; i < 200; i++) {
      images.push(
        `${(window as any).povaCanvas.LH6N}/${i
          .toString()
          .padStart(3, "0")}.webp`
      )
    }

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      imgs.push(img)
    })
    const ani = (type: number) => {
      ctxs.drawImage(imgs[type], 0, 0)
    }

    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".sec8", 0.2, { opacity: 1 }, "mm")
        .from(".sec8 .box2 .title", 1, { opacity: 0, y: "100px" }, "a")
        .from(
          ".sec8 .box2 .img",
          1,
          { opacity: 0, y: "100px", delay: 0.2 },
          "a"
        )
        .from(
          ".sec8 .box2 .desc",
          1,
          { opacity: 0, y: "100px", delay: 0.4 },
          "a"
        )
        .from(
          ".sec8 .box2 .params",
          1,
          { opacity: 0, y: "100px", delay: 0.6 },
          "a"
        )
        .to(".sec8 .box2 .params", 1, { opacity: 0, y: "100px" }, "b")
        .to(".sec8 .box2 .desc", 1, { opacity: 0, y: "100px" }, "b")
        .to(".sec8 .box2 .img", 1, { opacity: 0, y: "100px" }, "b")
        .to(".sec8 .box2 .title", 1, { opacity: 0, y: "100px" }, "b")
        .to(".sec8", 1, { opacity: 1 }, "mm")
        .from(".sec8 .box1 .title", 1, { opacity: 0, y: "100px" }, "c")
        .from(".sec8 .box1 .f1", 1, { opacity: 0, y: "100px", delay: 0.2 }, "c")
        .from(
          ".sec8 .box1 .sub",
          1,
          { opacity: 0, y: "100px", delay: 0.4 },
          "c"
        )
        .from(".sec8 .box1 .f2", 1, { opacity: 0, y: "100px", delay: 0.6 }, "c")
        .from(
          ".sec8 .box1 .desc",
          1,
          { opacity: 0, y: "100px", delay: 0.8 },
          "c"
        )

      let isPlay = true

      ScrollTrigger.create({
        trigger: ".sec8",
        animation: tl,
        start: "top 0",
        scrub: true,
        pin: true,
        anticipatePin: 0,
        end: "=+400%",

        onUpdate: ({ progress }) => {
          if ((progress > 0.4 && progress < 0.6) || progress > 0.9) {
            isPlay = false
            if (progress > 0.4 && progress < 0.6) {
              ani(100)
            } else {
              ani(200)
            }
          } else {
            isPlay = true
          }

          // 是否可以播放
          if (isPlay) {
            // 播放第1段
            if (progress < 0.6) {
              const now = (progress * (100 / 0.4)).toFixed(0)
              ani(Number(now))
            } else {
              const now = ((progress - 0.6) * (100 / 0.3) + 100).toFixed(0)
              ani(Number(now))
            }
          }
        },
      })
    }, total)
    return () => ctx.revert() // <- Cleanup!
  }

  const sec9Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec9 .f2", { x: "-50%", opacity: 0, delay: 1 }, "a")

      setAni({
        trigger: ".sec9",
        animation: tl,
        start: 0.3,
        toggleActions: true,
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec12Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".sec12", 1.5, { opacity: 1 })
        .to(".sec12 .sub1", 1, { opacity: 0, y: 100 }, "a")
        .to(".sec12 .desc1", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec12 .sub2", 1, { opacity: 0, y: 100 }, "b")
        .from(".sec12 .desc2", 1, { opacity: 0, y: 100, delay: 0.4 }, "b")

      setAni({
        trigger: ".sec12",
        animation: tl,
        start: 0.01,
        pin: true,
        scrub: true,
      })

      const tl2 = gsap
        .timeline()
        .from(".sec12 .right", 1, { opacity: 0.5, x: "10%" })

      ScrollTrigger.create({
        animation: tl2,
        start: "top 30%",
        trigger: ".sec12",
        toggleActions: "restart none none reverse",
      })

      const tl3 = gsap
        .timeline()
        .from(".sec12 .bg", 0.8, { opacity: 1, y: 100 })

      ScrollTrigger.create({
        trigger: ".sec12",
        start: `top 100%`,
        animation: tl3,
        // scrub: true,
        toggleActions: "restart none none reverse",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec14Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec14 .right", 1, { x: "10%", opacity: 0.5 }, "a")

      setAni({
        trigger: ".sec14",
        animation: tl,
        start: 0.3,
        toggleActions: true,
      })

      const tl3 = gsap.timeline().from(".sec14 .bg", 0.8, { y: 100 })

      ScrollTrigger.create({
        trigger: ".sec14",
        start: `top 100%`,
        animation: tl3,
        // scrub: true,
        toggleActions: "restart none none reverse",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec15Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec15 .right", 1, { x: "10%", opacity: 0.5 }, "a")

      setAni({
        trigger: ".sec15",
        animation: tl,
        start: 0.3,
        toggleActions: true,
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec19Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().to(".sec19 video", 1, { scale: 1.5 }, "a")
      const tl2 = gsap.timeline().to(".sec19", 1, { opacity: 1 }, "a")

      ScrollTrigger.create({
        trigger: ".sec19",
        start: `top 0%`,
        end: "+=100",
        animation: tl,
        toggleActions: "restart none none reverse",
        scrub: true,
      })

      ScrollTrigger.create({
        trigger: ".sec19",
        start: `top 20%`,
        animation: tl2,

        onUpdate: ({ isActive }) => {
          if (isActive) {
            if (!videoRef.current) return
            ;(videoRef as any).current.play()
          }
        },
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec21Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".sec21 .img", 2, { x: "-90%", duration: 0.1 })

      ScrollTrigger.create({
        trigger: ".sec21",
        start: `top -10%`,
        end: "+=100%",
        scrub: true,
        pin: true,
        animation: tl,
        anticipatePin: 0,
      })

      const tl2 = gsap
        .timeline()
        .from(".sec21 .bg", 0.3, { opacity: 0 }, "a")
        .from(".sec21 .bg", 1, { y: 100 }, "a")

      ScrollTrigger.create({
        trigger: ".sec21",
        start: `top 60%`,
        animation: tl2,
        // scrub: true,
        toggleActions: "restart none none reverse",
      })
    }, total)
    return () => ctx.revert()
  }

  const sec23Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec23 .img3", 1, { scale: 1.5 }, "a")
        .from(".sec23 .img1", 1, { x: "-60%", opacity: 0 }, "a")
        .from(".sec23 .img2", 1, { x: "-30%", opacity: 0 }, "a")
        .from(".sec23 .img4", 1, { x: "30%", opacity: 0 }, "a")
        .from(".sec23 .img5", 1, { x: "60%", opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec23",
        animation: tl,
        start: "top 0%",
        toggleActions: "restart none none reverse",
      })

      const tl2 = gsap
        .timeline()
        .from(".sec23 .bg", 0.3, { opacity: 0 }, "a")
        .from(".sec23 .bg", 1, { y: 100 }, "a")

      ScrollTrigger.create({
        trigger: ".sec23",
        start: `top 60%`,
        animation: tl2,
        // scrub: true,
        toggleActions: "restart none none reverse",
      })
    }, total)
    return () => ctx.revert()
  }

  const numAdd = () => {
    let switchs = true
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".secPar .params", 1, { opacity: 0, x: "25%" })

      ScrollTrigger.create({
        animation: tl,
        trigger: ".secPar .params",
        start: "top 70%",
        toggleActions: "restart none none reverse",
        onUpdate: ({ isActive, direction }) => {
          if (direction === 1) {
            if (isActive) {
              if (switchs) {
                setTimeout(() => {
                  firstUpDate(25)
                  secondUpDate(30)
                }, 1000)
                switchs = false
              }
            }
          } else {
            if (!isActive) {
              firstUpDate(0)
              secondUpDate(0)
              switchs = true
            }
          }
        },
      })
    }, total)
    return () => ctx.revert()
  }

  const sec24Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().to(".sec24", 0.4, { opacity: 1 })
      let switchs = true

      ScrollTrigger.create({
        animation: tl,
        trigger: ".sec24",
        start: "top 30%",
        toggleActions: "restart none none reverse",
        onUpdate: ({ isActive, direction }) => {
          if (direction === 1) {
            if (isActive) {
              if (switchs) {
                setTimeout(() => {
                  thirdUpDate(25)
                  fourUpDate(25)
                }, 2000)
                switchs = false
              }
            }
          } else {
            if (!isActive) {
              thirdUpDate(0)
              fourUpDate(0)
              switchs = true
            }
          }
        },
      })
    }, total)
    return () => ctx.revert()
  }

  const sec25Ani = () => {
    const ctxs = (ca as any).current.getContext("2d")
    ctxs.globalCompositeOperation = "copy"

    const imgs: HTMLImageElement[] = []
    const images = []
    for (let i = 0; i < 75; i++) {
      images.push(`${(window as any).povaCanvas.engine}/${i + 100}.webp`)
    }

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      imgs.push(img)
    })
    const ani = (type: number) => {
      ctxs.drawImage(imgs[type], 0, 0)
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().to(".sec25 ", 1, { opacity: 1 })

      let now = 0
      let type = 0
      const time = 1 / images.length

      ScrollTrigger.create({
        trigger: ".sec25",
        animation: tl,
        start: "top 30%",
        end: "+=800",
        onUpdate: ({ progress, direction, isActive }) => {
          if (direction === 1) {
            if (progress > now) {
              now += time
              ani(type)
              if (type === images.length - 1) return
              type++
            }
            if (isActive === false) {
              now = 1
              type = images.length - 1
              ani(images.length - 1)
            }
          } else {
            if (progress < now) {
              now -= time
              ani(type)
              if (type === 0) return
              type--
            }
            if (isActive === false) {
              now = 0
              type = 0
              ani(0)
            }
          }
        },
      })
    }, total)

    const tl2 = gsap
      .timeline()
      .from(".sec25 .bg", 1, { y: 100 }, "a")
      .from(".sec25 .bg", 0.3, { opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec25",
      start: `top 60%`,
      animation: tl2,
      // scrub: true,
      toggleActions: "restart none none reverse",
    })
    return () => ctx.revert() // <- Cleanup!
  }

  const playPcClick = () => {
    if (playRef1.current) {
      playRef1.current.play()
    }
    if (btnRefPc.current) {
      btnRefPc.current.className = "play false"
    }
  }

  const videoClick = () => {
    playRef1?.current?.pause()

    if (btnRefPc.current) {
      btnRefPc.current.className = "play true"
    }
    // setPlayShow(true)
  }

  const test1 = () => {
    gsap.to(window, { duration: 2, scrollTo: "#sec4ID" })
  }

  const test2 = () => {
    gsap.to(window, { duration: 2, scrollTo: "#sec7ID" })
  }

  const test3 = () => {
    gsap.to(window, { duration: 2, scrollTo: "#sec10ID" })
  }

  const test4 = () => {
    gsap.to(window, { duration: 2, scrollTo: "#sec16ID" })
  }

  const test5 = () => {
    gsap.to(window, { duration: 2, scrollTo: "#sec22ID" })
  }

  const sec27Ani = () => {
    const ctx = gsap.context(() => {
      const tl2 = gsap
        .timeline()
        .from(".sec27 .bg", 0.3, { opacity: 0 }, "a")
        .from(".sec27 .bg", 1, { y: 100 }, "a")

      ScrollTrigger.create({
        trigger: ".sec27",
        start: `top 60%`,
        animation: tl2,
        // scrub: true,
        toggleActions: "restart none none reverse",
      })
      return () => ctx.revert() // <- Cleanup!
    })
  }

  // const sec26Ani = () => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap
  //       .timeline()
  //       .to(".sec26 .fa", 1, { opacity: 0 }, "a")
  //       .to(".sec26 .fb", 1, { opacity: 1 }, "b")
  //       .to(".sec26 .fb", 1, { opacity: 0 }, "c")
  //       .to(".sec26 .fc", 1, { opacity: 1 }, "d")
  //       .to(".sec26 .fc", 1, { opacity: 0 }, "e")
  //       .to(".sec26 .fd", 1, { opacity: 1 }, "f")

  //     ScrollTrigger.create({
  //       trigger: ".sec26",
  //       animation: tl,
  //       scrub: true,
  //       pin: true,
  //       start: "top -30%",
  //       end: "+=400%",
  //     })
  //   }, total)
  //   return () => ctx.revert()
  // }

  return {
    textHover,
    sec2Ani,
    groupTop,
    sec4FirstAni,
    secgroupAAni,
    groupB,
    otherAni,
    sec7Ani,
    sec8Ani,
    sec9Ani,
    sec10Ani,
    groupC,
    sec12Ani,
    groupD,
    sec14Ani,
    sec15Ani,
    sec16Ani,
    sec17Ani,
    sec19Ani,
    sec20Ani,
    sec21Ani,
    sec22Ani,
    sec23Ani,
    numAdd,
    sec24Ani,
    sec25Ani,
    playPcClick,
    videoClick,
    test1,
    test2,
    test3,
    test4,
    test5,
    sec27Ani,
    // sec26Ani,
  }
}

export default FirstPcTs
