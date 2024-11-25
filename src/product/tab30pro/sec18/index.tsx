import { useContext, useRef, useState } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec18 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const picArray = [
    {
      pc: src + "/images/pc/sec18_f1_pc.webp",
      mb: src + "/images/mb/sec18_f2_mb.png",
    },
    {
      pc: src + "/images/pc/sec18_f2_pc.webp",
      mb: src + "/images/mb/sec18_f2_mb.png",
    },
    {
      pc: src + "/images/pc/sec18_f3_pc.webp",
      mb: src + "/images/mb/sec18_f3_mb.png",
    },
  ]

  const triggerSpace = () => {
    if (wrap.current) {
      return (
        (window.innerHeight -
          wrap?.current?.offsetHeight -
          config?.navHeightPc) /
          2 +
        config?.navHeightPc
      )
    }
    return window.innerHeight
  }

  const sec18Ani = () => {
    const tl = gsap.timeline().from(".text_wrap .desc_16", 1, {
      // opacity: 0,
      // y: 100,
      ease: "power2.inOut",
    })
    ScrollTrigger.create({
      trigger: wrap.current,
      start: `top ${triggerSpace()}`,
      end: "+=200%",
      pin: true,
      scrub: 0.2,
      animation: tl,
      toggleActions: "play none none reverse",
      onUpdate: (self) => {
        setActiveIndex(Math.round(self.progress * 2))
      },
    })
  }

  const sec18AniMb = () => {
    const tl = gsap
      .timeline()
      .to(
        ".active_line",
        1,
        {
          y: "0",
          ease: "steps(1)",
        },
        "part1"
      )
      .to(
        ".data_wrap:not(:nth-child(1)) .tran_wrap",
        1,
        {
          gridTemplateRows: "0fr",
          ease: "power2.inOut",
        },
        "part1"
      )
      .to(
        ".data_wrap:nth-child(1) .tran_wrap",
        1,
        {
          gridTemplateRows: "1fr",
          ease: "power2.inOut",
        },
        "part1"
      )
      .to(
        ".data_wrap:not(:nth-child(1)) .data_title",
        1,
        {
          opacity: 0.4,
          ease: "power2.inOut",
        },
        "part1"
      )
      .to(
        ".data_wrap:nth-child(1) .data_title",
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "part1"
      )
      .to(
        ".pic_wrap2:not(:nth-child(1))",
        1,
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "part1"
      )
      .to(
        ".pic_wrap2:nth-child(1)",
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "part1"
      )
      .to(".sec9", 1, {
        ease: "power2.inOut",
      })
      .to(
        ".active_line",
        1,
        {
          y: "100%",
          ease: "steps(1)",
        },
        "part2"
      )
      .to(
        ".data_wrap:not(:nth-child(2)) .tran_wrap",
        1,
        {
          gridTemplateRows: "0fr",
          ease: "power2.inOut",
        },
        "part2"
      )
      .to(
        ".data_wrap:nth-child(2) .tran_wrap",
        1,
        {
          gridTemplateRows: "1fr",
          ease: "power2.inOut",
        },
        "part2"
      )
      .to(
        ".data_wrap:not(:nth-child(2)) .data_title",
        1,
        {
          opacity: 0.4,
          ease: "power2.inOut",
        },
        "part2"
      )
      .to(
        ".data_wrap:nth-child(2) .data_title",
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "part2"
      )
      .to(
        ".pic_wrap2:not(:nth-child(2))",
        1,
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "part2"
      )
      .to(
        ".pic_wrap2:nth-child(2)",
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "part2"
      )
      .to(".sec9", 1, {
        ease: "power2.inOut",
      })
      .to(
        ".active_line",
        1,
        {
          y: "200%",
          ease: "steps(1)",
        },
        "part3"
      )
      .to(
        ".data_wrap:not(:nth-child(3)) .tran_wrap",
        1,
        {
          gridTemplateRows: "0fr",
          ease: "power2.inOut",
        },
        "part3"
      )
      .to(
        ".data_wrap:nth-child(3) .tran_wrap",
        1,
        {
          gridTemplateRows: "1fr",
          ease: "power2.inOut",
        },
        "part3"
      )

      .to(
        ".data_wrap:not(:nth-child(3)) .data_title",
        1,
        {
          opacity: 0.4,
          ease: "power2.inOut",
        },
        "part3"
      )
      .to(
        ".data_wrap:nth-child(3) .data_title",
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "part3"
      )
      .to(
        ".pic_wrap2:not(:nth-child(3))",
        1,
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "part3"
      )
      .to(
        ".pic_wrap2:nth-child(3)",
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "part3"
      )
      .to(
        ".data_wrap:nth-child(3) .tran_wrap",
        1,
        {
          ease: "power2.inOut",
        },
        "part4"
      )
      .to(".sec9", 1, {
        ease: "power2.inOut",
      })
    ScrollTrigger.create({
      trigger: wrap.current,
      start: `top ${triggerSpace()}`,
      end: "+=1000",
      pin: true,
      scrub: 0.2,
      animation: tl,
      toggleActions: "play none none reverse",
      // onUpdate: (self) => {
      //   setActiveIndex(Math.round(self.progress * 2))
      // },
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec18Ani()
      } else {
        sec18AniMb()
      }
    },
    { scope: wrap }
  )

  return (
    <section className='sec18'>
      <div className='sec18_wrap' ref={wrap}>
        <div className='text_wrap slide_up'>
          <div className='left_wrap'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{ __html: config?.sec18?.title }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{ __html: config?.sec18?.subtitle }}
            ></div>
          </div>
          <div className='right_wrap'>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec18?.desc }}
            ></p>
          </div>
        </div>
        <div className='box_wrap'>
          <div className='switch_content'>
            <div className='line_wrap'>
              <div
                className='active_line'
                style={{ transform: `translateY(${activeIndex * 100}%)` }}
              ></div>
            </div>
            <div className='datas'>
              {config?.sec18?.data?.map((item: any, index: number) => {
                return (
                  <div
                    className={`data_wrap ${
                      index === activeIndex ? "active_data" : ""
                    }`}
                    key={index}
                  >
                    <div
                      className='data_title'
                      dangerouslySetInnerHTML={{ __html: item?.title }}
                    ></div>
                    <div className='tran_wrap'>
                      <p
                        className='desc_16'
                        dangerouslySetInnerHTML={{ __html: item?.desc }}
                      ></p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='pic_wrap equal_parent'>
            {picArray.map((item, index) => {
              return (
                <div
                  className={`img_wrap pic_wrap2 equal_parent ${
                    activeIndex === index ? "active_img_wrap" : ""
                  }`}
                  key={index}
                >
                  <picture>
                    <source media='(max-width: 750px)' srcSet={item?.mb} />
                    <source media='(min-width: 751px)' srcSet={item?.pc} />
                    <img loading='lazy' src={item?.pc} />
                  </picture>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec18
