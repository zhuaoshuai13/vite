import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const FullVideo = () => {
  const { s25ultraConfig: config, src } = window as any
  const fa = () => {
    gsap.to(".fullVideo", {
      top: "120%",
    })
  }
  return (
    <div className='fullVideo'>
      <div className='inner'>
        <video
          src={config?.sec2?.video?.src}
          // src='/src/assets/videos/enH.mp4'
          // poster={
          //   responsive?.md ? config.sec1.video.H.post : config.sec1.video.V.post
          // }
          autoPlay={true}
          webkit-playsinline='true'
          playsInline={true}
          preload='auto'
          muted
          loop={true}
          controls
        ></video>

        <div className='closeIcon' onClick={fa}></div>
      </div>
    </div>
  )
}

export default FullVideo
