import Sec1 from "./sec1"
import Sec2 from "./sec2"
import Sec3 from "./sec3"
import Sec4 from "./sec4"
import Sec5 from "./sec5"
import Sec6 from "./sec6"
import Sec7 from "./sec7"
import Sec8 from "./sec8"
import Sec9 from "./sec9"
import Sec10 from "./sec10"
import Sec11 from "./sec11"
import Sec12 from "./sec12"
import Sec13 from "./sec13"
// import Sec14 from "./sec14"
import "./index.scss"

const Spark20proplus = () => {
  return (
    <div className='spark20proplus'>
      <Sec1 />
      <Sec2 />
      <div className='sec_container2'>
        <div className='bg_white sec_container4'></div>
        <div className='bg_black sec_container1'>
          <Sec3 />
          <Sec4 />
          <Sec5 />
        </div>
        <Sec6 />
        <Sec7 />
        <Sec8 />
        <Sec9 />
      </div>
      <div className='bg_white2'>
        <div className='sec_container5'>
          <div className='bg_black sec_container3'></div>
          <Sec10 />
          <Sec11 />
          <Sec12 />
          <Sec13 />
        </div>
        {/* <Sec14 /> */}
      </div>
    </div>
  )
}

export default Spark20proplus
