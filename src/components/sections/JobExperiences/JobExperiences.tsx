import type { FunctionalComponent } from "preact"
import Container from "@/components/shared/Container"
import JOB_EXPERIENCES from "@/data/job-experiences"
import Timeline from "@/components/sections/JobExperiences/Timeline"

const JobExperiences: FunctionalComponent = () => {
  const jobExperiencesLocalized = JOB_EXPERIENCES.it
  // JOB_EXPERIENCES[i18n.language as keyof typeof JOB_EXPERIENCES]

  return (
    <Container className="relative mt-28 md:mt-60">
      <Timeline jobExperiences={jobExperiencesLocalized} />
    </Container>
  )
}

export default JobExperiences
