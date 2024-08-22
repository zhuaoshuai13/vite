import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"

const Sec2 = ({
  useGSAP,
  gsap,
  config,
  responsive,
  container,
}: ComponentType) => {
  const ref = useRef<HTMLDivElement>(null)
  const icon = useRef<HTMLDivElement>(null)
  const vRef = useRef<HTMLVideoElement>(null)

  useGSAP(
    () => {
      if (container.current) {
        return
      }
    },

    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )

  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })

  const fa = contextSafe(() => {
    gsap.to(".fullVideo", {
      top: 0,
    })
  })
  return (
    <section ref={ref}>
      <div className='sec2'>
        <video
          // src='/src/assets/videos/Vvideo.mp4'
          // onClick={() => {
          //   vRef.current?.pause()
          //   setShow(true)
          // }}
          src={
            responsive?.md ? config.sec2.video.H.src : config.sec2.video.V.src
          }
          ref={vRef}
          autoPlay={true}
          webkit-playsinline='true'
          playsInline={true}
          preload='auto'
          muted
          loop={true}
        ></video>

        <div className='img' ref={icon} onClick={fa}></div>
      </div>
    </section>
  )
}

export default Sec2
