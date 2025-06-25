import { useContext } from "react"
import { Context } from "../../App"

export function FretsSettingSame() {
  const { t, language, fretsSame, setFretsSame, instrument } =
    useContext(Context)

  const stateClasses = ["", "selected", "ghost"]
  const stateTranslations = [t.none, t.all, t.ghost]

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
                    className={`btn ${stateClasses[octave.allSelected]}`}
                    onClick={() => handleSelectAll(octave, octaveIndex)}
                  >
                    {stateTranslations[octave.allSelected]}
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
                        className={`fret-choice one-btn ${
                          stateClasses[fret.state]
                        }`}
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
    octaveToChange.allSelected = (octaveToChange.allSelected + 1) % 3
    for (let i = 0; i < octaveToChange.frets.length; i++) {
      octaveToChange.frets[i].state = octaveToChange.allSelected
    }

    setFretsSame(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
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
      (octaveToChange.frets[fretIndex].state + 1) % 3
    if (allSelectedOrDeselected(octave, fretIndex)) {
      octaveToChange.allSelected = octaveToChange.frets[fretIndex].state
    }

    setFretsSame(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function allSelectedOrDeselected(octave, fretIndex) {
    return octave.frets.every(
      fret => fret.state === octave.frets[fretIndex].state
    )
  }
}
