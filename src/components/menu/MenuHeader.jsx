import { useContext } from "react"
import { Context } from "../../App"

export function MenuHeader() {
  const { t, setMenuIsOpen } = useContext(Context)
  return (
    <div className="widget header menu-header">
      {t.menu}
      <div
        className="x-container menu-x"
        onClick={() => setMenuIsOpen(prevState => !prevState)}
      >
        <div className="x x1"></div>
        <div className="x x2"></div>
      </div>
    </div>
  )
}
