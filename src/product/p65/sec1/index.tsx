import { useRef } from "react"
import { ComponentType } from "../type"

import "./index.scss"

const Sec1 = ({
  useGSAP,
  gsap,
  config,
  UseObservable,
  responsive,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const load = UseObservable(container)

  useGSAP(
    () => {
      if (container.current) {
        gsap.from(".leftHand", {
          x: -200,
          y: -200,
          duration: 1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".leftPhone", {
          x: -200,
          y: -400,
          delay: 0.1,
          duration: 1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".rightPhone", {
          x: 200,
          y: 400,
          duration: 1,
          delay: 0.1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".rightHand", {
          x: 200,
          y: 400,
          duration: 1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".rightMask", {
          x: 20,
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "sine.inOut",
          delay: 0.3,
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".leftMask", {
          opacity: 0,
          ease: "sine.inOut",
          delay: 0.3,
          duration: 1,
          scrollTrigger: {
            trigger: ".phoneBox",
            start: "top top+=200",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".sec1-box", {
          opacity: 0,
          y: 200,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top bottom",
            end: "+=500",
            scrub: true,
          },
        })

        gsap.to(".sec1-box", {
          className: "sec1-box sec1-box-active",
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
            toggleActions: "play none none reverse",
          },
        })
        gsap.to(".sec1-text-wrapper .title", {
          duration: 1,
          opacity: 1,
          text: "Calling All Go-getters",
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })

        gsap.to(".sec1-text-wrapper .spana.pc", {
          duration: 1,
          opacity: 1,
          delay: 0.25,
          text: "This is your ticket to the Cyber World. ",
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })

        gsap.to(".sec1-text-wrapper .spanb.pc", {
          duration: 1,
          opacity: 1,
          delay: 0.5,
          text: "Set off on this exhilarating quest and push the boundaries of the ordinary. Feel the surge of the",
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })
        gsap.to(".sec1-text-wrapper .spanc.pc", {
          duration: 1,
          opacity: 1,
          delay: 0.75,
          text: "future, ignite your ambition, and let Cyber Power fuel your journey into uncharted territory.",
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })

        gsap.from(".sec1-text-wrapper .info span", {
          duration: 1,
          delimiter: " ",
          delay: 1,
          speed: 0.5,
          text: "",
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })
        gsap.from(".sec1-text-wrapper .info", {
          duration: 0,
          opacity: 0,
          delay: 1,
          scrollTrigger: {
            trigger: ".sec1-box-tirgger",
            start: "top center",
          },
        })
      }
    },

    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  ) // <-- scope for selector text (optional)

  return (
    <div className={`sec1 imgLoad${load}`} ref={container}>
      <div className='sec1Bg'>
        <div className='phoneBox'>
          <div className='leftHand'></div>
          <div className='leftPhone'></div>
          <div className='leftMask'></div>
          <div className='rightHand'></div>
          <div className='rightPhone'></div>
          <div className='rightMask'></div>
          <div className='kvText'>
            <div>
              <div className='sec1Text'></div>
              <div className='textGroup'>
                <div className='text1'>{config.sec1.paramsa}</div>
                <div className='line pc'></div>
                <div>{config.sec1.paramsb}</div>
                <div className='line'></div>
                <div>{config.sec1.paramsc}</div>
              </div>
            </div>
            <div className='sec1Logo'>
              <div className='logoWrapper'>
                <div className='sec1Logoa'>{config.sec1.slogena}</div>
                <div className='sec1Logob'>{config.sec1.slogenb}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sec1Bg2'>
        <div className='sec1-box-tirgger'></div>
        <div className='sec1-box'>
          <div className='sec1-text-wrapper'>
            <div className='title'>{"-_/\\/-/</_\\_\\_/-_>\\_<_"}</div>

            <div className='description'>
              <div className='spana pc'>
                {"-<</_\\><\\_/-/>/\\__-/-></<_<<-\\><>>>--->"}
              </div>
              <div className='spanb pc'>
                {
                  "<--__-<___<>/-/>>/-//</-<--<><>>>/>-_<<_>___\\\\>->\\\\><>/<><->_>-/>-__/<>-<>_<<--_/_-<"
                }
              </div>
              <div className='spanc pc'>
                {
                  "</-\\<_/>_\\/->-->>\\-_<\\-</_><>/>>/_/<->-_\\>>-_\\-\\___---\\<\\>\\<>><<</<<->\\<<_"
                }
              </div>
              <div className=' mb'>This is your ticket to the Cyber World.</div>
              <div className=' mb'>
                Set off on this exhilarating quest and push the
              </div>
              <div className=' mb'>
                boundaries of the ordinary. Feel the surge of the
              </div>
              <div className=' mb'>
                future, ignite your ambition, and let Cyber Power
              </div>
              <div className=' mb'>
                fuel your journey into uncharted territory.
              </div>
            </div>
            <div className='info'>
              <span>{config.sec1.btnText}</span>_
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec1
