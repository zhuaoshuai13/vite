import { useContext, useRef } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec2 = () => {
  const { spark20pro5gConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec2Ani = () => {
    const animateFrom = (ele: any) => {
      return gsap.timeline().from(ele, 1, {
        y: 60,
        opacity: 0,
        ease: "power2.inOut",
      })
    }

    gsap.utils.toArray(".sec2 .item").forEach((item: any) => {
      ScrollTrigger.create({
        trigger: item,
        start: `top 85%`,
        animation: animateFrom(item),
      })
    })
  }

  useGSAP(
    () => {
      sec2Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec2' ref={wrap}>
      <div className='a_cont'>
        <div className='ctt'>
          <div className='items'>
            {isPc
              ? config.sec2.pc.map((item: any, index: number) => {
                  return (
                    <div className='item' key={index}>
                      <img src={item} loading='lazy' />
                    </div>
                  )
                })
              : config.sec2.mb.map((item: any, index: number) => {
                  return (
                    <div className='item' key={index}>
                      <img src={item} loading='lazy' />
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec2
