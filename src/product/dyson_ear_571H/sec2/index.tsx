import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"
const flag = true
const Sec2 = ({ isload, destination }) => {
  const { ear571hConfig: config, src } = window as any
  const wrap = useRef<HTMLDivElement>(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec2Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".feature_item",
        {
          opacity: 0,
          y: "50%",
          ease: "power2.inOut",
          duration: 1,
          stagger: 0.2,
        },
        "a"
      )
      .from(
        ".feature_item .pdp_desc",
        {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 1,
          stagger: 0.2,
        },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec2",
      start: `top 75%`,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }
  useGSAP(
    () => {
      if (!isload && destination?.index == 1) {
        sec2Ani()
      }
    },
    { scope: wrap, dependencies: [isload, destination] }
  )

  return (
    <section className='section sec2 slide_sec' ref={wrap} id='nav_link_0'>
      <div className='sec2_wrap'>
        <div className='feature_items'>
          <div className='feature_item'>
            <div className='img_wrap'>
              <img
                loading='lazy'
                src={src + "/wysiwyg/ipadassets/571/sec2_f1.png"}
              />
            </div>
            <div className='text_wrap'>
              <p className='pdp_desc'>
                戴上戴森 OnTrac™，
                <br /> 将头梁调整到舒适的状态
              </p>
            </div>
          </div>
          <div className='feature_item'>
            <div className='img_wrap'>
              <img
                loading='lazy'
                src={src + "/wysiwyg/ipadassets/571/sec2_f2.png"}
              />
            </div>
            <div className='text_wrap'>
              <p className='pdp_desc'>
                使用音频操纵摇杆 <br /> 即可调整播放
              </p>
            </div>
          </div>
          <div className='feature_item'>
            <div className='img_wrap'>
              <img
                loading='lazy'
                src={src + "/wysiwyg/ipadassets/571/sec2_f3.png"}
              />
            </div>
            <div className='text_wrap'>
              <p className='pdp_desc'>
                轻轻双击外壳，
                <br /> 即可切换沉浸模式和通透模式
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec2
