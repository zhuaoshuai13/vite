import { useRef } from "react"
import ColorText from "../components/colorText"
import { ComponentType } from "../type"

import "./index.scss"

const Sec13 = ({
  config,
  gsap,
  useGSAP,
  responsive,
  container,
}: ComponentType) => {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (container.current) {
        gsap.to(".sec13 .colorText", {
          "--gradient-angle": "-200%",
          "--gradient-angle1": "-100%",
          "--gradient-angle2": "0%",
          "--gradient-angle3": "100%",
          "transform": "scale(1)",
          "scrollTrigger": {
            trigger: ".sec13",
            start: `${responsive?.md ? "center bottom" : "center bottom"}`,
            end: `${responsive?.md ? "center center" : "center center"}`,
            scrub: true,
          },
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <section ref={ref}>
      <div className='sec13' id='sec13Id'>
        <ColorText title={config.sec13.title} />
      </div>
    </section>
  )
}

export default Sec13
