import { useRef, useContext } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { ReactLenis } from "lenis/react"

import { ScreenContext } from "../../provider"
import Sec1 from "./sec1"
import Sec2 from "./sec2"
import Sec3 from "./sec3"
import Sec4 from "./sec4"
import Sec5 from "./sec5"
import Sec6 from "./sec6"
import Sec7 from "./sec7"
import Sec8 from "./sec8"
import Sec9 from "./sec9"
import Sec10 from "./sec10"
import Sec11 from "./sec11"
import Sec12 from "./sec12"
import Sec13 from "./sec13"
import Sec14 from "./sec14"
import Sec15 from "./sec15"
import Sec16 from "./sec16"
import Sec17 from "./sec17"
import Sec18 from "./sec18"
import Sec19 from "./sec19"
import FullVideo from "./fullVideo"
import "./index.scss"

const Tab30Pro = () => {
  const wrap = useRef(null)
  // 传到sec19的swiper，有了swiper之后再执行slide-up动画，防止slide-up的动画初始化在swiper初始化之前，导致slide-up动画的触发时机有问题
  const { isPc } = useContext(ScreenContext)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const specSecAni = () => {
    const animateFrom = (ele: any) => {
      return gsap.timeline().from(ele, 1, {
        y: 100,
        opacity: 0,
        ease: "power2.inOut",
      })
    }

    gsap.utils.toArray(".tab30pro .slide_up").forEach((item: any) => {
      ScrollTrigger.create({
        trigger: item,
        start: `top 95%`,
        animation: animateFrom(item),
        toggleActions: "play none none reverse",
      })
    })

    gsap.utils
      .toArray(".tab30pro .spec_part .spec_text_wrap")
      .forEach((item: any) => {
        const tl1 = gsap.timeline().from(
          item,
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "a"
        )
        ScrollTrigger.create({
          trigger: item,
          start: `top ${isPc ? "85%" : "95%"}`,
          animation: tl1,
          toggleActions: "play none none reverse",
        })
      })
  }

  useGSAP(
    () => {
      specSecAni()
    },
    { scope: wrap }
  )

  return (
    <ReactLenis root>
      <div className='tab30pro' ref={wrap}>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
        <Sec6 />
        <Sec7 />
        <Sec8 />
        <Sec9 />
        <Sec10 />
        <Sec11 />
        <Sec12 />
        <Sec13 />
        <Sec14 />
        <Sec15 />
        <Sec16 />
        <Sec17 />
        <Sec18 />
        <Sec19 />
        <FullVideo />
      </div>
    </ReactLenis>
  )
}

export default Tab30Pro
