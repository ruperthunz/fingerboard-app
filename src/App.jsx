import { RouterProvider } from "react-router-dom"
import { router } from "./router.jsx"
import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage.js"
import { translations } from "./translations.js"

export const Context = createContext()

export function App() {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(height / 2)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [instrument, setInstrument] = useLocalStorage("instrument", "Violin")
  const [language, setLanguage] = useLocalStorage("language", "English")
  const [t, setT] = useState(translations.English)
  const [pointsOn, setPointsOn] = useLocalStorage("points_on", [
    true,
    true,
    true,
    true
  ])
  const [unit, setUnit] = useLocalStorage("unit", "mm")
  const [stringLength, setStringLength] = useLocalStorage(
    "string_length",
    "4/4"
  )

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
    setT(translations[language])
  })

  useEffect(() => {
    setWidth(height / 2)
  }, [height])

  return (
    <Context.Provider
      value={{
        height,
        width,
        settingsOpen,
        setSettingsOpen,
        menuOpen,
        setMenuOpen,
        instrument,
        setInstrument,
        language,
        setLanguage,
        t,
        setT,
        pointsOn,
        setPointsOn,
        unit,
        setUnit,
        stringLength,
        setStringLength
      }}
    >
      <RouterProvider router={router} />
    </Context.Provider>
  )
}
