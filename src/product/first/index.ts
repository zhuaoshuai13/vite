import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother"
// import { TextPlugin } from "gsap-trial/TextPlugin"

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

const FirstTs = (total: string | object | undefined) => {
  gsap.registerPlugin(ScrollTrigger)

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
        : "restart none none none",
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

  // const numberAdd = () => {
  //   const ctx = gsap.context(() => {
  //     const tls = gsap.timeline()

  //     const tl = gsap.to(".s25", 2, {
  //       innerText: "25",

  //       scrollTrigger: {
  //         trigger: ".sec23 .params",
  //         start: "top 0",
  //       },
  //     })

  //     tls.add(tl)
  //   }, total) // <- Scope!

  //   return () => ctx.revert() // <- Cleanup!
  // }

  // const sec5Ani = () => {
  //   const ctx = gsap.context(() => {
  //     ScrollTrigger.create({
  //       trigger: ".sec4",
  //       pin: true,
  //       start: "bottom bottom",

  //       markers: true,
  //     })

  //     // const tl = gsap
  //     //   .timeline()
  //     //   .from(".sec5 .left", 1, { x: "-50%" }, "a")
  //     //   .from(".sec5 .right", 1, { x: "50%" }, "a")
  //     //   .from(".sec5 .phone", 1, { x: "-130%" }, "a")

  //     // const tl2 = gsap.timeline().to(".sec5", { yPercent: -100 })

  //     // setAni({
  //     //   trigger: ".sec5",
  //     //   animation: tl2,
  //     //   start: 1,
  //     // })

  //     // setAni({
  //     //   trigger: ".sec5",
  //     //   animation: tl,
  //     //   // scrub: true,
  //     //   // pin: true,
  //     //   start: -0.2,
  //     // })
  //   }, total) // <- Scope!

  //   return () => ctx.revert() // <- Cleanup!
  // }

  // const secgroupAAni = () => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap
  //       .timeline()
  //       .to(".groupA .sec5", 1, { top: 0 }, "a")
  //       .to(".groupA .sec4", 2, { top: "-100%" }, "a")

  //     setAni({
  //       trigger: ".groupA",
  //       animation: tl,
  //       start: 0,
  //       pin: true,
  //       scrub: true,
  //     })
  //   }, total) // <- Scope!

  //   return () => ctx.revert() // <- Cleanup!
  // }

  const otherAni = () => {
    const ctx = gsap.context(() => {
      const tl2 = gsap
        .timeline()
        .from(".sec5 .left", 1, { x: "-50%" }, "a")
        .from(".sec5 .right", 1, { x: "50%" }, "a")
        .from(".sec5 .phone", 1, { x: "-130%" }, "a")

      setAni({
        trigger: ".sec5 .slogan",
        animation: tl2,
        start: 0.1,
        scrub: true,
      })
    })
    return () => ctx.revert() // <- Cleanup!
  }

  // const sec8Ani = () => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline().to(".sec8", { y: "-50%" })

  //     setAni({
  //       trigger: ".sec8",
  //       animation: tl,
  //       scrub: true,
  //       start: 0.5,
  //       end: -0.3,
  //     })
  //   }, total) // <- Scope!

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
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec12Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        // .to(".sec12 .sub", { opacity: 0 }, "a")
        .to(
          ".sec12 .sub",
          {
            text: {
              value: "128+8GB",
              delimiter: " ",
            },
            // period: 2,
            ease: "power2",
            opacity: 1,
          },
          "b"
        )
        .to(".sec12 .desc", {
          text: {
            value: `
            • Expandable RAM up to 16GB <br />
            *Optional expansion of 3, 5, 8GB, default expansion of 5GBB <br />
            •The number of active background apps reaching 20 <br />
            • Application startup speed increased by 55% on average"`,
            delimiter: "",
          },
        })

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

  const sec17Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
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
        animation: tl,
        scrub: true,
        pin: true,
        end: 2,
      })
    }, total)
    return () => ctx.revert()
  }

  const sec21Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        // .from(".sec21 .img1", 1, { scale: 4, x: "50%" }, "a")
        .to(".sec21 .img", 2, { x: "-90%", duration: 0.1 }, "b")

      setAni({
        trigger: ".sec21",
        animation: tl,
        // scrub: true,
        // pin: true,
        // start: 0.3,
        end: 0.5,
        toggleActions: true,
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

  const sec26Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().from(".sec26 .img", 0.8, { opacity: 0.5 })

      setAni({
        trigger: ".sec26",
        animation: tl,
        // scrub: true,
        // pin: true,
        start: 0,
        // end: -0.3,
      })
    }, total)
    return () => ctx.revert()
  }

  return {
    textHover,
    // numberAdd,
    // sec5Ani,
    // secgroupAAni,
    otherAni,
    // sec8Ani,
    sec9Ani,
    sec12Ani,
    sec15Ani,
    sec17Ani,
    sec21Ani,
    sec23Ani,
    // numberAdd,
    sec26Ani,
  }
}

export default FirstTs
