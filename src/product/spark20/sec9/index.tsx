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
  const { spark20Config } = window as any

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
                <h4
                  className='title_48'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec9.texture.title,
                  }}
                ></h4>
                <p
                  className='subtitle_24'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec9.texture.subtitle,
                  }}
                ></p>
                <div className='desc_18'>
                  <p
                    className='desc_other'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec9.texture.desc,
                    }}
                  ></p>
                  <p
                    className='desc_magic'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec9.texture.desc_magic_skin,
                    }}
                  ></p>
                </div>
              </div>
              <div className='data_all'>
                <div className='data_other'>
                  <div className='datas'>
                    {spark20Config.sec9.texture.datas.map(
                      (item: any, index: number) => {
                        return (
                          <div className='data' key={index}>
                            <div
                              className='data_title'
                              dangerouslySetInnerHTML={{ __html: item.name }}
                            ></div>
                            <p
                              className='data_desc'
                              dangerouslySetInnerHTML={{ __html: item.desc }}
                            ></p>
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
                <div className='data_magic'>
                  <div className='datas'>
                    {spark20Config.sec9.texture.datas_magic_skin.map(
                      (item: any, index: number) => {
                        return (
                          <div className='data' key={index}>
                            <div
                              className='data_title'
                              dangerouslySetInnerHTML={{ __html: item.name }}
                            ></div>
                            <p
                              className='data_desc'
                              dangerouslySetInnerHTML={{ __html: item.desc }}
                            ></p>
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container2'>
            <div className='left2'>
              <div className='text_wrapper'>
                <h4
                  className='title_48'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec9.water.title,
                  }}
                ></h4>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec9.water.desc,
                  }}
                ></p>
              </div>
            </div>
            <div className='right2'>
              <img src={sec9PcF2} className='water' />
              <div className='text_wrapper'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec9.water.pic_title,
                  }}
                ></div>
                <p
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec9.water.pic_desc,
                  }}
                ></p>
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
