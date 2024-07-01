import { useContext, useRef, useState, useEffect } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec1 = () => {
  const { spark20pro5gConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const [finishLoad, setFinishLoad] = useState(false)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const loadImage = (src: string) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setFinishLoad(true)
    }
  }

  const sec1Ani = () => {
    if (finishLoad) {
      if (config.sec1.type === "type1") {
        const tl = gsap
          .timeline()
          .from(
            ".phone_img_wapper",
            1,
            {
              x: "-20%",
              y: "20%",
              opacity: 0,
              scale: 0.6,
              ease: "power2.inOut",
            },
            "a"
          )
          .to(".left", 1, { y: 0, opacity: 1, ease: "power2.inOut" }, "a")
          .to(".dolby_logo", 1, { y: 0, opacity: 1, ease: "power2.inOut" }, "a")

        ScrollTrigger.create({
          trigger: ".a_cont",
          start: `top 50%`,
          animation: tl,
        })
      }
    }
  }

  const renderType1 = () => {
    return (
      <div className='ctt type1'>
        <div className='left'>
          <img className='product_logo' src={config.sec1.logo} loading='lazy' />
          <div className='items'>
            {config.sec1.feature.map((item: any, index: number) => {
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
          <img className='slogn' src={config.sec1.slogn} loading='lazy' />
        </div>
        <div className='phone_img_wapper'>
          {finishLoad ? (
            <picture>
              <source
                media='(max-width: 1080px)'
                srcSet={config.sec1.phone.mb}
              />
              <source
                media='(min-width: 1081px)'
                srcSet={config.sec1.phone.pc}
              />
              <img
                className='product_img'
                src={config.sec1.phone.pc}
                loading='lazy'
              />
            </picture>
          ) : null}
        </div>
        <img className='dolby_logo' src={config.sec1.dolby_logo} loading='lazy' />
      </div>
    )
  }

  const renderType2 = () => {
    return (
      <div className='ctt type2'>
        <div
          className='kv_wrap'
          style={{
            height: isPc
              ? `calc(${config.sec1.type2.height.pc}vw / 19.2)`
              : `calc(${config.sec1.type2.height.mb}vw / 10.8)`,
          }}
        >
          {finishLoad ? (
            <picture>
              <source
                media='(max-width: 1080px)'
                srcSet={config.sec1.type2.kv.mb}
              />
              <source
                media='(min-width: 1081px)'
                srcSet={config.sec1.type2.kv.pc}
              />
              <img
                className='product_img'
                src={config.sec1.type2.kv.pc}
                loading='lazy'
              />
            </picture>
          ) : null}
        </div>
      </div>
    )
  }

  const typeMap = new Map([
    ["type1", renderType1()],
    ["type2", renderType2()],
  ])

  useGSAP(
    () => {
      sec1Ani()
    },
    { scope: wrap, dependencies: [finishLoad] }
  )

  useEffect(() => {
    if (config.sec1.type === "type1") {
      if (isPc) {
        loadImage(config.sec1.phone.pc)
      } else {
        loadImage(config.sec1.phone.mb)
      }
    } else if (config.sec1.type === "type2") {
      if (isPc) {
        loadImage(config.sec1.type2.kv.pc)
      } else {
        loadImage(config.sec1.type2.kv.mb)
      }
    }
  }, [])

  return (
    <section className='sec1' ref={wrap}>
      <div className='a_cont'>{typeMap.get(config.sec1.type)}</div>
    </section>
  )
}

export default Sec1
