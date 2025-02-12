import { useRef } from "react"
import { CompontentType } from "../type"

import "./index.scss"

const Sec26 = ({
  useGSAP,
  gsap,
  config,
  UseObservable,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)

  useGSAP(
    () => {
      if (container?.current) {
        const scrollTriggerConfig = (
          trigger: string,
          start = "center bottom",
          end = "",
          scrub = false
        ) => ({
          trigger,
          start,
          end,
          scrub,
          toggleActions: "restart none none reverse",
        })

        gsap.utils
          .toArray(
            ".sec26 .android, .sec26 .gpt, .sec26 .dynamic, .sec26 .aod, .sec26 .infrared"
          )
          .forEach((item: string) => {
            gsap.from(item, {
              opacity: 0,
              transform: "scale(.5)",
              scrollTrigger: scrollTriggerConfig(item),
            })
          })

        // 动态图片 p2-p5 的缩放动画
        gsap.utils
          .toArray(
            ".sec26 .dynamicImg .p2, .sec26 .dynamicImg .p3, .sec26 .dynamicImg .p4, .sec26 .dynamicImg .p5"
          )
          .forEach((item: string) => {
            gsap.from(item, {
              opacity: 0,
              transform: "scale(.3)",
              scrollTrigger: scrollTriggerConfig(
                item,
                "bottom bottom-=10%",
                "+=20%",
                true
              ),
            })
          })

        // threeGroup 和 twoGroup 的 stagger 动画
        if (responsive?.md) {
          gsap.from(".sec26 .threeGroup .common", {
            opacity: 0,
            y: 100,
            stagger: 0.2,
            scrollTrigger: scrollTriggerConfig(
              ".sec26 .threeGroup",
              "top bottom-=20%"
            ),
          })
        } else {
          gsap.from("#sec26 .aiCall", {
            opacity: 0,
            transform: "scale(.5)",
            scrollTrigger: {
              trigger: ".sec26 .aiCall",
              start: "center bottom",
              toggleActions: "restart none none reverse",
            },
          })

          gsap.from(".sec26 .mbg", {
            opacity: 0,
            y: 100,
            stagger: 0.2,
            scrollTrigger: scrollTriggerConfig(
              ".sec26 .aiWallpaper",
              "top bottom-=20%"
            ),
          })
        }

        gsap.from(".sec26 .twoGroup .common", {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          scrollTrigger: scrollTriggerConfig(
            ".sec26 .twoGroup",
            "top bottom-=20%"
          ),
        })
      }
    },
    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )

  return (
    <section id='sec26' ref={ref} className={`imgLoad${load}`}>
      <div className='sec26 smallContent'>
        <div className='android comBox'>
          <div
            className='inTitle'
            dangerouslySetInnerHTML={{ __html: config.sec26.android.title }}
          />
          <div
            className='desc'
            dangerouslySetInnerHTML={{ __html: config.sec26.android.desc }}
          />
          <div className='androidImg comimg'></div>
        </div>
        <div className='gpt comBox'>
          <div className='gptImg comimg'></div>
          <div>
            <div
              className='inTitle'
              dangerouslySetInnerHTML={{ __html: config.sec26.gpt.title }}
            />
            <div
              className='desc'
              dangerouslySetInnerHTML={{ __html: config.sec26.gpt.desc }}
            />
          </div>
        </div>
        <div className='threeGroup'>
          <div className='common aiCall comBox'>
            <div className='aiCallImg comimg'></div>

            <div
              className='inTitle'
              dangerouslySetInnerHTML={{ __html: config.sec26.aiCall.title }}
            />
          </div>
          <div className='common aiWallpaper comBox mbg'>
            <div className='aiWallpaperImg comimg'></div>
            <div
              className='inTitle'
              dangerouslySetInnerHTML={{
                __html: config.sec26.aiWallpaper.title,
              }}
            />
          </div>
          <div className='common askAi comBox mbg'>
            <div className='askAiImg comimg'></div>

            <div
              className='inTitle'
              dangerouslySetInnerHTML={{ __html: config.sec26.askAi.title }}
            />
          </div>
        </div>
        <div className='dynamic comBox'>
          <div
            className='inTitle'
            dangerouslySetInnerHTML={{ __html: config.sec26.dynamicBar.title }}
          />
          <div
            className='desc'
            dangerouslySetInnerHTML={{ __html: config.sec26.dynamicBar.desc }}
          />
          <div className='dynamicImg comimg'>
            <div className='p2'></div>
            <div className='p3'></div>
            <div className='p4'></div>
            <div className='p5'></div>
          </div>
        </div>
        <div className='aod comBox'>
          <div
            className='inTitle'
            dangerouslySetInnerHTML={{ __html: config.sec26.aod.title }}
          />
          <div
            className='desc'
            dangerouslySetInnerHTML={{ __html: config.sec26.aod.desc }}
          />

          <div className='aodImg comimg'></div>
        </div>
        <div className='infrared comBox'>
          <div
            className='inTitle'
            dangerouslySetInnerHTML={{ __html: config.sec26.infrared.title }}
          />
          <div
            className='desc'
            dangerouslySetInnerHTML={{ __html: config.sec26.infrared.desc }}
          />

          <div className='infraredImg comimg'></div>
        </div>
        <div className='twoGroup '>
          <div className='nfc common comBox'>
            <div
              className='inTitle'
              dangerouslySetInnerHTML={{ __html: config.sec26.nfc.title }}
            />
            <div
              className='desc'
              dangerouslySetInnerHTML={{ __html: config.sec26.nfc.desc }}
            />
            <div className='nfcImg comimg'></div>
          </div>
          <div className='dts common comBox'>
            <div
              className='inTitle'
              dangerouslySetInnerHTML={{ __html: config.sec26.dts.title }}
            />
            <div
              className='desc'
              dangerouslySetInnerHTML={{ __html: config.sec26.dts.desc }}
            />
            <div className='dtsImg comimg'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec26
