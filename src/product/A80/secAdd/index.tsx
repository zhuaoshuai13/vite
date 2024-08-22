// import { useRef } from "react"
import ColorText from "../components/colorText"
import { ComponentType } from "../type"

import "./index.scss"

const SecAdd = ({
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
        tl.to(".secAdd .colorText", {
          "--gradient-angle": "-200%",
          "--gradient-angle1": "-100%",
          "--gradient-angle2": "0%",
          "--gradient-angle3": "100%",
          "transform": "scale(1)",
        })

        ScrollTrigger.create({
          animation: tl,
          trigger: ".secAdd",
          start: `${responsive?.md ? "center bottom" : "center bottom"}`,
          end: `${responsive?.md ? "center center" : "center center"}`,
          // end: "top top",
          invalidateOnRefresh: true,
          scrub: true,
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <section>
      <div className='secAdd' id='secAddId'>
        <ColorText title={config.sec8.title} />
      </div>
    </section>
  )
}

export default SecAdd
