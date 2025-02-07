import { useContext } from "react"
import { Context } from "../../App"

export function UnitSetting() {
  const { t, unit, setUnit } = useContext(Context)
  return (
    <div className="widget">
      <div className="widget-content alt-1">
        <div className="widget-label">{t.unit}</div>
        <div className="btn-container">
          <div
            className={unit === "mm" ? "selected btn" : "btn"}
            onClick={() => setUnit("mm")}
          >
            mm
          </div>
          <div
            className={unit === "inch" ? "selected btn" : "btn"}
            onClick={() => setUnit("inch")}
          >
            inch
          </div>
        </div>
      </div>
    </div>
  )
}
