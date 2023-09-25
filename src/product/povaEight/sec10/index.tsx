import "./index.scss"

const Sec10 = () => {
  const global = window as any
  return (
    <div className='sec10 pop8'>
      <div className='title_box'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec10.bigTitle }}
        ></div>
        <div
          className='icon icon1'
          style={{
            top: `${global.pop8Config.sec10.icon1.top}`,
            left: `${global.pop8Config.sec10.icon1.left}`,
          }}
        ></div>
        <div
          className='icon icon2'
          style={{
            top: `${global.pop8Config.sec10.icon2.top}`,
            left: `${global.pop8Config.sec10.icon2.left}`,
          }}
        ></div>
        <div
          className='icon icon3'
          style={{
            top: `${global.pop8Config.sec10.icon3.top}`,
            left: `${global.pop8Config.sec10.icon3.left}`,
          }}
        ></div>
        <div
          className='icon icon4'
          style={{
            top: `${global.pop8Config.sec10.icon4.top}`,
            left: `${global.pop8Config.sec10.icon4.left}`,
          }}
        ></div>
      </div>
      <div className='content_box'>
        <div className='text_box'>
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
          </div>
        </div>
        <div className='product'></div>
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
