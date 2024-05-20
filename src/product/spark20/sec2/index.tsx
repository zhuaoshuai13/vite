import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScreenContext } from "../../../provider"
import "./index.scss"
import sec2PcF1 from "../../../assets/spark20/sec2PcF1.png"
import sec2PcF3 from "../../../assets/spark20/sec2PcF3.png"
import sec2PcF4 from "../../../assets/spark20/sec2PcF4.png"
import sec2PcF5 from "../../../assets/spark20/sec2PcF5.png"
import sec2PcF6 from "../../../assets/spark20/sec2PcF6.png"
import sec2PcF7 from "../../../assets/spark20/sec2PcF7_bd.png"
import sec2PcF8 from "../../../assets/spark20/sec2PcF8.png"
import sec2PcF9 from "../../../assets/spark20/sec2PcF9.png"
import sec2PcF10 from "../../../assets/spark20/sec2PcF10.png"
import sec2MbF1 from "../../../assets/spark20/sec2MbF1.png"
import sec2MbF3 from "../../../assets/spark20/sec2MbF3.png"
import sec2MbF4 from "../../../assets/spark20/sec2MbF4.png"
import sec2MbF5 from "../../../assets/spark20/sec2MbF5.png"
import sec2MbF6 from "../../../assets/spark20/sec2MbF6.png"
import sec2MbF7 from "../../../assets/spark20/sec2MbF7_bd.png"
import sec2MbF8 from "../../../assets/spark20/sec2MbF8.png"
import sec2MbF9 from "../../../assets/spark20/sec2MbF9.png"
import sec2MbF10 from "../../../assets/spark20/sec2MbF10.png"

const Sec2 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { isPc } = useContext(ScreenContext)
  const { spark20Config } = window as any

  const sec2Ani = () => {
    const tl = gsap
      .timeline()
      .to(
        ".sec2 .content",
        1,
        {
          scale: 0.93,
          clipPath: "inset(0px round 14px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        },
        "a"
      )
      .to(".sec2 .mask", 1, { opacity: 0.3 }, "a")

    ScrollTrigger.create({
      trigger: ".sec2 .mask",
      start: `bottom 85%`,
      animation: tl,
      scrub: 0.25,
    })

    if (isPc) {
      const t2 = gsap
        .timeline()
        .from(
          [
            ".sec2 .item:nth-child(1)",
            ".sec2 .item:nth-child(2)",
            ".sec2 .item:nth-child(3)",
            ".sec2 .item:nth-child(4)",
          ],
          1,
          {
            y: "5vw",
            opacity: 0,
          },
          "a"
        )
        .from(
          [
            ".sec2 .item:nth-child(5)",
            ".sec2 .item:nth-child(6)",
            ".sec2 .item:nth-child(7)",
            ".sec2 .item:nth-child(8)",
          ],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 0.25,
          },
          "a"
        )
        .from(
          [".sec2 .item:nth-child(9)", ".sec2 .item:nth-child(10)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 0.5,
          },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec2 .items",
        start: `top 85%`,
        animation: t2,
      })
    } else {
      const t2 = gsap
        .timeline()
        .from(
          [".sec2 .item:nth-child(5)"],
          1,
          {
            y: "5vw",
            opacity: 0,
          },
          "a"
        )
        .from(
          [".sec2 .item:nth-child(1)", ".sec2 .item:nth-child(9)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 0.25,
          },
          "a"
        )
        .from(
          [
            ".sec2 .item:nth-child(6)",
            ".sec2 .item:nth-child(7)",
            ".sec2 .item:nth-child(8)",
          ],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 0.5,
          },
          "a"
        )
        .from(
          [
            ".sec2 .item:nth-child(2)",
            ".sec2 .item:nth-child(3)",
            ".sec2 .item:nth-child(4)",
            ".sec2 .item:nth-child(10)",
          ],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 0.75,
          },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec2 .items",
        start: `top 85%`,
        animation: t2,
      })
    }
  }

  useEffect(() => {
    sec2Ani()
  })

  return (
    <section className='sec2'>
      <div className='mask'></div>
      <div className='content'>
        {spark20Config.sec2.type === "type1" ? (
          <div className='items'>
            <a className='item' href='#dual_speaker'>
              <div className='img_wrapper'>
                <picture>
                  <source media='(max-width: 1080px)' srcSet={sec2MbF1} />
                  <source media='(min-width: 1081px)' srcSet={sec2PcF1} />
                  <img src={sec2PcF1} loading='lazy' />
                </picture>
              </div>
              <div className='text_wrapper'>
                <div className='title'>
                  {spark20Config.sec2.item1.title.map(
                    (item: string, index: number) => {
                      return (
                        <div key={index}>
                          <span
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></span>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            </a>
            <a className='item' href='#90hz_screen'>
              <div className='img_wrapper'></div>
              <div className='text_wrapper'>
                <div className='title'>
                  {spark20Config.sec2.item2.title.map(
                    (item: string, index: number) => {
                      return (
                        <div
                          key={index}
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></div>
                      )
                    }
                  )}
                </div>
              </div>
            </a>
            <a className='item' href='#dynamic_port'>
              <div className='img_wrapper'>
                <picture>
                  <source media='(max-width: 1080px)' srcSet={sec2MbF3} />
                  <source media='(min-width: 1081px)' srcSet={sec2PcF3} />
                  <img src={sec2PcF3} loading='lazy' />
                </picture>
              </div>
              <div className='text_wrapper'>
                <div className='title'>
                  {spark20Config.sec2.item3.title.map(
                    (item: string, index: number) => {
                      return (
                        <div
                          key={index}
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></div>
                      )
                    }
                  )}
                </div>
              </div>
            </a>
            <a className='item' href='#fast_charge'>
              <div className='img_wrapper'>
                <picture>
                  <source media='(max-width: 1080px)' srcSet={sec2MbF4} />
                  <source media='(min-width: 1081px)' srcSet={sec2PcF4} />
                  <img src={sec2PcF4} loading='lazy' />
                </picture>
              </div>
              <div
                className='mah'
                dangerouslySetInnerHTML={{
                  __html: spark20Config.sec2.item4.mah,
                }}
              ></div>
              <div className='text_wrapper'>
                <div className='title'>
                  {spark20Config.sec2.item4.title.map(
                    (item: string, index: number) => {
                      return (
                        <div key={index}>
                          <span
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></span>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            </a>
            <a className='item' href='#front_camera'>
              <div className='img_wrapper'>
                <picture>
                  <source media='(max-width: 1080px)' srcSet={sec2MbF5} />
                  <source media='(min-width: 1081px)' srcSet={sec2PcF5} />
                  <img src={sec2PcF5} loading='lazy' />
                </picture>
              </div>
              <div className='text_wrapper'>
                <div className='title'>
                  {spark20Config.sec2.item5.title.map(
                    (item: string, index: number) => {
                      return (
                        <div key={index}>
                          <span
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></span>
                        </div>
                      )
                    }
                  )}
                </div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec2.item5.desc,
                  }}
                ></div>
              </div>
            </a>
            <a className='item' href='#ultra_clear_camera'>
              <div className='img_wrapper'>
                <picture>
                  <source media='(max-width: 1080px)' srcSet={sec2MbF6} />
                  <source media='(min-width: 1081px)' srcSet={sec2PcF6} />
                  <img src={sec2PcF6} loading='lazy' />
                </picture>
              </div>
              <div className='text_wrapper'>
                <div className='title'>
                  {spark20Config.sec2.item6.title.map(
                    (item: string, index: number) => {
                      return (
                        <div key={index}>
                          <span
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></span>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            </a>
            <a className='item' href='#magic_skin'>
              <div className='img_wrapper'>
                <picture>
                  <source media='(max-width: 1080px)' srcSet={sec2MbF7} />
                  <source media='(min-width: 1081px)' srcSet={sec2PcF7} />
                  <img src={sec2PcF7} loading='lazy' />
                </picture>
              </div>
              <div className='text_wrapper'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec2.item7.title,
                  }}
                ></div>
              </div>
            </a>
            <a className='item' href='#water_dust_proof'>
              <div className='img_wrapper'>
                <picture>
                  <source media='(max-width: 1080px)' srcSet={sec2MbF8} />
                  <source media='(min-width: 1081px)' srcSet={sec2PcF8} />
                  <img src={sec2PcF8} loading='lazy' />
                </picture>
              </div>
              <div className='text_wrapper'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec2.item8.title,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: spark20Config.sec2.item8.desc,
                  }}
                ></div>
              </div>
            </a>
            <a className='item' href='#gaming_processor'>
              <div className='img_wrapper'>
                <picture>
                  <source media='(max-width: 1080px)' srcSet={sec2MbF9} />
                  <source media='(min-width: 1081px)' srcSet={sec2PcF9} />
                  <img src={sec2PcF9} loading='lazy' />
                </picture>
              </div>
              <div className='text_wrapper'>
                <div className='title'>
                  {spark20Config.sec2.item9.title.map(
                    (item: string, index: number) => {
                      return (
                        <div key={index}>
                          <span
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></span>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            </a>
            <a className='item' href='#big_memory'>
              <div className='img_wrapper'>
                <picture>
                  <source media='(max-width: 1080px)' srcSet={sec2MbF10} />
                  <source media='(min-width: 1081px)' srcSet={sec2PcF10} />
                  <img src={sec2PcF10} loading='lazy' />
                </picture>
              </div>
              <div className='text_wrapper'>
                <div className='title'>
                  {spark20Config.sec2.item10.title.map(
                    (item: string, index: number) => {
                      return (
                        <div key={index}>
                          <span
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></span>
                        </div>
                      )
                    }
                  )}
                </div>
                <div className='desc'>
                  <p
                    className='data1'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec2.item10.data1,
                    }}
                  ></p>
                  <p
                    className='data2'
                    dangerouslySetInnerHTML={{
                      __html: spark20Config.sec2.item10.data2,
                    }}
                  ></p>
                </div>
              </div>
              <div
                className='tips'
                dangerouslySetInnerHTML={{
                  __html: spark20Config.sec2.item10.tips,
                }}
              ></div>
            </a>
          </div>
        ) : (
          <picture>
            <source
              media='(max-width: 1080px)'
              srcSet={spark20Config.sec2.type2.imgMb}
            />
            <source
              media='(min-width: 1081px)'
              srcSet={spark20Config.sec2.type2.imgPc}
            />
            <img
              src={spark20Config.sec2.type2.imgPc}
              loading='lazy'
              className='type2_img'
            />
          </picture>
        )}
      </div>
    </section>
  )
}

export default Sec2
