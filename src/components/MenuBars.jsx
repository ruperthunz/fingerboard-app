import { useContext } from "react"
import { Context } from "../App"

export function MenuBars() {
  const { menuIsOpen, setMenuIsOpen } = useContext(Context)
  return (
    <div
      className={
        menuIsOpen
          ? "bars-container menu-bars open-menu"
          : "bars-container menu-bars"
      }
      onClick={() => setMenuIsOpen(prevState => !prevState)}
    >
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
      {/* <div className="bar bar4"></div> */}
    </div>
  )
}
