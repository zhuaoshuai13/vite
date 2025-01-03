import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"
let flag = true

const Sec8 = ({ isload, destination }) => {
  const wrap = useRef(null)
  const { ear571hConfig: config, src } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec8Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".pdp_title",
        {
          y: 200,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".text_wrap > .pdp_desc",
        {
          y: 200,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".code_wrap",
        {
          y: 200,
          opacity: 0,
          duration: 1,
          delay: 0.4,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".img_wrap1",
        {
          y: 400,
          opacity: 0,
          duration: 1,
          delay: 0.4,
          ease: "power2.inOut",
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: wrap.current,
      scrub: 1,
      start: "top 100%",
      // end: "+=100%",
      end: `+=${1 * window.innerHeight}`,
      animation: tl,
      toggleActions: "play none none reverse",
      scroller: document.querySelector(".bottom_part"),
    })
  }

  useGSAP(
    () => {
      if (!isload && destination?.index == 7 && flag) {
        sec8Ani()
        flag = false
      }
    },
    { scope: wrap, dependencies: [isload, destination] }
  )

  return (
    <section className='sec8' ref={wrap}>
      <div className='sec8_wrap'>
        <div className='img_wrap img_wrap1'>
          <img src={src + "/wysiwyg/ipadassets/571/sec8_f1.jpg"} />
        </div>
        <div className='content_wrap'>
          <div className='text_wrap'>
            <h3 className='pdp_title'>轻盈耐用且光彩夺目</h3>
            <p className='pdp_desc'>
              外壳由高级铝材加工而成，表面轻盈耐用。使用 CNC
              金属工艺或者陶瓷镀膜工艺两种工艺制成的耳机外壳。
            </p>
          </div>
          <div className='code_wrap'>
            <div className='img_wrap img_wrap2'>
              <img src={src + "/wysiwyg/ipadassets/571/sec8_f2.png"} />
            </div>
            <div className='line'></div>
            <p className='pdp_desc'>
              扫描二维码 <br />
              前往戴森官方小程序购买
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec8
