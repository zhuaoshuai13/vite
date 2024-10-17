import { useRef } from "react"
import "./index.scss"

import { ComponentType } from "../type"

const SecTitle = ({ useGSAP, gsap, responsive }: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      gsap.to(".text", {
        className: "text title-active",
        // ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".text",
          start: "top bottom-=250",
          toggleActions: "restart none none reverse",
        },
      })
    },
    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )
  return (
    <div className='pc secTitle' ref={container}>
      <div className='text'></div>
      <div className='icon'></div>
    </div>
  )
}

export default SecTitle
