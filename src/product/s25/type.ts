interface Section1 {
  bigTitle: string
  titlea: string
  titleb: string
  titlec: string
  titled: string
  titlee: string
  titlef: string
  desca: string
  descb: string
  descc: string
  descd: string
  desce: string
  descf: string
  watch: string
}

interface Section2 {
  f1: string
  f2: string
  f3: string
  scale: string
}

interface Section3 {
  f1a: string
  f1b: string
  f2a: string
  f2b: string
  f2c: string
  f2d: string
  f2f: string
  f2g: string
  f3: string
  f4a: string
  f4b: string
  f5a: string
  f5b: string
  f6a: string
  f6b: string
  f7a: string
  f7b: string
  f8a: string
  f8b: string
  f9a: string
  f9b: string
}

interface Section4 {
  titlea: string
  titleb: string
  desc: string
}

interface Section5 {
  title: string
  desc: string
  f1a: string
  f1b: string
  f2a: string
  f2b: string
  f3a: string
  f3b: string
  f4a: string
  f4b: string
  f5a: string
  f5b: string
  f6a: string
  f6b: string
  f7a: string
  f7b: string
  f8a: string
  f8b: string
  f9a: string
  f9b: string
}

interface Section6 {
  title: string
  desc: string
}

// Define interfaces for other sections similarly
interface Section7 {
  titlea: string
  desca: string
  titleb: string
  descb: string
}

interface Section8 {
  titlea: string
  titleb: string
  desc: string
}

interface Section9 {
  title: string
  desc: string
}

interface Section10 {
  titlea: string
  desca: string
  colora: string
  infoa: string
  colorb: string
  infob: string
  titleb: string
  descb: string
  colorc: string
  infoc: string
}

interface Section11 {
  title: string
  desc: string
  info: string
  f1: string
  f2: string
  f3: string
}

interface Section12 {
  title: string
  desc: string
}

interface Section13 {
  titlea: string
  titleb: string
  desc: string
}

interface Section14 {
  title: string
  desc: string
  f1a: string
  f1b: string
  f1c: string
  f2a: string
  f2b: string
  f2c: string
}

interface Section15 {
  title: string
  desc: string
}

interface Section16 {
  title: string
  desc: string
  f1a: string
  f1b: string
  f2a: string
  f2b: string
  f3a: string
  f3b: string
}

interface Section17 {
  titlea: string
  desca: string
  titleb: string
  descb: string
}

interface Section18 {
  titlea: string
  titleb: string
  desc: string
}

interface Section19 {
  f1a: string
  f1b: string
  f1c: string
  f1d: string
  f2a: string
  f2b: string
  f2c: string
  f2d: string
}

interface Section20 {
  title: string
  desc: string
  tipsa: string
  tipsb: string
  tipsc: string
  tipsd: string
}

interface Section21 {
  title: string
  subTitlea: string
  infoa: string
  subTitleb: string
  off: string
  on: string
  hdr: string
}

interface Section22 {
  title: string
  desc: string
  f1: string
  f2: string
  f3: string
}

interface Section23 {
  title: string
  desc: string
}

interface Section24 {
  titlea: string
  titleb: string
  desc: string
}

interface Section25 {
  title: string
  desc: string
}

interface Section26 {
  android: {
    title: string
    desc: string
  }
  gpt: {
    title: string
    desc: string
  }
  aiCall: {
    title: string
  }
  aiWallpaper: {
    title: string
  }
  askAi: {
    title: string
  }
  dynamicBar: {
    title: string
    desc: string
  }
  aod: {
    title: string
    desc: string
  }
  infrared: {
    title: string
    desc: string
  }
  nfc: {
    title: string
    desc: string
  }
  dts: {
    title: string
    desc: string
  }
}

interface Section27 {
  title: string
  desc: string
}

interface Section28 {
  notes: string
  f1: string
  f2: string
  f3: string
  f4: string
  f5: string
  f6: string
  f7: string
  f8: string
  f9: string
  f10: string
  f11: string
  f12: string
  f13: string
  f14: string
}

interface VideoInner {
  src: string
  post: string
}

interface Video {
  pc: VideoInner
  mob: VideoInner
}

interface video {
  sec2: Video
  sec23: Video
  fullVideo: Video
}

// Define the overall configuration interface
interface S25ConfigType {
  sec1: Section1
  sec2: Section2
  sec3: Section3
  sec4: Section4
  sec5: Section5
  sec6: Section6
  sec7: Section7
  sec8: Section8
  sec9: Section9
  sec10: Section10
  sec11: Section11
  sec12: Section12
  sec13: Section13
  sec14: Section14
  sec15: Section15
  sec16: Section16
  sec17: Section17
  sec18: Section18
  sec19: Section19
  sec20: Section20
  sec21: Section21
  sec22: Section22
  sec23: Section23
  sec24: Section24
  sec25: Section25
  sec26: Section26
  sec27: Section27
  sec28: Section28
  video: video
}

export type CompontentType = {
  useGSAP?: any
  gsap?: any
  config: S25ConfigType
  ScrollTrigger?: any
  UseObservable?: any
  responsive?: any
  container?: any
}
