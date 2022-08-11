import type { FC } from "react"

interface Props {
  title: string
}

const Badge: FC<Props> = ({ title }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-900 dark:bg-primary-500 dark:text-primary-50">
      {title}
    </span>
  )
}

export default Badge
