import "./index.scss"

const Sec1 = () => {
  const { spark20pro5gConfig: config } = window as any

  return (
    <section className='sec1'>
      <div className='h_full'>
        <div className='ctt'>
          <div className='left'>
            <img
              className='product_logo'
              src={config.sec1.logo}
              loading='lazy'
            />
            <div className='items'>
              {config.sec1.feature.map((item: any, index: number) => {
                return (
                  <div className='item' key={index}>
                    <div
                      className='item_title'
                      dangerouslySetInnerHTML={{ __html: item.featureTitle }}
                    ></div>
                    <div
                      className='item_desc'
                      dangerouslySetInnerHTML={{ __html: item.featureDesc }}
                    ></div>
                  </div>
                )
              })}
            </div>
            <img className='slogn' src={config.sec1.slogn} loading='lazy' />
          </div>
          <div className='phone_img_wapper'>
            <picture>
              <source
                media='(max-width: 1080px)'
                srcSet={config.sec1.phone.mb}
              />
              <source
                media='(min-width: 1081px)'
                srcSet={config.sec1.phone.pc}
              />
              <img
                className='product_img'
                src={config.sec1.phone.pc}
                loading='lazy'
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec1
