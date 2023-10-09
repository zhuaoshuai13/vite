import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import UseObservable from "../../../hooks/useObserve"
import UseResponse from "../../../hooks/useResponse"

import "./index.scss"

import Sec10 from "../sec10"
import Sec11 from "../sec11"
import Sec12 from "../sec12"
import Sec13 from "../sec13"
import Sec14 from "../sec14"

const Sec9 = () => {
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)
  const { responsive } = UseResponse()
  return (
    <div className={`sec9 pop8 ${IntersectionObserver}`} ref={ref}>
      <div className='circle'></div>
      <div
        className='sec9_text'
        dangerouslySetInnerHTML={{ __html: global.pop8Config.sec9.title }}
      ></div>
      <Sec10
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
      />
      <Sec11
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
      />
      <Sec12
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
      />
      <Sec13
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
      />
      <Sec14
        isPc={responsive?.md}
        gsap={gsap}
        ScrollTrigger={ScrollTrigger}
        ScrollToPlugin={ScrollToPlugin}
      />
    </div>
  )
}

export default Sec9
