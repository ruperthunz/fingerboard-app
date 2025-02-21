import { useContext } from "react"
import { Context } from "../../App"

export function ScordaturaSetting() {
  const { t, language, instrument, strings, setStrings } = useContext(Context)

  const detuneString = {
    Violin: [
      [t.b, t.bb, t.a, t.gSharp, t.g, t.fSharp, t.f, t.e, t.eb],
      [t.fSharp, t.f, t.e, t.eb, t.d, t.cSharp, t.c, t.b, t.bb],
      [t.cSharp, t.c, t.b, t.bb, t.a, t.gSharp, t.g, t.fSharp, t.f],
      [t.gSharp, t.g, t.fSharp, t.f, t.e, t.eb, t.d, t.cSharp, t.c]
    ],
    Viola: [
      [t.e, t.eb, t.d, t.cSharp, t.c, t.b, t.bb, t.a, t.ab],
      [t.b, t.bb, t.a, t.gSharp, t.g, t.fSharp, t.f, t.e, t.eb],
      [t.fSharp, t.f, t.e, t.eb, t.d, t.cSharp, t.c, t.b, t.bb],
      [t.cSharp, t.c, t.b, t.bb, t.a, t.gSharp, t.g, t.fSharp, t.f]
    ],
    Cello: [
      [t.e, t.eb, t.d, t.cSharp, t.c, t.b, t.bb, t.a, t.ab],
      [t.b, t.bb, t.a, t.gSharp, t.g, t.fSharp, t.f, t.e, t.eb],
      [t.fSharp, t.f, t.e, t.eb, t.d, t.cSharp, t.c, t.b, t.bb],
      [t.cSharp, t.c, t.b, t.bb, t.a, t.gSharp, t.g, t.fSharp, t.f]
    ],
    Bass: [
      [t.gSharp, t.g, t.fSharp, t.f, t.e, t.eb, t.d, t.cSharp, t.c],
      [t.cSharp, t.c, t.b, t.bb, t.a, t.gSharp, t.g, t.fSharp, t.f],
      [t.fSharp, t.f, t.e, t.eb, t.d, t.cSharp, t.c, t.b, t.bb],
      [t.b, t.bb, t.a, t.gSharp, t.g, t.fSharp, t.f, t.e, t.eb]
    ]
  }

  return (
    <div className="widget">
      <div className="widget-label">{t.scordatura}</div>
      <div className="widget-content">
        <div className="btn-container">
          {strings[instrument].map((string, index) => {
            return (
              <div className="btn btn-non-clickable" key={crypto.randomUUID()}>
                <div
                  key={crypto.randomUUID()}
                  className="btn btn-non-clickable"
                >
                  {string.standard + " ="}
                </div>
                <select
                  value={t[string.scordatura]}
                  onChange={e => handleSelect(e, index)}
                  className="btn btn-white"
                >
                  {detuneString[instrument][index].map(name => {
                    return (
                      <option key={crypto.randomUUID()} value={name}>
                        {name}
                      </option>
                    )
                  })}
                </select>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  function handleSelect(e, index) {
    const translationKeyOfValue = Object.keys(t).find(
      key => t[key] === e.target.value
    )
    strings[instrument][index].scordatura = translationKeyOfValue
    setStrings(currentStrings => {
      return { ...currentStrings }
    })
  }
}
