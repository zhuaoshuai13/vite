// import { useRef } from "react"
import ColorText from "../components/colorText"
import { ComponentType } from "../type"

import "./index.scss"

const Sec21 = ({
  config,
  gsap,
  useGSAP,
  responsive,
  ScrollTrigger,
  container,
}: ComponentType) => {
  useGSAP(
    () => {
      if (container.current) {
        const tl = gsap.timeline()
        tl.to(".sec21 .colorText", {
          "--gradient-angle": "-200%",
          "--gradient-angle1": "-100%",
          "--gradient-angle2": "0%",
          "--gradient-angle3": "100%",
          "transform": "scale(1)",
        })

        ScrollTrigger.create({
          animation: tl,
          trigger: ".sec21",
          start: `${responsive?.md ? "center bottom" : "center bottom"}`,
          end: `${responsive?.md ? "center center" : "center center"}`,
          invalidateOnRefresh: true,
          scrub: true,
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <section>
      <div className='sec21' id='sec21Id'>
        <ColorText title={config.sec21.title} />
      </div>
    </section>
  )
}

export default Sec21
