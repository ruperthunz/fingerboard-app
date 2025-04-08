import { useContext } from "react"
import { Context } from "../../App"

const colorOptions = ["uni", "tone", "fret", "name", "div"]
const divisionsOptions = [
  "÷ 2",
  "÷ 3",
  "÷ 5",
  "÷ 4",
  "÷ 6",
  "÷ 10",
  "÷ 8",
  "÷ 9",
  "÷ 7"
]

export function HarmonicPoints() {
  const {
    t,
    harmonicPointsColor,
    setHarmonicPointsColor,
    divisions,
    setDivisions
  } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.harmonicPoints}</div>
      <div className="widget-content">
        <div className="division-container">
          {divisionsOptions.map((option, index) => {
            return (
              <div
                key={option}
                className={
                  divisions[index]
                    ? "btn selected division-btn"
                    : "btn division-btn"
                }
                onClick={() => handleDivisions(index)}
              >
                {option}
              </div>
            )
          })}
        </div>
        <div className="btn-container">
          {colorOptions.map(option => {
            return (
              <div
                key={option}
                className={
                  harmonicPointsColor === option ? "btn selected" : "btn"
                }
                onClick={() => setHarmonicPointsColor(option)}
              >
                {t[option]}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  function handleDivisions(index) {
    setDivisions(currentDivisions => {
      return currentDivisions.toSpliced(index, 1, !currentDivisions[index])
    })
  }
}
