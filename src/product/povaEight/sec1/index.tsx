import { useRef } from "react"
import { SecType } from "../type.ts/type"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec1 = (props: SecType) => {
  const { isPc } = props
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
                top: isPc
                  ? global.pop8Config.sec1.icon1Top
                  : global.pop8Config.sec1.icon1MobTop,
                left: isPc
                  ? global.pop8Config.sec1.icon1Left
                  : global.pop8Config.sec1.icon1MobLeft,
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
