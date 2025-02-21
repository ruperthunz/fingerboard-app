import { useContext, useEffect } from "react"
import { Context } from "../../App"

export function PointsSetting() {
  const { t, instrument, pointsOn, setPointsOn, strings, language } =
    useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.pointsOn}</div>
      <div className="widget-content">
        <div className="btn-container">
          {strings[instrument].map((string, index) => {
            return (
              <div
                key={crypto.randomUUID()}
                className={pointsOn[index] === true ? "btn selected" : "btn"}
                onClick={() => handleClick(index)}
              >
                {t[string.scordatura] +
                  (language === "English" ? " " : "-") +
                  t.string}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  function handleClick(index) {
    let value
    pointsOn[index] === true ? (value = false) : (value = true)
    setPointsOn(currentPointsOn => {
      return currentPointsOn.toSpliced(index, 1, value)
    })
  }
}
