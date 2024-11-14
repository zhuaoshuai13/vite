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
      .to(".pic_wrap", { x: "-39vw", ease: "power2.inOut", duration: 2 }, "a")
      .to(
        ".text_wrap:nth-child(1)",
        { opacity: 0, ease: "power2.inOut", duration: 1 },
        "a"
      )
      .to(
        ".text_wrap:nth-child(2)",
        { opacity: 1, ease: "power2.inOut", duration: 1 },
        "a+=1"
      )
      .to(".text_wrap:nth-child(2)", { ease: "power2.inOut", duration: 1 })
    ScrollTrigger.create({
      trigger: ".sec11_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=150%",
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
        <div className='all_text'>
          <div className='text_wrap'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{
                __html: config?.sec11?.part1?.title,
              }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{
                __html: config?.sec11?.part1?.subtitle,
              }}
            ></div>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec11?.part1?.desc }}
            ></p>
          </div>
          <div className='text_wrap'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{
                __html: config?.sec11?.part2?.title,
              }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{
                __html: config?.sec11?.part2?.subtitle,
              }}
            ></div>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec11?.part2?.desc }}
            ></p>
          </div>
        </div>
        <div className='pic_wrap'>
          <div className='img_wrap phone_wrap1'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec11_f1_pc.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec11_f1_pc.png"}
              />
              <img loading='lazy' src={src + "/images/pc/sec11_f1_pc.png"} />
            </picture>
          </div>
          <div className='img_wrap phone_wrap2'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec11_f2_pc.png"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec11_f2_pc.png"}
              />
              <img loading='lazy' src={src + "/images/pc/sec11_f2_pc.png"} />
            </picture>
          </div>
          <div className='pic_wrap2'>
            <div className='img_wrap phone_wrap3'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec11_f3_pc.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec11_f3_pc.png"}
                />
                <img loading='lazy' src={src + "/images/pc/sec11_f3_pc.png"} />
              </picture>
            </div>
            <div className='img_wrap phone_wrap4'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec11_f4_pc.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec11_f4_pc.png"}
                />
                <img loading='lazy' src={src + "/images/pc/sec11_f4_pc.png"} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec11
