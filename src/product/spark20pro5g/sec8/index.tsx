import "./index.scss"

const Sec8 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec8'>
      <div className='text_wrap'>
        <div className='title_wrap'>
          <span
            className='title_48'
            dangerouslySetInnerHTML={{ __html: config.sec8.title }}
          ></span>
        </div>
        <div className='desc_wrap'>
          <p
            className='desc_18'
            dangerouslySetInnerHTML={{ __html: config.sec8.desc }}
          ></p>
        </div>
      </div>
      <div className='bg_wrap'>
        <picture>
          <source media='(max-width: 1080px)' srcSet={config.sec8.bg.mb} />
          <source media='(min-width: 1081px)' srcSet={config.sec8.bg.pc} />
          <img src={config.sec8.bg.pc} loading='lazy' />
        </picture>
      </div>
      <div className='img_wrap'>
        <picture>
          <source media='(max-width: 1080px)' srcSet={config.sec8.img.mb} />
          <source media='(min-width: 1081px)' srcSet={config.sec8.img.pc} />
          <img src={config.sec8.img.pc} loading='lazy' />
        </picture>
      </div>
    </section>
  )
}

export default Sec8
