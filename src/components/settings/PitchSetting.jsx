import { useContext } from "react"
import { Context } from "../../App"

export function PitchSetting() {
  const { t, pitch, setPitch } = useContext(Context)

  return (
    <div className="widget">
      <div className="alt-2">
        <div className="widget-label">{t.standardPitch}</div>
        <div className="btn-container">
          <div className="btn">
            <input
              type="number"
              value={pitch}
              onChange={e => setPitch(Number(e.target.value))}
            />
            <div className="arrow-container">
              <div className="arrow arrow-up"></div>
              <div className="arrow arrow-down"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
