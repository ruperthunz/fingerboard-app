import { useContext } from "react"
import { Context } from "../App"

const x = 600
const y = 1200

export function EqualPoint({ point }) {
  const { width, height, equalPointsColor, show, language } =
    useContext(Context)

  const xCoordinate = point.coordinates.cx * (width / x)
  const yCoordinate = point.coordinates.cy * (height / y)

  return (
    <>
      <circle
        cx={xCoordinate}
        cy={yCoordinate}
        r={width / (x / 6)}
        fill={point.colors[equalPointsColor]}
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
              <tspan x={xCoordinate} y={yCoordinate} dy="-0.16%">
                {point.name[language]}
              </tspan>
              <tspan x={xCoordinate} y={yCoordinate} dy="0.16%">
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
