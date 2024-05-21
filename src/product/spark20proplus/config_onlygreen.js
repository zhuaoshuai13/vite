const url = window.basic_assets_href
window.spark20proplusConfig = {
  button_text: {
    on: "ON",
    off: "OFF",
  },
  sec1: {
    // type1: 文案+图片; type2: 图片
    type: "type1",
    title: "108MP Champion",
    tecno_logo: url + "/images/sec1PcF1.webp",
    product: url + "/images/sec1PcProduct.webp",
    slogn: url + "/images/sec1PcSlogn.webp",
    phone: {
      img_pc: url + "/images/sec1PcPhone.webp",
      img_mb: url + "/images/sec1MbPhone.webp",
    },
    feature: [
      {
        featureTitle: "G99",
        featureDesc: "Ultimate <br /> Processor",
      },
      {
        featureTitle: "120Hz",
        featureDesc: "Curved AMOLED <br /> Screen",
      },
      {
        featureTitle: "16GB RAM",
        featureDesc: "+256GB ROM <br /> (8GB+8GB Extended)",
      },
    ],
    type2: {
      kv_pc: url + "/images/sec1PcKv.webp",
      kv_mb: url + "/images/sec1Pcmb.webp",
    },
  },
  sec2: {
    //type1: 只配置文案; type2: 只配置图片--type2.imgPc(pc端图片), type2.imgMb(移动端图片)
    type: "type1",
    type2: {
      imgPc: "",
      imgMb: "",
    },
    item1: {
      title: ["400% Big Volume", "Stereo Dual Speaker"],
      bg: {
        img_pc: url + "/images/sec2PcF1.webp",
        img_mb: url + "/images/sec2MbF1.webp",
      },
    },
    item2: {
      title: "Magic Skin 2.0",
      bg: {
        img_pc: url + "/images/sec2PcF2.webp",
        img_mb: url + "/images/sec2MbF2.webp",
      },
    },
    item3: {
      title: "Ultra Tough Glass Screen",
    },
    item4: {
      title: "6.78’’ 120Hz",
      desc: "AMOLED Screen",
    },
    item5: {
      title: ["Android 14"],
      bg: {
        img_pc: url + "/images/sec2PcF5.webp",
        img_mb: url + "/images/sec2MbF5.webp",
      },
    },
    item6: {
      title: ["108MP", "Ultra Clear Camera "],
      bg: {
        img_pc: url + "/images/sec2PcF6.webp",
        img_mb: url + "/images/sec2MbF6.webp",
      },
    },
    item7: {
      title: ["Double Curved Design", "7.55mm Ultra Slim Body"],
      bg: {
        img_pc: url + "/images/sec2PcF7.webp",
        img_mb: url + "/images/sec2MbF7.webp",
      },
    },
    item8: {
      title: "32MP Selfie",
      bg: {
        img_pc: url + "/images/sec2PcF8.webp",
        img_mb: url + "/images/sec2MbF8.webp",
      },
    },
    item9: {
      title: "IP53",
      desc: "Water & Dust Resistant",
      bg: {
        img_pc: url + "/images/sec2PcF9.webp",
        img_mb: url + "/images/sec2MbF9.webp",
      },
    },
    item10: {
      title: ["5000 mAh", "+33W Super Charge"],
      bg: {
        img_pc: url + "/images/sec2PcF10.webp",
        img_mb: url + "/images/sec2MbF10.webp",
      },
    },
    item11: {
      title: ["G99 Ultimate", "Processor"],
      bg: {
        img_pc: url + "/images/sec2PcF11.webp",
        img_mb: url + "/images/sec2MbF11.webp",
      },
    },
    item12: {
      title: ["BIG RAM+BIG ROM", "BIG WIN"],
      title_mob: ["BIG RAM+BIG ROM BIG WIN"],
      data1: "UP TO 16GB RAM",
      data2: "UP TO 256GB ROM",
      tips: "* Up to 16GB, 8GB+8GB Extended RAM",
      bg: {
        img_pc: url + "/images/sec2PcF12.webp", //16GB版本
        img_mb: url + "/images/sec2MbF12.webp", //16GB版本
        // img_pc: url + "/images/sec2PcF12_2.webp",//21GB版本
        // img_mb: url + "/images/sec2MbF12_2.webp",//21GB版本
      },
    },
    tips: "",
  },
  sec3: {
    title: "CAMERA",
    desc: "High Resolution Photography System",
    bg: {
      img_pc: url + "/images/sec3PcBg.webp",
      img_mb: url + "/images/sec3MbBg.webp",
    },
  },
  sec4: {
    bigTitle: ["HOLD YOUR BEAUTY TIGHT,", "IN ANY LIGHT"],
    camera: {
      title: "108MP Ultra Sensing Main Camera",
      subtitle: "Unprecedented Imaging Clarity in SPARK's History",
      desc: `Capture your world in epic details with SPARK's highest-definition 108MP ultra-sensing camera - all-round lens with flagship-level specs that take photography to the next level. Near or far, clarity stays on par.
      3X in-sensor, 10X digital zoom, and superior video stabilization, plus dual focus technology that intelligently adapts to diverse scenarios, safeguarding clarity for your photographic artistry no matter the distance. Ultra-large 1/1.67" sensor and F/1.75 aperture effortlessly adapt to any lighting. Bright, backlit, or low-light, every sight is your highlight. HDR multi-frame fusion balances light and shadow, crafting compositions of ordinary beauty into extraordinary shots!`,
      cameraVideo: {
        src: url + "/videos/sec4PcCamera.mp4",
        poster: url + "/images/sec4PcCameraPoster.webp",
      },
      datas: [
        {
          name: "108MP",
          desc: "Ultra Definition",
        },
        {
          name: "10X",
          desc: "Digital Zoom",
        },
        {
          name: "HDR Algorithm",
          desc: "Multi-frame Fusion",
        },
        {
          name: `1/1.67"`,
          desc: "Ultra Large <br /> Sensor Area",
        },
        {
          name: "6P",
          desc: "Ultra Clear <br /> Lens",
        },
        {
          name: "3X",
          desc: "In Sensor <br /> Zoom",
        },
        {
          name: "F/1.75",
          desc: "Ultra Large <br /> Aperture",
        },
      ],
    },
    night_mode: {
      title: "900% Ultra Sensitive Adaptive Pixel",
      subtitle: "Super Night Mode",
      desc: `Feel the power of light in the darkness of night. From 0.64μm to a whopping 1.92μm ultra-large fusion pixel, remarkable 9-in-1 technology allows light sensitivity to take flight, snatching 900% more light for nighttime shots to allow your brilliance to shine through. Ultra night mode reinforces it by balancing noise and details for superior low light shots.
      Come nightfalls! SPARK helps your vision pierce the darkness.`,
      datas: [
        {
          name: "9 in 1",
          desc: "Ultra Sensitive Adaptive Pixel",
        },
        {
          name: "1.92μm",
          desc: "Ultra Large Fusion Pixel",
        },
      ],
      night_mode_img: url + "/images/sec4PcNightMode.webp", //黑人版本
      // night_mode_img: url + "/images/sec4PcNightMode_white.webp",//白人版本
      bg: url + "/images/sec4PcMoon.webp",
    },
  },
  sec5: {
    bigTitle: ["STRIKING CLARITY.", "SPARKLING BEAUTY."],
    selfie: {
      title: "32MP Glowing Selfie",
      subtitle: "Own the Night. Glow Bright!",
      desc: `Be there, and you’re the STAR! SPARK captures every of your
      shiny moment with a breathtaking 32MP selfie camera, powered
      by AI portrait restoration and expansive 88.9° golden lens.
      Solo or surrounded, every nuanced smile is preserved.`,
      datas: [
        {
          name: "F/2.2",
          desc: "Large <br /> Aperture",
        },
        {
          name: "40mm",
          desc: "Portrait Group Photo <br /> Focal Length",
        },
        {
          name: "5P",
          desc: "High light <br /> Transmission",
        },
      ],
      selfieVideo: {
        src: url + "/videos/sec5PcSelfie.mp4",
        poster: url + "/images/sec5PcSelfiePoster.webp",
      },
    },
    super_flash_light: {
      title: "Super Flash Light",
      subtitle: "Not just Light. It has a mind.",
      desc: `Selfies pop with ease, even in darkness! While the dual-tone
      flash brightens backgrounds, Super Flash Algorithm precisely
      layers 8 exposure frames to cast just-the-right spotlight
      you need! Physical fill light + AI fine-tuning, the result
      is your flattering photos with balanced brightness, anytime,
      anywhere. Wave goodbye to over- or under-exposure. Every
      shot is a brilliant present!`,
      bg_icon: url + "/images/sec5PcIcon1.webp",
      image: url + "/images/sec5PcSuperFlashLight.webp", //黑人版本
      // image: url + "/images/sec5PcSuperFlashLight_white.webp",//白人版本
    },
    dual_video: {
      title: "Dual Video",
      subtitle: "Front and Back, Inspirations Never Lack!",
      desc: `Fire up both front and rear cameras; Expand your creative playground! This exciting interactive feature empowers you with a world of possibilities to ignite your video ideas!`,
      // tips: "* Some products require a system update to experience Dual View.",
      bg_icon: url + "/images/sec5PcIcon2.webp",
      arrow: url + "/images/sec5PcArrowTop.webp",
      image: url + "/images/sec5PcDualVideo.webp",
    },
    slow_motion: {
      title: "Slow Motion",
      subtitle: "Extend Fleeting Moments, Frame by Frame",
      desc: `Eternaltize every wonderful instant, no matter how instant, with the Slow Motion wonder! Find new surprises with every replay.`,
      bg_icon: url + "/images/sec5PcIcon3.webp",
      video: {
        src: url + "/videos/sec5PcSlowMotion.mp4", //黑人版本
        poster: url + "/images/sec5PcSlowMotion.webp", //黑人版本
        // src: url + "/videos/sec5PcSlowMotion_white.mp4",//白人版本
        // poster: url + "/images/sec5PcSlowMotion_white.webp",//白人版本
      },
    },
    video_2k: {
      title: "2K Video",
      subtitle: `SPARK's Video Quality at New Height`,
      desc: `Relive your epic moments in 2K clarity- with new discoveries
      in each playback! The background naturally blurs, so your
      hero stands out; Night algorithm maximizes noise reduction,
      turning dim scenes into vibrant tales. Spot the WOW moments
      in 2K details, inescapable from SPARK’s eagle eye!`,
      bg_icon: url + "/images/sec5PcIcon4.webp",
      heightQualityVideo: {
        src: url + "/videos/sec5PcVideo2k.mp4",
        poster: url + "/images/sec5PcVideo2kPoster.webp",
      },
    },
  },
  sec6: {
    title: "DESIGN",
    desc: "Designed for Trendsetters",
    bg: {
      img_pc: url + "/images/sec6PcBg.webp",
      img_mb: url + "/images/sec6MbBg.webp",
    },
  },
  sec7: {
    bigTitle: [
      "Fineness in Finish & Feel",
      "Deceptively Minimal, Infinitely Sophisticated",
    ],
    bigTitleMb: [
      "Fineness in Finish & Feel",
      "Deceptively Minimal,",
      "Infinitely Sophisticated",
    ],
    design: {
      title: `Quadrant Star Array`,
      subtitle: "A Touch of Celestial Luxury",
      desc: `Meet SPARK's Quadrant Star Array Module design like no others, using the iconic symbol of DSLR for a powerful camera visual narrative.
      Crafted with nanoscale photolithographic technique from luxury watch, it for the first time introduces 3D design into the realm of smartphones, pushing the boundaries of craftsmanship further.
      Immerse yourself in this celestial sophistication.`,
    },
    phone: {
      img_pc: url + "/images/sec7PcPhone.webp",
      img_mb: url + "/images/sec7PcPhone.webp",
    },
  },
  sec8: {
    double_curved: {
      title: "56.5° Ergonomics Double Curved Design",
      subtitle: "Best Look. Maximum Comfort.",
      desc: `Verified by over 1000 proof tests and billion-grade multi-ethnic mobile ergonomics database, SPARK 20 Pro+ pioneers design with an unprecedented G3-curvature. Curved at a unique 56.5° angle, with ultra-slim body and weight, it offers just the right blend of sleekness and comfort that you'll love.`,
      datas: [
        {
          name: "56.5°",
          desc: "Golden Angle Double Curve",
        },
        {
          name: "7.55mm",
          desc: "Ultra Slim",
        },
        {
          name: "3.0mm",
          desc: "Middle Frame",
        },
      ],
      bg: {
        src: "",
        poster: url + "/images/sec8PcColorMagicGreen.webp",
      },
    },
    colorList: [
      {
        color: "Magic Skin 2.0 Green",
        text_color: "#000000",
        image: {
          pc: url + "/images/sec8PcColorMagicGreen.webp",
          mb: url + "/images/sec8MbColorMagicGreen.webp",
        },
      },
    ],
  },
  sec9: {
    texture: {
      phone: [
        // url + "/images/sec9PcF1.webp",
        // url + "/images/sec9PcF2.webp",
        // url + "/images/sec9PcF3.webp",
        url + "/images/sec9PcF4.webp",
      ],
      title: `Sparkle Sand Pattern`,
      subtitle: "Textured Outside, Tech-tured Inside.",
      desc: `Art and technology collides into breathtaking aesthetics. Million-color coatings create delicately nuanced gradients. Inspired by the infinite universe, nano-scale photolithography conjures dreamy textures. With on-trend colors for every taste, your Mr. Right awaits. <br />
      <span>Lunar Frost:</span> Dance in the tender interplay of light and shadow <br />
      <span>Temporal Orbits:</span> Exude timeless elegance of classic values <br />
      <span>Radiant Starstream:</span> Radiate nobility as sand glitters in starry brilliance`,
      desc_magic_skin: `<span>Magic Skin 2.0:</span>
      Beauty meets durability. 500% more durable. 25% more UV protection.Glossy matte leather feels like the touch of luxurious yacht.`,
      datas: [
        {
          name: "Glass-Like",
          desc: "Matte and Delicate",
        },
        {
          name: "Glitter Sand 2.0",
          desc: "New Generation",
        },
        {
          name: "Fashion Color",
          desc: "Coating",
        },
      ],
      datas_magic_skin: [
        {
          name: "Glossy Matte <br /> Leather",
          desc: "Visual Upgrading",
        },
        {
          name: "100% <br /> Recyclable",
          desc: "Eco-friendy",
        },
        {
          name: "Zero",
          desc: "Harmful <br /> Substance",
        },
        {
          name: "Durability",
          desc: "",
        },
      ],
    },
    water: {
      title: `IP53-Grade Peace <br class='mob' /> of Mind 
      <br class='pc' /> against <br class='mob' /> Water &
      Dust`,
      desc: ` Offering IP53-certified protection against water and dust. 
      <br class='mob' /> Fear no more over splashes or dust.
      Enjoy carefree, <br class='mob' /> comfortable use of
      SPARK.`,
      pic_title: "IP53",
      pic_desc: "Water & Dust Resistant",
      pic_bg: url + "/images/sec9PcWater.webp",
    },
  },
  sec10: {
    title: "PERFORMANCE",
    desc: "Created for Performance Freaks",
    bg: {
      img_pc: url + "/images/sec3PcBg.webp",
      img_mb: url + "/images/sec3MbBg.webp",
    },
  },
  sec11: {
    bigTitle: ["Core + Code", "Faster Than Fast"],
    processor: {
      title: "G99 Ultimate Processor",
      subtitle: "The Mightiest 4G Processor!",
      desc: `Experience unparalleled performance with the ultimate powerhouse MTK G99 processor, the undisputed champion in its class! Daily use, audio-visual, or gaming, it masters effortlessly. Seamless and stable operations become your new normal!`,
      datas: ["2*Cortex-A76 @2.2GHz", "6*Cortex-A55 @2.0GHz", "Mali-G57 MC2"],
      processorVideo: {
        src: url + "/videos/sec11PcProcessor.mp4",
        poster: url + "/images/sec11PcProcessorPoster.webp",
      },
    },
    engine: {
      title: "Performance Upgrade",
      subtitle: "with Twin Engine Buff",
      desc: `...And wait, there's also the software-level acceleration!
      AI-powered Aurora Engine boosts launch rate for major games by
      85%, and popular apps by 95%; Darwin Engine's deep optimization
      enhances frame rates by 8x, minimum 4°C reduction in average
      temperature rise, delivering an exceptional, lag-free gaming
      experience with minimal heat.`,
      engine_video_text1: {
        title: "Aurora Engine 2.0",
        desc: "Extreme Wake-Up",
      },
      engine_video_text2: {
        title: "Darwin Engine 2.0",
        desc: "Game Optimisation",
      },
      engineVideo: {
        src: url + "/videos/sec11PcEngine.mp4",
        poster: url + "/images/sec11PcEnginePoster.webp",
      },
    },
    memory: {
      title: "Up to 256GB ROM <br /> +16GB RAM",
      subtitle: "Big Space. Bigger Potential",
      desc: `Capture all good memories in doubled memory capacity. Turbocharge your system with up to 16GB RAM using Memory Fusion. <br />
      Run fast, carrying it all - the perfect blend of capacity and velocity.`,
      datas: [
        {
          name: `Up to <br /> 256GB`,
          desc: "Large Memory",
        },
        {
          name: `Up to <br /> 16GB`,
          desc: "Memory Fusion",
        },
        {
          name: `System <br /> Slimming`,
          desc: "Deep Cleanup",
        },
      ],
      tips: "* Up to 16GB RAM, 8GB+8GB Extended RAM",
      memoryVideo: {
        src: url + "/videos/sec11PcMemory.mp4",
        poster: url + "/images/sec11PcMemoryPoster.webp",
      },
    },
    battery: {
      title: "5000mAh Large Battery 33W Super Charge (Type-C)",
      subtitle: "Epic Endurance, Rapid Revive",
      desc: `Awaken your superpower with the 5000mAh super battery, fueled by 18W fast charging. Watch as it revives like Superman's energy bar fills up, fortified with an extended service life for prolonged usage.`,
      datas: [
        {
          name: `5000mAh`,
          desc: "Super Battery",
        },
        {
          name: `33W`,
          desc: "Super Charge",
        },
        {
          name: `Type-C`,
          desc: "Interface",
        },
      ],
      batteryVideo: {
        src: url + "/videos/sec11PcBattery.mp4",
        poster: url + "/images/sec11PcBatteryPoster.webp",
      },
    },
  },
  sec12: {
    title: "ULTIMATE <br class='mob' /> AUDIO & VIDEO",
    desc: "A Full Sensory Experience",
    bg: {
      img_pc: url + "/images/sec3PcBg.webp",
      img_mb: url + "/images/sec3MbBg.webp",
    },
  },
  sec13: {
    bigTitle: ["Every Sense, Indulged"],
    bigTitleMb: ["Every Sense,", "Indulged"],
    speaker: {
      title: `Stereo Dual Speaker Sound by DTS <br class='mob' /> 400% Big
      Volume`,
      desc: `Feel the beat of superior sound on the go! Immerse in true stereo with volume pumped up by 200%, enriched with DTS for profound bass and distortion prevention, enabling cinematic feel at home.
      Channel-adaptive technology intelligently aligns with device orientation, so you move as you wish during video or gaming without compromising audio excellence.
      It also cares for your business: Switch seamlessly between handheld and hands-free modes, with Volume Plus algorithm for 400% clearer calls in noisy settings.`,
      small_volume: "100% Volume",
      big_volume: "<span>400%</span> Big volume",
      datas: [
        {
          name: `Stereo Dual Speakers`,
          desc: "Loudness Enhancement",
        },
        {
          name: `Hi-Res`,
          desc: "Audio",
        },
        {
          name: `Hi-Res-img`,
          desc: "",
          type: "img",
          dts_icon: url + "/images/sec13PcHiRes.webp",
        },
        {
          name: `Binaural Tracing`,
          desc: "Technology",
        },
        {
          name: `Volume Plus`,
          desc: "Loud Sound",
        },
        {
          name: `dts-img`,
          desc: "Audio Processing",
          type: "img",
          dts_icon: url + "/images/sec13PcDts.webp",
        },
      ],
      speakerVideo: {
        src: url + "/videos/sec13PcSpeaker.mp4",
        poster: url + "/images/sec13PcSpeakerPoster.webp",
      },
    },
    mic: {
      title: "Dual-Mic Noise-Cancelled Calls",
      subtitle: "Hear and Get Heard. Chat Noise-free!",
      desc: `Dual microphones empower crisp clear sound: Primary mic captures your voice while secondary targets background noise for removal, with AI noise cancellation joining forces for seamless communication! <br />
      Crystal-clear conversations flow freely.`,
      img: {
        mic_icon: url + "/images/sec13PcMic.webp",
        voice_red: url + "/images/sec13PcVoiceRed.webp",
        voice_blue: url + "/images/sec13PcVoiceBlue.webp",
      },
    },
    screen: {
      title: `120Hz Curved <br /> AMOLED Screen`,
      subtitle: "See Sharp. See Vivid.",
      desc: `Leading the class with AMOLED curved screen: 93% screen-to-body ratio for maximally expansive views; P3 color gamut for cinema-grade color presentation; 1000-nit peak brightness for visibility even in glaring sunlight; Adaptive refresh with 1500Hz instant touch sampling rate for ultra smoothness and responsiveness; Smart Refresh 3.1 for self-adaptation & up to 5% power saving; And flagship-grade glass material for double the scratch resistance and damage protection for flawless durability.`,
      datas: [
        {
          name: `Curved <br /> Screen`,
          desc: "6.78'' AMOLED",
        },
        {
          name: `Up to <br /> 1000nit`,
          desc: "Brightness",
        },
        {
          name: `2160Hz PWM <br /> Dimming`,
          desc: "Eye Friendly",
        },
        {
          name: `120Hz`,
          desc: "Adaptive <br class='mob'/> Refresh Rates",
        },
        {
          name: `1.07 <br class='mob'/> Billion`,
          desc: "Color Display",
        },
        {
          name: `Smart <br class='mob'/> Refresh 3.1`,
          desc: "Balanced Power <br class='mob'/> Consumption",
        },
      ],
      phone: {
        img_pc: url + "/images/sec13PcScreen.webp",
        img_mb: url + "/images/sec13PcScreen.webp",
      },
    },
    fod: {
      title: "Millisecond Level FOD",
      subtitle: "Touch Unlock. Future At Work.",
      desc: "Hassle-free security, instantly at fingertips. Unlock in <br /> milliseconds with in-screen fingerprint verification: No more <br class='pc'/> password; No extra actions. One touch, and your smart world is elegantly awakened.",
      phone: {
        img_pc: url + "/images/sec13PcFod.webp",
        img_mb: url + "/images/sec13PcFod.webp",
      },
    },
  },
  sec14: {
    hios: {
      title: "HiOS14 Base on Android 14",
      bg: {
        img_pc: url + "/images/sec14PcHios.webp",
        img_mb: url + "/images/sec14MbHios.webp",
      },
    },
    dynamicPort: {
      title: "Dynamic Port",
      subtitle: "Always-On, Never In the Way",
      desc: `Tecno's self-developed Dynamic Port cleverly merges with the
      hole screen, giving you early access to the leading-edge
      cool gadget! Futuristic design and intuitive integration
      breathe new life to the front camera hole - displaying
      messages, offering front-end services, while captivating
      onlookers with an envy-inducing allure.`,
      icon: url + "/images/sec14PcDynamicPortIcon.webp",
      video: {
        src: url + "/videos/sec14PcDynamicPort.mp4",
        poster: url + "/images/sec14PcDynamicPortPoster.webp",
      },
    },
    ca2: {
      title: "4G CA 2.0",
      subtitle: "Rocket Download, Race Ahead",
      desc: `Like driving on a double-wide superhighway, 4G CA 2.0 allows dual network channels to communicate simultaneously to maximize download speed, excelling by up to 130%. Even in weak or congested networks, it still delivers significant boosts.`,
      icon: url + "/images/sec14PcCa2Icon.webp",
      video: {
        src: url + "/videos/sec14PcCa2.mp4",
        poster: url + "/images/sec14PcCa2Poster.webp",
      },
    },
    internet: {
      title: "Intelligent Internet Speed Improvement",
      subtitle: "Surfing the Internet, on Multi-Boost!",
      desc: `Boost on all fronts! Smart Dual Panel propels Wi-Fi and
      cellular in parallel, slashing app loading latency by 25%
      and ramping up download speed by 25%. Enjoy fast and stable
      network for utmost satisfaction. Smart Network Allocation
      places foreground tasks into 'fast lane,' up the priority
      for most essential apps.`,
      datas: [
        {
          name: "Smart Dual <br /> Panel",
          desc: "WIFI plus Cellular",
        },
        {
          name: "Smart Network <br /> Allocation",
          desc: "Full Scene Acceleration",
        },
      ],
      icon: url + "/images/sec14PcInternetIcon.webp",
      video: {
        src: url + "/videos/sec14PcInternet.mp4",
        poster: url + "/images/sec14PcInternetPoster.webp",
      },
    },
    aod: {
      title: "AOD 5.0",
      subtitle: "Curate Your Own World",
      desc: `Personalize an always-on display as unique as you. Mix and match infinite widgets for weather, workout, productivity, creativity, and more. Choose your own style from a boundless variety of ever-changing displays that complement your multi-faceted lifestyle.`,
      icon: url + "/images/sec14PcAodIcon.webp",
      video: {
        src: url + "/videos/sec14PcAod.mp4",
        poster: url + "/images/sec14PcAodPoster.webp",
      },
    },
    aiWallpaper: {
      title: "AI Wallpaper",
      subtitle: "Break the Mold, Be One-of-A-Kind",
      desc: `Let AI astonish - instantly creating distinctive wallpapers tailored to you. Type a keyword and transform imagination into reality with smart tech made to inspire.`,
      icon: url + "/images/sec14PcAiWallpaperIcon.webp",
      video: {
        src: url + "/videos/sec14PcAiWallpaper.mp4",
        poster: url + "/images/sec14PcAiWallpaperPoster.webp",
      },
    },
    aiTips: {
      title: "AI Tips",
      subtitle: "Your Helpful Assistant in the AIGC Era",
      desc: `Meet your savvy AI buddy! It's like a personal assistant,
      but cooler and smarter - managing schedules, offering
      thoughtful suggestions, providing upfront services or
      reminders, and anticipating your needs when juggling
      multiple tasks. Get ready for its tips and prepare to be
      WOWed!`,
      icon: url + "/images/sec14PcAiTipsIcon.webp",
      video: {
        src: url + "/videos/sec14PcAiTips.mp4",
        poster: url + "/images/sec14PcAiTipsPoster.webp",
      },
    },
    appTwins: {
      title: "APP Twins",
      subtitle: "Mastering the Switch between Work & Life",
      desc: `Tired of managing multiple devices for different accounts?
      APP Twins have it simplified. By cloning apps, it enables
      simultaneous login to various accounts, effortlessly
      handling both personal and work profiles. Try it now on
      WhatsApp, Messenger, Snapchat, Instagram, and more.`,
      icon: url + "/images/sec14PcAppTwinsIcon.webp",
      video: {
        src: url + "/videos/sec14PcAppTwins.mp4", //黑人版本
        poster: url + "/images/sec14PcAppTwinsPoster.webp", //黑人版本
        // src: url + "/videos/sec14PcAppTwins_white.mp4",//白人版本
        // poster: url + "/images/sec14PcAppTwinsPoster_white.webp",//白人版本
      },
    },
    social: {
      title: "Social Turbo",
      subtitle: "Turbocharge the FUN of Social",
      desc: `Up your social game with Social Turbo! Tailored for
      third-party social apps, this video call feature is a rare
      gem in any smart phone of the same class: In-call beauty &
      make-up filters, fill light, AR avatars, voice change, and
      more, spicing up everyday conversations.`,
      datas: [
        {
          name: "Beauty and Make-up",
        },
        {
          name: "Fill Light",
        },
        {
          name: "AR Avatar",
        },
        {
          name: "Voice Change",
        },
      ],
      icon: url + "/images/sec14PcSocialIcon.webp",
      video: {
        src: url + "/videos/sec14PcSocial.mp4", //黑人版本
        poster: url + "/images/sec14PcSocialPoster.webp", //黑人版本
        // src: url + "/videos/sec14PcSocial_white.mp4",//白人版本
        // poster: url + "/images/sec14PcSocialPoster_white.webp",//白人版本
      },
    },
    tips: `* Evidenced by data from TECNO LAB. <br /> * Pictures, videos, and
    texts of the aforementioned page are for reference only, which may
    vary depending on the actual phone.`,
  },
}
