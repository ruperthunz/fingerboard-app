import { useContext } from "react"
import { Context } from "../../App"
import { translations } from "../../translations"

export function LanguageSetting() {
  const { language, setLanguage, t, setT } = useContext(Context)

  function changeLanguage(translation, language) {
    setLanguage(language)
    setT(translation)
  }

  return (
    <div className="widget">
      <div className="widget-content">
        <div className="widget-label">{t.language}</div>
        <div
          className="btn"
          onClick={() => changeLanguage(translations.en, "English")}
        >
          {t.english}
        </div>
        <div
          className="btn"
          onClick={() => changeLanguage(translations.de, "German")}
        >
          {t.german}
        </div>
      </div>
    </div>
  )
}
