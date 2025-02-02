import { LanguageSetting } from "./LanguageSetting"
import { InstrumentSetting } from "./InstrumentSetting"
import { PitchSetting } from "./PitchSetting"
import { PointsSetting } from "./PointsSetting"
import { FretsSetting } from "./FretsSetting"
import { UnitSetting } from "./UnitSetting"
import { StringLenghtSetting } from "./StringLengthSetting"
import { ScordaturaSetting } from "./ScordaturaSetting"

export function Settings() {
  return (
    <div id="settings">
      {/* <LanguageSetting /> */}
      <InstrumentSetting />
      {/* <PitchSetting /> */}
      {/* <PointsSetting /> */}
      {/* <FretsSetting /> */}
      {/* <UnitSetting /> */}
      {/* <StringLenghtSetting /> */}
      {/* <ScordaturaSetting /> */}
    </div>
  )
}
