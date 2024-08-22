export interface Sec1 {
  slogen: string
  titlea: string
  infoa: string
  titleb: string
  infob: string
  titlec: string
  infoc: string
}

export interface Sec2 {
  video: {
    H: {
      src: string
      post: string
      shortSrc: string
    }
    V: {
      src: string
      post: string
      shortSrc: string
    }
  }
}

export interface Sec3 {
  f1: string
  f2: string
  f3: string
  f4: string
  f5: string
  f6: string
}

export interface Sec4 {
  title: string
}

export interface Sec5 {
  titlea: string
  infoa: string
  titleb: string
  infob: string
}

export interface Sec6 {
  photoNumber: string
  photo: string
  musicNumber: string
  music: string
  videoNumber: string
  video: string
}

export interface Sec7 {
  title: string
  info: string
  four: string
  fourGB: string
  three: string
  fiveGB: string
  tip: string
}

export interface Sec8 {
  title: string
}

export interface Sec9 {
  title: string
  info: string
  subTitlea: string
  subInfoa: string
  subTitleb: string
  subInfob: string
}

export interface Sec10 {
  title: string
  info: string
  portraits: string
  bulidings: string
  sky: string
  beach: string
  food: string
  pets: string
}

export interface Sec11 {
  title: string
  info: string
  play: string
}

export interface Sec12 {
  title: string
  info: string
}

export interface Sec13 {
  title: string
}

export interface Sec14 {
  blackTitle: string
  balckInfo: string
  blueTitle: string
  blueInfo: string
  whiteTitle: string
  whiteInfo: string
}

export interface Sec15 {
  title: string
  eight: string
  mm: string
}

export interface Sec16 {
  title: string
}

export interface Sec17 {
  title: string
  info: string
  f1: string
  f1n: string
  f1p: string
  f2: string
  f2n: string
  f2p: string
  f3: string
  f3n: string
  f3p: string
  f4: string
  f4n: string
  f5: string
  f5n: string
  f5p: string
}

export interface Sec18 {
  title: string
  info: string
}

export interface Sec19 {
  title: string
}

export interface Sec20 {
  title: string
  info: string
  f1: string
  f1n: string
  f2: string
  f2n: string
  f3: string
  f3n: string
  f4: string
  f4n: string
  day: string
  hour: string
}

export interface Sec21 {
  title: string
}

export interface Sec22 {
  title: string
  info: string
  subTitlea: string
  subInfoa: string
  subTitleb: string
  subInfob: string
  subTitlec: string
  subInfoc: string
}

export interface Sec23 {
  title: string
  info: string
}

export interface Sec24 {
  note: string
  f1: string
  f2: string
  f3: string
  f4: string
  f5: string
}

export interface RootObject {
  sec1: Sec1
  sec2: Sec2
  sec3: Sec3
  sec4: Sec4
  sec5: Sec5
  sec6: Sec6
  sec7: Sec7
  sec8: Sec8
  sec9: Sec9
  sec10: Sec10
  sec11: Sec11
  sec12: Sec12
  sec13: Sec13
  sec14: Sec14
  sec15: Sec15
  sec16: Sec16
  sec17: Sec17
  sec18: Sec18
  sec19: Sec19
  sec20: Sec20
  sec21: Sec21
  sec22: Sec22
  sec23: Sec23
  sec24: Sec24
}

export type ComponentType = {
  useGSAP?: any
  gsap?: any
  config: RootObject
  ScrollTrigger?: any
  UseObservable?: any
  responsive?: any
  container?: any
}
