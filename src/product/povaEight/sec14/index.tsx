import "./index.scss"

const Sec14 = () => {
  const global = window as any

  return (
    <div className='sec14 pop8'>
      <div className='title_box'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec14.bigTitle }}
        ></div>
        <div
          className='icon icon1'
          style={{
            top: `${global.pop8Config.sec14.icon1.top}`,
            left: `${global.pop8Config.sec14.icon1.left}`,
          }}
        ></div>
        <div
          className='icon icon2'
          style={{
            top: `${global.pop8Config.sec14.icon2.top}`,
            left: `${global.pop8Config.sec14.icon2.left}`,
          }}
        ></div>
        <div
          className='icon icon3'
          style={{
            top: `${global.pop8Config.sec14.icon3.top}`,
            left: `${global.pop8Config.sec14.icon3.left}`,
          }}
        ></div>
      </div>
      <div className='sec14_content'>
        <div className='sec14_left'>
          <div className='text_box'>
            <div className='group'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec14.title,
                }}
              ></div>
              <div
                className='desc_18'
                dangerouslySetInnerHTML={{
                  __html: global.pop8Config.sec14.desc,
                }}
              ></div>
            </div>
            <div className='params'>
              <div className='param'>
                <div
                  className='big_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec14.p1a,
                  }}
                ></div>
                <div
                  className='small_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec14.p1b,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='big_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec14.p2a,
                  }}
                ></div>
                <div
                  className='small_text'
                  dangerouslySetInnerHTML={{
                    __html: global.pop8Config.sec14.p2b,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className='sec14_right'></div>
      </div>
      <div
        className='tips'
        dangerouslySetInnerHTML={{ __html: global.pop8Config.sec14.tips }}
      ></div>
    </div>
  )
}

export default Sec14
