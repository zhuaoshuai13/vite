import "./index.scss"

const Sec6 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec6'>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec6.bg.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec6.bg.pc} />
            <img src={config.sec6.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='ctt'>
          <div className='img_wrap'>
            <picture>
              <source media='(max-width: 1080px)' srcSet={config.sec6.img.mb} />
              <source media='(min-width: 1081px)' srcSet={config.sec6.img.pc} />
              <img src={config.sec6.img.pc} loading='lazy' />
            </picture>
          </div>
          <div className='text_wrap'>
            <div className='title_wrap'>
              <span
                className='title_48'
                dangerouslySetInnerHTML={{ __html: config.sec6.title }}
              ></span>
              <span className='title_icon_white'></span>
            </div>
            <div className='desc_wrap'>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{ __html: config.sec6.desc }}
              ></p>
            </div>
            <div className='datas'>
              {config.sec6.datas.map((item: any, index: number) => {
                return (
                  <div className='data' key={index}>
                    <div
                      className='data_title'
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                    <div
                      className='data_desc'
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec6
