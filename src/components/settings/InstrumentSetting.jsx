import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../App"

export function InstrumentSetting() {
  const { setInstrument, t } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.instrument}</div>
      <div className="widget-content">
        <Link
          className="btn"
          to="/violin"
          onClick={() => setInstrument("Violin")}
        >
          {t.violin}
        </Link>
        <Link
          className="btn"
          to="/viola"
          onClick={() => setInstrument("Viola")}
        >
          {t.viola}
        </Link>
        <Link className="btn" to="/cello">
          {t.cello}
        </Link>
        <Link className="btn" to="/bass">
          {t.bass}
        </Link>
      </div>
    </div>
  )
}
