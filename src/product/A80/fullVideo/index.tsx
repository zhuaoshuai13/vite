import { useRef } from "react"
import { ComponentType } from "../type"

import "./index.scss"

const FullVideo = ({
  config,
  gsap,
  responsive,
  useGSAP,
  container,
}: ComponentType) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })
  const play = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }
  const fa = contextSafe(() => {
    play()
    gsap.to(".fullVideo", {
      top: "120%",
    })
  })
  return (
    <div className='fullVideo'>
      <div className='inner'>
        <video
          src={
            responsive?.md ? config.sec2.video.H.src : config.sec2.video.V.src
          }

          // src={
          //   responsive?.md
          //     ? config.sec2.video.H.shortSrc
          //     : config.sec2.video.V.shortSrc
          // }
          // src="https://iteldev.mez100.com.cn/fileadmin/assets/v/A80/dist/videos/HvideoEN.mp4"
          // src='/src/assets/videos/enH.mp4'
          // poster={
          //   responsive?.md ? config.sec1.video.H.post : config.sec1.video.V.post
          // }
          controls
          muted
          playsInline
          autoPlay={true}
          webkit-playsinline='true'
          preload='auto'
          loop={true}
          ref={videoRef}
        ></video>
        <div className='closeIcon' onClick={fa}></div>
      </div>
    </div>
  )
}

export default FullVideo
