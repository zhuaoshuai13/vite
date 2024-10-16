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
            <img src={src + "/images/pc/sec5_phone_pc.png"} />
          </div>
          <div className='phone_mask_wrap'>
            <div className='img_wrap'>
              <img src={src + "/images/pc/sec5_phone_mask_pc.png"} />
            </div>
            <div className="mask"></div>
          </div>
          <div className='img_wrap nit_wrap'>
            <img src={src + "/images/pc/sec5_nit_pc.png"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec5
