import { useContext } from "react"
import { Context } from "../App"

const x = 600
const y = 1200

export function HarmonicPoint({ point }) {
  const { width, height, harmonicPointsColor } = useContext(Context)

  return (
    <circle
      cx={point.coordinates.cx * (width / x)}
      cy={point.coordinates.cy * (height / y)}
      r={width / (x / 6)}
      fill={point.colors[harmonicPointsColor]}
    ></circle>
  )
}
