import { useRef } from "react"
// import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import UseImagesLoad from "../../../hooks/useImagesLoad"

import "./index.scss"

const Sec1 = () => {
  const { s25ultraConfig: config, src } = window as any
  // const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const { isLoaded } = UseImagesLoad([
    src + "/images/pc/sec1_p1_pc.webp",
    src + "/images/pc/sec1_p2_pc.webp",
    src + "/images/pc/sec1_p3_pc.webp",
  ])

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec1Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".phone2",
        {
          // x: "20%",
          // y: "-20%",
          // rotate: "-32deg",
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .from(
        ".phone3",
        {
          x: "50%",
          y: "-10%",
          rotate: "-30deg",
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )

    ScrollTrigger.create({
      trigger: ".sec1_wrap",
      start: `top 50%`,
      animation: tl,
    })
  }

  useGSAP(
    () => {
      if (window.innerHeight < 900) {
        window.scrollTo(0, 125)
      }
      if (isLoaded) {
        sec1Ani()
      }
    },
    { scope: wrap, dependencies: [isLoaded] }
  )

  return (
    <section className='sec1' ref={wrap}>
      <div className='sec1_wrap'>
        {isLoaded && (
          <>
            <div className='phone_wrap img_wrap phone1'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec1_p1_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec1_p1_pc.webp"}
                />
                <img loading='lazy' src={src + "/images/pc/sec1_p1_pc.webp"} />
              </picture>
            </div>
            <div className='phone_wrap img_wrap phone2'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec1_p2_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec1_p2_pc.webp"}
                />
                <img loading='lazy' src={src + "/images/pc/sec1_p2_pc.webp"} />
              </picture>
            </div>
            <div className='phone_wrap img_wrap phone3'>
              <picture>
                <source
                  media='(max-width: 750px)'
                  srcSet={src + "/images/mb/sec1_p3_mb.png"}
                />
                <source
                  media='(min-width: 751px)'
                  srcSet={src + "/images/pc/sec1_p3_pc.webp"}
                />
                <img loading='lazy' src={src + "/images/pc/sec1_p3_pc.webp"} />
              </picture>
            </div>
          </>
        )}
        <div className='content_wrap'>
          <div className='left'>
            <div className='img_wrap logo'>
              <img loading='lazy' src={src + "/images/pc/sec1_logo_pc.webp"} />
            </div>
            <div className='data_wrap'>
              {config?.sec1?.data?.map((item: any, index: number) => (
                <div className='data_item' key={index}>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                  ></div>
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: item?.desc }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className='right'>
            <div className='icon_items'>
              <div className='img_wrap item'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec1_icon1_pc.webp"}
                />
              </div>
              <div className='img_wrap item'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec1_icon2_pc.webp"}
                />
              </div>
              <div className='img_wrap item'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec1_icon3_pc.webp"}
                />
              </div>
              <div className='img_wrap item'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec1_icon4_pc.webp"}
                />
              </div>
              <div className='img_wrap item'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec1_icon5_pc.webp"}
                />
              </div>
              <div className='img_wrap item'>
                <img
                  loading='lazy'
                  src={src + "/images/pc/sec1_icon6_pc.webp"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec1
