import { useContext } from "react"
import { Context } from "../../App"

export function FretsSettingSame() {
  const { t, language, fretsSame, setFretsSame, instrument } =
    useContext(Context)

  return (
    <div>
      {fretsSame.map((octave, octaveIndex) => {
        return (
          <div key={crypto.randomUUID()} className="widget-content">
            <div className="label">{octave[language]}</div>
            <div className="btn-container">
              <div className="fret-choice-wrapper">
                <div className="fret-choice-container">
                  <div
                    className={octave.allSelected ? "btn selected" : "btn"}
                    onClick={() => handleSelectAll(octave, octaveIndex)}
                  >
                    {octave.allSelected ? t.all : t.none}
                  </div>
                  <div
                    className="btn plus-icon-container"
                    onClick={() => toggleDropdown(octave, octaveIndex)}
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
                  {octave.frets.map((fret, fretIndex) => {
                    return (
                      <div
                        key={crypto.randomUUID()}
                        className={
                          fret.state
                            ? "fret-choice one-btn selected"
                            : "fret-choice one-btn"
                        }
                        onClick={() =>
                          handleFretChoice(octave, octaveIndex, fret, fretIndex)
                        }
                      >
                        {fret.name[instrument].map(nameOfPoint => {
                          return (
                            <div
                              className="flex-items-same"
                              key={crypto.randomUUID()}
                            >
                              {nameOfPoint[language]}
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  function handleSelectAll(octave, octaveIndex) {
    const octaveToChange = fretsSame.find(oct => oct.octave === octave.octave)
    for (let i = 0; i < octaveToChange.frets.length; i++) {
      if (octaveToChange.allSelected) {
        octaveToChange.frets[i].state = false
      } else {
        octaveToChange.frets[i].state = true
      }
    }
    octaveToChange.allSelected = !octaveToChange.allSelected

    setFretsSame(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
    console.log(fretsSame)
  }

  function toggleDropdown(octave, octaveIndex) {
    const octaveToChange = fretsSame.find(oct => oct.octave === octave.octave)
    octaveToChange.open = !octaveToChange.open

    setFretsSame(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function handleFretChoice(octave, octaveIndex, fret, fretIndex) {
    const octaveToChange = fretsSame.find(oct => oct.octave === octave.octave)
    octaveToChange.frets[fretIndex].state =
      !octaveToChange.frets[fretIndex].state
    if (allSelectedOrDeselected(octave, fretIndex)) {
      octaveToChange.allSelected = !octaveToChange.allSelected
    }

    setFretsSame(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function allSelectedOrDeselected(octave, fretIndex) {
    return (
      octave.frets.every(
        fret => fret.state === octave.frets[fretIndex].state
      ) && octave.frets[fretIndex].state !== octave.allSelected
    )
  }
}
