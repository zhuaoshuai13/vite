import { useRef } from "react"
import { computepx } from "../utiles"
import "./index.scss"
import { ComponentType } from "../type"
const SecMode = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const load = UseObservable(container)

  useGSAP(
    () => {
      if (container.current) {
        gsap.to(".open", {
          top: `${computepx(-415)}`,
          scrollTrigger: {
            trigger: ".secModeWrapper",
            start: `${responsive?.md ? "top center-=300" : "top center+=150"}`,
            end: `${responsive?.md ? "top top" : "+=100"}`,
            scrub: 1,
          },
        })

        gsap.to(".down", {
          bottom: `${computepx(-411)}`,
          scrollTrigger: {
            trigger: ".secModeWrapper",
            start: `${responsive?.md ? "top center-=300" : "top center+=150"}`,
            end: `${responsive?.md ? "top top" : "+=100"}`,
            scrub: 1,
          },
        })

        gsap.from(".phone", {
          opacity: 0,
          scrollTrigger: {
            trigger: ".secModeWrapper",
            start: `${responsive?.md ? "top center-=300" : "top center+=150"}`,
            end: `${responsive?.md ? "top top" : "+=100"}`,
            scrub: 1,
          },
        })

        gsap.to(".texta", {
          className: "texta title-active",
          scrollTrigger: {
            trigger: ".text-trigger",
            start: "top bottom",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.to(".textb", {
          className: "textb title-active",
          scrollTrigger: {
            trigger: ".text-trigger",
            start: "top bottom",
            toggleActions: "restart none none reverse",
          },
        })

        const tl = gsap.timeline()

        tl.from(
          ".phone",
          {
            duration: 100,
            transform: "rotate3d(0, 0, 0, 0deg)",
            top: "-400",
            left: "800",
          },
          "a"
        )
        tl.to(".texta-box", { duration: 50, opacity: 0 }, "a")
        tl.to(".textb-box", { duration: 50, opacity: 0 }, "a")
        tl.to(".secModeWrapper", { className: "secModeWrapper active" }, "a")
        tl.to(".logo", { opacity: 0 }, "a")
        tl.to(
          ".titlebox",
          { className: "titlebox titlebox-active", delay: 20 },
          "a"
        )
        tl.from(
          ".line",
          {
            duration: 100,
            clipPath: "inset(0 100% 0 0px)",
          },
          "a"
        )

        tl.to(".secModeWrapper", { opacity: 1, duration: 50 }, "b")

        ScrollTrigger.create({
          trigger: ".secModeWrapper",
          start: `${responsive?.md ? "top top" : "top center"}`,
          end: `${responsive?.md ? "" : "top top"}`,
          animation: tl,
          scrub: true,
          pin: responsive?.md,
          preventOverlaps: responsive?.md,
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <div className={`secMode imgLoad${load}`} ref={container}>
      <div className='secModeWrapper'>
        <div className='titlebox'>
          <div className='title-line'></div>
          <div className='title'>{config.sec14.title}</div>
        </div>
        <div className='open'></div>
        <div className='down'></div>
        <div className='texta-box'>
          <div className='texta'></div>
        </div>
        <div className='textb-box'>
          <div className='textb'></div>
          <div className='text-trigger'></div>
        </div>
        <div className='logo'></div>
        <div className='phone'></div>
        <div className='line'></div>
      </div>
    </div>
  )
}

export default SecMode
