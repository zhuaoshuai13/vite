import { ComponentType } from "../type"
import "./index.scss"
const Sec24 = ({ config }: ComponentType) => {
  return (
    <section>
      <div className='sec24'>
        <div className='mainContent'>
          <div className='note'>{config.sec24.note}</div>
          <p>{config.sec24.f1}</p>
          <p>{config.sec24.f2}</p>
          <p>{config.sec24.f3}</p>
          <p>{config.sec24.f4}</p>
          <p>{config.sec24.f5}</p>
        </div>
      </div>
    </section>
  )
}
export default Sec24
