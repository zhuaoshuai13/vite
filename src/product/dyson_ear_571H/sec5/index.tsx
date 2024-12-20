import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

import "./index.scss"

const Sec5 = () => {
  const wrap = useRef<HTMLDivElement>(null)
  const [initData, setInitData] = useState<any>()

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  useEffect(() => {
    $.ajax({
      url: "/picker/color/picker",
      method: "GET",
      // data: reqData,
      //contentType: "application/json",
      // dataType: "json",
      // showLoader: false,
      // cache: false,
      success: function (result) {
        if (result.data?.code == 200) {
          setInitData(result.data.data)
        }
      },
      error: function (result) {},
    })
  }, [])

  useEffect(() => {
    if (initData) {
      let currentColorItemSelector,
        widgetSelector,
        currentPartItemSelector,
        videoSelector,
        videoPlayerSelector,
        widgetGroup = ""
      let videoPlayer = null
      videoPlayer = videojs("video-" + (Object.keys(initData?.data || "")[0] || ""))

      $(".play-btn-wrapper").on("click", function () {
        $(this).siblings(".video-wrapper").removeClass("video-hidden")
        $(this).addClass("video-hidden")
        const widgetGroupKey = $(this)
          .parents(".colour_picker_widget")
          .attr("data-widget-group")
        if (!videoPlayer) {
          videoPlayer = videojs.getPlayer("video-" + widgetGroupKey)
        }
        videoPlayer.loop(true)
        videoPlayer.currentTime(0)
        videoPlayer.play()
      })
      //选择颜色
      $(".colour_picker_part_color_wrapper").on("click", function () {
        const currentColorItemBorderSelector = $(this).children(
          ".colour_picker_part_color_item_border"
        )
        //判断是否已选中-无需再次发起请求获取数据
        if (currentColorItemBorderSelector.hasClass("selected")) {
          return false
        }

        currentColorItemSelector = $(this).find(
          ".colour_picker_part_color_item"
        )

        const otherColorItemBorderSelector = $(this)
          .siblings()
          .children(".colour_picker_part_color_item_border")
        const otherColorItemSelector = $(this)
          .siblings()
          .find(".colour_picker_part_color_item")

        const currentColorGroupSelector = $(this).parents(
          ".colour_picker_group"
        )

        const currentColorPartSelector = $(this).parents(
          ".colour_picker_part_color"
        )

        widgetSelector = $(this).parents(".colour_picker_widget")
        currentPartItemSelector = $(this).parents(".colour_picker_part_item")

        //视频及视屏播放按钮
        videoSelector = widgetSelector.find(".video-wrapper")
        videoPlayerSelector = widgetSelector.find(".play-btn-wrapper")

        //切换选中状态
        otherColorItemBorderSelector.removeClass("selected") //移除该颜色组其他颜色选中状态
        otherColorItemSelector.removeClass("selected")

        currentColorItemBorderSelector.addClass("selected")
        currentColorItemSelector.addClass("selected") //不能去除选中状态

        const currentAllSelectedColorItems = currentColorGroupSelector
          .children(".colour_picker_part_item")
          .find(".colour_picker_part_color_item.selected") //所有颜色组选中颜色

        //必选颜色组
        const requiredPart = currentColorGroupSelector
          .attr("data-required-part")
          .split(",")
        //当前选中颜色id
        const colorId = currentColorItemSelector.attr("data-color-id")
        //当前选中颜色对应颜色组编号，属于第几组
        const partId = currentColorPartSelector.attr("data-part-number")
        //当前颜色对应widget-mapping
        widgetGroup = currentColorGroupSelector.attr("data-widget-group")

        //当前默认图
        const part1Image = widgetSelector.attr("data-part1-image")
        const part2Image = widgetSelector.attr("data-part2-image")
        const compositeImage = widgetSelector.attr("data-composite-image")

        //获取所有颜色组已选中颜色
        const selectedColor = []
        const selectedPart = [] //已选颜色组
        currentAllSelectedColorItems.each(function (index, item) {
          const colourPickerItemSelector = $(item)
          const colorHash = colourPickerItemSelector.attr("data-hash")
          const colorName = colourPickerItemSelector.attr("data-color")
          const colorPartName = colourPickerItemSelector.attr("data-part")
          selectedColor.push(colorPartName + colorName)
          selectedPart.push(colorPartName)
        })

        videoSelector.addClass("video-hidden")
        videoPlayerSelector.addClass("video-hidden")

        //校验必选颜色组是否已选
        // var requiredValid = true;
        // $.each(requiredPart, function (index, item) {
        //     if (!selectedPart.includes(item)) {
        //         requiredValid = false;
        //         return false;
        //     }
        // });

        //console.log(selectedColor, requiredPart);
        //if (requiredValid && (selectedColor.length >= requiredPart.length)) {

        const selectedColorMapping = selectedColor.join(",")
        const requestData = {
          id: colorId,
          widget_group: widgetGroup,
          selected_color: selectedColorMapping,
          part_id: partId,
          part1_image: part1Image,
          part2_image: part2Image,
          composite_image: compositeImage,
        }
        getCompositeData(requestData)
        //}
      })

      function getCompositeData(reqData) {
        const partId = reqData.part_id
        const colorId = reqData.id
        //var colorId = Math.floor(Math.random() * 1000000);
        if (!videoPlayer) {
          videoPlayer = videojs("video-" + reqData.widget_group)
        }
        videoPlayer.pause()
        videoPlayer.currentTime(0)
        $.ajax({
          url: "/picker/color/index",
          method: "GET",
          data: reqData,
          //contentType: "application/json",
          // dataType: "json",
          showLoader: false,
          cache: false,
          success: function (result) {
            const response = result.data
            if (response.code === 200) {
              //替换合成图
              if (partId > 1) {
                widgetSelector
                  .find(".part-image-" + partId)
                  .attr("src", response.data.color_image)
              }
              //替换合成视屏，无视屏隐藏图层播放按钮
              currentPartItemSelector
                .find(".colour_picker_part_item_color_name")
                .text(currentColorItemSelector.attr("data-color-name"))
              widgetSelector
                .find(".composite-image")
                .attr("src", response.data.composite_image)
              widgetSelector
                .find(".composite")
                .attr("video-url", response.data.composite_video)

              if (response.data.composite_video !== "") {
                videoSelector.addClass("video-hidden")
                videoPlayerSelector.removeClass("video-hidden")
                videoPlayer.src({
                  src: response.data.composite_video,
                  type: "video/mp4",
                })
              }
            }
          },
          error: function (result) {},
        })
      }
    }
  }, [initData])

  const sec5Ani = () => {
    const tl = gsap.timeline().from(
      ".colour_picker_widget",
      {
        opacity: 0,
        y: 100,
        ease: "power2.inOut",
        duration: 1,
      },
      "a"
    )
    ScrollTrigger.create({
      trigger: wrap.current,
      start: "top 80%",
      animation: tl,
      toggleActions: "play none none reverse",
    })
  }
  useGSAP(
    () => {
      sec5Ani()
    },
    { scope: wrap }
  )

  return (
    <section className='sec5' ref={wrap}>
      <div className='sec5_wrap'>
        <div
          className='colour_picker_widget container'
          data-part1-image={initData?.default_part1_image}
          data-part2-image={initData?.default_part1_image}
          data-composite-image={initData?.default_composite_image}
          data-widget-group={(Object.keys(initData?.data || "")[0] || "")}
        >
          <div className='container'>
            <div className='mobile_header'>
              <div className='mobile_title'>声来多彩，由你掌控</div>

              <div className='mobile_description'>定制你的独家耳机色彩组合</div>
            </div>

            <div className='left'>
              <div
                className='left-one composite'
                video-url={initData?.default_composite_video}
              >
                <img
                  className='composite-image'
                  src={initData?.data?.stephen?.selected_composite?.image}
                />
                <div className='video-wrapper video-hidden'>
                  {initData?.default_composite_video ? (
                    <video
                      id={`video-${(Object.keys(initData?.data || "")[0] || "")}`}
                      className='video-js'
                      controls
                      preload='auto'
                      width='100%'
                      height='auto'
                      data-setup='{}'
                    >
                      <source
                        src={initData?.default_composite_video}
                        type='video/mp4'
                      />
                    </video>
                  ) : null}
                </div>
                <div
                  className={`play-btn-wrapper ${
                    !initData?.default_composite_video ? "video-hidden " : ""
                  }`}
                >
                  <span className='play-btn-icon'></span>
                  <span className='play-btn-text'>查看 360°</span>
                </div>
              </div>

              <div className='left-two'>
                <div className='middle-top'>
                  <img
                    className='part-image-2'
                    src={
                      initData?.data?.stephen?.selected_part_image?.part1_image
                    }
                    alt=''
                  />
                </div>
                <div className='middle-bottom'>
                  <img
                    className='part-image-3'
                    src={
                      initData?.data?.stephen?.selected_part_image?.part2_image
                    }
                    alt=''
                  />
                </div>
              </div>
            </div>

            <div className='right'>
              <div className='title'>{initData?.title}</div>
              <div className='description'>{initData?.description}</div>

              <div
                className='colour_picker_group'
                data-required-part="<?= implode(',', $requiredPart) ?>"
                data-widget-group={(Object.keys(initData?.data || "")[0] || "")}
              >
                {initData?.data?.stephen?.required_part?.map(
                  (partItem, partIndex) => (
                    <div
                      key={partIndex}
                      className='colour_picker_part_item'
                      data-part={partItem}
                    >
                      <label className='colour_picker_part_item_label'>
                        <span className='colour_picker_part_item_name'>
                          {initData?.data?.stephen.group[partItem].part_name}
                        </span>
                        ：
                        <span className='colour_picker_part_item_color_name'>
                          {
                            initData?.data?.stephen.group[partItem]
                              ?.selected_color_name
                          }
                        </span>
                      </label>
                      <ul
                        className='colour_picker_part_color '
                        data-part-number={partIndex + 1}
                      >
                        {initData?.data?.stephen.group[partItem].colors.map(
                          (colorItem, colorIndex: number) => (
                            <li
                              className='colour_picker_part_color_wrapper'
                              key={colorIndex}
                            >
                              <div
                                className={`colour_picker_part_color_item_border ${
                                  colorItem.id ==
                                  initData?.data?.stephen.group[partItem]
                                    ?.selected_color_id
                                    ? "selected"
                                    : ""
                                }`}
                              >
                                {colorItem.timage ? (
                                  <div
                                    className={`colour_picker_part_color_item ${
                                      colorItem.id ==
                                      initData?.data?.stephen.group[partItem]
                                        ?.selected_color_id
                                        ? "selected"
                                        : ""
                                    }`}
                                    data-color-id={colorItem.id}
                                    data-part={partItem}
                                    data-hash={colorItem.hash}
                                    data-color={colorItem.color}
                                    data-color-name={colorItem.name}
                                  >
                                    <img
                                      src={colorItem.timage}
                                      alt=''
                                      style={{ borderRadius: "100%" }}
                                    />
                                    <div className='image_mark'></div>
                                  </div>
                                ) : (
                                  <div
                                    className={`colour_picker_part_color_item ${
                                      colorItem.id ==
                                      initData?.data?.stephen.group[partItem]
                                        ?.selected_color_id
                                        ? "selected"
                                        : ""
                                    }`}
                                    data-color-id={colorItem.id}
                                    data-part={partItem}
                                    data-hash={colorItem.hash}
                                    data-color={colorItem.color}
                                    data-color-name={colorItem.name}
                                    style={{ background: colorItem.hash }}
                                  >
                                    <div className='image_mark'></div>
                                  </div>
                                )}
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec5
