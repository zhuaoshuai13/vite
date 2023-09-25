import "./index.scss"

const Sec12 = () => {
  const global = window as any

  return (
    <div className='sec12 pop8'>
      <div className='title_box'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: global.pop8Config.sec12.bigTitle }}
        ></div>
        <div
          className='icon icon1'
          style={{
            top: `${global.pop8Config.sec12.icon1.top}`,
            left: `${global.pop8Config.sec12.icon1.left}`,
          }}
        ></div>
        <div
          className='icon icon2'
          style={{
            top: `${global.pop8Config.sec12.icon2.top}`,
            left: `${global.pop8Config.sec12.icon2.left}`,
          }}
        ></div>
        <div
          className='icon icon3'
          style={{
            top: `${global.pop8Config.sec12.icon3.top}`,
            left: `${global.pop8Config.sec12.icon3.left}`,
          }}
        ></div>
      </div>

      <div className='sec12_content'></div>
    </div>
  )
}

export default Sec12
