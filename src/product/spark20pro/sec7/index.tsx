import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import sec7PcF1 from "../../../assets/spark20pro/sec7PcF1.png"
import sec7MbF1 from "../../../assets/spark20pro/sec7MbF1.png"

const Sec7 = () => {
  const { spark20proConfig } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec7Ani = () => {
    const tl = gsap
      .timeline()
      .from(".sec7 .title_96", 1, { y: "30%", opacity: 0 }, "a")

    ScrollTrigger.create({
      trigger: ".sec7",
      start: `top 85%`,
      animation: tl,
    })

    const t2 = gsap
      .timeline()
      .from(".sec7 .text_wrapper", 1, { y: "30%", opacity: 0 }, "a")
      .from(".sec7 .datas", 1, { y: "30%", opacity: 0, delay: 0.5 }, "a")
      .from(".sec7 .design_phone", 1, { y: "30%", scale: 1.2 }, "a")

    ScrollTrigger.create({
      trigger: ".sec7 .spark20_container",
      start: `top 85%`,
      end: "50%",
      animation: t2,
      scrub: true,
    })
  }

  useEffect(() => {
    sec7Ani()
  })

  return (
    <section className='sec7'>
      <div className='content'>
        <h3 className='title_96 pc'>
          {spark20proConfig.sec7.bigTitle.map((item: string, index: number) => {
            return (
              <p key={index}>
                <span dangerouslySetInnerHTML={{ __html: item }}></span>
              </p>
            )
          })}
        </h3>
        <h3 className='title_96 mob'>
          {spark20proConfig.sec7.bigTitleMb.map(
            (item: string, index: number) => {
              return (
                <p key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </p>
              )
            }
          )}
        </h3>
        <div className='spark20_container'>
          <div className='left'>
            <div className='text_wrapper'>
              <h4
                className='title_48'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec7.design.title,
                }}
              ></h4>
              <p
                className='subtitle_24'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec7.design.subtitle,
                }}
              ></p>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: spark20proConfig.sec7.design.desc,
                }}
              ></p>
            </div>
            <div className='datas'>
              {spark20proConfig.sec7.design.datas.map(
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
          <picture>
            <source media='(min-width: 1081px)' srcSet={sec7PcF1} />
            <source media='(max-width: 1080px)' srcSet={sec7MbF1} />
            <img
              src={sec7PcF1}
              alt='Eulers Deco Design'
              className='design_phone'
              loading='lazy'
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Sec7
