import { Link } from "react-router-dom"

export function InstrumentNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/violin">Violin</Link>
        </li>
        <li>
          <Link to="/viola">Viola</Link>
        </li>
        <li>
          <Link to="/cello">Cello</Link>
        </li>
        <li>
          <Link to="/bass">Bass</Link>
        </li>
      </ul>
    </nav>
  )
}
