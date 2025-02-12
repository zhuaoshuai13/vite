import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec2 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)

  useGSAP(
    () => {
      if (container?.current) {
        gsap.from("#sec2 .p1", {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: "#sec2 .p1",
            start: "bottom bottom",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from("#sec2 .p2", {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: "#sec2 .p2",
            start: "bottom bottom",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from("#sec2 .p3", {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: "#sec2 .p3",
            start: "bottom bottom",
            toggleActions: "restart none none reverse",
          },
        })
        const tl = gsap.timeline({ paused: true })

        tl.to(
          "#sec2 .p2 .inner",
          {
            transform: responsive?.md
              ? "scale(3)"
              : `scale(${config.sec2.scale})`,
          },
          "a"
        )

        tl.to(
          "#sec2 .p1 .inner",
          {
            opacity: 0,
          },
          "a"
        )

        tl.to(
          "#sec2 .p3 .inner",
          {
            opacity: 0,
          },
          "a"
        )

        tl.to(
          "#sec2 .sec2",
          {
            yPercent: -100,
            ease: "none",
            duration: 1,
          },
          "b"
        )
        tl.to(
          "#sec2",
          {
            opacity: 1,
            ease: "none",
            duration: 0.7,
          },
          "c"
        )
        ScrollTrigger.create({
          trigger: "#sec2",
          start: responsive?.md ? "top top" : "top top+=60",
          end: "+=300%",
          ease: "none",
          scrub: true,
          pin: true,
          animation: tl,
        })
      }
    },
    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )

  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })

  const fa = contextSafe(() => {
    const video = document.querySelector(".fullVideo video") as HTMLVideoElement
    if (video) {
      video.setAttribute("autoplay", "true")
      video.play()
    }
    gsap.to(".fullVideo", {
      top: 0,
      zIndex: 99,
      className: "fullVideo active",
    })
  })

  return (
    <section id='sec2' ref={ref} className={`imgLoad${load}`}>
      <div className='sec2'>
        <p className='p1'>
          <span
            className='inner'
            dangerouslySetInnerHTML={{ __html: config.sec2.f1 }}
          ></span>
        </p>
        <p className='p2 active'>
          <span
            className='inner'
            dangerouslySetInnerHTML={{ __html: config.sec2.f2 }}
          ></span>
        </p>
        <p className='p3'>
          <span
            className='inner'
            dangerouslySetInnerHTML={{ __html: config.sec2.f3 }}
          ></span>
        </p>
      </div>
      <div className='sec2_2'>
        <div className='video'>
          <video
            // ref={videoRef}
            className='v1'
            src={
              responsive?.md
                ? config.video.sec2.pc.src
                : config.video.sec2.mob.src
            }
            // src='/src/assets/videos/shortPc.mp4'
            // poster={
            //   responsive?.md
            //     ? config.sec1.video.H.post
            //     : config.sec1.video.V.post
            // }
            autoPlay={true}
            webkit-playsinline='true'
            playsInline={true}
            muted
            loop={true}
          ></video>
          <div className='play' onClick={fa}></div>
        </div>
      </div>
    </section>
  )
}

export default Sec2
