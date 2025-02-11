import { useContext } from "react"
import { Context } from "../../App"

export function PointsSetting() {
  const { t, pointsOn, setPointsOn } = useContext(Context)

  const strings = [
    [t.gString, t.dString, t.aString, t.eString],
    [t.cString, t.gString, t.dString, t.aString],
    [t.cString, t.gString, t.dString, t.aString],
    [t.eString, t.aString, t.dString, t.gString]
  ]

  function handleClick(index) {
    let value
    pointsOn[index] === true ? (value = false) : (value = true)
    setPointsOn(currentPointsOn => {
      return currentPointsOn.toSpliced(index, 1, value)
    })
  }

  return (
    <div className="widget">
      <div className="widget-label">{t.pointsOn}</div>
      <div className="widget-content">
        <div className="btn-container">
          {strings.map((string, index) => {
            return (
              <div
                key={crypto.randomUUID()}
                className={pointsOn[index] === true ? "btn selected" : "btn"}
                onClick={() => handleClick(index)}
              >
                {string[index]}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
