import "./index.scss"

const Sec5 = () => {
  const global = window as any

  return (
    <section className='pop8 sec5'>
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
            top: global.pop8Config.sec5.icon1Top,
            left: global.pop8Config.sec5.icon1Left,
          }}
        ></div>
        <div
          className='icon icon2'
          style={{
            top: global.pop8Config.sec5.icon2Top,
            left: global.pop8Config.sec5.icon2Left,
          }}
        ></div>
        <div
          className='icon icon3'
          style={{
            top: global.pop8Config.sec5.icon3Top,
            left: global.pop8Config.sec5.icon3Left,
          }}
        ></div>
        <div
          className='icon icon4'
          style={{
            top: global.pop8Config.sec5.icon4Top,
            left: global.pop8Config.sec5.icon4Left,
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
      </div>
    </section>
  )
}

export default Sec5
