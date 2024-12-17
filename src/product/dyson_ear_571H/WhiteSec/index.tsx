import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import UseImagesLoad from "../../../hooks/useImagesLoad"
import Sec4 from "../sec4"
import Sec6 from "../sec6"
import Sec7 from "../sec7"
import Sec8 from "../sec8"
import Sec9 from "../sec9"
import Sec10 from "../sec10"

import "./index.scss"

const BlackSec = () => {
  return (
    <div className='white_wrap'>
      <Sec4 />
      <Sec6 />
      <Sec7 />
      <Sec8 />
      <Sec9 />
      <Sec10 />
    </div>
  )
}

export default BlackSec
