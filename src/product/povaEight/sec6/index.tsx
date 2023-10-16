import { useRef } from "react"
import { SecType } from "../type.ts/type"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

interface sec6Type extends SecType {
  sec6Video: any
}

const Sec6 = (props: sec6Type) => {
  const { isPc, sec6Video } = props
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  return (
    <section className={`pop8 sec6 ${IntersectionObserver}`} ref={ref}>
      <div className='bar'></div>
      <div className='bg_wrapper'>
        <div
          className='text'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec6.text }}
        ></div>
        <div className='icon_container'>
          <div
            className='title_130'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec6.title,
            }}
          ></div>
          <div
            className='icon icon4'
            style={{
              top: isPc
                ? global.pop8Config.sec6.icon4Top
                : global.pop8Config.sec6.icon4MobTop,
              left: isPc
                ? global.pop8Config.sec6.icon4Left
                : global.pop8Config.sec6.icon4MobLeft,
            }}
          ></div>
        </div>
        <div className='content_wrapper'>
          <div className='box'>
            <video
              src={global.pop8Config.sec6Video.pc}
              ref={sec6Video}
              poster={global.pop8Config.sec6Video.v1Post}
              className='video'
              autoPlay={false}
              webkit-playsinline='true'
              preload='auto'
              muted
              loop={false}
            ></video>
            <div className='text_wrapper'>
              <div
                className='title_48 HBfont'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec6.t1,
                }}
              ></div>
              <div
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec6.d1,
                }}
              ></div>
            </div>
            <div className='pic_box'>
              <div className='phone'></div>
              <div className='light'></div>
              <div className='param1'>
                <div
                  className='title HBfont'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec6.param1t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec6.param1d,
                  }}
                ></div>
              </div>
              <div className='param2'>
                <div
                  className='title HBfont'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec6.param2t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec6.param2d,
                  }}
                ></div>
              </div>
              <div className='param3'>
                <div
                  className='title HBfont'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec6.param3t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec6.param3d,
                  }}
                ></div>
              </div>
              <div className='param4'>
                <div
                  className='title HBfont'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec6.param4t,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec6.param4d,
                  }}
                ></div>
              </div>
              <div
                className='tips pc'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec6.tips,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec6
