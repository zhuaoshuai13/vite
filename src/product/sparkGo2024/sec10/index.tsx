import { useRef } from "react"
import UseObservable from "../../../hooks/useObserve"
import "./index.scss"

const Sec10 = (props: any) => {
  const { isPc } = props
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)
  return (
    <div className={`sec10 pop8 ${IntersectionObserver}`} ref={ref}>
      <div className='title_box'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec10.bigTitle }}
        ></div>
        <div
          className='icon icon1'
          style={{
            top: isPc
              ? `${global.pop8Config.sec10.icon1.top}`
              : `${global.pop8Config.sec10.icon1.mobtop}`,
            left: isPc
              ? `${global.pop8Config.sec10.icon1.left}`
              : `${global.pop8Config.sec10.icon1.mobleft}`,
          }}
        ></div>
        <div
          className='icon icon4'
          style={{
            top: isPc
              ? `${global.pop8Config.sec10.icon4.top}`
              : `${global.pop8Config.sec10.icon4.mobtop}`,
            left: isPc
              ? `${global.pop8Config.sec10.icon4.left}`
              : `${global.pop8Config.sec10.icon4.mobleft}`,
          }}
        ></div>
      </div>
      <div className='content_box'>
        <div className="pic"></div>
        <div className='text_box'>
          <div className="dts"></div>
          <div
            className='title'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec10.title,
            }}
          ></div>
          <div
            className='desc_18'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec10.desc,
            }}
          ></div>
          <div className='params'>
            <div className='param'>
              <div
                className='big_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec10.p1a,
                }}
              ></div>
              <div
                className='small_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec10.p1b,
                }}
              ></div>
            </div>
            <div className='param'>
              <div
                className='big_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec10.p2a,
                }}
              ></div>
              <div
                className='small_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec10.p2b,
                }}
              ></div>
            </div>
            <div className='param'>
              <div
                className='big_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec10.p3a,
                }}
              ></div>
              <div
                className='small_text'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec10.p3b,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='tips'
        dangerouslySetInnerHTML={{
          __html: global.pop8Config.sec10.tips,
        }}
      ></div>
    </div>
  )
}

export default Sec10
