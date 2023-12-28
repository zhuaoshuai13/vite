import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import { ScreenContext } from "../../../provider"

const Sec9 = () => {
  const { isPc } = useContext(ScreenContext)
  const { spark20proplusConfig } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec9Ani = () => {
    if (isPc) {
      const t1 = gsap
        .timeline()
        .from(".sec9 .phone:nth-child(1)", { y: "30%", opacity: 0 }, "a")
        .from(
          ".sec9 .phone:nth-child(2)",
          { y: "30%", opacity: 0, delay: 0.25 },
          "a"
        )
        .from(
          ".sec9 .phone:nth-child(3)",
          { y: "30%", opacity: 0, delay: 0.5 },
          "a"
        )
        .from(
          ".sec9 .phone:nth-child(4)",
          { y: "30%", opacity: 0, delay: 0.75 },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec9",
        start: `top 20%`,
        end: "+=150%",
        animation: t1,
      })
      const t2 = gsap
        .timeline()
        .to(
          ".sec9 .spark20_container .text_wrapper",
          0.25,
          { opacity: 0, delay: 0.5 },
          "a"
        )
        .to(".sec9 .data_all", 0.25, { opacity: 0, delay: 0.5 }, "a")
        .to(".sec9 .magic_container", 0.25, { opacity: 1, delay: 0.5 }, "a")
        .to(
          ".sec9 .phone:nth-child(4)",
          { scale: 1.15, delay: 0.5 },
          "a"
        )
        .to(".sec9 .phone:nth-child(4)", 1, {})

      ScrollTrigger.create({
        trigger: ".sec9",
        start: `top -10%`,
        end: "+=150%",
        animation: t2,
        pin: true,
        scrub: true,
      })
    } else {
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

      const t2 = gsap
        .timeline()
        .to(".sec9 .spark20_container .text_wrapper", 0.25, { opacity: 0 }, "a")
        .to(".sec9 .data_all", 0.25, { opacity: 0 }, "a")
        .to(".sec9 .magic_container", 0.25, { opacity: 1 }, "a")
        .to(".sec9 .phone:nth-child(4)", 0.5, { scale: 1.15 }, "a")

      ScrollTrigger.create({
        trigger: ".sec9",
        start: `top 2%`,
        end: "+=10%",
        animation: t2,
        scrub: 0.25,
      })
    }

    const t3 = gsap
      .timeline()
      .from(".sec9 .left2", 1, { y: "30%", opacity: 0 }, "a")
      .from(".sec9 .right2", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec9",
      start: `bottom 130%`,
      animation: t3,
    })

    const t4 = gsap
      .timeline()
      .to(
        [".sec9", ".sec_container4"],
        1,
        { scaleX: 0.93, scaleY: 0.98, clipPath: "inset(0px round 14px)" },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec_container4",
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
              {spark20proplusConfig.sec9.texture.phone.map(
                (item: string, index: number) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      className='phone'
                      loading='lazy'
                    />
                  )
                }
              )}
            </div>
            <div className='right1'>
              <div className='text_wrapper'>
                <h4
                  className='title_48'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec9.texture.title,
                  }}
                ></h4>
                <p
                  className='subtitle_24'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec9.texture.subtitle,
                  }}
                ></p>
                <div className='desc_18'>
                  <p
                    className='desc_other'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec9.texture.desc,
                    }}
                  ></p>
                </div>
              </div>
              <div className='data_all'>
                <div className='data_other'>
                  <div className='datas'>
                    {spark20proplusConfig.sec9.texture.datas.map(
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
              <div className='magic_container'>
                <h4
                  className='title_48'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec9.texture.title,
                  }}
                ></h4>
                <p
                  className='subtitle_24'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec9.texture.subtitle,
                  }}
                ></p>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec9.texture.desc_magic_skin,
                  }}
                ></p>
                <div className='data_magic'>
                  <div className='datas'>
                    {spark20proplusConfig.sec9.texture.datas_magic_skin.map(
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
                    __html: spark20proplusConfig.sec9.water.title,
                  }}
                ></h4>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec9.water.desc,
                  }}
                ></p>
              </div>
            </div>
            <div className='right2'>
              <img
                src={spark20proplusConfig.sec9.water.pic_bg}
                className='water'
                loading='lazy'
              />
              <div className='text_wrapper'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec9.water.pic_title,
                  }}
                ></div>
                <p
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: spark20proplusConfig.sec9.water.pic_desc,
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
