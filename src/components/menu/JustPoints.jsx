import { useContext } from "react"
import { Context } from "../../App"

const colorOptions = ["uni", "uniPlus8", "fret", "name", "row"]

export function JustPoints() {
  const { t, displayJP, setDisplayJP, justPointsColor, setJustPointsColor } =
    useContext(Context)

  return (
    <div className="widget todo">
      <div className="widget-label">
        {t.justPoints}
        <div className="switch-wrapper">
          <label className="switch">
            <input
              type="checkbox"
              checked={displayJP}
              onChange={() => setDisplayJP(!displayJP)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="widget-content">
        <div className="btn-container">
          {colorOptions.map(option => {
            return (
              <div
                key={option}
                className={justPointsColor === option ? "btn selected" : "btn"}
                onClick={() => setJustPointsColor(option)}
              >
                {t[option]}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
