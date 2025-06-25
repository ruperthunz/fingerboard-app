import { useContext } from "react"
import { Context } from "../../App"

export function FretsSettingIndividual() {
  const { t, language, fretsIndi, setFretsIndi, instrument } =
    useContext(Context)

  const stateClasses = ["", "selected", "ghost"]
  const stateTranslations = [t.none, t.all, t.ghost]

  return (
    <div>
      {fretsIndi.map((octave, octaveIndex) => {
        return (
          <div className="widget-content" key={crypto.randomUUID()}>
            <div className="label">{octave[octaveIndex][language]}</div>
            <div className="btn-container-grid">
              {octave.map((string, stringIndex) => {
                return (
                  <div key={crypto.randomUUID()} className="btn-container">
                    <div className="fret-choice-wrapper">
                      <div className="fret-choice-container">
                        <div
                          className={`btn ${stateClasses[string.allSelected]}`}
                          onClick={() => handleSelectAll(string, octaveIndex)}
                        >
                          {stateTranslations[string.allSelected]}
                        </div>
                        <div
                          className="btn plus-icon-container"
                          onClick={() => toggleDropdown(string, octaveIndex)}
                        >
                          <div
                            className={
                              string.open ? "plus-icon rotate45" : "plus-icon"
                            }
                          >
                            <div className="plus-icon-line plus-icon-line1"></div>
                            <div className="plus-icon-line plus-icon-line2"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          string.open
                            ? "fret-dropdown-container show"
                            : "fret-dropdown-container"
                        }
                      >
                        {string.frets.map((fret, fretIndex) => {
                          return (
                            <div
                              key={crypto.randomUUID()}
                              className={`fret-choice ${
                                stateClasses[fret.state]
                              }`}
                              onClick={() =>
                                handleFretChoice(string, octaveIndex, fretIndex)
                              }
                            >
                              {fret.name[instrument][language]}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )

  function handleSelectAll(string, octaveIndex) {
    const stringToChange = fretsIndi[octaveIndex].find(
      str => str.string === string.string
    )
    stringToChange.allSelected = (stringToChange.allSelected + 1) % 3
    for (let i = 0; i < stringToChange.frets.length; i++) {
      // if (stringToChange.allSelected) {
      //   stringToChange.frets[i].state = false
      // } else {
      //   stringToChange.frets[i].state = true
      // }
      stringToChange.frets[i].state = stringToChange.allSelected
    }
    const octaveToChange = fretsIndi[octaveIndex]

    setFretsIndi(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function toggleDropdown(string, octaveIndex) {
    const stringToChange = fretsIndi[octaveIndex].find(
      str => str.string === string.string
    )
    stringToChange.open = !stringToChange.open
    const octaveToChange = fretsIndi[octaveIndex]

    setFretsIndi(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function handleFretChoice(string, octaveIndex, fretIndex) {
    const stringToChange = fretsIndi[octaveIndex].find(
      str => str.string === string.string
    )
    stringToChange.frets[fretIndex].state =
      (stringToChange.frets[fretIndex].state + 1) % 3
    if (allSelectedOrDeselected(string, fretIndex)) {
      stringToChange.allSelected = stringToChange.frets[fretIndex].state
    }
    const octaveToChange = fretsIndi[octaveIndex]

    setFretsIndi(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function allSelectedOrDeselected(string, fretIndex) {
    return string.frets.every(
      fret => fret.state === string.frets[fretIndex].state
    )
  }
}
