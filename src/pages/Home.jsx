import { Link } from "react-router-dom"

export function Home() {
  return (
    <>
      <div className="container">
        <Link to="/violin" id="violinBox" className="instrumentBox">
          Violin
        </Link>
        <Link to="/viola" id="violaBox" className="instrumentBox">
          Viola
        </Link>
        <Link to="/cello" id="celloBox" className="instrumentBox">
          Cello
        </Link>
        <Link to="/bass" id="bassBox" className="instrumentBox">
          Bass
        </Link>
      </div>
    </>
  )
}
