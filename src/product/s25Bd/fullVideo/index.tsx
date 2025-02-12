import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const FullVideo = ({
  config,
  gsap,
  responsive,
  useGSAP,
  container,
}: CompontentType) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })
  const fa = contextSafe(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute("autoplay", "false")
      videoRef.current.pause()
    }
    gsap
      .to(".s25 .fullVideo", {
        top: "120%",
        zIndex: -2,
      })
      .to(".s25 .fullVideo", { className: "fullVideo" })
  })
  return (
    <div className='fullVideo'>
      <div className='inner'>
        <video
          //   className='v3'
          //   src={
          //     responsive?.md ? config.sec1.video.H.src : config.sec1.video.V.src
          //   }
          src={
            responsive?.md
              ? config.video.fullVideo.pc.src
              : config.video.fullVideo.mob.src
          }
          // src='/src/assets/videos/shortPc.mp4'
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
