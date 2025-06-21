import { useContext, useEffect } from "react"
import { Context } from "../../App"
import { FretsSettingSame } from "./FretsSettingSame"
import { FretsSettingIndividual } from "./FretsSettingIndiviual"
import { OnAllStrings } from "./OnAllStrings"
import { OpenStrings } from "./OpenStrings"

export function PointsSetting() {
  const {
    t,
    instrument,
    pointsOn,
    setPointsOn,
    strings,
    language,
    sameOrIndividual
  } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.pointsOn}</div>
      <div className="widget-content">
        <div className="btn-container">
          {strings[instrument].map((string, index) => {
            return (
              <div
                key={crypto.randomUUID()}
                className={pointsOn[index] === true ? "btn selected" : "btn"}
                onClick={() => handleClick(index)}
              >
                {t[string.scordatura] +
                  (language === "English" ? " " : "-") +
                  t.string}
              </div>
            )
          })}
        </div>
      </div>
      <OnAllStrings />
      <OpenStrings />
      {sameOrIndividual === "same" ? (
        <FretsSettingSame />
      ) : (
        <FretsSettingIndividual />
      )}
    </div>
  )

  function handleClick(index) {
    let value
    pointsOn[index] === true ? (value = false) : (value = true)
    setPointsOn(currentPointsOn => {
      return currentPointsOn.toSpliced(index, 1, value)
    })
  }
}
