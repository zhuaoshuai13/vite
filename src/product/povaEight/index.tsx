import { useEffect, useLayoutEffect } from "react"
// import "./index.scss"

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
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const sec1Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec1 .slogan", 1, { x: "-20%", opacity: 0 }, "a")
      .from(".sec1 .title_130", 1, { x: "-20%", opacity: 0 }, "a")
      .from(".sec1 .icon1", 1, { x: "20%", opacity: 0, delay: 0.5 }, "a")
      .from(".sec1 .params", 1, { x: "-20%", opacity: 0, delay: 0.5 }, "a")
      .from(".sec1 .tips", 1, { x: "-20%", opacity: 0, delay: 0.7 }, "a")

    ScrollTrigger.create({
      trigger: ".sec1",
      start: `top 0%`,
      end: "+=20%",
      animation: tl,
    })
  }

  const sec3Ani = () => {
    const ctx = gsap.context(() => {
      const tl2 = gsap
        .timeline()
        .from(".sec3 .text", 1, { y: "20%", opacity: 0 })

      ScrollTrigger.create({
        trigger: ".sec3",
        start: `top 40%`,
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
          { y: "-40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec3 .icon2",
          0.5,
          { y: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec3 .icon3",
          0.5,
          { x: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec3",
        start: `top -10%`,
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
        .from(
          ".sec3 .box1 .title_48",
          1,
          { y: "20%", opacity: 0, delay: 0.25 },
          "a"
        )
        .from(".sec3 .circle", 1, { x: "20%", opacity: 0, delay: 0.25 }, "a")
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
        start: `top 50%`,
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
        start: `top 20%`,
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
    const tl = gsap
      .timeline()
      .from(".sec4 .title_130", 1, { x: "-20%", opacity: 0 }, "a")
      .from(".sec4 .icon1", 1, { x: "-40%", opacity: 0 }, "a")
      .from(".sec4 .icon2", 1, { y: "-40%", opacity: 0 }, "a")
      .from(".sec4 .icon3", 1, { x: "40%", opacity: 0 }, "a")
      .from(".sec4 .icon4", 1, { y: "40%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec4",
      start: `top 65%`,
      animation: tl,
    })

    const tl2 = gsap
      .timeline()
      .from(".sec4 .pic", 2, { scale: 1.1 }, "a")
      .from(".sec4 .left_box", 1.5, { x: "-40%", opacity: 0, delay: 0.25 }, "a")
      .from(".sec4 .right_box", 1.5, { x: "40%", opacity: 0, delay: 0.25 }, "a")
      .from(".sec4 .tips", 1.5, { x: "40%", opacity: 0, delay: 0.25 }, "a")

    ScrollTrigger.create({
      trigger: ".sec4",
      start: `top -50%`,
      anticipatePin: 0,
      animation: tl2,
      pin: true,
      scrub: true,
    })
  }
  const sec5Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec5 .title_130", 1, { x: "-20%", opacity: 0 }, "a")
      .from(".sec5 .icon1", 1, { x: "-40%", opacity: 0 }, "a")
      .from(".sec5 .icon2", 1, { y: "-40%", opacity: 0 }, "a")
      .from(".sec5 .icon3", 1, { y: "40%", opacity: 0 }, "a")
      .from(".sec5 .icon4", 1, { x: "40%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec5",
      start: `top 65%`,
      animation: tl,
    })
  }
  
  const sec9Ani = () => {
    const ctx = gsap.context(() => {
      const tl1 = gsap
        .timeline()
        .from(".sec9 .sec9_text", 1, { y: "20%", opacity: 0 })

      ScrollTrigger.create({
        trigger: ".sec9",
        start: `top 40%`,
        end: "+=20%",
        animation: tl1,
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
          { y: "-40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec10 .icon2",
          0.5,
          { y: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec10 .icon3",
          0.5,
          { x: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec10 .icon4",
          0.5,
          { y: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec10",
        start: `top 70%`,
        end: "+=20%",
        animation: tl3,
      })

      const tl4 = gsap
        .timeline()
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
        .to(".sec10 .topLine", 0.1, { rotate: -20, },  "m")
        .to(".sec10 .bottomLine", 0.1, { rotate: -20, },  "m")
        .to(".sec10 .topLine", 0.1, { rotate: 0, },  "n")
        .to(".sec10 .bottomLine", 0.1, { rotate: 0, },  "n")
        .to(".sec10 .topLine", 0.1, { rotate: -20, },  "b")
        .to(".sec10 .bottomLine", 0.1, { rotate: -20, },  "b")
        .to(".sec10 .topLine", 0.1, { rotate: 0, },  "v")
        .to(".sec10 .bottomLine", 0.1, { rotate: 0, },  "v")

      ScrollTrigger.create({
        trigger: ".sec10 .content_box",
        start: `top 70%`,
        animation: tl4,
      })
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
          ".sec11 .icon1",
          0.5,
          { y: "-40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec11 .icon2",
          0.5,
          { y: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec11 .icon3",
          0.5,
          { x: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec11",
        start: `top 70%`,
        end: "+=20%",
        animation: tl3,
      })

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
        .to(".sec11 .left_circle", 0.1, { rotate: 20, },   "m")
        .to(".sec11 .right_circle", 0.1, { rotate: 20, },   "m")
        .to(".sec11 .left_circle", 0.1, { rotate: 0, },   "n")
        .to(".sec11 .right_circle", 0.1, { rotate: 0, },   "n")
        .to(".sec11 .left_circle", 0.1, { rotate: 20, },   "b")
        .to(".sec11 .right_circle", 0.1, { rotate: 20, },   "b")
        .to(".sec11 .left_circle", 0.1, { rotate: 0, },   "v")
        .to(".sec11 .right_circle", 0.1, { rotate: 0, },   "v")

      ScrollTrigger.create({
        trigger: ".sec11 .content_box",
        start: `top 70%`,
        animation: tl4,
      })
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
          { y: "-40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec12 .icon2",
          0.5,
          { y: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec12 .icon3",
          0.5,
          { x: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec12",
        start: `top 70%`,
        end: "+=20%",
        animation: tl3,
      })
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
          ".sec13 .icon1",
          0.5,
          { y: "-40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec13 .icon2",
          0.5,
          { y: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec13 .icon3",
          0.5,
          { x: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec13",
        start: `top 70%`,
        end: "+=20%",
        animation: tl3,
      })

      const tl4 = gsap
        .timeline()
        .from(
          ".sec13 .text_box .title",
          1,
          { y: "20%", opacity: 0, delay: 0.25 },
          "a"
        )
        .from(
          ".sec13 .text_box .desc_18",
          1,
          { y: "20%", opacity: 0, delay: 0.5 },
          "a"
        )
        .from(
          ".sec13 .text_box .params",
          1,
          { y: "20%", opacity: 0, delay: 0.75 },
          "a"
        )
        .to(".sec13 .sec13_left", 0.1, { rotate: 20, },   "m")
        .to(".sec13 .sec13_right", 0.1, { rotate: 20, },   "m")
        .to(".sec13 .sec13_left", 0.1, { rotate: 0, },   "n")
        .to(".sec13 .sec13_right", 0.1, { rotate: 0, },   "n")
        .to(".sec13 .sec13_left", 0.1, { rotate: 20, },   "b")
        .to(".sec13 .sec13_right", 0.1, { rotate: 20, },   "b")
        .to(".sec13 .sec13_left", 0.1, { rotate: 0, },   "v")
        .to(".sec13 .sec13_right", 0.1, { rotate: 0, },   "v")

      ScrollTrigger.create({
        trigger: ".sec13 .sec13_content",
        start: `top 70%`,
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
          { y: "-40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec14 .icon2",
          0.5,
          { y: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )
        .from(
          ".sec14 .icon3",
          0.5,
          { x: "40%", opacity: 0, ease: "none", delay: 0.5 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec14",
        start: `top 70%`,
        end: "+=20%",
        animation: tl3,
      })

      const tl4 = gsap
        .timeline()
        .from(
          ".sec14 .sec14_left",
          1,
          { y: "20%", opacity: 0, delay: 0.25 },
          "a"
        )
        .from(
          ".sec14 .sec14_right",
          1,
          { y: "20%", opacity: 0, delay: 0.5 },
          "a"
        )
        .from(
          ".sec14 .text_box .title",
          1,
          { y: "20%", opacity: 0, delay: 0.75 },
          "a"
        )
        .from(
          ".sec14 .text_box .desc_18",
          1,
          { y: "20%", opacity: 0, delay: 1 },
          "a"
        )
        .from(
          ".sec14 .text_box .params",
          1,
          { y: "20%", opacity: 0, delay: 1.25 },
          "a"
        )
        .to(".sec14 .sec14_left", 0.1, { rotate: 20, },   "m")
        .to(".sec14 .sec14_right", 0.1, { rotate: 20, },   "m")
        .to(".sec14 .sec14_left", 0.1, { rotate: 0, },   "n")
        .to(".sec14 .sec14_right", 0.1, { rotate: 0, },   "n")
        .to(".sec14 .sec14_left", 0.1, { rotate: 20, },   "b")
        .to(".sec14 .sec14_right", 0.1, { rotate: 20, },   "b")
        .to(".sec14 .sec14_left", 0.1, { rotate: 0, },   "v")
        .to(".sec14 .sec14_right", 0.1, { rotate: 0, },   "v")

      ScrollTrigger.create({
        trigger: ".sec14 .sec14_content",
        start: `top 70%`,
        animation: tl4,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  useLayoutEffect(() => {
    sec1Ani()
    sec3Ani()
    sec4Ani()
    sec5Ani()
    sec9Ani()
    sec10Ani()
    sec11Ani()
    sec12Ani()
    sec13Ani()
    sec14Ani()
  }, [])
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
      <Sec4 />
      <Sec5
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
      />
      <Sec6
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
      />
      <Sec7 />
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
