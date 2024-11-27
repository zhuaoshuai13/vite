import { useContext } from "react"
import { ScreenContext } from "../../../provider"

import "./index.scss"

const Sec3 = () => {
  const { tab30proConfig: config, src } = window as any
  const { isPc } = useContext(ScreenContext)

  return (
    <section className='sec3'>
      <div className='sec3_wrap'>
        {isPc ? (
          <div className='sec3_items'>
            <div className='item_wrap'>
              <div className='item_wrap'>
                <div className='item_wrap item_wrap1'>
                  <div className='sec3_item item1'>
                    <div className='text_wrap'>
                      <div>
                        <div
                          className='title'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item1?.title,
                          }}
                        ></div>
                        <div
                          className='desc'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item1?.desc,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className='img_wrap'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec2_p1_pc.webp"}
                      />
                    </div>
                  </div>
                  <div className='sec3_item item2'>
                    <div className='text_wrap'>
                      <div>
                        <div
                          className='desc'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item2?.desc1,
                          }}
                        ></div>
                        <div
                          className='title'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item2?.title,
                          }}
                        ></div>
                        <div
                          className='desc'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item2?.desc2,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className='img_wrap'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec2_p2_pc.webp"}
                      />
                    </div>
                  </div>
                </div>
                <div className='item_wrap item_wrap2'>
                  <div className='sec3_item item3'>
                    <div className='text_wrap'>
                      <div>
                        <div
                          className='title'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item3?.title,
                          }}
                        ></div>
                        <div
                          className='desc'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item3?.desc,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className='img_wrap'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec2_p3_pc.webp"}
                      />
                    </div>
                  </div>
                  <div className='sec3_item item4'>
                    <div className='text_wrap'>
                      <div>
                        <div
                          className='title'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item4?.title,
                          }}
                        ></div>
                        <div
                          className='desc'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item4?.desc,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className='img_wrap'>
                      <img
                        loading='lazy'
                        src={src + "/images/pc/sec2_p4_pc.webp"}
                      />
                    </div>
                  </div>
                  <div className='sec3_item item5'>
                    <div className='text_wrap'>
                      <div>
                        <div
                          className='title'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item5?.title,
                          }}
                        ></div>
                        <div
                          className='desc'
                          dangerouslySetInnerHTML={{
                            __html: config?.sec3?.item5?.desc,
                          }}
                        ></div>
                      </div>
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
            </div>
            <div className='item_wrap item_wrap3'>
              <div className='sec3_item item6'>
                <div className='text_wrap'>
                  <div>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item6?.desc1,
                      }}
                    ></div>
                    <div
                      className='desc desc2'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item6?.desc2,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='img_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/pc/sec2_p6_pc.webp"}
                  />
                </div>
              </div>
              <div className='sec3_item item7'>
                <div className='text_wrap'>
                  <div>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item7?.desc1,
                      }}
                    ></div>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item7?.title,
                      }}
                    ></div>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item7?.desc2,
                      }}
                    ></div>
                  </div>
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
        ) : (
          <div className='sec3_items'>
            <div className='item_wrap'>
              <div className='sec3_item item1'>
                <div className='text_wrap'>
                  <div>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item1?.title,
                      }}
                    ></div>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item1?.desc,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='img_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/mb/sec2_p1_mb.webp"}
                  />
                </div>
              </div>
            </div>
            <div className='item_wrap'>
              <div className='item_wrap item_wrap1'>
                <div className='sec3_item item2'>
                  <div className='text_wrap'>
                    <div>
                      <div
                        className='desc'
                        dangerouslySetInnerHTML={{
                          __html: config?.sec3?.item2?.desc1,
                        }}
                      ></div>
                      <div
                        className='title'
                        dangerouslySetInnerHTML={{
                          __html: config?.sec3?.item2?.title,
                        }}
                      ></div>
                      <div
                        className='desc'
                        dangerouslySetInnerHTML={{
                          __html: config?.sec3?.item2?.desc2,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/mb/sec2_p2_mb.webp"}
                    />
                  </div>
                </div>
              </div>
              <div className='item_wrap item_wrap2'>
                <div className='sec3_item item5'>
                  <div className='text_wrap'>
                    <div>
                      <div
                        className='title'
                        dangerouslySetInnerHTML={{
                          __html: config?.sec3?.item5?.title,
                        }}
                      ></div>
                      <div
                        className='desc'
                        dangerouslySetInnerHTML={{
                          __html: config?.sec3?.item5?.desc,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/mb/sec2_p5_mb.webp"}
                    />
                  </div>
                </div>
                <div className='sec3_item item6'>
                  <div className='text_wrap'>
                    <div>
                      <div
                        className='desc'
                        dangerouslySetInnerHTML={{
                          __html: config?.sec3?.item6?.desc1,
                        }}
                      ></div>
                      <div
                        className='desc desc2'
                        dangerouslySetInnerHTML={{
                          __html: config?.sec3?.item6?.desc2,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className='img_wrap'>
                    <img
                      loading='lazy'
                      src={src + "/images/pc/sec2_p6_pc.webp"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='item_wrap'>
              <div className='sec3_item item3'>
                <div className='text_wrap'>
                  <div>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item3?.title,
                      }}
                    ></div>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item3?.desc,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='img_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/mb/sec2_p3_mb.webp"}
                  />
                </div>
              </div>
            </div>
            <div className='item_wrap'>
              <div className='sec3_item item4'>
                <div className='text_wrap'>
                  <div>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item4?.title,
                      }}
                    ></div>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item4?.desc,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='img_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/mb/sec2_p4_mb.webp"}
                  />
                </div>
              </div>
            </div>
            <div className='item_wrap'>
              <div className='sec3_item item7'>
                <div className='text_wrap'>
                  <div>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item7?.desc1,
                      }}
                    ></div>
                    <div
                      className='title'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item7?.title,
                      }}
                    ></div>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html: config?.sec3?.item7?.desc2,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='img_wrap'>
                  <img
                    loading='lazy'
                    src={src + "/images/mb/sec2_p7_mb.webp"}
                  />
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
