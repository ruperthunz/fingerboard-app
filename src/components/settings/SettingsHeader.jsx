import { useContext } from "react"
import { Context } from "../../App"

export function SettingsHeader() {
  const { t, setSettingsIsOpen } = useContext(Context)
  return (
    <div className="widget header">
      {t.settings}
      <div
        className="x-container settings-x"
        onClick={() => setSettingsIsOpen(prevState => !prevState)}
      >
        <div className="x x1"></div>
        <div className="x x2"></div>
      </div>
    </div>
  )
}
