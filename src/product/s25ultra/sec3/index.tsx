import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec3 = () => {
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec1Ani = () => {
    // const tl = gsap
    //   .timeline()
    //   .to(".title_items", { y: -100, ease: "power2.inOut" }, "a")
    // ScrollTrigger.create({
    //   trigger: ".sec2_wrap",
    //   pin: true,
    //   start: `top 0%`,
    //   end: "+=2000",
    //   animation: tl,
    // })
    // const titleList = gsap.utils.toArray(".sec2 .title_items p")
    // titleList.forEach((item, index) =>
    //   gsap.to(item, {
    //     scrollTrigger: {
    //       trigger: ".sec2_wrap",
    //       scrub: true,
    //       pin: true,
    //       start: "top 0%",
    //       end: "+=100%",
    //     },
    //     fontSize: 75,
    //     ease: "none",
    //   })
    // )
  }

  useGSAP(
    () => {
      sec1Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec3' ref={wrap}>
      <div className='sec3_wrap'>
        <div className='sec3_items'>
          <div className='row'>
            <div className='col'>
              <div className='sec3_item item1'>
                <div className='text_wrap'>
                  <div>
                    <div className='title'>{config?.sec3?.item1?.title}</div>
                    <div className='desc'>{config?.sec3?.item1?.desc}</div>
                  </div>
                  <div>
                    <img src={src + "/images/pc/sec2_p1_icon_pc.png"} className="icon" />
                    <div className='desc'>{config?.sec3?.item1?.desc2}</div>
                  </div>
                </div>
                <div className='img_wrap'>
                  <img src={src + "/images/pc/sec2_p1_pc.png"} />
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='sec3_item item2'>
                <div className='text_wrap'>
                  <div className='title'>{config?.sec3?.item2?.title}</div>
                </div>
                <div className='img_wrap'>
                  <img src={src + "/images/pc/sec2_p2_pc.png"} />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='sec3_item item3'>
                <div className='text_wrap'>
                  <div className='title'>{config?.sec3?.item3?.title}</div>
                </div>
                <div className='img_wrap'>
                  <img src={src + "/images/pc/sec2_p3_pc.png"} />
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='sec3_item item4'>
                <div className='text_wrap'>
                  <div className='title'>{config?.sec3?.item4?.title}</div>
                </div>
                <div className='img_wrap'>
                  <img src={src + "/images/pc/sec2_p4_pc.png"} />
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='sec3_item item5'>
                <div className='text_wrap'>
                  <div className='title'>{config?.sec3?.item5?.title}</div>
                  <div className='desc'>{config?.sec3?.item5?.desc}</div>
                </div>
                <div className='img_wrap'>
                  <img src={src + "/images/pc/sec2_p5_pc.png"} />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='row'>
                <div className='col'>
                  <div className='sec3_item item6'>
                    <div className='text_wrap'>
                      <div className='desc'>{config?.sec3?.item6?.desc}</div>
                    </div>
                    <div className='img_wrap'>
                      <img src={src + "/images/pc/sec2_p6_pc.png"} />
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='sec3_item item7'>
                    <div className='text_wrap'>
                      <div className='desc'>{config?.sec3?.item7?.desc}</div>
                    </div>
                    <div className='img_wrap'>
                      <img src={src + "/images/pc/sec2_p7_pc.png"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='sec3_item item8'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item8?.title}</div>
                  </div>
                  <div className='img_wrap'></div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='sec3_item item9'>
                <div className='text_wrap'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: config?.sec3?.item9?.title,
                    }}
                  ></div>
                </div>
                <div className='img_wrap'>
                  <img src={src + "/images/pc/sec2_p9_pc.png"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec3
