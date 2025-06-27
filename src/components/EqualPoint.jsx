import { useContext } from "react"
import { Context } from "../App"

const x = 600
const y = 1200

export function EqualPoint({ point }) {
  const { width, height, equalPointsColor, show, language, tune } =
    useContext(Context)

  let xCoordinate = null
  tune === null
    ? (xCoordinate = point.coordinates.equal.cx * (width / x))
    : (xCoordinate = point.coordinates[tune].cx * (width / x))

  let yCoordinate = null
  tune === null
    ? (yCoordinate = point.coordinates.equal.cy * (height / y))
    : (yCoordinate = point.coordinates[tune].cy * (height / y))

  return (
    <>
      <circle
        cx={xCoordinate}
        cy={yCoordinate}
        r={width / (x / 6)}
        // fill={point.colors[equalPointsColor]}
        fill={
          point.state === 1
            ? point.colors[equalPointsColor]
            : point.colors.ghost
        }
      ></circle>
      {show === "none" ? undefined : (
        <text
          x={xCoordinate}
          y={yCoordinate}
          fontSize={`${height / (y / point.fontSize[show])}mm`}
          fill="black"
          textAnchor="middle"
          alignmentBaseline="central"
          dominantBaseline="central"
        >
          {show === "number" ? (
            point.number
          ) : point.name2 ? (
            <>
              <tspan
                x={xCoordinate}
                y={yCoordinate}
                dy="-0.45em"
                dominantBaseline="inherit"
                alignmentBaseline="inherit"
              >
                {point.name[language]}
              </tspan>
              <tspan
                x={xCoordinate}
                y={yCoordinate}
                dy="0.45em"
                dominantBaseline="inherit"
                alignmentBaseline="inherit"
              >
                {point.name2[language]}
              </tspan>
            </>
          ) : (
            point.name[language]
          )}
        </text>
      )}
    </>
  )
}
