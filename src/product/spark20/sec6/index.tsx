import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import sec6PcBg from "../../../assets/spark20/sec6PcBg.png"
import sec6MbBg from "../../../assets/spark20/sec6MbBg.png"

const Sec6 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec6 special_sec'>
      <div className='content'>
        <picture>
          <source media='(min-width: 1081px)' srcSet={sec6PcBg} />
          <source media='(max-width: 1080px)' srcSet={sec6MbBg} />
          <img className='bg_img' src={sec6PcBg} loading='lazy' />
        </picture>
        <div className='special_text_container'>
          <h3 className='special_title'>DESIGN</h3>
          <p className='special_desc'>Designed for Trendsetters</p>
        </div>
      </div>
    </section>
  )
}

export default Sec6
