import "./index.scss"

const Sec14 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec14'>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <img src={config.sec14.bg} loading='lazy' />
        </div>
        <div className='img_wrap2'>
          <img src={config.sec14.img2} loading='lazy' />
        </div>
        <div className='img_wrap'>
          <img src={config.sec14.img} loading='lazy' />
        </div>
        <div className='text_wrap'>
          <div className='title_wrap'>
            <span
              className='title_48'
              dangerouslySetInnerHTML={{ __html: config.sec14.title }}
            ></span>
            <span className='title_icon_white'></span>
          </div>
          <div className='desc_wrap'>
            <p
              className='desc_18'
              dangerouslySetInnerHTML={{ __html: config.sec14.desc }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec14
