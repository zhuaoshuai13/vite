import "./index.scss"

const Sec3 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec3 spec_sec'>
      <div className='img_wrap'>
        <img src={config.sec3.bg} />
      </div>
      <div className='ctt'>
        <div className="a_title">
          <span>{config.sec3.title}</span>
          <img src={config.sec3.title_icon} />
        </div>
        <div className="a_subtitle">
          <span>{config.sec3.subtitle}</span>
        </div>
      </div>
    </section>
  )
}

export default Sec3
