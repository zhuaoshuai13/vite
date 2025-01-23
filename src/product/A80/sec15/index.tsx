import { useRef } from "react"
import { ComponentType } from "../type"
import "./index.scss"
const Sec15 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: ComponentType) => {
  const ref = useRef<HTMLDivElement>(null)
  const load = UseObservable(ref)
  useGSAP(
    () => {
      if (container.current) {
        gsap.from(".sec15 .titlea", {
          duration: 1,
          opacity: 0,
          y: 60,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".sec15 .titlea",
            start: `bottom bottom`,
            toggleActions: "restart none none reverse",
          },
        })

        if (responsive?.md) {
          gsap.from(".sec15 .img", {
            duration: 1,
            x: -300,
            y: 300,
            scrollTrigger: {
              trigger: ".sec15",
              start: `top center`,
              end: "top top",
              scrub: true,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec15 .texta", {
            duration: 1,
            x: -100,
            opacity: 1,
            scrollTrigger: {
              trigger: ".sec15 .texta",
              start: `top center`,
              end: "top top+=54",
              scrub: true,
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from(".sec15 .textb", {
            duration: 1,
            x: 300,
            opacity: 1,
            scrollTrigger: {
              trigger: ".sec15 .texta",
              start: `top center`,
              end: "top top+=54",
              scrub: true,
              toggleActions: "restart none none reverse",
            },
          })
          const tl = gsap.timeline()
          tl.to(
            ".sec15 .in",
            {
              duration: 1,
              x: 50,
              opacity: 0,
              immediateRender: true,
            },
            "a"
          )
          tl.to(
            ".sec15 .inc",
            {
              duration: 1,
              y: -50,
              opacity: 0,
              immediateRender: true,
            },
            "a"
          )
          tl.to(
            ".sec15 .inb",
            {
              duration: 1,
              x: -50,
              opacity: 0,
              immediateRender: true,
            },
            "a"
          )

          tl.to(
            ".sec15 .img1",
            {
              opacity: 0,
              immediateRender: true,
            },
            "a+=.6"
          )

          tl.from(
            ".sec15 .img2",
            {
              opacity: 1,
              immediateRender: true,
            },
            "a+=.6"
          )
          tl.from(
            ".sec15 .textc",
            {
              duration: 1,
              x: -100,
              opacity: 0,
            },
            "b"
          )
          tl.from(
            ".sec15 .titleb",
            {
              duration: 1,
              y: 80,
              opacity: 0,
            },
            "b"
          )
          tl.from(
            ".sec15 .textd",
            {
              duration: 1,
              x: 100,
              opacity: 0,
            },
            "b"
          )
          ScrollTrigger.create({
            trigger: ".sec15",
            start: "top top+=54",
            end: "+=150%",
            scrub: true,
            pin: true,
            animation: tl,
          })
        } else {
          gsap.from(".sec15 .img", {
            duration: 1,
            opacity: 0,
            x: -300,
            y: 300,
            scrollTrigger: {
              trigger: ".sec15",
              start: `top center`,
              end: "top top+=60",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec15 .texta", {
            duration: 1,
            x: -300,
            delay: 0.5,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec15",
              start: `top center`,
              end: "top top+=60",
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from(".sec15 .textb", {
            duration: 1,
            x: 300,
            delay: 0.65,
            opacity: 0,
            scrollTrigger: {
              trigger: ".sec15",
              start: `top center`,
              end: "top top+=60",
              toggleActions: "restart none none reverse",
            },
          })

          const tl = gsap.timeline()
          tl.to(
            ".sec15 .in",
            {
              duration: 1,
              x: 100,
              opacity: 0,
              immediateRender: false,
            },
            "a"
          )
          tl.to(
            ".sec15 .inc",
            {
              duration: 1,
              y: -50,
              opacity: 0,
              immediateRender: false,
            },
            "a"
          )
          tl.to(
            ".sec15 .inb",
            {
              duration: 1,
              x: -100,
              opacity: 0,
              immediateRender: true,
            },
            "a"
          )

          tl.to(
            ".sec15 .img1",
            {
              opacity: 0,
              immediateRender: true,
            },
            "a"
          )
          tl.from(
            ".sec15 .textc",
            {
              duration: 1,
              x: -80,
              opacity: 0,
            },
            "b"
          )
          tl.from(
            ".sec15 .titleb",
            {
              duration: 1,
              y: 80,
              opacity: 0,
            },
            "b"
          )
          tl.from(
            ".sec15 .textd",
            {
              duration: 1,
              x: 80,
              opacity: 0,
            },
            "b"
          )
          ScrollTrigger.create({
            trigger: ".sec15",
            start: "top top+=60",
            end: "+=230%",
            scrub: true,
            pin: true,
            animation: tl,
            immediateRender: false,
          })
        }
        return
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )
  return (
    <section ref={ref} className={`imgLoad${load}`}>
      <div className='sec15'>
        <div className='mainContent'>
          <div className='subTitle title titlea'>
            <div
              className='inc'
              dangerouslySetInnerHTML={{ __html: config.sec15.title }}
            ></div>
          </div>
          <div
            className='subTitle title titleb'
            dangerouslySetInnerHTML={{ __html: config.sec15.titleb }}
          ></div>
          <div className='texta'>
            <div className='in'>{config.sec15.eight}</div>
          </div>
          <div className='textb'>
            <div className='inb'>{config.sec15.mm}</div>
          </div>
          <div className='textc'>{config.sec15.ip}</div>
          <div className='textd'>
            <div>{config.sec15.num}</div>
          </div>
          <div className='img'>
            <div className='img1'></div>
            <div className='img2'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sec15
