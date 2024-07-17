export const computepx = (num: number) => {
  const a = num * (1 / 19.2)
  return `${a}vw`
}

export const computenum = (num: number) => {
  // 获取当前屏幕高度
  const height = window.innerHeight

  const res = num * (1 / 1920) * height
  console.log(res)
  return res.toFixed(0)
}
