import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"
import sec1PcSlogn from "../../../assets/spark20/sec1PcSlogn.png"
import sec1PcF2 from "../../../assets/spark20/sec1PcF2.png"
import { ScreenContext } from "../../../provider"

const Sec1 = () => {
  const { isPc } = useContext(ScreenContext)
  const { spark20Config } = window as any

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

  useEffect(() => {
    sec1Ani()
  })

  return (
    <section className='sec1'>
      <picture>
        <source media='(min-width: 1081px)' srcSet={spark20Config.sec1.kv.pc} />
        <source media='(max-width: 1080px)' srcSet={spark20Config.sec1.kv.mob} />
        <img className='kv' src={spark20Config.sec1.kv.pc} alt='kv' loading='lazy' />
      </picture>
      {spark20Config.sec1.type === "type1" ? (
        <div className='content'>
          <img
            className='slogn'
            src={sec1PcSlogn}
            alt='SPARK 20'
            loading='lazy'
          />
          <div className='title' dangerouslySetInnerHTML={{__html: spark20Config.sec1.title}}></div>
          <div className='items'>
            {spark20Config.sec1.feature.map((item: any, index: number) => {
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
            })}
          </div>
          <img className='pic2' src={sec1PcF2} alt='SPARK 20' loading='lazy' />
        </div>
      ) : (
        ""
      )}
    </section>
  )
}

export default Sec1
