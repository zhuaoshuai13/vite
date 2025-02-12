import { useRef, useState, useEffect } from "react"
// import UseImagesLoad from "../../../hooks/useImagesLoad"
import { CompontentType } from "../type"

import "./index.scss"

const Sec1 = ({
  useGSAP,
  gsap,
  config,
  UseObservable,
  responsive,
  container,
}: CompontentType) => {
  const ref = useRef<HTMLElement>(null)
  const load = UseObservable(ref)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    let loadedCount = 0
    let imageUrls
    if (responsive?.md) {
      imageUrls = [
        "/fileadmin/assets/v/S25/dist/images/sec1greenmb.png",
        "/fileadmin/assets/v/S25/dist/images/sec1yellowmb.png",
        "/fileadmin/assets/v/S25/dist/images/sec1blackmb.png",
      ]
    } else {
      imageUrls = [
        "/fileadmin/assets/v/S25/dist/images/sec1_p3_pc.webp",
        "/fileadmin/assets/v/S25/dist/images/sec1_p2_pc.webp",
        "/fileadmin/assets/v/S25/dist/images/sec1_p1_pc.webp",
      ]
    }

    const handleImageLoad = () => {
      loadedCount += 1
      if (loadedCount === imageUrls.length) {
        setImagesLoaded(true)
      }
    }

    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url

      // 如果图片已缓存，直接增加计数并检测是否全部加载完成
      if (img.complete) {
        handleImageLoad()
      } else {
        img.onload = handleImageLoad
        img.onerror = () => {
          console.error(`Error loading image: ${url}`)
        }
      }
    })
  }, [])

  useGSAP(
    () => {
      gsap.to(window, { duration: 1, scrollTo: { y: "#sec1", offsetY: 54 } })
    },
    {
      dependencies: [responsive?.md],
      scope: container,
      revertOnUpdate: true,
    }
  )
  const { contextSafe } = useGSAP({
    dependencies: [responsive?.md],
    scope: container,
    revertOnUpdate: true,
  })

  const fa = contextSafe(() => {
    const tl = gsap.timeline({ paused: true })
    // tl.from(
    //   "#sec1 .phone2",
    //   {
    //     opacity: 0,
    //     ease: "power2.inOut",
    //     duration: 1,
    //   },
    //   "a"
    // )
    // tl.to(
    //   "#sec1 .phone2",
    //   {
    //     opacity: 1,
    //     ease: "power2.inOut",
    //     duration: 1,
    //   },
    //   "a"
    // )

    tl.from(
      "#sec1 .phone3",
      {
        x: "50%",
        y: "-10%",
        rotate: "-30deg",
        opacity: 0,

        ease: "power2.inOut",
        duration: 1,
      },
      "a"
    )
    tl.to(
      "#sec1 .phone3",
      {
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      },
      "a"
    )
    if (!tl.isActive()) {
      tl.play()
    }
  })

  useEffect(() => {
    if (imagesLoaded) {
      fa()
    }
  }, [imagesLoaded])

  return (
    <section id='sec1' ref={ref} className={`imgLoad${load}`}>
      <div className='sec1_wrap'>
        <div
          className='titleBig'
          dangerouslySetInnerHTML={{ __html: config.sec1.bigTitle }}
        ></div>
        <div className='phone_wrap img_wrap phone1'></div>
        <div className='phone_wrap img_wrap phone2'></div>
        <div className='phone_wrap img_wrap phone3'></div>

        <div className='content_wrap'>
          <div className='left'>
            <div className='img_wrap logo'></div>
            <div className='data_wrap'>
              <div className='data_item'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{ __html: config.sec1.titlea }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec1.desca }}
                />
              </div>
              <div className='data_item'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{ __html: config.sec1.titleb }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec1.descb }}
                />
              </div>

              <div className='data_item'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{ __html: config.sec1.titlec }}
                />
                <div
                  className='desc'
                  dangerouslySetInnerHTML={{ __html: config.sec1.descc }}
                />
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='icon_items'>
              <div className='img_wrap item item1'></div>
              <div className='img_wrap item item2'></div>
              <div className='img_wrap item item3'></div>
              <div className='img_wrap item item4'></div>
              <div className='img_wrap item item5'></div>
            </div>
            <div className='textRight'>
              <div
                className='watchText'
                dangerouslySetInnerHTML={{ __html: config.sec1.watch }}
              ></div>
              <div className='data_wrap data_wrap_right'>
                <div className='data_item'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{ __html: config.sec1.titlee }}
                  />
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: config.sec1.desce }}
                  />
                </div>
                <div className='data_item item2'>
                  <div
                    className='title'
                    dangerouslySetInnerHTML={{ __html: config.sec1.titlef }}
                  />
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: config.sec1.descf }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec1
