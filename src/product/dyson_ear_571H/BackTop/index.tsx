import "./index.scss"

const BackTop = ({swiperInstance}) => {
  return (
    <div
      className='back_top'
      // onClick={() => {
      //   document.querySelector(".bottom_part .fp-overflow")?.scrollTo(0, 0)
      //   window.fullpage_api.moveTo(1)
      // }}
      onClick={() => {
        document.querySelector(".bottom_part")?.scrollTo(0, 0)
        swiperInstance.slideTo(0)
      }}
    >
      <svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='25' cy='25' r='25' fill='#999999' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M30.1519 28L25 22.7087L19.8481 28L19 27.1291L25 20.9665L31 27.1291L30.1519 28Z'
          fill='white'
        />
      </svg>
    </div>
  )
}

export default BackTop
