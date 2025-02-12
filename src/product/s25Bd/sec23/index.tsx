import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec23 = ({
  useGSAP,
  gsap,
  config,
  UseObservable,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)

  useGSAP(
    () => {
      if (container?.current) {
        gsap.from("#sec23 .oneTitle", {
          y: 20,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#sec23 .oneTitle",
            start: "bottom bottom",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from("#sec23 .desc", {
          y: 20,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#sec23 .desc",
            start: "top bottom",
            toggleActions: "restart none none reverse",
          },
        })
      }
    },
    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )

  return (
    <section id='sec23' ref={ref} className={`imgLoad${load}`}>
      <div className='sec23'>
        <div
          className='oneTitle'
          dangerouslySetInnerHTML={{ __html: config.sec23.title }}
        />
        <div className='phone'>
          <div className='img'></div>
          <div className='video'>
            <video
              // ref={videoRef}
              className='v1'
              // src={
              //   responsive?.md
              //     ? config.sec1.shortVideo.H
              //     : config.sec1.shortVideo.V
              // }
              // src='src/assets/videos/sec23Pc.mp4'
              src={config.video.sec23.pc.src}
              // poster={
              //   responsive?.md
              //     ? config.sec1.video.H.post
              //     : config.sec1.video.V.post
              // }
              autoPlay={true}
              webkit-playsinline='true'
              playsInline={true}
              preload='auto'
              muted
              loop={true}
            ></video>
          </div>
        </div>
        <div
          className='desc'
          dangerouslySetInnerHTML={{ __html: config.sec23.desc }}
        />
      </div>
    </section>
  )
}

export default Sec23
