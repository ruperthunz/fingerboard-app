import { useContext } from "react"
import { Context } from "../../App"

export function UnitSetting() {
  const { t } = useContext(Context)
  return (
    <div className="widget">
      <div className="widget-content">
        <div className="widget-label">{t.unit}</div>
        <div className="btn">mm</div>
        <div className="btn">inch</div>
      </div>
    </div>
  )
}
