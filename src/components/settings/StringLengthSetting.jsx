import { useContext } from "react"
import { Context } from "../../App"

export function StringLenghtSetting() {
  const { t } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.stringLength}</div>
      <div className="widget-content">
        <div className="btn">4/4</div>
        <div className="btn">3/4</div>
        <div className="btn">1/2</div>
        <div className="btn">1/4</div>
        <div className="btn">1/8</div>
      </div>
    </div>
  )
}
