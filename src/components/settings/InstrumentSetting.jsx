import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../App"

export function InstrumentSetting() {
  const { instrument, t } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.instrument}</div>
      <div className="widget-content">
        <Link
          className={instrument === "Violin" ? "btn selected" : "btn"}
          to="/violin"
        >
          {t.violin}
        </Link>
        <Link
          className={instrument === "Viola" ? "btn selected" : "btn"}
          to="/viola"
        >
          {t.viola}
        </Link>
        <Link
          className={instrument === "Cello" ? "btn selected" : "btn"}
          to="/cello"
        >
          {t.cello}
        </Link>
        <Link
          className={instrument === "Bass" ? "btn selected" : "btn"}
          to="/bass"
        >
          {t.bass}
        </Link>
      </div>
    </div>
  )
}
