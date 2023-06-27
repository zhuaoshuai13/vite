import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface AniType {
  trigger: string
  animation: gsap.core.Timeline
  start?: number
  end?: number
  scrub?: boolean
  pin?: boolean
  anticipatePin?: number
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
  }: AniType) => {
    return ScrollTrigger.create({
      trigger: trigger,
      start: `top ${start * 100}%`,
      end: `bottom -${end * 100}%`,
      scrub: scrub,
      pin: pin,
      animation: animation,
      anticipatePin: anticipatePin,
    })
  }

  const textHover = (className: Array<string>) => {
    const func = (cla: string) => {
      const ctx = gsap.context((self) => {
        const wrap = self?.selector?.(cla) ?? []
        const textAni = self?.selector?.(`${cla} .textAni`) ?? []

        textAni.forEach((box: string, index: number) => {
          console.log(wrap[0])
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

  const sec5Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec5 .left", { x: "-50%", opacity: 0 }, "a")
        .from(".sec5 .right", { x: "50%", opacity: 0 }, "a")
        .from(".sec5 .phone", { y: "50%", opacity: 0 }, "a")

      setAni({
        trigger: ".sec5",
        animation: tl,
        scrub: true,
        pin: true,
        start: -0.3,
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec8Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().to(".sec8", { y: "-50%" })

      setAni({
        trigger: ".sec8",
        animation: tl,
        scrub: true,
        start: 0.5,
        end: -0.3,
      })
    }, total) // <- Scope!

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
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec17Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".sec17 .phone", 3, { scale: 30 }, "a")
        .to(".sec17 .sub", 1, { opacity: 0 }, "a")
        .to(".sec17 .title", 1, { opacity: 0 }, "a")
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
        .from(".sec21 .img1", 1, { scale: 4, x: "50%" }, "a")
        .to(".sec21 .img", 2, { x: "-84%" }, "b")

      setAni({
        trigger: ".sec21",
        animation: tl,
        scrub: true,
        pin: true,
        start: 0,
        end: 2,
      })
    }, total)
    return () => ctx.revert()
  }

  const sec23Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec23 .img3", 1, { scale: 1.1 }, "a")
        .from(".sec23 .img1", 1, { x: "-60%" }, "a")
        .from(".sec23 .img2", 1, { x: "-30%" }, "a")
        .from(".sec23 .img4", 1, { x: "30%" }, "a")
        .from(".sec23 .img5", 1, { x: "60%" }, "a")
      // .from(".sec23 .img2", 2, { x: "-84%" })

      setAni({
        trigger: ".sec23",
        animation: tl,
        scrub: true,
        pin: true,
        start: -0.3,
        end: 2,
      })
    }, total)
    return () => ctx.revert()
  }

  const sec26Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().from(".sec26 .img", 1, { opacity: 0.5 })

      setAni({
        trigger: ".sec26",
        animation: tl,
        scrub: true,
        pin: true,
        start: -0.3,
        end: 1,
      })
    }, total)
    return () => ctx.revert()
  }

  return {
    textHover,
    sec5Ani,
    // sec8Ani,
    sec9Ani,
    sec21Ani,
    sec23Ani,
    sec26Ani,
    // sec17Ani,
  }
}

export default FirstTs
