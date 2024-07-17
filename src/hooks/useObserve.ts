import { useState, useEffect } from "react"

const UseObservable = (ref: any) => {
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null, // 观察整个视口
        rootMargin: "400% 0px", // 当元素进入视口底部 30% 的范围内触发
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

  return isLoaded
}

export default UseObservable
