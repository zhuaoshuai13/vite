import { useState, useEffect } from "react"

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { scrollPosition }
}

export const useScrollView = (sectionIds: string[]) => {
  const [inViewIdList, setInViewIdList] = useState<number[]>([0])
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // 当目标元素30%进入视口时触发回调
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id
        if (entry.isIntersecting) {
          setInViewIdList((prev) => [
            ...new Set([...prev, Number(sectionId.split("_")[2])]),
          ])
          // const navItemId = `nav-item-${sectionId.split('_')[2]}`;
          // document.querySelectorAll('.nav-item').forEach(item => {
          //   item.classList.remove('active');
          // });
          // document.getElementById(navItemId)?.classList.add('active');
        } else {
          setInViewIdList((prev) =>
            prev.filter((id) => id !== Number(sectionId.split("_")[2]))
          )
        }
      })
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return { inViewIdList }
}
