import "./index.scss"

const Sec16 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec16 spec_sec'>
      <div className='img_wrap'>
        <img src={config.sec16.bg} />
      </div>
      <div className='ctt'>
        <div className="a_title">
          <span>{config.sec16.title}</span>
          <img src={config.sec16.title_icon} />
        </div>
        <div className="a_subtitle">
          <span>{config.sec16.subtitle}</span>
        </div>
      </div>
    </section>
  )
}

export default Sec16
