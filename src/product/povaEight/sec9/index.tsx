import "./index.scss"

import Sec10 from "../sec10"
import Sec11 from "../sec11"
import Sec12 from "../sec12"

const Sec9 = () => {
  const global = window as any
  return (
    <div className='sec9 pop8'>
      <div className='circle'></div>
      <div
        className='sec9_text'
        dangerouslySetInnerHTML={{ __html: global.pop8Config.sec9.title }}
      ></div>
      <Sec10 />
      <Sec11 />
      <Sec12 />
    </div>
  )
}

export default Sec9
