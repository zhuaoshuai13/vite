import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import UseImagesLoad from "../../../hooks/useImagesLoad"
import { useScroll } from "../hooks/useScroll"

import "./index.scss"

const SlideDown = () => {
  const { scrollPosition } = useScroll()

  return (
    scrollPosition < window.innerHeight * 0.5 && (
      <div className='slide_down'>
        <div className='img_wrap hand_icon'>
          <img src='/src/assets/dyson_ear571h/images/slide_down.png' />
        </div>
        <p>向下滑动</p>
      </div>
    )
  )
}

export default SlideDown
