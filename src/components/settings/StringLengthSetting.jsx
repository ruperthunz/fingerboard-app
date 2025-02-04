import { useContext } from "react"
import { Context } from "../../App"

export function StringLenghtSetting() {
  const { t, stringLength, setStringLength } = useContext(Context)

  return (
    <div className="widget">
      <div className="widget-label">{t.stringLength}</div>
      <div className="widget-content">
        <div
          className={stringLength === "4/4" ? "selected btn" : "btn"}
          onClick={() => setStringLength("4/4")}
        >
          4/4
        </div>
        <div
          className={stringLength === "3/4" ? "selected btn" : "btn"}
          onClick={() => setStringLength("3/4")}
        >
          3/4
        </div>
        <div
          className={stringLength === "1/2" ? "selected btn" : "btn"}
          onClick={() => setStringLength("1/2")}
        >
          1/2
        </div>
        <div
          className={stringLength === "1/4" ? "selected btn" : "btn"}
          onClick={() => setStringLength("1/4")}
        >
          1/4
        </div>
        <div
          className={stringLength === "1/8" ? "selected btn" : "btn"}
          onClick={() => setStringLength("1/8")}
        >
          1/8
        </div>
      </div>
    </div>
  )
}
