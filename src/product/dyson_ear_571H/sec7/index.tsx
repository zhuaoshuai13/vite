import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { getTriggerSpace } from "../../../utils/getTriggerSpace"

import "./index.scss"

const Sec7 = () => {
  const { ear571hConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef<HTMLDivElement>(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec7Ani = () => {
    const tl = gsap.timeline().from(".img_wrap2", {
      clipPath: "inset(100% 0% 0% 0%)",
      ease: "power2.inOut",
    })
    ScrollTrigger.create({
      trigger: ".sec7_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=100%",
      animation: tl,
      scrub: 0.2,
    })
  }

  useGSAP(
    () => {
      sec7Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec7' ref={wrap} id='nav_link_2'>
      <div className='sec7_wrap'>
        <div className='pic_wrap'>
          <div className='img_wrap img_wrap1'>
            <img src='/src/assets/dyson_ear571h/images/sec7_f1.jpg' />
          </div>
          <div className='img_wrap img_wrap2'>
            <img src='/src/assets/dyson_ear571h/images/sec7_f2.jpg' />
          </div>
        </div>
        <div className='text_wrap'>
          <h3 className='pdp_title'>
            长续航 <br />
            音乐自由相伴
          </h3>
          <p className='pdp_desc'>
            戴森工程师以匠心独运的设计科学，扩容电池空间，
            <br />
            带来超长音乐享受。从日出到日落，无需中断，让音乐 <br />{" "}
            随行，灵感不息。
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sec7
