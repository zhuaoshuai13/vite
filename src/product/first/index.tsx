import { useRef, useEffect } from "react"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import { EffectFade, Pagination, Autoplay } from "swiper/modules"

import UseResponse from "../../hooks/useResponse"

import FirstPcTs from "./pc"

import FirstMobTs from "./mob"

import "./index.scss"

const FirstProduct = () => {
  const { responsive } = UseResponse()
  const total = useRef(null)
  const ca = useRef(null)
  const ca2 = useRef(null)
  const playRef1 = useRef<HTMLVideoElement>(null)
  const playRef2 = useRef<HTMLVideoElement>(null)
  const countUpRef1 = useRef(null)
  const countUpRef2 = useRef(null)
  const countUpRef3 = useRef(null)
  const countUpRef4 = useRef(null)
  const videoRef = useRef(null)
  const btnRefPc = useRef<HTMLDivElement>(null)
  const btnRefMob = useRef<HTMLDivElement>(null)
  const countUpRef11 = useRef(null)
  const countUpRef22 = useRef(null)

  const {
    textHover,
    playPcClick,
    videoClick,
    test1,
    test2,
    test3,
    test4,
    test5,
    ...restFunc
  } = FirstPcTs(
    total,
    ca,
    countUpRef1,
    countUpRef2,
    countUpRef3,
    countUpRef4,
    videoRef,
    ca2,
    playRef1,
    btnRefPc
  )

  const {
    textHover: mobTextHover,
    sec2Ani,
    sec4FirstAni,
    otherAni,
    sec7Ani,
    sec9Ani,
    sec10Ani,
    sec14Ani,
    sec15Ani,
    sec16Ani,
    sec18Ani,
    sec19Ani,
    sec22Ani,
    sec20Ani,
    sec21Ani,
    sec23Ani,
    numAdd,
    sec24Ani,
    sec25Ani,
    playMobClick,
    videoClick2,
  } = FirstMobTs(
    total,
    ca,
    countUpRef3,
    countUpRef4,
    videoRef,
    ca2,
    playRef2,
    btnRefMob,
    countUpRef11,
    countUpRef22
  )

  useEffect(() => {
    if (responsive?.md === undefined) return

    if (responsive?.md) {
      Object.entries(restFunc).forEach(([key, value]) => {
        if (typeof (restFunc as never)[key] === "function") {
          value()
        }
      })
      textHover([
        ".sec5",
        ".sec9",
        ".sec11",
        ".sec12",
        ".sec13",
        ".sec14",
        ".sec15",
        ".sec17",
        ".sec19",
        ".sec20",
        ".sec21",
        ".sec22",
        ".sec23",
        ".sec24",
        ".sec25",
        ".sec26",
        ".sec27",
      ])
    } else {
      sec2Ani()
      sec4FirstAni()
      otherAni()
      sec7Ani()
      sec9Ani()
      sec10Ani()
      sec14Ani()
      sec15Ani()
      sec16Ani()
      sec18Ani()
      sec19Ani()
      sec22Ani()
      sec20Ani()
      sec21Ani()
      sec22Ani()
      sec23Ani()
      numAdd()
      sec24Ani()
      sec25Ani()
      mobTextHover([
        ".sec5",
        ".sec8",
        ".sec9",
        ".sec11",
        ".sec12",
        ".sec13",
        ".sec14",
        ".sec15",
        ".sec17",
        ".sec19",
        ".sec20",
        ".sec21",
        ".sec22",
        ".sec23",
        ".sec24",
        ".sec25",
        ".sec26",
        ".sec27",
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsive?.md])

  return (
    <div ref={total} className='total pova3'>
      <div className='groupTop'>
        <section className='section sec1'>
          <div className='name'></div>
          <div className='product'></div>
          <div className='slogan'></div>
          <div className='title_wrap'>
            <div
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section1.f1,
              }}
            ></div>
            <div className='line'></div>
            <div
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section1.f2,
              }}
            ></div>
            <div className='line'></div>
            <div
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section1.f3,
              }}
            ></div>
            <div className='line'></div>
            <div
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section1.f1,
              }}
            ></div>
          </div>
          <div className='nameGroup'></div>
        </section>
        <section className='section sec2'>
          <div className='group'>
            <div className='out' onClick={test1}>
              <div className='box box1'>
                <div
                  className='text Kfont'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section2.f1,
                  }}
                ></div>
              </div>
            </div>
            <div className='out' onClick={test2}>
              <div className='box box2'>
                <div
                  className='text Kfont'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section2.f2,
                  }}
                ></div>
              </div>
            </div>
            <div className='out' onClick={test3}>
              <div className='box box3'>
                <div
                  className='text Kfont'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section2.f3,
                  }}
                ></div>
              </div>
            </div>
            <div className='out' onClick={test4}>
              <div className='box box4'>
                <div
                  className='text Kfont'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section2.f4,
                  }}
                ></div>
              </div>
            </div>
            <div className='out' onClick={test5}>
              <div className='box box5'>
                <div
                  className='text Kfont'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section2.f5,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className='section sec3'>
        <div className='box'>
          {responsive?.md ? (
            <div className='outer' onClick={videoClick}></div>
          ) : (
            <div className='outer' onClick={videoClick2}></div>
          )}
          <video
            src={(window as any).lan.pov3Video.sec3Pc}
            // src='src/assets/video/v1.mp4'
            className='lazy pc'
            autoPlay={false}
            webkit-playsinline='true'
            preload='auto'
            poster={(window as any).lan.pov3Video.sec3Post}
            loop
            ref={playRef1}
          ></video>
          <video
            src={(window as any).lan.pov3Video.sec3Mob}
            // src='src/assets/video/v1.mp4'
            className='lazy mob'
            poster={(window as any).lan.pov3Video.sec3Post}
            autoPlay={false}
            webkit-playsinline='true'
            preload='auto'
            muted
            loop
            ref={playRef2}
          ></video>
          {responsive?.md ? (
            <div
              className={`play`}
              onClick={playPcClick}
              key={1}
              ref={btnRefPc}
            ></div>
          ) : (
            <div
              className={`play`}
              key={2}
              onClick={playMobClick}
              ref={btnRefMob}
            ></div>
          )}
        </div>
      </section>

      <section className='section sec4 sec4First' id='sec4ID'>
        <div className='bg'></div>
        <div className='bgT Kfont'>
          <div>{(window as any).lan.section4.f1}</div>
          <div>{(window as any).lan.section4.f2}</div>
          <div>{(window as any).lan.section4.f3}</div>
          <div>{(window as any).lan.section4.f4}</div>
        </div>
        <div className='lightT Kfont'>
          <div>{(window as any).lan.section4.f1}</div>
          <div>{(window as any).lan.section4.f2}</div>
          <div>{(window as any).lan.section4.f3}</div>
          <div>{(window as any).lan.section4.f4}</div>
        </div>
        <div className='color_title Kfont'>
          <div>{(window as any).lan.section4.f1}</div>
          <div>{(window as any).lan.section4.f2}</div>
          <div>{(window as any).lan.section4.f3}</div>
          <div>{(window as any).lan.section4.f4}</div>
        </div>
        <div className='roboat'></div>
      </section>

      <section className='section sec5'>
        <div
          className='title Kfont textAni'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section5.title,
          }}
        ></div>
        <div
          className='slogan Hfont textAni'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section5.slogan,
          }}
        ></div>
        <div
          className='desc Hfont textAni'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section5.desc,
          }}
        ></div>
        <div className='phoneBox Kfont'>
          <div className='left'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section5.text,
              }}
            ></div>
          </div>
          <div className='phone'></div>
          {/* <div className='right'>
            <div className='phonside'></div>
          </div> */}
        </div>
      </section>

      <section className='section sec6'>
        <div className='phoneBox'>
          <div className='f1 com'>
            <div
              className='name Kfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section6.f1,
              }}
            ></div>
            <div className='phone'></div>
          </div>
          <div className='f2 com'>
            <div
              className='name Kfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section6.f2,
              }}
            ></div>
            <div className='phone'></div>
          </div>
          <div className='f3 com'>
            <div
              className='name Kfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section6.f3,
              }}
            ></div>
            <div className='phone'></div>
          </div>
        </div>
      </section>
      <section className='section sec4 sec7' id='sec7ID'>
        <div className='bg'></div>
        <div className='bgT Kfont'>
          <div>{(window as any).lan.section7.f1}</div>{" "}
          <div>{(window as any).lan.section7.f2}</div>
          <div>{(window as any).lan.section7.f3} </div>
          <div>{(window as any).lan.section7.f4}</div>
        </div>
        <div className='lightT Kfont'>
          <div>{(window as any).lan.section7.f1}</div>{" "}
          <div>{(window as any).lan.section7.f2}</div>
          <div>{(window as any).lan.section7.f3} </div>
          <div>{(window as any).lan.section7.f4}</div>
        </div>
        <div className='color_title Kfont'>
          <div>{(window as any).lan.section7.f1}</div>{" "}
          <div>{(window as any).lan.section7.f2}</div>
          <div>{(window as any).lan.section7.f3} </div>
          <div>{(window as any).lan.section7.f4}</div>
        </div>
        <div className='roboat'></div>
      </section>

      <section className='section sec8'>
        <div className='bg'></div>
        <div className='pc'>
          <div className='box box2'>
            <div className='right'>
              <div
                className='title textAni Kfont'
                dangerouslySetInnerHTML={{
                  __html: (window as any).lan.section8.titlea,
                }}
              ></div>
              <div className='img textAni Hfont'></div>
              <div
                className='desc textAni Hfont'
                dangerouslySetInnerHTML={{
                  __html: (window as any).lan.section8.desca,
                }}
              ></div>
              <div className='params textAni'>
                <div className='param Hfont'>
                  <div
                    className='big'
                    dangerouslySetInnerHTML={{
                      __html: (window as any).lan.section8.pa,
                    }}
                  ></div>
                  <div
                    className='small'
                    dangerouslySetInnerHTML={{
                      __html: (window as any).lan.section8.pat,
                    }}
                  ></div>
                </div>
                <div className='param'>
                  <div
                    className='big'
                    dangerouslySetInnerHTML={{
                      __html: (window as any).lan.section8.pb,
                    }}
                  ></div>
                  <div
                    className='small'
                    dangerouslySetInnerHTML={{
                      __html: (window as any).lan.section8.pbt,
                    }}
                  ></div>
                </div>
                <div className='param'>
                  <div
                    className='big'
                    dangerouslySetInnerHTML={{
                      __html: (window as any).lan.section8.pc,
                    }}
                  ></div>
                  <div
                    className='small'
                    dangerouslySetInnerHTML={{
                      __html: (window as any).lan.section8.pct,
                    }}
                  ></div>
                </div>
                <div className='param'>
                  <div
                    className='big'
                    dangerouslySetInnerHTML={{
                      __html: (window as any).lan.section8.pd,
                    }}
                  ></div>
                  <div
                    className='small'
                    dangerouslySetInnerHTML={{
                      __html: (window as any).lan.section8.pdt,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className='box box1'>
            <div className='right'>
              <div
                className='title textAni Kfont'
                dangerouslySetInnerHTML={{
                  __html: (window as any).lan.section8.titleb,
                }}
              ></div>
              <div className='f1'></div>
              <div
                className='sub'
                dangerouslySetInnerHTML={{
                  __html: (window as any).lan.section8.sub,
                }}
              ></div>
              <div className='f2'></div>
              <div
                className='desc textAni Hfont'
                dangerouslySetInnerHTML={{
                  __html: (window as any).lan.section8.descb,
                }}
              ></div>
            </div>
          </div>
          <div className='movie'>
            <canvas width='1920' height='1080' ref={ca2}></canvas>
          </div>

          <div className='mask pc'></div>
        </div>
        <Swiper
          // effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          className='mySwipers mob'
          loop
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <div className='box box2'>
              <div className='right'>
                <div
                  className='title textAni Kfont'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section8.titlea,
                  }}
                ></div>
                <div className='img textAni Hfont'></div>
                <div
                  className='desc textAni Hfont'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section8.desca,
                  }}
                ></div>
                <div className='params textAni'>
                  <div className='param Hfont'>
                    <div
                      className='big'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section8.pa,
                      }}
                    ></div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section8.pat,
                      }}
                    ></div>
                  </div>
                  <div className='param'>
                    <div
                      className='big'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section8.pb,
                      }}
                    ></div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section8.pbt,
                      }}
                    ></div>
                  </div>
                  <div className='param'>
                    <div
                      className='big'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section8.pc,
                      }}
                    ></div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section8.pct,
                      }}
                    ></div>
                  </div>
                  <div className='param'>
                    <div
                      className='big'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section8.pd,
                      }}
                    ></div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section8.pdt,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='movie movie2 textAni'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='box box1'>
              <div className='right'>
                <div
                  className='title textAni Kfont'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section8.titleb,
                  }}
                ></div>
                <div className='f1 textAni'></div>
                <div
                  className='sub textAni'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section8.sub,
                  }}
                ></div>
                <div className='f2 textAni'></div>
                <div
                  className='desc textAni Hfont'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section8.descb,
                  }}
                ></div>
              </div>
            </div>
            <div className='movie movie1 textAni'></div>
          </SwiperSlide>
        </Swiper>
        <div className='footer mob'></div>
      </section>

      <section className='section sec9'>
        <div className='box'>
          <div className='left'>
            <div
              className='title textAni Kfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section9.title,
              }}
            ></div>
            <div className='img textAni'></div>
            <div
              className='desc textAni'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section9.desc,
              }}
            ></div>
            <div className='params textAni'>
              <div>
                <div className='img1'></div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section9.pa1,
                  }}
                ></span>
              </div>
              <div>
                <div className='img2'></div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section9.pa2,
                  }}
                ></span>
              </div>
              <div>
                <div className='img3'></div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section9.pa3,
                  }}
                ></span>
              </div>
              <div>
                <div className='img4'></div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section9.pa4,
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='f1'></div>
            <div className='f2'></div>
          </div>
        </div>
      </section>

      <section className='section sec4 sec10' id='sec10ID'>
        <div className='bg'></div>
        <div className='bgT Kfont'>
          <div>{(window as any).lan.section10.f1}</div>{" "}
          <div>{(window as any).lan.section10.f2}</div>
          <div>{(window as any).lan.section10.f3}</div>
          <div>{(window as any).lan.section10.f4}</div>
        </div>
        <div className='lightT Kfont'>
          <div>{(window as any).lan.section10.f1}</div>{" "}
          <div>{(window as any).lan.section10.f2}</div>
          <div>{(window as any).lan.section10.f3}</div>
          <div>{(window as any).lan.section10.f4}</div>
        </div>
        <div className='color_title Kfont'>
          <div>{(window as any).lan.section10.f1}</div>{" "}
          <div>{(window as any).lan.section10.f2}</div>
          <div>{(window as any).lan.section10.f3}</div>
          <div>{(window as any).lan.section10.f4}</div>
        </div>
        <div className='roboat'></div>
      </section>

      <section className='section sec11'>
        <div className='head'></div>
        <div
          className='title textAni Kfont'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section11.title,
          }}
        ></div>
        <div className='box'>
          <div className='left textAni'>
            <div className='f1'></div>
            <div
              className='sub Hfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section11.suba,
              }}
            ></div>
            <div
              className='desc Hfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section11.desca,
              }}
            ></div>
            <div className='f2'></div>
          </div>
          <div className='right textAni'>
            <div className='f1'></div>
            <div
              className='sub Hfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section11.subb,
              }}
            ></div>
            <div
              className='desc Hfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section11.descb,
              }}
            ></div>
            <div className='f2'></div>
          </div>
        </div>
        <div className='videoBox'>
          <video
            src={(window as any).lan.pov3Video.sec11V}
            poster={(window as any).lan.pov3Video.sec11VPost}
            // src='src/assets/video/v1.mp4'
            className='lazy'
            autoPlay
            webkit-playsinline='true'
            preload='auto'
            muted
            loop
          ></video>
        </div>
      </section>

      <section className='section sec12'>
        <div className='bg'></div>
        <div className='box pc'>
          <div className='left'>
            <div
              className='title textAni Kfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section12.title,
              }}
            ></div>
            <div className='group'>
              <div className='sub textAni Hfont'>
                <div
                  className='sub1'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section12.suba,
                  }}
                ></div>
                <div
                  className='sub2'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section12.subb,
                  }}
                ></div>
              </div>
              <div className='desc textAni Hfont'>
                <div
                  className='desc1'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section12.desca,
                  }}
                ></div>
                <div
                  className='desc2'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section12.descb,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='outer'></div>
            <div className='videoBox'>
              <video
                className='lazy'
                src={(window as any).lan.pov3Video.sec12PcV}
                poster={(window as any).lan.pov3Video.sec12PcVPost}
                // src='src/assets/video/v2.mp4'
                autoPlay
                webkit-playsinline='true'
                preload='auto'
                muted
                loop
              ></video>
            </div>
          </div>
        </div>
        <div
          className='title textAni Kfont mob'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section12.title,
          }}
        ></div>
        <Swiper
          // effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          className='mySwiperss mob'
          loop
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <div className='box'>
              <div className='left'>
                <div className='group'>
                  <div className='sub textAni Hfont'>
                    <div
                      className='sub1'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section12.suba,
                      }}
                    ></div>
                  </div>
                  <div className='desc textAni Hfont'>
                    <div
                      className='desc1'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section12.desca,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className='right textAni'>
                <div className='outer'></div>
                <div className='videoBox'>
                  <video
                    className='lazy'
                    src={(window as any).lan.pov3Video.sec12MobV1}
                    poster={(window as any).lan.pov3Video.sec12MobV1Post}
                    // src='src/assets/video/v2.mp4'
                    autoPlay
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='box'>
              <div className='left'>
                {/* <div className='title textAni Kfont'>
                  Large <br className='pc' /> Memory With <br className='pc' />
                  Extended <br className='pc' /> RAM
                </div> */}
                <div className='group'>
                  <div className='sub textAni Hfont'>
                    <div
                      className='sub1'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section12.subb,
                      }}
                    ></div>
                  </div>
                  <div className='desc textAni Hfont'>
                    <div
                      className='desc1'
                      dangerouslySetInnerHTML={{
                        __html: (window as any).lan.section12.descb,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='outer'></div>
                <div className='videoBox'>
                  <video
                    className='lazy'
                    src={(window as any).lan.pov3Video.sec12MobV2}
                    poster={(window as any).lan.pov3Video.sec12MobV2Post}
                    // src='src/assets/video/v2.mp4'
                    autoPlay
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className='footer mob'></div>
      </section>
      <section className='section sec13'>
        <div
          className='title textAni Kfont'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section13.title,
          }}
        ></div>
        <div className='line textAni'></div>
        <div
          className='desc textAni Hfont'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section13.desc,
          }}
        ></div>
        <div className='img textAni'></div>
      </section>
      <section className='section sec14'>
        <div className='bg'></div>
        <div className='box'>
          <div className='left'>
            <div
              className='title textAni Kfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section14.title,
              }}
            ></div>
            <div className='img textAni'></div>
            <div
              className='desc textAni Hfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section14.desc,
              }}
            ></div>
            <div className='logBox textAni'>
              <div className='logo'></div>
              <div className='audo'></div>
            </div>
          </div>
          <div className='right'>
            <video
              src={(window as any).lan.pov3Video.sec14V}
              poster={(window as any).lan.pov3Video.sec14VPost}
              // src='src/assets/video/v5.mp4'
              className='lazy'
              autoPlay
              webkit-playsinline='true'
              preload='auto'
              muted
              loop
            ></video>
          </div>
        </div>
        <div className='footer mob'></div>
      </section>
      <section className='section sec15'>
        <div className='box'>
          <div className='left'>
            <div
              className='title textAni Kfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section15.title,
              }}
            ></div>
            <div className='img textAni'></div>
            <div
              className='desc textAni Hfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section15.desc,
              }}
            ></div>
          </div>
          <div className='right'></div>
        </div>
      </section>

      <section className='section sec4 sec16' id='sec16ID'>
        <div className='bg'></div>
        <div className='bgT Kfont'>
          <div>{(window as any).lan.section16.f1}</div>{" "}
          <div>{(window as any).lan.section16.f2}</div>
          <div>{(window as any).lan.section16.f3}</div>
          <div>{(window as any).lan.section16.f4}</div>
        </div>
        <div className='lightT Kfont'>
          <div>{(window as any).lan.section16.f1}</div>{" "}
          <div>{(window as any).lan.section16.f2}</div>
          <div>{(window as any).lan.section16.f3}</div>
          <div>{(window as any).lan.section16.f4}</div>
        </div>
        <div className='color_title Kfont'>
          <div>{(window as any).lan.section16.f1}</div>{" "}
          <div>{(window as any).lan.section16.f2}</div>
          <div>{(window as any).lan.section16.f3}</div>
          <div>{(window as any).lan.section16.f4}</div>
        </div>
        <div className='roboat'></div>
      </section>
      <section className='section sec17'>
        <div className='bg'></div>
        <div className='group'>
          <div
            className='title textAni Kfont'
            dangerouslySetInnerHTML={{
              __html: (window as any).lan.section17.title,
            }}
          ></div>
          <div className='f1 textAni'></div>
          <div
            className='sub textAni Hfont'
            dangerouslySetInnerHTML={{
              __html: (window as any).lan.section17.desc,
            }}
          ></div>
          <div className='f2 textAni'></div>
        </div>
        <div className='img'></div>
        <div className='phone'></div>
        <div className='bigImg'></div>
      </section>

      <section className='section sec18 mob'>
        <div className='bg'></div>
      </section>
      <section className='section sec19'>
        <div className='box'>
          <div
            className='title Kfont textAni'
            dangerouslySetInnerHTML={{
              __html: (window as any).lan.section19.title,
            }}
          ></div>
          <div className='right'>
            <div className='outer'></div>
            <div className='videoBox'>
              <video
                ref={videoRef}
                src={(window as any).lan.pov3Video.sec19V}
                poster={(window as any).lan.pov3Video.sec19VPost}
                // src='src/assets/video/v4.mp4'
                className='lazy'
                // autoPlay
                webkit-playsinline='true'
                preload='auto'
                muted
                // loop
              ></video>
            </div>
          </div>
        </div>
      </section>
      <div className='footer mob'></div>
      <section className='section sec20'>
        <div
          className='title textAni Kfont'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section20.title,
          }}
        ></div>
        <div className='box textAni'>
          <div className='f1 '></div>
          <div
            className='text Hfont'
            dangerouslySetInnerHTML={{
              __html: (window as any).lan.section20.sub,
            }}
          ></div>
          <div className='f2'></div>
        </div>
        <div
          className='desc textAni Hfont'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section20.desc,
          }}
        ></div>
        <div className='imgBox'>
          <div className='fa'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section20.f1,
              }}
            ></div>
          </div>
          <div className='fb'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section20.f2,
              }}
            ></div>
          </div>
          <div className='fc'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section20.f3,
              }}
            ></div>
          </div>
          <div className='fd'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section20.f4,
              }}
            ></div>
          </div>
        </div>
      </section>
      <section className='section sec21'>
        <div className='bg'></div>
        <div
          className='title textAni Kfont'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section21.title,
          }}
        ></div>
        <div className='img'>
          <div className='img1'></div>
          <div className='img2'></div>
          <div className='img3'></div>
          <div className='img4'></div>
        </div>
      </section>
      <section className='section sec4 sec22' id='sec22ID'>
        <div className='bg'></div>
        <div className='bgT Kfont'>
          <div>{(window as any).lan.section22.f1}</div>{" "}
          <div>{(window as any).lan.section22.f2}</div>{" "}
          <div>{(window as any).lan.section22.f3}</div>
          <div>{(window as any).lan.section22.f4}</div>
        </div>
        <div className='lightT Kfont'>
          <div>{(window as any).lan.section22.f1}</div>{" "}
          <div>{(window as any).lan.section22.f2}</div>{" "}
          <div>{(window as any).lan.section22.f3}</div>
          <div>{(window as any).lan.section22.f4}</div>
        </div>
        <div className='color_title Kfont'>
          <div>{(window as any).lan.section22.f1}</div>{" "}
          <div>{(window as any).lan.section22.f2}</div>{" "}
          <div>{(window as any).lan.section22.f3}</div>
          <div>{(window as any).lan.section22.f4}</div>
        </div>
        <div className='log'></div>
      </section>
      <section className='section sec23'>
        <div className='bg'></div>
        <div
          className='title textAni Kfont'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section23.title,
          }}
        ></div>
        <div className='img textAni'></div>
        <div
          className='desc textAni Hfont'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section23.desc,
          }}
        ></div>
        <div className='phone'>
          <div className='img1'></div>
          <div className='img2'></div>
          <div className='img3'></div>
          <div className='img4'></div>
          <div className='img5'></div>
        </div>
      </section>
      <div className='secPar pc'>
        <div className='params'>
          <div className='left'>
            <div
              className='title Kfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.secPar.titlePc,
              }}
            ></div>
            <div
              className='desc Hfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.secPar.titlePc,
              }}
            ></div>
          </div>
          <div className='right Hfont'>
            <div className='out'>
              <div className='up'></div>
              <div className='com '>
                <div
                  className='bot'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.secPar.num,
                  }}
                ></div>
                <div
                  className='top'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.secPar.desca,
                  }}
                ></div>
              </div>
            </div>
            <div className='out'>
              <div className='up'></div>
              <div className='com'>
                <div className='bot'>
                  <span ref={countUpRef1} />%
                </div>
                <div
                  className='top'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.secPar.descb,
                  }}
                ></div>
              </div>
            </div>
            <div className='out'>
              <div className='up'></div>
              <div className='com'>
                <div className='bot'>
                  <span ref={countUpRef2} />%
                </div>
                <div
                  className='top'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.secPar.descc,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='secPar mob'>
        <div className='tops'>
          <div
            className='title'
            dangerouslySetInnerHTML={{
              __html: (window as any).lan.secPar.titleMob,
            }}
          ></div>
          <div
            className='desc'
            dangerouslySetInnerHTML={{
              __html: (window as any).lan.secPar.sub,
            }}
          ></div>
        </div>
        <div className='bots'>
          <div className='right Hfont'>
            <div className='out'>
              <div className='up'></div>
              <div className='com '>
                <div
                  className='bot'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.secPar.num,
                  }}
                ></div>
                <div
                  className='top'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.secPar.desca,
                  }}
                ></div>
              </div>
            </div>
            <div className='out'>
              <div className='up'></div>
              <div className='com'>
                <div className='bot'>
                  <span ref={countUpRef11} />%
                </div>
                <div
                  className='top'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.secPar.descb,
                  }}
                ></div>
              </div>
            </div>
            <div className='out'>
              <div className='up'></div>
              <div className='com'>
                <div className='bot'>
                  <span ref={countUpRef22} />%
                </div>
                <div
                  className='top'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.secPar.descc,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='section sec24'>
        <div className='box'>
          <div className='left'></div>
          <div className='right'>
            <div
              className='title textAni Kfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section24.title,
              }}
            ></div>
            <div className='f1 textAni'></div>
            <div
              className='sub textAni Hfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section24.sub,
              }}
            ></div>
            <div className='f2 textAni'></div>
            <div
              className='desc textAni Hfont'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section24.desc,
              }}
            ></div>
            <div className='params textAni Hfont'>
              <div className='com'>
                <div className='low'></div>
                <div className='top'>
                  <span ref={countUpRef3} />%
                </div>
                <div
                  className='bot'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section24.texta,
                  }}
                ></div>
              </div>
              <div className='com'>
                <div className='up'></div>
                <div className='top'>
                  <span ref={countUpRef4} />%
                </div>
                <div
                  className='bot'
                  dangerouslySetInnerHTML={{
                    __html: (window as any).lan.section24.textb,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section sec25'>
        <div className='bg'></div>
        <div className='box'>
          <div
            className='title textAni Kfont'
            dangerouslySetInnerHTML={{
              __html: (window as any).lan.section25.title,
            }}
          ></div>
          <div className='f1 textAni'></div>
          <div
            className='sub textAni Hfont'
            dangerouslySetInnerHTML={{
              __html: (window as any).lan.section25.sub,
            }}
          ></div>
          <div className='f2 textAni'></div>
          <div
            className='desc textAni Hfont'
            dangerouslySetInnerHTML={{
              __html: (window as any).lan.section25.desc,
            }}
          ></div>
        </div>
        <div className='movie'>
          <canvas ref={ca} width={1600} height={800}></canvas>
        </div>
        <div className='footer mob'></div>
      </section>
      <div className='footer25 pc'></div>
      <section className='section sec26'>
        <div
          className='title textAni Kfont'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section26.title,
          }}
        ></div>
        <div className='f1 textAni'></div>
        <div
          className='sub Hfont textAni'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section26.sub,
          }}
        ></div>
        <div className='f2 textAni'></div>
        <div
          className='desc Hfont textAni'
          dangerouslySetInnerHTML={{
            __html: (window as any).lan.section26.desc,
          }}
        ></div>
        <div className='img'>
          <Swiper
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            className='mySwiper'
            loop
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide>
              <div className='fa imgs'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='fb imgs'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='fc imgs'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='fd imgs'></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className='section sec27'>
        <div className='bg'></div>
        <div className='box'>
          <div
            className='title textAni Kfont'
            dangerouslySetInnerHTML={{
              __html: (window as any).lan.section27.title,
            }}
          ></div>
          <div className='f1 textAni'></div>
          <div className='sub textAni Hfont'>
            <a
              href={`${(window as any).lan.section27.href}`}
              target='blank'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section27.sub,
              }}
            ></a>
          </div>
          <div className='f2 textAni'></div>
          <div className='params textAni Hfont'>
            <div
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section27.f1,
              }}
            ></div>
            <div
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section27.f2,
              }}
            ></div>
            <div
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section27.f3,
              }}
            ></div>
            <div
              className='bot'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section27.f4,
              }}
            ></div>
            <div
              className='bot'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section27.f5,
              }}
            ></div>
            <div
              className='bot'
              dangerouslySetInnerHTML={{
                __html: (window as any).lan.section27.f6,
              }}
            ></div>
          </div>
        </div>
        <div className='botImg'></div>
      </section>
    </div>
  )
}

export default FirstProduct
