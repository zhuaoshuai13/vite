import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import UseResponse from "../../../hooks/useResponse"
import "./index.scss"
import sec14PcHios from "../../../assets/spark20/sec14PcHios.png"
import sec14PcF1 from "../../../assets/spark20/sec14PcF1.png"
import sec14PcF2 from "../../../assets/spark20/sec14PcF2.png"
import sec14PcF3 from "../../../assets/spark20/sec14PcF3.png"
import sec14PcF4 from "../../../assets/spark20/sec14PcF4.png"
import sec14PcF5 from "../../../assets/spark20/sec14PcF5.png"
import sec14PcIcon1 from "../../../assets/spark20/sec14PcIcon1.png"
import sec14PcIcon2 from "../../../assets/spark20/sec14PcIcon2.png"
import sec14PcIcon3 from "../../../assets/spark20/sec14PcIcon3.png"
import sec14PcIcon4 from "../../../assets/spark20/sec14PcIcon4.png"
import sec14PcIcon5 from "../../../assets/spark20/sec14PcIcon5.png"

const Sec14 = () => {
  const { responsive } = UseResponse()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    console.log(111)
  }, [responsive])

  return (
    <section className='sec14'>
      <div className='content'>
        <div className='pic_box hios'>
          <img src={sec14PcHios} alt='hios' loading='lazy' />
        </div>
        <div className='box_container'>
          <div className='box'>
            <div className='pic_box'>
              {/* <img src={sec14PcF1} loading='lazy' /> */}
              <video
                src='https://www.tecno.mez100.com.cn/fileadmin/sitedesign/product/SPARK_20/dist/video/sec14PcV1.mp4'
                poster={sec14PcF1}
                autoPlay
                muted
                loop
                webkit-playsinline='true'
                playsInline={true}
              ></video>
              <div className='play'>
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
              </div>
            </div>
            <div className='text_box'>
              <div className='icon icon1'>
                <img src={sec14PcIcon1} loading='lazy' />
              </div>
              <div className='text_wrapper'>
                <h4 className='title_48'>Dynamic Port</h4>
                <p className='subtitle_24'>Always-On, Never In the Way</p>
                <p className='desc_18'>
                  Tecno's self-developed Dynamic Port cleverly merges with the
                  hole screen, giving you early access to the leading-edge cool
                  gadget! Futuristic design and intuitive integration breathe
                  new life to the front camera hole - displaying messages,
                  offering front-end services, while captivating onlookers with
                  an envy-inducing allure.
                </p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='pic_box'>
              {/* <img src={sec14PcF2} loading='lazy' /> */}
              <video
                src='https://www.tecno.mez100.com.cn/fileadmin/sitedesign/product/SPARK_20/dist/video/sec14PcV2.mp4'
                poster={sec14PcF2}
                autoPlay
                muted
                loop
                webkit-playsinline='true'
                playsInline={true}
              ></video>
              <div className='play'>
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
              </div>
            </div>
            <div className='text_box'>
              <div className='icon icon2'>
                <img src={sec14PcIcon2} loading='lazy' />
              </div>
              <div className='text_wrapper'>
                <h4 className='title_48'>
                  Intelligent Internet Speed Improvement
                </h4>
                <p className='subtitle_24'>
                  Surfing the Internet, on Multi-Boost!
                </p>
                <p className='desc_18'>
                  Boost on all fronts! Smart Dual Panel propels Wi-Fi and
                  cellular in parallel, slashing app loading latency by 25% and
                  ramping up download speed by 25%. Enjoy fast and stable
                  network for utmost satisfaction. Smart Network Allocation
                  places foreground tasks into 'fast lane,' up the priority for
                  most essential apps.
                </p>
              </div>
              <div className='datas datas1'>
                <div className='data'>
                  <div className='data_title'>
                    Smart Dual <br /> Panel
                  </div>
                  <p className='data_desc'>WIFI plus Cellular</p>
                </div>
                <div className='data'>
                  <div className='data_title'>
                    Smart Network <br /> Allocation
                  </div>
                  <p className='data_desc'>Full Scene Acceleration</p>
                </div>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='pic_box'>
              {/* <img src={sec14PcF3} loading='lazy' /> */}
              <video
                src='https://www.tecno.mez100.com.cn/fileadmin/sitedesign/product/SPARK_20/dist/video/sec14PcV3.mp4'
                poster={sec14PcF3}
                autoPlay
                muted
                loop
                webkit-playsinline='true'
                playsInline={true}
              ></video>
              <div className='play'>
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
              </div>
            </div>
            <div className='text_box'>
              <div className='icon icon3'>
                <img src={sec14PcIcon3} loading='lazy' />
              </div>
              <div className='text_wrapper'>
                <h4 className='title_48'>AI Tips</h4>
                <p className='subtitle_24'>
                  Your Helpful Assistant in the AIGC Era
                </p>
                <p className='desc_18'>
                  Meet your savvy AI buddy! It's like a personal assistant, but
                  cooler and smarter - managing schedules, offering thoughtful
                  suggestions, providing upfront services or reminders, and
                  anticipating your needs when juggling multiple tasks. Get
                  ready for its tips and prepare to be WOWed!
                </p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='pic_box'>
              {/* <img src={sec14PcF4} loading='lazy' /> */}
              <video
                src='https://www.tecno.mez100.com.cn/fileadmin/sitedesign/product/SPARK_20/dist/video/sec14PcV4.mp4'
                poster={sec14PcF4}
                autoPlay
                muted
                loop
                webkit-playsinline='true'
                playsInline={true}
              ></video>
              <div className='play'>
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
              </div>
            </div>
            <div className='text_box'>
              <div className='icon icon4'>
                <img src={sec14PcIcon4} loading='lazy' />
              </div>
              <div className='text_wrapper'>
                <h4 className='title_48'>APP Twins</h4>
                <p className='subtitle_24'>
                  Mastering the Switch between Work & Life
                </p>
                <p className='desc_18'>
                  Tired of managing multiple devices for different accounts? APP
                  Twins have it simplified. By cloning apps, it enables
                  simultaneous login to various accounts, effortlessly handling
                  both personal and work profiles. Try it now on WhatsApp,
                  Messenger, Snapchat, Instagram, and more.
                </p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='pic_box'>
              {/* <img src={sec14PcF5} loading='lazy' /> */}
              <video
                src='https://www.tecno.mez100.com.cn/fileadmin/sitedesign/product/SPARK_20/dist/video/sec14PcV5.mp4'
                poster={sec14PcF5}
                autoPlay
                muted
                loop
                webkit-playsinline='true'
                playsInline={true}
              ></video>
              <div className='play'>
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
              </div>
            </div>
            <div className='text_box'>
              <div className='icon icon5'>
                <img src={sec14PcIcon5} loading='lazy' />
              </div>
              <div className='text_wrapper'>
                <h4 className='title_48'>Social Turbo</h4>
                <p className='subtitle_24'>Turbocharge the FUN of Social</p>
                <p className='desc_18'>
                  Up your social game with Social Turbo! Tailored for
                  third-party social apps, this video call feature is a rare gem
                  in any smart phone of the same class: In-call beauty & make-up
                  filters, fill light, AR avatars, voice change, and more,
                  spicing up everyday conversations.
                </p>
              </div>
              <div className='datas datas2'>
                <div className='data'>
                  <div className='data_title'>Beauty and Make-up</div>
                </div>
                <div className='data'>
                  <div className='data_title'>Fill Light</div>
                </div>
                <div className='data'>
                  <div className='data_title'>AR Avatar</div>
                </div>
                <div className='data'>
                  <div className='data_title'>Voice Change</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tips'>
          * Evidenced by data from TECNO LAB. <br /> * Pictures, videos, and
          texts of the aforementioned page are for reference only, which may
          vary depending on the actual phone.
        </div>
      </div>
    </section>
  )
}

export default Sec14
