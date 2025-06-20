import { useContext } from "react"
import { Context } from "../../App"

export function OpenStrings() {
  const { t, displayOpenStrings, setDisplayOpenStrings } = useContext(Context)

  return (
    <div className="widget-content alt-2">
      <div className="label">{t.openStrings}</div>
      <div
        key={crypto.randomUUID()}
        className={
          displayOpenStrings ? "open-string-btn selected" : "open-string-btn"
        }
        onClick={() => setDisplayOpenStrings(!displayOpenStrings)}
      >
        0
      </div>
    </div>
  )
}
