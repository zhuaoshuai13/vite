import { useState, useEffect, useRef } from "react"
const Sec3 = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isLoaded, setLoaded] = useState(false)
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(
  //       (entry) => {
  //         if (entry.isIntersecting) {
  //           setLoaded(true)
  //           observer.unobserve(entry.target)
  //         }
  //       },
  //       {
  //         root: document.body,
  //       }
  //     )
  //   })
  //   if (ref.current) {
  //     observer.observe(ref.current)
  //   }
  // }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Intersection Ratio:", entry.intersectionRatio)
          if (entry.isIntersecting) {
            setLoaded(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null, // 观察整个视口
        rootMargin: "50% 0px", // 当元素进入视口底部 30% 的范围内触发
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div className={`sec3 ${isLoaded}`} ref={ref}>
      <div className='f3 f'></div>
    </div>
  )
}

export default Sec3
