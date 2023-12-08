import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import sec3PcBg from "../../../assets/spark20/sec3PcBg.png"
import sec3MbBg from "../../../assets/spark20/sec3MbBg.png"

const Sec10 = () => {
  const { spark20Config } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec10Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec10 .bg_img", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec10 .content",
      start: `top 85%`,
      animation: tl,
    })
  }

  useEffect(() => {
    sec10Ani()
  })

  return (
    <section className='sec10 special_sec'>
      <div className='content'>
        <picture>
          <source media='(min-width: 1081px)' srcSet={sec3PcBg} />
          <source media='(max-width: 1080px)' srcSet={sec3MbBg} />
          <img className='bg_img' src={sec3PcBg} loading='lazy' />
        </picture>
        <div className='special_text_container'>
          <h3
            className='special_title'
            dangerouslySetInnerHTML={{ __html: spark20Config.sec10.title }}
          ></h3>
          <p
            className='special_desc'
            dangerouslySetInnerHTML={{ __html: spark20Config.sec10.desc }}
          ></p>
        </div>
      </div>
    </section>
  )
}

export default Sec10
