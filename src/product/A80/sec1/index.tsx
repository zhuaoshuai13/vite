import { ComponentType } from "../type"
import "./index.scss"

const Sec1 = ({
  useGSAP,
  gsap,
  // ScrollTrigger,
  config,
  responsive,
  container,
}: ComponentType) => {
  useGSAP(
    () => {
      if (container.current) {
        gsap.from(".sec1 .sec1white", {
          ease: "none",
          x: 10,
          y: 200,
          opacity: 0,
          duration: 1.5,
        })

        gsap.from(".sec1 .sec1blue", {
          ease: "none",
          opacity: 0,
          x: 10,
          y: -200,
          delay: 0.5,
          duration: 1.5,
        })

        gsap.from(".sec1 .sec1mask", {
          ease: "none",
          opacity: 0,
          // x: 10,
          y: -20,
          delay: 1.5,
          duration: 0.5,
        })

        const tl = gsap.timeline()
        tl.to(".sec1out .sec1Wrapper", {
          top: "-100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".sec1out",
            start: "top top",
            end: `${window.innerHeight}`,
            scrub: 1,
            pin: true,
          },
        })

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
    const video = document.querySelector(".fullVideo video")
    if (video) {
      //@ts-ignore
      video.play()
    }
    gsap.to(".fullVideo", {
      top: 0,
    })
  })
  return (
    <section className='sec1out'>
      <div className='sec1Wrapper'>
        <div className='sec1'>
          <div className='group'>
            <div className='logo'></div>
            <div
              className='slogen'
              dangerouslySetInnerHTML={{ __html: config.sec1.slogen }}
            ></div>
          </div>
          <div className='colorText'>{config.sec1.desc}</div>
          <div className='params'>
            <div className='param'>
              <div className='f1' dangerouslySetInnerHTML={{__html: config.sec1.titlea}}></div>
              <div className='f2'>{config.sec1.infoa}</div>
            </div>
            <div className='line'></div>
            <div className='param'>
              <div className='f1'>{config.sec1.titleb}</div>
              <div className='f2'>{config.sec1.infob}</div>
            </div>
            <div className='line'></div>
            <div className='param'>
              <div className='f1'>{config.sec1.titlec}</div>
              <div className='f2'>{config.sec1.infoc}</div>
            </div>
          </div>
          <div className='sec1white'></div>
          <div className='sec1blue'></div>
          <div className='sec1mask'></div>
        </div>
      </div>
      <div className='sec2Wrapper'>
        <div className='sec2'>
          <video
            // src='/src/assets/videos/Vvideo.mp4'
            // onClick={() => {
            //   vRef.current?.pause()
            //   setShow(true)
            // }}
            src={
              responsive?.md
                ? config.sec2.video.H.shortSrc
                : config.sec2.video.V.shortSrc
            }
            autoPlay={true}
            webkit-playsinline='true'
            playsInline={true}
            preload='auto'
            muted
            loop={true}
          ></video>

          <div className='img' onClick={fa}></div>
        </div>
      </div>
    </section>
  )
}

export default Sec1
