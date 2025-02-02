import { Settings } from "../components/settings/Settings"
import { Graphic } from "../components/Graphic"

export function Bass(instrument) {
  return (
    <div>
      <Settings />
      <Graphic instrument={instrument} />
      {/* <Menu /> */}
    </div>
  )
}
