import React, { useRef } from "react"
// import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
// import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec4 = () => {
  const { s25ultraConfig: config, src } = window as any
  // const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec4Ani = () => {
    const tl = gsap
      .timeline()
      .to(".spec_part", { y: "-100%", ease: "power2.inOut" }, "a")
      .from(".part1 .desc_16", { opacity: 0, ease: "power2.inOut" }, "b")
      .from(
        ".phone_wrap",
        { x: "-20%", y: "-20%", scale: 1.2, ease: "power2.inOut" },
        "b"
      )
      .to(".data_wrap1", { opacity: 1, ease: "power2.inOut" })
      .to(".data_wrap1", { opacity: 0, ease: "power2.inOut" }, "c")
      .to(".data_wrap2", { opacity: 1, ease: "power2.inOut" }, "c+=0.5")
      .to(".part1", { opacity: 0, ease: "power2.inOut" }, "d")
      .to(".part2", { opacity: 1, ease: "power2.inOut" }, "d+=0.5")
      .from(".phone_mask_wrap", {
        clipPath: "inset(100% 0 0 0)",
        ease: "power2.inOut",
      })
    ScrollTrigger.create({
      trigger: ".sec4_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=800%",
      animation: tl,
      scrub: true,
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
          <div className='img_wrap phone_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec4_phone_pc.webp"} />
          </div>
          <div className='img_wrap phone_mask_wrap'>
            <img
              loading='lazy'
              src={src + "/images/pc/sec4_phone_mask_pc.webp"}
            />
          </div>
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
            <div className='data_wrap data_wrap1'>
              {config?.sec4?.part1?.data?.map((item: any, index: number) => (
                <React.Fragment key={index}>
                  <div className='data'>
                    <img loading='lazy' src={src + "/images/pc/" + item.icon} />
                    <div className='data_text_wrap'>
                      <div className='title'>{item.title}</div>
                      <div className='subtitle'>{item.subtitle}</div>
                    </div>
                  </div>
                  {index === 1 && <br />}
                </React.Fragment>
              ))}
            </div>
            <div className='data_wrap data_wrap2'>
              {config?.sec4?.part2?.data?.map((item: any, index: number) => (
                <React.Fragment key={index}>
                  <div className='data'>
                    <img loading='lazy' src={src + "/images/pc/" + item.icon} />
                    <div className='data_text_wrap'>
                      <div className='title'>{item.title}</div>
                      <div className='subtitle'>{item.subtitle}</div>
                    </div>
                  </div>
                  {index === 1 && <br />}
                </React.Fragment>
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
            <div className='bottom_wrap'>
              <div className='img_wrap corning_wrap'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec4_corning_pc.webp"}
                />
              </div>
              <p
                className='desc_16'
                dangerouslySetInnerHTML={{ __html: config?.sec4?.part2?.desc }}
              ></p>
            </div>
            <div className='img_wrap warranty_wrap'>
              <img
                loading='lazy'
                src={src + "/images/pc/sec4_warranty_pc.webp"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec4
