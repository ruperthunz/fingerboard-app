import { useContext } from "react"
import { Context } from "../../App"

export function SettingsHeader() {
  const { t } = useContext(Context)
  return <div className="widget menu-col header">{t.settings}</div>
}
