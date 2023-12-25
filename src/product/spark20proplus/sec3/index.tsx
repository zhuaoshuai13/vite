import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import sec3PcBg from "../../../assets/spark20proplus/sec3PcBg.png"
import sec3MbBg from "../../../assets/spark20proplus/sec3MbBg.png"

const Sec3 = () => {
  const { spark20proplusConfig } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec3Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec3 .bg_img", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec3 .content",
      start: `top 85%`,
      animation: tl,
    })
  }

  useEffect(() => {
    sec3Ani()
  })

  return (
    <section className='sec3 special_sec'>
      <div className='content'>
        <picture>
          <source media='(min-width: 1081px)' srcSet={spark20proplusConfig.sec3.bg.img_pc} />
          <source media='(max-width: 1080px)' srcSet={spark20proplusConfig.sec3.bg.img_mb} />
          <img className='bg_img' src={spark20proplusConfig.sec3.bg.img_pc} loading='lazy' />
        </picture>
        <div className='special_text_container'>
          <h3
            className='special_title'
            dangerouslySetInnerHTML={{
              __html: spark20proplusConfig.sec3.title,
            }}
          ></h3>
          <p
            className='special_desc'
            dangerouslySetInnerHTML={{ __html: spark20proplusConfig.sec3.desc }}
          ></p>
        </div>
      </div>
    </section>
  )
}

export default Sec3
