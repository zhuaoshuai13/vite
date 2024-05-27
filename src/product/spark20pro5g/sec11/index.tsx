import "./index.scss"

const Sec11 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec11'>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec11.bg.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec11.bg.pc} />
            <img src={config.sec11.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='ctt'>
          <div className='img_wrap'>
            <img src={config.sec11.img} loading='lazy' />
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
      </div>
    </section>
  )
}

export default Sec11
