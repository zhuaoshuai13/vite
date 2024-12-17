import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import UseImagesLoad from "../../../hooks/useImagesLoad"
import { useScroll, useScrollView } from "../hooks/useScroll"

import "./index.scss"

const NavBar = ({ inViewIdList }) => {
  console.log("🚀 ~ NavBar ~ inViewIdList:", inViewIdList)
  const { scrollPosition } = useScroll()
  // const sectionIds = ["nav_link_0", "nav_link_1", "nav_link_2"]
  const navList = [
    { text: "试听体验", link: "nav_link_0" },
    { text: "个性化", link: "nav_link_1" },
    { text: "产品细节", link: "nav_link_2" },
  ]

  // const { inViewIdList } = useScrollView(sectionIds)

  return (
    <div
      className={`pdp_navbar ${
        scrollPosition > window.innerHeight * 0.5 ? "active" : ""
      }`}
    >
      {navList.map((item, index) => (
        <div
          className={`nav_item ${
            index === Math.max(...inViewIdList) ? "active" : ""
          }`}
          key={index}
        >
          <a href={`#${item.link}`}>{item.text}</a>
        </div>
      ))}
    </div>
  )
}

export default NavBar
