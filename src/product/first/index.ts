import { useLayoutEffect, useRef } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap-trial/ScrollSmoother"

const FirstTs = (total: Element) => {
  gsap.registerPlugin(ScrollTrigger, ScrollTrigger)

  const smoother = useRef<ScrollSmoother | null>(null)

  const textHover = (className: string) => {
    const ctx = gsap.context((self) => {
      const wrap = self?.selector?.(className) ?? []
      const title = self?.selector?.(`${className} .title`) ?? []
      const text = self?.selector?.(`${className} .text`) ?? []

      title.forEach((box: string) => {
        gsap.from(box, {
          opacity: 0,
          y: "100px",
          duration: 1,
          scrollTrigger: {
            trigger: wrap[0],
            start: "top 30%",
          },
        })
      })

      text.forEach((box: string) => {
        gsap.from(box, {
          opacity: 0,
          y: "100px",
          delay: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: wrap[0],
            start: "top 30%",
          },
        })
      })
    }, total) // <- Scope!

    return () => ctx.revert()
  }
  const sec1Ani = () => {
    const ctx = gsap.context((self) => {
      const cen = self?.selector?.(".cen") ?? []
      const seccc = self?.selector?.(".secc") ?? []

      cen.forEach((box: string) => {
        gsap.from(box, {
          opacity: 0,
          y: "100px",
          duration: 1,
          scrollTrigger: {
            trigger: seccc[0],
            start: "top 30%",
          },
        })
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }
  const hoverAni = () => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context((self) => {
      const sec3 = self?.selector?.(".sec3") ?? []
      const light = self?.selector?.(".light_wrap") ?? []

      sec3.forEach((box: string) => {
        gsap.to(box, {
          y: "-25%",
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            scrub: true,
          },
        })
      })

      light.forEach((box: string) => {
        gsap.to(box, {
          x: "800px",
          y: "500px",
          scrollTrigger: {
            trigger: box,
            start: "top 70%",
            end: "top 0",
            scrub: 2,
          },
        })
      })
    }, total) // <- Scope!

    return () => ctx.revert() // <- Cleanup!
  }

  const secA = () => {
    const ctx = gsap.context((self) => {
      const AA = self?.selector?.(".secA .a") ?? []

      AA.forEach((box: string) => {
        gsap.from(box, {
          x: "300px",
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 100px",
            scrub: true,
          },
        })
      })
    }, total) // <- Scope!

    smoother.current = ScrollSmoother.create({
      smooth: 2, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    })

    console.log(smoother.current)
    ScrollTrigger.create({
      trigger: ".secA",
      pin: true,
      start: "center center",
      end: "+=800",
      // markers: true,
    })

    return () => ctx.revert() // <- Cleanup!
  }
  useLayoutEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // const ctx = gsap.context((self) => {
    //   const boxes = self?.selector?.('.box') ?? [];
    //   boxes.forEach((box: Element) => {
    //     gsap.to(box, {
    //       x: 150,
    //       scrollTrigger: {
    //         trigger: box,
    //         start: 'bottom bottom',
    //         end: 'top 20%',
    //         scrub: true,
    //       },
    //     });
    //   });
    // }, dom); // <- Scope!
    // return () => ctx.revert(); // <- Cleanup!
  }, [])

  return {
    textHover,
    sec1Ani,
    hoverAni,
    secA,
  }
}

export default FirstTs
