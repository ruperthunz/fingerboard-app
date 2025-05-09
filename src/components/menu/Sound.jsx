import { useContext } from "react"
import { Context } from "../../App"

export function Sound() {
  const { t, soundEnabled, setSoundEnabled } = useContext(Context)

  return (
    <div className="widget todo">
      <div className="widget-content alt-1">
        <div className="widget-label">{t.sound}</div>
        <div className="btn-container">
          <div className="btn" onClick={() => handleClear()}>
            {t.clear}
          </div>
          <div className="switch-wrapper switch-takes-50">
            <label className="switch">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={() => setSoundEnabled(!soundEnabled)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )

  function handleClear() {}
}
