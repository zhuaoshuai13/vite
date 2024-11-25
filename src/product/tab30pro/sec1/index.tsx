import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import UseImagesLoad from "../../../hooks/useImagesLoad"

import "./index.scss"

const Sec1 = () => {
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)
  const { isLoaded } = UseImagesLoad([
    src + "/images/pc/sec1_phone1_pc.webp",
    src + "/images/pc/sec1_phone2_pc.webp",
    src + "/images/pc/sec1_phone3_pc.webp",
    src + "/images/pc/sec1_slogn_pc.webp",
    src + "/images/pc/sec1_pen_pc.webp",
    src + "/images/pc/sec1_logo_pc.webp",
  ])

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec1Ani = () => {
    const tl = gsap
      .timeline()
      .from(
        ".content_wrap",
        {
          y: 100,
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .from(
        ".phone1",
        {
          x: "10%",
          y: "-30%",
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .from(
        ".slogn_wrap",
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .from(
        ".pen_wrap",
        {
          x: "-10vw",
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a"
      )
      .from(
        ".pen_shadow_wrap",
        {
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "a+=0.5"
      )

    ScrollTrigger.create({
      trigger: ".sec1_wrap",
      start: `top 50%`,
      animation: tl,
    })
  }

  useGSAP(
    () => {
      // if (isPc && window.innerHeight < 900) {
      //   window.scrollTo(0, 125)
      // }
      if (isLoaded) {
        sec1Ani()
      }
    },
    { scope: wrap, dependencies: [isLoaded, isPc], revertOnUpdate: true }
  )

  return (
    <section className='sec1' ref={wrap}>
      <div className='sec1_wrap'>
        <div className='phones_wrap equal_parent'>
          {isLoaded && (
            <>
              <div className='phone_wrap img_wrap phone4'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec1_phone4_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec1_phone4_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec1_phone4_pc.webp"}
                  />
                </picture>
              </div>
              <div className='phone_wrap img_wrap phone3'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec1_phone3_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec1_phone3_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec1_phone3_pc.webp"}
                  />
                </picture>
              </div>
              <div className='phone_wrap img_wrap phone2'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec1_phone2_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec1_phone2_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec1_phone2_pc.webp"}
                  />
                </picture>
              </div>
              <div className='phone_wrap img_wrap phone1'>
                <picture>
                  <source
                    media='(max-width: 750px)'
                    srcSet={src + "/images/mb/sec1_phone1_mb.png"}
                  />
                  <source
                    media='(min-width: 751px)'
                    srcSet={src + "/images/pc/sec1_phone1_pc.webp"}
                  />
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec1_phone1_pc.webp"}
                  />
                </picture>
              </div>
            </>
          )}
        </div>
        <div className='content_wrap'>
          <div className='img_wrap logo'>
            <img loading='lazy' src={src + "/images/pc/sec1_logo_pc.webp"} />
          </div>
          <div className='data_wrap'>
            {config?.sec1?.data?.map((item: any, index: number) => (
              <div
                className='data_item'
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
              ></div>
            ))}
          </div>
          <div className='img_wrap wps_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec1_wps_pc.webp"} />
          </div>
        </div>
        <div
          className='tips'
          dangerouslySetInnerHTML={{ __html: config?.sec1?.tips }}
        ></div>
        <div className='img_wrap carlcare_wrap'>
          <img loading='lazy' src={src + "/images/pc/sec1_carlcare_pc.webp"} />
        </div>
        <div className='sign_wrap'>
          <div className='img_wrap slogn_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec1_slogn_pc.webp"} />
          </div>
          <div className='img_wrap pen_shadow_wrap'>
            <img
              loading='lazy'
              src={src + "/images/pc/sec1_pen_shadow_pc.webp"}
            />
          </div>
          <div className='img_wrap pen_wrap'>
            <img loading='lazy' src={src + "/images/pc/sec1_pen_pc.webp"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec1
