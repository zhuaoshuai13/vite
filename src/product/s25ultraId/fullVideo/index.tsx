import { useContext } from "react"
import { gsap } from "gsap"

import { ScreenContext } from "../../../provider"

import "./index.scss"

const FullVideo = () => {
  const { s25ultraConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)
  const fa = () => {
    ;(document.querySelector(".fullVideo video") as HTMLVideoElement)?.pause()
    gsap.to(".fullVideo", {
      top: "120%",
    })
  }
  return (
    <div className='fullVideo'>
      <div className='inner'>
        <video
          src={isPc ? config.sec2.full_video.pc : config.sec2.full_video.mb}
          // autoPlay={true}
          webkit-playsinline='true'
          playsInline={true}
          preload='auto'
          loop={true}
          controls
        ></video>

        <div className='closeIcon' onClick={fa}></div>
      </div>
    </div>
  )
}

export default FullVideo
