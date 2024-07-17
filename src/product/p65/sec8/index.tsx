import { useRef } from "react"

import { Shrink } from "../components/shrink"
import Title from "../components/title"
import "./index.scss"
import { ComponentType } from "../type"
const Sec8 = ({
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
        gsap.to(".texta", {
          className: "texta title-active",
          // ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".sec8-title-trigger",
            start: "top bottom-=150",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.to(".textb", {
          className: "textb title-active",
          // ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".sec8-title-trigger",
            start: "top bottom",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".infoBox .subTitle", {
          y: 60,
          opacity: 0,
          scrollTrigger: {
            trigger: ".infoBox",
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(".infoBox .desc", {
          y: 60,
          opacity: 0,
          scrollTrigger: {
            trigger: ".infoBox",
            start: "top bottom-=180",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(".opneWrapper .f2", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".opneWrapper",
            start: "top center+=20",
            end: "top top",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })

        gsap.from(".opneWrapper .f3", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".opneWrapper",
            start: "top center+=100",
            end: "top top",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })
        gsap.from(".opneWrapper .f4", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".opneWrapper",
            start: "top center+=80",
            end: "top top",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })
        gsap.from(".opneWrapper .f5", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".opneWrapper",
            start: "top center+=60",
            end: "top top",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })
        gsap.from(".opneWrapper .f6", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".opneWrapper",
            start: "top center+=40",
            end: "top top",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })
        gsap.from(".opneWrapper .f7", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".opneWrapper",
            start: "top center+=20",
            end: "top top",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })

        const tl = gsap.timeline()
        tl.to(".bigTitle", { opacity: 0, y: -30 }, "a")
        tl.to(".infoBox", { opacity: 0, y: -60 }, "a+=.2")
        tl.from(".phone", { left: 500, opacity: 0 }, "a+=.3")
        tl.to(".open", { opacity: 0, left: -500, scale: 0.8 }, "a+=.3")
        tl.to(".out", { className: "out active" }, "a+=.3")
        tl.from(".infoBoxb", { opacity: 0, y: 60 }, "a+=.4")
        tl.from(".bigTitleb", { opacity: 0, y: 60 }, "a+=.5")

        ScrollTrigger.create({
          trigger: ".content.pc",
          start: "top top",
          end: "+=1200",
          animation: tl,
          scrub: true,
          pin: true,
          toggleActions: "restart none none reverse",
        })

        gsap.from(".mb .f2", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".sec8Wrapper",
            start: "top center",
            end: "+=300",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })

        gsap.from(".mb .f3", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".sec8Wrapper",
            start: "top center+=100",
            end: "+=300",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })
        gsap.from(".mb .f4", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".sec8Wrapper",
            start: "top center+=80",
            end: "+=300",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })
        gsap.from(".mb .f5", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".sec8Wrapper",
            start: "top center+=60",
            end: "+=300",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })
        gsap.from(".mb .f6", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".sec8Wrapper",
            start: "top center+=40",
            end: "+=300",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })
        gsap.from(".mb .f7", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".sec8Wrapper",
            start: "top center+=20",
            end: "+=300",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })

        gsap.from(".mb .f8", {
          opacity: 0,
          x: -10,
          y: 10,
          scrollTrigger: {
            trigger: ".sec8Wrapper",
            start: "top center",
            end: "+=300",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })

        gsap.to(".mb .phoneOut", {
          opacity: 0,
          x: -60,
          scrollTrigger: {
            trigger: ".textBox",
            start: "top bottom-=250",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(".mb .phoneB", {
          opacity: 0,
          x: 60,
          scrollTrigger: {
            trigger: ".textBox",
            start: "top bottom-=250",
            toggleActions: "play none none reverse",
          },
        })

        gsap.to(".infoBoxa .subTitle", {
          y: -60,
          opacity: 0,
          scrollTrigger: {
            trigger: ".textBox",
            start: "top bottom-=250",
            toggleActions: "play none none reverse",
          },
        })

        gsap.to(".infoBoxa .desc", {
          y: -60,
          opacity: 0,
          scrollTrigger: {
            trigger: ".textBox",
            start: "top bottom-=270",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(".infoBoxb .subTitle", {
          y: 60,
          opacity: 0,
          scrollTrigger: {
            trigger: ".textBox",
            start: "top bottom-=270",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(".infoBoxb .desc", {
          y: 60,
          opacity: 0,
          scrollTrigger: {
            trigger: ".textBox",
            start: "top bottom-=290",
            toggleActions: "play none none reverse",
          },
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )

  return (
    <div className={`sec8 imgLoad${load}`} ref={container}>
      <div className='sec8Wrapper'>
        <div className='top'>
          <div className='texta'></div>
          <div className='textb'>
            <div className='sec8-title-trigger'></div>
          </div>
          <div className='textbg'></div>
          <div className='icon'></div>
        </div>
        <div className='content pc'>
          <div className='out'>
            <div className='in'>
              <div className='bigTitle'>
                <Title>
                  <div>{config.sec8.titlea}</div>
                </Title>
              </div>

              <div className='infoBox'>
                <div className='subTitle'>{config.sec8.subtitlea}</div>
                <div className='desc'>
                  {config.sec8.infoa} <Shrink />
                </div>
              </div>

              <div className='opneWrapper'>
                <div className='open'>
                  <div className='f1'></div>
                  <div className='f2'></div>
                  <div className='f3'></div>
                  <div className='f4'></div>
                  <div className='f5'></div>
                  <div className='f6'></div>
                  <div className='f7'></div>
                </div>
              </div>
              <div className='bigTitleb'>
                <Title>
                  <div>{config.sec8.titleb}</div>
                </Title>
              </div>
              <div className='phone'></div>
              <div className='infoBoxb'>
                <div className='subTitle'>{config.sec8.subtitleb}</div>
                <div className='desc'>
                  {config.sec8.infob}
                  <Shrink />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mb sec8Content'>
          <div className='phoneGroup'>
            <div className='bg'></div>
            <div className='phoneOut'>
              <div className='phoneIn'>
                <div className='f1'></div>
                <div className='f2'></div>
                <div className='f3'></div>
                <div className='f4'></div>
                <div className='f5'></div>
                <div className='f6'></div>
                <div className='f7'></div>
                <div className='f8'></div>
              </div>
            </div>
            <div className='phoneB'></div>
          </div>
          <div className='titleBox'>
            <div>
              <Title>
                <div>{config.sec8.titlea}</div>
              </Title>
            </div>
            <div className='mobTitleb'>
              <Title>
                <div>{config.sec8.titlea}</div>
              </Title>
            </div>
          </div>
          <div className='textBox'>
            <div className='infoBoxa'>
              <div className='subTitle'>{config.sec8.subtitlea}</div>
              <div className='desc'>
                {config.sec8.infoa}
                <Shrink />
              </div>
            </div>
            <div className='infoBoxb'>
              <div className='subTitle'>{config.sec8.subtitleb}</div>
              <div className='desc'>
                {config.sec8.infob}
                <Shrink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec8
