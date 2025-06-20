import { useContext } from "react"
import { Context } from "../../App"

export function OnAllStrings() {
  const { t, sameOrIndividual, setSameOrIndividual } = useContext(Context)

  return (
    <div className="widget-content alt-1">
      <div className="label">{t.onAllStrings}</div>
      <div className="btn-container">
        <div
          className={sameOrIndividual === "same" ? "btn selected" : "btn"}
          onClick={() => setSameOrIndividual("same")}
        >
          {t.same}
        </div>
        <div
          className={sameOrIndividual === "individual" ? "btn selected" : "btn"}
          onClick={() => setSameOrIndividual("individual")}
        >
          {t.individual}
        </div>
      </div>
    </div>
  )
}
