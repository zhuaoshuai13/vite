import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec3 = ({
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
        gsap.from("#sec3 .f1", {
          x: -200,
          opacity: 0,
          scrollTrigger: {
            trigger: "#sec3 .f1",
            start: "center bottom",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from("#sec3 .f1 .img_inner", {
          x: -200,
          y: 200,
          opacity: 0,
          scrollTrigger: {
            trigger: "#sec3 .f1",
            start: "center bottom",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from("#sec3 .f2", {
          x: responsive?.md ? 200 : -200,
          opacity: 0,
          scrollTrigger: {
            trigger: "#sec3 .f2",
            start: "center bottom",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from("#sec3 .f3", {
          x: 200,
          opacity: 0,
          scrollTrigger: {
            trigger: "#sec3 .f3",
            start: "center bottom",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from("#sec3 .f4", {
          x: -200,
          opacity: 0,
          scrollTrigger: {
            trigger: "#sec3 .f4",
            start: "center bottom",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from("#sec3 .com1", {
          x: -200,
          opacity: 0,
          stagger: {
            each: 0.2,
            from: "end",
          },
          scrollTrigger: {
            trigger: "#sec3 .f6",
            start: "center bottom",
            toggleActions: "restart none none reverse",
          },
        })

        if (responsive?.md) {
          gsap.from("#sec3 .com2", {
            x: 200,
            opacity: 0,
            stagger: {
              each: 0.2,
              from: "start",
            },
            scrollTrigger: {
              trigger: "#sec3 .f6",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from("#sec3 .f5.pc", {
            x: 200,
            opacity: 0,
            scrollTrigger: {
              trigger: "#sec3 .f5.pc",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })
        } else {
          gsap.from("#sec3 .f8", {
            x: 200,
            opacity: 0,
            scrollTrigger: {
              trigger: "#sec3 .f8",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from("#sec3 .f5.mb", {
            x: 200,
            opacity: 0,
            scrollTrigger: {
              trigger: "#sec3 .f5.mb",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from("#sec3 .f9", {
            x: 200,
            opacity: 0,
            scrollTrigger: {
              trigger: "#sec3 .f9",
              start: "center bottom",
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
    <section id='sec3' ref={ref} className={`imgLoad${load}`}>
      <div className='sec3 bigContent'>
        <div className='g1'>
          <div className='f1 com'>
            <div
              className='small'
              dangerouslySetInnerHTML={{ __html: config.sec3.f1a }}
            />
            <div
              className='big mt'
              dangerouslySetInnerHTML={{ __html: config.sec3.f1b }}
            />
            <div className='bg'></div>
            <div className='img'>
              <div className='img_inner'></div>
            </div>
          </div>
          <div className='g4'>
            <div className='f2 com'>
              <div
                className='small'
                dangerouslySetInnerHTML={{ __html: config.sec3.f2a }}
              />
              <div className='texta mt pc'>
                <span
                  className='big'
                  dangerouslySetInnerHTML={{ __html: config.sec3.f2b }}
                />
                <span
                  className='small'
                  dangerouslySetInnerHTML={{ __html: config.sec3.f2c }}
                />
              </div>
              <div className='textb pc'>
                <span
                  className='big'
                  dangerouslySetInnerHTML={{ __html: config.sec3.f2d }}
                />
                <span
                  className='small'
                  dangerouslySetInnerHTML={{ __html: config.sec3.f2f }}
                />
              </div>
              <div className='texta mt mb'>
                <span
                  className='big'
                  dangerouslySetInnerHTML={{ __html: config.sec3.f2g }}
                />
              </div>
              <div className='img'></div>
            </div>
            <div className='f3 com'>
              <div
                className='big'
                dangerouslySetInnerHTML={{ __html: config.sec3.f3 }}
              />

              <div className='img'></div>
            </div>
          </div>
        </div>
        <div className='g2'>
          <div className='f4 com'>
            <div
              className='big'
              dangerouslySetInnerHTML={{ __html: config.sec3.f4a }}
            ></div>
            <div
              className='small mt'
              dangerouslySetInnerHTML={{ __html: config.sec3.f4b }}
            ></div>
            <div className='img'></div>
          </div>
          <div className='f5 com pc'>
            <div
              className='big'
              dangerouslySetInnerHTML={{ __html: config.sec3.f5a }}
            />
            <div
              className='small mt'
              dangerouslySetInnerHTML={{ __html: config.sec3.f5b }}
            />
            <div className='img'></div>
          </div>
          <div className='g5 mb'>
            <div className='f8 com com2'>
              <div
                className='small'
                dangerouslySetInnerHTML={{ __html: config.sec3.f8a }}
              />
              <div
                className='big mt'
                dangerouslySetInnerHTML={{ __html: config.sec3.f8b }}
              />
              <div className='img'></div>
            </div>
            <div className='f9 com com2'>
              <div
                className='small'
                dangerouslySetInnerHTML={{ __html: config.sec3.f9a }}
              />
              <div
                className='big mt'
                dangerouslySetInnerHTML={{ __html: config.sec3.f9b }}
              />
              <div className='img'></div>
            </div>
          </div>
        </div>
        <div className='f5 com mb'>
          <div
            className='big'
            dangerouslySetInnerHTML={{ __html: config.sec3.f5a }}
          />
          <div
            className='small mt'
            dangerouslySetInnerHTML={{ __html: config.sec3.f5b }}
          />
          <div className='img'></div>
        </div>
        <div className='g3'>
          <div className='f6 com com1'>
            <div
              className='big'
              dangerouslySetInnerHTML={{ __html: config.sec3.f6a }}
            />
            <div
              className='small mt'
              dangerouslySetInnerHTML={{ __html: config.sec3.f6b }}
            />
            <div className='img'></div>
          </div>
          <div className='f7 com com1'>
            <div
              className='big'
              dangerouslySetInnerHTML={{ __html: config.sec3.f7a }}
            />
            <div
              className='small mt'
              dangerouslySetInnerHTML={{ __html: config.sec3.f7b }}
            />
            <div className='img'></div>
          </div>
          <div className='f8 com com2 pc'>
            <div
              className='small'
              dangerouslySetInnerHTML={{ __html: config.sec3.f8a }}
            />
            <div
              className='big mt'
              dangerouslySetInnerHTML={{ __html: config.sec3.f8b }}
            />
            <div className='img'></div>
          </div>
          <div className='f9 com com2 pc'>
            <div
              className='small'
              dangerouslySetInnerHTML={{ __html: config.sec3.f9a }}
            />
            <div
              className='big mt'
              dangerouslySetInnerHTML={{ __html: config.sec3.f9b }}
            />
            <div className='img'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec3
