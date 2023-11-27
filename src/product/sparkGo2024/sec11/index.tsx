import { useRef, useState } from "react"
import { SecType } from "../type.ts/type"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec11 = (props: SecType) => {
  const { isPc } = props
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)
  const [isOpen, setIsOpen] = useState(false)

  const openMoreTips = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`sec11 pop8 ${IntersectionObserver}`} ref={ref}>
      <div className='title_box'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec11.bigTitle }}
        ></div>
        <div
          className='icon icon3'
          style={{
            top: isPc
              ? `${global.pop8Config.sec11.icon3.top}`
              : `${global.pop8Config.sec11.icon3.mobtop}`,
            left: isPc
              ? `${global.pop8Config.sec11.icon3.left}`
              : `${global.pop8Config.sec11.icon3.mobleft}`,
          }}
        ></div>
      </div>
      <div className='sec11_phone'>
        <video
          src={global.pop8Config.sec11Video.pc}
          poster={global.pop8Config.sec11Video.v1Post}
          className='video'
          autoPlay={true}
          webkit-playsinline='true'
          playsInline={true}
          preload='auto'
          muted
          loop={true}
        ></video>
        <div className='pic1'></div>
      </div>
      <div className='sec11_text'></div>
      <div className='left_circle'></div>
      <div className='right_circle'>
        <div className='content_box'>
          <div className='text_box'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec11.title,
              }}
            ></div>
            <div
              className='desc_18'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec11.desc,
              }}
            ></div>
            <div className='params'>
              <div className='param'>
                <div
                  className='big_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec11.p1a,
                  }}
                ></div>
                <div
                  className='small_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec11.p1b,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='big_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec11.p2a,
                  }}
                ></div>
                <div
                  className='small_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec11.p2b,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='big_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec11.p3a,
                  }}
                ></div>
                <div
                  className='small_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec11.p3b,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className='product'></div>
        </div>
      </div>
      <div className={`tips`}>
        <div className='tipContainer'>
          <div
            className='tip'
            dangerouslySetInnerHTML={{ __html: global.pop8Config.sec11.tips1 }}
          ></div>
          <button className='mob' onClick={() => openMoreTips()}></button>
        </div>
        <div
          className={`tip ${isOpen ? 'open' : ''}`}
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec11.tips2 }}
        ></div>
        <div
          className={`tip ${isOpen ? 'open' : ''}`}
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec11.tips3 }}
        ></div>
        <div
          className={`tip ${isOpen ? 'open' : ''}`}
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec11.tips4 }}
        ></div>
      </div>
    </div>
  )
}

export default Sec11
