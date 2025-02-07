import { useContext } from "react"
import { Context } from "../../App"

export function EqualPoints() {
  const { t } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.equalPoints}</div>
      <div className="widget-content">
        <div className="btn-container">
          <div className="btn">{t.uni}</div>
          <div className="btn">{t.uniPlus8}</div>
          <div className="btn">{t.fret}</div>
          <div className="btn">{t.name}</div>
          <div className="btn">{t.piano}</div>
        </div>
      </div>
    </div>
  )
}
