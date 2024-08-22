// import { useRef } from "react"
import ColorText from "../components/colorText"
import { ComponentType } from "../type"

import "./index.scss"

const Sec4 = ({
  config,
  gsap,
  useGSAP,
  responsive,
  ScrollTrigger,
  container,
}: ComponentType) => {
  console.log(responsive?.md)
  useGSAP(
    () => {
      if (container.current) {
        const tl = gsap.timeline()
        tl.to(".sec4 .colorText", {
          "--gradient-angle": "-200%",
          "--gradient-angle1": "-100%",
          "--gradient-angle2": "0%",
          "--gradient-angle3": "100%",
          "transform": "scale(1)",
        })

        ScrollTrigger.create({
          animation: tl,
          trigger: ".sec4",
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
    <section id='sec4Id'>
      <div className='sec4'>
        <ColorText title={config.sec4.title} />
      </div>
    </section>
  )
}

export default Sec4
