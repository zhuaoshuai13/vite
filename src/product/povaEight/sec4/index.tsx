import { useRef } from "react"
import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec4 = (refs: any) => {
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  return (
    <section className={`pop8 sec4 ${IntersectionObserver}`} ref={ref}>
      <div className='icon_container'>
        <div
          className='title_130'
          dangerouslySetInnerHTML={{
            __html: global.pop8Config.sec4.title,
          }}
        ></div>
        <div
          className='icon icon1'
          style={{
            top: global.pop8Config.sec4.icon1Top,
            left: global.pop8Config.sec4.icon1Left,
          }}
        ></div>
        <div
          className='icon icon2'
          style={{
            top: global.pop8Config.sec4.icon2Top,
            left: global.pop8Config.sec4.icon2Left,
          }}
        ></div>
        <div
          className='icon icon3'
          style={{
            top: global.pop8Config.sec4.icon3Top,
            left: global.pop8Config.sec4.icon3Left,
          }}
        ></div>
        <div
          className='icon icon4'
          style={{
            top: global.pop8Config.sec4.icon4Top,
            left: global.pop8Config.sec4.icon4Left,
          }}
        ></div>
      </div>
      <div className='content_wrapper'>
        <div className='text_box'>
          <div className='left_box'>
            <div className='text_wrapper'>
              <div
                className='title_48 HBfont'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec4.t1,
                }}
              ></div>
              <div
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec4.d1,
                }}
              ></div>
            </div>
          </div>
          <div className='right_box'>
            <div className='params'>
              <div className='param'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec4.param1t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec4.param1d,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec4.param2t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec4.param2d,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec4.param3t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec4.param3d,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className='tips'
            dangerouslySetInnerHTML={{ __html: global.pop8Config.sec4.tips }}
          ></div>
        </div>
        <div className='pic_container'>
          <canvas
            className='pic canvas'
            width={1920}
            height={1080}
            ref={refs.refs}
          ></canvas>
        </div>
      </div>
    </section>
  )
}

export default Sec4
