import { useRef, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import UseImagesLoad from "../../../hooks/useImagesLoad"
import Sec1 from "../sec1"
import Sec2 from "../sec2"
import Sec3 from "../sec3"

import "./index.scss"

const BlackSec = () => {
  return (
    <div className='black_wrap'>
      <Sec1 />
      <Sec2 />
      <Sec3 />
    </div>
  )
}

export default BlackSec
