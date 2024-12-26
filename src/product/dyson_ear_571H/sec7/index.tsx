import { useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { getTriggerSpace } from "../../../utils/getTriggerSpace"

import "./index.scss"
const flag = true

const Sec7 = ({ isload, destination,scrollTop }) => {
  const wrap = useRef<HTMLDivElement>(null)
  // const [scrollTop, setScrollTop] = useState(0)
  const { ear571hConfig: config, src } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec7Ani = () => {
    // const tl = gsap.timeline().from(".img_wrap2", {
    //   clipPath: "inset(100% 0% 0% 0%)",
    //   ease: "power2.inOut",
    // })
    // ScrollTrigger.create({
    //   trigger: wrap.current,
    //   // pin: true,
    //   // start: `top ${getTriggerSpace(wrap.current)}`,
    //   start: `top 0`,
    //   // end: "+=100%",
    //   end: `+=${1 * window.innerHeight}`,
    //   animation: tl,
    //   scrub: 0.2,
    //   scroller: document.querySelector(".bottom_part .fp-overflow"),
    // })

    const tl2 = gsap
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
        ".pic_wrap",
        {
          y: 200,
          opacity: 0,
          duration: 1,
          delay: 0.4,
          ease: "power2.inOut",
        },
        "a"
      )
    ScrollTrigger.create({
      trigger: wrap.current,
      start: "top 80%",
      scroller: document.querySelector(".bottom_part .fp-overflow"),
      animation: tl2,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      if (!isload && destination?.index == 7) {
        sec7Ani()

        // document
        //   .querySelector(".bottom_part .fp-overflow")
        //   ?.addEventListener("scroll", (e) => {
        //     setScrollTop(e.target.scrollTop)
        //   })
      }
    },
    { scope: wrap, dependencies: [isload, destination] }
  )

  return (
    <section
      className={`sec7 ${destination?.index == 7 ? "active" : ""}`}
      ref={wrap}
      // id='nav_link_2'
    >
      <div
        className='sec7_wrap'
        style={{
          position: "relative",
          top: `-${
            scrollTop > window.innerHeight ? scrollTop - window.innerHeight : 0
          }px`,
        }}
      >
        <div className='pic_wrap'>
          <div className='img_wrap img_wrap1'>
            <img src={src + "/wysiwyg/ipadassets/571/sec7_f1.png"} />
          </div>
          <div
            className='img_wrap img_wrap2'
            style={{
              clipPath: `inset(${
                (1 - Math.min(scrollTop / window.innerHeight, 1)) * 100
              }% 0% 0% 0%)`,
            }}
          >
            <img src={src + "/wysiwyg/ipadassets/571/sec7_f2.png"} />
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
