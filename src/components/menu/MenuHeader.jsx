import { useContext } from "react"
import { Context } from "../../App"

export function MenuHeader() {
  const { t } = useContext(Context)
  return <div className="widget menu-col header">{t.menu}</div>
}
