import { useContext } from "react"
import { Context } from "../../App"

export function PitchSetting() {
  const { t, pitch, setPitch } = useContext(Context)

  return (
    <div className="widget">
      <div className="alt-2">
        <div className="widget-label">{t.standardPitch}</div>
        <div className="btn-container">
          <div className="btn btn-non-clickable number-input-container">
            <input
              type="number"
              value={pitch}
              onChange={e => handlePitch("custom", Number(e.target.value))}
            />
            <div>Hz</div>
            <div className="arrow-container">
              <div
                className="arrow arrow-up"
                onClick={() => handlePitch("up")}
              ></div>
              <div
                className="arrow arrow-down"
                onClick={() => handlePitch("down")}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  function handlePitch(direction, value) {
    if (value < 1) {
      setPitch(1)
    } else {
      if (direction === "up") {
        setPitch(p => p + 1)
      } else if (direction === "down") {
        if (pitch > 1) {
          setPitch(p => p - 1)
        }
      } else {
        setPitch(value)
      }
    }
  }
}
