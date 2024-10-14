import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec4 = () => {
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec4Ani = () => {
    const tl = gsap
      .timeline()
      .to(".spec_part", { y: "-100%", ease: "power2.inOut" }, "a")
    ScrollTrigger.create({
      trigger: ".sec4_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=200%",
      animation: tl,
      scrub: true
    })
  }

  useGSAP(
    () => {
      sec4Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec4' ref={wrap}>
      <div className='sec4_wrap'>
        <div className='spec_part'>
          <div className='spec_text_wrap'>
            <div
              className='spec_title'
              dangerouslySetInnerHTML={{ __html: config.sec4.spec_title }}
            ></div>
            <p
              className='spec_desc'
              dangerouslySetInnerHTML={{ __html: config.sec4.spec_desc }}
            ></p>
          </div>
        </div>
        <div className='content_wrap'>
          <div className='part part1'>
            <div className='text_wrap'>
              <div
                className='title_75'
                dangerouslySetInnerHTML={{ __html: config.sec4.part1.title }}
              ></div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config.sec4.part1.desc }}
              ></p>
            </div>
            <div className='data_wrap'>
              {config?.sec4?.part1?.data?.map((item: any, index: number) => (
                <>
                  <div className='data' key={index}>
                    <img src={src + "/images/pc/" + item.icon} />
                    <div className='data_text_wrap'>
                      <div className='title'>{item.title}</div>
                      <div className='subtitle'>{item.subtitle}</div>
                    </div>
                  </div>
                  {index === 1 && <br />}
                </>
              ))}
            </div>
            <div className='data_wrap'>
              {config?.sec4?.part2?.data?.map((item: any, index: number) => (
                <>
                  <div className='data' key={index}>
                    <img src={src + "/images/pc/" + item.icon} />
                    <div className='data_text_wrap'>
                      <div className='title'>{item.title}</div>
                      <div className='subtitle'>{item.subtitle}</div>
                    </div>
                  </div>
                  {index === 1 && <br />}
                </>
              ))}
            </div>
          </div>
          <div className='part part2'>
            <div className='text_wrap'>
              <div
                className='title_75'
                dangerouslySetInnerHTML={{ __html: config?.sec4?.part2?.title }}
              ></div>
            </div>
            <div>
              <div className='img_wrap corning_wrap'>
                <img src={src + "/images/pc/sec4_corning_pc.png"} />
              </div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec4?.part2?.desc }}
              ></p>
            </div>
            <div className='img_wrap warranty_wrap'>
              <img src={src + "/images/pc/sec4_warranty_pc.png"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec4
