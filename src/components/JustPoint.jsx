import { useContext } from "react"
import { Context } from "../App"

const x = 600
const y = 1200

export function JustPoint({ point }) {
  const { width, height, justPointsColor, show, language, tune } =
    useContext(Context)

  let xCoordinate = null
  tune === null
    ? (xCoordinate = point.coordinates.just.cx * (width / x))
    : (xCoordinate = point.coordinates[tune].cx * (width / x))

  let yCoordinate = null
  tune === null
    ? (yCoordinate = point.coordinates.just.cy * (height / y))
    : (yCoordinate = point.coordinates[tune].cy * (height / y))

  return (
    <>
      <circle
        cx={xCoordinate}
        cy={yCoordinate}
        r={width / (x / 6)}
        fill={point.colors[justPointsColor]}
      ></circle>
      {show === "none" ? undefined : (
        <text
          x={xCoordinate}
          y={yCoordinate}
          fontSize={`${height / (y / point.fontSize[show])}mm`}
          fill="black"
          textAnchor="middle"
          alignmentBaseline="central"
        >
          {show === "name" ? point.name[language] : point.number}
        </text>
      )}
    </>
  )
}
