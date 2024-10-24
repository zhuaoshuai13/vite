import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
// import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec7 = () => {
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec7Ani = () => {
    const tl = gsap
      .timeline()
      .to(".spec_part", { y: "-100%", ease: "power2.inOut" })
      .to(".phone1", { opacity: 0, ease: "power2.inOut" }, "a")
      .fromTo(
        ".phone2",
        { rotateX: 90 },
        { rotateX: 0, opacity: 1, ease: "power2.inOut" },
        "a+=0.2"
      )
    ScrollTrigger.create({
      trigger: ".sec7_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=300%",
      animation: tl,
      scrub: 0.2,
    })
  }
  const sec7AniMb = () => {
    const tl = gsap
      .timeline()
      .to(".spec_part", { y: "-100%", ease: "power2.inOut" })
      .to(".phone1", { opacity: 0, ease: "power2.inOut" }, "a")
      .fromTo(
        ".phone2",
        { rotateY: 90 },
        { rotateY: 0, opacity: 1, ease: "power2.inOut" },
        "a+=0.2"
      )
    ScrollTrigger.create({
      trigger: ".sec7_wrap",
      pin: true,
      start: `top 0%`,
      end: "+=300%",
      animation: tl,
      scrub: 0.2,
    })
  }

  useGSAP(
    () => {
      if (isPc) {
        sec7Ani()
      } else {
        sec7AniMb()
      }
    },
    { scope: wrap }
  )

  return (
    <section className='sec7' ref={wrap}>
      <div className='sec7_wrap'>
        <div className='spec_part'>
          <div className='spec_text_wrap'>
            <div
              className='spec_title'
              dangerouslySetInnerHTML={{ __html: config?.sec7?.spec_title }}
            ></div>
            <p
              className='spec_desc'
              dangerouslySetInnerHTML={{ __html: config?.sec7?.spec_desc }}
            ></p>
          </div>
        </div>
        <div className='content_wrap'>
          <div className='text_wrap'>
            <div
              className='title_75'
              dangerouslySetInnerHTML={{ __html: config?.sec7?.title }}
            ></div>
            <p
              className='desc'
              dangerouslySetInnerHTML={{ __html: config?.sec7?.desc }}
            ></p>
          </div>
          <div className='pic_wrap'>
            <div className='img_wrap phone1'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec7_p1_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec7_p1_pc.webp"}
                />
                <img loading='lazy' src={src + "/images/pc/sec7_p1_pc.webp"} />
              </picture>
            </div>
            <div className='img_wrap phone2'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec7_p2_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec7_p2_pc.webp"}
                />
                <img loading='lazy' src={src + "/images/pc/sec7_p2_pc.webp"} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec7
