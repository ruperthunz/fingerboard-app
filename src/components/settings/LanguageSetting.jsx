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
          className={language === "English" ? "btn selected" : "btn"}
          onClick={() => changeLanguage(translations.English, "English")}
        >
          {t.english}
        </div>
        <div
          className={language === "German" ? "btn selected" : "btn"}
          onClick={() => changeLanguage(translations.German, "German")}
        >
          {t.german}
        </div>
      </div>
    </div>
  )
}
