import { RouterProvider } from "react-router-dom"
import { router } from "./router.jsx"
import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage.js"
import { translations } from "./translations.js"

export const Context = createContext()

export function App() {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(height / 2)
  const [instrument, setInstrument] = useLocalStorage("instrument", "")
  const [language, setLanguage] = useLocalStorage("language", "English")
  const [t, setT] = useState(translations.de)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setHeight(window.innerHeight)
  //   }
  //   window.addEventListener("resize", handleResize)

  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // }, [])

  useEffect(() => {
    setWidth(height / 2)
  }, [height])

  return (
    <Context.Provider
      value={{
        height,
        width,
        instrument,
        setInstrument,
        language,
        setLanguage,
        t,
        setT
      }}
    >
      <RouterProvider router={router} />
    </Context.Provider>
  )
}
