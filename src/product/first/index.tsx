import { useRef, useLayoutEffect } from "react"

// import FirstTs from "."

import "./index.scss"

const FirstProduct = () => {
  const sec3 = useRef(null)
  const total = useRef(null)
  // const { textHover, sec1Ani, hoverAni, secA } = FirstTs(total)

  useLayoutEffect(() => {
    console.log("a")
  }, [])

  return (
    <div ref={total}>
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
      </section>
      <section className='section sec2'></section>
      <section className='section sec3'>
        <div className='play'></div>
      </section>
      <section className='section sec4' ref={sec3}>
        <div className='color_title'>
          <div>Brand</div> <div>New</div> <div>Mecha</div> <div>Design</div>
        </div>
        {/* <div className='light_wrap'>
          <div className='light'></div>
        </div> */}
        <div className='roboat'></div>
      </section>
      <section className='section sec5'>
        <div className='title'>Turbor Mecha Design</div>
        <div className='slogan'>Energize Your Coolness</div>
        <div className='desc'>
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
            <div className='name'>Amber Gold</div>
            <div className='phone'></div>
          </div>
          <div className='f2 com'>
            <div className='name'>Mecha Black</div>
            <div className='phone'></div>
          </div>
          <div className='f3 com'>
            <div className='name'>Hurricane Blue</div>
            <div className='phone'></div>
          </div>
        </div>
      </section>
      <section className='section sec4 sec7'>
        <div className='color_title'>
          <div>Power On</div> <div>and On</div> <div>Play </div>
          <div>Non-stop</div>
        </div>
        {/* <div className='light_wrap'>
          <div className='light'></div>
        </div> */}
      </section>
      <section className='section sec8'>
        <div className='box'>
          <div className='left'></div>
          <div className='right'>
            <div className='title'>7000mAh Mega Battery</div>
            <div className='img'></div>
            <div className='desc'>
              Boldly engage in battles with the 7000mAh battery, which provides
              powerful backup for uninterrupted gaming sessions. Combined with
              the added benefit of 18W Flash Charge, say goodbye to power
              shortages from now on.
            </div>
            <div className='params'>
              <div className='param'>
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
      </section>
      <section className='section sec9'>
        <div className='box'>
          <div className='left'>
            <div className='title'>Battery Lab 3.0</div>
            <div className='img'></div>
            <div className='desc'>
              Extend your phone's battery life with the new energy-efficient
              Super Power Saver. It intelligently identifies battery-draining
              apps and adjusts to the best power-saving mode for longer use.
            </div>
            <div className='params'>
              <div>
                Long Battery <br /> Life
              </div>
              <div>
                Optimization <br />
                App
              </div>
              <div>
                Super Power <br />
                Saving
              </div>
              <div>
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
        <div className='color_title'>
          <div>Pioneering</div> <div>Performance</div> <div>Supercool</div>
          <div>Experience</div>
        </div>
        {/* <div className='light_wrap'>
          <div className='light'></div>
        </div> */}
      </section>
      <section className='section sec11'>
        <div className='title'>MediaTek Helio G85 Processor </div>
        <div className='box'>
          <div className='left'>
            <div className='f1'></div>
            <div className='sub'>Gaming Experience Revamped</div>
            <div className='desc'>
              The MediaTek Helio G85 boosts the Arm Mali-G52 GPU to 1.0 GHz for
              seamless and efficient mobile gaming on-the-go.
            </div>
            <div className='f2'></div>
          </div>
          <div className='right'>
            <div className='f1'></div>
            <div className='sub'>Navigate with Precision</div>
            <div className='desc'>
              Boasting leading inertial navigation, Helio G85 ensures precise
              positioning even in tunnels or underground where GNSS is
              unavailable.
            </div>
            <div className='f2'></div>
          </div>
        </div>
      </section>
      <section className='section sec12'>
        <div className='box'>
          <div className='left'>
            <div className='title'>
              Large <br /> Memory With <br /> Extended <br /> RAM
            </div>
            <div className='sub'>128+4GB</div>
            <div className='desc'>
              • Expandable RAM up to 8GB <br />
              *Optional expansion of 1, 2, 4GB, default expansion of 2GB
              <br />
              •The number of active background apps reaching 11
              <br />• Application startup speed increased by 45% on average
            </div>
          </div>
          <div className='right'></div>
        </div>
      </section>
      <section className='section sec13'>
        <div className='title'>6.82'' HD Display with 90Hz Refresh Rate</div>
        <div className='line'></div>
        <div className='desc'>
          Get the most out of your gaming experience with an enhanced experience
          that features smoother graphics, richer detail, and total immersion.
        </div>
        <div className='img'></div>
      </section>
      <section className='section sec14'>
        <div className='title'>Dual speaker with DTS Stereo Sound Effect</div>
        <div className='img'></div>
        <div className='desc'>
          Hear the super sensational sound effects that will transport you into
          the game world like never before.
        </div>
        <div className='logo'></div>
      </section>
      <section className='section sec15'>
        <div className='box'>
          <div className='left'>
            <div className='title'>Dual Game Engine</div>
            <div className='img'></div>
            <div className='desc'>
              Powerful Function with Low Power Consumption. Enjoy seamless,
              lag-free mobile gaming with stunningly realistic visuals and
              immersive sounds.
            </div>
          </div>
          <div className='right'></div>
        </div>
      </section>
      <section className='section sec4 sec16'>
        <div className='color_title'>
          <div>Clear</div> <div>Camera</div> <div>Meets</div>
          <div>Your Shine</div>
        </div>
        {/* <div className='light_wrap'>
          <div className='light'></div>
        </div> */}
      </section>
      <section className='section sec17'>
        <div className='title'>
          16MP <br /> Clear Main Camera
        </div>
        <div className='sub'>Capture life's beauty.</div>
        <div className='img'></div>
        <div className='phone'></div>
      </section>
      <section className='section sec18'></section>
      <section className='section sec19'>
        <div className='sub'>
          Amplify your brilliance with Portrait Beauty feature
        </div>
        <div className='f1'></div>
        <div className='f2'></div>
      </section>
    </div>
  )
}

export default FirstProduct
