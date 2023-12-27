import { useEffect, useContext } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScreenContext } from "../../../provider"
import "./index.scss"

const Sec2 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const { isPc } = useContext(ScreenContext)
  const { spark20proplusConfig } = window as any

  const sec2Ani = () => {
    const tl = gsap
      .timeline()
      .to(
        ".sec2 .content",
        1,
        {
          scale: 0.93,
          clipPath: "inset(0px round 14px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        },
        "a"
      )
      .to(".sec2 .mask", 1, { opacity: 0.3 }, "a")

    ScrollTrigger.create({
      trigger: ".sec2 .mask",
      start: `bottom 85%`,
      animation: tl,
      scrub: 0.25,
    })

    if (isPc) {
      const t2 = gsap
        .timeline()
        .from(
          [".sec2 .items>.sec2_col:nth-child(1)"],
          1,
          {
            y: "5vw",
            opacity: 0,
          },
          "a"
        )
        .from(
          [".sec2 .items>.sec2_col:nth-child(2)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 0.25,
          },
          "a"
        )
        .from(
          [".sec2 .items>.sec2_col:nth-child(3)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 0.5,
          },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec2 .items",
        start: `top 85%`,
        animation: t2,
      })
    } else {
      const t2 = gsap
        .timeline()
        .from(
          [".sec2 .items>.sec2_row:nth-child(1)"],
          1,
          {
            y: "5vw",
            opacity: 0,
          },
          "a"
        )
        .from(
          [".sec2 .items>.sec2_row:nth-child(2)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 0.25,
          },
          "a"
        )
        .from(
          [".sec2 .items>.sec2_row:nth-child(3)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 0.5,
          },
          "a"
        )
        .from(
          [".sec2 .items>.sec2_row:nth-child(4)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 0.75,
          },
          "a"
        )
        .from(
          [".sec2 .items>.sec2_row:nth-child(5)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 1,
          },
          "a"
        )
        .from(
          [".sec2 .items>.sec2_row:nth-child(6)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 1.25,
          },
          "a"
        )
        .from(
          [".sec2 .items>.sec2_row:nth-child(7)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 1.25,
          },
          "a"
        )
        .from(
          [".sec2 .items>.sec2_row:nth-child(8)"],
          1,
          {
            y: "5vw",
            opacity: 0,
            delay: 1.25,
          },
          "a"
        )

      ScrollTrigger.create({
        trigger: ".sec2 .items",
        start: `top 85%`,
        animation: t2,
      })
    }
  }

  useEffect(() => {
    sec2Ani()
  })

  return (
    <section className='sec2'>
      <div className='mask'></div>
      <div className='content'>
        {spark20proplusConfig.sec2.type === "type1" ? (
          isPc ? (
            <div className='items'>
              <div className='sec2_col'>
                <div className='sec2_row'>
                  <div className='item item1'>
                    <div className='img_wrapper'>
                      <picture>
                        <source
                          media='(max-width: 1080px)'
                          srcSet={spark20proplusConfig.sec2.item1.bg.img_mb}
                        />
                        <source
                          media='(min-width: 1081px)'
                          srcSet={spark20proplusConfig.sec2.item1.bg.img_pc}
                        />
                        <img
                          src={spark20proplusConfig.sec2.item1.bg.img_pc}
                          loading='lazy'
                        />
                      </picture>
                    </div>
                    <div className='text_wrapper'>
                      <div className='title'>
                        {spark20proplusConfig.sec2.item1.title.map(
                          (item: string, index: number) => {
                            return (
                              <div key={index}>
                                <span
                                  dangerouslySetInnerHTML={{ __html: item }}
                                ></span>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sec2_row'>
                  <div className='item item2'>
                    <div className='img_wrapper'>
                      <picture>
                        <source
                          media='(max-width: 1080px)'
                          srcSet={spark20proplusConfig.sec2.item2.bg.img_mb}
                        />
                        <source
                          media='(min-width: 1081px)'
                          srcSet={spark20proplusConfig.sec2.item2.bg.img_pc}
                        />
                        <img
                          src={spark20proplusConfig.sec2.item2.bg.img_pc}
                          loading='lazy'
                        />
                      </picture>
                    </div>
                    <div className='text_wrapper'>
                      <div
                        className='title'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item2.title,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className='item item3'>
                    <div className='img_wrapper'></div>
                    <div className='text_wrapper'>
                      <div
                        className='title'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item3.title,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='sec2_row'>
                  <div className='item item4'>
                    <div className='img_wrapper'></div>
                    <div className='text_wrapper'>
                      <div
                        className='title'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item4.title,
                        }}
                      ></div>
                      <div
                        className='desc'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item4.desc,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className='item item5'>
                    <div className='img_wrapper'>
                      <picture>
                        <source
                          media='(max-width: 1080px)'
                          srcSet={spark20proplusConfig.sec2.item5.bg.img_mb}
                        />
                        <source
                          media='(min-width: 1081px)'
                          srcSet={spark20proplusConfig.sec2.item5.bg.img_pc}
                        />
                        <img
                          src={spark20proplusConfig.sec2.item5.bg.img_pc}
                          loading='lazy'
                        />
                      </picture>
                    </div>
                    <div className='text_wrapper'>
                      <div className='title'>
                        {spark20proplusConfig.sec2.item5.title.map(
                          (item: string, index: number) => {
                            return (
                              <div key={index}>
                                <span
                                  dangerouslySetInnerHTML={{ __html: item }}
                                ></span>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sec2_col'>
                <div className='sec2_row'>
                  <div className='item item6'>
                    <div className='img_wrapper'>
                      <picture>
                        <source
                          media='(max-width: 1080px)'
                          srcSet={spark20proplusConfig.sec2.item6.bg.img_mb}
                        />
                        <source
                          media='(min-width: 1081px)'
                          srcSet={spark20proplusConfig.sec2.item6.bg.img_pc}
                        />
                        <img
                          src={spark20proplusConfig.sec2.item6.bg.img_pc}
                          loading='lazy'
                        />
                      </picture>
                    </div>
                    <div className='text_wrapper'>
                      <div className='title'>
                        {spark20proplusConfig.sec2.item6.title.map(
                          (item: string, index: number) => {
                            return (
                              <div key={index}>
                                <span
                                  dangerouslySetInnerHTML={{ __html: item }}
                                ></span>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sec2_row'>
                  <div className='sec2_col'>
                    <div className='item item7'>
                      <div className='img_wrapper'>
                        <picture>
                          <source
                            media='(max-width: 1080px)'
                            srcSet={spark20proplusConfig.sec2.item7.bg.img_mb}
                          />
                          <source
                            media='(min-width: 1081px)'
                            srcSet={spark20proplusConfig.sec2.item7.bg.img_pc}
                          />
                          <img
                            src={spark20proplusConfig.sec2.item7.bg.img_pc}
                            loading='lazy'
                          />
                        </picture>
                      </div>
                      <div className='text_wrapper'>
                        <div className='title'>
                          {spark20proplusConfig.sec2.item7.title.map(
                            (item: string, index: number) => {
                              return (
                                <div key={index}>
                                  <span
                                    dangerouslySetInnerHTML={{ __html: item }}
                                  ></span>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sec2_col'>
                    <div className='item item8'>
                      <div className='img_wrapper'>
                        <picture>
                          <source
                            media='(max-width: 1080px)'
                            srcSet={spark20proplusConfig.sec2.item8.bg.img_mb}
                          />
                          <source
                            media='(min-width: 1081px)'
                            srcSet={spark20proplusConfig.sec2.item8.bg.img_pc}
                          />
                          <img
                            src={spark20proplusConfig.sec2.item8.bg.img_pc}
                            loading='lazy'
                          />
                        </picture>
                      </div>
                      <div className='text_wrapper'>
                        <div
                          className='title'
                          dangerouslySetInnerHTML={{
                            __html: spark20proplusConfig.sec2.item8.title,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className='item item9'>
                      <div className='img_wrapper'>
                        <picture>
                          <source
                            media='(max-width: 1080px)'
                            srcSet={spark20proplusConfig.sec2.item9.bg.img_mb}
                          />
                          <source
                            media='(min-width: 1081px)'
                            srcSet={spark20proplusConfig.sec2.item9.bg.img_pc}
                          />
                          <img
                            src={spark20proplusConfig.sec2.item9.bg.img_pc}
                            loading='lazy'
                          />
                        </picture>
                      </div>
                      <div className='text_wrapper'>
                        <div
                          className='title'
                          dangerouslySetInnerHTML={{
                            __html: spark20proplusConfig.sec2.item9.title,
                          }}
                        ></div>
                        <div
                          className='desc'
                          dangerouslySetInnerHTML={{
                            __html: spark20proplusConfig.sec2.item9.desc,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sec2_row'>
                  <div className='item item10'>
                    <div className='img_wrapper'>
                      <picture>
                        <source
                          media='(max-width: 1080px)'
                          srcSet={spark20proplusConfig.sec2.item10.bg.img_mb}
                        />
                        <source
                          media='(min-width: 1081px)'
                          srcSet={spark20proplusConfig.sec2.item10.bg.img_pc}
                        />
                        <img
                          src={spark20proplusConfig.sec2.item10.bg.img_pc}
                          loading='lazy'
                        />
                      </picture>
                    </div>
                    <div className='text_wrapper'>
                      <div className='title'>
                        {spark20proplusConfig.sec2.item10.title.map(
                          (item: string, index: number) => {
                            return (
                              <div key={index}>
                                <span
                                  dangerouslySetInnerHTML={{ __html: item }}
                                ></span>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sec2_col'>
                <div className='sec2_row'>
                  <div className='item item11'>
                    <div className='img_wrapper'>
                      <picture>
                        <source
                          media='(max-width: 1080px)'
                          srcSet={spark20proplusConfig.sec2.item11.bg.img_mb}
                        />
                        <source
                          media='(min-width: 1081px)'
                          srcSet={spark20proplusConfig.sec2.item11.bg.img_pc}
                        />
                        <img
                          src={spark20proplusConfig.sec2.item11.bg.img_pc}
                          loading='lazy'
                        />
                      </picture>
                    </div>
                    <div className='text_wrapper'>
                      <div className='title'>
                        {spark20proplusConfig.sec2.item11.title.map(
                          (item: string, index: number) => {
                            return (
                              <div key={index}>
                                <span
                                  dangerouslySetInnerHTML={{ __html: item }}
                                ></span>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sec2_row'>
                  <div className='item item12'>
                    <div className='img_wrapper'>
                      <picture>
                        <source
                          media='(max-width: 1080px)'
                          srcSet={spark20proplusConfig.sec2.item12.bg.img_mb}
                        />
                        <source
                          media='(min-width: 1081px)'
                          srcSet={spark20proplusConfig.sec2.item12.bg.img_pc}
                        />
                        <img
                          src={spark20proplusConfig.sec2.item12.bg.img_pc}
                          loading='lazy'
                        />
                      </picture>
                    </div>
                    <div className='text_wrapper'>
                      <div className='title'>
                        {spark20proplusConfig.sec2.item12.title.map(
                          (item: string, index: number) => {
                            return (
                              <div key={index}>
                                <span
                                  dangerouslySetInnerHTML={{ __html: item }}
                                ></span>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                    <div className='desc'>
                      <p
                        className='data1'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item12.data1,
                        }}
                      ></p>
                      <p
                        className='data2'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item12.data2,
                        }}
                      ></p>
                    </div>
                    <div
                      className='tips'
                      dangerouslySetInnerHTML={{
                        __html: spark20proplusConfig.sec2.item12.tips,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className='sec2_tips'
                dangerouslySetInnerHTML={{
                  __html: spark20proplusConfig.sec2.tips,
                }}
              ></div>
            </div>
          ) : (
            <div className='items'>
              <div className='sec2_row'>
                <div className='item item6'>
                  <div className='img_wrapper'>
                    <picture>
                      <source
                        media='(max-width: 1080px)'
                        srcSet={spark20proplusConfig.sec2.item6.bg.img_mb}
                      />
                      <source
                        media='(min-width: 1081px)'
                        srcSet={spark20proplusConfig.sec2.item6.bg.img_pc}
                      />
                      <img
                        src={spark20proplusConfig.sec2.item6.bg.img_pc}
                        loading='lazy'
                      />
                    </picture>
                  </div>
                  <div className='text_wrapper'>
                    <div className='title'>
                      {spark20proplusConfig.sec2.item6.title.map(
                        (item: string, index: number) => {
                          return (
                            <div key={index}>
                              <span
                                dangerouslySetInnerHTML={{ __html: item }}
                              ></span>
                            </div>
                          )
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='sec2_row'>
                <div className='sec2_col'>
                  <div className='item item7'>
                    <div className='img_wrapper'>
                      <picture>
                        <source
                          media='(max-width: 1080px)'
                          srcSet={spark20proplusConfig.sec2.item7.bg.img_mb}
                        />
                        <source
                          media='(min-width: 1081px)'
                          srcSet={spark20proplusConfig.sec2.item7.bg.img_pc}
                        />
                        <img
                          src={spark20proplusConfig.sec2.item7.bg.img_pc}
                          loading='lazy'
                        />
                      </picture>
                    </div>
                    <div className='text_wrapper'>
                      <div className='title'>
                        {spark20proplusConfig.sec2.item7.title.map(
                          (item: string, index: number) => {
                            return (
                              <div key={index}>
                                <span
                                  dangerouslySetInnerHTML={{ __html: item }}
                                ></span>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sec2_col'>
                  <div className='item item8'>
                    <div className='img_wrapper'>
                      <picture>
                        <source
                          media='(max-width: 1080px)'
                          srcSet={spark20proplusConfig.sec2.item8.bg.img_mb}
                        />
                        <source
                          media='(min-width: 1081px)'
                          srcSet={spark20proplusConfig.sec2.item8.bg.img_pc}
                        />
                        <img
                          src={spark20proplusConfig.sec2.item8.bg.img_pc}
                          loading='lazy'
                        />
                      </picture>
                    </div>
                    <div className='text_wrapper'>
                      <div
                        className='title'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item8.title,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className='item item9'>
                    <div className='img_wrapper'>
                      <picture>
                        <source
                          media='(max-width: 1080px)'
                          srcSet={spark20proplusConfig.sec2.item9.bg.img_mb}
                        />
                        <source
                          media='(min-width: 1081px)'
                          srcSet={spark20proplusConfig.sec2.item9.bg.img_pc}
                        />
                        <img
                          src={spark20proplusConfig.sec2.item9.bg.img_pc}
                          loading='lazy'
                        />
                      </picture>
                    </div>
                    <div className='text_wrapper'>
                      <div
                        className='title'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item9.title,
                        }}
                      ></div>
                      <div
                        className='desc'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item9.desc,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sec2_row'>
                <div className='item item10'>
                  <div className='img_wrapper'>
                    <picture>
                      <source
                        media='(max-width: 1080px)'
                        srcSet={spark20proplusConfig.sec2.item10.bg.img_mb}
                      />
                      <source
                        media='(min-width: 1081px)'
                        srcSet={spark20proplusConfig.sec2.item10.bg.img_pc}
                      />
                      <img
                        src={spark20proplusConfig.sec2.item10.bg.img_pc}
                        loading='lazy'
                      />
                    </picture>
                  </div>
                  <div className='text_wrapper'>
                    <div className='title'>
                      {spark20proplusConfig.sec2.item10.title.map(
                        (item: string, index: number) => {
                          return (
                            <div key={index}>
                              <span
                                dangerouslySetInnerHTML={{ __html: item }}
                              ></span>
                            </div>
                          )
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='sec2_row'>
                <div className='item item11'>
                  <div className='img_wrapper'>
                    <picture>
                      <source
                        media='(max-width: 1080px)'
                        srcSet={spark20proplusConfig.sec2.item11.bg.img_mb}
                      />
                      <source
                        media='(min-width: 1081px)'
                        srcSet={spark20proplusConfig.sec2.item11.bg.img_pc}
                      />
                      <img
                        src={spark20proplusConfig.sec2.item11.bg.img_pc}
                        loading='lazy'
                      />
                    </picture>
                  </div>
                  <div className='text_wrapper'>
                    <div className='title'>
                      {spark20proplusConfig.sec2.item11.title.map(
                        (item: string, index: number) => {
                          return (
                            <div key={index}>
                              <span
                                dangerouslySetInnerHTML={{ __html: item }}
                              ></span>
                            </div>
                          )
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='sec2_row'>
                <div className='item item12'>
                  <div className='img_wrapper'>
                    <picture>
                      <source
                        media='(max-width: 1080px)'
                        srcSet={spark20proplusConfig.sec2.item12.bg.img_mb}
                      />
                      <source
                        media='(min-width: 1081px)'
                        srcSet={spark20proplusConfig.sec2.item12.bg.img_pc}
                      />
                      <img
                        src={spark20proplusConfig.sec2.item12.bg.img_pc}
                        loading='lazy'
                      />
                    </picture>
                  </div>
                  <div className='text_wrapper'>
                    <div className='title'>
                      {spark20proplusConfig.sec2.item12.title_mob.map(
                        (item: string, index: number) => {
                          return (
                            <div key={index}>
                              <span
                                dangerouslySetInnerHTML={{ __html: item }}
                              ></span>
                            </div>
                          )
                        }
                      )}
                    </div>
                    <div className='desc'>
                      <p
                        className='data1'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item12.data1,
                        }}
                      ></p>
                      <p
                        className='data2'
                        dangerouslySetInnerHTML={{
                          __html: spark20proplusConfig.sec2.item12.data2,
                        }}
                      ></p>
                    </div>
                  </div>
                  <div
                    className='tips'
                    dangerouslySetInnerHTML={{
                      __html: spark20proplusConfig.sec2.item12.tips,
                    }}
                  ></div>
                </div>
              </div>
              <div className='sec2_row'>
                <div className='item item1'>
                  <div className='img_wrapper'>
                    <picture>
                      <source
                        media='(max-width: 1080px)'
                        srcSet={spark20proplusConfig.sec2.item1.bg.img_mb}
                      />
                      <source
                        media='(min-width: 1081px)'
                        srcSet={spark20proplusConfig.sec2.item1.bg.img_pc}
                      />
                      <img
                        src={spark20proplusConfig.sec2.item1.bg.img_pc}
                        loading='lazy'
                      />
                    </picture>
                  </div>
                  <div className='text_wrapper'>
                    <div className='title'>
                      {spark20proplusConfig.sec2.item1.title.map(
                        (item: string, index: number) => {
                          return (
                            <div key={index}>
                              <span
                                dangerouslySetInnerHTML={{ __html: item }}
                              ></span>
                            </div>
                          )
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='sec2_row'>
                <div className='item item2'>
                  <div className='img_wrapper'>
                    <picture>
                      <source
                        media='(max-width: 1080px)'
                        srcSet={spark20proplusConfig.sec2.item2.bg.img_mb}
                      />
                      <source
                        media='(min-width: 1081px)'
                        srcSet={spark20proplusConfig.sec2.item2.bg.img_pc}
                      />
                      <img
                        src={spark20proplusConfig.sec2.item2.bg.img_pc}
                        loading='lazy'
                      />
                    </picture>
                  </div>
                  <div className='text_wrapper'>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{
                        __html: spark20proplusConfig.sec2.item2.title,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='item item3'>
                  <div className='img_wrapper'></div>
                  <div className='text_wrapper'>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{
                        __html: spark20proplusConfig.sec2.item3.title,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className='sec2_row'>
                <div className='item item4'>
                  <div className='img_wrapper'></div>
                  <div className='text_wrapper'>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{
                        __html: spark20proplusConfig.sec2.item4.title,
                      }}
                    ></div>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: spark20proplusConfig.sec2.item4.desc,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='item item5'>
                  <div className='img_wrapper'>
                    <picture>
                      <source
                        media='(max-width: 1080px)'
                        srcSet={spark20proplusConfig.sec2.item5.bg.img_mb}
                      />
                      <source
                        media='(min-width: 1081px)'
                        srcSet={spark20proplusConfig.sec2.item5.bg.img_pc}
                      />
                      <img
                        src={spark20proplusConfig.sec2.item5.bg.img_pc}
                        loading='lazy'
                      />
                    </picture>
                  </div>
                  <div className='text_wrapper'>
                    <div className='title'>
                      {spark20proplusConfig.sec2.item5.title.map(
                        (item: string, index: number) => {
                          return (
                            <div key={index}>
                              <span
                                dangerouslySetInnerHTML={{ __html: item }}
                              ></span>
                            </div>
                          )
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='sec2_tips'
                dangerouslySetInnerHTML={{
                  __html: spark20proplusConfig.sec2.tips,
                }}
              ></div>
            </div>
          )
        ) : (
          <picture>
            <source
              media='(max-width: 1080px)'
              srcSet={spark20proplusConfig.sec2.type2.imgMb}
            />
            <source
              media='(min-width: 1081px)'
              srcSet={spark20proplusConfig.sec2.type2.imgPc}
            />
            <img
              src={spark20proplusConfig.sec2.type2.imgPc}
              className='type2_img'
            />
          </picture>
        )}
      </div>
    </section>
  )
}

export default Sec2
