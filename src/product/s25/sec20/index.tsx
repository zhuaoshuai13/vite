import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec20 = ({
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
        if (responsive?.md) {
          gsap.from("#sec20 .common", {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
              trigger: "#sec20 .oneTitle",
              start: "bottom bottom",
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from("#sec20 .common2", {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
              trigger: "#sec20 .rightRmg",
              start: "top bottom",
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from("#sec20 .tips.pc", {
            y: 80,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec20",
              start: "bottom bottom",
              toggleActions: "restart none none reverse",
            },
          })
        } else {
          gsap.from("#sec20 .texta", {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
              trigger: "#sec20 .oneTitle",
              start: "bottom bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from("#sec20 .leftImg", {
            x: 100,
            opacity: 0,
            scrollTrigger: {
              trigger: "#sec20 .leftImg",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from("#sec20 .rightRmg", {
            x: -100,
            opacity: 0,
            scrollTrigger: {
              trigger: "#sec20 .rightRmg",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from("#sec20 .tips.mb", {
            y: 80,
            opacity: 0,
            scrollTrigger: {
              trigger: "#sec20 .tips.mb",
              start: "bottom bottom+=80",
              toggleActions: "restart none none reverse",
            },
          })
        }
      }
    },

    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )

  return (
    <section id='sec20' ref={ref} className={`imgLoad${load}`}>
      <div className='sec20 smallContent'>
        <div
          className='oneTitle common texta'
          dangerouslySetInnerHTML={{ __html: config.sec20.title }}
        />

        <div className='content'>
          <div className='left common'>
            <div className='leftImg'></div>
            <div className='tips com2 pc'>
              <div className='smile common3'>
                <div className='logo'></div>
                <div className='tip'>
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: config.sec20.tipsa }}
                  />
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: config.sec20.tipsb }}
                  />
                </div>
              </div>
              <div className='mic common3'>
                <div className='logo'></div>
                <div className='tip'>
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: config.sec20.tipsc }}
                  />
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: config.sec20.tipsd }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div
              className='desc common2 texta'
              dangerouslySetInnerHTML={{ __html: config.sec20.desc }}
            />
            <div className='tips com2 mb'>
              <div className='smile common3'>
                <div className='logo'></div>
                <div className='tip'>
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: config.sec20.tipsa }}
                  />
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: config.sec20.tipsb }}
                  />
                </div>
              </div>
              <div className='mic common3'>
                <div className='logo'></div>
                <div className='tip'>
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: config.sec20.tipsc }}
                  />
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: config.sec20.tipsd }}
                  />
                </div>
              </div>
            </div>
            <div className='rightRmg common2'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec20
