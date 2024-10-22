import { useRef } from "react"
// import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
// import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec5 = () => {
  const { s25ultraConfig: config, src } = window as any
  // const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec5Ani = () => {
    const tl = gsap
      .timeline()
      .from(".light_wrap", { x: "-80%", ease: "power2.inOut", duration: 1.5 })
      .from(".nit_wrap", { opacity: 0, ease: "power2.inOut" })
    ScrollTrigger.create({
      trigger: ".sec5_wrap",
      start: `top 30%`,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      sec5Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec5' ref={wrap}>
      <div className='sec5_wrap'>
        <div className='text_wrap'>
          <div
            className='title_75'
            dangerouslySetInnerHTML={{ __html: config?.sec5?.title }}
          ></div>
          <p
            className='desc_16'
            dangerouslySetInnerHTML={{ __html: config?.sec5?.desc }}
          ></p>
        </div>
        <div className='pic_wrap'>
          <div className='img_wrap phone_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec5_phone_pc.png"} />
          </div>
          <div className='light_wrap'></div>
          <div className='img_wrap mask_wrap'>
            <img
              loading='lazy'
              src={src + "/images/pc/sec5_phone_mask_pc.png"}
            />
          </div>
          <div className='img_wrap nit_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec5_nit_pc.png"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec5
