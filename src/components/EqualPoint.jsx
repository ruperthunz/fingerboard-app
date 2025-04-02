import { useContext } from "react"
import { Context } from "../App"

const x = 600
const y = 1200

export function EqualPoint({ point }) {
  const { width, height } = useContext(Context)

  return (
    <circle
      // key={crypto.randomUUID()}
      cx={point.coordinates.cx * (width / x)}
      cy={point.coordinates.cy * (height / y)}
      r="5"
      className="point"
    ></circle>
  )
}
