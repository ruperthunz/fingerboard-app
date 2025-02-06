import { Settings } from "../components/settings/Settings"
import { SettingsBars } from "../components/SettingsBars"
import { Graphic } from "../components/Graphic"
import { MenuBars } from "../components/MenuBars"
import { Menu } from "../components/menu/Menu"

export function Viola(instrument) {
  return (
    <div>
      <Settings />
      <SettingsBars />
      <Graphic instrument={instrument} />
      <MenuBars />
      <Menu />
    </div>
  )
}
