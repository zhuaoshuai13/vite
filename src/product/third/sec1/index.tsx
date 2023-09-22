const Sec1 = () => {
  const url = import.meta.env.VITE_URL
  console.log(url)
  return (
    <div>
      <div className='f1 f'>
        <video
          src='http://127.0.0.1:5173/src/assets/video/sec30.mp4'
          className='videos'
          autoPlay={false}
          webkit-playsinline='true'
          preload='auto'
          muted
          loop
        ></video>
      </div>
    </div>
  )
}

export default Sec1
