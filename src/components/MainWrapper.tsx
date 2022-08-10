import type { FunctionalComponent } from "preact"

const MainWrapper: FunctionalComponent = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-white text-gray-700 antialiased dark:bg-gray-800 dark:text-gray-200">
      {children}
    </div>
  )
}

export default MainWrapper
