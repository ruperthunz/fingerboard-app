import { useContext, useEffect, useState } from "react"
import { Context } from "../App"
import { drawGraphic } from "../graphics/drawGraphic"
import { useLocation } from "react-router-dom"
import { EqualPoint } from "./EqualPoint"

export function Graphic(props) {
  const instrument = props.instrument.instrument
  const { height, width, setInstrument, displayEP, pointsToDisplay } =
    useContext(Context)
  const [graphic, setGraphic] = useState(drawGraphic(height, width, instrument))
  const location = useLocation()

  useEffect(() => {
    setInstrument(instrument)
  }, [location])

  // useEffect(() => {
  //   const handleResize = () => {
  //     setHeight(window.innerHeight)
  //     setWidth(height / 2)
  //     setGraphic(drawGraphic(height, width, instrument))
  //   }
  //   window.addEventListener("resize", handleResize)

  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // }, [height])

  return (
    <div id="container">
      {/* <div className="inner">
        <img src={"/images/strad-violin-vieuxtemps-hauser-cut1.jpeg"} />
      </div> */}
      <div className="inner" id="svgContainer">
        <svg width={width} height={height} id="main-svg">
          <rect x="0" y="0" width={width} height={height} id="inner-svg"></rect>
          <path id={`body${instrument}`} d={graphic[0]}></path>
          <polygon id="fingerboard" points={graphic[1]}></polygon>
          <rect
            id="nut"
            x={graphic[2]}
            y={graphic[3]}
            rx={graphic[4]}
            ry={graphic[5]}
            width={graphic[6]}
            height={graphic[7]}
          ></rect>
          <line
            id="bridge"
            x1={graphic[8]}
            y1={graphic[9]}
            x2={graphic[10]}
            y2={graphic[11]}
            strokeWidth={graphic[12]}
          ></line>
          <path className="f-hole" d={graphic[13]}></path>
          <path className="f-hole" d={graphic[14]}></path>
          <line
            className="strings"
            x1={graphic[19]}
            y1={graphic[15]}
            x2={graphic[20]}
            y2={graphic[16]}
            strokeWidth={graphic[18]}
          ></line>
          <line
            className="stringEnds"
            x1={graphic[20]}
            y1={graphic[16]}
            x2={graphic[20]}
            y2={graphic[17]}
            strokeWidth={graphic[18]}
          ></line>
          <line
            className="strings"
            x1={graphic[21]}
            y1={graphic[15]}
            x2={graphic[22]}
            y2={graphic[16]}
            strokeWidth={graphic[18]}
          ></line>
          <line
            className="stringEnds"
            x1={graphic[22]}
            y1={graphic[16]}
            x2={graphic[22]}
            y2={graphic[17]}
            strokeWidth={graphic[18]}
          ></line>
          <line
            className="strings"
            x1={graphic[23]}
            y1={graphic[15]}
            x2={graphic[24]}
            y2={graphic[16]}
            strokeWidth={graphic[18]}
          ></line>
          <line
            className="stringEnds"
            x1={graphic[24]}
            y1={graphic[16]}
            x2={graphic[24]}
            y2={graphic[17]}
            strokeWidth={graphic[18]}
          ></line>
          <line
            className="strings"
            x1={graphic[25]}
            y1={graphic[15]}
            x2={graphic[26]}
            y2={graphic[16]}
            strokeWidth={graphic[18]}
          ></line>
          <line
            className="stringEnds"
            x1={graphic[26]}
            y1={graphic[16]}
            x2={graphic[26]}
            y2={graphic[17]}
            strokeWidth={graphic[18]}
          ></line>
          {displayEP
            ? pointsToDisplay.map(point => {
                return <EqualPoint key={crypto.randomUUID()} point={point} />
              })
            : undefined}
        </svg>
      </div>
    </div>
  )
}
