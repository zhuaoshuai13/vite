import "./index.scss"

const Sec11 = () => {
  const global = window as any

  return (
    <div className='sec11 pop8'>
      <div className='title_box'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec11.bigTitle }}
        ></div>
        <div
          className='icon icon1'
          style={{
            top: `${global.pop8Config.sec11.icon1.top}`,
            left: `${global.pop8Config.sec11.icon1.left}`,
          }}
        ></div>
        <div
          className='icon icon2'
          style={{
            top: `${global.pop8Config.sec11.icon2.top}`,
            left: `${global.pop8Config.sec11.icon2.left}`,
          }}
        ></div>
        <div
          className='icon icon3'
          style={{
            top: `${global.pop8Config.sec11.icon3.top}`,
            left: `${global.pop8Config.sec11.icon3.left}`,
          }}
        ></div>
      </div>
      <div className='sec11_phone'></div>
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
      <div
        className='tips'
        dangerouslySetInnerHTML={{ __html: global.pop8Config.sec11.tips }}
      ></div>
    </div>
  )
}

export default Sec11
