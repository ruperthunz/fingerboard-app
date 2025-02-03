import { useContext } from "react"
import { Context } from "../../App"

export function PointsSetting() {
  const { t, instrument } = useContext(Context)

  const strings = {
    Violin: [t.gString, t.dString, t.aString, t.eString],
    Viola: [t.cString, t.gString, t.dString, t.aString],
    Cello: [t.cString, t.gString, t.dString, t.aString],
    Bass: [t.eString, t.aString, t.dString, t.gString]
  }

  return (
    <div className="widget">
      <div className="widget-label">{t.pointsOn}</div>
      <div className="widget-content">
        <div className="btn">{strings[instrument][0]}</div>
        <div className="btn">{strings[instrument][1]}</div>
        <div className="btn">{strings[instrument][2]}</div>
        <div className="btn">{strings[instrument][3]}</div>
      </div>
    </div>
  )
}
