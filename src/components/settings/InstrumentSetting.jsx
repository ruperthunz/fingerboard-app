import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../App"

const instruments = ["Violin", "Viola", "Cello", "Bass"]

export function InstrumentSetting() {
  const { instrument, setInstrument, fraction, t } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.instrument}</div>
      <div className="widget-content">
        <div className="btn-container">
          {instruments.map(instr => {
            return (
              <Link
                key={instr}
                className={instrument === instr ? "btn selected" : "btn"}
                to={`/${instr}`}
              >
                {t[instr]}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
