import "./index.scss"

const Sec4 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec4'>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec4.bg.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec4.bg.pc} />
            <img src={config.sec4.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='ctt'>
          <div className='img_wrap'>
            <img src={config.sec4.img} loading='lazy' />
          </div>
          <div className='text_wrap'>
            <div className='title_wrap'>
              <span
                className='title_48'
                dangerouslySetInnerHTML={{ __html: config.sec4.title }}
              ></span>
              <span className='title_icon_white'></span>
            </div>
            <div className='desc_wrap'>
              <p
                className='desc_18'
                dangerouslySetInnerHTML={{ __html: config.sec4.desc }}
              ></p>
            </div>
            <div className='datas'>
              {config.sec4.datas.map((item: any, index: number) => {
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

export default Sec4
