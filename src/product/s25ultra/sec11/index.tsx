import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec11 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { s25ultraConfig: config, src } = window as any
  const length = config?.sec11?.color?.length
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)
  const [timeline, setTimeline] = useState<any>()

  const handleSwitchPic = (index: number) => {
    gsap.to(window, {
      scrollTo: {
        y: timeline.scrollTrigger.labelToScroll("pic" + index),
      },
      ease: "power2.inOut",
    })
  }

  const sec11Ani = () => {
    const tl = gsap
      .timeline()
      .to(".spec_part", 1, { y: "-100%", ease: "power2.inOut" })
      .to(".pic_wrap", 1, {}, "pic1")
      .to(".pic_wrap", 1, {}, "pic2")
      .to(".pic_wrap", 1, {}, "pic3")
      // .to(".pic_wrap", 1, {}, "pic4")
    // .fromTo(
    //   ".phone2",
    //   { rotateX: 90 },
    //   { rotateX: 0, opacity: 1, ease: "power2.inOut" },
    //   "a+=0.2"
    // )
    ScrollTrigger.create({
      trigger: ".sec11_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=400%",
      animation: tl,
      scrub: 0.2,
      onUpdate: (self) => {
        if(self.progress >= 0.25 && self.progress < 0.5) {
          setActiveIndex(0)
        }else if(self.progress >= 0.5 && self.progress < 0.75) {
          setActiveIndex(1)
        }else if(self.progress >= 0.75) {
          setActiveIndex(2)
        }
      },
    })
    setTimeline(tl)
  }

  useGSAP(
    () => {
      sec11Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec11' ref={wrap}>
      <div className='sec11_wrap'>
        <div className='spec_part'>
          <div className='spec_text_wrap'>
            <div
              className='spec_title'
              dangerouslySetInnerHTML={{ __html: config?.sec11?.spec_title }}
            ></div>
            <p
              className='spec_desc'
              dangerouslySetInnerHTML={{ __html: config?.sec11?.spec_desc }}
            ></p>
          </div>
        </div>
        <div className='content_wrap'>
          <div className={`pic_wrap`}>
            <div
              className={`img_wrap phone_wrap phone1 ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              <img loading='lazy' src={src + "/images/pc/sec11_p1_pc.webp"} />
            </div>
            <div
              className={`img_wrap phone_wrap phone2 ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              <img loading='lazy' src={src + "/images/pc/sec11_p2_pc.webp"} />
            </div>
            <div
              className={`img_wrap phone_wrap phone3 ${
                activeIndex === 2 ? "active" : ""
              }`}
            >
              <img loading='lazy' src={src + "/images/pc/sec11_p3_pc.webp"} />
            </div>
          </div>
          <div>
            <div
              className={`text_wrap ${activeIndex === 1 ? "white" : ""} ${
                activeIndex === 0 || activeIndex === 1 ? "active" : ""
              }`}
            >
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: config?.sec11?.part1?.title,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec11?.part1?.desc }}
              ></p>
            </div>
            <div className={`text_wrap ${activeIndex === 2 ? "active" : ""}`}>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: config?.sec11?.part2?.title,
                }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec11?.part2?.desc }}
              ></p>
            </div>
          </div>
          <div className='bottom_content'>
            <div className='btn_wrap'>
              <button className='titanium' onClick={() => handleSwitchPic(1)}>
                <img loading='lazy' src={src + "/images/pc/sec11_b1_pc.webp"} />
              </button>
              <button className='black' onClick={() => handleSwitchPic(2)}>
                <img loading='lazy' src={src + "/images/pc/sec11_b2_pc.webp"} />
              </button>
              <button className='ocean' onClick={() => handleSwitchPic(3)}>
                <img loading='lazy' src={src + "/images/pc/sec11_b3_pc.webp"} />
              </button>
            </div>
            <div className='color_wrap'>
              {config?.sec11?.color?.map((item: any, index: number) => {
                return (
                  <div
                    className={`color_item ${
                      activeIndex === index ? "active" : ""
                    } ${index === 2 ? "color_ocean" : ""}`}
                    key={index}
                  >
                    <div
                      className='color_title'
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                    <div
                      className='desc_16 color_desc'
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec11
