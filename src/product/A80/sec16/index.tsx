import ColorText from "../components/colorText"
import { ComponentType } from "../type"

import "./index.scss"

const Sec16 = ({
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
        tl.to(".sec16 .colorText", {
          "--gradient-angle": "-200%",
          "--gradient-angle1": "-100%",
          "--gradient-angle2": "0%",
          "--gradient-angle3": "100%",
          "transform": "scale(1)",
        })

        ScrollTrigger.create({
          animation: tl,
          trigger: ".sec16",
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
      <div className='sec16' id='sec16Id'>
        <ColorText title={config.sec16.title} />
      </div>
    </section>
  )
}

export default Sec16
