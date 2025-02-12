import { useRef, useEffect, useState } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec22 = ({
  useGSAP,
  gsap,
  config,
  UseObservable,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)
  const tiem = useRef(-1)

  useGSAP(
    () => {
      if (container?.current) {
        gsap.from("#sec22 .common", {
          y: 100,
          opacity: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#sec22 .oneTitle",
            start: "bottom bottom",
            toggleActions: "restart none none reverse",
          },
        })
      }
    },
    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )

  const [index, setIndex] = useState(1)

  useEffect(() => {
    tiem.current = setTimeout(() => {
      if (index === 1) {
        setIndex(2)
      }
      if (index === 2) {
        setIndex(3)
      }
      if (index === 3) {
        setIndex(1)
      }
    }, 3000)
  }, [index])

  return (
    <section id='sec22' ref={ref} className={`imgLoad${load}`}>
      <div className='sec22'>
        <div
          className='oneTitle common'
          dangerouslySetInnerHTML={{ __html: config.sec22.title }}
        />
        <div
          className='desc common'
          dangerouslySetInnerHTML={{ __html: config.sec22.desc }}
        />
        <div className='imgGroup'>
          <div className={`f1 ${index === 1 ? "active" : ""}`}></div>
          <div className={`f2 ${index === 2 ? "active" : ""}`}></div>
          <div className={`f3 ${index === 3 ? "active" : ""}`}></div>
        </div>
        <div className='textGroup'>
          <div
            className={`f1t ${index === 1 ? "active" : ""}`}
            dangerouslySetInnerHTML={{ __html: config.sec22.f1 }}
            onClick={() => {
              if (index !== 1) {
                clearTimeout(tiem.current)
                setIndex(1)
              }
            }}
          />
          <div
            className={`f2t ${index === 2 ? "active" : ""}`}
            dangerouslySetInnerHTML={{ __html: config.sec22.f2 }}
            onClick={() => {
              if (index !== 2) {
                clearTimeout(tiem.current)
                setIndex(2)
              }
            }}
          />
          <div
            className={`f3t ${index === 3 ? "active" : ""}`}
            dangerouslySetInnerHTML={{ __html: config.sec22.f3 }}
            onClick={() => {
              if (index !== 3) {
                clearTimeout(tiem.current)
                setIndex(3)
              }
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Sec22
