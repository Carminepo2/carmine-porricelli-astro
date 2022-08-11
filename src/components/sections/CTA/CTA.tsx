import type { FC } from "react"
import { t } from "i18next"
import Container from "@/components/shared/Container"
import ContactMeButton from "@/components/shared/ContactMeButton"
import DownloadCVButton from "@/components/shared/DownloadCVButton"

const CTA: FC = () => {
  return (
    <Container as="section" className="mt-20">
      <div className="rounded-xl bg-gray-100/30 p-8 backdrop-blur-xl dark:bg-gray-700 sm:p-12 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="block">{t("cta.titleFirstRow")}</span>
          <span className="block text-primary-500  dark:text-primary-400">
            {t("cta.titleSecondRow")}
          </span>
        </h2>
        <div className="mt-8 flex flex-wrap items-start gap-4 md:gap-6 lg:mt-0 lg:flex-shrink-0">
          <ContactMeButton />
          <DownloadCVButton />
        </div>
      </div>
    </Container>
  )
}

export default CTA
