import { useRef, useEffect } from "react"

import Title from "../components/title"
import "./index.scss"
import { Shrink } from "../components/shrink"

import { ComponentType } from "../type"

const Sec6 = ({
  useGSAP,
  gsap,
  config,
  ScrollTrigger,
  UseObservable,
  responsive,
}: ComponentType) => {
  const container = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLDivElement>(null)
  const load = UseObservable(container)

  useGSAP(
    () => {
      if (container.current) {
        gsap.from(".title", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".title-box",
            start: "top bottom-=100",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".line", {
          opacity: 0,
          y: 60,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".title-box",
            start: "top bottom-=100",
            end: "+=100",
            scrub: 0.5,
          },
        })

        gsap.from(".line-box", {
          opacity: 0,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 8,
          duration: 0.4,
          onComplete: function () {
            gsap.set(".line-box", { opacity: 1, duration: 0.5 }) // 将属性设置回初始状态
          },

          scrollTrigger: {
            trigger: ".title-box",
            start: "top bottom+=100",
            toggleActions: "restart none none reverse",
          },
        })
        if (responsive?.md) {
          gsap.to(".sec6-text", {
            className: "sec6-text title-active",
            scrollTrigger: {
              trigger: ".sec-5title-active",
              start: "top bottom-=150",
              toggleActions: "restart none none reverse",
            },
          })
        } else {
          gsap.to(".sec6-text-a", {
            className: "sec6-text-a title-active",
            scrollTrigger: {
              trigger: ".sec-5title-active",
              start: "top bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.to(".sec6-text-b", {
            className: "sec6-text-b title-active",
            scrollTrigger: {
              trigger: ".sec-5title-active",
              start: "top bottom",
              toggleActions: "restart none none reverse",
            },
          })
        }

        gsap.from(".bigText", {
          x: "-100%",
          opacity: 0,
          // duration: 1,
          scrollTrigger: {
            trigger: ".sec6-content",
            start: "top center",
            end: "top top",
            scrub: true,
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".sec6-info-a .subTitle div", {
          y: 60,
          opacity: 0,
          scrollTrigger: {
            trigger: ".sec6-info",
            start: "top bottom-=180",
            toggleActions: "restart none none reverse",
          },
        })

        gsap.from(".sec6-info-a .info div", {
          y: 60,
          opacity: 0,
          scrollTrigger: {
            trigger: ".sec6-info",
            start: "top bottom-=220",
            toggleActions: "restart none none reverse",
          },
        })

        const tl = gsap.timeline()
        // bigText固定一会儿
        tl.to(".bigText", { className: "bigText bigTexta" }, "z")
        // A出现
        tl.from(".phoneA", { opacity: 0 }, "a")
        tl.to(".bigText", { opacity: 0 }, "a")

        // A文字出现
        tl.from(".phoneAText", { opacity: 0 }, "g")
        tl.from(".phoneAText .f1", { opacity: 0, y: 20 }, "g+=.1")
        tl.from(".phoneAText .f2", { opacity: 0, y: 20 }, "g+=.2")
        tl.from(".phoneAText .f3", { opacity: 0, y: 20 }, "g+=.3")
        tl.from(".phoneAText .f4", { opacity: 0, y: 20 }, "g+=.4")

        // B文字出现
        tl.to(".title-a", { opacity: 0, y: -30 }, "b")
        tl.from(".title-b", { opacity: 0, y: 30 }, "b+=.2")
        tl.to(".sec6-info-a .subTitle", { opacity: 0, y: -30 }, "b")
        tl.to(".sec6-info-a .info", { opacity: 0, y: -30 }, "b+=.2")
        tl.from(".sec6-info-b .subTitle", { opacity: 0, y: 30 }, "b+=.1")
        tl.from(".sec6-info-b .info", { opacity: 0, y: 30 }, "b+=.3")
        // B图出现
        tl.to(".phoneAText", { opacity: 0 }, "m")
        tl.to(".phoneA", { opacity: 0 }, "m")
        tl.from(".phoneB", { opacity: 0 }, "m")

        // tl.to(".title-b", { opacity: 1 }, "k")

        // C文字出现
        tl.to(".title-b", { opacity: 0, y: -30 }, "c")
        tl.from(".title-c", { opacity: 0, y: 30 }, "c+=.2")
        tl.to(".sec6-info-b .subTitle", { opacity: 0, y: -30 }, "c")
        tl.to(".sec6-info-b .info", { opacity: 0, y: -30 }, "c+=.2")
        tl.from(".sec6-info-c .subTitle", { opacity: 0, y: 30 }, "c+=.1")
        tl.from(".sec6-info-c .info", { opacity: 0, y: 30 }, "c+=.3")
        // C图片出现
        tl.to(".phoneB", { opacity: 0 }, "x")
        tl.from(".phoneC", { opacity: 0 }, "x")

        tl.to(".title-c", { opacity: 1 }, "d")

        ScrollTrigger.create({
          trigger: `${responsive?.md ? ".sec6-content" : ".out"}`,
          start: `${
            responsive?.md
              ? "top top+=54"
              : `top top-=${window.innerHeight * 0.1}`
          }`,

          end: "+=3600",
          animation: tl,
          scrub: true,
          pin: true,
        })
      }
    },
    { dependencies: [responsive?.md], scope: container, revertOnUpdate: true }
  )

  useEffect(() => {
    // 真实宽度
    let wid = 0

    // 本来的宽度
    console.log((1628 / 1920) * window.innerWidth)
    const wh = (780 / 1920) * window.innerWidth
    const hh = (780 / 1080) * window.innerHeight
    if (hh < wh) {
      wid = (1628 / 780) * hh
      // 计算真实left
      const left = ((1628 / 1920) * window.innerWidth - wid) / 2
      if (text.current) {
        text.current.style.left = `${Math.floor(left) + 7}px`
      }
    }

    // console.log(nw)
    // console.log(nh)
  }, [])
  return (
    <div className={`sec6 imgLoad${load}`} ref={container}>
      <div className='out'>
        <div className='sec6-wrapper'>
          <div className='sec6-text pc'></div>
          <div className='sec6-text-a mb'></div>
          <div className='sec6-text-b mb'></div>
          <div className='sec-5title-active'></div>
          <div className='sec6-icon'></div>
          <div className='sec6-back'></div>
        </div>
        <div className='sec6-content'>
          <div className='top'>
            <div className='sec6-title-box'>
              <div className='title-a'>
                <Title>
                  <div>{config.sec6.titlea}</div>
                </Title>
              </div>
              <div className='title-b'>
                <Title>
                  <div>{config.sec6.titleb}</div>
                </Title>
              </div>
              <div className='title-c'>
                <Title>
                  <div>{config.sec6.titlec}</div>
                </Title>
              </div>
            </div>
            <div className='sec6-info'>
              <div className='sec6-info-a'>
                <div className='subTitle'>
                  <div>{config.sec6.subtitlea}</div>
                </div>
                <div className='info'>
                  <div>
                    {config.sec6.infoa}
                    <Shrink />
                  </div>
                </div>
              </div>
              <div className='sec6-info-b'>
                <div className='subTitle'>
                  <div>{config.sec6.subtitleb}</div>
                </div>
                <div className='info'>
                  <div>
                    {config.sec6.infob}
                    <Shrink />
                  </div>
                </div>
              </div>
              <div className='sec6-info-c'>
                <div className='subTitle'>
                  <div>{config.sec6.subtitlec}</div>
                </div>
                <div className='info'>
                  <div>
                    {config.sec6.infoc}
                    <Shrink />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='sec6-box'>
              <div className='bigText'></div>
              <div className='phoneA'></div>
              <div className='phoneB'></div>
              <div className='phoneC'></div>
              <div className='phoneOut'></div>
              <div className='box'></div>
              <div className='phoneAText' ref={text}>
                <div className='f1 fcommon'>
                  <div className='imgGroup'>
                    <div className='img'></div>
                    <div className='hours'>{config.sec6.hour}</div>
                  </div>
                  <div className='do'>{config.sec6.game}</div>
                </div>
                <div className='f2 fcommon'>
                  <div className='imgGroup'>
                    <div className='img'></div>
                    <div className='hours'>{config.sec6.hour}</div>
                  </div>
                  <div className='do'>{config.sec6.calling}</div>
                </div>
                <div className='f3 fcommon'>
                  <div className='imgGroup'>
                    <div className='img'></div>
                    <div className='hours'>{config.sec6.hour}</div>
                  </div>
                  <div className='do'>{config.sec6.music}</div>
                </div>
                <div className='f4 fcommon'>
                  <div className='imgGroup'>
                    <div className='img'></div>
                    <div className='hours'>{config.sec6.hour}</div>
                  </div>
                  <div className='do'>{config.sec6.social}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec6
