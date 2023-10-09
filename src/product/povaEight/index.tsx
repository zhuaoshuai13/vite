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
