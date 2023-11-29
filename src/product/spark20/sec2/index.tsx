import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import sec2PcF1 from "../../../assets/spark20/sec2PcF1.png"
import sec2MbF1 from "../../../assets/spark20/sec2MbF1.png"

const Sec2 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec2'>
      <div className='content'>
        <picture>
          <source media='(min-width: 1081px)' srcSet={sec2PcF1} />
          <source media='(max-width: 1080px)' srcSet={sec2MbF1} />
          <img className='item' src={sec2PcF1} loading='lazy' />
        </picture>
      </div>
    </section>
  )
}

export default Sec2
