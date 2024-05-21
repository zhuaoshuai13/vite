import "./index.scss"

const Sec2 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec2'>
      <div className='ctt'>
        <div className='items'>
          <div className='item camera'>
            <div className='img_wrap'>
              <img src={config.sec2.highlight.camera.img} />
            </div>
            <div className='text_wrap'>
              <div className='highlight_title'>
                {config.sec2.highlight.camera.title}
              </div>
            </div>
          </div>
          <div className='item design'>
            <div className='img_wrap'>
              <img src={config.sec2.highlight.design.img} />
            </div>
            <div className='text_wrap'>
              <div className='highlight_title'>
                {config.sec2.highlight.design.title}
              </div>
            </div>
          </div>
          <div className='item performance'>
            <div className='img_wrap'>
              <img src={config.sec2.highlight.performance.img} />
            </div>
            <div className='text_wrap'>
              <div className='highlight_title'>
                {config.sec2.highlight.performance.title}
              </div>
            </div>
          </div>
          <div className='item hios'>
            <div className='img_wrap'>
              <img src={config.sec2.highlight.hios.img} />
            </div>
            <div className='text_wrap'>
              <div className='highlight_title'>
                {config.sec2.highlight.hios.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec2
