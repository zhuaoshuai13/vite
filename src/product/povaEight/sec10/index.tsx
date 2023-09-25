import "./index.scss"

const Sec10 = () => {
  const global = window as any
  return (
    <div className='sec10'>
      <div className='title_box'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec10.title }}
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
      <div className='content_box'></div>
    </div>
  )
}

export default Sec10
