import { useRef } from "react"

import { Shrink } from "../components/shrink"
import Title from "../components/title"
import "./index.scss"
import { ComponentType } from "../type"
const SecSlender = ({
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
        gsap.from(".secSlenderTitle", {
          y: 90,
          opacity: 0,
          scrollTrigger: {
            trigger: ".secSlenderText",
            start: "top bottom-=100",
            toggleActions: "restart none none reverse",
          },
        })
        gsap.from(".text", {
          scale: 2,
          y: -60,
          opacity: 0,

          scrollTrigger: {
            trigger: ".hand",
            start: "top bottom-=100",
            end: "+=300",
            scrub: true,
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".hand", {
          x: -100,
          opacity: 0,
          scrollTrigger: {
            trigger: ".hand",
            start: "top bottom-=100",
            scrub: true,
            end: "+=200",
            toggleActions: "restart none none reverse",
          },
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className={`secSlender imgLoad${load}`} ref={container}>
      <div className='wrapper'>
        <div className='top'>
          <div className='secSlenderWrapper'>
            <Title>
              <div>{config.sec12.title}</div>
            </Title>
            <div className='secSlenderText'>
              <div className='secSlenderTitle'>
                {config.sec12.info}
                <Shrink />
              </div>
            </div>
          </div>
        </div>
        <div className='text'></div>
        <div className='phone'></div>
        <div className='hand'>
          <div className='hand'></div>
        </div>
      </div>
    </div>
  )
}

export default SecSlender
