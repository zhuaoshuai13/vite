import { useRef } from "react"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec7 = () => {
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  return (
    <section className={`pop8 sec7 ${IntersectionObserver}`} ref={ref}>
      <div className='bg_wrapper'>
        <div className='content_wrapper'>
          <div className='text_wrapper'>
            <div
              className='title_48 HBfont'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec7.t1,
              }}
            ></div>
            <div
              className='desc_18'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec7.d1,
              }}
            ></div>
          </div>
          <div className='params'>
            <div className='param param1'>
              <div
                className='title HBfont'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec7.param1t,
                }}
              ></div>
              <div
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec7.param1d,
                }}
              ></div>
            </div>
            <div className='param param2'>
              <div
                className='title HBfont'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec7.param2t,
                }}
              ></div>
              <div
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec7.param2d,
                }}
              ></div>
            </div>
            <div className='param param3'>
              <div
                className='title HBfont'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec7.param3t,
                }}
              ></div>
              <div
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec7.param3d,
                }}
              ></div>
            </div>
            <div className='param param4'>
              <div
                className='title HBfont'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec7.param4t,
                }}
              ></div>
              <div
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec7.param4d,
                }}
              ></div>
            </div>
          </div>
          <div
            className='tips pc'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec7.tips,
            }}
          ></div>
          <div className='product mob'></div>
        </div>
        <div className='product pc'>
          <video
            src={global.pop8Config.sec7Video.pc}
            poster={global.pop8Config.sec8Video.v1Post}
            className='video'
            autoPlay
            webkit-playsinline='true'
            preload='auto'
            muted
            loop
          ></video>
        </div>
      </div>
    </section>
  )
}

export default Sec7
