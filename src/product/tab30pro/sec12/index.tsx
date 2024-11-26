import "./index.scss"

const Sec12 = () => {
  const { tab30proConfig: config, src } = window as any

  return (
    <section className='sec12'>
      <div className='sec12_wrap'>
        <div className='spec_part'>
          <div className='img_wrap spec_bg'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec12_f1_mb.webp"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec12_f1_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec12_f1_pc.webp"} />
            </picture>
          </div>
          <div className='spec_text_wrap'>
            <div
              className='spec_title'
              dangerouslySetInnerHTML={{ __html: config?.sec12?.title }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec12
