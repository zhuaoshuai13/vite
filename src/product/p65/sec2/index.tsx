import { useRef } from "react"

import { ComponentType } from "../type"

import "./index.scss"
const Sec2 = ({
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
        let elements
        if (responsive?.md) {
          elements = [
            {
              selector: ".faWrapper",
              ani: {
                x: -100,
                opacity: 0,
              },
              trigger: ".faWrapper",
              startOffset: 300,
            },
            {
              selector: ".fbWrapper",
              ani: {
                x: 100,
                opacity: 0,
              },
              trigger: ".faWrapper",
              startOffset: 300,
            },
            {
              selector: ".fcWrapper",
              ani: {
                x: -100,
                opacity: 0,
              },
              trigger: ".fcWrapper",
              startOffset: 100,
            },
            {
              selector: ".fdWrapper",
              ani: {
                x: 0,
                opacity: 0,
              },
              trigger: ".fcWrapper",
              startOffset: 100,
            },
            {
              selector: ".feWrapper",
              ani: {
                x: 100,
                opacity: 0,
              },
              trigger: ".fcWrapper",
              startOffset: 100,
            },
            {
              selector: ".ffWrapper",
              ani: {
                x: -100,
                opacity: 0,
              },
              trigger: ".ffWrapper",
              startOffset: 100,
            },
            {
              selector: ".fgWrapper",
              ani: {
                x: 100,
                opacity: 0,
              },
              trigger: ".fgWrapper",
              startOffset: 100,
            },
          ]
        } else {
          elements = [
            {
              selector: ".faWrapper",
              ani: {
                y: 100,
                opacity: 0,
                transform: "scale(0.8)",
              },
              trigger: ".faWrapper",
              startOffset: 100,
            },
            {
              selector: ".fbWrapper",
              ani: {
                y: 100,
                opacity: 0,
                transform: "scale(0.8)",
              },
              trigger: ".fbWrapper",
              startOffset: -50,
            },
            {
              selector: ".fcWrapper",
              ani: {
                x: -100,
                opacity: 0,
                transform: "scale(0.8)",
              },
              trigger: ".fcWrapper",
              startOffset: 100,
            },
            {
              selector: ".feWrapper",
              ani: {
                x: 100,
                opacity: 0,
                transform: "scale(0.8)",
              },
              trigger: ".feWrapper",
              startOffset: 100,
            },
            {
              selector: ".fdWrapper",
              ani: {
                x: 100,
                opacity: 0,
                transform: "scale(0.8)",
              },
              trigger: ".fdWrapper",
              startOffset: 100,
            },

            {
              selector: ".ffWrapper",
              ani: {
                x: -100,
                opacity: 0,
                transform: "scale(0.8)",
              },
              trigger: ".ffWrapper",
              startOffset: 100,
            },

            {
              selector: ".fgWrapper",
              ani: {
                y: 100,
                opacity: 0,
                transform: "scale(0.8)",
              },
              trigger: ".fgWrapper",
              startOffset: -50,
            },
          ]
        }

        elements?.forEach(({ selector, ani, trigger, startOffset }) => {
          gsap.from(selector, {
            ...ani,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: trigger,
              start: `top bottom-=${startOffset}`,
              toggleActions: "restart none none reverse",
            },
          })
        })

        return
        gsap.from(".faWrapper", {
          x: -100,
          opacity: 0,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".faWrapper",
            start: "top bottom-=300",
            toggleActions: "restart none none reverse",
            onRefresh: () => {
              console.log("bb")
            },
          },
        })

        gsap.from(".fbWrapper", {
          x: 100,
          opacity: 0,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".faWrapper",
            start: "top bottom-=300",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".fcWrapper", {
          x: -100,
          opacity: 0,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".fcWrapper",
            start: "top bottom-=100",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".fdWrapper", {
          opacity: 0,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".fcWrapper",
            start: "top bottom-=100",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".feWrapper", {
          x: 100,
          opacity: 0,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".fcWrapper",
            start: "top bottom-=100",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".ffWrapper", {
          x: -100,
          opacity: 0,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".ffWrapper",
            start: "top bottom-=100",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".fgWrapper", {
          x: 100,
          opacity: 0,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".fgWrapper",
            start: "top bottom-=100",
            toggleActions: "restart none none reverse",
          },
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
    // { scope: container }
  )

  return (
    <div className={`sec2 imgLoad${load}`} ref={container}>
      <div className='sec2Wrapper'>
        <div className='content'>
          <div className='wrapper faWrapper'>
            <div className='box'></div>
            <div className='img'></div>
            <div className='out'></div>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: config.sec2.titlea,
              }}
            />
          </div>
          <div className='wrapper fbWrapper'>
            <div className='box'>
              <div className='img'></div>
            </div>
            <div className='out'></div>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: config.sec2.titleb,
              }}
            />
          </div>
          <div className='wrapper fcWrapper'>
            <div className='box'>
              <div className='img'></div>
            </div>
            <div className='out'></div>
            <div className='text'>
              <div>{config.sec2.titlec1}</div>
              <div
                className='small'
                dangerouslySetInnerHTML={{
                  __html: config.sec2.titlec2,
                }}
              />
            </div>
          </div>
          <div className='wrapper fdWrapper'>
            <div className='box'>
              <div className='img'></div>
            </div>
            <div className='out'></div>
            <div className='text'>
              <div>{config.sec2.titled1} </div>
              <div className='small'>{config.sec2.titled2}</div>
            </div>
          </div>
          <div className='wrapper feWrapper'>
            <div className='box'>
              <div className='img'></div>
            </div>
            <div className='out'></div>
            <div className='text'>
              <div>{config.sec2.titlee1} </div>
              <div className='small'>{config.sec2.titlee2}</div>
            </div>
          </div>
          <div className='wrapper ffWrapper'>
            <div className='box'>
              <div className='img'></div>
            </div>
            <div className='out'></div>
            <div className='text'>
              <div>{config.sec2.titlef1} </div>
              <div className='small'>{config.sec2.titlef2}</div>
            </div>
          </div>
          <div className='wrapper fgWrapper'>
            <div className='box'>
              <div className='img'></div>
            </div>
            <div className='out'></div>
            <div className='text'>
              <div className='small'>{config.sec2.titleg1}</div>
              <div className='f1'>
                {config.sec2.titleg2} <span>{config.sec2.titleg3}</span>
              </div>
              <div>{config.sec2.titleg4}</div>
              <div className='small'>{config.sec2.titleg5}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec2
