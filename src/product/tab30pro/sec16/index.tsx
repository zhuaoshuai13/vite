import "./index.scss"

const Sec16 = () => {
  const { tab30proConfig: config, src } = window as any

  return (
    <section className='sec16'>
      <div className='sec16_wrap'>
        <div className='text_wrap slide_up'>
          <div className='left_wrap'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{ __html: config?.sec16?.title }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{ __html: config?.sec16?.subtitle }}
            ></div>
          </div>
          <div className='right_wrap'>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec16?.desc }}
            ></p>
          </div>
        </div>
        <div className='img_wrap phone_wrap slide_up'>
          <picture>
            <source
              media='(max-width: 750px)'
              srcSet={src + "/images/mb/sec16_f1_pc.png"}
            />
            <source
              media='(min-width: 751px)'
              srcSet={src + "/images/pc/sec16_f1_pc.png"}
            />
            <img loading='lazy' src={src + "/images/pc/sec16_f1_pc.png"} />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Sec16
