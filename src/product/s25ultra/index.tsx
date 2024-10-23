import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { ReactLenis, useLenis } from "lenis/react"

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

const S25Ultra = () => {
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const specSecAni = () => {
    const animateFrom = (ele: any) => {
      return gsap.timeline().from(ele, 1, {
        y: 100,
        opacity: 0,
        ease: "power2.inOut",
      })
    }

    gsap.utils.toArray(".s25ultra .slide_up").forEach((item: any) => {
      ScrollTrigger.create({
        trigger: item,
        start: `top 95%`,
        animation: animateFrom(item),
        toggleActions: "play none none reverse",
      })
    })
  }

  useGSAP(
    () => {
      specSecAni()
    },
    { scope: wrap, dependencies: [wrap] }
  )

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      <div className='s25ultra' ref={wrap}>
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

export default S25Ultra
