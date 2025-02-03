import { useContext } from "react"
import { Context } from "../../App"

export function Tune() {
  const { t } = useContext(Context)
  return (
    <div className="widget">
      <div className="widget-content">
        <div className="widget-label">{t.tune}</div>
        <div className="btn">{t.equal}</div>
        <div className="btn">{t.just}</div>
      </div>
    </div>
  )
}
