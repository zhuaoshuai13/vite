import "./index.scss"

const Sec13 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec13'>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <img src={config.sec13.bg} loading='lazy' />
        </div>
        <div className='ctt'>
          <div className='img_wrap'>
            <img src={config.sec13.img} loading='lazy' />
          </div>
          <div className='text_wrap'>
            <div className='title_wrap'>
              <span
                className='title_48'
                dangerouslySetInnerHTML={{ __html: config.sec13.title }}
              ></span>
            </div>
            <div className='desc_wrap'>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{ __html: config.sec13.desc }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec13
