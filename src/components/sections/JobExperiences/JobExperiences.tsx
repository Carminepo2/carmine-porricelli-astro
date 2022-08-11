import type { FC } from "react"
import Container from "@/components/shared/Container"
import { t } from "i18next"
import JobExperiencesListItem from "@/components/sections/JobExperiences/JobExperiencesListItem"
import type JobExperience from "@/types/JobExperience"

const JobExperiences: FC = () => {
  const jobExperiences = t("experiences", {
    returnObjects: true,
  }) as JobExperience[]

  return (
    <Container className="relative mt-28 md:mt-60">
      <div>
        <span
          className="dotted-line absolute -top-20 left-[21px] z-50 -ml-px h-40 w-1"
          aria-hidden="true"
        />
        <span
          className="absolute top-20 left-[21px] z-50 -ml-px h-full w-1 origin-top scale-y-[77%] bg-primary-400 transition-transform duration-[1.5s]"
          aria-hidden="true"
        />
        <ul role="list" className="mt-4">
          {jobExperiences.map((jobExperience, i) => (
            <JobExperiencesListItem
              key={i}
              jobExperience={jobExperience}
              isLatest={i === jobExperiences.length - 1}
            />
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default JobExperiences
