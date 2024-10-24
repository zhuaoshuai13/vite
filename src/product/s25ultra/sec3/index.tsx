import { useRef, useContext } from "react"
import { ScreenContext } from "../../../provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
// import LazyLoad from "react-lazyload"

import "./index.scss"

const Sec3 = () => {
  const { s25ultraConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)
  const wrap = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const sec3Ani = () => {
    const tl = gsap.timeline().from(".item1 .img_wrap img", {
      x: "-40%",
      y: "-40$",
      scale: 0.6,
      ease: "power2.inOut",
      duration: 1,
    })
    ScrollTrigger.create({
      trigger: ".item1",
      start: `top 75%`,
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }

  useGSAP(
    () => {
      sec3Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec3' ref={wrap}>
      <div className='sec3_wrap'>
        {isPc ? (
          <div className='sec3_items'>
            <div className='sec2_row'>
              <div className='sec2_col'>
                <div className='sec3_item item1'>
                  <div className='text_wrap'>
                    <div>
                      <div className='title'>{config?.sec3?.item1?.title}</div>
                      <div className='desc'>{config?.sec3?.item1?.desc}</div>
                    </div>
                    <div>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec2_p1_icon_pc.webp"}
                        className='icon'
                      />
                      <div className='desc'>{config?.sec3?.item1?.desc2}</div>
                    </div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec2_p1_pc.webp"}
                    />
                  </div>
                </div>
              </div>
              <div className='sec2_col'>
                <div className='sec3_item item2'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item2?.title}</div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec2_p2_pc.webp"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='sec2_row'>
              <div className='sec2_col'>
                <div className='sec3_item item3'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item3?.title}</div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec2_p3_pc.webp"}
                    />
                  </div>
                </div>
              </div>
              <div className='sec2_col'>
                <div className='sec3_item item4'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item4?.title}</div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec2_p4_pc.webp"}
                    />
                  </div>
                </div>
              </div>
              <div className='sec2_col'>
                <div className='sec3_item item5'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item5?.title}</div>
                    <div className='desc'>{config?.sec3?.item5?.desc}</div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec2_p5_pc.webp"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='sec2_row'>
              <div className='sec2_col'>
                <div className='sec2_row'>
                  <div className='sec2_col'>
                    <div className='sec3_item item6'>
                      <div className='text_wrap'>
                        <div className='desc'>{config?.sec3?.item6?.desc}</div>
                      </div>
                      <div className='img_wrap'>
                        <img
                          loading='lazy'
                          src={src + "/images/pc/sec2_p6_pc.webp"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='sec2_col'>
                    <div className='sec3_item item7'>
                      <div className='text_wrap'>
                        <div className='desc'>{config?.sec3?.item7?.desc}</div>
                      </div>
                      <div className='img_wrap'>
                        <img
                          loading='lazy'
                          src={src + "/images/pc/sec2_p7_pc.webp"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sec2_row'>
                  <div className='sec3_item item8'>
                    <div className='text_wrap'>
                      <div className='title'>{config?.sec3?.item8?.title}</div>
                    </div>
                    <div className='img_wrap'></div>
                  </div>
                </div>
              </div>
              <div className='sec2_col'>
                <div className='sec3_item item9'>
                  <div className='text_wrap'>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item9?.title,
                      }}
                    ></div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec2_p9_pc.webp"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='sec3_items'>
            <div className='sec2_row'>
              <div className='sec2_col'>
                <div className='sec3_item item1'>
                  <div className='text_wrap'>
                    <div>
                      <div className='title'>{config?.sec3?.item1?.title}</div>
                      <div className='desc'>{config?.sec3?.item1?.desc}</div>
                    </div>
                    <div>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec2_p1_icon_pc.webp"}
                        className='icon'
                      />
                      <div className='desc'>{config?.sec3?.item1?.desc2}</div>
                    </div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/mb/sec2_p1_mb.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='sec2_row'>
              <div className='sec2_col'>
                <div className='sec3_item item2'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item2Mb?.title}</div>
                    <div className='desc'>{config?.sec3?.item2Mb?.desc}</div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/mb/sec2_p2_mb.png"}
                    />
                  </div>
                </div>
              </div>
              <div className='sec2_col'>
                <div className='sec3_item item4'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item4Mb?.title}</div>
                    <div className='desc'>{config?.sec3?.item4Mb?.desc}</div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/mb/sec2_p4_mb.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='sec2_row'>
              <div className='sec2_col'>
                <div className='sec3_item item3'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item3?.title}</div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/mb/sec2_p3_mb.png"}
                    />
                  </div>
                </div>
              </div>
              <div className='sec2_col'>
                <div className='sec3_item item5'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item5?.title}</div>
                    <div className='desc'>{config?.sec3?.item5?.desc}</div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/mb/sec2_p5_mb.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='sec2_row'>
              <div className='sec2_col'>
                <div className='sec3_item item8'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item8?.title}</div>
                  </div>
                  <div className='img_wrap'></div>
                </div>
              </div>
            </div>
            <div className='sec2_row'>
              <div className='sec2_col'>
                <div className='sec3_item item6'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item6?.desc}</div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec2_p6_pc.webp"}
                    />
                  </div>
                </div>
              </div>
              <div className='sec2_col'>
                <div className='sec3_item item7'>
                  <div className='text_wrap'>
                    <div className='title'>{config?.sec3?.item7?.desc}</div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/mb/sec2_p7_mb.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='sec2_row'>
              <div className='sec2_col'>
                <div className='sec3_item item9'>
                  <div className='text_wrap'>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item9?.title,
                      }}
                    ></div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/mb/sec2_p9_mb.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Sec3
