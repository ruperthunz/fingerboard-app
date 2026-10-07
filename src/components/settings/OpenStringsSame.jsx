import { useContext } from "react"
import { Context } from "../../App"

export function OpenStringsSame() {
  const { t, strings, instrument, openStrings, setOpenStrings, displayOpenStringsSame, setDisplayOpenStringsSame } = useContext(Context)

  const stateClasses = ["", "selected", "ghost"]

  return (
    <div>
      <div className="label">{t.openStrings}</div>
      <div className="widget-content">
        <div
          key={crypto.randomUUID()}
          className={`btn-container one-btn ${stateClasses[displayOpenStringsSame]}`}
          onClick={() => handleClick()}
        >
          {strings[instrument].map(string => {
            return <div key={crypto.randomUUID()}>{t[string.scordatura]}</div>
          })}
        </div>
      </div>
    </div>
  )

  function handleClick() {
    let instrumentToChange = openStrings[instrument]
    instrumentToChange.map(string => {
      string.state = (string.state + 1) % 3
    })
    setDisplayOpenStringsSame(currentState => (currentState + 1) % 3)
    setOpenStrings(currentOpenStringStates => {
      currentOpenStringStates[instrument] = instrumentToChange
      return currentOpenStringStates
    })
  }
}
