import { useContext } from "react"
import { Context } from "../../App"

// const octaves = ["firstOctave", "secondOctave", "thirdOctave"]

export function FretsSetting() {
  const { t, language, frets, setFrets } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.frets}</div>
      <div className="widget-content">
        <div className="btn-container">
          {frets.map(octave => {
            return (
              <div
                key={octave.English}
                // className={octave.allSelected ? "btn selected" : "btn"}
                className="btn"
                // onClick={() => setFrets()}
              >
                <div className={octave.allSelected ? "btn selected" : "btn"}>
                  {octave[language]}
                </div>
                <div className="btn plus-icon-container">
                  <div className="plus-icon-line plus-icon-line1"></div>
                  <div className="plus-icon-line plus-icon-line2"></div>
                </div>
                <div className="fret-dropdown-container">
                  {octave.frets.map((fret, index) => {
                    return (
                      <div key={crypto.randomUUID()} className="fret-choice">
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
}
