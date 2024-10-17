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
// import Sec14 from "./sec14"
import Sec15 from "./sec15"
import Sec16 from "./sec16"
import Sec17 from "./sec17"
import Sec18 from "./sec18"
import "./index.scss"

const S25Ultra = () => {
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const specSecAni = () => {
    const animateFrom = (ele: any) => {
      return gsap.timeline().from(ele, 1, {
        x: 100,
        opacity: 0,
        ease: "power2.inOut",
      })
    }

    gsap.utils.toArray(".spec_sec .ctt").forEach((item: any) => {
      ScrollTrigger.create({
        trigger: item,
        start: `top 85%`,
        animation: animateFrom(item),
      })
    })
  }

  useGSAP(
    () => {
      specSecAni()
    },
    { scope: wrap }
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
        <Sec15 />
        <Sec16 />
        <Sec17 />
        <Sec18 />
      </div>
    </ReactLenis>
  )
}

export default S25Ultra
