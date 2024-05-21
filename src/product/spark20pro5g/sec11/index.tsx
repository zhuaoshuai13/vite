import "./index.scss"

const Sec11 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec11'>
      <div className='bg_wrap'>
        <img src={config.sec11.bg} />
      </div>
      <div className='ctt'>
        <div className='img_wrap'>
          <img src={config.sec11.img} />
        </div>
        <div className='text_wrap'>
          <div className='title_wrap'>
            <span
              className='title_48'
              dangerouslySetInnerHTML={{ __html: config.sec11.title }}
            ></span>
            <span className='title_icon_white'></span>
          </div>
          <div className='desc_wrap'>
            <p
              className='desc_18'
              dangerouslySetInnerHTML={{ __html: config.sec11.desc }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec11
