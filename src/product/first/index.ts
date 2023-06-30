/* eslint-disable @typescript-eslint/no-explicit-any */
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap-trial/TextPlugin"

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
import { MutableRefObject } from "react"

const pxToVw = (num: number) => {
  const res = (num * 1) / 25.6
  return `${res}vw`
}
const FirstTs = (
  total: string | object | undefined,
  ca: MutableRefObject<null>,
  countUpRef1: MutableRefObject<null>,
  countUpRef2: MutableRefObject<null>,
  videoRef: MutableRefObject<null>
  // ca2: MutableRefObject<null>
) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)

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
            delay: index * 0.1,
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

  const numberAdd = () => {
    const ctx = gsap.context(() => {
      const tls = gsap.timeline()

      const tl = gsap.from(".aa", {
        innerText: "25",

        scrollTrigger: {
          trigger: ".aa",
          start: "top 0",
          end: "+=200",
        },
      })

      tls.add(tl)
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const secgroupAAni = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec5", 0.3, { y: pxToVw(100), ease: "none" }, "a")

      ScrollTrigger.create({
        trigger: ".sec4First",
        start: `top -10%`,
        end: "+=80%",
        scrub: true,
        animation: tl,
        anticipatePin: 1,
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec2Ani = () => {
    const ctx = gsap.context((self) => {
      const item = self?.selector?.(".sec2 .box") ?? []
      item.forEach((box: string, index: number) => {
        gsap.from(box, {
          opacity: 0,
          y: "100",
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
        .from(".sec8", 0.3, { y: pxToVw(100), ease: "none" }, "a")
      ScrollTrigger.create({
        trigger: ".sec7",
        start: `top -10%`,
        end: "+=80%",
        scrub: true,
        // pin: pin,
        animation: tl,
        anticipatePin: 1,
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const groupC = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec11", 1, { y: pxToVw(100), ease: "none" }, "a")

      ScrollTrigger.create({
        trigger: ".sec10",
        start: `top -10%`,
        end: "+=80%",
        scrub: true,
        animation: tl,
        anticipatePin: 1,
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const groupD = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().from(".sec17 ", 3, { y: pxToVw(100) }, "a")

      ScrollTrigger.create({
        trigger: ".sec16",
        start: `top -10%`,
        end: "+=70%",
        scrub: true,
        animation: tl,
        anticipatePin: 1,
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec17Ani = () => {
    const ctx = gsap.context(() => {
      const tl2 = gsap
        .timeline()
        .to(".sec17 .phone", 3, { scale: 30 }, "a")
        .to(".sec17 .group", 0.1, { opacity: 0 }, "a")
        .to(".sec17 .img", 1, { opacity: 0 }, "a")
        .to(".sec17 .phone", 3, { x: "1000%" }, "a")
        .to(".sec17 .phone", 3, { y: "750%" }, "a")
        .to(".sec17 .phone", 3, { opacity: 0 }, "a")
        .from(".sec17 .bigImg", 1, { opacity: 0, delay: 2 }, "a")

      setAni({
        trigger: ".sec17",
        animation: tl2,
        start: 0,
        pin: true,
        anticipatePin: 2,
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
        .from(".sec5 .right", 1, { x: "50%", opacity: 0 }, "a")
        .from(".sec5 .phone", 1, { x: "-130%", opacity: 0 }, "a")

      setAni({
        trigger: ".sec5",
        animation: tl2,
        start: -0.1,
        toggleActions: true,
      })
    })
    return () => ctx.revert() // <- Cleanup!
  }

  // const sec8Ani = () => {
  //   const ctxs = (ca2 as any).current.getContext("2d")

  //   const imgs: HTMLImageElement[] = []
  //   const images = []
  //   for (let i = 0; i < 200; i++) {
  //     //  将i变成三位数 例如001 010
  //     const num = i.toString().padStart(3, "0")

  //     images.push(`/src/assets/img/light/LH6N-电池${num}.png`)
  //   }

  //   images.forEach((src) => {
  //     const img = new Image()
  //     img.src = src
  //     imgs.push(img)
  //   })
  //   const ani = (type: number) => {
  //     console.log(imgs[type])
  //     ctxs.drawImage(imgs[type], 0, 0)
  //   }
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline().to(".sec8 ", 1, { opacity: 1 })

  //     let now = 0
  //     let type = 0
  //     const time = 1 / images.length

  //     ScrollTrigger.create({
  //       trigger: ".sec8",
  //       animation: tl,
  //       pin: true,
  //       start: "top 0",
  //       onUpdate: ({ progress, direction }) => {
  //         if (direction === 1) {
  //           if (progress > now) {
  //             now += time
  //             ani(type)
  //             if (type === images.length - 1) return
  //             type++
  //           }
  //         } else {
  //           if (progress < now) {
  //             now -= time
  //             ani(type)
  //             if (type === 0) return
  //             type--
  //           }
  //         }
  //       },
  //     })
  //   }, total)
  //   return () => ctx.revert() // <- Cleanup!
  // }

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
        .to(".sec12 .group", 1, { opacity: 0 }, "a")
        .to(
          ".sec12 .sub",
          0,
          {
            text: {
              value: "128+8GB",
            },
            opacity: 1,
          },
          "b"
        )
        .to(
          ".sec12 .desc",
          0,
          {
            text: {
              value: `
            • Expandable RAM up to 16GB <br />
            *Optional expansion of 3, 5, 8GB, default expansion of 5GB <br />
            •The number of active background apps reaching 20 <br />
            • Application startup speed increased by 55% on average"`,
              delimiter: "",
            },
          },
          "b"
        )
        .to(".sec12 .group", 1, { opacity: 1 }, "c")

      setAni({
        trigger: ".sec12",
        animation: tl,
        start: 0,
        pin: true,
        scrub: true,
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
        anticipatePin: 1,
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
      // .from(".sec23 .img2", 2, { x: "-84%" })

      setAni({
        trigger: ".sec23",
        animation: tl,
        scrub: true,
        pin: true,
        start: -0.2,
        end: 1,
      })
    }, total)
    return () => ctx.revert()
  }

  const numAdd = () => {
    let switchs = true
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().to(".sec23 .params", 1, { opacity: 1 })

      ScrollTrigger.create({
        animation: tl,
        trigger: ".secPar .params",
        start: "top 70%",
        onUpdate: ({ isActive, direction }) => {
          if (direction === 1) {
            if (isActive) {
              if (switchs) {
                firstUpDate(25)
                secondUpDate(30)

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

  const sec25Ani = () => {
    const ctxs = (ca as any).current.getContext("2d")

    const imgs: HTMLImageElement[] = []
    const images = []
    for (let i = 0; i < 75; i++) {
      images.push(
        `https://www.tecno.mez100.com.cn/fileadmin/sitedesign/product/pova-neo3/images/engine/${
          i + 100
        }.png`
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
      const tl = gsap.timeline().to(".sec25 ", 1, { opacity: 1 })

      let now = 0
      let type = 0
      const time = 1 / images.length

      ScrollTrigger.create({
        trigger: ".sec25",
        animation: tl,
        pin: true,
        start: "top 0",
        onUpdate: ({ progress, direction }) => {
          if (direction === 1) {
            if (progress > now) {
              now += time
              ani(type)
              if (type === images.length - 1) return
              type++
            }
          } else {
            if (progress < now) {
              now -= time
              ani(type)
              if (type === 0) return
              type--
            }
          }
        },
      })
    }, total)
    return () => ctx.revert() // <- Cleanup!
  }

  const sec26Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".sec26 .fa", 1, { opacity: 0 }, "a")
        .to(".sec26 .fb", 1, { opacity: 1 }, "b")
        .to(".sec26 .fb", 1, { opacity: 0 }, "c")
        .to(".sec26 .fc", 1, { opacity: 1 }, "d")
        .to(".sec26 .fc", 1, { opacity: 0 }, "e")
        .to(".sec26 .fd", 1, { opacity: 1 }, "d")

      ScrollTrigger.create({
        trigger: ".sec26",
        animation: tl,
        scrub: true,
        pin: true,
        start: "top -30%",
        end: "+=400%",
      })
    }, total)
    return () => ctx.revert()
  }

  return {
    numberAdd,
    textHover,
    sec2Ani,
    groupTop,
    secgroupAAni,
    groupB,
    groupC,
    otherAni,
    // sec8Ani,
    sec9Ani,
    sec12Ani,
    groupD,
    sec15Ani,
    sec17Ani,
    sec19Ani,
    sec21Ani,
    sec23Ani,
    numAdd,
    sec25Ani,
    sec26Ani,
  }
}

export default FirstTs
