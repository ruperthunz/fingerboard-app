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
    <div className="widget todo">
      <div className="widget-content alt-1">
        <div className="widget-label">{t.show}</div>
        <div className="btn-container">
          <div
            className={show === "names" ? "btn selected" : "btn"}
            onClick={() => handleShow("names")}
          >
            {t.names}
          </div>
          <div
            className={show === "numbers" ? "btn selected" : "btn"}
            onClick={() => handleShow("numbers")}
          >
            {t.numbers}
          </div>
        </div>
      </div>
    </div>
  )
}
