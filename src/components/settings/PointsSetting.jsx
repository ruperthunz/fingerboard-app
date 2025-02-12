import { useContext } from "react"
import { Context } from "../../App"

export function PointsSetting() {
  const { t, instrument, pointsOn, setPointsOn } = useContext(Context)

  // const strings = [
  //   [t.gString, t.dString, t.aString, t.eString],
  //   [t.cString, t.gString, t.dString, t.aString],
  //   [t.cString, t.gString, t.dString, t.aString],
  //   [t.eString, t.aString, t.dString, t.gString]
  // ]

  const strings = {
    Violin: [t.gString, t.dString, t.aString, t.eString],
    Viola: [t.cString, t.gString, t.dString, t.aString],
    Cello: [t.cString, t.gString, t.dString, t.aString],
    Bass: [t.eString, t.aString, t.dString, t.gString]
  }

  // const strings = [
  //   [t.gString, t.cString, t.cString, t.eString],
  //   [t.dString, t.gString, t.gString, t.aString],
  //   [t.aString, t.dString, t.dString, t.dString],
  //   [t.eString, t.aString, t.aString, t.gString]
  // ]

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
          {strings[instrument].map((string, index) => {
            return (
              <div
                key={crypto.randomUUID()}
                className={pointsOn[index] === true ? "btn selected" : "btn"}
                onClick={() => handleClick(index)}
              >
                {string}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
