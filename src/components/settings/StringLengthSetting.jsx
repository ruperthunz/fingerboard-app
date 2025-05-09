import { useContext, useEffect } from "react"
import { Context } from "../../App"
import {
  standardStringLength,
  stringLengthAreas,
  stringLengthBoundaries
} from "../../standardStringLength"

const stringLengths = [
  { name: "full", text: "4/4" },
  { name: "three4", text: "3/4" },
  { name: "half", text: "1/2" },
  { name: "quarter", text: "1/4" },
  { name: "eighth", text: "1/8" }
]

const sL = ["full", "three4", "half", "quarter", "eighth"]

// const minimumStringLength = { mm: 100, inch: 3.94 }

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
    setStringLength(standardStringLength[instrument][fraction][unit])
  }, [instrument])

  // useEffect(() => {
  //   let index = sL.indexOf(fraction)
  //   if (stringLength > standardStringLength[instrument][fraction]?.upperLimit) {
  //     setFraction(sL[index - 1])
  //   } else if (
  //     stringLength < standardStringLength[instrument][fraction]?.lowerLimit
  //   ) {
  //     setFraction(sL[index + 1])
  //   }
  // }, [stringLength])

  useEffect(() => {
    checkBoundaries()
  }, [stringLength])

  return (
    <div className="widget todo">
      <div className="alt-2">
        <div className="widget-label">{t.stringLength}</div>
        <div className="btn-container">
          <div className="btn btn-non-clickable">
            <input
              type="number"
              value={stringLength}
              step={unit === "mm" ? 1 : 0.01}
              onChange={e =>
                handleCustomStringLength("custom", Number(e.target.value))
              }
            />
            <div>{unit}</div>
            <div className="arrow-container">
              <div
                className="arrow arrow-up"
                onClick={() => handleCustomStringLength("up")}
              ></div>
              <div
                className="arrow arrow-down"
                onClick={() => handleCustomStringLength("down")}
              ></div>
            </div>
          </div>
        </div>
        <div className="btn-container span-2">
          {stringLengths.map(length => {
            return (
              <div
                key={length.name}
                className={fraction === length.name ? "selected btn" : "btn"}
                onClick={() => handleStringLength(length.name)}
              >
                {length.text}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  function handleCustomStringLength(direction, value) {
    if (value < 1) {
      setStringLength(1)
    } else {
      if (direction === "up") {
        if (unit === "mm") {
          setStringLength(sl => Number(sl) + 1)
        } else {
          setStringLength(sl => (Number(sl) + 0.01).toFixed(2))
        }
      } else if (direction === "down") {
        if (stringLength > 1) {
          if (unit === "mm") {
            setStringLength(sl => Number(sl) - 1)
          } else {
            setStringLength(sl => (Number(sl) - 0.01).toFixed(2))
          }
        }
      } else {
        setStringLength(value)
      }
    }
  }

  function handleStringLength(fractionSize) {
    setStringLength(standardStringLength[instrument][fractionSize][unit])
    setFraction(fractionSize)
  }

  function checkBoundaries() {
    const upperLimit = stringLengthAreas[instrument][fraction][unit].upperLimit
    const lowerLimit = stringLengthAreas[instrument][fraction][unit].lowerLimit
    if (stringLength > upperLimit || stringLength < lowerLimit) {
      const newFraction = stringLengthBoundaries[instrument][unit].find(
        obj => obj.upperLimit > stringLength && obj.lowerLimit < stringLength
      )
      setFraction(newFraction.fraction)
    }
  }
}
