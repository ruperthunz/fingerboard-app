import { useContext } from "react"
import { Context } from "../../App"

export function JustPoints() {
  const { t } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.justPoints}</div>
      <div className="widget-content">
        <div className="btn">{t.uni}</div>
        <div className="btn">{t.uniPlus8}</div>
        <div className="btn">{t.fret}</div>
        <div className="btn">{t.name}</div>
        <div className="btn">{t.row}</div>
      </div>
    </div>
  )
}
