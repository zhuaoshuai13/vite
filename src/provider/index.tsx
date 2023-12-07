import React, { createContext, useState, useEffect } from "react"
import { addDebouncedEventListener } from "../utils/functions"

export const ScreenContext = createContext({
  isPc: window.innerWidth > 1080,
})


const Providers = ({ children }: { children: React.ReactNode }) => {
  const [desktop, setDesktop] = useState<boolean>(window.innerWidth > 1080)

  useEffect(() => {
    // window.scrollTo(0, 0)
    setDesktop(window.innerWidth > 1080)

    const setScreenContext = () => {
      setDesktop(window.innerWidth > 1080)
    }

    setScreenContext()

    const removeListener = addDebouncedEventListener(
      window,
      "resize",
      setScreenContext,
      100
    )

    return removeListener
  }, [])

  return (
    <ScreenContext.Provider value={{ isPc: desktop }}>
      {children}
    </ScreenContext.Provider>
  )
}

export default Providers
