import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec12 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
  const length = config?.sec12?.data?.length
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
      pin: true,
      start: `top 0%`,
      end: "+=500%",
      animation: tl,
      scrub: 0.2,
      onUpdate: (self) => {
        const active = Math.round(self.progress * (length - 1))
        if (active >= 0) {
          setActiveIndex(active)
        }
      },
    })
  }

  useGSAP(
    () => {
      sec12Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec12' ref={wrap}>
      <div className='sec12_wrap'>
        <div className='pic_wrap'>
          <div className='img_wrap bg_wrap'>
            <img src={src + "/images/pc/sec12_bg_pc.png"} />
          </div>
          <div className='img_wrap phone_wrap'>
            <img src={src + "/images/pc/sec12_phone_pc.png"} />
          </div>
          <div className='content_wrap'>
            <div className='text_wrap'>
              <div
                className='title_75'
                dangerouslySetInnerHTML={{ __html: config?.sec12?.title }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec12?.desc }}
              ></p>
            </div>
            <div className='data_wrap'>
              {config?.sec12?.data?.map((item: any, index: number) => {
                return (
                  <div
                    className={`data_item ${
                      activeIndex === index ? "active" : ""
                    }`}
                    key={index}
                  >
                    <div className='icon_wrap'>
                      <div className='icon noactive'></div>
                      <div className='icon active'></div>
                    </div>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{ __html: item?.title }}
                    ></div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='circle_wrap'>
            {circleList.map((item, index) => (
              <div
                className={`img_wrap circle_item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <img src={src + "/images/pc/" + item} />
              </div>
            ))}
            {/* <div className='img_wrap circle_item'>
              <img src={src + "/images/pc/sec12_red_pc.png"} />
            </div>
            <div className='img_wrap circle_item'>
              <img src={src + "/images/pc/sec12_blue_pc.png"} />
            </div>
            <div className='img_wrap circle_item'>
              <img src={src + "/images/pc/sec12_purple_pc.png"} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec12
