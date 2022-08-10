import type { FunctionalComponent } from "preact"
import ButtonIcon from "@/components/shared/ButtonIcon"
import { MoonIcon, SunIcon } from "@/components/icons"
import useTheme from "@/hooks/useTheme"

const DarkModeButtonToggle: FunctionalComponent = () => {
  const [theme, toggleTheme] = useTheme()

  return (
    <ButtonIcon onClick={toggleTheme} className="h-6 w-6" aria-hidden="true">
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </ButtonIcon>
  )
}

export default DarkModeButtonToggle
