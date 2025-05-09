import { useContext } from "react"
import { Context } from "../../App"

export function PositionsTraditional() {
  const { t } = useContext(Context)

  return (
    <div className="widget todo">
      <div className="widget-content">
        <div className="widget-label">{t.positionsTraditional}</div>
      </div>
    </div>
  )
}
