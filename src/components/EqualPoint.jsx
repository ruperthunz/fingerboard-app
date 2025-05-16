import { useContext } from "react"
import { Context } from "../App"

const x = 600
const y = 1200

export function EqualPoint({ point }) {
  const { width, height, equalPointsColor, show, language } =
    useContext(Context)

  console.log(point.fontSize[show])

  return (
    <>
      <circle
        cx={point.coordinates.cx * (width / x)}
        cy={point.coordinates.cy * (height / y)}
        r={width / (x / 6)}
        fill={point.colors[equalPointsColor]}
      ></circle>
      {show === "none" ? undefined : (
        <text
          x={point.coordinates.cx * (width / x)}
          y={point.coordinates.cy * (height / y)}
          // fontSize={`${height / (y / 1.3)}mm`}
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
