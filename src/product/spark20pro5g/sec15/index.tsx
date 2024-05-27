import "./index.scss"

const Sec15 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec15'>
      <div className='volume_wrap'>
        <div className='volume_icon'></div>
        <div className='volume_title'>
          <span
            className='volume_big'
            dangerouslySetInnerHTML={{
              __html: config.sec15.volume_big,
            }}
          ></span>
          <span
            className='volume_small'
            dangerouslySetInnerHTML={{
              __html: config.sec15.volume_small,
            }}
          ></span>
        </div>
        <div className='volume_icon'></div>
      </div>
      <div className='bg_wrap'>
        <img src={config.sec15.bg} loading='lazy' />
        <div className='ctt'>
          <div className='text_wrap'>
            <div className='title_wrap'>
              <span
                className='title_48'
                dangerouslySetInnerHTML={{ __html: config.sec15.title }}
              ></span>
              <span className='title_icon_white'></span>
            </div>
            <div className='desc_wrap'>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{ __html: config.sec15.desc }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec15
