import type { FC, ChangeEventHandler } from "react"

import i18next, { t } from "i18next"

const LanguageSelector: FC = () => {
  const handleChangeLanguage: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const locale = (e.target as HTMLSelectElement).value
    //TODO
    //window.history.pushState("/")
  }

  return (
    <>
      <label htmlFor="language" className="sr-only">
        {t("header.localeSelectorSrOnlyLabel")}
      </label>
      <select
        value={i18next.language}
        onChange={handleChangeLanguage}
        className="border-none bg-transparent font-medium"
        name="language"
        id="language"
      >
        {i18next.languages.map((language) => (
          <option key={language} value={language}>
            {language.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  )
}

export default LanguageSelector
