import { useContext, useRef, useState } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec11 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const content_wrap = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
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
    ScrollTrigger.create({
      trigger: ".sec11_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=400%",
      animation: tl,
      scrub: 0.2,
      onUpdate: (self) => {
        if (self.progress >= 0.25 && self.progress < 0.5) {
          setActiveIndex(0)
        } else if (self.progress >= 0.5 && self.progress < 0.75) {
          setActiveIndex(1)
        } else if (self.progress >= 0.75) {
          setActiveIndex(2)
        }
      },
    })
    setTimeline(tl)
  }
  const sec11AniMb = () => {
    const tl = gsap
      .timeline()
      .to(".pic_wrap", 1, {}, "pic1")
      .to(".pic_wrap", 1, {}, "pic2")
      .to(".pic_wrap", 1, {}, "pic3")
    ScrollTrigger.create({
      trigger: ".sec11_wrap .content_wrap",
      pin: true,
      // start: `top 0%`,
      start: `top ${
        (window.innerHeight - (content_wrap?.current?.clientHeight || 0)) / 2
      }`,
      end: "+=1600",
      animation: tl,
      scrub: 0.2,
      onUpdate: (self) => {
        if (self.progress < 0.3) {
          setActiveIndex(0)
        } else if (self.progress >= 0.3 && self.progress < 0.6) {
          setActiveIndex(1)
        } else if (self.progress >= 0.6) {
          setActiveIndex(2)
        }
      },
    })
    setTimeline(tl)
  }

  useGSAP(
    () => {
      if (isPc) {
        sec11Ani()
      } else {
        sec11AniMb()
      }
    },
    { scope: wrap, dependencies: [isPc] }
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
        <div className='content_wrap' ref={content_wrap}>
          <div className='all_text'>
            <div
              className={`text_wrap ${
                isPc && activeIndex === 1 ? "white" : ""
              } ${activeIndex === 0 || activeIndex === 1 ? "active" : ""}`}
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
          <div className={`pic_wrap`}>
            <div
              className={`img_wrap phone_wrap phone1 ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec11_p1_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec11_p1_pc.png"}
                />
                <img loading='lazy' src={src + "/images/pc/sec11_p1_pc.png"} />
              </picture>
            </div>
            <div
              className={`img_wrap phone_wrap phone2 ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec11_p2_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec11_p2_pc.png"}
                />
                <img loading='lazy' src={src + "/images/pc/sec11_p2_pc.png"} />
              </picture>
            </div>
            <div
              className={`img_wrap phone_wrap phone3 ${
                activeIndex === 2 ? "active" : ""
              }`}
            >
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec11_p3_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec11_p3_pc.png"}
                />
                <img loading='lazy' src={src + "/images/pc/sec11_p3_pc.png"} />
              </picture>
            </div>
          </div>
          <div className='bottom_content'>
            <div className='btn_wrap'>
              <button className='titanium' onClick={() => handleSwitchPic(1)}>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec11_b1_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec11_b1_pc.png"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec11_b1_pc.png"}
                  />
                </picture>
              </button>
              <button className='black' onClick={() => handleSwitchPic(2)}>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec11_b2_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec11_b2_pc.png"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec11_b2_pc.png"}
                  />
                </picture>
              </button>
              <button className='ocean' onClick={() => handleSwitchPic(3)}>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec11_b3_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec11_b3_pc.png"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec11_b3_pc.png"}
                  />
                </picture>
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
