import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import sec11PcF1 from "../../../assets/spark20/sec11PcF1.png"
import sec11PcF2 from "../../../assets/spark20/sec11PcF2.png"
import sec11PcF3 from "../../../assets/spark20/sec11PcF3.png"
import sec11MbF3 from "../../../assets/spark20/sec11MbF3.jpg"
import sec11PcF4 from "../../../assets/spark20/sec11PcF4.png"
import sec11MbF4 from "../../../assets/spark20/sec11MbF4.png"

const Sec11 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec11'>
      <div className='content'>
        <h3 className='title_96'>
          <p>
            <span>Core + Code</span>
          </p>
          <p>
            <span>Faster Than Fast</span>
          </p>
        </h3>

        <div className='container1'>
          {/* <img
            src={sec11PcF1}
            alt='G85 Gaming Processor'
            className='processor'
            loading='lazy'
          /> */}
          <video
            src='src/assets/video/sec11PcV1.mp4'
            poster={sec11PcF1}
            autoPlay
            muted
            loop
          ></video>
          <div className='right1'>
            <div className='text_wrapper'>
              <h4 className='title_48'>G85 Gaming Processor</h4>
              <p className='subtitle_24'>Clarity Beyond Compare</p>
              <p className='desc_18'>
                Crystallize wonderful moments at a push of a button. 50MP
                ultra-clear main camera and f/1.6 aperture deliver true-to-life
                shots with enhanced depth. HDR algorithm magically balances
                light and shadow, elevating photography into masterpiece. Ultra
                Clarity Mode pushes it further, rendering photos bursting with
                details. Every press yields endless surprises.
              </p>
            </div>
            <div className='datas'>
              <div className='data'>
                <div className='data_title'>2*Cortex-A75 @2000 MHz</div>
              </div>
              <div className='data'>
                <div className='data_title'>6*Cortex-A55 @1800 MHz</div>
              </div>
            </div>
          </div>
        </div>

        <div className='container2'>
          <div className='left2'>
            <div className='text_wrapper'>
              <h4 className='title_48'>Performance Upgrade</h4>
              <p className='subtitle_24'>with Twin Engine Buff</p>
              <p className='desc_18'>
                ...And wait, there's also the software-level acceleration!
                AI-powered Aurora Engine boosts launch rate for major games by
                85%, and popular apps by 95%; Darwin Engine's deep optimization
                enhances frame rates by 8x, minimum 4°C reduction in average
                temperature rise, delivering an exceptional, lag-free gaming
                experience with minimal heat.
              </p>
            </div>
          </div>
          <div className='right2'>
            <div className='pic_box'>
              {/* <img src={sec11PcF2} alt='Performance Upgrade' loading='lazy' /> */}
              <video
                src='src/assets/video/sec11PcV2.mp4'
                poster={sec11PcF2}
                autoPlay
                muted
                loop
              ></video>
              <div className='text_wrapper text1'>
                <div className='title'>Aurora Engine 2.0</div>
                <p className='desc'>Extreme Wake-Up</p>
              </div>
              <div className='text_wrapper text2'>
                <div className='title'>Darwin Engine 2.0</div>
                <p className='desc'>Game Optimisation</p>
              </div>
            </div>
          </div>
        </div>

        <div className='container3'>
          <picture>
            <source media='(min-width: 1081px)' srcSet={sec11PcF3} />
            <source media='(max-width: 1080px)' srcSet={sec11MbF3} />
            <img src={sec11PcF3} className='memory' loading='lazy' />
          </picture>
          <div className='box'>
            <div className='left3'>
              <div className='text_wrapper'>
                <h4 className='title_48'>
                  Up to 256GB <br /> ROM+16GB RAM
                </h4>
                <p className='subtitle_24'>Bigger Potential</p>
                <p className='desc_18'>
                  Capture all good memories in doubled memory capacity.
                  Turbocharge your system with up to 16GB RAM using Memory
                  Fusion. Run fast, carrying it all - the perfect blend of
                  capacity and velocity.
                </p>
              </div>
            </div>
            <div className='right3'>
              <div className='datas'>
                <div className='data'>
                  <div className='data_title'>
                    Up to <br className='mob' /> 256GB
                  </div>
                  <p className='data_desc'>Large Memory</p>
                </div>
                <div className='data'>
                  <div className='data_title'>
                    Up to <br className='mob' /> 16GB
                  </div>
                  <p className='data_desc'>Memory Fusion</p>
                </div>
                <div className='data'>
                  <div className='data_title'>
                    System <br className='mob' />
                    Slimming
                  </div>
                  <p className='data_desc'>Deep Cleanup</p>
                </div>
              </div>
            </div>
          </div>
          <div className='tips'>* Up to 16GB, 8GB+8GB Extended RAM</div>
        </div>

        <div className='container4'>
          <div className='pic_box'>
            <picture>
              <source media='(min-width: 1081px)' srcSet={sec11PcF4} />
              <source media='(max-width: 1080px)' srcSet={sec11MbF4} />
              <img src={sec11PcF4} className='battery' loading='lazy' />
            </picture>
          </div>
          <div className='box'>
            <div className='left4'>
              <div className='text_wrapper'>
                <h4 className='title_48'>
                  5000mAh Super Battery18W Fast Charge (Type-C)
                </h4>
                <p className='subtitle_24'>Epic Endurance, Rapid Revive</p>
                <p className='desc_18'>
                  Awaken your superpower with the 5000mAh super battery, fueled
                  by 18W fast charging. Watch as it revives like Superman's
                  energy bar fills up, fortified with an extended service life
                  for prolonged usage.
                </p>
              </div>
            </div>
            <div className='right4'>
              <div className='datas'>
                <div className='data'>
                  <div className='data_title'>
                    Up to <br className='mob' /> 256GB
                  </div>
                  <p className='data_desc'>Large Memory</p>
                </div>
                <div className='data'>
                  <div className='data_title'>
                    Up to <br className='mob' /> 16GB
                  </div>
                  <p className='data_desc'>Memory Fusion</p>
                </div>
                <div className='data'>
                  <div className='data_title'>
                    System <br className='mob' />
                    Slimming
                  </div>
                  <p className='data_desc'>Deep Cleanup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec11
