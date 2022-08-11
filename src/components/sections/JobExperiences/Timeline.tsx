import type { FC } from "react"
import type { JobExperience } from "@/data/job-experiences"
import TimelineItem from "@/components/sections/JobExperiences/TimelineItem"

interface TimelineProps {
  jobExperiences: Array<JobExperience>
}

const Timeline: FC<TimelineProps> = ({ jobExperiences }) => {
  return (
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
        {jobExperiences.map((experience, eventIdx) => (
          <TimelineItem
            key={eventIdx}
            experience={experience}
            isLatest={eventIdx === jobExperiences.length - 1}
          />
        ))}
      </ul>
    </div>
  )
}

export default Timeline
