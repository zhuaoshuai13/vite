import "./index.scss"

const Sec10 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec10 spec_sec'>
      <div className='img_wrap'>
        <img src={config.sec10.bg} />
      </div>
      <div className='ctt'>
        <div className="a_title">
          <span>{config.sec10.title}</span>
          <img src={config.sec10.title_icon} />
        </div>
        <div className="a_subtitle">
          <span>{config.sec10.subtitle}</span>
        </div>
      </div>
    </section>
  )
}

export default Sec10
