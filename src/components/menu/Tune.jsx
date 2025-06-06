import { useContext, useEffect } from "react"
import { Context } from "../../App"

export function Tune() {
  const { t, tune, setTune, displayEP } = useContext(Context)

  function handleTune(clickedTune) {
    if (clickedTune === tune) {
      setTune(null)
    } else {
      setTune(clickedTune)
    }
  }

  return (
    <div className={displayEP ? "widget" : "widget todo"}>
      <div className="widget-content alt-1">
        <div className="widget-label">{t.tune}</div>
        <div className="btn-container">
          <div
            className={tune === "equal" ? "btn selected" : "btn"}
            onClick={() => handleTune("equal")}
          >
            {t.equal}
          </div>
          <div
            className={tune === "just" ? "btn selected" : "btn"}
            onClick={() => handleTune("just")}
          >
            {t.just}
          </div>
        </div>
      </div>
    </div>
  )
}
