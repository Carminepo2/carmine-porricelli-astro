import type { FC } from "react"
import { t } from "i18next"
import cn from "clsx"
import type JobExperience from "@/types/job-experience"

interface Props {
  jobExperience: JobExperience
  isLatest?: boolean
}

const JobExperiencesListItem: FC<Props> = ({ jobExperience, isLatest }) => {
  return (
    <li>
      <div className="pb-8">
        <span
          className={cn(
            "absolute z-50 mt-2.5 flex h-3 w-3 rounded-full ring-8 ring-white dark:ring-gray-700 sm:mt-3",
            { "inline-block bg-primary-400": !isLatest }
          )}
        >
          {isLatest && (
            <>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75 dark:bg-red-400" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600 dark:bg-red-500" />
            </>
          )}
        </span>

        <article className="relative flex">
          <div className="ml-8 flex min-w-0 flex-1 justify-between space-x-4 sm:ml-12">
            <div>
              <h2 className="text-lg font-medium sm:text-2xl">
                {jobExperience.title}
              </h2>
              <h3 className="text-primary font-bold sm:text-lg">
                {jobExperience.company}
              </h3>
              <time className="text-xs text-gray-500 dark:text-gray-300 sm:text-sm">
                {jobExperience.timeframe}
              </time>
              <p className="max-w-xl pt-2 text-sm sm:text-base">
                {jobExperience.description}
              </p>
            </div>
          </div>
        </article>
      </div>
    </li>
  )
}

export default JobExperiencesListItem
