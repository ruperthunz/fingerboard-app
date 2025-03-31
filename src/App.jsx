import { RouterProvider } from "react-router-dom"
import { router } from "./router.jsx"
import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage.js"
import { translations } from "./translations.js"
import { fretStates } from "./frets.js"
import { standardStringLength } from "./standardStringLength.js"
import { equalPoints } from "./equalPoints.js"

export const Context = createContext()

const innerWidth = window.innerWidth

export function App() {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(height / 2)
  const [settingsIsOpen, setSettingsIsOpen] = useState(
    innerWidth < 700 ? false : true
  )
  const [menuIsOpen, setMenuIsOpen] = useState(innerWidth < 700 ? false : true)
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
  const [frets, setFrets] = useState(fretStates)
  const [pointsToDisplay, setPointsToDisplay] = useState(() =>
    getPointsToDisplay(pointsOn, frets, instrument)
  )
  const [unit, setUnit] = useLocalStorage("unit", "mm")
  const [fraction, setFraction] = useLocalStorage("fraction", "full")
  const [stringLength, setStringLength] = useLocalStorage(
    "string-length",
    standardStringLength[instrument][fraction][unit]
  )
  const [strings, setStrings] = useState({
    Violin: [
      { standard: "G", scordatura: "g" },
      { standard: "D", scordatura: "d" },
      { standard: "A", scordatura: "a" },
      { standard: "E", scordatura: "e" }
    ],
    Viola: [
      { standard: "C", scordatura: "c" },
      { standard: "G", scordatura: "g" },
      { standard: "D", scordatura: "d" },
      { standard: "A", scordatura: "a" }
    ],
    Cello: [
      { standard: "C", scordatura: "c" },
      { standard: "G", scordatura: "g" },
      { standard: "D", scordatura: "d" },
      { standard: "A", scordatura: "a" }
    ],
    Bass: [
      { standard: "E", scordatura: "e" },
      { standard: "A", scordatura: "a" },
      { standard: "D", scordatura: "d" },
      { standard: "G", scordatura: "g" }
    ]
  })
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [show, setShow] = useLocalStorage("show", "none")
  const [displayEP, setDisplayEP] = useState(false)
  const [equalPointsColor, setEqualPointsColor] = useLocalStorage(
    "equalPointsColor",
    "uniPlus8"
  )
  const [displayJP, setDisplayJP] = useState(false)
  const [justPointsColor, setJustPointsColor] = useLocalStorage(
    "justPointsColor",
    "uniPlus8"
  )
  const [harmonicPointsColor, setHarmonicPointsColor] = useLocalStorage(
    "harmonicPointsColor",
    "div"
  )
  const [divisions, setDivisions] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ])
  const [tune, setTune] = useState(null)

  useEffect(() => {
    setT(translations[language])
  })

  // log selectedPoints to console (just for testing)
  useEffect(() => {
    logSelectedPoints(
      pointsOn,
      fretStates,
      instrument,
      language,
      equalPointsColor
    )
  }, [pointsOn, frets, language, instrument, equalPointsColor])

  useEffect(() => {
    setPointsToDisplay(() => getPointsToDisplay(pointsOn, frets, instrument))
  }, [instrument, pointsOn, frets])

  return (
    <Context.Provider
      value={{
        height,
        setHeight,
        width,
        setWidth,
        settingsIsOpen,
        setSettingsIsOpen,
        menuIsOpen,
        setMenuIsOpen,
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
        frets,
        setFrets,
        pointsToDisplay,
        unit,
        setUnit,
        fraction,
        setFraction,
        stringLength,
        setStringLength,
        strings,
        setStrings,
        tune,
        setTune,
        soundEnabled,
        setSoundEnabled,
        show,
        setShow,
        displayEP,
        setDisplayEP,
        equalPointsColor,
        setEqualPointsColor,
        displayJP,
        setDisplayJP,
        justPointsColor,
        setJustPointsColor,
        harmonicPointsColor,
        setHarmonicPointsColor,
        divisions,
        setDivisions
      }}
    >
      <RouterProvider router={router} />
    </Context.Provider>
  )
}

function getPointsToDisplay(pointsOn, frets, instrument) {
  const selectedStrings = []
  const pointsToDisplay = []
  pointsOn.forEach((pointsOnString, index) => {
    if (pointsOnString) {
      selectedStrings.push(equalPoints[instrument][index])
    }
  })
  selectedStrings.forEach(string => {
    frets.forEach((oct, index) => {
      oct.frets.forEach((fret, fretIndex) => {
        if (fret) {
          pointsToDisplay.push(string[index][fretIndex])
        }
      })
    })
  })
  return [pointsToDisplay]
}

function logSelectedPoints(
  pointsOn,
  fretStates,
  instrument,
  language,
  equalPointsColor
) {
  const selectedStrings = []
  pointsOn.forEach((string, index) => {
    if (string) {
      selectedStrings.push(equalPoints[instrument][index])
    }
  })
  selectedStrings.forEach(string => {
    fretStates.forEach((oct, index) => {
      oct.frets.forEach((fret, fretIndex) => {
        if (fret) {
          // console.log(`Ratio: ${string[index][fretIndex].ratio}`)
          // console.log(`Name: ${string[index][fretIndex].name[language]}`)
          // console.log(
          //   `Color: ${string[index][fretIndex].colors[equalPointsColor]}`
          // )
        }
      })
    })
  })
}
