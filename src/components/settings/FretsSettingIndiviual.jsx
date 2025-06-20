import { useContext } from "react"
import { Context } from "../../App"
import { OpenString } from "./OpenString"

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

  // console.log(fretsIndi)

  return (
    <div>
      {pointsOn.map((stringIsSelected, index) => {
        if (stringIsSelected) {
          const stringName = strings[instrument][index].scordatura
          return (
            <div>
              <OpenString key={crypto.randomUUID()} string={stringName} />
              <div className="widget-content" key={crypto.randomUUID()}>
                <div className="btn-container">
                  {fretsIndi[index].map((octave, octaveIndex) => {
                    return (
                      <div
                        key={crypto.randomUUID()}
                        className="fret-choice-wrapper"
                      >
                        <div className="fret-choice-container">
                          <div
                            className={
                              octave.allSelected ? "btn selected" : "btn"
                            }
                            onClick={() => handleSelectAll(octave)}
                          >
                            {octave[language]}
                          </div>
                          <div
                            className="btn plus-icon-container"
                            onClick={() => toggleDropdown(octave, index)}
                          >
                            <div
                              className={
                                octave.open ? "plus-icon rotate45" : "plus-icon"
                              }
                            >
                              <div className="plus-icon-line plus-icon-line1"></div>
                              <div className="plus-icon-line plus-icon-line2"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            octave.open
                              ? "fret-dropdown-container show"
                              : "fret-dropdown-container"
                          }
                        >
                          {octave.frets.map((fret, index) => {
                            return (
                              <div
                                key={crypto.randomUUID()}
                                className={
                                  fret.state
                                    ? "fret-choice selected"
                                    : "fret-choice"
                                }
                                onClick={() => handleFretChoice(octave, index)}
                              >
                                {fret.name[instrument][language]}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                    // }
                  })}
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )

  function handleSelectAll(octave) {
    const octaveToChange = frets.find(oct => oct.id === octave.id)
    for (let i = 0; i < octaveToChange.frets.length; i++) {
      if (octaveToChange.allSelected) {
        octaveToChange.frets[i] = false
      } else {
        octaveToChange.frets[i] = true
      }
    }
    octaveToChange.allSelected = !octaveToChange.allSelected
    setFrets(currentFrets => {
      return currentFrets.toSpliced(octave.id, 1, octaveToChange)
    })
  }

  function toggleDropdown(octave, index) {
    const octaveToChange = fretsIndi[index].find(
      oct => oct.octave === octave.octave
    )
    console.log(octaveToChange)
    octaveToChange.open = !octaveToChange.open
    const stringToChange = fretsIndi[index]

    setFretsIndi(currentFrets => {
      return currentFrets.toSpliced(index, 1, stringToChange)
    })
  }

  function handleFretChoice(octave, index) {
    const octaveToChange = frets.find(oct => oct.id === octave.id)
    octaveToChange.frets[index] = !octaveToChange.frets[index]
    if (allSelectedOrDeselected(octave, index)) {
      octaveToChange.allSelected = !octaveToChange.allSelected
    }
    setFrets(currentFrets => {
      return currentFrets.toSpliced(octave.id, 1, octaveToChange)
    })
  }

  function allSelectedOrDeselected(octave, index) {
    return (
      octave.frets.every(fret => fret === octave.frets[index]) &&
      octave.frets[index] !== octave.allSelected
    )
  }
}
