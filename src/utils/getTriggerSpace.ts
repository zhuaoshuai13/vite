export const getTriggerSpace = (ele: HTMLElement | null, navHeight = 0) => {
  if (ele) {
    return (window.innerHeight - ele?.offsetHeight - navHeight) / 2 + navHeight
  }
  return window.innerHeight
}
