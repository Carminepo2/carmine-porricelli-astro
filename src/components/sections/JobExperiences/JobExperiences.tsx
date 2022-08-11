import type { FC } from "react"
import Container from "@/components/shared/Container"
import JOB_EXPERIENCES from "@/data/job-experiences"
import Timeline from "@/components/sections/JobExperiences/Timeline"
import i18next from "i18next"

const JobExperiences: FC = () => {
  const jobExperiencesLocalized =
    JOB_EXPERIENCES[i18next.language as keyof typeof JOB_EXPERIENCES]
  return (
    <Container className="relative mt-28 md:mt-60">
      <Timeline jobExperiences={jobExperiencesLocalized} />
    </Container>
  )
}

export default JobExperiences
