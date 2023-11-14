import { useRef } from "react"
import { SecType } from "../type.ts/type"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec1 = (props: SecType) => {
  const { isPc } = props
  const global = window as any
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  const renderType1 = () => {
    return (
      <div className='bg_wrapper type1'>
       <div className="bg_img" style={{backgroundImage: `url(${isPc ? global.pop8Config.sec1Type1ImagePc : global.pop8Config.sec1Type1ImageMob})`}}></div>
        <div className='content'>
          <div className='slogan'></div>
          <div className='icon_container'>
            <div
              className='title_130'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1Text.title,
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
                __html: global.pop8Config.sec1Text.p1,
              }}
            ></div>
            <div
              className='param'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1Text.p2,
              }}
            ></div>
            <div
              className='param'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1Text.p3,
              }}
            ></div>
            <div
              className='param'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1Text.p4,
              }}
            ></div>
          </div>
          <div
            className='tips'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec1Text.tips,
            }}
          ></div>
        </div>
      </div>
    )
  }

  const renderType2 = () => {
    return (
      <div className='type2'>
        <video
          src={isPc ? global.pop8Config.sec1Video.pcType2 : global.pop8Config.sec1Video.mobType2}
          poster={isPc ? global.pop8Config.sec1Video.type2Post : global.pop8Config.sec1Video.type2PostMob}
          className='video'
          autoPlay={true}
          webkit-playsinline='true'
          preload='auto'
          muted
          loop={true}
        ></video>
        <div className='content'>
          <div className='slogan'></div>
          <div className='icon_container'>
            <div
              className='title_130'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1Text.title,
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
                __html: global.pop8Config.sec1Text.p1,
              }}
            ></div>
            <div
              className='param'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1Text.p2,
              }}
            ></div>
            <div
              className='param'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1Text.p3,
              }}
            ></div>
            <div
              className='param'
              dangerouslySetInnerHTML={{
                __html: global.pop8Config.sec1Text.p4,
              }}
            ></div>
          </div>
          <div
            className='tips'
            dangerouslySetInnerHTML={{
              __html: global.pop8Config.sec1Text.tips,
            }}
          ></div>
        </div>
      </div>
    )
  }

  const renderType3 = () => {
    return (
      <div className='type3'>
        <video
          src={isPc ? global.pop8Config.sec1Video.pcType3 : global.pop8Config.sec1Video.mobType3}
          poster={isPc ? global.pop8Config.sec1Video.type3Post : global.pop8Config.sec1Video.type3PostMob}
          className='fullVideo'
          autoPlay={true}
          webkit-playsinline='true'
          preload='auto'
          muted
          loop={true}
        ></video>
      </div>
    )
  }

  const renderType4 = () => {
    return (
      <div className='type4'>
        <img src={isPc ? global.pop8Config.sec1Type4ImagePc : global.pop8Config.sec1Type4ImageMob} alt="" />
      </div>
    )
  }

  const typeMap = new Map([
    ['type1', renderType1()],
    ['type2', renderType2()],
    ['type3', renderType3()],
    ['type4', renderType4()],
  ])

  return (
    <section className={`pop8 sec1 ${IntersectionObserver}`} ref={ref}>
      {typeMap.get(global.pop8Config.sec1Type)}
    </section>
  )
}

export default Sec1
