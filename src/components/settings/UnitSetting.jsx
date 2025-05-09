import { useContext } from "react"
import { Context } from "../../App"

export function UnitSetting() {
  const { t, unit, setUnit, stringLength, setStringLength } =
    useContext(Context)
  return (
    <div className="widget todo">
      <div className="widget-content alt-1">
        <div className="widget-label">{t.unit}</div>
        <div className="btn-container">
          <div
            className={unit === "mm" ? "selected btn" : "btn"}
            onClick={() => switchUnit("mm")}
          >
            mm
          </div>
          <div
            className={unit === "inch" ? "selected btn" : "btn"}
            onClick={() => switchUnit("inch")}
          >
            inch
          </div>
        </div>
      </div>
    </div>
  )

  function switchUnit(value) {
    if (unit !== value) {
      if (unit === "mm") {
        setStringLength(sl => (Number(sl) / 25.4).toFixed(2))
      } else if (unit === "inch") {
        setStringLength(sl => (Number(sl) * 25.4).toFixed(0))
      }
    }
    setUnit(value)
  }
}
