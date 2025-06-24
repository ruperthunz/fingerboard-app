import { useContext } from "react"
import { Context } from "../../App"

export function OpenStringsSame() {
  const {
    t,
    strings,
    instrument,
    displayOpenStringsSame,
    setDisplayOpenStringsSame
  } = useContext(Context)

  return (
    <div>
      <div className="label">{t.openStrings}</div>
      <div className="widget-content">
        <div
          key={crypto.randomUUID()}
          className={
            displayOpenStringsSame
              ? "btn-container one-btn selected"
              : "btn-container one-btn"
          }
          onClick={() => setDisplayOpenStringsSame(!displayOpenStringsSame)}
        >
          {strings[instrument].map(string => {
            return <div key={crypto.randomUUID()}>{t[string.scordatura]}</div>
          })}
        </div>
      </div>
    </div>
  )
}
