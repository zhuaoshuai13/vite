import { useRef } from "react"

import { SecType } from "../type.ts/type"
import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec3 = (props: SecType) => {
  const { isPc } = props
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

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
              top: isPc
                ? global.pop8Config.sec3.icon1Top
                : global.pop8Config.sec3.icon1MobTop,
              left: isPc
                ? global.pop8Config.sec3.icon1Left
                : global.pop8Config.sec3.icon1MobLeft,
            }}
          ></div>
          <div
            className='icon icon2'
            style={{
              top: isPc
                ? global.pop8Config.sec3.icon2Top
                : global.pop8Config.sec3.icon2MobTop,
              left: isPc
                ? global.pop8Config.sec3.icon2Left
                : global.pop8Config.sec3.icon2MobLeft,
            }}
          ></div>
          <div
            className='icon icon3'
            style={{
              top: isPc
                ? global.pop8Config.sec3.icon3Top
                : global.pop8Config.sec3.icon3MobTop,
              left: isPc
                ? global.pop8Config.sec3.icon3Left
                : global.pop8Config.sec3.icon3MobLeft,
            }}
          ></div>
        </div>
        <div className='box'>
          <div className='circle'>
            <div className='img img1'></div>
            <div className='img img2'></div>
          </div>
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
            <div className='params paramsa'>
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
            <div className='params paramsb'>
              <div className='param'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param4t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param4d,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param5t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param5d,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param6t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param6d,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param7t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec3.param7d,
                  }}
                ></div>
              </div>
            </div>
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
