import type { FunctionalComponent } from "preact"

const LanguageSelector: FunctionalComponent = () => {
  // const handleChangeLanguage: React.ChangeEventHandler<HTMLSelectElement> = (
  //   e
  // ) => {
  //   const locale = e.target.value
  //   // router.push("/", "/", { locale: locale })
  // }

  return (
    <>
      {/* <label htmlFor="language" className="sr-only">
        {t("header.localeSelectorSrOnlyLabel")}
      </label>
      <select
        value={router.locale}
        onChange={handleChangeLanguage}
        className="border-none bg-transparent font-medium"
        name="language"
        id="language"
      >
        {router.locales!.map((language) => (
          <option key={language} value={language}>
            {language.toUpperCase()}
          </option>
        ))}
      </select> */}
    </>
  )
}

export default LanguageSelector
