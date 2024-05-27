import "./index.scss"

const Sec7 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec7 spec_sec'>
      <div className='a_cont'>
        <div className='img_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec7.bg.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec7.bg.pc} />
            <img src={config.sec7.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='ctt'>
          <div className='a_title'>
            <span>{config.sec7.title}</span>
            <img src={config.sec7.title_icon} loading='lazy' />
          </div>
          <div className='a_subtitle'>
            <span>{config.sec7.subtitle}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec7
