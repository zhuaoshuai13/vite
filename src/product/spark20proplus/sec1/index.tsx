import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import { ScreenContext } from "../../../provider"

const Sec1 = () => {
  const { isPc } = useContext(ScreenContext)
  const { spark20proplusConfig } = window as any

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec1Ani = () => {
    if (isPc) {
      const tl = gsap
        .timeline()
        .from(".sec1 .slogn", 0.5, { y: "20%", opacity: 0 }, "a")
        .from(".sec1 .title", 0.5, { y: "20%", opacity: 0, delay: 0.25 }, "a")
        .from(".sec1 .items", 0.5, { y: "20%", opacity: 0, delay: 0.25 }, "a")
        .from(".sec1 .pic2", 0.5, { y: "20%", opacity: 0 })

      ScrollTrigger.create({
        trigger: ".sec1",
        start: `top 50%`,
        animation: tl,
      })
    }
  }

  const renderType1 = () => {
    return (
      <div className='content'>
        <img
          className='tecno_icon'
          src={spark20proplusConfig.sec1.tecno_logo}
          loading='lazy'
        />
        <div className='left'>
          <img
            className='product'
            src={spark20proplusConfig.sec1.product}
            loading='lazy'
          />
          <div
            className='title'
            dangerouslySetInnerHTML={{
              __html: spark20proplusConfig.sec1.title,
            }}
          ></div>
          <div className='items'>
            {spark20proplusConfig.sec1.feature.map(
              (item: any, index: number) => {
                return (
                  <div className='item' key={index}>
                    <div
                      className='item_title'
                      dangerouslySetInnerHTML={{ __html: item.featureTitle }}
                    ></div>
                    <div
                      className='item_desc'
                      dangerouslySetInnerHTML={{ __html: item.featureDesc }}
                    ></div>
                  </div>
                )
              }
            )}
          </div>
          <img
            className='pic2'
            src={spark20proplusConfig.sec1.slogn}
            loading='lazy'
          />
        </div>
        <div className='right'>
          <picture>
            <source
              media='(min-width: 1081px)'
              srcSet={spark20proplusConfig.sec1.phone.img_pc}
            />
            <source
              media='(max-width: 1080px)'
              srcSet={spark20proplusConfig.sec1.phone.img_mb}
            />
            <img
              src={spark20proplusConfig.sec1.phone.img_pc}
              className='phone'
            />
          </picture>
        </div>
      </div>
    )
  }

  const renderType2 = () => {
    return (
      <picture>
        <source
          media='(min-width: 1081px)'
          srcSet={spark20proplusConfig.sec1.type2.kv_pc}
        />
        <source
          media='(max-width: 1080px)'
          srcSet={spark20proplusConfig.sec1.type2.kv_mb}
        />
        <img
          className='kv'
          src={spark20proplusConfig.sec1.type2.kv_pc}
          alt='kv'
          loading='lazy'
        />
      </picture>
    )
  }

  useEffect(() => {
    sec1Ani()
  })

  return (
    <section className='sec1'>
      {spark20proplusConfig.sec1.type === "type1" ? renderType1() : null}
      {spark20proplusConfig.sec1.type === "type2" ? renderType2() : null}
    </section>
  )
}

export default Sec1
