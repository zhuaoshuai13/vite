import { useState, useEffect } from "react"
import "./index.scss" // 创建一个单独的CSS文件来管理样式

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: { clientX: any; clientY: any }) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      requestAnimationFrame(() => updatePosition(e))
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className='custom-cursor'
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className='img'></div>
    </div>
  )
}

export default CustomCursor
