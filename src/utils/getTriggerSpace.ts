export const getTriggerSpace = (ele: HTMLElement | null, navHeight: number) => {
  if (ele) {
    return (window.innerHeight - ele?.offsetHeight - navHeight) / 2 + navHeight
  }
  return window.innerHeight
}
