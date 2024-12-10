import { useContext, useRef, useState } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec9 = () => {
  const wrap = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const { contextSafe } = useGSAP({ scope: wrap, dependencies: [isPc] })
  const [timeline, setTimeline] = useState<any>()

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

  const handleSwitchClick = contextSafe((index: number) => {
    gsap.to(window, {
      scrollTo: {
        y: timeline.scrollTrigger.labelToScroll("part" + (index + 2)),
      },
      ease: "power2.inOut",
    })
  })

  const sec9Ani = () => {
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
        ".pic_wrap:not(:nth-child(1))",
        1,
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "part1"
      )
      .to(
        ".pic_wrap:nth-child(1)",
        1,
        {
          opacity: 1,
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
      // .to(".sec9", 1, {
      //   ease: "power2.inOut",
      // })
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
        ".pic_wrap:not(:nth-child(2))",
        1,
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "part2"
      )
      .to(
        ".pic_wrap:nth-child(2)",
        1,
        {
          opacity: 1,
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
      // .to(".sec9", 1, {
      //   ease: "power2.inOut",
      // })
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
        ".pic_wrap:not(:nth-child(3))",
        1,
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "part3"
      )
      .to(
        ".pic_wrap:nth-child(3)",
        1,
        {
          opacity: 1,
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
        ".data_wrap:nth-child(3) .tran_wrap",
        1,
        {
          ease: "power2.inOut",
        },
        "part4"
      )
    // .to(".sec9", 1, {
    //   ease: "power2.inOut",
    // })
    ScrollTrigger.create({
      trigger: wrap.current,
      start: `top ${triggerSpace()}`,
      end: "+=300%",
      pin: true,
      scrub: 0.2,
      animation: tl,
      toggleActions: "play none none reverse",
    })
    setTimeline(tl)
  }

  const sec9AniMb = () => {
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
        ".pic_wrap:not(:nth-child(1))",
        1,
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "part1"
      )
      .to(
        ".pic_wrap:nth-child(1)",
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "part1"
      )
      // .to(".sec9", 1, {
      //   ease: "power2.inOut",
      // })
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
        ".pic_wrap:not(:nth-child(2))",
        1,
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "part2"
      )
      .to(
        ".pic_wrap:nth-child(2)",
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "part2"
      )
      // .to(".sec9", 1, {
      //   ease: "power2.inOut",
      // })
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
        ".pic_wrap:not(:nth-child(3))",
        1,
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "part3"
      )
      .to(
        ".pic_wrap:nth-child(3)",
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
    // .to(".sec9", 1, {
    //   ease: "power2.inOut",
    // })
    ScrollTrigger.create({
      trigger: wrap.current,
      start: `top ${triggerSpace()}`,
      end: "+=1000",
      pin: true,
      scrub: 0.2,
      animation: tl,
      toggleActions: "play none none reverse",
    })
    setTimeline(tl)
  }

  useGSAP(
    () => {
      if (isPc) {
        sec9Ani()
      } else {
        sec9AniMb()
      }
    },
    { scope: wrap, dependencies: [isPc] }
  )

  // 防止移动端上下滑动时 触发高度变化导致动画重新开始
  ScrollTrigger.config({ignoreMobileResize: true})

  return (
    <section className='sec9'>
      <div className='sec9_wrap' ref={wrap}>
        <div className='img_wrap bg_wrap'>
          <picture>
            <source
              media='(max-width: 750px)'
              srcSet={src + "/images/mb/sec9_bg_mb.webp"}
            />
            <source
              media='(min-width: 751px)'
              srcSet={src + "/images/pc/sec9_bg_pc.webp"}
            />
            <img loading='lazy' src={src + "/images/pc/sec9_bg_pc.webp"} />
          </picture>
        </div>
        <div className='text_wrap slide_up'>
          <div className='left_wrap'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{ __html: config?.sec9?.title }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{ __html: config?.sec9?.subtitle }}
            ></div>
          </div>
          <div className='right_wrap'>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec9?.desc }}
            ></p>
          </div>
        </div>
        <div className='box_wrap'>
          <div className='switch_content'>
            <div className='line_wrap'>
              <div className='active_line'></div>
            </div>
            <div className='datas'>
              {config?.sec9?.data?.map((item: any, index: number) => {
                return (
                  <div className={`data_wrap`} key={index}>
                    <div
                      className='data_title'
                      dangerouslySetInnerHTML={{ __html: item?.title }}
                      onClick={() => handleSwitchClick(index)}
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
          <div className='data_pic equal_parent'>
            <div className={`pic_wrap equal_parent`}>
              <div className='img_wrap wave_wrap1'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone1_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/pc/sec9_1_1_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_1_1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_1_1_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone2_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/pc/sec9_1_2_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_1_2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_1_2_pc.webp"}
                  />
                </picture>
              </div>
            </div>
            <div className={`pic_wrap equal_parent`}>
              <div className='img_wrap wave_wrap2'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap wave_wrap3'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone3_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/pc/sec9_2_1_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_2_1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_2_1_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone4_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/pc/sec9_2_2_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_2_2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_2_2_pc.webp"}
                  />
                </picture>
              </div>
            </div>
            <div className={`pic_wrap equal_parent`}>
              <div className='img_wrap wave_wrap4'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_wave_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone5_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/pc/sec9_3_1_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_3_1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_3_1_pc.webp"}
                  />
                </picture>
              </div>
              <div className='img_wrap phone6_wrap'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/pc/sec9_3_2_pc.webp"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec9_3_2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec9_3_2_pc.webp"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec9
