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
  const circleList = [
    "sec12_green_pc.webp",
    "sec12_red_pc.webp",
    "sec12_blue_pc.webp",
    "sec12_purple_pc.webp",
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
        <div className='pic_wrap'>
          <div className='img_wrap bg_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec12_bg_pc.webp"} />
          </div>
          <div className='img_wrap phone_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec12_phone_pc.webp"} />
          </div>
          <div className='content_wrap'>
            <div className='text_wrap slide_up'>
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
                <img loading='lazy' src={src + "/images/pc/" + item} />
              </div>
            ))}
            {/* <div className='img_wrap circle_item'>
              <img loading="lazy" src={src + "/images/pc/sec12_red_pc.webp"} />
            </div>
            <div className='img_wrap circle_item'>
              <img loading="lazy" src={src + "/images/pc/sec12_blue_pc.webp"} />
            </div>
            <div className='img_wrap circle_item'>
              <img loading="lazy" src={src + "/images/pc/sec12_purple_pc.webp"} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec12
