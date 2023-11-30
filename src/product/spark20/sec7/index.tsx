import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import sec7PcF1 from "../../../assets/spark20/sec7PcF1.png"
import sec7MbF1 from "../../../assets/spark20/sec7MbF1.png"

const Sec7 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec7'>
      <div className='content'>
        <h3 className='title_96 pc'>
          <p>
            <span>Fineness in Finish & Feel Deceptively</span>
          </p>
          <p>
            <span>Minimal, Infinitely Sophisticated</span>
          </p>
        </h3>
        <h3 className='title_96 mob'>
          <p>
            <span>Fineness in Finish & Feel </span>
          </p>
          <p>
            <span>Deceptively Minimal,</span>
          </p>
          <p>
            <span>Infinitely Sophisticated</span>
          </p>
        </h3>
        <div className='spark20_container'>
          <div className='left'>
            <div className='text_wrapper'>
              <h4 className='title_48'>Euler's Deco Design</h4>
              <p className='subtitle_24'>
                Cosmic Experience, Available at Hand
              </p>
              <p className='desc_18'>
                Minimalist aesthetics meets futuristic look in the three-ring
                cosmic design of SPARK. Sleek metal edges blend with cosmic deco
                inspired by stars. Subtle engravings and petal-shaped flash
                evoke luxury watch quality. The slim, balanced rectangular form
                feels impossibly thin yet ergonomic, combining refinement and
                comfort. Advanced side edge fingerprint unlocking provides
                instant access with a simple touch. State-of-the-art
                engineering, crafted to captivate.
              </p>
            </div>
            <div className='datas'>
              <div className='data'>
                <div className='data_title'>
                  3-Ring <br /> Design
                </div>
                <p className='data_desc'>Metallic</p>
              </div>
              <div className='data'>
                <div className='data_title'>
                  Minimalist Square <br /> Shape
                </div>
                <p className='data_desc'>Enhanced Holding Comfort</p>
              </div>
            </div>
          </div>
          <picture>
            <source media='(min-width: 1081px)' srcSet={sec7PcF1} />
            <source media='(max-width: 1080px)' srcSet={sec7MbF1} />
            <img
              src={sec7PcF1}
              alt='Eulers Deco Design'
              className='design_phone'
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Sec7
