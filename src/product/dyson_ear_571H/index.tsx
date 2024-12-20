import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { ReactLenis } from "lenis/react"

import BlackSec from "./BlackSec"
import WhiteSec from "./WhiteSec"
import NavBar from "./NavBar"
import SlideDown from "./SlideDown"
import BackTop from "./BackTop"
import "./index.scss"

const Ear571H = () => {
  const wrap = useRef(null)
  const [showSlideDown, setShowSlideDown] = useState(true)
  const [isWhite, setIsWhite] = useState(false)
  const [isBottom, setIsBottom] = useState(false)
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
    const sec2Element = document.querySelector(".sec2")
    const bottomElement = document.querySelector(".sec10")
    window.addEventListener("scroll", () => {
      if (
        sec2Element &&
        sec2Element.getBoundingClientRect().top < window.innerHeight / 2
      ) {
        setShowSlideDown(false)
      } else {
        setShowSlideDown(true)
      }
      if (myElement && isElementScrolledPastViewport(myElement)) {
        setIsWhite(true)
      } else {
        setIsWhite(false)
      }
      if (bottomElement && isElementScrolledPastViewport(bottomElement)) {
        setIsBottom(true)
      } else {
        setIsBottom(false)
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
        <NavBar inViewIdList={inViewIdList} />
        <SlideDown showSlideDown={showSlideDown} />
        <BackTop isBottom={isBottom} />
      </div>
    </ReactLenis>
  )
}

export default Ear571H
