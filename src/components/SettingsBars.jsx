import { useContext } from "react"
import { Context } from "../App"

export function SettingsBars() {
  const { settingsIsOpen, setSettingsIsOpen } = useContext(Context)

  return (
    <div
      className={
        settingsIsOpen
          ? "bars-container settings-bars open-menu"
          : "bars-container settings-bars"
      }
      onClick={() => setSettingsIsOpen(prevState => !prevState)}
    >
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
      {/* <div className="bar bar4"></div> */}
    </div>
  )
}
