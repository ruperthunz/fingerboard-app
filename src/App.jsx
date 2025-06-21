import { RouterProvider } from "react-router-dom"
import { router } from "./router.jsx"
import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage.js"
import { translations } from "./translations.js"
import { fretStates } from "./frets.js"
import { fretStatesIndi } from "./frets.js"
import { standardStringLength } from "./standardStringLength.js"
import { openStrings } from "./openStrings.js"
import { equalPoints } from "./equalPoints.js"
import { justPoints } from "./justPoints.js"
import { harmonicPoints } from "./harmonicPoints.js"

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
  const [displayOpenStrings, setDisplayOpenStrings] = useState([
    false,
    false,
    false,
    false
  ])
  const [sameOrIndividual, setSameOrIndividual] = useLocalStorage(
    "sameOrIndividual",
    "same"
  )
  const [frets, setFrets] = useState(fretStates)
  const [fretsIndi, setFretsIndi] = useState(fretStatesIndi)
  const [openStringsToDisplay, setOpenStringsToDisplay] = useState(() =>
    getOpenStringsToDisplay(pointsOn, instrument)
  )
  const [equalPointsToDisplay, setEqualPointsToDisplay] = useState(() =>
    getEqualPointsToDisplay(pointsOn, frets, instrument)
  )
  const [justPointsToDisplay, setJustPointsToDisplay] = useState(() =>
    getJustPointsToDisplay(pointsOn, frets, instrument)
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
  const [harmonicPointsToDisplay, setHarmonicPointsToDisplay] = useState(() =>
    getHarmonicPointsToDisplay(pointsOn, instrument, divisions)
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
    setEqualPointsToDisplay(() =>
      getEqualPointsToDisplay(pointsOn, frets, instrument)
    )
  }, [instrument, pointsOn, frets])

  useEffect(() => {
    setJustPointsToDisplay(() =>
      getJustPointsToDisplay(pointsOn, frets, instrument)
    )
  }, [instrument, pointsOn, frets])

  useEffect(() => {
    setHarmonicPointsToDisplay(() =>
      getHarmonicPointsToDisplay(pointsOn, instrument, divisions)
    )
  }, [divisions, instrument, pointsOn])

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
        displayOpenStrings,
        setDisplayOpenStrings,
        sameOrIndividual,
        setSameOrIndividual,
        frets,
        setFrets,
        fretsIndi,
        setFretsIndi,
        equalPointsToDisplay,
        justPointsToDisplay,
        harmonicPointsToDisplay,
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

function getOpenStringsToDisplay(pointsOn, instrument) {
  const selectedStrings = []
  const openStringsToDisplay = []
  pointsOn.forEach((pointsOnString, index) => {
    if (pointsOnString) {
      selectedStrings.push(openStrings[instrument][index])
    }
  })
  // selectedStrings.forEach(string => {
  //   frets.forEach((oct, index) => {
  //     oct.frets.forEach((fret, fretIndex) => {
  //       if (fret) {
  //         equalPointsToDisplay.push(string[index][fretIndex])
  //       }
  //     })
  //   })
  // })
  return openStringsToDisplay
}

function getEqualPointsToDisplay(pointsOn, frets, instrument) {
  const selectedStrings = []
  const equalPointsToDisplay = []
  pointsOn.forEach((pointsOnString, index) => {
    if (pointsOnString) {
      selectedStrings.push(equalPoints[instrument][index])
    }
  })
  selectedStrings.forEach(string => {
    frets.forEach((oct, index) => {
      oct.frets.forEach((fret, fretIndex) => {
        if (fret) {
          equalPointsToDisplay.push(string[index][fretIndex])
        }
      })
    })
  })
  return equalPointsToDisplay
}

function getJustPointsToDisplay(pointsOn, frets, instrument) {
  const selectedStrings = []
  const justPointsToDisplay = []
  pointsOn.forEach((pointsOnString, index) => {
    if (pointsOnString) {
      selectedStrings.push(justPoints[instrument][index])
    }
  })
  selectedStrings.forEach(string => {
    frets.forEach((oct, index) => {
      oct.frets.forEach((fret, fretIndex) => {
        if (fret) {
          const justPoints = string[index].filter(
            point => point.number === fretIndex + 1
          )
          justPointsToDisplay.push(...justPoints)
        }
      })
    })
  })
  return justPointsToDisplay
}

function getHarmonicPointsToDisplay(pointsOn, instrument, divisions) {
  const selectedStrings = []
  const harmonicPointsToDisplay = []
  pointsOn.forEach((pointsOnString, index) => {
    if (pointsOnString) {
      selectedStrings.push(harmonicPoints[instrument][index])
    }
  })
  // console.log(selectedStrings)
  selectedStrings.forEach(string => {
    divisions.map((division, index) => {
      if (division) {
        string[index].map(point => {
          harmonicPointsToDisplay.push(point)
        })
        // string.map(div => {
        // harmonicPointsToDisplay.push(div)
        // })
      }
    })
  })
  return harmonicPointsToDisplay
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
