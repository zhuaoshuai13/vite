import { useRef } from "react"
import { SecType } from "../type.ts/type"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

interface sec5Type extends SecType {
  refs: any
}

const Sec5 = (props: sec5Type) => {
  const { isPc, refs } = props
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  return (
    <section className={`pop8 sec5 ${IntersectionObserver}`} ref={ref}>
      <div className='icon_container'>
        <div
          className='title_130'
          dangerouslySetInnerHTML={{
            __html: global.pop8Config.sec5.title,
          }}
        ></div>
        <div
          className='icon icon1'
          style={{
            top: isPc
              ? global.pop8Config.sec5.icon1Top
              : global.pop8Config.sec5.icon1MobTop,
            left: isPc
              ? global.pop8Config.sec5.icon1Left
              : global.pop8Config.sec5.icon1MobLeft,
          }}
        ></div>
        <div
          className='icon icon2'
          style={{
            top: isPc
              ? global.pop8Config.sec5.icon2Top
              : global.pop8Config.sec5.icon2MobTop,
            left: isPc
              ? global.pop8Config.sec5.icon2Left
              : global.pop8Config.sec5.icon2MobLeft,
          }}
        ></div>
        <div
          className='icon icon3'
          style={{
            top: isPc
              ? global.pop8Config.sec5.icon3Top
              : global.pop8Config.sec5.icon3MobTop,
            left: isPc
              ? global.pop8Config.sec5.icon3Left
              : global.pop8Config.sec5.icon3MobLeft,
          }}
        ></div>
        <div
          className='icon icon4'
          style={{
            top: isPc
              ? global.pop8Config.sec5.icon4Top
              : global.pop8Config.sec5.icon4MobTop,
            left: isPc
              ? global.pop8Config.sec5.icon4Left
              : global.pop8Config.sec5.icon4MobLeft,
          }}
        ></div>
      </div>
      <div className='content_wrapper'>
        <div className='box1'>
          <div className='text_wrapper'>
            <div
              className='title_48 HBfont'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec5.t1,
              }}
            ></div>
            <div
              className='desc_18'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec5.d1,
              }}
            ></div>
          </div>
        </div>
        <div className='box2'></div>
        <div className='phone'></div>
        <canvas className='phone' ref={refs} width={720} height={960}></canvas>
      </div>
    </section>
  )
}

export default Sec5
