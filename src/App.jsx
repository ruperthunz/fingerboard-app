import { RouterProvider } from "react-router-dom"
import { router } from "./router.jsx"
import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage.js"
import { translations } from "./translations.js"
import { standardStringLength } from "./standardStringLength.js"

export const Context = createContext()

export function App() {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(height / 2)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [instrument, setInstrument] = useLocalStorage("instrument", "Violin")
  const [pitch, setPitch] = useLocalStorage("pitch", 440)
  const [language, setLanguage] = useLocalStorage("language", "English")
  const [t, setT] = useState(translations.English)
  const [pointsOn, setPointsOn] = useLocalStorage("points_on", [
    true,
    true,
    true,
    true
  ])
  const [unit, setUnit] = useLocalStorage("unit", "mm")
  const [fraction, setFraction] = useLocalStorage("fraction", "full")
  const [stringLength, setStringLength] = useLocalStorage(
    "string-length",
    standardStringLength[instrument][fraction][unit]
  )
  const [show, setShow] = useLocalStorage("show", "none")
  const [equalPointsColor, setEqualPointsColor] = useLocalStorage(
    "equalPointsColor",
    "uniPlus8"
  )
  const [justPointsColor, setJustPointsColor] = useLocalStorage(
    "justPointsColor",
    "uniPlus8"
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
        pitch,
        setPitch,
        pointsOn,
        setPointsOn,
        unit,
        setUnit,
        fraction,
        setFraction,
        stringLength,
        setStringLength,
        show,
        setShow,
        equalPointsColor,
        setEqualPointsColor,
        justPointsColor,
        setJustPointsColor
      }}
    >
      <RouterProvider router={router} />
    </Context.Provider>
  )
}
