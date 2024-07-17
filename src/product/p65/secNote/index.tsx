import Title from "../components/title"
import { ComponentType } from "../type"

import "./index.scss"
const secNote = ({ config }: ComponentType) => {
  return (
    <div className='secNote'>
      <Title>
        <div>Notes: </div>
      </Title>
      <div className='content'>
        <p>{config.sec19.f1}</p>
        <p>{config.sec19.f2}</p>
        <p>{config.sec19.f3}</p>
        <p>{config.sec19.f4}</p>
        <p>{config.sec19.f5}</p>
        <p>{config.sec19.f6}</p>
        <p>{config.sec19.f7}</p>
      </div>
    </div>
  )
}

export default secNote
