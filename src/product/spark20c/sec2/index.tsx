import { useRef } from "react"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec2 = () => {
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)
  const global = window as any

  return (
    <section className={`pop8 sec2 ${IntersectionObserver}`} ref={ref}>
      <div className='sec2_container'>
        <div className='items'>
          <div className='item item1'>
            <div className='img_wrapper'>
              <div className='img'></div>
            </div>
            <div className='text_wrapper'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec2.t1,
                }}
              ></div>
            </div>
          </div>
          <div className='item item2'>
            <div className='img_wrapper'>
              <div className='img'></div>
            </div>
            <div className='text_wrapper'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec2.t2,
                }}
              ></div>
            </div>
          </div>
          <div className='item item3'>
            <div className='img_wrapper'>
              <div className='img'></div>
            </div>
            <div className='text_wrapper'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec2.t3,
                }}
              ></div>
            </div>
          </div>
          <div className='item item4'>
            <div className='img_wrapper'>
              <div className='img'></div>
            </div>
            <div className='text_wrapper'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec2.t4,
                }}
              ></div>
            </div>
          </div>
          <div className='item item5'>
            <div className='img_wrapper'>
              <div className='img'></div>
            </div>
            <div className='text_wrapper'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec2.t5,
                }}
              ></div>
            </div>
          </div>
          <div className='item item6'>
            <div className='img_wrapper'>
              <div className='img'></div>
            </div>
            <div className='text_wrapper'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec2.t6,
                }}
              ></div>
            </div>
            <div className="dts"></div>
          </div>
          <div className='item item7'>
            <div className='img_wrapper'>
              <div className='img'></div>
            </div>
            <div className='text_wrapper'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec2.t7,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec2
