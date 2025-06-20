import { SettingsHeader } from "./SettingsHeader"
import { LanguageSetting } from "./LanguageSetting"
import { InstrumentSetting } from "./InstrumentSetting"
import { PitchSetting } from "./PitchSetting"
import { PointsSetting } from "./PointsSetting"
import { UnitSetting } from "./UnitSetting"
import { StringLenghtSetting } from "./StringLengthSetting"
import { ScordaturaSetting } from "./ScordaturaSetting"
import { useContext } from "react"
import { Context } from "../../App"

export function Settings() {
  const { settingsIsOpen } = useContext(Context)

  return (
    <div
      id="settings"
      className="menus"
      style={settingsIsOpen ? { left: "0" } : { left: "-300px" }}
    >
      <SettingsHeader />
      <LanguageSetting />
      <InstrumentSetting />
      <PitchSetting />
      <PointsSetting />
      <UnitSetting />
      <StringLenghtSetting />
      <ScordaturaSetting />
    </div>
  )
}
