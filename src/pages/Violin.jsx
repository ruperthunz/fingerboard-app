import { Settings } from "../components/settings/Settings"
import { Graphic } from "../components/Graphic"
import { Menu } from "../components/menu/Menu"

export function Violin(instrument) {
  return (
    <div>
      <Settings />
      <Graphic instrument={instrument} />
      <Menu />
    </div>
  )
}
