// import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { EasePack } from "gsap/EasePack"
import { useGSAP } from "@gsap/react"

import UseObservable from "../../hooks/useObserve"
import UseResponse from "../../hooks/useResponse"
// import "./utiles/my.min.js"

import CustomCursor from "./Cursor"
import Sec1 from "./sec1"
import Sec2 from "./sec2"
import Sec3 from "./sec3"
import Sec4 from "./sec4"
import Sec5 from "./sec5"
import Sec6 from "./sec6"
import Sec7 from "./sec7"
import Sec8 from "./sec8"
import SecRom from "./secRom"
import SecSpeed from "./secSpeed"
import SecGame from "./secGame"
import SecSlender from "./secSlender"
import SecFlex from "./secFlex"
import SecMode from "./secMode"
import SecCamera from "./secCamera"
import SecZoom from "./secZoom"
import SecAutomatic from "./secAutomatic"
import SecOs from "./secOs"
import SecNote from "./secNote"

import "./var.scss"

const Index = () => {
  const { P65Config } = window as any
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger)
  // gsap.registerPlugin(ScrollSmoother)
  gsap.registerPlugin(TextPlugin)
  gsap.registerPlugin(EasePack)

  // useEffect(() => {
  //   ScrollSmoother.create({
  //     smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //     effects: true, // looks for data-speed and data-lag attributes on elements
  //     smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  //   })
  // }, [])

  const commonProps = {
    useGSAP: useGSAP,
    gsap: gsap,
    config: P65Config,
    ScrollTrigger: ScrollTrigger,
    UseObservable: UseObservable,
    responsive: responsive,
  }

  return (
    <div>
      <CustomCursor />
      <Sec1 {...commonProps} />
      <Sec2 {...commonProps} />
      <Sec3 {...commonProps} />
      <Sec4 {...commonProps} />
      <Sec5 {...commonProps} />
      <Sec6 {...commonProps} />
      <Sec7 {...commonProps} />
      <Sec8 {...commonProps} />
      <SecRom {...commonProps} />
      <SecSpeed {...commonProps} />
      <SecGame {...commonProps} />
      <SecSlender {...commonProps} />
      <SecFlex {...commonProps} />
      <SecMode {...commonProps} />
      <SecCamera {...commonProps} />
      <SecZoom {...commonProps} />
      <SecAutomatic {...commonProps} />
      <SecOs {...commonProps} />
      <SecNote {...commonProps} />
    </div>
  )
}

export default Index
