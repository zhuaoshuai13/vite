import "./index.scss"

const Sec16 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec16 spec_sec'>
      <div className='a_cont'>
        <div className='img_wrap'>
          <picture>
            <source media='(max-width: 1080px)' srcSet={config.sec16.bg.mb} />
            <source media='(min-width: 1081px)' srcSet={config.sec16.bg.pc} />
            <img src={config.sec16.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='ctt'>
          <div className='a_title'>
            <span>{config.sec16.title}</span>
            <img src={config.sec16.title_icon} loading='lazy' />
          </div>
          <div className='a_subtitle'>
            <span>{config.sec16.subtitle}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec16
