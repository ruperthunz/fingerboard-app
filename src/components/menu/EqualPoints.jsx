import { useContext } from "react"
import { Context } from "../../App"

const colorOptions = ["uni", "uniPlus8", "fret", "name", "piano"]

export function EqualPoints() {
  const { t, equalPointsColor, setEqualPointsColor } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">
        {t.equalPoints}
        <div className="switch-wrapper">
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      {/* <div className="switch-wrapper">
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
      </div> */}
      <div className="widget-content">
        <div className="btn-container">
          {colorOptions.map(option => {
            return (
              <div
                key={option}
                className={equalPointsColor === option ? "btn selected" : "btn"}
                onClick={() => setEqualPointsColor(option)}
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
