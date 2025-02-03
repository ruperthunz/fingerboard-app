import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../App"

export function InstrumentSetting() {
  const { setInstrument, t } = useContext(Context)

  return (
    <div className="widget">
      {t.instrument}
      <div className="widget-content">
        <Link to="/violin" onClick={() => setInstrument("Violin")}>
          {t.violin}
        </Link>
        <Link to="/viola" onClick={() => setInstrument("Viola")}>
          {t.viola}
        </Link>
        <Link to="/cello">{t.cello}</Link>
        <Link to="/bass">{t.bass}</Link>
      </div>
    </div>
  )
}
