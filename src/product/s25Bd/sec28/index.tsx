import { CompontentType } from "../type"

import "./index.scss"
const Sec28 = ({ config }: CompontentType) => {
  return (
    <section id='sec28' className='sec28 smallContent'>
      <div
        className='note'
        dangerouslySetInnerHTML={{ __html: config.sec28.notes }}
      />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f1 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f2 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f3 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f4 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f5 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f6 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f7 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f8 }} />
      {/* <p dangerouslySetInnerHTML={{ __html: config.sec28.f9 }} /> */}
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f10 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f11 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f12 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f13 }} />
      <p dangerouslySetInnerHTML={{ __html: config.sec28.f14 }} />
    </section>
  )
}

export default Sec28
