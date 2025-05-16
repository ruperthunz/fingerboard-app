import { useContext } from "react"
import { Context } from "../App"

const x = 600
const y = 1200

export function HarmonicPoint({ point }) {
  const { width, height, harmonicPointsColor, language, show } =
    useContext(Context)

  return (
    <>
      <circle
        cx={point.coordinates.cx * (width / x)}
        cy={point.coordinates.cy * (height / y)}
        r={width / (x / 6)}
        fill={point.colors[harmonicPointsColor]}
      ></circle>
      {show === "none" ? null : (
        <text
          x={point.coordinates.cx * (width / x)}
          y={point.coordinates.cy * (height / y)}
          fontSize={`${height / (y / point.fontSize[show])}mm`}
          fill="black"
          textAnchor="middle"
          alignmentBaseline="central"
        >
          {show === "name" ? point.name[language] : point.number}
          <tspan fontSize={1.7}>{show === "number" ? point.cents : null}</tspan>
        </text>
      )}
    </>
  )
}
