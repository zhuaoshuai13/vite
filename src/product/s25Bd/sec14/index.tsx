import { useEffect, useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec14 = ({
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
          const tl = gsap.timeline()
          const tl2 = gsap.timeline({ paused: true })

          tl2.to(
            ".sec14 .img1 .light",
            {
              transform: "translate(0%, 250%) rotate(0deg)",
              duration: 1,
            },
            "a"
          )

          tl2.to(
            ".sec14 .img2 .light",
            {
              transform: "translate(-58%, 250%) rotate(0deg)",
              duration: 1,
            },
            "a"
          )
          tl.to(
            "#sec14",
            {
              opacity: 1,
              ease: "none",
              duration: 1,
            },
            "a"
          )
          tl.to(
            ".sec14 .f1 .textb",
            {
              text: config.sec14.f1b,
              duration: 0.3,
            },
            "a+=.3"
          )

          tl.to(
            ".sec14 .f2 .textb",
            {
              text: config.sec14.f2b,
              duration: 0.3,
              scale: 1.2,
              ease: "slow(0.25, 0.9)",
            },
            "a+=.3"
          )

          tl.from(
            ".sec14 .outBox",
            {
              duration: 0.3,
              opacity: 0.4,
              y: 100,
              scale: 0.8,
              ease: "slow(0.25, 0.9)",
            },
            "a+=.3"
          )

          tl.from(
            ".sec14 .com",
            {
              stagger: 0.1,
              opacity: 0,
              y: 40,
            },
            "a+=.7"
          )

          ScrollTrigger.create({
            trigger: "#sec14",
            start: "top top",
            end: "+=180%",
            onUpdate: (self: { progress: number }) => {
              if (self.progress > 0.4 && !tl.isActive()) {
                tl2.play()
              } else if (self.progress <= 0.4 && !tl.isActive()) {
                tl2.reverse()
              }
            },
            animation: tl,
            scrub: true,
            pin: true,
          })
        } else {
          gsap.from(".sec14 .com", {
            opacity: 0,
            y: 100,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sec14 .oneTitle",
              start: "bottom bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.to(".sec14 .img1 .light", {
            transform: "translate(-50%, 600%) rotate(0deg)",
            duration: 1,
            scrollTrigger: {
              trigger: ".sec14",
              start: "bottom bottom+=10%",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.to(".sec14 .img2 .light", {
            transform: "translate(-58%, 600%) rotate(0deg)",
            duration: 1,
            scrollTrigger: {
              trigger: ".sec14",
              start: "bottom bottom+=10%",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.to("#sec14 .mbBox .f1 .textb", {
            text: config.sec14.f1b,
            duration: 1,
            scrollTrigger: {
              trigger: "#sec14 .mbBox",
              start: "bottom bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.to("#sec14 .mbBox .f2 .textb", {
            text: config.sec14.f2b,
            duration: 1,
            scrollTrigger: {
              trigger: "#sec14 .mbBox",
              start: "bottom bottom",
              toggleActions: "restart none none reverse",
            },
          })
        }
      }
    },
    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )

  useEffect(() => {
    if (responsive?.md && window.innerHeight < 950) {
      const el1 = document.querySelector("#sec14 .sec14") as HTMLElement
      const el2 = document.querySelector("#sec14 .sec14 .outBox") as HTMLElement
      if (el1 && el2) {
        el1.style.paddingTop = "0"
        el2.style.marginTop = "3vw"
      }
    }
  }, [responsive?.md])

  return (
    <section id='sec14' ref={ref} className={`imgLoad${load}`}>
      <div className='sec14 '>
        <div className='smallContent'>
          <div
            className='oneTitle com'
            dangerouslySetInnerHTML={{ __html: config.sec14.title }}
          />
          <div
            className='desc com'
            dangerouslySetInnerHTML={{ __html: config.sec14.desc }}
          />
        </div>

        <div className='bigContent pc'>
          <div className='outBox'>
            <div className='f1'>
              <div>
                <span
                  className='texta'
                  dangerouslySetInnerHTML={{ __html: config.sec14.f1a }}
                />
                <span
                  className='textb'
                  //   dangerouslySetInnerHTML={{ __html: config.sec14.f1b }}
                />
              </div>
              <div
                className='textc'
                dangerouslySetInnerHTML={{ __html: config.sec14.f1c }}
              />
            </div>
            <div className='f2'>
              <div>
                <span
                  className='texta'
                  dangerouslySetInnerHTML={{ __html: config.sec14.f2a }}
                />
                <span
                  className='textb'
                  //   dangerouslySetInnerHTML={{ __html: config.sec14.f2b }}
                />
              </div>
              <div
                className='textc'
                dangerouslySetInnerHTML={{ __html: config.sec14.f2c }}
              />
            </div>
          </div>
        </div>

        <div className='img1'>
          <div className='inner'>
            <div className='light'></div>
            <div className='img'></div>
            <div className='imgTop'></div>
          </div>
        </div>
        <div className='img2'>
          <div className='inner'>
            <div className='light'></div>
            <div className='img'></div>
            <div className='imgTop'></div>
          </div>
        </div>
        <div className='img3'></div>
      </div>
      <div className='bigContent mb mbBox'>
        <div className='outBox'>
          <div className='f1'>
            <div>
              <span
                className='texta'
                dangerouslySetInnerHTML={{ __html: config.sec14.f1a }}
              />
              <span
                className='textb'
                // dangerouslySetInnerHTML={{ __html: config.sec14.f1b }}
              />
            </div>
            <div
              className='textc'
              dangerouslySetInnerHTML={{ __html: config.sec14.f1c }}
            />
          </div>
          <div className='f2'>
            <div>
              <span
                className='texta'
                dangerouslySetInnerHTML={{ __html: config.sec14.f2a }}
              />
              <span
                className='textb'
                // dangerouslySetInnerHTML={{ __html: config.sec14.f2b }}
              />
            </div>
            <div
              className='textc'
              dangerouslySetInnerHTML={{ __html: config.sec14.f2c }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec14
