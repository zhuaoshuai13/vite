import { useRef } from "react"

import { Shrink } from "../components/shrink"
import Title from "../components/title"
import "./index.scss"
import { ComponentType } from "../type"
const Sec7 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const load = UseObservable(container)

  useGSAP(
    () => {
      if (container.current) {
        gsap.from(".sec7Text .subTitle div", {
          y: 60,
          opacity: 0,
          scrollTrigger: {
            trigger: ".sec7Text",
            start: "top bottom-=180",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".sec7Text .info div", {
          y: 60,
          opacity: 0,
          scrollTrigger: {
            trigger: ".sec7Text",
            start: "top bottom-=220",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.to(".progessA .in", {
          width: "40%",
          duration: 0.88,
          scrollTrigger: {
            trigger: ".progessB",
            start: "top bottom-=50",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.to(".progessB .in", {
          width: "100%",
          duration: 1,
          scrollTrigger: {
            trigger: ".progessB",
            start: "top bottom-=50",
            toggleActions: "restart none none reverse",
          },
        })

        const tl = gsap.timeline()

        // B出现
        tl.to(".title-a", { opacity: 0, y: -30 }, "b")
        tl.from(".title-b", { opacity: 0, y: 30 }, "b+=.2")
        tl.to(".v1", { opacity: 0 }, "b")
        tl.from(".v2", { opacity: 0 }, "b+=.2")
        tl.to(".text-a .subTitle", { opacity: 0, y: -30 }, "b")
        tl.to(".text-a .info", { opacity: 0, y: -30 }, "b+=.2")
        tl.from(".text-b .subTitle", { opacity: 0, y: 30 }, "b+=.1")
        tl.from(".text-b .info", { opacity: 0, y: 30 }, "b+=.3")

        ScrollTrigger.create({
          trigger: ".sec7Wrapper",

          start: `${
            responsive?.md
              ? "top top+=54"
              : `top top+=${window.innerHeight * 0.1}`
          }`,
          end: "+=1200",
          animation: tl,
          scrub: true,
          pin: true,
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className={`sec7 imgLoad${load}`} ref={container}>
      <div className='sec7Wrapper'>
        <div className='content'>
          <div className='videos'>
            <div className='video'>
              <video
                className='v1'
                src={config.sec7.video1.src}
                autoPlay={true}
                webkit-playsinline='true'
                playsInline={true}
                preload='auto'
                muted
                loop={true}
              ></video>
              <video
                className='v2'
                src={config.sec7.video2.src}
                autoPlay={true}
                webkit-playsinline='true'
                playsInline={true}
                preload='auto'
                muted
                loop={true}
              ></video>
            </div>
          </div>
          <div className='right'>
            <div className='tile-group'>
              <div className='title-a'>
                <Title>{config.sec7.titlea}</Title>
              </div>
              <div className='title-b'>
                <Title>{config.sec7.titleb}</Title>
              </div>
            </div>
            <div className='sec7Text'>
              <div className='text-a'>
                <div className='subTitle'>
                  <div>{config.sec7.subtitlea}</div>
                </div>
                <div className='info'>
                  <div>
                    {config.sec7.infoa}
                    <Shrink />
                  </div>
                </div>
              </div>
              <div className='text-b'>
                <div className='subTitle'>
                  <div>{config.sec7.subtitleb}</div>
                </div>
                <div className='info'>
                  <div>
                    {config.sec7.infob}
                    <Shrink />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className='progess progessA'>
              <div className='iconBox'>
                <div className='icona'></div>
                <div>{config.sec7.min}</div>
              </div>
              <div>
                <div className='out'>
                  <div className='in'></div>
                </div>
              </div>
              <div>
                <div className='subInfo'>
                  {config.sec7.from}
                  <span>{config.sec7.forty}</span>
                </div>
              </div>
            </div>
            <div className='progess progessB'>
              <div className='iconBox'>
                <div className='iconb'></div>
                <div>{config.sec7.min}</div>
              </div>
              <div>
                <div className='out'>
                  <div className='in'></div>
                </div>
              </div>
              <div>
                <div className='subInfo'>
                  {config.sec7.from}
                  <span>{config.sec7.hundred}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec7
