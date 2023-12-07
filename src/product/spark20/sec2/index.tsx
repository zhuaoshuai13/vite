import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import sec2PcF1 from "../../../assets/spark20/sec2PcF1.png"
import sec2MbF1 from "../../../assets/spark20/sec2MbF1.png"

const Sec2 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec2Ani = () => {
    const tl = gsap
      .timeline()
      .to(
        ".sec2 .content",
        1,
        { scale: 0.9, clipPath: "inset(0px round 14px)" },
        "a"
      )
      .to(".sec2 .mask", 1, { opacity: 0.3 }, "a")

    ScrollTrigger.create({
      trigger: ".sec2 .mask",
      start: `bottom 85%`,
      animation: tl,
      scrub: 0.25,
    })
  }

  useEffect(() => {
    sec2Ani()
  })

  return (
    <section className='sec2'>
      <div className='content'>
        <div className='mask'></div>
        {/* <picture>
          <source media='(min-width: 1081px)' srcSet={sec2PcF1} />
          <source media='(max-width: 1080px)' srcSet={sec2MbF1} />
          <img className='item' src={sec2PcF1} loading='lazy' />
        </picture> */}
        <div className='items'>
          <div className='item'>
            <div className='img_wrapper'>
              <img src='' alt='' />
            </div>
            <div className='text_wrapper'>
              <div className='title'>
                <div>
                  <span>400% Big Volume</span>
                </div>
                <div>
                  <span>Stereo Dual Speaker</span>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='img_wrapper'>
              <img src='' alt='' />
            </div>
            <div className='text_wrapper'>
              <div className='title'>
                <div>6.56’’ 90HZ</div>
                <div>Hole Screen</div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='img_wrapper'>
              <img src='' alt='' />
            </div>
            <div className='text_wrapper'>
              <div className='title'>
                <div>Dynamic Port</div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='img_wrapper'>
              <img src='' alt='' />
            </div>
            <div className='text_wrapper'>
              <div className='title'>
                <div>
                  <span>5000mAh</span>
                </div>
                <div>
                  <span>18w Fast Charge</span>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='img_wrapper'>
              <img src='' alt='' />
            </div>
            <div className='text_wrapper'>
              <div className='title'>
                <div>
                  <span>32MP</span>
                </div>
                <div>
                  <span>Front Camera</span>
                </div>
              </div>
              <div className='desc'>with 3 Light Modes</div>
            </div>
          </div>
          <div className='item'>
            <div className='img_wrapper'>
              <img src='' alt='' />
            </div>
            <div className='text_wrapper'>
              <div className='title'>
                <div>
                  <span>50MP Ultra</span>
                </div>
                <div>
                  <span>Clear Camera</span>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='img_wrapper'>
              <img src='' alt='' />
            </div>
            <div className='text_wrapper'>
              <div className='title'>Magic skin 2.0</div>
            </div>
          </div>
          <div className='item'>
            <div className='img_wrapper'>
              <img src='' alt='' />
            </div>
            <div className='text_wrapper'>
              <div className='title'>IP53</div>
              <div className='desc'>Water & Dust Proof</div>
            </div>
          </div>
          <div className='item'>
            <div className='img_wrapper'>
              <img src='' alt='' />
            </div>
            <div className='text_wrapper'>
              <div className='title'>
                <div>
                  <span>G85Gaming</span>
                </div>
                <div>
                  <span>Processor</span>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='img_wrapper'>
              <img src='' alt='' />
            </div>
            <div className='text_wrapper'>
              <div className='title'>
                <div>
                  <span>BIG RAM+BIG ROM</span>
                </div>
                <div>
                  <span>BIG WIN</span>
                </div>
                <span className='data1'>UP TO 16GB*</span>
                <span className='data2'>UP TO 256GB*</span>
              </div>
              <div className='tips'>
                * Up to 16GB, 8GB+8GB <br /> Extended RAM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec2
