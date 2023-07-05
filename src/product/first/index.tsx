import { useRef, useLayoutEffect } from "react"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import { EffectFade, Pagination, Autoplay } from "swiper/modules"

import FirstTs from "."

import "./index.scss"

const FirstProduct = () => {
  const total = useRef(null)
  const ca = useRef(null)
  const ca2 = useRef(null)
  const countUpRef1 = useRef(null)
  const countUpRef2 = useRef(null)
  const countUpRef3 = useRef(null)
  const countUpRef4 = useRef(null)
  const videoRef = useRef(null)
  const { textHover, ...restFunc } = FirstTs(
    total,
    ca,
    countUpRef1,
    countUpRef2,
    countUpRef3,
    countUpRef4,
    videoRef,
    ca2
  )

  useLayoutEffect(() => {
    Object.entries(restFunc).forEach(([key, value]) => {
      if (typeof (restFunc as never)[key] === "function") {
        value()
      }
    })
    textHover([
      ".sec5",
      // ".sec8",
      ".sec9",
      ".sec11",
      ".sec12",
      ".sec13",
      ".sec14",
      ".sec15",
      ".sec17",
      ".sec19",
      ".sec20",
      ".sec21",
      ".sec22",
      ".sec23",
      ".sec24",
      ".sec25",
      ".sec26",
      ".sec27",
    ])
  }, [restFunc, textHover])

  return (
    <div ref={total}>
      <div className='groupTop'>
        <section className='section sec1'>
          <div className='name'></div>
          <div className='product'></div>
          <div className='slogan'></div>
          <div className='title_wrap'>
            <div>7000mAh Mega Battery </div>
            <div className='line'></div>
            <div>18W Flash Charge </div>
            <div className='line'></div>
            <div>MTK G85 Processor </div>
            <div className='line'></div>
            <div>128GB ROM + 8GB RAM</div>
          </div>
          <div className='nameGroup'></div>
        </section>
        <section className='section sec2'>
          <div className='group'>
            <div className='out'>
              <div className='box box1'>
                <div className='text Kfont'>
                  Innovative <br />
                  Design
                </div>
              </div>
            </div>
            <div className='out'>
              <div className='box box2'>
                <div className='text Kfont'>
                  Stunning <br />
                  Power
                </div>
              </div>
            </div>
            <div className='out'>
              <div className='box box3'>
                <div className='text Kfont'>
                  Stunning <br />
                  Power
                </div>
              </div>
            </div>
            <div className='out'>
              <div className='box box4'>
                <div className='text Kfont'>
                  Clear <br />
                  Camear
                </div>
              </div>
            </div>
            <div className='out'>
              <div className='box box5'>
                <div className='text Kfont'>HIOS 13</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className='section sec3'>
        <div className='box'>
          <div className='play'></div>
        </div>
      </section>
      {/* <div id='smooth-wrapper'> */}

      <section className='section sec4 sec4First'>
        <div className='color_title Kfont'>
          <div>Brand</div> <div>New</div> <div>Mecha</div> <div>Design</div>
        </div>

        <div className='light_wrap'>
          <div className='light'></div>
        </div>
        <div className='roboat'></div>
      </section>
      {/* </div> */}
      <section className='section sec5'>
        <div className='title Kfont textAni'>
          Turbor Mecha <br /> Design
        </div>
        <div className='slogan Hfont textAni'>Energize Your Coolness</div>
        <div className='desc Hfont textAni'>
          Inspired by energy Mecha, the power-packed POVA NEO 3 comes with three
          color options for an energizing experience!
        </div>
        <div className='phoneBox'>
          <div className='left'></div>
          <div className='phone'></div>
          <div className='right'>
            <div className='phonside'></div>
          </div>
        </div>
      </section>

      <section className='section sec6'>
        <div className='phoneBox'>
          <div className='f1 com'>
            <div className='name Kfont'>
              Amber <br /> Gold
            </div>
            <div className='phone'></div>
          </div>
          <div className='f2 com'>
            <div className='name Kfont'>
              Mecha <br /> Black
            </div>
            <div className='phone'></div>
          </div>
          <div className='f3 com'>
            <div className='name Kfont'>
              Hurricane <br /> Blue
            </div>
            <div className='phone'></div>
          </div>
        </div>
      </section>
      <section className='section sec4 sec7'>
        <div className='color_title Kfont'>
          <div>Power On</div> <div>and On</div> <div>Play </div>
          <div>Non-stop</div>
        </div>
        <div className='roboat'></div>
        <div className='light_wrap'>
          <div className='light'></div>
        </div>
      </section>
      <section className='section sec8'>
        <div className='box box2'>
          <div className='right'>
            <div className='title textAni Kfont'>
              7000mAh <br /> Mega Battery
            </div>
            <div className='img textAni Hfont'></div>
            <div className='desc textAni Hfont'>
              Boldly engage in battles with the 7000mAh battery, which provides
              powerful backup for uninterrupted gaming sessions. Combined with
              the added benefit of 18W Flash Charge, say goodbye to power
              shortages from now on.
            </div>
            <div className='params textAni'>
              <div className='param Hfont'>
                <div className='big'>18H+</div>
                <div className='small'>Facebook</div>
              </div>
              <div className='param'>
                <div className='big'>14H+</div>
                <div className='small'>Watch video</div>
              </div>
              <div className='param'>
                <div className='big'>11H+</div>
                <div className='small'>Play FREEFIRE</div>
              </div>
              <div className='param'>
                <div className='big'>39H+</div>
                <div className='small'>Calls</div>
              </div>
            </div>
          </div>
        </div>

        <div className='box box1'>
          <div className='right'>
            <div className='title textAni Kfont'>
              STS Secure <br />
              Battery <br />
              Technology
            </div>
            <div className='f1'></div>
            <div className='sub'>The Power You Can Trust</div>
            <div className='f2'></div>
            <div className='desc textAni Hfont'>
              The STS coating technology ensures safety by preventing dangerous
              internal short circuits caused by direct contact between aluminum
              foil and anode, providing you with complete peace of mind.
            </div>
          </div>
        </div>
        <div className='movie'>
          <canvas width='1006' height='795' ref={ca2}></canvas>
        </div>
      </section>

      <section className='section sec9'>
        <div className='box'>
          <div className='left'>
            <div className='title textAni Kfont'>
              Battery <br /> Lab 3.0
            </div>
            <div className='img textAni'></div>
            <div className='desc textAni'>
              Extend your phone's battery life with the new energy-efficient
              Super <br /> Power Saver. It intelligently identifies
              battery-draining apps and <br /> adjusts to the best power-saving
              mode for longer use.
            </div>
            <div className='params textAni'>
              <div>
                <div className='img1'></div>
                Long Battery <br /> Life
              </div>
              <div>
                <div className='img2'></div>
                Optimization <br />
                App
              </div>
              <div>
                <div className='img3'></div>
                Super Power <br />
                Saving
              </div>
              <div>
                <div className='img4'></div>
                Smart Power <br />
                Saving Scenarios
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='f1'></div>
            <div className='f2'></div>
          </div>
        </div>
      </section>

      <section className='section sec4 sec10'>
        <div className='color_title Kfont'>
          <div>Pioneering</div> <div>Performance</div> <div>Supercool</div>
          <div>Experience</div>
        </div>
        <div className='roboat'></div>
        <div className='light_wrap'>
          <div className='light'></div>
        </div>
      </section>
      <section className='section sec11'>
        <div className='head'></div>
        <div className='title textAni Kfont'>
          MediaTek Helio G85 <br /> Processor{" "}
        </div>
        <div className='box'>
          <div className='left textAni'>
            <div className='f1'></div>
            <div className='sub Hfont'>Gaming Experience Revamped</div>
            <div className='desc Hfont'>
              The MediaTek Helio G85 boosts the Arm Mali-G52 GPU to 1.0 GHz for
              seamless and efficient mobile gaming on-the-go.
            </div>
            <div className='f2'></div>
          </div>
          <div className='right textAni'>
            <div className='f1'></div>
            <div className='sub Hfont'>Navigate with Precision</div>
            <div className='desc Hfont'>
              Boasting leading inertial navigation, Helio G85 ensures precise
              positioning even in tunnels or underground where GNSS is
              unavailable.
            </div>
            <div className='f2'></div>
          </div>
        </div>
        <div className='videoBox'>
          <video
            src='/fileadmin/sitedesign/product/pova-neo3/images/152810.mp4'
            // src='src/assets/video/v1.mp4'
            className='lazy'
            autoPlay
            webkit-playsinline='true'
            preload='auto'
            muted
            loop
          ></video>
        </div>
      </section>

      <section className='section sec12'>
        <div className='box'>
          <div className='left'>
            <div className='title textAni Kfont'>
              Large <br /> Memory With <br /> Extended <br /> RAM
            </div>
            <div className='group'>
              <div className='sub textAni Hfont'>128+4GB</div>
              <div className='desc textAni Hfont'>
                • Expandable RAM up to 8GB <br />
                *Optional expansion of 1, 2, 4GB, default expansion of 2GB
                <br />
                •The number of active background apps reaching 11
                <br />• Application startup speed increased by 45% on average
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='outer'></div>
            <div className='videoBox'>
              <video
                className='lazy'
                src='/fileadmin/sitedesign/product/pova-neo3/images/152817.mp4'
                // src='src/assets/video/v2.mp4'
                autoPlay
                webkit-playsinline='true'
                preload='auto'
                muted
                loop
              ></video>
            </div>
          </div>
        </div>
      </section>
      <section className='section sec13'>
        <div className='title textAni Kfont'>
          6.82'' HD Display <br /> with 90Hz <br /> Refresh Rate
        </div>
        <div className='line textAni'></div>
        <div className='desc textAni Hfont'>
          Get the most out of your gaming experience with an enhanced experience
          that features smoother graphics, richer detail, and total immersion.
        </div>
        <div className='img textAni'></div>
      </section>
      <section className='section sec14'>
        <div className='box'>
          <div className='left'>
            <div className='title textAni Kfont'>
              Dual speaker <br /> with DTS <br /> Stereo Sound <br /> Effect
            </div>
            <div className='img textAni'></div>
            <div className='desc textAni Hfont'>
              Hear the super sensational sound effects that will transport you
              into the game world like never before.
            </div>
            <div className='logBox textAni'>
              <div className='logo'></div>
              <div className='audo'></div>
            </div>
          </div>
          <div className='right'>
            <video
              src='/fileadmin/sitedesign/product/pova-neo3/images/1.mp4'
              // src='src/assets/video/v5.mp4'
              className='lazy'
              autoPlay
              webkit-playsinline='true'
              preload='auto'
              muted
              loop
            ></video>
          </div>
        </div>
      </section>
      <section className='section sec15'>
        <div className='box'>
          <div className='left'>
            <div className='title textAni Kfont'>Dual Game Engine</div>
            <div className='img textAni'></div>
            <div className='desc textAni Hfont'>
              Powerful Function with Low Power Consumption. <br />
              Enjoy seamless, lag-free mobile gaming with stunningly realistic
              visuals and immersive sounds.
            </div>
          </div>
          <div className='right'></div>
        </div>
      </section>

      <section className='section sec4 sec16'>
        <div className='color_title Kfont'>
          <div>Clear</div> <div>Camera</div> <div>Meets</div>
          <div>Your Shine</div>
        </div>
        <div className='roboat'></div>
        <div className='light_wrap'>
          <div className='light'></div>
        </div>
      </section>
      <section className='section sec17'>
        <div className='group'>
          <div className='title textAni Kfont'>
            16MP <br /> Clear Main Camera
          </div>
          <div className='sub textAni Hfont'>Capture life's beauty.</div>
        </div>
        <div className='img'></div>
        <div className='phone'></div>
        <div className='bigImg'></div>
      </section>

      {/* <section className='section sec18'></section> */}
      <section className='section sec19'>
        <div className='box'>
          <div className='title Kfont textAni'>
            Amplify your brilliance <br /> with Portrait Beauty <br /> feature
          </div>
          <div className='right'>
            <div className='outer'></div>
            <div className='videoBox'>
              <video
                ref={videoRef}
                src='/fileadmin/sitedesign/product/pova-neo3/images/2.mp4'
                // src='src/assets/video/v4.mp4'
                className='lazy'
                // autoPlay
                webkit-playsinline='true'
                preload='auto'
                muted
                // loop
              ></video>
            </div>
          </div>
        </div>
      </section>
      <section className='section sec20'>
        <div className='title textAni Kfont'>SKY SHOP</div>
        <div className='box textAni'>
          <div className='f1 '></div>
          <div className='text Hfont'>Magic at Your Fingertip</div>
          <div className='f2'></div>
        </div>
        <div className='desc textAni Hfont'>
          Choose from over 12 sky-themed filters to create your one-of-a-kind
          photos, magically with just one tap! <br /> Sunny/Rainbow/Azure
          Sky/Rosy Clouds/Sunset/Twilight <br /> Starry/Milky
          way/Meteor/Orbit/Aurora/Moon
        </div>
        <div className='top'></div>
        <div className='bot'></div>
      </section>
      <section className='section sec21'>
        <div className='title textAni Kfont'>
          Show Your <br /> Colorful Side
        </div>
        <div className='img'>
          <div className='img1'></div>
          <div className='img2'></div>
          <div className='img3'></div>
          <div className='img4'></div>
        </div>
      </section>
      <section className='section sec4 sec22'>
        <div className='color_title Kfont'>
          <div>Clear</div> <div>Camera</div> <div>Meets</div>
          <div>Your Shine</div>
        </div>
        <div className='light_wrap'>
          <div className='light'></div>
        </div>
        <div className='log'></div>
      </section>
      <section className='section sec23'>
        <div className='title textAni Kfont'>Vivid Wallpapers</div>
        <div className='img textAni'></div>
        <div className='desc textAni Hfont'>
          Treat your eyes to a tapestry of color and beauty. <br /> A series of
          interconnected wallpapers merge objects and creatures from the real
          world and the imagination. Your <br /> life is multicolored and
          ever-evolving, and your phone should reflect that.{" "}
        </div>
        <div className='phone'>
          <div className='img1'></div>
          <div className='img2'></div>
          <div className='img3'></div>
          <div className='img4'></div>
          <div className='img5'></div>
        </div>
      </section>
      <div className='secPar'>
        <div className='params'>
          <div className='left'>
            <div className='title Kfont'>
              UPS-Ultra <br /> Power Signal
            </div>
            <div className='desc Hfont'>
              Enjoy Optimized Performance with Increased Cellular{" "}
            </div>
          </div>
          <div className='right Hfont'>
            <div className='out'>
              <div className='up'></div>
              <div className='com '>
                <div className='bot'>15-20%</div>
                <div className='top'>
                  Signal Throughput <br />{" "}
                </div>
              </div>
            </div>
            <div className='out'>
              <div className='up'></div>
              <div className='com'>
                <div className='bot'>
                  <span ref={countUpRef1} />%
                </div>
                <div className='top'>
                  Signal Stability <br />{" "}
                </div>
              </div>
            </div>
            <div className='out'>
              <div className='up'></div>
              <div className='com'>
                <div className='bot'>
                  <span ref={countUpRef2} />%
                </div>
                <div className='top'>
                  Data Rate under Weak <br /> Connection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='section sec24'>
        <div className='box'>
          <div className='left'></div>
          <div className='right'>
            <div className='title textAni Kfont'>
              Linkbooming <br /> 1.0
            </div>
            <div className='f1 textAni'></div>
            <div className='sub textAni Hfont'>
              Dual Network Collaboration Helps Internet Speeds Take Flight
            </div>
            <div className='f2 textAni'></div>
            <div className='desc textAni Hfont'>
              Say goodbye to mobile network lagging. <br /> Linkbooming 1.0
              enables parallel acceleration of Wi-Fi and cellular network
              connections for a fast and stable network experience.
            </div>
            <div className='params textAni Hfont'>
              <div className='com'>
                <div className='low'></div>
                <div className='top'>
                  <span ref={countUpRef3} />%
                </div>
                <div className='bot'>Latency 25%</div>
              </div>
              <div className='com'>
                <div className='up'></div>
                <div className='top'>
                  <span ref={countUpRef4} />%
                </div>
                <div className='bot'>Network Speed 25%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section sec25'>
        <div className='box'>
          <div className='title textAni Kfont'>
            Aurora <br /> Engine
          </div>
          <div className='f1 textAni'></div>
          <div className='sub textAni Hfont'>
            Launch Apps in an Instant Battle-ready in Seconds
          </div>
          <div className='f2 textAni'></div>
          <div className='desc textAni Hfont'>
            All-new Aurora Engine powered by AI algorithms delivers
            lightning-fast speed to launch top 10 large-scale games in seconds.
            Foreground launch rate up by 85%, enjoy seamless gameplay with no
            wait. Common App launch rate up by 95%, gain instant access and
            maximum efficiency.
          </div>
        </div>
        <div className='movie'>
          <canvas ref={ca} width={1600} height={800}></canvas>
        </div>
      </section>
      <section className='section sec26'>
        <div className='title textAni Kfont'>Game Space 2.0</div>
        <div className='f1 textAni'></div>
        <div className='sub Hfont textAni'>Enjoy Gaming Time</div>
        <div className='f2 textAni'></div>
        <div className='desc Hfont textAni'>
          Cool interface upgrade. Instantly switch from a variety of modes.{" "}
          <br /> View performance improvements in a glance with the new
          performance radar chart.
        </div>
        <div className='img'>
          <Swiper
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            className='mySwiper'
            loop
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide>
              <div className='fa imgs'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='fb imgs'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='fc imgs'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='fd imgs'></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className='section sec27'>
        <div className='box'>
          <div className='title textAni Kfont'>
            Find More About <br /> HIOS13
          </div>
          <div className='f1 textAni'></div>
          <div className='sub textAni Hfont'>link</div>
          <div className='f2 textAni'></div>
          <div className='params textAni Hfont'>
            <div>
              Panther <br /> Engine 2.0
            </div>
            <div>
              Lightning <br /> Multi-Window4.0
            </div>
            <div>
              Smart Refresh <br /> 3.0
            </div>
            <div className='bot'>
              Mobile <br /> Cloner
            </div>
            <div className='bot'>
              Extended <br /> RAM
            </div>
            <div className='bot'>
              Smart <br /> Scanner
            </div>
          </div>
        </div>
        <div className='botImg'></div>
      </section>
    </div>
  )
}

export default FirstProduct
