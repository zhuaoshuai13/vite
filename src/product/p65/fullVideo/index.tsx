import { useRef } from "react"
import { ComponentType } from "../type"

import "./index.scss"

const FullVideo = ({
  config,
  gsap,
  responsive,
  useGSAP,
  out,
}: ComponentType) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: out,
    revertOnUpdate: true,
  })
  const fa = contextSafe(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute("autoplay", "false")
      videoRef.current.pause()
    }
    gsap.to(".fullVideo", {
      top: "120%",
    })
  })
  return (
    <div className='fullVideo'>
      <div className='inner'>
        <video
          //   className='v3'
          src={
            responsive?.md ? config.sec1.video.H.src : config.sec1.video.V.src
          }
          // src='/src/assets/videos/enH.mp4'
          // poster={
          //   responsive?.md ? config.sec1.video.H.post : config.sec1.video.V.post
          // }
          autoPlay={false}
          controls
          webkit-playsinline='true'
          playsInline={true}
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
