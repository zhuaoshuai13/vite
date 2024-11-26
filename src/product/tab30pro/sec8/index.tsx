import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import "./index.scss"

const Sec8 = () => {
  const { tab30proConfig: config, src } = window as any
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  return (
    <section className='sec8' ref={wrap}>
      <div className='sec8_wrap'>
        <div className='img_wrap bg_wrap'>
          <picture>
            <source
              media='(max-width: 750px)'
              srcSet={src + "/images/mb/sec8_bg_mb.webp"}
            />
            <source
              media='(min-width: 751px)'
              srcSet={src + "/images/pc/sec8_bg_pc.webp"}
            />
            <img loading='lazy' src={src + "/images/pc/sec8_bg_pc.webp"} />
          </picture>
        </div>
        <div className='content_wrap'>
          <div className='text_wrap slide_up'>
            <div
              className='title_58'
              dangerouslySetInnerHTML={{ __html: config?.sec8?.title }}
            ></div>
            <div
              className='subtitle_37'
              dangerouslySetInnerHTML={{
                __html: config?.sec8?.subtitle,
              }}
            ></div>
            <p
              className='desc_16'
              dangerouslySetInnerHTML={{ __html: config?.sec8?.desc }}
            ></p>
          </div>
          <div className='datas slide_up'>
            {config?.sec8?.data?.map((item: any, index: number) => {
              return (
                <div
                  className='data'
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec8
