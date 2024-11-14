import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec12 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const circleList = [
    "sec12_green_pc.png",
    "sec12_red_pc.png",
    "sec12_blue_pc.png",
    "sec12_purple_pc.png",
  ]
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const sec12Ani = () => {
    const tl = gsap.timeline().to(".pic_wrap", {})
    ScrollTrigger.create({
      trigger: ".sec12_wrap",
      animation: tl,
      onEnter: () => {
        setActiveIndex(0)
      },
    })
  }

  useGSAP(
    () => {
      sec12Ani()
    },
    { scope: wrap }
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < 3) {
        setActiveIndex((prev) => prev + 1)
      } else {
        setActiveIndex(0)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <section className='sec12' ref={wrap}>
      <div className='sec12_wrap'>
        <div className='spec_part'>
          <div className='img_wrap spec_bg'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec12_f1_pc.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec12_f1_pc.png"}
              />
              <img loading='lazy' src={src + "/images/pc/sec12_f1_pc.png"} />
            </picture>
          </div>
          <div className='spec_text_wrap'>
            <div
              className='spec_title'
              dangerouslySetInnerHTML={{ __html: config?.sec12?.title }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec12
