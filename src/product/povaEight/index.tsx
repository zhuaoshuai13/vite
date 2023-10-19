import { useEffect, useRef } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import UseResponse from "../../hooks/useResponse"

import Sec1 from "./sec1"
import Sec2 from "./sec2"
import Sec3 from "./sec3"
import Sec4 from "./sec4"
import Sec5 from "./sec5"
import Sec6 from "./sec6"
import Sec7 from "./sec7"
import Sec8 from "./sec8"
import Sec9 from "./sec9"

const PovaEight = () => {
  const { responsive } = UseResponse()
  const screenAni = useRef<HTMLCanvasElement>(null)
  const landAni = useRef<HTMLCanvasElement>(null)
  const sec6Video = useRef<HTMLVideoElement>(null)
  const sec7Video = useRef<HTMLVideoElement>(null)
  const pxToVw = (num: number) => {
    const res = (num * 1) / 19.2
    return `${res}vw`
  }

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const sec1Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec1 .bg_img", 0.25, { y: "20%", opacity: 0 }, "a")
      .from(".sec1 .slogan", 0.25, { x: "-20%", opacity: 0 }, "a")
      .from(".sec1 .title_130", 0.25, { x: "-20%", opacity: 0 }, "a")
      .from(".sec1 .icon1", 0.25, { x: "-100%", opacity: 0, delay: 0.15 }, "a")
      .from(".sec1 .params", 0.25, { x: "-20%", opacity: 0, delay: 0.25 }, "a")
      .from(".sec1 .tips", 0.25, { x: "-20%", opacity: 0, delay: 0.35 }, "a")

    ScrollTrigger.create({
      trigger: ".sec1",
      start: `top 50%`,
      end: "+=20%",
      animation: tl,
    })
  }

  const sec2Ani = () => {
    if (responsive?.md) {
      const tl = gsap
        .timeline()
        .from(".sec2 .item2", 0.5, { x: "-20%", opacity: 0 }, "a")
        .from(".sec2 .item7", 0.5, { x: "-20%", opacity: 0, delay: 0.1 }, "a")
        .from(".sec2 .item1", 0.5, { x: "-20%", opacity: 0, delay: 0.2 }, "a")
        .from(".sec2 .item3", 0.5, { x: "-20%", opacity: 0, delay: 0.3 }, "a")
        .from(".sec2 .item6", 0.5, { x: "-20%", opacity: 0, delay: 0.4 }, "a")
        .from(".sec2 .item5", 0.5, { x: "-20%", opacity: 0, delay: 0.5 }, "a")
        .from(".sec2 .item4", 0.5, { x: "-20%", opacity: 0, delay: 0.6 }, "a")

      ScrollTrigger.create({
        trigger: ".sec2 .items",
        start: `top 75%`,
        // end: "+=20%",
        animation: tl,
      })
    } else {
      const tl = gsap
        .timeline()
        .from(".sec2 .item2", 0.5, { y: "50%", opacity: 0 }, "a")
        .from(".sec2 .item3", 0.5, { y: "50%", opacity: 0, delay: 0.1 }, "a")
        .from(".sec2 .item1", 0.5, { y: "50%", opacity: 0, delay: 0.2 }, "a")
        .from(".sec2 .item4", 0.5, { y: "50%", opacity: 0, delay: 0.3 }, "a")
        .from(".sec2 .item5", 0.5, { y: "50%", opacity: 0, delay: 0.3 }, "a")
        .from(".sec2 .item6", 0.5, { y: "50%", opacity: 0, delay: 0.4 }, "a")
        .from(".sec2 .item7", 0.5, { y: "50%", opacity: 0, delay: 0.4 }, "a")

      ScrollTrigger.create({
        trigger: ".sec2 .items",
        start: `top 75%`,
        // end: "+=20%",
        animation: tl,
      })
    }
  }

  const sec3Ani = () => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline().from(".sec3 .bar", 1, { top: 0 })

      ScrollTrigger.create({
        trigger: ".sec3 .bar",
        start: `top 90%`,
        end: "+=50%",
        animation: tl1,
        scrub: true,
      })
      const tl2 = gsap
        .timeline()
        .from(".sec3 .text", 1, { y: "100%", opacity: 0 })

      ScrollTrigger.create({
        trigger: ".sec3",
        start: `top 65%`,
        end: "+=20%",
        animation: tl2,
      })

      const tl3 = gsap
        .timeline()
        .from(
          ".sec3 .title_130",
          1,
          { x: "-20%", opacity: 0, ease: "none" },
          "a"
        )
        .from(
          ".sec3 .icon1",
          0.5,
          { x: "-100%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec3 .title_130",
        start: `top 90%`,
        end: "+=20%",
        animation: tl3,
      })

      const tl4 = gsap
        .timeline()
        .from(
          ".sec3 .box1 .title_48",
          1,
          { y: "20%", opacity: 0, delay: 0.25 },
          "a"
        )
        .from(".sec3 .box1", 1, { x: "20%", opacity: 0, delay: 0.25 }, "a")
        .from(".sec3 .box2", 1, { x: "20%", opacity: 0, delay: 0.25 }, "a")
        .from(".sec3 .circle", 1, { y: "20%", opacity: 0, delay: 0.75 }, "a")
        .from(
          ".sec3 .box1 .desc_18",
          1,
          { y: "20%", opacity: 0, delay: 0.5 },
          "a"
        )
        .from(
          ".sec3 .box2 .param",
          1,
          { y: "20%", opacity: 0, delay: 0.75 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec3 .box",
        start: `top 75%`,
        animation: tl4,
      })

      const tl5 = gsap
        .timeline()
        .to(".sec3 .box", 1, { opacity: 1 }, "m")
        .to(".sec3 .img1", 1, { opacity: 0 }, "a")
        .to(".sec3 .paramsa", 1, { opacity: 0 }, "a")
        .to(".sec3 .img2", 1, { opacity: 1 }, "b")
        .to(".sec3 .paramsb", 1, { opacity: 1 }, "b")

      ScrollTrigger.create({
        trigger: ".sec3 .box",
        start: responsive?.md ? `top 20%` : `top 10%`,
        end: "+=100%",
        anticipatePin: 0,
        animation: tl5,
        scrub: true,
        pin: true,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec4Ani = () => {
    const ctxs = (screenAni as any)?.current?.getContext("2d")
    ctxs.globalCompositeOperation = "copy"
    const imgs: HTMLImageElement[] = []
    const images = []
    const canvasWidth = 1920
    const canvasHeight = 1080

    const imgWidth = 1920
    const imgHeight = 1080

    const widthRatio = canvasWidth / imgWidth
    const heightRatio = canvasHeight / imgHeight

    let scaleRatio: number

    if (widthRatio > heightRatio) {
      scaleRatio = widthRatio
    } else {
      scaleRatio = heightRatio
    }

    for (let i = 0; i < 86; i++) {
      images.push(`${import.meta.env.VITE_FRAMES_URL}/screenAni/90hz${i}.webp`)
    }

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      imgs.push(img)
    })
    const ani = (type: number) => {
      ctxs.drawImage(
        imgs[type],
        0,
        0,
        imgWidth,
        imgHeight,
        0,
        0,
        imgWidth * scaleRatio,
        imgHeight * scaleRatio
      )
    }

    setTimeout(() => {
      ani(0)
    }, 1000)
    const tl = gsap
      .timeline()
      .from(".sec4 .title_130", 1, { x: "-20%", opacity: 0 }, "a")
      .from(".sec4 .icon3", 1, { x: "-100%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec4",
      start: `top 65%`,
      animation: tl,
    })

    const tl2 = gsap
      .timeline()
      .from(".sec4 .pic", 0.5, { y: "20%", opacity: 0 }, "a")
      .from(".sec4 .left_box", 0.5, { x: "-40%", opacity: 0, delay: 0.25 }, "a")
      .from(".sec4 .right_box", 0.5, { x: "40%", opacity: 0, delay: 0.25 }, "a")
      .from(".sec4 .tips", 0.5, { x: "40%", opacity: 0, delay: 0.25 }, "a")

    ScrollTrigger.create({
      trigger: ".sec4 .content_wrapper",
      start: responsive?.md ? `top 50%` : `top 60%`,
      end: "+=60%",
      anticipatePin: 0,
      animation: tl2,
      scrub: true,

      onUpdate: ({ progress }) => {
        const now = (progress * 54).toFixed(0)
        ani(Number(now))
      },
    })
  }

  const sec5Ani = () => {
    const ctxs = (landAni as any)?.current?.getContext("2d")
    ctxs.globalCompositeOperation = "copy"
    const imgs: HTMLImageElement[] = []
    const images = []
    const canvasWidth = 1920
    const canvasHeight = 1080

    const imgWidth = 1920
    const imgHeight = 1080

    const widthRatio = canvasWidth / imgWidth
    const heightRatio = canvasHeight / imgHeight

    let scaleRatio: number

    if (widthRatio > heightRatio) {
      scaleRatio = widthRatio
    } else {
      scaleRatio = heightRatio
    }

    for (let i = 0; i < 225; i++) {
      images.push(`${import.meta.env.VITE_FRAMES_URL}/landAni/0${i}.webp`)
    }

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      imgs.push(img)
    })
    const ani = (type: number) => {
      ctxs.drawImage(
        imgs[type],
        0,
        0,
        imgWidth,
        imgHeight,
        0,
        0,
        imgWidth * scaleRatio,
        imgHeight * scaleRatio
      )
    }

    setTimeout(() => {
      ani(0)
    }, 1000)
    const tl = gsap
      .timeline()
      .from(".sec5 .title_130", 1, { x: "-20%", opacity: 0 }, "a")
      .from(".sec5 .icon1", 1, { x: "-100%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec5",
      start: `top 65%`,
      animation: tl,
    })

    if (responsive?.md) {
      const tl2 = gsap
        .timeline()
        .to(".sec5", 1, { opacity: 1 }, "a")
        .to(
          ".sec5 .phone",
          1,
          { width: pxToVw(810), height: pxToVw(1080), left: pxToVw(550) },
          "b"
        )
        .from(".sec5 .title_48", 1, { opacity: 0, y: "20%" }, "b")
        .from(".sec5 .desc_18", 1, { opacity: 0, y: "20%", delay: 0.25 }, "b")

      ScrollTrigger.create({
        trigger: ".sec5 .content_wrapper",
        start: `top 0%`,

        end: `+=300%`,
        scrub: true,
        pin: true,
        animation: tl2,

        onUpdate: ({ progress }) => {
          const now = (progress * 224).toFixed(0)
          ani(Number(now))
        },
      })
    } else {
      const tl2 = gsap
        .timeline()
        .to(".sec5", 1, { opacity: 1 }, "a")
        // .to(
        //   ".sec5 .phone",
        //   1,
        //   { width: pxToVw(720), height: pxToVw(960), left: pxToVw(550) },
        //   "b"
        // )
        .from(".sec5 .title_48", 1, { opacity: 0, y: "20%" }, "b")
        .from(".sec5 .desc_18", 1, { opacity: 0, y: "20%", delay: 0.25 }, "b")

      ScrollTrigger.create({
        trigger: ".sec5 .content_wrapper",
        start: `bottom bottom`,

        end: `+=300%`,
        scrub: true,
        pin: true,
        animation: tl2,

        onUpdate: ({ progress }) => {
          const now = (progress * 224).toFixed(0)
          ani(Number(now))
        },
      })
    }
  }

  const sec9Ani = () => {
    const ctx = gsap.context(() => {
      const tl1 = gsap
        .timeline()
        .from(".sec9 .sec9_text", 1, { y: "50%", opacity: 0 })

      ScrollTrigger.create({
        trigger: ".sec9",
        start: `top 60%`,
        end: "+=20%",
        animation: tl1,
      })

      const tl2 = gsap.timeline().from(".sec8 .bot_img", 1, { y: "100%" })

      ScrollTrigger.create({
        trigger: ".sec9",
        start: `top 95%`,
        end: "+=50%",
        animation: tl2,
        scrub: true,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec10Ani = () => {
    const ctx = gsap.context(() => {
      const tl3 = gsap
        .timeline()
        .from(
          ".sec10 .title_box .title",
          1,
          { x: "-20%", opacity: 0, ease: "none" },
          "a"
        )
        .from(
          ".sec10 .icon1",
          0.5,
          { x: "-100%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec10 .icon4",
          0.5,
          { x: "-100%", opacity: 0, ease: "none", delay: 0.75 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec10",
        start: `top 100%`,
        end: "+=20%",
        animation: tl3,
      })

      if (responsive?.md) {
        const tl4 = gsap
          .timeline()
          .from(".sec10 video", 1, { y: "20%", opacity: 0 }, "a")
          .from(".sec10 .line", 1, { y: "20%", opacity: 0, delay: 0.25 }, "a")
          .from(
            ".sec10 .text_box .dts",
            1,
            { y: "20%", opacity: 0, delay: 0.25 },
            "a"
          )
          .from(
            ".sec10 .text_box .title",
            1,
            { y: "20%", opacity: 0, delay: 0.25 },
            "a"
          )
          .from(
            ".sec10 .text_box .desc_18",
            1,
            { y: "20%", opacity: 0, delay: 0.5 },
            "a"
          )
          .from(
            ".sec10 .text_box .params",
            1,
            { y: "20%", opacity: 0, delay: 0.75 },
            "a"
          )
          .to(".sec10 .topLine", 0.1, { rotate: -20 }, "m")
          .to(".sec10 .bottomLine", 0.1, { rotate: -20 }, "m")
          .to(".sec10 .topLine", 0.1, { rotate: 0 }, "n")
          .to(".sec10 .bottomLine", 0.1, { rotate: 0 }, "n")
          .to(".sec10 .topLine", 0.1, { rotate: -20 }, "b")
          .to(".sec10 .bottomLine", 0.1, { rotate: -20 }, "b")
          .to(".sec10 .topLine", 0.1, { rotate: 0 }, "v")
          .to(".sec10 .bottomLine", 0.1, { rotate: 0 }, "v")

        ScrollTrigger.create({
          trigger: ".sec10 .content_box",
          start: `top 70%`,
          animation: tl4,
        })
      } else {
        const tl4 = gsap
          .timeline()
          .from(".sec10 .line", 1, { y: "20%", opacity: 0, delay: 0.25 }, "a")
          .from(
            ".sec10 .text_box .dts",
            1,
            { y: "20%", opacity: 0, delay: 0.25 },
            "a"
          )
          .from(
            ".sec10 .text_box .title",
            1,
            { y: "20%", opacity: 0, delay: 0.25 },
            "a"
          )
          .from(
            ".sec10 .text_box .desc_18",
            1,
            { y: "20%", opacity: 0, delay: 0.5 },
            "a"
          )
          .from(
            ".sec10 .text_box .params",
            1,
            { y: "20%", opacity: 0, delay: 0.75 },
            "a"
          )

        ScrollTrigger.create({
          trigger: ".sec10 .content_box",
          start: `top 70%`,
          animation: tl4,
        })
      }
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec11Ani = () => {
    const ctx = gsap.context(() => {
      const tl3 = gsap
        .timeline()
        .from(
          ".sec11 .title_box .title",
          1,
          { x: "-20%", opacity: 0, ease: "none" },
          "a"
        )
        .from(
          ".sec11 .icon3",
          0.5,
          { x: "-100%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec11",
        start: `top 70%`,
        end: "+=20%",
        animation: tl3,
      })

      if (responsive?.md) {
        const tl4 = gsap
          .timeline()
          .from(
            ".sec11 .text_box .title",
            1,
            { y: "20%", opacity: 0, delay: 0.25 },
            "a"
          )
          .from(
            ".sec11 .text_box .desc_18",
            1,
            { y: "20%", opacity: 0, delay: 0.5 },
            "a"
          )
          .from(
            ".sec11 .text_box .params",
            1,
            { y: "20%", opacity: 0, delay: 0.75 },
            "a"
          )

        ScrollTrigger.create({
          trigger: ".sec11 .content_box",
          start: `top 70%`,
          animation: tl4,
        })
      } else {
        const tl4 = gsap
          .timeline()
          .from(
            ".sec11 .text_box .title",
            1,
            { y: "20%", opacity: 0, delay: 0.25 },
            "a"
          )
          .from(
            ".sec11 .text_box .desc_18",
            1,
            { y: "20%", opacity: 0, delay: 0.5 },
            "a"
          )
          .from(
            ".sec11 .text_box .params",
            1,
            { y: "20%", opacity: 0, delay: 0.75 },
            "a"
          )

        ScrollTrigger.create({
          trigger: ".sec11 .content_box",
          start: `top 70%`,
          animation: tl4,
        })
      }
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec12Ani = () => {
    const ctx = gsap.context(() => {
      const tl3 = gsap
        .timeline()
        .from(
          ".sec12 .title_box .title",
          1,
          { x: "-20%", opacity: 0, ease: "none" },
          "a"
        )
        .from(
          ".sec12 .icon1",
          0.5,
          { x: "-100%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec12",
        start: `top 70%`,
        end: "+=20%",
        animation: tl3,
      })

      if (responsive?.md) {
        const tl4 = gsap
          .timeline()
          .from(".sec12 video", 1, { y: "40%", opacity: 0, ease: "none" })
          .from(
            ".sec12 .sec12_left",
            1,
            { x: "-100%", opacity: 0, ease: "none" },
            "a"
          )
          .from(
            ".sec12 .sec12_right",
            1,
            { x: "100%", opacity: 0, ease: "none" },
            "a"
          )
          .from(".sec12 .line", 1, { y: "50%", opacity: 0, ease: "none" }, "a")

        ScrollTrigger.create({
          trigger: ".sec12 .sec12_content",
          start: `top 50%`,
          end: "+=20%",
          animation: tl4,
        })
      } else {
        const tl4 = gsap
          .timeline()
          .from(
            ".sec12 .sec12_left",
            1,
            { y: "50%", opacity: 0, ease: "none" },
            "a"
          )
          .from(
            ".sec12 .sec12_right",
            1,
            { y: "50%", opacity: 0, ease: "none" },
            "a"
          )
          .from(".sec12 .line", 1, { y: "50%", opacity: 0, ease: "none" }, "a")

        ScrollTrigger.create({
          trigger: ".sec12 .sec12_content",
          start: `top 50%`,
          end: "+=20%",
          animation: tl4,
        })
      }
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec13Ani = () => {
    const ctx = gsap.context(() => {
      const tl3 = gsap
        .timeline()
        .from(
          ".sec13 .title_box .title",
          1,
          { x: "-20%", opacity: 0, ease: "none" },
          "a"
        )
        .from(
          ".sec13 .icon3",
          0.5,
          { x: "-100%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec13",
        start: `top 75%`,
        end: "+=20%",
        animation: tl3,
      })

      const tl4 = gsap
        .timeline()
        .from(
          ".sec13 .sec13_f2",
          1,
          { y: "20%", opacity: 0, },
          "a"
        )
        .from(
          ".sec13 .sec13_f1",
          1,
          { y: "20%", opacity: 0, delay: 0.25},
          "a"
        )
        .from(".sec13 .sec13_left", 1, { x: "-20%", opacity: 0, delay: 0.5 }, "a")
        .from(
          ".sec13 .text_box .title",
          1,
          { x: "-20%", opacity: 0, delay: 0.75 },
          "a"
        )
        .from(
          ".sec13 .text_box .desc_18",
          1,
          { x: "-20%", opacity: 0, delay: 1 },
          "a"
        )
        .from(
          ".sec13 .text_box .params",
          1,
          { x: "-20%", opacity: 0, delay: 1.25 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec13 .sec13_content",
        start: `top 75%`,
        animation: tl4,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec14Ani = () => {
    const ctx = gsap.context(() => {
      const tl3 = gsap
        .timeline()
        .from(
          ".sec14 .title_box .title",
          1,
          { x: "-20%", opacity: 0, ease: "none" },
          "a"
        )
        .from(
          ".sec14 .icon1",
          0.5,
          { x: "-100%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec14",
        start: `top 75%`,
        end: "+=20%",
        animation: tl3,
      })

      if (responsive?.md) {
        const tl4 = gsap
          .timeline()
          .from(
            ".sec14 .sec14_left",
            0.5,
            { y: "20%", opacity: 0, delay: 0.25 },
            "a"
          )
          .from(
            ".sec14 .sec14_right",
            0.5,
            { y: "20%", opacity: 0, delay: 0.5 },
            "a"
          )
          .from(
            ".sec14 .text_box .title",
            0.5,
            { y: "20%", opacity: 0, delay: 0.75 },
            "a"
          )
          .from(
            ".sec14 .text_box .desc_18",
            0.5,
            { y: "20%", opacity: 0, delay: 1 },
            "a"
          )
          .from(
            ".sec14 .text_box .params",
            0.5,
            { y: "20%", opacity: 0, delay: 1.25 },
            "a"
          )

        ScrollTrigger.create({
          trigger: ".sec14 .sec14_content",
          start: `top 75%`,
          animation: tl4,
        })
      } else {
        const tl4 = gsap
          .timeline()
          .from(
            ".sec14 .sec14_left",
            0.5,
            { y: "20%", opacity: 0, delay: 0.25 },
            "a"
          )
          .from(
            ".sec14 .sec14_right",
            0.5,
            { y: "20%", opacity: 0, delay: 0.5 },
            "a"
          )
          .from(
            ".sec14 .text_box .title",
            0.5,
            { y: "20%", opacity: 0, delay: 0.75 },
            "a"
          )
          .from(
            ".sec14 .text_box .desc_18",
            0.5,
            { y: "20%", opacity: 0, delay: 1 },
            "a"
          )
          .from(
            ".sec14 .text_box .params",
            0.5,
            { y: "20%", opacity: 0, delay: 1.25 },
            "a"
          )

        ScrollTrigger.create({
          trigger: ".sec14 .sec14_content",
          start: `top 75%`,
          animation: tl4,
        })
      }
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec6Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec6 .text", 1, { y: "100%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec6",
      start: `top 70%`,
      animation: tl,
    })

    if (responsive?.md) {
      const tl2 = gsap
        .timeline()
        .from(".sec6 .title_130", 1, { x: "-20%", opacity: 0 }, "a")
        .from(".sec6 .icon4", 1, { x: "-100%", opacity: 0, delay: 0.25 }, "a")

      ScrollTrigger.create({
        trigger: ".sec6",
        start: `top 0%`,
        animation: tl2,
      })

      const tl6 = gsap
        .timeline()
        .from(".sec6 video", 1, { y: "20%", opacity: 0 }, "a")

      ScrollTrigger.create({
        trigger: ".sec6 .content_wrapper",
        start: `top 75%`,
        animation: tl6,
      })
    } else {
      const tl2 = gsap
        .timeline()
        .from(".sec6 .title_130", 1, { x: "-20%", opacity: 0 }, "a")
        .from(".sec6 .icon4", 1, { x: "-100%", opacity: 0, delay: 0.25 }, "a")
        .from(
          ".sec6 .content_wrapper .box",
          1,
          { y: "20%", opacity: 0, delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec6",
        start: `top 30%`,
        animation: tl2,
      })
    }

    const tl3 = gsap
      .timeline()
      .to(".sec6", 1, { opacity: 1 }, "m")
      .from(".sec6 .light", 1, { opacity: 0 }, "a")
      .from(".sec6 .title_48", 1, { y: "20%", opacity: 0, delay: 0.2 }, "a")
      .from(".sec6 .desc_18", 1, { y: "20%", opacity: 0, delay: 0.4 }, "a")
      .from(".sec6 .param1", 1, { y: "20%", opacity: 0, delay: 0.6 }, "a")
      .from(".sec6 .param2", 1, { y: "20%", opacity: 0, delay: 0.8 }, "a")
      .from(".sec6 .param3", 1, { y: "20%", opacity: 0, delay: 1 }, "a")
      .from(".sec6 .param4", 1, { y: "20%", opacity: 0, delay: 1.2 }, "a")

    ScrollTrigger.create({
      trigger: ".sec6 .content_wrapper .box",
      start: responsive?.md ? `top 0%` : `top 85%`,
      end: "+=100%",
      animation: tl3,
      pin: responsive?.md ? true : false,

      onEnter: () => {
        if (sec6Video.current) {
          sec6Video.current.play()
        }
      },
    })
  }

  const sec7Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec7 .title_48", 1, { y: "20%", opacity: 0 }, "a")
      .from(".sec7 .desc_18", 1, { y: "20%", opacity: 0, delay: 0.25 }, "a")
      .from(".sec7 .params", 1, { y: "20%", opacity: 0, delay: 0.5 }, "a")

    ScrollTrigger.create({
      trigger: ".sec7",
      start: `top 60%`,
      animation: tl,

      onEnter: () => {
        if (sec7Video.current) {
          sec7Video.current.play()
        }
      },
    })
    const t2 = gsap
      .timeline()
      .from(".sec7 video", 1, { y: "20%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec7",
      start: `top 75%`,
      animation: t2,
    })
  }

  const sec8Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec8 .title_130", 1, { y: "20%", opacity: 0 }, "a")
      .from(".sec8 .icon2", 1, { x: "-100%", opacity: 0, delay: 0.25 }, "a")
      .from(".sec8 .icon3", 1, { x: "-100%", opacity: 0, delay: 0.25 }, "a")

    ScrollTrigger.create({
      trigger: ".sec8",
      start: `top 75%`,
      animation: tl,
    })
  }

  useEffect(() => {
    if (responsive != undefined) {
      sec1Ani()
      sec2Ani()
      sec3Ani()
      sec4Ani()
      sec5Ani()
      sec6Ani()
      sec7Ani()
      sec8Ani()
      sec9Ani()
      sec10Ani()
      sec11Ani()
      sec12Ani()
      sec13Ani()
      sec14Ani()
    }
  }, [responsive])
  return (
    <div className='pop8'>
      <Sec1
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
      />
      <Sec2 />
      <Sec3
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
      />
      <Sec4 refs={screenAni} isPc={responsive?.md} />
      <Sec5
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
        refs={landAni}
      />
      <Sec6
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
        sec6Video={sec6Video}
      />
      <Sec7 sec7Video={sec7Video} isPc={responsive?.md} />
      <Sec8
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
      />
      <Sec9 />
    </div>
  )
}

export default PovaEight
