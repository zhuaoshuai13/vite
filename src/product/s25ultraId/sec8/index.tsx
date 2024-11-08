import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import "./index.scss"

const Sec8 = () => {
  const { s25ultraConfig: config, src } = window as any
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  return (
    <section className='sec8' ref={wrap}>
      <div className='sec8_wrap'>
        <div className='img_wrap sec8_bg'>
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
        <div className='text_wrap slide_up'>
          <div
            className='title_75'
            dangerouslySetInnerHTML={{ __html: config?.sec8?.title }}
          ></div>
          <p
            className='desc_16'
            dangerouslySetInnerHTML={{ __html: config?.sec8?.desc }}
          ></p>
        </div>
      </div>
    </section>
  )
}

export default Sec8
