import "./index.scss"

const Sec4 = () => {
  const { tab30proConfig: config, src } = window as any

  return (
    <section className='sec4'>
      <div className='sec4_wrap'>
        <div className='spec_part'>
          <div className='img_wrap spec_bg'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec4_f1_mb.webp"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec4_f1_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec4_f1_pc.webp"} />
            </picture>
          </div>
          <div className='spec_text_wrap'>
            <div
              className='spec_title'
              dangerouslySetInnerHTML={{ __html: config?.sec4?.title }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec4
