import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { ScrollToPlugin } from "gsap/all"
import { EasePack } from "gsap/EasePack"
import { useGSAP } from "@gsap/react"

import UseObservable from "../../hooks/useObserve"
import UseResponse from "../../hooks/useResponse"
// import "./utiles/my.min.js"
import FullVideo from "./fullVideo"
import Sec1 from "./sec1"
import Sec2 from "./sec2_1"
import Sec3 from "./sec3"
import Sec4 from "./sec4"
import Sec5 from "./sec5"
import Sec6 from "./sec6"
import Sec7 from "./sec7"
import Sec8 from "./sec8"
import Sec9 from "./sec9"
import Sec10 from "./sec10"
import Sec10_1 from "./sec10_1"
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
import Sec25 from "./sec25"
import Sec26 from "./sec26"
import Sec27 from "./sec27"
import Sec28 from "./sec28"

import "./common.scss"

const Index = () => {
  const { S25Config } = window as any
  const { responsive } = UseResponse()
  const sec25Ref = useRef<HTMLDivElement>(null)

  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)
  gsap.registerPlugin(TextPlugin)
  gsap.registerPlugin(EasePack)

  const commonProps = {
    useGSAP: useGSAP,
    gsap: gsap,
    config: S25Config,
    ScrollTrigger: ScrollTrigger,
    UseObservable: UseObservable,
    responsive: responsive,
    container: sec25Ref,
  }

  return (
    <div className='s25' ref={sec25Ref}>
      {/* <div className='header'></div> */}
      {/* <div className='top'></div> */}
      <FullVideo {...commonProps} />
      <Sec1 {...commonProps} />
      <Sec2 {...commonProps} />
      <Sec3 {...commonProps} />
      <Sec4 {...commonProps} />
      <Sec5 {...commonProps} />
      <Sec6 {...commonProps} />
      <Sec7 {...commonProps} />
      <Sec8 {...commonProps} />
      <Sec9 {...commonProps} />
      <Sec10 {...commonProps} />
      <Sec10_1 {...commonProps} />
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
      <Sec25 {...commonProps} />
      <Sec26 {...commonProps} />
      <Sec27 {...commonProps} />
      <Sec28 {...commonProps} />
    </div>
  )
}

export default Index
