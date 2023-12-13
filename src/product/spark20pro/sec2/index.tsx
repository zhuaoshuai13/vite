import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScreenContext } from "../../../provider"
import "./index.scss"
import sec2PcF1 from "../../../assets/spark20pro/sec2PcF1.png"
import sec2PcF2 from "../../../assets/spark20pro/sec2PcF2.png"
import sec2PcF3 from "../../../assets/spark20pro/sec2PcF3.png"
import sec2PcF5 from "../../../assets/spark20pro/sec2PcF5.png"
import sec2PcF6 from "../../../assets/spark20pro/sec2PcF6.png"
import sec2PcF7 from "../../../assets/spark20pro/sec2PcF7.png"
import sec2PcF8 from "../../../assets/spark20pro/sec2PcF8.png"
import sec2PcF9 from "../../../assets/spark20pro/sec2PcF9.png"
import sec2PcF10 from "../../../assets/spark20pro/sec2PcF10.png"
import sec2PcF11 from "../../../assets/spark20pro/sec2PcF11.png"
import sec2PcF12 from "../../../assets/spark20pro/sec2PcF12.png"
import sec2PcF13 from "../../../assets/spark20pro/sec2PcF13.png"
import sec2MbF1 from "../../../assets/spark20pro/sec2MbF1.png"
import sec2MbF3 from "../../../assets/spark20pro/sec2MbF3.png"
import sec2MbF4 from "../../../assets/spark20pro/sec2MbF4.png"
import sec2MbF5 from "../../../assets/spark20pro/sec2MbF5.png"
import sec2MbF6 from "../../../assets/spark20pro/sec2MbF6.png"
import sec2MbF7 from "../../../assets/spark20pro/sec2MbF7.png"
import sec2MbF8 from "../../../assets/spark20pro/sec2MbF8.png"
import sec2MbF9 from "../../../assets/spark20pro/sec2MbF9.png"
import sec2MbF10 from "../../../assets/spark20pro/sec2MbF10.png"

const Sec2 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { isPc } = useContext(ScreenContext)
  const { spark20proConfig } = window as any

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
        <div className='items'>
          <div className='sec2_col'>
            <div className='sec2_row'>
              <div className='item item1'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2MbF1} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF1} />
                    <img src={sec2PcF1} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div className='title'>
                    {spark20proConfig.sec2.item1.title.map(
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
              </div>
            </div>
            <div className='sec2_row'>
              <div className='item item2'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2PcF2} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF2} />
                    <img src={sec2PcF2} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec2.item2.title,
                    }}
                  ></div>
                </div>
              </div>
              <div className='item item3'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2MbF3} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF3} />
                    <img src={sec2PcF3} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div className='title'></div>
                </div>
              </div>
            </div>
            <div className='sec2_row'>
              <div className='item item4'>
                <div className='img_wrapper'></div>
                <div className='text_wrapper'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec2.item4.title,
                    }}
                  ></div>
                </div>
              </div>
              <div className='item item5'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2MbF5} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF5} />
                    <img src={sec2PcF5} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec2.item5.title,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className='sec2_row'>
              <div className='item item6'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2MbF6} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF6} />
                    <img src={sec2PcF6} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div className='title'>
                    {spark20proConfig.sec2.item6.title.map(
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
              </div>
            </div>
          </div>
          <div className='sec2_col'>
            <div className='sec2_row'>
              <div className='item item7'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2MbF7} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF7} />
                    <img src={sec2PcF7} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div className='title'>
                    {spark20proConfig.sec2.item7.title.map(
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
              </div>
            </div>
            <div className='sec2_row'>
              <div className='item item8'>
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
                      __html: spark20proConfig.sec2.item8.title,
                    }}
                  ></div>
                </div>
              </div>
              <div className='item item9'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2MbF9} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF9} />
                    <img src={sec2PcF9} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec2.item9.title,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className='sec2_row'>
              <div className='item item10'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2MbF10} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF10} />
                    <img src={sec2PcF10} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec2.item10.title,
                    }}
                  ></div>
                </div>
              </div>
              <div className='item item11'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2PcF11} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF11} />
                    <img src={sec2PcF11} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: spark20proConfig.sec2.item11.title,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className='sec2_col'>
            <div className='sec2_row'>
              <div className='item item12'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2PcF12} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF12} />
                    <img src={sec2PcF12} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div className='title'>
                    {spark20proConfig.sec2.item12.title.map(
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
              </div>
            </div>
            <div className='sec2_row'>
              <div className='item item13'>
                <div className='img_wrapper'>
                  <picture>
                    <source media='(max-width: 1080px)' srcSet={sec2PcF13} />
                    <source media='(min-width: 1081px)' srcSet={sec2PcF13} />
                    <img src={sec2PcF13} loading='lazy' />
                  </picture>
                </div>
                <div className='text_wrapper'>
                  <div className='title'>
                    {spark20proConfig.sec2.item13.title.map(
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
                        __html: spark20proConfig.sec2.item13.data1,
                      }}
                    ></p>
                    <p
                      className='data2'
                      dangerouslySetInnerHTML={{
                        __html: spark20proConfig.sec2.item13.data2,
                      }}
                    ></p>
                  </div>
                </div>
                <div
                  className='tips'
                  dangerouslySetInnerHTML={{
                    __html: spark20proConfig.sec2.item13.tips,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec2
