import { useContext } from "react"
import { Context } from "../../App"

export function Show() {
  const { t } = useContext(Context)
  return (
    <div className="widget">
      <div className="widget-content">
        <div className="widget-label">{t.show}</div>
        <div className="btn">{t.names}</div>
        <div className="btn">{t.numbers}</div>
      </div>
    </div>
  )
}
