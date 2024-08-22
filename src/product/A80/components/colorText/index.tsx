import "./index.scss"
const ColorText = ({ title }: { title: string }) => {
  return (
    <div
      className='colorText'
      dangerouslySetInnerHTML={{ __html: title }}
    ></div>
  )
}

export default ColorText
