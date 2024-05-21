import "./index.scss"

const Sec7 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec7 spec_sec'>
      <div className='img_wrap'>
        <img src={config.sec7.bg} />
      </div>
      <div className='ctt'>
        <div className="a_title">
          <span>{config.sec7.title}</span>
          <img src={config.sec7.title_icon} />
        </div>
        <div className="a_subtitle">
          <span>{config.sec7.subtitle}</span>
        </div>
      </div>
    </section>
  )
}

export default Sec7
