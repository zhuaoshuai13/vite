import { ComponentType } from "../type"

import "./index.scss"

const FullVideo = ({
  config,
  gsap,
  responsive,
  useGSAP,
  container,
}: ComponentType) => {
  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })
  const fa = contextSafe(() => {
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
        ></video>

        <div className='closeIcon' onClick={fa}></div>
      </div>
    </div>
  )
}

export default FullVideo
