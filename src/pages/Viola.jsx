import { Settings } from "../components/settings/Settings"
import { SettingsBars } from "../components/SettingsBars"
import { Graphic } from "../components/Graphic"
import { MenuBars } from "../components/MenuBars"
import { Menu } from "../components/menu/Menu"

export function Viola(instrument) {
  return (
    <div>
      <Settings />
      <Graphic instrument={instrument} />
      <SettingsBars />
      <MenuBars />
      <Menu />
    </div>
  )
}
