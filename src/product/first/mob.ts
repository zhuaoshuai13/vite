/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject } from "react"

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
  const res = (num * 1) / 10.8
  return `${res}vw`
}
const FirstMobTs = (
  total: string | object | undefined,
  ca: MutableRefObject<null>,
  countUpRef3: MutableRefObject<null>,
  countUpRef4: MutableRefObject<null>,
  videoRef: MutableRefObject<null>,
  ca2: MutableRefObject<null>,
  playRef: RefObject<HTMLVideoElement>,
  btnRef: RefObject<HTMLDivElement>,
  countUpRef11: MutableRefObject<null>,
  countUpRef22: MutableRefObject<null>
) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
  const baseUrl = import.meta.env.VITE_URL

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

  const { update: UpDate1 } = useCountUp({
    ref: countUpRef11,
    start: 0,
    end: 0,
    duration: 2,
  })

  const { update: UpDate2 } = useCountUp({
    ref: countUpRef22,
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
            y: "50px",
            duration: 1,
            ease: "power2.out",
            delay: index * 0.2,

            scrollTrigger: {
              trigger: wrap[0],
              start: "top 70%",
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
        .from(".sec4First .roboat", 1, { opacity: 0, x: 100 })

      ScrollTrigger.create({
        trigger: ".sec4First",
        start: `top 30%`,
        animation: tl,
        // scrub: true,
        toggleActions: "restart none none reverse",
        toggleClass: "active",
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
        start: "top 0",
        end: "+=400%",
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

  const sec8Ani = () => {
    const ctxs = (ca2 as any).current.getContext("2d")

    const imgs: HTMLImageElement[] = []
    const images = []

    for (let i = 0; i < 200; i++) {
      images.push(
        `${baseUrl}/fileadmin/sitedesign/product/pova-neo3/images/battery/${i
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
        .to(".sec8 ", 5, { opacity: 1 }, "m")
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
        .to(".sec8", 5, { opacity: 1 }, "mm")
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
        end: "=+400%",

        onUpdate: ({ progress }) => {
          if ((progress > 0.4 && progress < 0.52) || progress > 0.9) {
            isPlay = false
            if (progress > 0.4 && progress < 0.52) {
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
            if (progress < 0.4) {
              const now = (progress * (100 / 0.4)).toFixed(0)
              ani(Number(now))
            } else {
              const now = ((progress - 0.52) * (100 / 0.48) + 100).toFixed(0)
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
        .to(".sec21 .img", 2, { x: "-240%", duration: 0.1 })

      ScrollTrigger.create({
        trigger: ".sec21",
        start: `top 50%`,
        end: "+=50%",
        scrub: true,
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
        .from(
          ".sec23 .img3",
          1,
          { width: pxToVw(285), height: pxToVw(624) },
          "a"
        )
        .from(".sec23 .img1", 1, { x: "-60%", opacity: 0 }, "a")
        .from(".sec23 .img2", 1, { x: "-30%", opacity: 0 }, "a")
        .from(".sec23 .img4", 1, { x: "30%", opacity: 0 }, "a")
        .from(".sec23 .img5", 1, { x: "60%", opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec23",
        animation: tl,
        start: "top 30%",
        toggleActions: "restart none none reverse",
      })
    }, total)
    return () => ctx.revert()
  }

  const numAdd = () => {
    let switchs = true
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      ScrollTrigger.create({
        animation: tl,
        trigger: ".secPar",
        start: "top 70%",
        onUpdate: ({ isActive, direction }) => {
          if (direction === 1) {
            if (isActive) {
              if (switchs) {
                UpDate1(25)
                UpDate2(30)

                switchs = false
              }
            }
          } else {
            if (!isActive) {
              UpDate1(0)
              UpDate2(0)
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
                }, 1500)
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

    const imgs: HTMLImageElement[] = []
    const images = []
    for (let i = 0; i < 75; i++) {
      images.push(
        `${baseUrl}/fileadmin/sitedesign/product/pova-neo3/images/engine/${
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

    ani(0)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().to(".sec25 ", 1, { opacity: 1 })

      let now = 0
      let type = 0
      const time = 1 / images.length

      ScrollTrigger.create({
        trigger: ".sec25",
        animation: tl,
        start: "top 20%",
        end: "+=50%",
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
    return () => ctx.revert() // <- Cleanup!
  }

  const playClick = () => {
    if (playRef.current) {
      playRef.current.play()
    }
    if (btnRef.current) {
      btnRef.current.className = "play false"
    }
  }

  const videoClick = () => {
    playRef?.current?.pause()

    if (btnRef.current) {
      btnRef.current.className = "play true"
    }
    // setPlayShow(true)
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
    playClick,
    videoClick,
    // sec26Ani,
  }
}

export default FirstMobTs