import "./index.scss"

const Sec4 = () => {
  return (
    <section className='sec4' id='nav_link_1'>
      <div className='sec4_wrap'>
        <div className='video_wrap'>
          <video
            src='/src/assets/dyson_ear571h/videos/sec4.mp4'
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className='text_wrap'>
          <h3 className='pdp_title'>颜色多选，颜值百变</h3>
          <p className='pdp_desc'>
            通过可更换外壳和耳垫，在同一部耳机上实现不同风格的切换。 <br />
            心情，穿搭，或是风格？由你而定。
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sec4
