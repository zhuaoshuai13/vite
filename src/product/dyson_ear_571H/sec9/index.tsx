import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec9 = () => {
  const wrap = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { ear571hConfig: config, src } = window as any

  const sec9Ani = () => {
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
        ".pdp_desc",
        {
          y: 200,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          delay: 0.1,
        },
        "a"
      )
      .from(
        ".img_wrap",
        {
          y: 300,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(
        ".img_wrap img",
        {
          y: -200,
          duration: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .to(
        ".img_wrap",
        {
          y: -300,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        ".img_wrap img",
        {
          y: 200,
          duration: 1,
          ease: "power2.inOut",
        },
        "b"
      )
    ScrollTrigger.create({
      trigger: wrap.current,
      scrub: 1,
      start: "top 100%",
      end: "+=200%",
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      sec9Ani()
    },
    { scope: wrap }
  )

  // 防止移动端上下滑动时 触发高度变化导致动画重新开始
  ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: "DOMContentLoaded,load,resize" })

  return (
    <section className='sec9'>
      <div className='sec9_wrap' ref={wrap}>
        <div className='content_wrap'>
          <div className='text_wrap'>
            <h3 className='pdp_title'>
              为全天侯舒适佩戴 <br />
              而设计
            </h3>
            <p className='pdp_desc'>
              通过对不同佩戴者进行测试，戴森降噪耳机可以轻松适配不同尺寸的头型。日常佩戴依旧持久舒适。
            </p>
          </div>
          <div className='img_wrap'>
            <img src={src + '/images/sec9.jpg'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec9
