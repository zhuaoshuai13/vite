import { useState, useContext } from "react"
import { ScreenContext } from "../../../provider"

import "./index.scss"

const Sec5 = () => {
  const { spark20pro5gConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)
  const [isActive, setIsActive] = useState(true)

  return (
    <section className='sec5'>
      <div className='a_cont'>
        <div className='bg_wrap'>
          <picture>
            <source
              media='(max-width: 1080px)'
              srcSet={config.sec5.bg.mb}
            />
            <source
              media='(min-width: 1081px)'
              srcSet={config.sec5.bg.pc}
            />
            <img src={config.sec5.bg.pc} loading='lazy' />
          </picture>
        </div>
        <div className='ctt'>
          <div className='right'>
            {isPc ? (
              <div className='datas'>
                {config.sec5.datas.map((item: any, index: number) => {
                  return (
                    <div className='data' key={index}>
                      <div
                        className='data_title'
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      ></div>
                      <div
                        className='data_desc'
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      ></div>
                    </div>
                  )
                })}
              </div>
            ) : null}
          </div>
          <div className='button_wrap'>
            <span
              onClick={() => {
                setIsActive(true)
              }}
              className={isActive ? "active" : ""}
            >
              ON
            </span>
            <span className='line'>/</span>
            <span
              onClick={() => {
                setIsActive(false)
              }}
              className={!isActive ? "active" : ""}
            >
              OFF
            </span>
          </div>
          <div className='left'>
            <div className='text_bg'>
              <picture>
                <source
                  media='(max-width: 1080px)'
                  srcSet={config.sec5.text_bg.mb}
                />
                <source
                  media='(min-width: 1081px)'
                  srcSet={config.sec5.text_bg.pc}
                />
                <img src={config.sec5.text_bg.pc} loading='lazy' />
              </picture>
            </div>
            <div className='text_wrap'>
              <div className='title_wrap'>
                <span
                  className='title_48'
                  dangerouslySetInnerHTML={{ __html: config.sec5.title }}
                ></span>
                <span className='title_icon_white'></span>
              </div>
              <div className='desc_wrap'>
                <p
                  className='desc_18'
                  dangerouslySetInnerHTML={{ __html: config.sec5.desc }}
                ></p>
              </div>
              {!isPc ? (
                <div className='datas'>
                  {config.sec5.datas.map((item: any, index: number) => {
                    return (
                      <div className='data' key={index}>
                        <div
                          className='data_title'
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></div>
                        <div
                          className='data_desc'
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        ></div>
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </div>
          <div className='center'>
            <picture>
              <source media='(max-width: 1080px)' srcSet={config.sec5.img.mb} />
              <source media='(min-width: 1081px)' srcSet={config.sec5.img.pc} />
              <img src={config.sec5.img.pc} loading='lazy' />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec5
