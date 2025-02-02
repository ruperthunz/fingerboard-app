import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../App"

export function InstrumentSetting() {
  const { setInstrument } = useContext(Context)

  return (
    <div className="widget">
      <ul className="instrument-setting">
        <li>
          <Link to="/violin" onClick={() => setInstrument("Violin")}>
            Violin
          </Link>
        </li>
        <li>
          <Link to="/viola" onClick={() => setInstrument("Viola")}>
            Viola
          </Link>
        </li>
        <li>
          <Link to="/cello">Cello</Link>
        </li>
        <li>
          <Link to="/bass">Bass</Link>
        </li>
      </ul>
    </div>
  )
}
