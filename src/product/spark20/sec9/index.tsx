import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import sec9PcF2 from "../../../assets/spark20/sec9PcF2.png"
import sec9PcMagicSkin from "../../../assets/spark20/sec9PcMagicSkin.png"
import sec9PcBlack from "../../../assets/spark20/sec9PcBlack.png"
import sec9PcGold from "../../../assets/spark20/sec9PcGold.png"
import sec9PcWhite from "../../../assets/spark20/sec9PcWhite.png"
import { ScreenContext } from "../../../provider"

const Sec9 = () => {
  const { isPc } = useContext(ScreenContext)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec9Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec9 .phone:nth-child(1)", 1, { y: "30%", opacity: 0 }, "a")
      .from(
        ".sec9 .phone:nth-child(2)",
        1,
        { y: "30%", opacity: 0, delay: 0.25 },
        "a"
      )
      .from(
        ".sec9 .phone:nth-child(3)",
        1,
        { y: "30%", opacity: 0, delay: 0.5 },
        "a"
      )
      .from(
        ".sec9 .phone:nth-child(4)",
        1,
        { y: "30%", opacity: 0, delay: 0.75 },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec9 .spark20_container",
      start: `top 85%`,
      animation: tl,
    })

    const t3 = gsap
      .timeline()
      .from(".sec9 .left2", 1, { y: "30%", opacity: 0 })
      .from(".sec9 .right2", 1, { y: "30%", opacity: 0 })

    ScrollTrigger.create({
      trigger: ".sec9 .container2",
      start: `top 75%`,
      animation: t3,
    })

    if (isPc) {
      const t2 = gsap
        .timeline()
        .to(".sec9 .desc_other", 1, { opacity: 0 }, "a")
        .to(".sec9 .data_other", 1, { opacity: 0 }, "a")
        .to(".sec9 .desc_magic", 1, { opacity: 1 }, "a")
        .to(".sec9 .data_magic", 1, { opacity: 1 }, "a")

      ScrollTrigger.create({
        trigger: ".sec9",
        start: `top -20%`,
        end: "+=150%",
        animation: t2,
        pin: true,
        scrub: true,
      })
    } else {
      const t2 = gsap
        .timeline()
        .to(".sec9 .desc_other", 1, { opacity: 0 }, "a")
        .to(".sec9 .data_other", 1, { opacity: 0 }, "a")
        .to(".sec9 .desc_magic", 1, { opacity: 1 }, "a")
        .to(".sec9 .data_magic", 1, { opacity: 1 }, "a")

      ScrollTrigger.create({
        trigger: ".sec9",
        start: `top 0%`,
        end: "+=150%",
        animation: t2,
        pin: true,
        scrub: true,
      })
    }

    const t4 = gsap
      .timeline()
      .to(".sec9", 1, { scale: 0.9, clipPath: "inset(0px round 14px)" }, "a")
      .to(".sec9_bottom_mask", 1, { opacity: 0.3 }, "a")

    ScrollTrigger.create({
      trigger: ".sec_container2",
      start: `bottom 85%`,
      animation: t4,
      scrub: 0.25,
    })
  }

  useEffect(() => {
    sec9Ani()
  })

  return (
    <>
      <section className='sec9'>
        <div className='content'>
          <div className='spark20_container'>
            <div className='phone_container'>
              <img src={sec9PcMagicSkin} className='phone' loading='lazy' />
              <img src={sec9PcBlack} className='phone' loading='lazy' />
              <img src={sec9PcGold} className='phone' loading='lazy' />
              <img src={sec9PcWhite} className='phone' loading='lazy' />
            </div>
            <div className='right1'>
              <div className='text_wrapper'>
                <h4 className='title_48'>Texture Upgrade 2.0</h4>
                <p className='subtitle_24'>
                  Textured Outside, Tech-tured Inside
                </p>
                <div className='desc_18'>
                  <p className='desc_other'>
                    Find your Mr. Right among SPARK's trendy color options:{" "}
                    <br />
                    <span>Cyber White:</span> Dance in the tender interplay of
                    light and shadow <br />
                    <span>Gravity Black:</span> Exude timeless elegance of
                    classic values <br />
                    <span>Neon Gold:</span> Radiate nobility as sand glitters in
                    starry brilliance
                  </p>
                  <p className='desc_magic'>
                    <span>Magic Skin 2.0:</span> Beauty meets durability. 500%
                    more durable. 25% more UV protection. Glossy matte leather
                    feels like the touch of luxurious yacht.
                  </p>
                </div>
              </div>
              <div className='data_all'>
                <div className='data_other'>
                  <div className='dt t1'>Composite Material:</div>
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
                <div className='data_magic'>
                  <div className='dt t1'>Magic Skin 2.0:</div>
                  <div className='datas'>
                    <div className='data'>
                      <div className='data_title'>
                        Glossy Matte <br /> Leather
                      </div>
                      <p className='data_desc'>Visual Upgrading</p>
                    </div>
                    <div className='data'>
                      <div className='data_title'>
                        100% <br /> Recyclable
                      </div>
                      <p className='data_desc'>Eco-friendy</p>
                    </div>
                    <div className='data'>
                      <div className='data_title'>Zero</div>
                      <p className='data_desc'>
                        Harmful <br /> Substance
                      </p>
                    </div>
                    <div className='data'>
                      <div className='data_title'>Durability</div>
                    </div>
                  </div>
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
                  <br className='mob' /> Fear no more over splashes or dust.
                  Enjoy carefree, <br className='mob' /> comfortable use of
                  SPARK.
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
        <div className='sec9_bottom_mask'></div>
      </section>
    </>
  )
}

export default Sec9
