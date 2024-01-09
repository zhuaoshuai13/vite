import styles from "./index.module.scss"
import { useContext, useRef, useEffect } from "react"

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScreenContext } from "../../../provider"

const Sec1 = () => {
  const { isPc } = useContext(ScreenContext)
  const titleRef = useRef(null)
  const wrapper = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec1Ani = () => {
    if (isPc) {
      const tl = gsap
        .timeline()
        .from('.'+styles.title, { y: "3vw", opacity: 0 })

      ScrollTrigger.create({
        trigger: titleRef.current,
        start: `top 50%`,
        animation: tl,
      })
    }
  }

  useGSAP(() => {
    sec1Ani()
  }, {scope: wrapper})
  // useEffect(() => {
  //   sec1Ani()
  // })

  return (
    <div>
      <div
        className='full_view'
        style={{ height: "200vh", width: "100%" }}
      ></div>
      <div className={styles.title} ref={titleRef}>
        123
      </div>
      <div className='wrapper' ref={wrapper}>
        <div className={styles.title + ' title'} ref={titleRef}>
          123
        </div>
      </div>
      <div
        className='full_view'
        style={{ height: "200vh", width: "100%" }}
      ></div>
    </div>
  )
}

export default Sec1
