import { useContext } from "react"
import { Context } from "../../App"

export function PitchSetting() {
  const { t, pitch, setPitch, unit } = useContext(Context)

  return (
    <div className="widget">
      <div className="alt-2">
        <div className="widget-label">{t.standardPitch}</div>
        <div className="btn-container">
          <div className="btn number-input-container">
            <input
              type="number"
              value={pitch}
              onChange={e => setPitch(Number(e.target.value))}
            />
            <div>Hz</div>
            <div className="arrow-container">
              <div
                className="arrow arrow-up"
                onClick={() => setPitch(p => p + 1)}
              ></div>
              <div
                className="arrow arrow-down"
                onClick={() => setPitch(p => p - 1)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
