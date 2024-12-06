import { useRef } from "react"

import { CompontentType } from "../type"

import "./index.scss"

const Sec5 = ({
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
          //   翻页
          tl.to(
            "#sec5",
            {
              opacity: 1,
              ease: "none",
              duration: 1.2,
            },
            "a"
          )
          // 翻页时手机也动
          tl.from(
            "#sec5 .phone",
            {
              y: 100,
              opacity: 1,
              ease: "none",
              duration: 1.2,
            },
            "a"
          )

          tl.from(
            "#sec5 .com",
            {
              y: 40,
              opacity: 0,
              stagger: 0.1,
              ease: "none",
              duration: 0.5,
            },
            "m"
          )

          gsap.from(".sec5 .out", {
            scrollTrigger: {
              trigger: "#sec5",
              start: "bottom bottom-=150%",
              toggleActions: "restart none none reverse",
            },
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "none",
            duration: 0.6,
          })

          ScrollTrigger.create({
            trigger: "#sec5",
            start: "top top",
            end: "+=200%",
            animation: tl,
            scrub: true,
            pin: true,
          })
        } else {
          gsap.from(".sec5 .com", {
            opacity: 0,
            y: 80,
            stagger: 0.2,
            scrollTrigger: {
              trigger: "#sec5 .desc",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })
          gsap.from(".sec5 .phone", {
            y: 80,
            scrollTrigger: {
              trigger: "#sec5",
              start: "center bottom",
              end: "bottom center",
              scrub: true,
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec5 .g1 .a", {
            y: 80,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
              trigger: "#sec5 .g1",
              start: "bottom bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec5 .g2", {
            y: 80,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
              trigger: "#sec5 .g2",
              start: "bottom bottom+=80",
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

  return (
    <section id='sec5' ref={ref} className={`imgLoad${load}`}>
      <div className='sec5'>
        <div className='textGroup smallContent'>
          <div
            className='oneTitle com'
            dangerouslySetInnerHTML={{ __html: config.sec5.title }}
          />
          <div
            className='desc com'
            dangerouslySetInnerHTML={{ __html: config.sec5.desc }}
          />
        </div>
        <div className='phone'></div>
        <div className='params bigContent pc'>
          <div className='out pc'>
            <div className='group f1'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f1a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f1b }}
                />
              </div>
            </div>
            <div className='group f2'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f2a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f2b }}
                />
              </div>
            </div>
            <div className='group f3'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f3a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f3b }}
                />
              </div>
            </div>
          </div>
          <div className='out pc'>
            <div className='group f4'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f4a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f4b }}
                />
              </div>
            </div>
            <div className='group f5'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f5a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f5b }}
                />
              </div>
            </div>
            <div className='group f6'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f6a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f6b }}
                />
              </div>
            </div>
          </div>
          <div className='out pc'>
            <div className='group f7'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f7a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f7b }}
                />
              </div>
            </div>
            <div className='group f8'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f8a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f8b }}
                />
              </div>
            </div>
            <div className='group f9'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f9a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f9b }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mb g1'>
          <div className='a'>
            <div className='group f8'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f8a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f8b }}
                />
              </div>
            </div>
            <div className='group f2'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f2a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f2b }}
                />
              </div>
            </div>
            <div className='group f3'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f3a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f3b }}
                />
              </div>
            </div>
          </div>
          <div className='a'>
            <div className='group f4'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f4a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f4b }}
                />
              </div>
            </div>
            <div className='group f5'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f5a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f5b }}
                />
              </div>
            </div>
            <div className='group f9'>
              <div className='left'></div>
              <div className='right'>
                <div
                  className='tops'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f9a }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec5.f9b }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mb g2'>
          <div className='group f7'>
            <div className='left'></div>
            <div className='right'>
              <div
                className='tops'
                dangerouslySetInnerHTML={{ __html: config.sec5.f7a }}
              />
              <div
                className='desc'
                dangerouslySetInnerHTML={{ __html: config.sec5.f7b }}
              />
            </div>
          </div>
          <div className='group f1'>
            <div className='left'></div>
            <div className='right'>
              <div
                className='tops'
                dangerouslySetInnerHTML={{ __html: config.sec5.f1a }}
              />
              <div
                className='desc'
                dangerouslySetInnerHTML={{ __html: config.sec5.f1b }}
              />
            </div>
          </div>
          <div className='group f6'>
            <div className='left'></div>
            <div className='right'>
              <div
                className='tops'
                dangerouslySetInnerHTML={{ __html: config.sec5.f6a }}
              />
              <div
                className='desc'
                dangerouslySetInnerHTML={{ __html: config.sec5.f6b }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec5
