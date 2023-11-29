import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import sec9PcF1 from "../../../assets/spark20/sec9PcF1.png"
import sec9PcF2 from "../../../assets/spark20/sec9PcF2.png"

const Sec9 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec9'>
      <div className='content'>
        <div className='spark20_container'>
          <img src={sec9PcF1} className='phone' loading='lazy' />
          <div className='right1'>
            <div className='text_wrapper'>
              <h4 className='title_48'>Texture Upgrade 2.0</h4>
              <p className='subtitle_24'>Textured Outside, Tech-tured Inside</p>
              <p className='desc_18'>
                Find your Mr. Right among SPARK's trendy color options:Cyber
                White: Dance in the tender interplay of light and shadowGravity
                Black: Exude timeless elegance of classic valuesNeon Gold:
                Radiate nobility as sand glitters in starry brillianceMagic Skin
                2.0:Beauty meets durability. 500% more durable. 25% more UV
                protection. Glossy matte leather feels like the touch of
                luxurious yacht.
              </p>
            </div>
            <div className='datas'>
              <div className='data'>
                <div className='data_title'>Glass-Like</div>
                <p className='data_desc'>Matte and Delicate</p>
              </div>
              <div className='data'>
                <div className='data_title'>Glitter Sand 2.0</div>
                <p className='data_desc'>New Generation</p>
              </div>
              <div className='data'>
                <div className='data_title'>Fashion Color</div>
                <p className='data_desc'>Coating</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container2'>
          <div className='left2'>
            <div className='text_wrapper'>
              <h4 className='title_48'>
                IP53-Grade Peace <br className='mob' /> of Mind{" "}
                <br className='pc' /> against <br className='mob' /> Water &
                Dust
              </h4>
              <p className='desc_18'>
                Offering IP53-certified protection against water and dust.{" "}
                <br className='mob' /> Fear no more over splashes or dust. Enjoy
                carefree, <br className='mob' /> comfortable use of SPARK.
              </p>
            </div>
          </div>
          <div className='right2'>
            <img src={sec9PcF2} className='water' />
            <div className='text_wrapper'>
              <div className='title'>IP53</div>
              <p className='desc'>Water & Dust Proof</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec9
