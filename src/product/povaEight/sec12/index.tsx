import { useRef } from "react"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec12 = () => {
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  return (
    <div className={`sec12 pop8 ${IntersectionObserver}`} ref={ref}>
      <div className='title_box'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec12.bigTitle }}
        ></div>
        <div
          className='icon icon1'
          style={{
            top: `${global.pop8Config.sec12.icon1.top}`,
            left: `${global.pop8Config.sec12.icon1.left}`,
          }}
        ></div>
        <div
          className='icon icon2'
          style={{
            top: `${global.pop8Config.sec12.icon2.top}`,
            left: `${global.pop8Config.sec12.icon2.left}`,
          }}
        ></div>
        <div
          className='icon icon3'
          style={{
            top: `${global.pop8Config.sec12.icon3.top}`,
            left: `${global.pop8Config.sec12.icon3.left}`,
          }}
        ></div>
      </div>

      <div className='sec12_content'>
        <div className='sec12_left'>
          <div
            className='sec12_title'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec12.title,
            }}
          ></div>
          <div
            className='desc_18'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec12.desc,
            }}
          ></div>
        </div>
        <div className='sec12_right'>
          <div className='params'>
            <div className='param'>
              <div
                className='big_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec12.p1a,
                }}
              ></div>
              <div
                className='small_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec12.p1b,
                }}
              ></div>
            </div>
            <div className='param'>
              <div
                className='big_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec12.p2a,
                }}
              ></div>
              <div
                className='small_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec12.p2b,
                }}
              ></div>
            </div>
            <div className='param'>
              <div
                className='big_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec12.p3a,
                }}
              ></div>
              <div
                className='small_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec12.p3b,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className='sec12_phone'></div>
      </div>
      <div
        className='tips'
        dangerouslySetInnerHTML={{ __html: global.pop8Config.sec12.tips }}
      ></div>
    </div>
  )
}

export default Sec12
