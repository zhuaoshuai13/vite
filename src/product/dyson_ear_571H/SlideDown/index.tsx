import "./index.scss"

const SlideDown = () => {
  const { src } = window as any

  return (
    <div className='slide_down'>
      <div className='img_wrap hand_icon'>
        <img src={src + "/wysiwyg/ipadassets/571/slide_down.png"} />
      </div>
      <p>
        开启 <br /> OnTrac™ <br />
        音乐之旅
      </p>
    </div>
  )
}

export default SlideDown
