import { useRef } from "react"
import { SecType } from "../type.ts/type"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec13 = (props: SecType) => {
  const { isPc } = props
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  return (
    <div className={`sec13 pop8 ${IntersectionObserver}`} ref={ref}>
      <div className='title_box'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec13.bigTitle }}
        ></div>
        <div
          className='icon icon3'
          style={{
            top: isPc ? `${global.pop8Config.sec13.icon3.top}` : `${global.pop8Config.sec13.icon3.mobtop}`,
            left: isPc ? `${global.pop8Config.sec13.icon3.left}` : `${global.pop8Config.sec13.icon3.mobleft}`,
          }}
        ></div>
      </div>
      <div className='sec13_content'>
        <div className='sec13_left'>
          <div className='text_box'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec13.title,
              }}
            ></div>
            <div
              className='desc_18'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec13.desc,
              }}
            ></div>
            <div className='params'>
              <div className='param'>
                <div
                  className='big_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec13.p1a,
                  }}
                ></div>
                <div
                  className='small_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec13.p1b,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='big_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec13.p2a,
                  }}
                ></div>
                <div
                  className='small_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec13.p2b,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className='sec13_f2'></div>
        <div className='sec13_f1'></div>
      </div>
      <div
        className='tips'
        dangerouslySetInnerHTML={{ __html: global.pop8Config.sec13.tips }}
      ></div>
    </div>
  )
}

export default Sec13