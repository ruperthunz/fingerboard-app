import { useContext } from "react"
import { Context } from "../App"

export function MenuBars() {
  const { menuOpen, setMenuOpen } = useContext(Context)
  return (
    <div
      className={
        menuOpen
          ? "bars-container menu-bars open-menu"
          : "bars-container menu-bars"
      }
      onClick={() => setMenuOpen(prevState => !prevState)}
    >
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
      {/* <div className="bar bar4"></div> */}
    </div>
  )
}
