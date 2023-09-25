import './index.scss'

const Sec1 = () => {
  return (
    <section className='sec sec1'>
      <div className='bg_wrapper'>
        <div className='content'>
          <div className='slogan'></div>
          <div
            className='title_130'
            dangerouslySetInnerHTML={{
              __html: (window as any).pop8Config.sec1.title,
            }}
          ></div>
          <div className='slogan'></div>
        </div>
      </div>
    </section>
  )
}

export default Sec1
