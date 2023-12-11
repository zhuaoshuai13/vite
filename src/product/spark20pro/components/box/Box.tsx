import React, {
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
} from "react"
import LazyLoad from "react-lazyload"
import "./index.scss"

interface BoxPropsType {
  video_ref: React.RefObject<HTMLVideoElement>
  video_src: string
  video_poster: string
  pause_color: "white" | "black"
  text_box: React.ReactElement
  videoClick: any
}

export const Box = ({
  video_ref,
  video_src,
  video_poster,
  pause_color,
  text_box,
  videoClick,
}: BoxPropsType) => {
  const [isPlay, setIsPlay] = useState(false)

  const listenVideoEnd = useCallback(() => {
    video_ref.current?.addEventListener("ended", () => {
      setIsPlay(false)
    })
  }, [video_ref])

  const handleVideoClick = useCallback(
    (ref: React.RefObject<HTMLVideoElement>) => {
      if (isPlay) {
        ref.current?.pause()
      } else {
        ref.current?.play()
      }
      setIsPlay(!isPlay)
    },
    [isPlay]
  )

  useImperativeHandle(videoClick, () => ({
    videoEvent: (ref: React.RefObject<HTMLVideoElement>) =>
      handleVideoClick(ref),
  }))

  useEffect(() => {
    listenVideoEnd()
  })

  return (
    <div className='sec14_box'>
      <div
        className='pic_box'
        onClick={() => {
          handleVideoClick(video_ref)
        }}
      >
        <LazyLoad offset={1000}>
          <video
            ref={video_ref}
            src={video_src}
            poster={video_poster}
            muted
            webkit-playsinline='true'
            playsInline={true}
          ></video>
        </LazyLoad>
        <div className='play'>
          {pause_color === "black" ? (
            isPlay ? (
              <svg
                width='46'
                height='57'
                viewBox='0 0 46 57'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='45.9066'
                  y='0.225098'
                  width='56.3814'
                  height='8.72569'
                  rx='2.01362'
                  transform='rotate(90 45.9066 0.225098)'
                  fill='black'
                  fillOpacity='0.2'
                />
                <rect
                  x='8.99097'
                  y='0.225098'
                  width='56.3814'
                  height='8.72569'
                  rx='2.01362'
                  transform='rotate(90 8.99097 0.225098)'
                  fill='black'
                  fillOpacity='0.2'
                />
              </svg>
            ) : (
              <svg
                width='47'
                height='52'
                viewBox='0 0 47 52'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M43.9992 22.1741C46.8764 23.8353 46.8764 27.9881 43.9992 29.6493L6.606 51.2382C3.7288 52.8994 0.132306 50.8229 0.132307 47.5006L0.132308 4.32273C0.132309 1.00043 3.72881 -1.07601 6.60601 0.585147L43.9992 22.1741Z'
                  fill='black'
                  fillOpacity='0.2'
                />
              </svg>
            )
          ) : isPlay ? (
            <svg
              width='46'
              height='57'
              viewBox='0 0 46 57'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='45.9066'
                y='0.225098'
                width='56.3814'
                height='8.72569'
                rx='2.01362'
                transform='rotate(90 45.9066 0.225098)'
                fill='white'
                fillOpacity='0.3'
              />
              <rect
                x='8.99097'
                y='0.225098'
                width='56.3814'
                height='8.72569'
                rx='2.01362'
                transform='rotate(90 8.99097 0.225098)'
                fill='white'
                fillOpacity='0.3'
              />
            </svg>
          ) : (
            <svg
              width='47'
              height='52'
              viewBox='0 0 47 52'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M43.9992 22.1741C46.8764 23.8353 46.8764 27.9881 43.9992 29.6493L6.60605 51.2382C3.72885 52.8994 0.132352 50.8229 0.132352 47.5006L0.132354 4.32273C0.132354 1.00043 3.72885 -1.07601 6.60606 0.585147L43.9992 22.1741Z'
                fill='white'
                fillOpacity='0.3'
              />
            </svg>
          )}
        </div>
      </div>
      {text_box}
    </div>
  )
}
