const url = window.basic_assets_href
// console.log("🚀 ~ file: config.js:2 ~ url:", url)
window.spark20proplusConfig = {
  button_text: {
    on: "ON",
    off: "OFF",
  },
  sec1: {
    // type1: 文案+图片; type2: 图片
    type: "type2",
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
        featureTitle: "120 Hz",
        featureDesc: "Pantalla curva <br /> Amoled",
      },
      {
        featureTitle: "16 GB RAM",
        featureDesc: "+256 GB ROM <br /> (8 GB + 8 GB Extendida)",
      },
    ],
    type2: {
      // kv_pc: url + "/images/sec1PcKv.webp",
      // kv_mb: url + "/images/sec1Pcmb.webp",
      kv_pc:
        "https://d3fyizz0b46qgr.cloudfront.net/global/co/spark20pro%2B/PC-1920%20X%20960.jpg",
      kv_mb:
        "https://d3fyizz0b46qgr.cloudfront.net/global/co/spark20pro%2B/Mobile-1080%20X%202367.jpg",
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
      title: ["MAYOR VOLUMNEN de 400 %", "Parlantes duales estéreo"],
      bg: {
        img_pc: url + "/images/sec2PcF1.webp",
        img_mb: url + "/images/sec2MbF1.webp",
      },
    },
    item2: {
      title: "Magic Skin 2.0 ",
      bg: {
        img_pc: url + "/images/sec2PcF2.webp",
        img_mb: url + "/images/sec2MbF2.webp",
      },
    },
    item3: {
      title: "Pantalla con protección<br> Corning® Gorilla® Glass 5",
    },
    item4: {
      title: '6,78" y 120 Hz',
      desc: "Pantalla Amoled",
    },
    item5: {
      title: ["Android 14"],
      bg: {
        img_pc: url + "/images/sec2PcF5.webp",
        img_mb: url + "/images/sec2MbF5.webp",
      },
    },
    item6: {
      title: ["108 MP", "Cámara ultrasensible "],
      bg: {
        img_pc: url + "/images/sec2PcF6.webp",
        img_mb: url + "/images/sec2MbF6.webp",
      },
    },
    item7: {
      title: ["Diseño curvo doble", "Cuerpo ultradelgado de 7,55 mm"],
      bg: {
        img_pc: url + "/images/sec2PcF7.webp",
        img_mb: url + "/images/sec2MbF7.webp",
      },
    },
    item8: {
      title: "Selfie de 32 MP",
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
      title: ["5000 mAh", "+Super Charge de 33W"],
      bg: {
        img_pc: url + "/images/sec2PcF10.webp",
        img_mb: url + "/images/sec2MbF10.webp",
      },
    },
    item11: {
      title: ["Procesador G99 ", "Ultimate"],
      bg: {
        img_pc: url + "/images/sec2PcF11.webp",
        img_mb: url + "/images/sec2MbF11.webp",
      },
    },
    item12: {
      title: ["RAM GRANDE+ROM GRANDE", "VICTORIA GRANDE"],
      title_mob: ["RAM GRANDE+ROM GRANDE, VICTORIA GRANDE"],
      data1: "hasta 16 GB",
      data2: "hasta 256GB",
      tips: "* RAM extendida de hasta 16 GB, 8 GB + 8 GB",
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
    title: "Cámara",
    desc: "Sistema de fotografía de alta resolución",
    bg: {
      img_pc: url + "/images/sec3PcBg.webp",
      img_mb: url + "/images/sec3MbBg.webp",
    },
  },
  sec4: {
    bigTitle: ["Conserva tu belleza ", "bajo cualquier luz"],
    camera: {
      title: "Cámara principal ultrasensible de 108 MP",
      subtitle: "Claridad de imagen sin precedentes en la historia de SPARK",
      desc: `Captura tu mundo con lujo de detalles con la cámara ultrasensible de 108 MP de mayor definición de la historia de SPARK. Tiene un lente gran angular con funciones propias de un modelo insignia que llevan la fotografía a otro nivel. Ya estés lejos o cerca, la claridad se mantiene. 
      Zoom 3X en sensor y 10X digital, así como estabilización de video superior, junto con tecnología de enfoque doble que se adapta inteligentemente a diversos escenarios, para proteger la claridad de tus fotografías sin importar la distancia. El sensor ultragrande de 1/1,67" y la apertura de F/1,75 se adaptan sin problema a cualquier iluminación. Ya sea brillante, contraluz o con poca luz, cada vista se destaca. La fusión multimarco HDR equilibra luces y sombras para convertir composiciones de belleza ordinaria en tomas extraordinarias. `,
      cameraVideo: {
        src: url + "/videos/sec4PcCamera.mp4",
        poster: url + "/images/sec4PcCameraPoster.webp",
      },
      datas: [
        {
          name: "108MP",
          desc: "Ultradefinición",
        },
        {
          name: "10X",
          desc: "Zoom digital",
        },
        {
          name: "Algoritmo HDR",
          desc: "Fusión de varios fotogramas",
        },
        {
          name: `1/1,67"`,
          desc: "Área de sensor  <br /> ultragrande",
        },
        {
          name: "6 P",
          desc: "Lente  <br /> ultranítido",
        },
        {
          name: "3X",
          desc: "Zoom dentro r<br /> del senso",
        },
        {
          name: "F/1.75",
          desc: "Apertura <br /> ultragrande",
        },
      ],
    },
    night_mode: {
      title: "Píxel adaptativo ultrasensible 900 %",
      subtitle: "Modo Súper Noche",
      desc: `Siente la potencia de la luz en la oscuridad de la noche. Con un pixel de fusión ultra grande que va desde 0,64 μm hasta 1,92 μm, la destacada tecnología 9-en-1 permite aprovechar la sensibilidad a la luz y así obtener 900 % más luz para tomas nocturnas para que tu brillo se destaque. El modo ultranoche lo refuerza al equilibrar el ruido y los detalles para tomas superiores con poca luz.
      ¡Bienvenida la noche! SPARK ayuda a que tu visión perfore la oscuridad.`,
      datas: [
        {
          name: "9 en 1",
          desc: "Píxel adaptativo ultrasensible",
        },
        {
          name: "1.92μm",
          desc: "Píxel de fusión ultragrande",
        },
      ],
      night_mode_img: url + "/images/sec4PcNightMode.webp", //黑人版本
      // night_mode_img: url + "/images/sec4PcNightMode_white.webp",//白人版本
      bg: url + "/images/sec4PcMoon.webp",
    },
  },
  sec5: {
    bigTitle: ["Claridad impactante. ", "Belleza brillante."],
    selfie: {
      title: "Selfie brillante de 32 MP",
      subtitle: "Aduéñate de la noche. ¡Llénala de brillo!",
      desc: `¡Conviértete en la estrella! SPARK captura cada uno de tus momentos brillantes con una impresionante cámara selfie de 32 MP, impulsada por la restauración de retratos IA y lente dorado 88.9° expansivo. 
      Ya sea que estés solo o rodeado, cada pequeña sonrisa se conserva.`,
      datas: [
        {
          name: "F/2.2",
          desc: "Apertura  <br /> amplia",
        },
        {
          name: "5P",
          desc: "Alta transmisión <br /> de luz ",
        },
      ],
      selfieVideo: {
        src: url + "/videos/sec5PcSelfie1.mp4",
        poster: url + "/images/sec5PcSelfiePoster.webp",
      },
    },
    super_flash_light: {
      title: "Luz de superflash",
      subtitle: "No es solo luz. Tiene su propia mente.",
      desc: `Las selfies se logran con facilidad, incluso en la oscuridad. Mientras el flash dual hace brillar los fondos, el algoritmo de superflash pone en capas con precisión 8 cuadros de exposición para lanzar la luz exacta que necesitas. Con luz de llenado física + sintonía fina de IA, el resultado son tus fotos halagadoras con brillo equilibrado en cualquier momento y cualquier lugar. 
      Despídete de la subexposición y la sobreexposición. ¡Cada foto es un regalo brillante!`,
      bg_icon: url + "/images/sec5PcIcon1.webp",
      image: url + "/images/sec5PcSuperFlashLight.webp", //黑人版本
      // image: url + "/images/sec5PcSuperFlashLight_white.webp",//白人版本
    },
    dual_video: {
      title: "Video dual",
      subtitle: "Adelante y atrás, las inspiraciones nunca faltan.",
      desc: `Acciona la cámara frontal y trasera. ¡Expande tu espacio creativo! Esta función interactiva te brinda un sinfín de posibilidades para potenciar tus ideas a la hora de grabar videos.`,
      // tips: "* Some products require a system update to experience Dual View.",
      bg_icon: url + "/images/sec5PcIcon2.webp",
      arrow: url + "/images/sec5PcArrowTop.webp",
      image: url + "/images/sec5PcDualVideo.webp",
    },
    slow_motion: {
      title: "Cámara lenta",
      subtitle: "Extiende los momentos fugaces, cuadro por cuadro",
      desc: `¡Perpetúa cada instante maravilloso, no importa cuán fugaz, con la función Cámara lenta! Encuentra nuevas sorpresas con cada repetición.`,
      bg_icon: url + "/images/sec5PcIcon3.webp",
      video: {
        src: url + "/videos/sec5PcSlowMotion.mp4", //黑人版本
        poster: url + "/images/sec5PcSlowMotion.webp", //黑人版本
        // src: url + "/videos/sec5PcSlowMotion_white.mp4",//白人版本
        // poster: url + "/images/sec5PcSlowMotion_white.webp",//白人版本
      },
    },
    video_2k: {
      title: "Video 2K",
      subtitle: `La calidad de video de SPARK está en un nuevo nivel`,
      desc: `Revive tus momentos épicos en claridad 2K, con nuevos descubrimientos en cada reproducción. El fondo se difumina naturalmente, para que tu héroe se destaque; el algoritmo Noche maximiza la reducción de ruido, cambiando las escenas tenues a historias vibrantes. 
      Captura los momentos de sorpresa con detalles 2K, que no pueden escapar del ojo de águila de SPARK.`,
      bg_icon: url + "/images/sec5PcIcon4.webp",
      heightQualityVideo: {
        src: url + "/videos/sec5PcVideo2k1.mp4",
        poster: url + "/images/sec5PcVideo2kPoster.webp",
      },
    },
  },
  sec6: {
    title: "Diseño",
    desc: "Diseñado para marcar tendencia",
    bg: {
      img_pc: url + "/images/sec6PcBg.webp",
      img_mb: url + "/images/sec6MbBg.webp",
    },
  },
  sec7: {
    bigTitle: [
      "Finura en el acabado y tacto",
      "Sencillez en apariencia, sofisticación hasta el infinito",
    ],
    bigTitleMb: [
      "Finura en el acabado y tacto",
      "Sencillez en apariencia, ",
      "sofisticación hasta el infinito",
    ],
    design: {
      title: `Disposición de estrellas por cuadrantes`,
      subtitle: "Un toque de lujo celestial",
      desc: `Conoce el módulo de disposición de estrellas por cuadrantes de SPARK. Con un diseño sin igual, usa el símbolo icónico de DSLR para lograr una poderosa narrativa visual de la cámara. 
      Creado con una técnica fotolitográfica de nanoescala para relojes de lujo, por primera vez incorpora un diseño 3D al mundo de los smartphones, corriendo los límites creativos aún más. 
      Sumérgete en esta sofisticación celestial.`,
    },
    phone: {
      img_pc: url + "/images/sec7PcPhone.webp",
      img_mb: url + "/images/sec7PcPhone.webp",
    },
  },
  sec8: {
    double_curved: {
      title: "Ergonomía de 56,5° Diseño curvo doble",
      subtitle: "La mejor apariencia. Máxima comodidad.",
      desc: `Verificado mediante más de 1000 evaluaciones y bases de datos de nivel mil millones sobre ergonomía móvil multiétnica, el SPARK 20 Pro+ es pionero en el diseño con una curvatura G3 sin precedentes. Con un ángulo de curvatura exclusivo de 56,5° y con un cuerpo y peso ultraligeros, ofrece la combinación justa de elegancia y comodidad que te encantará.`,
      datas: [
        {
          name: "56,5°",
          desc: "Curva doble <br/>con ángulo dorado",
        },
        {
          name: "7,55mm",
          desc: "Ultra delgado",
        },
        {
          name: "3,0mm",
          desc: "Marco medio",
        },
      ],
      bg: {
        src: url + "/videos/sec8PcDoubleCurved.mp4",
        poster: url + "/images/sec8PcDoubleCurved.webp",
      },
    },
    colorList: [
      {
        color: "Órbitas temporales",
        text_color: "#000000",
        image: {
          pc: url + "/images/sec8PcColorTemporalOrbits.webp",
          mb: url + "/images/sec8MbColorTemporalOrbits.webp",
        },
      },
      {
        color: "Escarcha lunar",
        text_color: "#000000",
        image: {
          pc: url + "/images/sec8PcColorLunarFrost.webp",
          mb: url + "/images/sec8MbColorLunarFrost.webp",
        },
      },
      // {
      //   color: "Lluvia de estrellas",
      //   text_color: "#ffffff",
      //   image: {
      //     pc: url + "/images/sec8PcColorRadiantStarstream.webp",
      //     mb: url + "/images/sec8MbColorRadiantStarstream.webp",
      //   },
      // },
      {
        color: "Magic Skin 2.0 Verde",
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
        url + "/images/sec9PcF2.webp",
        url + "/images/sec9PcF3.webp",
        url + "/images/sec9PcF4.webp",
      ],
      title: `Patrón de arena brillante`,
      subtitle: "Exterior texturizado, interior tecnológico.",
      desc: `El arte y la tecnología se unen para formar una estética asombrosa. Los recubrimientos en millones de colores crean gradientes de tonalidades delicadas. Inspirada en el universo infinito, la fotolitografía evoca texturas de ensueño. Con colores en tendencia para cada gusto, siempre encontrarás el indicado.<br />
      <span>Escarcha lunar:</span> Baila en el suave interjuego de luces y sombras <br />
      <span>Órbitas temporales:</span>  Exuda la elegancia atemporal de los valores clásicos<br />
      <span>Lluvia de estrellas</span> Irradia nobleza mientras la arena te aporta brillo estelar`,
      desc_magic_skin: `<span>Magic Skin 2.0:</span>
      La belleza se encuentra con la durabilidad. 500 % más duradero. 25 % más protección UV. El cuero mate brillante se siente como el toque de un yate de lujo.`,
      datas: [
        {
          name: "Como el vidrio",
          desc: "Mate y delicado",
        },
        {
          name: "Arena brillante 2.0",
          desc: "Nueva generación",
        },
        {
          name: "Color de moda",
          desc: "Revestimiento",
        },
      ],
      datas_magic_skin: [
        {
          name: "Cuero mate <br /> brillante",
          desc: "Mejora visual",
        },
        {
          name: "100 % <br /> reciclable",
          desc: "Ecológico",
        },
        {
          name: "Ecológico",
          desc: "Sustancia  <br /> nociva",
        },
        {
          name: "Durabilidad",
          desc: "",
        },
      ],
    },
    water: {
      title: `Tranquilidad de <br class='mob' /> nivel IP53 
      <br class='pc' /> ante  <br class='mob' />el agua y el polvo`,
      desc: ` Ofrece protección IP53 certificada contra el agua y el polvo. 
      <br class='mob' /> Deja de temer a las salpicaduras o al polvo.<br class='mob' />  Disfruta del uso libre y cómodo de SPARK.`,
      pic_title: "IP53",
      pic_desc: "Water & Dust Resistant",
      pic_bg: url + "/images/sec9PcWater.webp",
    },
  },
  sec10: {
    title: "Rendimiento",
    desc: "Creado para los obsesivos del rendimiento",
    bg: {
      img_pc: url + "/images/sec3PcBg.webp",
      img_mb: url + "/images/sec3MbBg.webp",
    },
  },
  sec11: {
    bigTitle: ["Núcleo + código", "Más rápido", "que cualquiera"],
    processor: {
      title: "Procesador G99 Ultimate",
      subtitle: "¡El procesador 4G más potente!",
      desc: `Experimenta un rendimiento sin paralelos con el último procesador MTK G99, ¡el campeón indiscutido de su clase! Ya sea uso cotidiano, contenido audiovisual o juegos, todo lo domina sin esfuerzo. ¡Las operaciones sencillas y estables son la nueva norma!`,
      datas: ["2*Cortex-A76 @2.2GHz", "6*Cortex-A55 @2.0GHz", "Mali-G57 MC2"],
      processorVideo: {
        src: url + "/videos/sec11PcProcessor.mp4",
        poster: url + "/images/sec11PcProcessorPoster.webp",
      },
    },
    engine: {
      title: "Mejora del rendimiento",
      subtitle: "con motores gemelos",
      desc: `...¡Y también está la aceleración de nivel de software! El motor Aurora impulsado por IA aumenta la tasa de lanzamiento para los principales juegos en un 85 % y para las apps populares en un 95 %. La optimización profunda del motor Darwin mejora 8 veces las tasas de cuadros, una reducción mínima de 4 °C en el aumento promedio de temperatura, para brindar una experiencia de juego excepcional y sin retrasos con calor mínimo.`,
      engine_video_text1: {
        title: "Motor Aurora 2.0",
        desc: "Despertar extremo",
      },
      engine_video_text2: {
        title: "Motor Darwin 2.0",
        desc: "Optimización de juegos",
      },
      engineVideo: {
        src: url + "/videos/sec11PcEngine.mp4",
        poster: url + "/images/sec11PcEnginePoster.webp",
      },
    },
    memory: {
      title: "Hasta 256 GB ROM <br /> + 16 GB RAM",
      subtitle: "Espacio grande. Mayor potencial",
      desc: `Captura todos los buenos recuerdos con la capacidad de memoria duplicada. Supercarga tu sistema hasta con 16 GB de RAM usando la fusión de memoria. 
      Corre rápido, sin renunciar a nada: la mejor combinación de capacidad y velocidad.`,
      datas: [
        {
          name: `Hasta  <br /> 256GB`,
          desc: "Memoria grande",
        },
        {
          name: `Hasta <br /> 16GB`,
          desc: "Fusión de memoria",
        },
        {
          name: `Sistema  <br /> delgado`,
          desc: "Limpieza profunda",
        },
      ],
      tips: "* RAM extendida de hasta 16 GB, 8 GB + 8 GB",
      memoryVideo: {
        src: url + "/videos/sec11PcMemory.mp4",
        poster: url + "/images/sec11PcMemoryPoster.webp",
      },
    },
    battery: {
      title: "Batería grande de 5000 mAh Super Charge de 33W (Tipo C)",
      subtitle: "Resistencia épica, Revive rápido",
      desc: `Despierta tu superpoder con la superbatería de 5000 mAh, alimentada por la supercarga de 33W. Mira cómo revive como si fuera Superman, fortalecido con una vida de servicio extendida para permitir el uso prolongado.`,
      datas: [
        {
          name: `5000 mAh`,
          desc: "Superbatería",
        },
        {
          name: `33W`,
          desc: "Super Charge",
        },
        {
          name: `Tipo C`,
          desc: "Interfaz",
        },
      ],
      batteryVideo: {
        src: url + "/videos/sec11PcBattery.mp4",
        poster: url + "/images/sec11PcBatteryPoster.webp",
      },
    },
  },
  sec12: {
    title: "Audio y video de  <br class='mob' /> última generación",
    desc: "Una experiencia sensorial completa",
    bg: {
      img_pc: url + "/images/sec3PcBg.webp",
      img_mb: url + "/images/sec3MbBg.webp",
    },
  },
  sec13: {
    bigTitle: ["Consiente todos los sentidos"],
    bigTitleMb: ["Consiente todos", "los sentidos"],
    speaker: {
      title: `Altavoces duales estéreo con sonido DTS<br class='mob' /> Gran volumen de 400 %`,
      desc: `Siente la calidad del sonido superior en cualquier lugar. Sumérgete en el verdadero estéreo con volumen impulsado en un 200 %, enriquecido con DTS para bajos profundos y prevención de distorsión, para lograr una sensación cinemática en el hogar. 
      La tecnología adaptativa de canales se alinea inteligentemente con la orientación de dispositivos, para que te muevas como quieras durante los videos y los juegos sin comprometer la excelencia auditiva. 
      También cuida tu empresa: Alterna fácilmente entre modos de manos libres y ocupadas, con el algoritmo Volume Plus para lograr llamadas 400 % más claras en entornos ruidosos.`,
      small_volume: "100% Volume",
      big_volume: "<span>400%</span> Big volume",
      datas: [
        {
          name: `Parlantes duales estéreo`,
          desc: "Aumento del volumen",
        },
        {
          name: `Alta resolución`,
          desc: "Audio",
        },
        {
          name: `Hi-Res-img`,
          desc: "",
          type: "img",
          dts_icon: url + "/images/sec13PcHiRes.webp",
        },
        {
          name: `Rastreo binaural`,
          desc: "Tecnología",
        },
        {
          name: `Volumen Plus`,
          desc: "Sonido fuerte",
        },
        {
          name: `DTS-img`,
          desc: "Procesamiento de audio",
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
      title: "Llamadas con micrófono doble y cancelación de ruido",
      subtitle: "Escucha y sé escuchado. ¡Chatea sin ruido!",
      desc: `Los micrófonos dobles potencian el sonido claro e impecable. El micrófono principal captura tu voz mientras que el secundario captura el ruido de fondo para eliminarlo, con la ayuda de la cancelación de ruido mediante IA para lograr comunicaciones impecables.
      Las conversaciones claras y cristalinas fluyen libremente.`,
      img: {
        mic_icon: url + "/images/sec13PcMic.webp",
        voice_red: url + "/images/sec13PcVoiceRed.webp",
        voice_blue: url + "/images/sec13PcVoiceBlue.webp",
      },
    },
    screen: {
      title: `Pantalla curva<br />  Amoled de 120 Hz`,
      subtitle: "Imágenes nítidas. Imágenes vívidas.",
      desc: `Lideramos nuestra clase con la pantalla curva AMOLED: Relación pantalla a montura de 93 % para vistas superexpansivas; Gama de colores P3 para presentación de colores en escala cinemática; brillo superior de 1000 nits para tener visibilidad hasta bajo la luz del sol; actualización adaptativa con tasa de muestreo de toque instantáneo de 1500 Hz para ultrasuavidad y responsividad; Smart Refresh 3.0 para autoadaptación y hasta 5 % de ahorro de energía; y material de vidrio tope de gama para duplicar la resistencia a los rayones y la protección contra daños para durabilidad sin defectos.`,
      datas: [
        {
          name: `Pantalla  <br /> curva`,
          desc: "AMOLED de 6,78''",
        },
        {
          name: `Hasta 1000 <br /> nits`,
          desc: "Luminosidad",
        },
        {
          name: `Atenuación PWM <br /> de 2160 Hz`,
          desc: "Agradable para la vista",
        },
        {
          name: `120Hz`,
          desc: "Tasas de  <br class='mob'/>actualización adaptativas",
        },
        {
          name: `Pantalla de <br class='mob'/> 1070 millones`,
          desc: "de colores",
        },
        {
          name: `Smart <br class='mob'/> Refresh 3.1`,
          desc: "Consumo equilibrado <br class='mob'/> de energía",
        },
      ],
      phone: {
        img_pc: url + "/images/sec13PcScreen.webp",
        img_mb: url + "/images/sec13PcScreen.webp",
      },
    },
    fod: {
      title: "FOD de nivel de milisegundos",
      subtitle: "Desbloqueo con toque. El futuro ya llegó.",
      desc: "Seguridad sin inconvenientes, instantáneamente con tus dedos. Desbloquea en milisegundos con verificación con huella digital en pantalla. No más contraseñas; no más acciones adicionales. Un toque y tu mundo inteligente se despertará con elegancia.",
      phone: {
        img_pc: url + "/images/sec13PcFod.webp",
        img_mb: url + "/images/sec13PcFod.webp",
      },
    },
  },
  sec14: {
    hios: {
      title: "HiOS14 Base en Android 14",
      bg: {
        img_pc: url + "/images/sec14PcHios.webp",
        img_mb: url + "/images/sec14MbHios.webp",
      },
    },
    dynamicPort: {
      title: "Dynamic Port",
      subtitle: "Siempre activo, nunca obstaculizando",
      desc: `El Dynamic Port desarrollado por Tecno se fusiona con la pantalla con agujero para darte acceso antes que nadie a este dispositivo de vanguardia. 
      El diseño futurista y la integración intuitiva le dan nueva vida al agujero de la cámara frontal: muestra mensajes y ofrece servicios front-end al tiempo que llama la atención de los demás con su atractivo envidiable.`,
      icon: url + "/images/sec14PcDynamicPortIcon.webp",
      video: {
        src: url + "/videos/sec14PcDynamicPort.mp4",
        poster: url + "/images/sec14PcDynamicPortPoster.webp",
      },
    },
    ca2: {
      title: "4G CA 2.0",
      subtitle: "Descarga como un cohete, lleva la delantera",
      desc: `Como si condujeras en una super autopista muy ancha, 4G CA 2.0 permite que los canales de red duales se comuniquen en simultáneo para maximizar la velocidad de descarga, mejorando hasta en un 130 %. Incluso en redes débiles o congestionadas logra mejoras considerables.`,
      icon: url + "/images/sec14PcCa2Icon.webp",
      video: {
        src: url + "/videos/sec14PcCa2.mp4",
        poster: url + "/images/sec14PcCa2Poster.webp",
      },
    },
    internet: {
      title: "Mejora inteligente de velocidad de Internet",
      subtitle: "¡Recorre Internet con Multi-Boost!",
      desc: `¡Mejoras en todos los frentes! 
      El panel Smart Dual impulsa Wi-Fi y celular en paralelo, reduciendo la latencia de carga de apps en un 25 % e incrementando la velocidad de descarga en un 25 %. Disfruta de una red rápida y estable para tu mayor satisfacción. 
      La asignación de red inteligente coloca las tareas de primer plano en el "carril rápido" y eleva la prioridad para las apps más esenciales.`,
      datas: [
        {
          name: "Panel Smart  <br /> Dual",
          desc: "WIFI más celular",
        },
        {
          name: "Asignación de  <br /> red inteligente",
          desc: "Aceleración de escena completa",
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
      subtitle: "Selecciona tu propio mundo",
      desc: `Personaliza tu pantalla siempre encendida de una forma tan particular como tú. Mezcla y combina widgets infinitos para clima, ejercicio, productividad, creatividad y más. Elige tu propio estilo de una variedad ilimitada de pantallas cambiantes que complementan tu estilo de vida multifacético.`,
      icon: url + "/images/sec14PcAodIcon.webp",
      video: {
        src: url + "/videos/sec14PcAod.mp4",
        poster: url + "/images/sec14PcAodPoster.webp",
      },
    },
    aiWallpaper: {
      title: "Fondo de pantalla de IA",
      subtitle: "Rompe el molde, sé el único en tu tipo",
      desc: `Deja que la IA te sorprenda al crear fondos de pantalla personalizados para ti. Escribe una palabra clave y transforma la imaginación en realidad con tecnología inteligente creada para inspirar.`,
      icon: url + "/images/sec14PcAiWallpaperIcon.webp",
      video: {
        src: url + "/videos/sec14PcAiWallpaper.mp4",
        poster: url + "/images/sec14PcAiWallpaperPoster.webp",
      },
    },
    aiTips: {
      title: "Consejos de IA",
      subtitle: "Tu gran asistente en la era de AIGC",
      desc: `¡Conoce a tu amigo experto de IA! Es como un asistente personal, pero de forma más inteligente e interesante, ya que administra agendas, brinda sugerencias ponderadas, ofrece servicios o recordatorios adelantados y anticipa tus necesidades cuando manejas varias tareas. 
      ¡Prepárate para sus sugerencias y para que te impresione!`,
      icon: url + "/images/sec14PcAiTipsIcon.webp",
      video: {
        src: url + "/videos/sec14PcAiTips.mp4",
        poster: url + "/images/sec14PcAiTipsPoster.webp",
      },
    },
    appTwins: {
      title: "APP Twins",
      subtitle: "Domina la alternancia entre vida y trabajo",
      desc: `¿Te cansa gestionar varios dispositivos para cuentas diferentes? APP Twins te lo simplifican. Al clonar apps, permite iniciar sesión a varias cuentas en simultáneo para manejar sin problemas tanto los perfiles personales como laborales. Pruébalo ahora en WhatsApp, Messenger, Snapchat, Instagram y más.`,
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
      subtitle: "Aumenta la diversión de las redes sociales",
      desc: `¡Mejora tu experiencia social con Social Turbo! Adaptada a apps sociales de terceros, está función de videollamada es una joya única en cualquier teléfono de la misma clase: Filtros de belleza y maquillaje dentro de la llamada, luz de relleno, avatares de RA, cambio de voz, y más, para subir el nivel de las conversaciones cotidianas.`,
      datas: [
        {
          name: "Belleza y maquillaje",
        },
        {
          name: "Luz de relleno",
        },
        {
          name: "Avatar de RA",
        },
        {
          name: "Cambio de voz",
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
    tips: `* Evidenciado por datos de TECNO LAB. <br /> * Las imágenes, videos y textos de la página mencionado son únicamente a modo de referencia y pueden variar en función del teléfono real.`,
  },
}
