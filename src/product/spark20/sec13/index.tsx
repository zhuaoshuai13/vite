import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import sec13PcF1 from "../../../assets/spark20/sec13PcF1.png"
// import sec13MbF1 from "../../../assets/spark20/sec13MbF1.png"
import sec13PcF2 from "../../../assets/spark20/sec13PcF2.png"
import sec13MbF2 from "../../../assets/spark20/sec13MbF2.png"

const Sec13 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec13'>
      <div className='content'>
        <h3 className='title_96 pc'>
          <p>
            <span>Every Sense, Indulged</span>
          </p>
        </h3>
        <h3 className='title_96 mob'>
          <p>
            <span>Every Sense,</span>
          </p>
          <p>
            <span>Indulged</span>
          </p>
        </h3>
        <div className='spark20_container'>
          <div className='text_wrapper'>
            <h4 className='title_48'>
              Stereo Dual Speaker Sound by DTS <br className='mob' /> 400% Big
              Volume
            </h4>
            <p className='desc_18'>
              Feel the beat of superior sound on the go! Immerse in true stereo
              with volume pumped up by 200%, enriched with DTS for profound bass
              and distortion prevention, enabling cinematic feel at home.
              Channel-adaptive technology intelligently aligns with device
              orientation, so you move as you wish during video or gaming
              without compromising audio excellence. It also cares for your
              business: Switch seamlessly between handheld and hands-free modes,
              with Volume Plus algorithm for 400% clearer calls in noisy
              settings.
            </p>
          </div>
          <div className='pic_box'>
            {/* <picture>
              <source media='(min-width: 1081px)' srcSet={sec13PcF1} />
              <source media='(max-width: 1080px)' srcSet={sec13MbF1} />
              <img src={sec13PcF1} className='sound' loading='lazy' />
            </picture> */}
            <video
              src='https://www.tecno.mez100.com.cn/fileadmin/sitedesign/product/SPARK_20/dist/video/sec13PcV1.mp4'
              poster={sec13PcF1}
              autoPlay
              muted
              loop
              className='sound'
              webkit-playsinline='true'
              playsInline={true}
            ></video>
          </div>
          <div className='box'>
            <div className='left'>
              <div className='items'>
                <div className='item'>
                  <div className='title'>100% Volume</div>
                  <div className='line line1'></div>
                </div>
                <div className='item'>
                  <div className='title'>
                    <span>400%</span> Big volume
                  </div>
                  <div className='line line2'></div>
                </div>
              </div>
            </div>
            <div className='datas'>
              <div className='data'>
                <div className='data_title'>Stereo Dual Speakers</div>
                <p className='data_desc'>Loudness Enhancement</p>
              </div>
              <div className='data'>
                <div className='data_title'>Volume Plus</div>
                <p className='data_desc'>Loud Sound</p>
              </div>
              <div className='data'>
                <div className='data_title'>Binaural Tracing</div>
                <p className='data_desc'>Technology</p>
              </div>
              <div className='data'>
                <div className='dts'></div>
                <p className='data_desc'>Audio Processing</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container2'>
          <div className='pic_box'>
            <picture>
              <source media='(min-width: 1081px)' srcSet={sec13PcF2} />
              <source media='(max-width: 1080px)' srcSet={sec13MbF2} />
              <img src={sec13PcF2} className='screen' loading='lazy' />
            </picture>
          </div>
          <div className='box'>
            <div className='left'>
              <div className='text_wrapper'>
                <h4 className='title_48'>90Hz Hole Screen</h4>
                <p className='subtitle_24'>
                  Pioneering Hole Screen in the Price Range
                </p>
                <p className='desc_18'>
                  Leading the pack with a cutting-edge hole screen, which
                  transforms SPARK look for a sleeker appeal while delivering a
                  90% screen-to-body ratio for visual feast. This beauty also
                  comes with a brain: up to 90Hz adaptive refresh rates ensure
                  consistent smooth interactions; Smart Refresh 3.0 adjusts
                  seamlessly from static to gaming screens, intelligently
                  cutting power consumption by 3-5% without sacrificing
                  experience.
                </p>
              </div>
            </div>
            <div className='datas'>
              <div className='data'>
                <div className='data_title'>90Hz</div>
                <p className='data_desc'>Adaptive Refresh Rates</p>
              </div>
              <div className='data'>
                <div className='data_title'>Hole Screen</div>
                <p className='data_desc'>6.56'' LCD</p>
              </div>
              <div className='data'>
                <div className='data_title'>Smart Refresh 3.0</div>
                <p className='data_desc'>Balanced Power Consumption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec13
