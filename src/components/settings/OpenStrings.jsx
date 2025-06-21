import { useContext } from "react"
import { Context } from "../../App"

export function OpenStrings() {
  const {
    t,
    strings,
    instrument,
    displayOpenStrings,
    language,
    setDisplayOpenStrings
  } = useContext(Context)

  return (
    <div>
      <div className="label">{t.openStrings}</div>
      <div className="widget-content">
        <div className="btn-container">
          {strings[instrument].map((string, index) => {
            return (
              <div
                key={crypto.randomUUID()}
                className={
                  displayOpenStrings[index] === true ? "btn selected" : "btn"
                }
                onClick={() => handleClick(index)}
              >
                {t[string.scordatura]}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  function handleClick(index) {
    let value
    displayOpenStrings[index] === true ? (value = false) : (value = true)
    setDisplayOpenStrings(currentDisplayedOpenStrings => {
      return currentDisplayedOpenStrings.toSpliced(index, 1, value)
    })
  }
}
