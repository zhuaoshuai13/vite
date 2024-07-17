import "./index.scss"
export const Lighting = (prop: { text: string }) => {
  return (
    <div className='Lighting'>
      <div className='LightingBox'>
        <div className='btn'></div>
        <div className='mask'></div>
        <div className='btnLight'></div>
        <div className='btnText'>{prop.text}</div>
      </div>
    </div>
  )
}
