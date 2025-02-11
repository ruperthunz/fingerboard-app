import { useContext } from "react"
import { Context } from "../../App"

const colorOptions = ["uni", "uniPlus8", "fret", "name", "row"]

export function JustPoints() {
  const { t, justPointsColor, setJustPointsColor } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.justPoints}</div>
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
