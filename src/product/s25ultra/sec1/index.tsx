import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec1 = () => {
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [finishLoad, setFinishLoad] = useState(false)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const loadImage = (src: string) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setFinishLoad(true)
    }
  }

  const sec1Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".phone2",
        {
          x: "20%",
          y: "-20%",
          rotate: "-32deg",
          opacity: 0,
          ease: "power2.inOut",
          duration: 1
        },
        "a"
      )
      .from(
        ".phone3",
        {
          x: "100%",
          y: "-20%",
          rotate: "-66deg",
          opacity: 0,
          ease: "power2.inOut",
          duration: 1.5
        },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec1_wrap",
      start: `top 0`,
      animation: tl,
    })
  }

  useGSAP(
    () => {
      sec1Ani()
    },
    { scope: wrap, dependencies: [finishLoad] }
  )

  useEffect(() => {
    if (config.sec1.type === "type1") {
      if (isPc) {
        loadImage(config.sec1.phone.pc)
      } else {
        loadImage(config.sec1.phone.mb)
      }
    } else if (config.sec1.type === "type2") {
      if (isPc) {
        loadImage(config.sec1.type2.kv.pc)
      } else {
        loadImage(config.sec1.type2.kv.mb)
      }
    }
  }, [])

  return (
    <section className='sec1' ref={wrap}>
      <div className="sec1_wrap">
        <div className="phone_wrap img_wrap phone1">
          <img src={src + "/images/pc/sec1_p1_pc.png"} />
        </div>
        <div className="phone_wrap img_wrap phone2">
          <img src={src + "/images/pc/sec1_p2_pc.png"} />
        </div>
        <div className="phone_wrap img_wrap phone3">
          <img src={src + "/images/pc/sec1_p3_pc.png"} />
        </div>
        <div className="content_wrap">
          <div className="left">
            <div className="img_wrap logo">
              <img src={src + "/images/pc/sec1_logo_pc.png"} />
            </div>
          </div>
          <div className="right">
            <div className="icon_items">
              <div className="img_wrap item">
                <img src={src + "/images/pc/sec1_icon1_pc.png"} />
              </div>
              <div className="img_wrap item">
                <img src={src + "/images/pc/sec1_icon2_pc.png"} />
              </div>
              <div className="img_wrap item">
                <img src={src + "/images/pc/sec1_icon3_pc.png"} />
              </div>
              <div className="img_wrap item">
                <img src={src + "/images/pc/sec1_icon4_pc.png"} />
              </div>
              <div className="img_wrap item">
                <img src={src + "/images/pc/sec1_icon5_pc.png"} />
              </div>
              <div className="img_wrap item">
                <img src={src + "/images/pc/sec1_icon6_pc.png"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec1
