import { useState, useEffect, useCallback } from 'preact/hooks';


type Theme = "light" | "dark"

function useTheme() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const hasDarkMode = document.documentElement.classList.contains("dark")
    if (hasDarkMode) {
      setTheme("dark")
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light"
      document.documentElement.classList.remove(prev)
      document.documentElement.classList.add(newTheme)
      window.localStorage.setItem("theme", newTheme)
      return newTheme
    })
  }, [])

  return [theme, toggleTheme] as const
}

export default useTheme
