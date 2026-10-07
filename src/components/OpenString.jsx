import { useContext } from "react"
import { Context } from "../App"

const x = 600
const y = 1200

export function OpenString({ point }) {
  const { width, height, equalPointsColor, justPointsColor, show, language, tune } = useContext(Context)

  let xCoordinate = point.coordinates.cx * (width / x)
  let yCoordinate = point.coordinates.cy * (height / y)

  let rectWidth = width / (x / point.width)
  let rectHeight = height / (y / 16)

  return (
    <>
      <rect
        x={xCoordinate}
        y={yCoordinate}
        width={rectWidth}
        height={rectHeight}
        rx={width / (x / 4)}
        ry={height / (y / 4)}
        fill={point.state === 0 || point.state === 2 ? point.colors.equal.ghost : point.colors.equal[equalPointsColor]}
      ></rect>
      {show === "none" ? undefined : (
        <text
          x={xCoordinate + rectWidth / 2}
          y={yCoordinate + rectHeight / 2}
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
              <tspan x={xCoordinate} y={yCoordinate} dy="-0.45em" dominantBaseline="inherit" alignmentBaseline="inherit">
                {point.name[language]}
              </tspan>
              <tspan x={xCoordinate} y={yCoordinate} dy="0.45em" dominantBaseline="inherit" alignmentBaseline="inherit">
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
