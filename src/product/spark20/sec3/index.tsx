import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import sec3PcBg from "../../../assets/spark20/sec3PcBg.png"
import sec3MbBg from "../../../assets/spark20/sec3MbBg.png"

const Sec3 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec3 special_sec'>
      <div className='content'>
        <picture>
          <source media='(min-width: 1081px)' srcSet={sec3PcBg} />
          <source media='(max-width: 1080px)' srcSet={sec3MbBg} />
          <img className='bg_img' src={sec3PcBg} loading='lazy' />
        </picture>
        <div className='special_text_container'>
          <h3 className='special_title'>CAMERA</h3>
          <p className='special_desc'>High Resolution Photography System</p>
        </div>
      </div>
    </section>
  )
}

export default Sec3
