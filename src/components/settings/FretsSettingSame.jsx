import { useContext } from "react"
import { Context } from "../../App"
import { OpenStrings } from "./OpenStrings"

export function FretsSettingSame() {
  const { t, language, frets, setFrets } = useContext(Context)

  return (
    <div className="">
      <OpenStrings />
      <div className="widget-content">
        <div className="btn-container">
          {frets.map((octave, index) => {
            return (
              <div key={octave.English} className="fret-choice-wrapper">
                <div className="fret-choice-container">
                  <div
                    className={octave.allSelected ? "btn selected" : "btn"}
                    onClick={() => handleSelectAll(octave)}
                  >
                    {octave[language]}
                  </div>
                  <div
                    className="btn plus-icon-container"
                    onClick={() => toggleDropdown(octave)}
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
                          fret ? "fret-choice selected" : "fret-choice"
                        }
                        onClick={() => handleFretChoice(octave, index)}
                      >
                        {index + 1}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
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

  function toggleDropdown(octave) {
    const octaveToChange = frets.find(oct => oct.octave === octave.octave)
    octaveToChange.open = !octaveToChange.open
    setFrets(currentFrets => {
      return currentFrets.toSpliced(octave.octave, 1, octaveToChange)
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
