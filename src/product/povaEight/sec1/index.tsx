import { useRef } from "react"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec1 = () => {
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  return (
    <section className={`pop8 sec1 ${IntersectionObserver}`} ref={ref}>
      <div className='bg_wrapper'>
        <div className='content'>
          <div className='slogan'></div>
          <div className='icon_container'>
            <div
              className='title_130'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1.title,
              }}
            ></div>
            <div
              className='icon icon1'
              style={{
                top: global.pop8Config.sec1.icon1Top,
                left: global.pop8Config.sec1.icon1Left,
              }}
            ></div>
            <div
              className='icon icon2'
              style={{
                top: global.pop8Config.sec1.icon2Top,
                left: global.pop8Config.sec1.icon2Left,
              }}
            ></div>
            <div
              className='icon icon3'
              style={{
                top: global.pop8Config.sec1.icon3Top,
                left: global.pop8Config.sec1.icon3Left,
              }}
            ></div>
            <div
              className='icon icon4'
              style={{
                top: global.pop8Config.sec1.icon4Top,
                left: global.pop8Config.sec1.icon4Left,
              }}
            ></div>
            <div
              className='icon icon5'
              style={{
                top: global.pop8Config.sec1.icon5Top,
                left: global.pop8Config.sec1.icon5Left,
              }}
            ></div>
          </div>
          <div className='params'>
            <div
              className='param'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1.p1,
              }}
            ></div>
            <div
              className='param'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1.p2,
              }}
            ></div>
            <div
              className='param'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1.p3,
              }}
            ></div>
            <div
              className='param'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1.p4,
              }}
            ></div>
          </div>
          <div
            className='tips'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec1.tips,
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Sec1
