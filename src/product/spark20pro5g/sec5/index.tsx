import "./index.scss"

const Sec5 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec5'>
      <div className='bg_wrap'>
        <img src={config.sec5.bg} />
      </div>
      <div className='ctt'>
        <div className='text_wrap'>
          <div className='title_wrap'>
            <span
              className='title_48'
              dangerouslySetInnerHTML={{ __html: config.sec5.title }}
            ></span>
            <span className='title_icon_white'></span>
          </div>
          <div className='desc_wrap'>
            <p
              className='desc_18'
              dangerouslySetInnerHTML={{ __html: config.sec5.desc }}
            ></p>
          </div>
          <div className='datas'>
            {config.sec5.datas.map((item: any, index: number) => {
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
        <div className='img_wrap'>
          <img src={config.sec5.img} />
        </div>
      </div>
    </section>
  )
}

export default Sec5
