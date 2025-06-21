import { useContext } from "react"
import { Context } from "../../App"

export function FretsSettingIndividual() {
  const {
    t,
    language,
    pointsOn,
    fretsIndi,
    setFretsIndi,
    strings,
    instrument
  } = useContext(Context)

  return (
    <div>
      {fretsIndi.map((octave, octaveIndex) => {
        return (
          <div className="widget-content">
            <div className="label">{octave[octaveIndex][language]}</div>
            <div className="btn-container-grid">
              {octave.map((string, stringIndex) => {
                return (
                  <div className="">
                    <div
                      key={crypto.randomUUID()}
                      className="fret-choice-wrapper"
                    >
                      <div className="fret-choice-container">
                        <div
                          className={
                            string.allSelected ? "btn selected" : "btn"
                          }
                          onClick={() => handleSelectAll(string, octaveIndex)}
                        >
                          {/* here all or none instead of nth-octave */}
                          {string.allSelected ? t.all : t.none}
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
                              className={
                                fret.state
                                  ? "fret-choice selected"
                                  : "fret-choice"
                              }
                              onClick={() =>
                                handleFretChoice(
                                  fret,
                                  string,
                                  octaveIndex,
                                  stringIndex,
                                  fretIndex
                                )
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
    for (let i = 0; i < stringToChange.frets.length; i++) {
      if (stringToChange.allSelected) {
        stringToChange.frets[i].state = false
      } else {
        stringToChange.frets[i].state = true
      }
    }
    stringToChange.allSelected = !stringToChange.allSelected
    const octaveToChange = fretsIndi[octaveIndex]

    setFretsIndi(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function toggleDropdown(string, octaveIndex) {
    const stringToChange = fretsIndi[octaveIndex].find(
      str => str.string === string.string
    )
    console.log(stringToChange)
    stringToChange.open = !stringToChange.open
    const octaveToChange = fretsIndi[octaveIndex]

    setFretsIndi(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function handleFretChoice(fret, string, octaveIndex, stringIndex, fretIndex) {
    const stringToChange = fretsIndi[octaveIndex].find(
      str => str.string === string.string
    )
    console.log(stringToChange.frets[fretIndex].state)
    stringToChange.frets[fretIndex].state =
      !stringToChange.frets[fretIndex].state
    if (allSelectedOrDeselected(string, fretIndex)) {
      stringToChange.allSelected = !stringToChange.allSelected
    }
    const octaveToChange = fretsIndi[octaveIndex]

    setFretsIndi(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function allSelectedOrDeselected(string, fretIndex) {
    return (
      string.frets.every(fret => fret === string.frets[fretIndex]) &&
      string.frets[fretIndex] !== string.allSelected
    )
  }
}
