/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect, useRef } from "react"
import { Controller } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import { EffectFade, Pagination } from "swiper/modules"

import UseResponse from "../../hooks/useResponse"
import Pc from "./pc"

import "./index.scss"

const Product = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global = window as any
  const { responsive } = UseResponse()
  const sec2VideoRef = useRef<HTMLVideoElement>(null)

  const total = useRef<HTMLDivElement>(null)
  const can1 = useRef<HTMLCanvasElement>(null)
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [isPlay, setIsPlay] = useState(false)
  const countUpRef1 = useRef(null)
  const countUpRef2 = useRef(null)
  const countUpRef3 = useRef(null)
  const countUpRef4 = useRef(null)
  const countUpRef5 = useRef(null)
  const countUpRef6 = useRef(null)

  const next = () => {
    if (firstSwiper) {
      // @ts-ignore
      firstSwiper.slideNext()
    }
  }

  const prev = () => {
    if (firstSwiper) {
      // @ts-ignore
      firstSwiper.slidePrev()
    }
  }

  const { open, setOpen, ...restFunc } = Pc(
    total,
    can1,
    countUpRef1,
    countUpRef2,
    countUpRef3,
    countUpRef4,
    countUpRef5
  )
  // 监听页面宽度

  useEffect(() => {
    if (responsive?.md == undefined) return
    Object.entries(restFunc).forEach(([key, value]) => {
      if (typeof (restFunc as never)[key] === "function") {
        value()
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsive?.md])

  return (
    <div className='pova5Pro' ref={total}>
      <div className='sec1'>
        <div className='slogen'></div>
        <div className='phone'></div>
        <div className='params'>
          <div
            className='param'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec1.p1,
            }}
          ></div>
          <div className='line'></div>
          <div
            className='param'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec1.p2,
            }}
          ></div>
          <div className='line'></div>
          <div
            className='param'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec1.p3,
            }}
          ></div>
          <div className='line'></div>
          <div
            className='param'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec1.p4,
            }}
          ></div>
          <div className='add weight'>+</div>
          <div
            className='param'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec1.p5,
            }}
          ></div>
        </div>
      </div>
      <div className='sec2'>
        <div
          className='video'
          onClick={() => {
            sec2VideoRef.current?.pause()
            setIsPlay(false)
          }}
        >
          <video
            src={
              responsive?.md
                ? global.pova5ProConfig.sec2video.hpath
                : global.pova5ProConfig.sec2video.vpath
            }
            poster={
              responsive?.md
                ? global.pova5ProConfig.sec2video.vpost
                : global.pova5ProConfig.sec2video.vpost
            }
            className='videos'
            autoPlay={false}
            ref={sec2VideoRef}
            webkit-playsinline='true'
            preload='auto'
            muted
            loop
          ></video>
          <div
            className={`play ${isPlay ? "true" : "false"}`}
            onClick={(e) => {
              e.stopPropagation()
              sec2VideoRef.current?.play()
              setIsPlay(true)
            }}
          ></div>
        </div>
      </div>
      <div className='sec3'>
        <div className='content'>
          <div className='box aniBox f1'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec3.p1,
              }}
            ></div>
          </div>
          <div className='box aniBox f2'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec3.p2,
              }}
            ></div>
          </div>
          <div className='box aniBox f3'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec3.p3,
              }}
            ></div>
          </div>
          <div className='box aniBox f4'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec3.p4,
              }}
            ></div>
          </div>
          <div className='box aniBox f5'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec3.p5,
              }}
            ></div>
          </div>
          <div className='box f6'></div>
        </div>
      </div>
      <div className='sec4 open'>
        <div className='top'></div>
        <div className='bot'></div>
        <div
          className='content'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec4.title,
          }}
        ></div>
      </div>
      <div className='sec5'>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec5.title,
          }}
        ></div>
        <div className='subgroup'>
          <div className='f1'></div>
          <div
            className='subtitle'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec5.sub,
            }}
          ></div>
          <div className='f2'></div>
        </div>
        <div
          className='desc'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec5.desc,
          }}
        ></div>
        <div className='imgbox'>
          <div className={`light ${open}`}></div>
          <div className={`dark ${open}`}></div>
        </div>
        <div className='switch'>
          <div
            className={`btns ${open}`}
            onClick={() => {
              setOpen((e) => !e)
            }}
          ></div>
          <div className='on text'>on</div>
          <div className='off text'>off</div>
        </div>
        <div className='right'>
          <div className='contnet'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec5.text1,
              }}
            ></div>
            <div className='phone'></div>
          </div>
        </div>
        <div className='left'>
          <div className='contnet'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec5.text2,
              }}
            ></div>
            <div className='phone'></div>
          </div>
        </div>
      </div>
      <div className='sec6'>
        <div className='img'></div>
        <div className='img2'></div>
      </div>
      <div className='sec7 open'>
        <div className='top'></div>
        <div className='bot'></div>
        <div
          className='content'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec7.title,
          }}
        ></div>
      </div>
      <div className='section sec8'>
        <div className='content pc'>
          <div className='box1 box'>
            <div className='left'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec8.titlea,
                }}
              ></div>
              <div className='subgroup'>
                <div className='f1'></div>
                <div
                  className='subtitle weight'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.suba,
                  }}
                ></div>
                <div className='f2'></div>
              </div>
              <div
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec8.desca,
                }}
              ></div>
            </div>
            <div className='right'>
              <div className='param'>
                <div
                  className='big bigtext'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p1a,
                  }}
                ></div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p1b,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='big bigtext'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p2a,
                  }}
                ></div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p2b,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='big bigtext'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p3a,
                  }}
                ></div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p3b,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='big bigtext'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p4a,
                  }}
                ></div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p4b,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className='box2 box'>
            <div className='left'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec8.titleb,
                }}
              ></div>
              <div className='subgroup'>
                <div className='f1'></div>
                <div
                  className='subtitle weight'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.subb,
                  }}
                ></div>
                <div className='f2'></div>
              </div>
              <div
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec8.descb,
                }}
              ></div>
            </div>
          </div>
          <div className='box3 box'>
            <div className='left'>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec8.titlec,
                }}
              ></div>
              <div className='subgroup'>
                <div className='f1'></div>
                <div
                  className='subtitle weight'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.subc,
                  }}
                ></div>
                <div className='f2'></div>
              </div>
              <div
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec8.descc,
                }}
              ></div>
            </div>
            <div className='right'>
              <div className='param'>
                <div
                  className='big bigtext'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p5a,
                  }}
                ></div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p5b,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div
                  className='big bigtext'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p6a,
                  }}
                ></div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec8.p6b,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className='content mob'>
          <Swiper
            // effect={"fade"}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Pagination]}
            className='sec8swiper'
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide>
              <div className='box1 box'>
                <div className='left'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: global.pova5ProConfig.sec8.titlea,
                    }}
                  ></div>
                  <div className='subgroup'>
                    <div className='f1'></div>
                    <div
                      className='subtitle weight'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.suba,
                      }}
                    ></div>
                    <div className='f2'></div>
                  </div>
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{
                      __html: global.pova5ProConfig.sec8.desca,
                    }}
                  ></div>
                </div>
                <div className='right'>
                  <div className='param'>
                    <div
                      className='big bigtext'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p1a,
                      }}
                    ></div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p1b,
                      }}
                    ></div>
                  </div>
                  <div className='param'>
                    <div
                      className='big bigtext'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p2a,
                      }}
                    ></div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p2b,
                      }}
                    ></div>
                  </div>
                  <div className='param'>
                    <div
                      className='big bigtext'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p3a,
                      }}
                    ></div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p3b,
                      }}
                    ></div>
                  </div>
                  <div className='param'>
                    <div
                      className='big bigtext'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p4a,
                      }}
                    ></div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p4b,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='box2 box'>
                <div className='left'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: global.pova5ProConfig.sec8.titleb,
                    }}
                  ></div>
                  <div className='subgroup'>
                    <div className='f1'></div>
                    <div
                      className='subtitle weight'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.subb,
                      }}
                    ></div>
                    <div className='f2'></div>
                  </div>
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{
                      __html: global.pova5ProConfig.sec8.descb,
                    }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='box3 box'>
                <div className='left'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{
                      __html: global.pova5ProConfig.sec8.titlec,
                    }}
                  ></div>
                  <div className='subgroup'>
                    <div className='f1'></div>
                    <div
                      className='subtitle weight'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.subc,
                      }}
                    ></div>
                    <div className='f2'></div>
                  </div>
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{
                      __html: global.pova5ProConfig.sec8.descc,
                    }}
                  ></div>
                </div>
                <div className='right'>
                  <div className='param'>
                    <div
                      className='big bigtext'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p5a,
                      }}
                    ></div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p5b,
                      }}
                    ></div>
                  </div>
                  <div className='param'>
                    <div
                      className='big bigtext'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p6a,
                      }}
                    ></div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec8.p6b,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <canvas width='1920' height='1080' className='pc' ref={can1}></canvas>
      </div>
      <div className='section sec9 open'>
        <div className='top'></div>
        <div className='bot'></div>
        <div
          className='content'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec9.title,
          }}
        ></div>
      </div>
      <div className='section sec10'>
        <div className='content'>
          <div className='left'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec10.title,
              }}
            ></div>
            <div className='subgroup'>
              <div className='f1'></div>
              <div
                className='subtitle weight'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec10.sub,
                }}
              ></div>
              <div className='f2'></div>
            </div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec10.desc,
              }}
            ></div>
          </div>
          <div className='right'>
            <div className='out mob'>
              <video
                src={global.pova5ProConfig.sec10video.path}
                poster={global.pova5ProConfig.sec10video.post}
                className='video'
                autoPlay
                webkit-playsinline='true'
                preload='auto'
                muted
                loop
              ></video>
            </div>
          </div>
        </div>
        <div className='outbox'>
          <div className='out'>
            <video
              src={global.pova5ProConfig.sec10video.path}
              poster={global.pova5ProConfig.sec10video.post}
              className='video'
              autoPlay
              webkit-playsinline='true'
              preload='auto'
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
      <div className='section sec11'>
        <div className='content pc'>
          <div className='left'>
            <div className='videobox'>
              <video
                src={global.pova5ProConfig.sec11video.path}
                poster={global.pova5ProConfig.sec11video.post}
                className='video'
                autoPlay
                webkit-playsinline='true'
                preload='auto'
                muted
                loop
              ></video>
            </div>
          </div>
          <div className='right'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec11.titlea,
              }}
            ></div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec11.desca,
              }}
            ></div>
            <div className='params'>
              <div className='param'>
                <div className='bigtext big'>67%</div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec11.p1,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div className='bigtext big'>25%</div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec11.p2,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div className='bigtext big'>39%</div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec11.p3,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className='content2 pc'>
          <div className='left2'></div>
          <div className='right'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec11.titleb,
              }}
            ></div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec11.descb,
              }}
            ></div>
          </div>
        </div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          className='sec11swiper mob'
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <div className='content'>
              <div className='left'>
                <div className='videobox'>
                  <video
                    src={global.pova5ProConfig.sec11video.path}
                    poster={global.pova5ProConfig.sec11video.post}
                    className='video'
                    autoPlay
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
              <div className='right'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec11.titlea,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec11.desca,
                  }}
                ></div>
                <div className='params'>
                  <div className='param'>
                    <div className='bigtext big'>67%</div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec11.p1,
                      }}
                    ></div>
                  </div>
                  <div className='param'>
                    <div className='bigtext big'>25%</div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec11.p2,
                      }}
                    ></div>
                  </div>
                  <div className='param'>
                    <div className='bigtext big'>39%</div>
                    <div
                      className='small'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec11.p3,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='content content2'>
              <div className='left'>
                <div className='videobox'>
                  <video
                    src={global.pova5ProConfig.sec11video.path}
                    poster={global.pova5ProConfig.sec11video.post}
                    className='video'
                    autoPlay
                    webkit-playsinline='true'
                    preload='auto'
                    muted
                    loop
                  ></video>
                </div>
              </div>
              <div className='right'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec11.titleb,
                  }}
                ></div>
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec11.descb,
                  }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='section sec12'>
        <div className='content'>
          <div className='left'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec12.title,
              }}
            ></div>
            <div className='subgroup'>
              <div className='f1'></div>
              <div
                className='subtitle weight'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec12.sub,
                }}
              ></div>
              <div className='f2'></div>
            </div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec12.desc,
              }}
            ></div>
          </div>
          <div className='right'>
            <video
              src={global.pova5ProConfig.sec12video.path}
              poster={global.pova5ProConfig.sec12video.post}
              className='video'
              autoPlay
              webkit-playsinline='true'
              preload='auto'
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
      <div className='section sec13'>
        <div className='content'>
          <div className='left'>
            <div className='out mob'>
              <video
                src={global.pova5ProConfig.sec13video.path}
                poster={global.pova5ProConfig.sec13video.post}
                className='video'
                autoPlay
                webkit-playsinline='true'
                preload='auto'
                muted
                loop
              ></video>
            </div>
          </div>
          <div className='right'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec13.title,
              }}
            ></div>
            <div className='subgroup'>
              <div className='f1'></div>
              <div
                className='subtitle'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec13.sub,
                }}
              ></div>
              <div className='f2'></div>
            </div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec13.desc,
              }}
            ></div>
          </div>
        </div>
        <div className='outbox'>
          <div className='out'>
            <video
              src={global.pova5ProConfig.sec13video.path}
              poster={global.pova5ProConfig.sec13video.post}
              className='video'
              autoPlay
              webkit-playsinline='true'
              preload='auto'
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
      <div className='section sec14'>
        <div className='content'>
          <div className='left'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec14.title,
              }}
            ></div>
            <div className='subgroup'>
              <div className='f1'></div>
              <div
                className='subtitle weight'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec14.sub,
                }}
              ></div>
              <div className='f2'></div>
            </div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec14.desc,
              }}
            ></div>
          </div>
          <div className='right'>
            <div className='icon'></div>
          </div>
        </div>
      </div>
      <div className='section sec15'>
        <div className='content'>
          <div className='left'>
            <video
              src={global.pova5ProConfig.sec15video.path}
              poster={global.pova5ProConfig.sec15video.post}
              className='video'
              autoPlay
              webkit-playsinline='true'
              preload='auto'
              muted
              loop
            ></video>
          </div>
          <div className='right'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec15.title,
              }}
            ></div>
            <div className='subgroup'>
              <div className='f1'></div>
              <div
                className='subtitle weight'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec15.sub,
                }}
              ></div>
              <div className='f2'></div>
            </div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec15.desc,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className='section sec16 open'>
        <div className='top'></div>
        <div className='bot'></div>
        <div
          className='content'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec16.title,
          }}
        ></div>
      </div>
      <div className='section sec17'>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec17.title,
          }}
        ></div>
        <div className='subgroup'>
          <div className='f1'></div>
          <div
            className='subtitle weight'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec17.sub,
            }}
          ></div>
          <div className='f2'></div>
        </div>
        <div
          className='desc'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec17.desc,
          }}
        ></div>
        <div className='img'></div>
        <div className='bigimg'></div>
      </div>
      <div className='section sec18'>
        <div className='imgbox pc'>
          <div className='imgb'>
            <div className='f1'>
              <div className='img'></div>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec18.titlea,
                }}
              ></div>
            </div>
            <div className='f2'>
              <div className='img'></div>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec18.titleb,
                }}
              ></div>
            </div>
          </div>
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          className='sec11swiper mob'
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <div className='f1'>
              <div className='img'></div>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec18.titlea,
                }}
              ></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='f2'>
              <div className='img'></div>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec18.titleb,
                }}
              ></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='section sec19'>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec19.title,
          }}
        ></div>
        <div className='subgroup'>
          <div className='f1'></div>
          <div
            className='subtitle weight'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec19.sub,
            }}
          ></div>
          <div className='f2'></div>
        </div>
        <div
          className='desc'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec19.desc,
          }}
        ></div>
        <div className='imgbox'>
          <div className='fa img'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec19.p1,
              }}
            ></div>
          </div>
          <div className='fb img'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec19.p2,
              }}
            ></div>
          </div>
          <div className='fc img'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec19.p3,
              }}
            ></div>
          </div>
          <div className='fd img'>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec19.p4,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className='section sec20'>
        <div className='content'>
          <div className='left'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec20.title,
              }}
            ></div>
            <div className='subgroup'>
              <div className='f1'></div>
              <div
                className='subtitle weight'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec20.sub,
                }}
              ></div>
              <div className='f2'></div>
            </div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec20.desc,
              }}
            ></div>
          </div>
          <div className='right'>
            <div className='box'></div>
            <video
              src={global.pova5ProConfig.sec20video.path}
              poster={global.pova5ProConfig.sec20video.post}
              className='video'
              autoPlay
              webkit-playsinline='true'
              preload='auto'
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
      <div className='section sec21'>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec21.title,
          }}
        ></div>
        <div className='imgBox pc'>
          <div className='imgs'>
            <div className='img1'></div>
            <div className='img2'></div>
            <div className='img3'></div>
            <div className='img4'></div>
          </div>
        </div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          className='sec21swiper mob'
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <div className='img1 img'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img2 img'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img3 img'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img4 img'></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='section sec22 open'>
        <div className='top'></div>
        <div className='bot'></div>
        <div className='content'>
          <div
            className='a'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec22.title,
            }}
          ></div>
          <div
            className='b'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec22.sub,
            }}
          ></div>
        </div>
      </div>
      <div className='section sec23'>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec23.title,
          }}
        ></div>
        <div className='subgroup'>
          <div className='f1'></div>
          <div
            className='subtitle weight'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec23.sub,
            }}
          ></div>
          <div className='f2'></div>
        </div>
        <div
          className='desc'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec23.desc,
          }}
        ></div>
        <div className='myswiper'>
          <div className='left'>
            <div
              className='btn'
              onClick={() => {
                prev()
              }}
            ></div>
          </div>
          <div className='content'>
            <Swiper
              modules={[Controller]}
              slidesPerView={3}
              navigation
              loop
              spaceBetween={50}
              // @ts-ignore
              onSwiper={setFirstSwiper}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                {({ isNext }) => (
                  <div className={`group${isNext ? " active" : ""}`}>
                    <div className='phone'>
                      <video
                        src={global.pova5ProConfig.sec23video.open}
                        poster={global.pova5ProConfig.sec10video.post}
                        className='video'
                        autoPlay
                        webkit-playsinline='true'
                        preload='auto'
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      className='text'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec23.p1,
                      }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isNext }) => (
                  <div className={`group${isNext ? " active" : ""}`}>
                    <div className='phone'>
                      <video
                        src={global.pova5ProConfig.sec23video.calling}
                        poster={global.pova5ProConfig.sec10video.post}
                        className='video'
                        autoPlay
                        webkit-playsinline='true'
                        preload='auto'
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      className='text'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec23.p2,
                      }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isNext }) => (
                  <div className={`group${isNext ? " active" : ""}`}>
                    <div className='phone'>
                      <video
                        src={global.pova5ProConfig.sec23video.charge}
                        poster={global.pova5ProConfig.sec10video.post}
                        className='video'
                        autoPlay
                        webkit-playsinline='true'
                        preload='auto'
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      className='text'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec23.p3,
                      }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isNext }) => (
                  <div className={`group${isNext ? " active" : ""}`}>
                    <div className='phone'>
                      <video
                        src={global.pova5ProConfig.sec23video.game}
                        poster={global.pova5ProConfig.sec10video.post}
                        className='video'
                        autoPlay
                        webkit-playsinline='true'
                        preload='auto'
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      className='text'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec23.p4,
                      }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isNext }) => (
                  <div className={`group${isNext ? " active" : ""}`}>
                    <div className='phone'>
                      <video
                        src={global.pova5ProConfig.sec23video.message}
                        poster={global.pova5ProConfig.sec10video.post}
                        className='video'
                        autoPlay
                        webkit-playsinline='true'
                        preload='auto'
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      className='text'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec23.p5,
                      }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isNext }) => (
                  <div className={`group${isNext ? " active" : ""}`}>
                    <div className='phone'>
                      <video
                        src={global.pova5ProConfig.sec23video.open}
                        poster={global.pova5ProConfig.sec10video.post}
                        className='video'
                        autoPlay
                        webkit-playsinline='true'
                        preload='auto'
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      className='text'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec23.p1,
                      }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isNext }) => (
                  <div className={`group${isNext ? " active" : ""}`}>
                    <div className='phone'>
                      <video
                        src={global.pova5ProConfig.sec23video.calling}
                        poster={global.pova5ProConfig.sec10video.post}
                        className='video'
                        autoPlay
                        webkit-playsinline='true'
                        preload='auto'
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      className='text'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec23.p2,
                      }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isNext }) => (
                  <div className={`group${isNext ? " active" : ""}`}>
                    <div className='phone'>
                      <video
                        src={global.pova5ProConfig.sec23video.charge}
                        poster={global.pova5ProConfig.sec10video.post}
                        className='video'
                        autoPlay
                        webkit-playsinline='true'
                        preload='auto'
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      className='text'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec23.p3,
                      }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isNext }) => (
                  <div className={`group${isNext ? " active" : ""}`}>
                    <div className='phone'>
                      <video
                        src={global.pova5ProConfig.sec23video.game}
                        poster={global.pova5ProConfig.sec10video.post}
                        className='video'
                        autoPlay
                        webkit-playsinline='true'
                        preload='auto'
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      className='text'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec23.p4,
                      }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isNext }) => (
                  <div className={`group${isNext ? " active" : ""}`}>
                    <div className='phone'>
                      <video
                        src={global.pova5ProConfig.sec23video.message}
                        poster={global.pova5ProConfig.sec10video.post}
                        className='video'
                        autoPlay
                        webkit-playsinline='true'
                        preload='auto'
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      className='text'
                      dangerouslySetInnerHTML={{
                        __html: global.pova5ProConfig.sec23.p5,
                      }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='right'>
            <div
              className='btn'
              onClick={() => {
                next()
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className='section sec24'>
        <div
          className='bigtitle'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec24.titlea,
          }}
        ></div>
        <div
          className='smalltitle'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec24.titleb,
          }}
        ></div>
        <div className='params'>
          <div className='box1'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec24.titlec,
              }}
            ></div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec24.desc,
              }}
            ></div>
          </div>
          <div className='box2'>
            <div className='param'>
              <div className='big bigtext'>15-20%</div>
              <div
                className='small'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec24.p1,
                }}
              ></div>
            </div>
            <div className='param'>
              <div className='big bigtext' ref={countUpRef1}></div>
              <div
                className='small'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec24.p2,
                }}
              ></div>
            </div>
            <div className='param'>
              <div className='big bigtext' ref={countUpRef2}></div>
              <div
                className='small'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec24.p3,
                }}
              ></div>
            </div>
            <div className='param'>
              <div className='big bigtext' ref={countUpRef3}></div>
              <div
                className='small'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec24.p4,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className='section sec25'>
        <div className='box'>
          <div
            className='title'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec25.title,
            }}
          ></div>
          <div className='subgroup'>
            <div className='f1'></div>
            <div
              className='subtitle weight'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec25.sub,
              }}
            ></div>
            <div className='f2'></div>
          </div>
          <div
            className='desc'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec25.desc,
            }}
          ></div>
          <div className='params'>
            <div className='param'>
              <div className='top up'></div>
              <div className='bot'>
                <div className='big bigtext' ref={countUpRef4}></div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec25.p1,
                  }}
                ></div>
              </div>
            </div>
            <div className='param'>
              <div className='top down'></div>
              <div className='bot'>
                <div className='big bigtext' ref={countUpRef5}></div>
                <div
                  className='small'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec25.p2,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section sec26'>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec26.title,
          }}
        ></div>
        <div className='subgroup'>
          <div className='f1'></div>
          <div
            className='subtitle'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec26.sub,
            }}
          ></div>
          <div className='f2'></div>
        </div>
        <div
          className='desc'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec26.desc,
          }}
        ></div>
        <div className='img'></div>
      </div>
      <div className='section sec27'>
        <div
          className='bigtitle'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec27.titlea,
          }}
        ></div>
        <div
          className='smalltitle'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec27.titleb,
          }}
        ></div>
        <div className='content'>
          <div className='left'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec27.titlec,
              }}
            ></div>
            <div className='subgroup'>
              <div className='f1'></div>
              <div
                className='subtitle'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec27.sub,
                }}
              ></div>
              <div className='f2'></div>
            </div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec27.desc,
              }}
            ></div>
            <div className='params'>
              <div className='param'>
                <div className='img fa'></div>
                <div
                  className='text'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec27.p1,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div className='img fb'></div>
                <div
                  className='text'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec27.p2,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div className='img fc'></div>
                <div
                  className='text'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec27.p3,
                  }}
                ></div>
              </div>
              <div className='param'>
                <div className='img fd'></div>
                <div
                  className='text'
                  dangerouslySetInnerHTML={{
                    __html: global.pova5ProConfig.sec27.p4,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='f1'></div>
            <div className='f2'></div>
          </div>
        </div>
      </div>
      <div className='section sec28'>
        <div className='content'>
          <div className='left'></div>
          <div className='right'>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec28.title,
              }}
            ></div>
            <div className='subgroup'>
              <div className='f1'></div>
              <div
                className='subtitle'
                dangerouslySetInnerHTML={{
                  __html: global.pova5ProConfig.sec28.sub,
                }}
              ></div>
              <div className='f2'></div>
            </div>
            <div
              className='desc'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec28.desc,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className='section sec29'>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec29.title,
          }}
        ></div>
        <div className='subgroup'>
          <div className='f1'></div>
          <div
            className='subtitle'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec29.sub,
            }}
          ></div>
          <div className='f2'></div>
        </div>
        <div
          className='desc'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec29.desc,
          }}
        ></div>
        <div className='img'></div>
        <div className='mask'></div>
      </div>
      <div className='section sec30'>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec30.title,
          }}
        ></div>
        <div className='subgroup'>
          <div className='f1'></div>
          <div
            className='subtitle'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec30.sub,
            }}
          ></div>
          <div className='f2'></div>
        </div>
        <div
          className='desc'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec30.desc,
          }}
        ></div>
        <div className='img'>
          <Swiper
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Pagination]}
            className='mySwiper'
            loop
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide>
              <div className='fa imgs'>
                <video
                  src={global.pova5ProConfig.sec30video.path}
                  poster={global.pova5ProConfig.sec30video.post}
                  className='video'
                  autoPlay
                  webkit-playsinline='true'
                  preload='auto'
                  muted
                ></video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='fb imgs'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='fc imgs'></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='section sec31'>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec31.title,
          }}
        ></div>
        <div className='subgroup'>
          <div className='f1'></div>
          <div
            className='subtitle'
            dangerouslySetInnerHTML={{
              __html: global.pova5ProConfig.sec31.sub,
            }}
          ></div>
          <div className='f2'></div>
        </div>
        <div
          className='desc'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec31.desc,
          }}
        ></div>
        <div className='img'></div>
        <div className='mask'></div>
      </div>
      <div className='section sec32'>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: global.pova5ProConfig.sec32.title,
          }}
        ></div>
        <div className='subgroup'>
          <div className='f1'></div>
          <a href={`${global.pova5ProConfig.sec32.url}`} target='blank'>
            <div
              className='subtitle weight'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec32.sub,
              }}
            ></div>
          </a>
          <div className='f2'></div>
        </div>
        <div className='group'>
          <div className='out'>
            <div className='img'></div>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec32.p1,
              }}
            ></div>
          </div>
          <div className='out'>
            <div className='img'></div>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec32.p2,
              }}
            ></div>
          </div>
          <div className='out'>
            <div className='img'></div>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec32.p3,
              }}
            ></div>
          </div>
          <div className='out'>
            <div className='img'></div>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec32.p4,
              }}
            ></div>
          </div>
          <div className='out'>
            <div className='img'></div>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec32.p5,
              }}
            ></div>
          </div>
          <div className='out'>
            <div className='img'></div>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec32.p6,
              }}
            ></div>
          </div>
          <div className='out'>
            <div className='img'></div>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec32.p7,
              }}
            ></div>
          </div>
          <div className='out'>
            <div className='img'></div>
            <div
              className='text'
              dangerouslySetInnerHTML={{
                __html: global.pova5ProConfig.sec32.p8,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
