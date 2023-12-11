import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import sec6PcBg from "../../../assets/spark20/sec6PcBg.png"
import sec6MbBg from "../../../assets/spark20/sec6MbBg.png"

const Sec6 = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { spark20Config } = window as any

  const sec6Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec6 .bg_img", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec6 .content",
      start: `top 85%`,
      animation: tl,
    })
  }

  useEffect(() => {
    sec6Ani()
  })

  return (
    <section className='sec6 special_sec'>
      <div className='content'>
        <picture>
          <source media='(min-width: 1081px)' srcSet={sec6PcBg} />
          <source media='(max-width: 1080px)' srcSet={sec6MbBg} />
          <img className='bg_img' src={sec6PcBg} loading='lazy' />
        </picture>
        <div className='special_text_container'>
          <h3
            className='special_title'
            dangerouslySetInnerHTML={{ __html: spark20Config.sec6.title }}
          ></h3>
          <p
            className='special_desc'
            dangerouslySetInnerHTML={{ __html: spark20Config.sec6.desc }}
          ></p>
        </div>
      </div>
    </section>
  )
}

export default Sec6
