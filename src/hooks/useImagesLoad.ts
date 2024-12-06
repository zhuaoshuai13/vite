import { useState, useEffect } from "react"

const UseImagesLoad = (images: string[]) => {
  const [isLoaded, setLoaded] = useState(false)

  const loadImages = async () => {
    try {
      await Promise.all(
        images.map(async (image) => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve()
            img.onerror = () => reject()
            img.src = image
          })
        })
      )
      setLoaded(true)
    } catch (e) {
      console.log(e)
      setLoaded(true)
    }
  }

  useEffect(() => {
    loadImages()
  }, [])

  return {
    isLoaded,
  }
}

export default UseImagesLoad
