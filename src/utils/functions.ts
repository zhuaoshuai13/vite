export const addDebouncedEventListener = (
  element: Window | HTMLElement,
  event: string,
  callback: any,
  delay: number
) => {
  let timeout: any
  const debouncedCallback = (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(...args), delay)
  }
  element.addEventListener(event, debouncedCallback)
}