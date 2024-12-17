import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import "./index.scss"

const Sec8 = () => {
  const { ear571hConfig: config, src } = window as any
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  return (
    <section className='sec8' ref={wrap}>
      <div className='sec8_wrap'>
        <div className='img_wrap img_wrap1'>
          <img src='/src/assets/dyson_ear571h/images/sec8_f1.jpg' />
        </div>
        <div className='content_wrap'>
          <div className='text_wrap'>
            <h3 className='pdp_title'>轻盈耐用且光彩夺目</h3>
            <p className='pdp_desc'>
              外壳由高级铝材加工而成，表面轻盈耐用。使用 CNC
              金属工艺或者陶瓷镀膜工艺两种工艺制成的耳机外壳。
            </p>
          </div>
          <div className='code_wrap'>
            <div className='img_wrap img_wrap2'>
              <img src='/src/assets/dyson_ear571h/images/sec8_f2.png' />
            </div>
            <div className="line"></div>
            <p className='pdp_desc'>
              扫描二维码 <br />
              前往戴森官方小程序购买
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec8
