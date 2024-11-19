import "./index.scss"

const Sec17 = () => {
  const { tab30proConfig: config, src } = window as any

  return (
    <section className='sec17'>
      <div className='sec17_wrap'>
        <div className='spec_part'>
          <div className='img_wrap spec_bg'>
            <picture>
              <source
                media='(max-width: 750px)'
                srcSet={src + "/images/mb/sec17_f1_pc.webp"}
              />
              <source
                media='(min-width: 751px)'
                srcSet={src + "/images/pc/sec17_f1_pc.webp"}
              />
              <img loading='lazy' src={src + "/images/pc/sec17_f1_pc.webp"} />
            </picture>
          </div>
          <div className='spec_text_wrap'>
            <div
              className='spec_title'
              dangerouslySetInnerHTML={{ __html: config?.sec17?.title }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec17
