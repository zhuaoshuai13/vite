import { useRef, useEffect } from "react"

import { SecType } from "../type.ts/type"
import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec3 = (props: SecType) => {
  const { isPc, gsap, ScrollTrigger, ScrollToPlugin } = props
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  const sec3Ani = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline().from(".sec3 .bar", 1, { top: 0 })
      ScrollTrigger.create({
        trigger: ".sec3",
        start: `top 80%`,
        end: "+=20%",
        animation: tl,
        scrub: true,
      })
    })

    return () => ctx.revert() // <- Cleanup!
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    sec3Ani()
  }, [isPc])

  return (
    <section className={`pop8 sec3 ${IntersectionObserver}`} ref={ref}>
      <div className='bar'></div>
      <div className='content'>
        <div
          className='text'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec3.text }}
        ></div>
        <div className='icon_container'>
          <div
            className='title_130'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec3.title,
            }}
          ></div>
          <div
            className='icon icon1'
            style={{
              top: global.pop8Config.sec3.icon1Top,
              left: global.pop8Config.sec3.icon1Left,
            }}
          ></div>
          <div
            className='icon icon2'
            style={{
              top: global.pop8Config.sec3.icon2Top,
              left: global.pop8Config.sec3.icon2Left,
            }}
          ></div>
          <div
            className='icon icon3'
            style={{
              top: global.pop8Config.sec3.icon3Top,
              left: global.pop8Config.sec3.icon3Left,
            }}
          ></div>
        </div>
        <div className='box'>
          <div className='box1'>
            <div className='text_wrapper'>
              <div
                className='title_48 HBfont'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec3.t1,
                }}
              ></div>
              <div
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec3.d1,
                }}
              ></div>
            </div>
          </div>
          <div className='box2'>
            <div className='params'>
              <div className='param'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param1t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param1d,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param2t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param2d,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param3t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param3d,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className='circle'>
            <div className='img img1'></div>
            <div className='img img2'></div>
          </div>
          <div
            className='tips'
            dangerouslySetInnerHTML={{ __html: global.pop8Config.sec3.tips }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Sec3
