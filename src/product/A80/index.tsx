import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
// import { ScrollToPlugin } from "gsap/all"
import { EasePack } from "gsap/EasePack"
import { useGSAP } from "@gsap/react"

import UseObservable from "../../hooks/useObserve"
import UseResponse from "../../hooks/useResponse"

import "./var.scss"

// import "./utils/scroll.js"

import Sec1 from "./sec1"
// import Sec2 from "./sec2"
import Sec3 from "./sec3"
import Sec4 from "./sec4"
import Sec5 from "./sec5"
import Sec6 from "./sec6"
import Sec7 from "./sec7"
import SecAdd from "./secAdd"
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
import Sec20 from "./sec20"
import Sec21 from "./sec21"
import Sec22 from "./sec22"
import Sec23 from "./sec23"
import Sec24 from "./sec24"
import FullVideo from "./fullVideo"

import "./var.scss"

const Index = () => {
  const { AEighty } = window as any
  const { responsive } = UseResponse()
  const container = useRef<HTMLDivElement>(null)

  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(TextPlugin)
  gsap.registerPlugin(EasePack)
  // gsap.registerPlugin(ScrollToPlugin)
  // gsap.registerPlugin(ScrollSmoother)
  useEffect(() => {
    // ScrollSmoother.create({
    //   smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
    //   effects: true, // looks for data-speed and data-lag attributes on elements
    //   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    // })
  }, [responsive])

  const commonProps = {
    useGSAP: useGSAP,
    gsap: gsap,
    config: AEighty,
    ScrollTrigger: ScrollTrigger,
    UseObservable: UseObservable,
    responsive: responsive,
    container: container,
  }

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>
        <div className='a80' ref={container}>
          <div>
            {/* <div className='adams'></div> */}
            <Sec1 {...commonProps} />
            {/* <Sec2 {...commonProps} /> */}
            <Sec3 {...commonProps} />
            <Sec4 {...commonProps} />
            <Sec5 {...commonProps} />
            <Sec6 {...commonProps} />
            <Sec7 {...commonProps} />
            <SecAdd {...commonProps} />
            <Sec8 {...commonProps} />
            <Sec9 {...commonProps} />
            <Sec10 {...commonProps} />
            <Sec11 {...commonProps} />
            <Sec12 {...commonProps} />
            <Sec13 {...commonProps} />
            <Sec14 {...commonProps} />
            <Sec15 {...commonProps} />
            <Sec16 {...commonProps} />
            <Sec17 {...commonProps} />
            <Sec18 {...commonProps} />
            <Sec19 {...commonProps} />
            <Sec20 {...commonProps} />
            <Sec21 {...commonProps} />
            <Sec22 {...commonProps} />
            <Sec23 {...commonProps} />
            <Sec24 {...commonProps} />
            <FullVideo {...commonProps} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
