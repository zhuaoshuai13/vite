import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import sec4PcF2 from "../../../assets/spark20/sec4PcF2.jpg"
import sec5PcF1 from "../../../assets/spark20/sec5PcF1.png"
import sec5PcF2 from "../../../assets/spark20/sec5PcF2.jpg"
import sec5PcF3 from "../../../assets/spark20/sec5PcF3.jpg"
import sec5PcIcon1 from "../../../assets/spark20/sec5PcIcon1.png"
import sec5PcIcon2 from "../../../assets/spark20/sec5PcIcon2.png"
import sec5PcIcon3 from "../../../assets/spark20/sec5PcIcon3.png"

const Sec5 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec5'>
      <div className='content'>
        <h3 className='title_96'>
          <p>
            <span>STRIKING CLARITY.</span>
          </p>
          <p>
            <span>SPARKLING BEAUTY.</span>
          </p>
        </h3>
        <div className='spark20_container'>
          <img src={sec5PcF1} alt='camera' className='camera' />
          <div className='right1'>
            <div className='text_wrapper'>
              <h4 className='title_48'>32MP Glowing Selfie</h4>
              <p className='subtitle_24'>Own the Night. Glow Bright!</p>
              <p className='desc_18'>
                Be there, and you’re the STAR! SPARK captures every of your
                shiny moment with a breathtaking 32MP selfie camera, powered by
                AI portrait restoration and expansive 88.9° golden lens. Solo or
                surrounded, every nuanced smile is preserved.
              </p>
            </div>
            <div className='datas'>
              <div className='data'>
                <div className='data_title'>F/2.2</div>
                <p className='data_desc'>
                  Large <br /> Aperture
                </p>
              </div>
              <div className='data'>
                <div className='data_title'>40mm</div>
                <p className='data_desc'>
                  Portrait Group Photo <br /> Focal Length
                </p>
              </div>
              <div className='data'>
                <div className='data_title'>5P</div>
                <p className='data_desc'>
                  High light <br /> Transmission
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='container2'>
            <div className='left2'>
              {/* <img
                src={sec4PcF2}
                alt='Super Night Mode'
                className='night_pic'
              /> */}
              <video
                src='src/assets/video/sec5PcV1.mp4'
                poster={sec5PcF1}
                autoPlay
                muted
                loop
              ></video>
            </div>
            <div className='right2'>
              <img src={sec5PcIcon1} className='icon' />
              <div className='text_wrapper'>
                <h4 className='title_48'>Dual Colour Temperature Flash</h4>
                <p className='subtitle_24'>3 Modes, Limitless Portait Flairs</p>
                <p className='desc_18'>
                  Light on. It’s show time! Flaunt your best self with the dual
                  colour temperature flash. Effortlessly switch between 3 modes:
                  Soft Aurora for a tender glow; Icy Blue for a lively touch;
                  and Soft Blend for your flawless natural beauty. Elevate your
                  selfie game with the pro-grade fill light!
                </p>
              </div>
              <div className='button_img'>
                {/* <span className='text on'>ON</span>
              <span className='text off'>OFF</span>
              <div className='button_block'></div> */}
              </div>
            </div>
          </div>
          <div className='container2'>
            <div className='right2'>
              <img src={sec5PcIcon2} className='icon' />
              <div className='text_wrapper'>
                <h4 className='title_48'>Super Flash Light</h4>
                <p className='subtitle_24'>Not just Light. It has a mind.</p>
                <p className='desc_18'>
                  Selfies pop with ease, even in darkness! While the dual-tone
                  flash brightens backgrounds, Super Flash Algorithm precisely
                  layers 8 exposure frames to cast just-the-right spotlight you
                  need! Physical fill light + AI fine-tuning, the result is your
                  flattering photos with balanced brightness, anytime, anywhere.
                  Wave goodbye to over- or under-exposure. Every shot is a
                  brilliant present!
                </p>
              </div>
              <div className='button_wrapper'>
                <span className='text on'>ON</span>
                <span className='text off'>OFF</span>
                <div className='button_block'></div>
              </div>
            </div>
            <div className='left2'>
              {/* <img
                src={sec5PcF2}
                alt='Super Night Mode'
                className='night_pic'
              /> */}
              <video
                src='src/assets/video/sec5PcV2.mp4'
                poster={sec5PcF2}
                autoPlay
                muted
                loop
              ></video>
            </div>
          </div>
          <div className='container2'>
            <div className='left2'>
              {/* <img
                src={sec5PcF3}
                alt='Super Night Mode'
                className='night_pic'
              /> */}
              <video
                src='src/assets/video/sec5PcV3.mp4'
                poster={sec5PcF3}
                autoPlay
                muted
                loop
              ></video>
            </div>
            <div className='right2'>
              <img src={sec5PcIcon3} className='icon' />
              <div className='text_wrapper'>
                <h4 className='title_48'>2K Video</h4>
                <p className='subtitle_24'>
                  SPAKR’s Video Quality at New Height
                </p>
                <p className='desc_18'>
                  Relive your epic moments in 2K clarity- with new discoveries
                  in each playback! The background naturally blurs, so your hero
                  stands out; Night algorithm maximizes noise reduction, turning
                  dim scenes into vibrant tales. Spot the WOW moments in 2K
                  details, inescapable from SPARK’s eagle eye!
                </p>
              </div>
              <div className='button_wrapper'>
                <span className='text on'>ON</span>
                <span className='text off'>OFF</span>
                <div className='button_block'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec5
