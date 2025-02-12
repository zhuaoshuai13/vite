import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec21 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)

  useGSAP(
    () => {
      if (container?.current) {
        if (responsive?.md) {
          const tl2 = gsap.timeline({ paused: true })
          tl2.to(
            ".sec21 .imgGroup .f1",
            {
              x: `-${(45 / window.innerWidth) * 1920}`,
              opacity: 0,
              // zIndex: 0,
            },
            "a"
          )
          tl2.to(
            ".sec21 .linea",
            {
              backgroundColor: "#c6c6c6",
            },
            "a"
          )
          tl2.to(
            ".sec21 .lineb",
            {
              backgroundColor: "#000",
            },
            "a"
          )
          tl2.to(
            ".sec21 .imgGroup .f2",
            {
              x: `-${(45 / window.innerWidth) * 1920}`,
              opacity: 1,
            },
            "a+=.1"
          )
          tl2.to(
            ".sec21 .imgGroup .f2",
            {
              opacity: 1,
              duration: 0.3,
            },
            "b"
          )
          ScrollTrigger.create({
            trigger: ".sec21 .addGroup",
            start: "top top+=54",
            end: "+=120%",
            animation: tl2,
            scrub: true,
            pin: true,
          })
        } else {
          const tl2 = gsap.timeline({ paused: true })
          tl2.to(
            ".sec21 .imgGroup .f1",
            {
              x: `-100%`,
              opacity: 0,
            },
            "a"
          )
          tl2.to(
            ".sec21 .linea",
            {
              backgroundColor: "#c6c6c6",
            },
            "a"
          )
          tl2.to(
            ".sec21 .lineb",
            {
              backgroundColor: "#000",
            },
            "a"
          )
          tl2.from(
            ".sec21 .imgGroup .f2",
            {
              x: `10%`,
              opacity: 0,
            },
            "a+=.1"
          )
          ScrollTrigger.create({
            trigger: ".sec21 .btnGroup",
            start: "bottom bottom",
            end: "+=10%",
            onUpdate: (self: { progress: number }) => {
              if (self.progress > 0.1 && !tl2.isActive()) {
                tl2.play()
              }
            },
          })
        }

        if (responsive?.md) {
          const tl = gsap.timeline()
          tl.from(
            ".sec21 .twoImg",
            {
              x: (287 * window.innerWidth) / 1920,
            },
            "a"
          )

          tl.from(
            ".sec21 .com2",
            {
              opacity: 0,
              x: 60,
              stagger: 0.2,
            },
            "a"
          )

          ScrollTrigger.create({
            trigger: ".sec21 .twoImg",
            start: "center bottom",
            toggleActions: "restart none none reverse",
            animation: tl,
          })
        } else {
          gsap.from(".sec21 .twoImg", {
            y: 50,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".sec21 .twoImg",
              start: "center bottom+=50",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec21 .twodesc", {
            y: 50,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".sec21 .twodesc",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })
        }

        gsap.from(".sec21 .offImg", {
          x: responsive?.md
            ? (305 * window.innerWidth) / 1920
            : (165 * window.innerWidth) / 750,
          ease: "none",
          scrollTrigger: {
            trigger: ".sec21 .groupThree",
            start: responsive?.md ? "center bottom" : "bottom bottom",
            end: "bottom top",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".sec21 .onImg", {
          x: responsive?.md
            ? (-305 * window.innerWidth) / 1920
            : (-165 * window.innerWidth) / 750,

          ease: "none",
          scrollTrigger: {
            trigger: ".sec21 .groupThree",
            start: responsive?.md ? "center bottom" : "bottom bottom",
            end: "bottom top",
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

  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })

  const fa = contextSafe((num: number) => {
    const tl1 = gsap.timeline({ paused: true })
    if (responsive?.md) {
      return
      // tl1.to(
      //   ".sec21 .imgGroup .f1",
      //   {
      //     x: `100%`,
      //     opacity: 1,
      //   },
      //   "a"
      // )
      // tl1.to(
      //   ".sec21 .linea",
      //   {
      //     backgroundColor: "#000",
      //   },
      //   "a"
      // )
      // tl1.to(
      //   ".sec21 .lineb",
      //   {
      //     backgroundColor: "#c6c6c6",
      //   },
      //   "a"
      // )
      // tl1.to(
      //   ".sec21 .imgGroup .f2",
      //   {
      //     x: `${(65 / window.innerWidth) * 1920}`,
      //     opacity: 0.4,
      //   },
      //   "a+=.1"
      // )
    } else {
      tl1.to(
        ".sec21 .imgGroup .f1",
        {
          x: `0`,
          opacity: 1,
        },
        "a"
      )
      tl1.to(
        ".sec21 .linea",
        {
          backgroundColor: "#000",
        },
        "a"
      )
      tl1.to(
        ".sec21 .lineb",
        {
          backgroundColor: "#c6c6c6",
        },
        "a"
      )
      tl1.to(
        ".sec21 .imgGroup .f2",
        {
          x: `10%`,
          opacity: 0,
        },
        "a+=.1"
      )
    }
    const tl2 = gsap.timeline({ paused: true })
    if (responsive?.md) {
      tl2.to(
        ".sec21 .imgGroup .f1",
        {
          x: `-${(65 / window.innerWidth) * 1920}`,
          opacity: 0,
        },
        "a"
      )
      tl2.to(
        ".sec21 .linea",
        {
          backgroundColor: "#c6c6c6",
        },
        "a"
      )
      tl2.to(
        ".sec21 .lineb",
        {
          backgroundColor: "#000",
        },
        "a"
      )
      tl2.to(
        ".sec21 .imgGroup .f2",
        {
          x: `-${(65 / window.innerWidth) * 1920}`,
          opacity: 1,
        },
        "a+=.1"
      )
    } else {
      tl2.to(
        ".sec21 .imgGroup .f1",
        {
          x: `-100%`,
          opacity: 0,
        },
        "a"
      )
      tl2.to(
        ".sec21 .linea",
        {
          backgroundColor: "#c6c6c6",
        },
        "a"
      )
      tl2.to(
        ".sec21 .lineb",
        {
          backgroundColor: "#000",
        },
        "a"
      )
      tl2.to(
        ".sec21 .imgGroup .f2",
        {
          x: `0`,
          opacity: 1,
        },
        "a+=.1"
      )
    }
    if (num) {
      tl2.play()
    } else {
      tl1.play()
    }
  })

  return (
    <section id='sec21' ref={ref} className={`imgLoad${load}`}>
      <div className='sec21 smallContent'>
        <div className='addGroup'>
          <div
            className='oneTitle'
            dangerouslySetInnerHTML={{ __html: config.sec21.title }}
          />
          <div className='imgGroup'>
            <div className='f1'></div>
            <div className='f2'></div>
          </div>
          <div className='btnGroup'>
            <div
              className='subTitle'
              dangerouslySetInnerHTML={{ __html: config.sec21.subTitlea }}
            />
            <div className='lineGroup'>
              <div
                className='line linea'
                onClick={() => {
                  fa(0)
                }}
              ></div>
              <div
                className='line lineb'
                onClick={() => {
                  fa(1)
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className='groupTwo'>
          <div className='twoImg'></div>
          <div className='twodesc'>
            <div
              className='desc com2'
              dangerouslySetInnerHTML={{ __html: config.sec21.infoa }}
            />
          </div>
        </div>
        <div
          className='subTitle subTitleb'
          dangerouslySetInnerHTML={{ __html: config.sec21.subTitleb }}
        />
        <div className='groupThree'>
          <div className='offImg comimg'></div>
          <div className='onImg comimg'></div>
        </div>
        <div className='threeBot'>
          <div
            className='act'
            dangerouslySetInnerHTML={{ __html: config.sec21.off }}
          />
          <div
            className='act_big'
            dangerouslySetInnerHTML={{ __html: config.sec21.hdr }}
          />
          <div
            className='act'
            dangerouslySetInnerHTML={{ __html: config.sec21.on }}
          />
        </div>
      </div>
    </section>
  )
}

export default Sec21
