import { useContext, useEffect } from "react"
import { Context } from "../../App"
import { standardStringLength } from "../../standardStringLength"

export function StringLenghtSetting() {
  const {
    t,
    instrument,
    unit,
    fraction,
    setFraction,
    stringLength,
    setStringLength
  } = useContext(Context)

  useEffect(() => {
    if (fraction === "eighth" && instrument === "Bass") {
      setStringLength(standardStringLength[instrument]["quarter"][unit])
    } else {
      setStringLength(standardStringLength[instrument][fraction][unit])
    }
  }, [instrument, unit])

  function handleStringLength(fractionSize) {
    setStringLength(standardStringLength[instrument][fractionSize][unit])
    setFraction(fractionSize)
  }

  return (
    <div className="widget">
      <div className="alt-2">
        <div className="widget-label">{t.stringLength}</div>
        <div className="btn-container">
          <div className="btn">
            <input
              type="number"
              value={stringLength}
              onChange={e => setStringLength(Number(e.target.value))}
            />
            <div className="arrow-container">
              <div
                className="arrow arrow-up"
                onClick={() => setStringLength(sl => sl + 1)}
              ></div>
              <div
                className="arrow arrow-down"
                onClick={() => setStringLength(sl => sl - 1)}
              ></div>
            </div>
          </div>
        </div>
        <div className="btn-container span-2">
          <div
            className={fraction === "full" ? "selected btn" : "btn"}
            onClick={() => handleStringLength("full")}
          >
            4/4
          </div>
          <div
            className={fraction === "three4" ? "selected btn" : "btn"}
            onClick={() => handleStringLength("three4")}
          >
            3/4
          </div>
          <div
            className={fraction === "half" ? "selected btn" : "btn"}
            onClick={() => handleStringLength("half")}
          >
            1/2
          </div>
          <div
            className={fraction === "quarter" ? "selected btn" : "btn"}
            onClick={() => handleStringLength("quarter")}
          >
            1/4
          </div>
          {instrument !== "Bass" ? (
            <div
              className={fraction === "eighth" ? "selected btn" : "btn"}
              onClick={() => handleStringLength("eighth")}
            >
              1/8
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
