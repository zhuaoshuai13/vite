import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import "./index.scss"

const Sec6 = () => {
  const wrap = useRef(null)
  const sec6_wrap = useRef<HTMLDivElement>(null)
  const isPausedRef = useRef(false)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    let scrollPosition = 0 // 当前滚动位置
    const speed = 2 // 滚动速度（像素/帧）
    const trackWidth = (track && track.scrollWidth / 2) || 0 // 单组图片宽度

    const scroll = () => {
      if (!isPausedRef.current && track) {
        scrollPosition -= speed
        if (Math.abs(scrollPosition) >= trackWidth) {
          // 当滚动到一组图片的末尾时重置位置
          scrollPosition = 0
        }
        track.style.transform = `translateX(${scrollPosition}px)`
      }
      requestAnimationFrame(scroll)
    }

    scroll() // 启动滚动
    return () => cancelAnimationFrame(scroll) // 清理滚动
  }, [])

  return (
    <section className='sec6' ref={wrap}>
      <div className='sec6_wrap' ref={sec6_wrap}>
        <div
          className='img_container'
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => (isPausedRef.current = false)}
        >
          <div className='img_box' ref={trackRef}>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f1.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f2.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f3.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f4.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f5.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f6.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f1.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f2.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f3.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f4.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f5.png' />
            </div>
            <div className='img_wrap'>
              <img src='/src/assets/dyson_ear571h/images/sec6_f6.png' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec6
