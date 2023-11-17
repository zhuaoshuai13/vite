import { useRef } from "react"
import { SecType } from "../type.ts/type"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec15 = (props: SecType) => {
  const { isPc } = props
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  return (
    <div className={`sec15 pop8 ${IntersectionObserver}`} ref={ref}>
      <div className='title_box'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec15.bigTitle }}
        ></div>
        <div
          className='icon icon1'
          style={{
            top: isPc
              ? `${global.pop8Config.sec15.icon1.top}`
              : `${global.pop8Config.sec15.icon1.mobtop}`,
            left: isPc
              ? `${global.pop8Config.sec15.icon1.left}`
              : `${global.pop8Config.sec15.icon1.mobleft}`,
          }}
        ></div>
      </div>
      <div className='sec15_content'>
        <div className='sec15_left'>
          <div className='text_box'>
            <div className='group'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec15.title,
                }}
              ></div>
              <div
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec15.desc,
                }}
              ></div>
            </div>
          </div>
          <div
            className='tips'
            dangerouslySetInnerHTML={{ __html: global.pop8Config.sec15.tips }}
          ></div>
        </div>
        <div className='sec15_right'></div>
      </div>
    </div>
  )
}

export default Sec15
