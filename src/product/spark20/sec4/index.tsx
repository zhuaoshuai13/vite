import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import sec4PcF2_2 from "../../../assets/spark20/sec4PcF2_2.jpg"
import sec4PcF3 from "../../../assets/spark20/sec4PcF3.png"
import { Button, useButton } from "../components"
import { ScreenContext } from "../../../provider"

const Sec4 = () => {
  const { isOpen, setIsOpen } = useButton()
  const { isPc } = useContext(ScreenContext)
  const { spark20Config } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec4Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec4 .title_96", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec4",
      start: `top 85%`,
      animation: tl,
    })

    const t2 = gsap
      .timeline()
      .from(
        ".sec4 .spark20_container .text_wrapper",
        1,
        { y: "30%", opacity: 0 },
        "a"
      )
      .from(
        ".sec4 .spark20_container .datas",
        1,
        { y: "30%", opacity: 0, delay: 0.5 },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec4 .right1",
      start: `top 85%`,
      animation: t2,
    })

    const t3 = gsap.timeline()

    ScrollTrigger.create({
      trigger: ".sec4 .container2",
      start: `top 30%`,
      animation: t3,
      onEnter: () => {
        setIsOpen(true)
      },
    })
  }

  useEffect(() => {
    sec4Ani()
  })

  return (
    <section className='sec4'>
      <div className='content'>
        <h3 className='title_96'>
          <p>
            <span>HOLD YOUR BEAUTY TIGHT,</span>
          </p>
          <p>
            <span>IN ANY LIGHT</span>
          </p>
        </h3>
        <div className='spark20_container'>
          <video
            className='camera'
            src={spark20Config.sec4.cameraVideo.src}
            poster={spark20Config.sec4.cameraVideo.poster}
            muted
            autoPlay
            loop
            webkit-playsinline='true'
            playsInline={true}
          ></video>
          <div className='right1'>
            <div className='text_wrapper'>
              <h4 className='title_48'>50MP Ultra Clear Camera</h4>
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
                <div className='data_title'>50M</div>
                <p className='data_desc'>Ultra Clear</p>
              </div>
              <div className='data'>
                <div className='data_title'>F/1.6</div>
                <p className='data_desc'>Large Aperture</p>
              </div>
              <div className='data'>
                <div className='data_title'>Dual Flash</div>
                <p className='data_desc'>Enhance Brightness</p>
              </div>
              <div className='data'>
                <div className='data_title'>HDR Algorithm</div>
                <p className='data_desc'>Multi-frame Fusion</p>
              </div>
              <div className='data'>
                <div className='data_title'>Super Flash</div>
                <p className='data_desc'>Noise reduction</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container2'>
          <div className='left2'>
            <img
              src={sec4PcF2_2}
              alt='Super Night Mode'
              className={isOpen ? "night_pic" : "night_pic off"}
            />
          </div>
          <div className='right2'>
            <img src={sec4PcF3} className='icon' />
            <div className='text_wrapper'>
              <h4 className='title_48'>Super Night Mode</h4>
              <p className='subtitle_24'>400% More Light Sensitivity</p>
              <p className='desc_18'>
                Night illumined; Darkness defied. From 0.64 to 1.28μm, 4-in-1
                technology packs 400% more brightness by seizing every ray of
                light. Unleash your full radiance amidst darkness.
              </p>
            </div>
            <div className='datas'>
              <div className='data'>
                <div className='data_title'>4 in 1</div>
                <p className='data_desc'>Ultra Sensitive Adaptive Pixel</p>
              </div>
              <div className='data'>
                <div className='data_title'>1.28μm</div>
                <p className='data_desc'>Ultra Large Fusion Pixel</p>
              </div>
            </div>
            <Button isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec4
