import { useContext } from "react"
import { ScreenContext } from "../../../provider"

import "./index.scss"

const Sec2 = () => {
  const { spark20pro5gConfig: config } = window as any
  const { isPc } = useContext(ScreenContext)

  return (
    <section className='sec2'>
      <div className='h_full'>
        <div className='ctt'>
          <div className='items'>
            {isPc
              ? config.sec2.pc.map((item: any, index: number) => {
                  return (
                    <div className='item' key={index}>
                      <img src={item} loading='lazy' />
                    </div>
                  )
                })
              : config.sec2.mb.map((item: any, index: number) => {
                  return (
                    <div className='item' key={index}>
                      <img src={item} loading='lazy' />
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec2
