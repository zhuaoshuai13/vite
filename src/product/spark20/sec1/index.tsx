import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import Sec1PcKv from "../../../assets/spark20/sec1PcKv.jpg"
import sec1MbKv from "../../../assets/spark20/sec1MbKv.png"
import sec1PcSlogn from "../../../assets/spark20/sec1PcSlogn.png"
import sec1PcF2 from "../../../assets/spark20/sec1PcF2.png"

const Sec1 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec1'>
      <picture>
        <source media='(min-width: 1081px)' srcSet={Sec1PcKv} />
        <source media='(max-width: 1080px)' srcSet={sec1MbKv} />
        <img className='kv' src={Sec1PcKv} alt='kv' loading='lazy' />
      </picture>
      <div className='content'>
        <img
          className='slogn'
          src={sec1PcSlogn}
          alt='SPARK 20'
          loading='lazy'
        />
        <div className='title'>50MP Expert</div>
        <div className='items'>
          <div className='item'>
            <div className='item_title'>50MP</div>
            <div className='item_desc'>
              Ultra Clear <br /> Camera
            </div>
          </div>
          <div className='item'>
            <div className='item_title'>G85</div>
            <div className='item_desc'>
              Gaming <br /> Processor
            </div>
          </div>
          <div className='item'>
            <div className='item_title'>400%</div>
            <div className='item_desc'>
              Stereo Dual Speaker <br /> Big Volume
            </div>
            <div className='dts_logo'></div>
          </div>
        </div>
        <img className='pic2' src={sec1PcF2} alt='SPARK 20' loading='lazy' />
      </div>
    </section>
  )
}

export default Sec1
