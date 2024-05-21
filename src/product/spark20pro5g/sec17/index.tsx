import "./index.scss"

const Sec17 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec17'>
      <div className='hios_item'>
        <div className='left'>
          <div className='img_wrap'>
            <img src={config.sec17.dynamic_port.img} />
          </div>
        </div>
        <div className='right'>
          <div className='text_wrap'>
            <div
              className='title_48'
              dangerouslySetInnerHTML={{
                __html: config.sec17.dynamic_port.title,
              }}
            ></div>
            <div
              className='desc_18'
              dangerouslySetInnerHTML={{
                __html: config.sec17.dynamic_port.desc,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec17
