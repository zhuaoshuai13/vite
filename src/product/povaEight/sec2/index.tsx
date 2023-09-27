import { useRef } from "react"

import UseObservable from "../../../hooks/useObserve"

import "./index.scss"

const Sec2 = () => {
  const ref = useRef<HTMLDivElement>(null)
  const IntersectionObserver = UseObservable(ref)

  return (
    <section
      className={`pop8 sec2 ${IntersectionObserver}`}
      ref={ref}
    ></section>
  )
}

export default Sec2
