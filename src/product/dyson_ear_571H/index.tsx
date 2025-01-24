import { useRef, useEffect, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { ReactLenis } from "lenis/react"
import ReactFullpage from "@fullpage/react-fullpage"

import NavBar from "./NavBar"
import SlideDown from "./SlideDown"
import BackTop from "./BackTop"
import "./index.scss"
import Sec1 from "./sec1"
import Sec2 from "./sec2"
import Sec3 from "./sec3"
import Sec32 from "./sec3_2"
import Sec4 from "./sec4"
import Sec5 from "./sec5"
import Sec6 from "./sec6"
import Sec7 from "./sec7"
import Sec8 from "./sec8"
import Sec9 from "./sec9"
import Sec10 from "./sec10"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import { EffectFade, Pagination, Autoplay } from "swiper/modules"
const Ear571H = () => {
  const wrap = useRef(null)
  const [isload, setIsload] = useState(false)
  const [destination, setDestination] = useState({ index: 0 })
  const { src } = window as any
  const [scrollTop, setScrollTop] = useState(0)
  const [toBottomDistance, setToBottomDistance] = useState(window.innerHeight)
  const bottomrRef = useRef(null)
  const swiperRef = useRef(null)
  const [swiperInstance, setSwiperInstance] = useState<any>()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // const startY = 0

  // const handleTouchMove = (e) => {
  //   const currentY = e.touches[0].clientY // 获取实时触摸 Y 坐标
  //   if (startY - currentY > 10) {
  //     if (scrollTop == 0) {
  //       console.log(111111111,'向上')
  //       swiperInstance.slidePrev()
  //     }
  //   }
  // }

  useEffect(() => {
    if (!isload) {
      document
        .querySelector(".bottom_part")
        ?.addEventListener("scroll", (e) => {
          setScrollTop(e.target.scrollTop)
          setToBottomDistance(
            e.target.scrollHeight - e.target.scrollTop - window.innerHeight
          )
        })
    }
  }, [isload])

  const handleTouchMove = useCallback((e) => {
    e.preventDefault() // 阻止默认行为
  }, [])

  useEffect(() => {
    if (destination?.index < 7) {
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      })
    } else {
      document.removeEventListener("touchmove", handleTouchMove)
    }
  }, [destination])

  return (
    <div className={`ear571h`} ref={wrap}>
      <NavBar destination={destination} swiperInstance={swiperInstance} />
      {!destination?.index ? <SlideDown /> : null}
      {destination?.index == 7 &&
        toBottomDistance < window.innerHeight * 0.5 && (
          <BackTop swiperInstance={swiperInstance} />
        )}
      {destination?.index < 5 && (
        <div
          className={`sec3_video_wrap ${
            destination?.index == 2 || destination?.index == 3 ? "active" : ""
          } ${destination?.index > 3 ? "slide-up" : ""} ${
            destination?.index < 2 ? "slide-down" : ""
          }`}
        >
          <video src={src + "/video/s/e/sec3.mp4"} autoPlay muted loop></video>
        </div>
      )}
      {/* <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={500}
        afterRender={() => setIsload(false)}
        onLeave={(origin, destination, direction) =>
          setDestination(destination)
        }
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Sec1 />
              <Sec2 isload={isload} destination={destination} />
              <Sec3 isload={isload} destination={destination} />
              <Sec4 isload={isload} destination={destination} />
              <Sec5 />
              <Sec6 />
              <section className='section bottom_part'>
                <div id='nav_link_2' style={{ height: "200vh" }}></div>
                <Sec8 isload={isload} destination={destination} />
                <Sec9 isload={isload} destination={destination} />
                <Sec10 isload={isload} destination={destination} />
              </section>
            </ReactFullpage.Wrapper>
          )
        }}
      /> */}
      <Swiper
        // effect={"fade"}
        // className='main_swiper'
        direction='vertical'
        // modules={[EffectFade]}
        // effect={"fade"}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setDestination({ index: swiper.activeIndex })
          if (swiper.activeIndex == 7) {
            // document.querySelector(".bottom_part")?.scrollTop = 10
            bottomrRef.current.scrollTop = 10
          }
        }}
        speed={1150}
        // ref={swiperRef}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper)
          swiperRef.current = swiper
        }}
        // allowSlideNext={scrollTop == 0 ? true : false}
        // allowSlidePrev={scrollTop == 0 ? true : false}
        allowTouchMove={scrollTop == 0 ? true : false}
      >
        <SwiperSlide>
          <Sec1 destination={destination} />
        </SwiperSlide>
        <SwiperSlide>
          <Sec2 isload={isload} destination={destination} />
        </SwiperSlide>
        <SwiperSlide>
          <Sec3 isload={isload} destination={destination} />
        </SwiperSlide>
        <SwiperSlide>
          <Sec32 isload={isload} destination={destination} />
        </SwiperSlide>
        <SwiperSlide>
          <Sec4 isload={isload} destination={destination} />
        </SwiperSlide>
        <SwiperSlide>
          <Sec5 />
        </SwiperSlide>
        <SwiperSlide>
          <Sec6 />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bottom_part'
            style={{
              height: "100%",
              overflowY: scrollTop == 0 ? "hidden" : "auto",
            }}
            onTouchMove={handleTouchMove}
            ref={bottomrRef}
          >
            <div id='nav_link_2' style={{ height: "200vh" }}></div>
            {/* <Sec8 isload={isload} destination={destination} /> */}
            <Sec9 isload={isload} destination={destination} />
            {/* <Sec10 isload={isload} destination={destination} /> */}
          </div>
        </SwiperSlide>
      </Swiper>
      <Sec7 isload={isload} destination={destination} scrollTop={scrollTop} />
    </div>
  )
}

export default Ear571H
