import { RefObject, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap-trial/ScrollToPlugin"

import UseResponse from "../../hooks/useResponse"

const Pc = (
  total: RefObject<HTMLDivElement>,
  can1: RefObject<HTMLCanvasElement>
) => {
  const { responsive } = UseResponse()
  if (responsive?.md !== undefined) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  }
  const [open, setOpen] = useState(false)
  const global = window as any

  const sec1Ani = () => {
    // const ctx = gsap.context(() => {
    const tl = gsap
      .timeline()
      .from(".sec1 .phone", 1, { opacity: 0, x: "20%", y: "20%" }, "a")
    ScrollTrigger.create({
      trigger: ".sec1",
      start: `top 1%`,
      end: "+=40%",
      animation: tl,
    })
    // })

    // return () => ctx.revert() // <- Cleanup!
  }

  const sec2Ani = () => {
    // const ctx = gsap.context(() => {
    const tl = gsap
      .timeline()
      .from(".sec2 .video", 1, { opacity: 0, y: "20%" }, "a")
    ScrollTrigger.create({
      trigger: ".sec2",
      start: `top 50%`,
      end: "+=40%",
      animation: tl,
    })
    // })

    // return () => ctx.revert() // <- Cleanup!
  }

  const sec3Ani = () => {
    const ctx = gsap.context((self) => {
      const item = self?.selector?.(".sec3 .aniBox") ?? []
      item.forEach((box: string, index: number) => {
        gsap.from(box, {
          opacity: 0,
          x: "100",
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: ".sec3",
            start: "top 50%",
            // toggleActions: "restart none none reverse",
          },
        })
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec4Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".sec4 .top", 1, { top: 0, ease: "none" }, "a")
        .to(".sec4 .bot", 1, { bottom: 0, ease: "none" }, "a")
      ScrollTrigger.create({
        trigger: ".sec4",
        start: `top 10%`,
        end: "+=40%",
        animation: tl,
        scrub: true,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec5Ani = () => {
    // const ctx = gsap.context(() => {
    const tl = gsap
      .timeline()
      .from(".sec5 .title", 1, { opacity: 0, y: 100 }, "a")
      .from(".sec5 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
      .from(".sec5 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")

    ScrollTrigger.create({
      trigger: ".sec5",
      start: `top 50%`,
      animation: tl,
    })

    const tl2 = gsap
      .timeline()
      .from(".sec5 .right", 1, { opacity: 0, x: "10%" }, "a")

    ScrollTrigger.create({
      trigger: ".sec5",
      start: `top -60%`,
      animation: tl2,
    })

    const tl3 = gsap
      .timeline()
      .from(".sec5 .left", 1, { opacity: 0, x: "-10%" }, "a")

    ScrollTrigger.create({
      trigger: ".sec5",
      start: `top -70%`,
      animation: tl3,
    })

    const tl4 = gsap.timeline().from(".sec5 ", 1, { opacity: 1 })

    ScrollTrigger.create({
      trigger: ".sec5",
      start: `top -10%`,
      animation: tl4,
      onToggle: (self) => {
        if (self.isActive) {
          setOpen(true)
        }
      },
    })
    // })

    // return () => ctx.revert() // <- Cleanup!
  }

  const sec6Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec6 .img", 1, { y: "10%", ease: "none" }, "a")
      ScrollTrigger.create({
        trigger: ".sec6",
        start: `top 80%`,
        end: "+=50%",
        animation: tl,
        scrub: true,
      })

      const tl2 = gsap
        .timeline({
          pinSpacing: {
            spacerClass: "custom-spacer",
          },
        })
        .to(".sec6 ", 0.5, { opacity: 1 }, "a")
        .to(".sec6 .img", 1, { opacity: 0 }, "b")
        .from(".sec6 .img2", 1, { opacity: 0 }, "b")
      ScrollTrigger.create({
        trigger: ".sec6",
        start: `top -5%`,
        end: "+=80%",
        animation: tl2,
        scrub: true,
        pin: true,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec7Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".sec7 .top", 1, { top: 0 }, "a")
        .to(".sec7 .bot", 1, { bottom: 0 }, "a")
      ScrollTrigger.create({
        trigger: ".sec7",
        start: `top 10%`,
        end: "+=40%",
        animation: tl,
        scrub: true,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec8Ani = () => {
    const ctxs = (can1 as any).current.getContext("2d")
    ctxs.globalCompositeOperation = "copy"

    const imgs: HTMLImageElement[] = []
    const images = []
    const canvasWidth = 1920
    const canvasHeight = 1080

    const imgWidth = 1280
    const imgHeight = 720

    // const x = (canvasWidth - imgWidth) / 2
    // const y = (canvasHeight - imgHeight) / 2

    const widthRatio = canvasWidth / imgWidth
    const heightRatio = canvasHeight / imgHeight

    let scaleRatio: number

    if (widthRatio > heightRatio) {
      scaleRatio = widthRatio
    } else {
      scaleRatio = heightRatio
    }

    for (let i = 0; i < 150; i++) {
      images.push(`${global.pova5ProConfig.sec8frames.path}/0${i}.gif`)
    }

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      imgs.push(img)
    })
    const ani = (type: number) => {
      // ctxs.drawImage(imgs[type], x, y)
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

    ani(0)

    // const ctx = gsap.context(() => {
    const ani1 = gsap
      .timeline()
      .from(".sec8 .box1 .title", 0.5, { opacity: 0, y: 100 }, "a")
      .from(
        ".sec8 .box1 .subgroup",
        0.5,
        { opacity: 0, y: 100, delay: 0.15 },
        "a"
      )
      .from(".sec8 .box1 .desc", 0.5, { opacity: 0, y: 100, delay: 0.3 }, "a")
      .from(".sec8 .box1 .right", 0.5, { opacity: 0, y: 100, delay: 0.45 }, "a")
      .to(".sec8 .box1", 0.5, { opacity: 0 }, "b")
      .from(".sec8 .box2 .title", 1, { opacity: 0, y: 100 }, "c")
      .from(
        ".sec8 .box2 .subgroup",
        1,
        { opacity: 0, y: 100, delay: 0.15 },
        "c"
      )
      .from(".sec8 .box2 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "c")
      .from(".sec8 .box2 .right", 1, { opacity: 0, y: 100, delay: 0.45 }, "c")
      .to(".sec8 .box2", 1, { opacity: 0 }, "d")
      .from(".sec8 .box3 .title", 1, { opacity: 0, y: 100 }, "e")
      .from(
        ".sec8 .box3 .subgroup",
        1,
        { opacity: 0, y: 100, delay: 0.15 },
        "e"
      )
      .from(".sec8 .box3 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "e")
      .from(".sec8 .box3 .right", 1, { opacity: 0, y: 100, delay: 0.45 }, "e")

    ScrollTrigger.create({
      trigger: ".sec8",
      animation: ani1,
      start: "top 50%",
      scrub: true,
      end: "=+370%",
    })

    const tl = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec8",
      animation: tl,
      start: "top 50%",
      scrub: true,
      anticipatePin: 0,
      end: "=+400%",

      onUpdate: ({ progress }) => {
        const now = (progress * 149).toFixed(0)
        ani(Number(now))
      },
    })

    const tl2 = gsap.timeline().to(".sec8", 1, { opacity: 1 })

    ScrollTrigger.create({
      trigger: ".sec8",
      animation: tl2,
      start: "top 0",
      scrub: true,
      pin: true,
      anticipatePin: 0,
      end: "=+350%",
    })
    // }, total)
  }

  const sec9Ani = () => {
    // const ctx = gsap.context(() => {
    const tl = gsap
      .timeline()
      .to(".sec9 .top", 1, { top: 0, ease: "none" }, "a")
      .to(".sec9 .bot", 1, { bottom: 0, ease: "none" }, "a")
    ScrollTrigger.create({
      trigger: ".sec9",
      start: `top 10%`,
      end: "+=40%",
      animation: tl,
      scrub: true,
    })
    // })

    // return () => ctx.revert() // <- Cleanup!
  }

  const sec10Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec10 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec10 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec10 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec10 .outbox", 1, { width: "100vw" }, "a")
      ScrollTrigger.create({
        trigger: ".sec10",
        start: `top 5%`,
        end: "+=40%",
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec11Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec11 .content .title", 1, { opacity: 0, y: 100 }, "a")
        .from(
          ".sec11 .content .desc",
          1,
          { opacity: 0, y: 100, delay: 0.15 },
          "a"
        )
        .from(
          ".sec11 .content .params",
          1,
          { opacity: 0, y: 100, delay: 0.3 },
          "a"
        )
        .from(".sec11 .left", 1, { opacity: 0, x: "-10%" }, "a")
      ScrollTrigger.create({
        trigger: ".sec11",
        start: `top 50%`,
        end: "+=40%",
        animation: tl,
      })

      const tl2 = gsap
        .timeline()
        .to(".sec11 .content .right", 1, { opacity: 0 }, "a")
        .from(".sec11 .content2 .title", 1, { opacity: 0, y: 100 }, "b")
        .from(
          ".sec11 .content2 .desc",
          1,
          { opacity: 0, y: 100, delay: 0.15 },
          "b"
        )

      ScrollTrigger.create({
        trigger: ".sec11",
        start: `top 0`,
        scrub: true,
        pin: true,
        animation: tl2,
        pinSpacing: "new-pin-spacer",
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec12Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec12 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec12 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec12 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec12 .right", 1, { opacity: 0, x: "10%" }, "a")
      ScrollTrigger.create({
        trigger: ".sec12",
        start: `top 50%`,
        end: "+=40%",
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec13Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec13 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec13 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec13 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec13 .outbox", 1, { width: "100vw" }, "a")
      ScrollTrigger.create({
        trigger: ".sec13",
        start: `top 5%`,
        end: "+=40%",
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec14Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec14 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec14 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec14 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec14 .icon", 1.5, { opacity: 0, scale: 0 }, "a")
      ScrollTrigger.create({
        trigger: ".sec14",
        start: `top 50%`,
        end: "+=40%",
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec15Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec15 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec15 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec15 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec15 .left", 1, { opacity: 0, x: "-10%" }, "a")
      ScrollTrigger.create({
        trigger: ".sec15",
        start: `top 50%`,
        end: "+=40%",
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec16Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".sec16 .top", 1, { top: 0 }, "a")
        .to(".sec16 .bot", 1, { bottom: 0 }, "a")
      ScrollTrigger.create({
        trigger: ".sec16",
        start: `top 10%`,
        end: "+=40%",
        animation: tl,
        scrub: true,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec17Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec17 .bigimg", 1, { y: "10%" }, "a")
        .to(".sec17 .bigimg", 1, { opacity: 0 }, "b")
        .from(".sec17 .img", 1, { opacity: 0 }, "b")
        .from(".sec17 .title", 1, { opacity: 0, y: 100 }, "b")
        .from(".sec17 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "b")
        .from(".sec17 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "b")

      ScrollTrigger.create({
        trigger: ".sec17",
        start: `top 40%`,
        end: "+=40%",
        animation: tl,
        scrub: true,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec18Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().to(".sec18 .imgb", 1, { x: "-85%" }, "a")
      ScrollTrigger.create({
        trigger: ".sec18 .imgbox",
        start: `top 70`,
        end: "+=80%",
        pin: true,
        animation: tl,
        scrub: true,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec19Ani = () => {
    const ctx = gsap.context(() => {
      const tl2 = gsap
        .timeline()
        .from(".sec19 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec19 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec19 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
      ScrollTrigger.create({
        trigger: ".sec19",
        start: `top 40%`,
        animation: tl2,
      })

      const tl = gsap
        .timeline()
        .to(".sec19 .fb", 1, { clipPath: `inset(0% 0 0)` }, "a")
        .to(".sec19 .fc", 1, { clipPath: `inset(0% 0 0)` }, "b")
        .to(".sec19 .fd", 1, { clipPath: `inset(0% 0 0)` }, "c")

      ScrollTrigger.create({
        trigger: ".sec19",
        start: `top -100`,
        end: "+=300%",
        animation: tl,
        scrub: true,
        pin: ".sec19",
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const sec20Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec20 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec20 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec20 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec20 .right", 1, { opacity: 0, x: "10%" }, "a")
      ScrollTrigger.create({
        trigger: ".sec20",
        start: `top 50%`,
        end: "+=40%",
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec21Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().to(".sec21 .imgs", 1, { x: "-125%" }, "a")

      ScrollTrigger.create({
        trigger: ".sec21",
        start: `top -100`,
        end: "+=100%",
        pin: true,
        scrub: true,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec22Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .to(".sec22 .top", 1, { top: 0 }, "a")
        .to(".sec22 .bot", 1, { bottom: 0 }, "a")
      ScrollTrigger.create({
        trigger: ".sec22",
        start: `top 10%`,
        end: "+=40%",
        animation: tl,
        scrub: true,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec23Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec23 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec23 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec23 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
      ScrollTrigger.create({
        trigger: ".sec23",
        start: `top 40%`,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec24Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec24 .bigtitle", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec24 .smalltitle", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec24 .params", 1, { opacity: 0, x: "10%", delay: 0.3 }, "a")
      ScrollTrigger.create({
        trigger: ".sec24",
        start: `top 40%`,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec25Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec25 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec25 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec25 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec25 .params", 1, { opacity: 0, y: 100, delay: 0.45 }, "a")
      ScrollTrigger.create({
        trigger: ".sec25",
        start: `top 40%`,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec26Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec26 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec26 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec26 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec26 .img", 1, { opacity: 0, y: 100, delay: 0.45 }, "a")
      ScrollTrigger.create({
        trigger: ".sec26",
        start: `top 40%`,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec27Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec27 .bigtitle", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec27 .smalltitle", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec27 .title", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec27 .subgroup", 1, { opacity: 0, y: 100, delay: 0.45 }, "a")
        .from(".sec27 .desc", 1, { opacity: 0, y: 100, delay: 0.5 }, "a")
        .from(".sec27 .params", 1, { opacity: 0, y: 100, delay: 0.65 }, "a")
        .from(".sec27 .right", 1, { opacity: 0, x: "10%", delay: 0.3 }, "a")

      ScrollTrigger.create({
        trigger: ".sec27",
        start: `top 40%`,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }
  const sec28Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec28 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec28 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec28 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec28 .left", 1, { opacity: 0, x: "-10%", delay: 0.3 }, "a")
      ScrollTrigger.create({
        trigger: ".sec28",
        start: `top 40%`,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec29Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec29 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec29 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec29 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec29 .img", 1, { opacity: 0, y: 100, delay: 0.45 }, "a")
      ScrollTrigger.create({
        trigger: ".sec29",
        start: `top 40%`,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec30Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec30 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec30 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec30 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
      ScrollTrigger.create({
        trigger: ".sec30",
        start: `top 40%`,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec31Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec31 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec31 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec31 .desc", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
        .from(".sec31 .img", 1, { opacity: 0, y: 100, delay: 0.45 }, "a")
        .from(".sec31 .mask", 1, { opacity: 0, y: 100, delay: 0.45 }, "a")
      ScrollTrigger.create({
        trigger: ".sec31",
        start: `top 40%`,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  const sec32Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from(".sec32 .title", 1, { opacity: 0, y: 100 }, "a")
        .from(".sec32 .subgroup", 1, { opacity: 0, y: 100, delay: 0.15 }, "a")
        .from(".sec32 .group", 1, { opacity: 0, y: 100, delay: 0.3 }, "a")
      ScrollTrigger.create({
        trigger: ".sec32",
        start: `top 40%`,
        animation: tl,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  return {
    sec1Ani,
    sec2Ani,
    sec3Ani,
    sec4Ani,
    sec5Ani,
    sec6Ani,
    sec7Ani,
    sec8Ani,
    sec9Ani,
    sec10Ani,
    sec11Ani,
    sec12Ani,
    sec13Ani,
    sec14Ani,
    sec15Ani,
    sec16Ani,
    sec17Ani,
    sec18Ani,
    sec19Ani,
    sec20Ani,
    sec21Ani,
    sec22Ani,
    sec23Ani,
    sec24Ani,
    sec25Ani,
    sec26Ani,
    sec27Ani,
    sec28Ani,
    sec29Ani,
    sec30Ani,
    sec31Ani,
    sec32Ani,
    open,
    setOpen,
  }
}

export default Pc
