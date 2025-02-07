import { useContext } from "react"
import { Context } from "../../App"

export function PointsSetting() {
  const { t, instrument, pointsOn, setPointsOn } = useContext(Context)

  const strings = {
    Violin: [t.gString, t.dString, t.aString, t.eString],
    Viola: [t.cString, t.gString, t.dString, t.aString],
    Cello: [t.cString, t.gString, t.dString, t.aString],
    Bass: [t.eString, t.aString, t.dString, t.gString]
  }

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
          <div
            className={pointsOn[0] === true ? "btn selected" : "btn"}
            onClick={() => handleClick(0)}
          >
            {strings[instrument][0]}
          </div>
          <div
            className={pointsOn[1] === true ? "btn selected" : "btn"}
            onClick={() => handleClick(1)}
          >
            {strings[instrument][1]}
          </div>
          <div
            className={pointsOn[2] === true ? "btn selected" : "btn"}
            onClick={() => handleClick(2)}
          >
            {strings[instrument][2]}
          </div>
          <div
            className={pointsOn[3] === true ? "btn selected" : "btn"}
            onClick={() => handleClick(3)}
          >
            {strings[instrument][3]}
          </div>
        </div>
      </div>
    </div>
  )
}
