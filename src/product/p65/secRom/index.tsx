import { useRef } from "react"

import { Shrink } from "../components/shrink"
import "./index.scss"
import { ComponentType } from "../type"
const SecRom = ({
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
        gsap.from(".title", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secRom-title",
            start: "top bottom-=100",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".line", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secRom-title",
            start: "top bottom-=100",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".line-box", {
          opacity: 0,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 5,
          duration: 0.3,
          onComplete: function () {
            gsap.set(".line-box", { opacity: 1, duration: 0.5 }) // 将属性设置回初始状态
          },

          scrollTrigger: {
            trigger: ".secRom-title",
            start: "top bottom+=100",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".secRom-big", {
          ease: "sine.inOut",
          y: 30,

          scrollTrigger: {
            trigger: ".secRom-wrapper",
            start: "top center",
            end: "top top",
            toggleActions: "restart none none reverse",
            scrub: 0.5,
          },
        })

        gsap.from(".secRom-text-a .secRom-big-title", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secRom-text-a",
            start: "top bottom-=130",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".secRom-text-a .secRom-small-title", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secRom-text-a",
            start: "top bottom-=150",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".secRom-text-a .secRomPhotosBox", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secRom-text-a",
            start: "top bottom-=230",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".secRom-text-a .secRomTVBox", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secRom-text-a",
            start: "top bottom-=240",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".secRom-text-a .secRomAppBox", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".secRom-text-a",
            start: "top bottom-=250",
            end: "+=100",
            scrub: 0.5,
          },
        })

        const tl = gsap.timeline()
        tl.to(".secRom-big", { opacity: 0 }, "a")
        tl.to(".secRom-light", { opacity: 0 }, "a")
        tl.from(".secRom-small", { opacity: 0, y: -200, scale: 1.3 }, "a")
        tl.to(".secRom-text-a .secRom-title", { opacity: 0, y: -20 }, "a")
        tl.to(".secRom-text-a .secRom-big-title-a", { opacity: 0, y: -20 }, "a")
        tl.to(
          ".secRom-text-a .secRom-small-title-a",
          { opacity: 0, y: -20 },
          "a"
        )

        tl.to(".secRom-text-a .icon-box", { opacity: 0, y: -20 }, "a")
        tl.from(
          ".secRom-text-b .secRom-title",
          { opacity: 0, y: 20, delay: 0.2 },
          "a"
        )
        tl.from(
          ".secRom-text-b .secRom-big-title",
          { opacity: 0, y: 30, delay: 0.3 },
          "a"
        )
        tl.from(
          ".secRom-text-b .secRom-small-title",
          { opacity: 0, y: 30, delay: 0.4 },
          "a"
        )

        tl.from(
          ".secRom-text-b .secRomHotBox",
          { opacity: 0, y: 30, delay: 0.5 },
          "a"
        )

        tl.from(
          ".secRom-text-b .secRomCpuBox",
          { opacity: 0, y: 30, delay: 0.6 },
          "a"
        )

        tl.from(".secRom-text-b .tips", { opacity: 0, y: 30, delay: 0.7 }, "a")

        ScrollTrigger.create({
          trigger: ".secRom-wrapper",
          start: "top top",
          end: "+=1200",
          animation: tl,
          scrub: 1,
          pin: true,
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className={`secRom imgLoad${load}`} ref={container}>
      <div className='secRom-wrapper'>
        <div className='secRome-top'>
          <div className='texta'></div>
          <div className='textb'></div>
          <div className='logo'></div>
          <div className='textBg'></div>
        </div>
        <div className='secRom-big'></div>
        <div className='secRom-light'></div>
        <div className='secRom-small'></div>
        <div className='secRom-Box'>
          <div className='secRom-text-wrapper'>
            <div className='secRom-text secRom-text-a'>
              <div className='secRom-title'>
                <div className='line-box'>
                  <div className='line'></div>
                </div>
                <div className='title'>{config.sec9.titlea}</div>
              </div>
              <div>
                <div className='secRom-big-title'>
                  <div className='secRom-big-title-a'>
                    {config.sec9.subtitlea}
                  </div>
                </div>
                <div className='secRom-small-title'>
                  <div className='secRom-small-title-a'>
                    {config.sec9.infoa} <Shrink />
                  </div>
                </div>
                <div className='icon-box'>
                  <div className='secRomPhotosBox'>
                    <div className='secRomPhotos'></div>
                    <div>{config.sec9.photo}</div>
                  </div>
                  <div className='secRomTVBox'>
                    <div className='secRomTV'></div>
                    <div>{config.sec9.tv}</div>
                  </div>
                  <div className='secRomAppBox'>
                    <div className='secRomApp'></div>
                    <div>{config.sec9.app}</div>
                  </div>
                </div>
                <div></div>
              </div>
              <div></div>
            </div>

            <div className='secRom-text secRom-text-b'>
              <div className='secRom-title'>
                <div className='line'></div>
                <div className='title'>{config.sec9.titleb}</div>
              </div>
              <div>
                <div className='secRom-big-title'>{config.sec9.subtitleb}</div>
                <div className='secRom-small-title'>
                  {config.sec9.infob} <Shrink />
                </div>
                <div className='icon-box'>
                  <div className='secRomHotBox'>
                    <div className='secRomHot'></div>
                    <div>{config.sec9.apps}</div>
                  </div>
                  <div className='secRomCpuBox'>
                    <div className='secRomCpu'></div>
                    <div>{config.sec9.cpu}</div>
                  </div>
                </div>
                <div className='tips'>{config.sec9.tips}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecRom
