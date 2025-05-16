import { useContext } from "react"
import { Context } from "../../App"

export function Show() {
  const { t, show, setShow } = useContext(Context)

  function handleShow(value) {
    if (show === value) {
      setShow("none")
    } else {
      setShow(value)
    }
  }

  return (
    <div className="widget">
      <div className="widget-content alt-1">
        <div className="widget-label">{t.show}</div>
        <div className="btn-container">
          <div
            className={show === "name" ? "btn selected" : "btn"}
            onClick={() => handleShow("name")}
          >
            {t.names}
          </div>
          <div
            className={show === "number" ? "btn selected" : "btn"}
            onClick={() => handleShow("number")}
          >
            {t.numbers}
          </div>
        </div>
      </div>
    </div>
  )
}
