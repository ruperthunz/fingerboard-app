import { useContext } from "react"
import { Context } from "../../App"

// const octaves = ["firstOctave", "secondOctave", "thirdOctave"]
const dropdowns = [false, false, false]

export function FretsSetting() {
  const { t, language, frets, setFrets } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.frets}</div>
      <div className="widget-content">
        <div className="btn-container">
          {frets.map((octave, index) => {
            return (
              <div key={octave.English} className="btn fret-btn">
                <div className={octave.allSelected ? "btn selected" : "btn"}>
                  {octave[language]}
                </div>
                <div
                  className="btn plus-icon-container"
                  onClick={() => toggleDropdown(octave, index)}
                >
                  <div
                    className={octave.open ? "plus-icon rotate45" : "plus-icon"}
                  >
                    <div className="plus-icon-line plus-icon-line1"></div>
                    <div className="plus-icon-line plus-icon-line2"></div>
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

  function toggleDropdown(octave, index) {
    const octaveToChange = frets.find(oct => oct.id === index)
    octaveToChange.open = !octaveToChange.open
    setFrets(currentFrets => {
      return currentFrets.toSpliced(index, 1, octaveToChange)
    })
  }
}
