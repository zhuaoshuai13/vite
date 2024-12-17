import { useRef, useContext, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { ReactLenis } from "lenis/react"

import { ScreenContext } from "../../provider"
import BlackSec from "./BlackSec"
import WhiteSec from "./WhiteSec"
// import Sec1 from "./sec1"
// import Sec2 from "./sec2"
// import Sec3 from "./sec3"
// import Sec4 from "./sec4"
// import Sec5 from "./sec5"
// import Sec6 from "./sec6"
// import Sec7 from "./sec7"
// import Sec8 from "./sec8"
// import Sec9 from "./sec9"
// import Sec10 from "./sec10"
// import Sec11 from "./sec11"
// import Sec12 from "./sec12"
import NavBar from "./NavBar"
import SlideDown from "./SlideDown"
import FullVideo from "./fullVideo"
import "./index.scss"

const Ear571H = () => {
  const wrap = useRef(null)
  const [isWhite, setIsWhite] = useState(false)
  const { isPc } = useContext(ScreenContext)
  const linkEleList = ["#nav_link_0", "#nav_link_1", "#nav_link_2"]
  const [inViewIdList, setInViewIdList] = useState<number[]>([])

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const isElementScrolledPastViewport = (element: Element): boolean => {
    const rect = element.getBoundingClientRect()
    return rect.top < window.innerHeight - 100
  }

  useGSAP(
    () => {
      // specSecAni()
    },
    { scope: wrap }
  )

  useEffect(() => {
    const myElement = document.querySelector(".white_wrap")
    window.addEventListener("scroll", () => {
      if (myElement && isElementScrolledPastViewport(myElement)) {
        setIsWhite(true)
      } else {
        setIsWhite(false)
      }
      linkEleList.map((item) => {
        const linkItem = document.querySelector(item)
        if (
          linkItem &&
          linkItem?.getBoundingClientRect().top < window.innerHeight
        ) {
          setInViewIdList((prev) => [
            ...new Set([...prev, Number(item.split("_")[2])]),
          ])
        } else {
          setInViewIdList((prev) =>
            prev.filter((id) => id !== Number(item.split("_")[2]))
          )
        }
      })
    })
  }, [])

  return (
    <ReactLenis root>
      <div className={`ear571h ${isWhite ? "is_white" : ""}`} ref={wrap}>
        <BlackSec />
        <WhiteSec />
        <FullVideo />
        <NavBar inViewIdList={inViewIdList} />
        <SlideDown />
      </div>
    </ReactLenis>
  )
}

export default Ear571H
