import { useContext } from "react"
import { Context } from "../../App"

export function OpenString(props) {
  const { t, displayOpenString, language, setDisplayOpenString } =
    useContext(Context)

  return (
    <div className="widget-content alt-3">
      <div>
        {" "}
        {t[props.string] + (language === "English" ? " " : "-") + t.string}
      </div>
      <div className="label">{t.openString}</div>
      <div
        key={crypto.randomUUID()}
        className={
          displayOpenString ? "open-string-btn selected" : "open-string-btn"
        }
        onClick={() => setDisplayOpenStrings(!displayOpenString)}
      >
        {props.string}
      </div>
    </div>
  )
}
