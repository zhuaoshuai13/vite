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
    </div>
  )
}

export default Sec11
