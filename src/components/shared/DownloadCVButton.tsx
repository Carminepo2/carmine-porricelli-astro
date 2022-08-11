import type { FunctionalComponent } from "preact"
import i18next, { t } from "i18next"
import { DownloadIcon } from "@/components/icons"
import Button from "@/components/shared/Button"
import { formatDate } from "@/utils/date"
import CONFIG from "@/data/config"

const DownloadCVButton: FunctionalComponent = () => {
  let cvDownloadUrl = `/cv/CV_CARMINE_PORRICELLI_${i18next.language.toUpperCase()}.pdf`

  return (
    <div>
      <Button
        as="a"
        className="flex items-center space-x-2"
        btnType="secondary"
        btnSize="large"
        href={cvDownloadUrl}
        download
      >
        <DownloadIcon aria-hidden className="h-5 w-5" />
        <span>{t("header.ctaCV")}</span>
      </Button>
      <small className="relative bottom-0.5 select-none text-xs text-gray-400/60">
        {t("header.updated")}
        <span className="font-medium text-gray-500/60">
          {formatDate(new Date(CONFIG.LAST_UPDATED_CV_DATE), "it")}
        </span>
      </small>
    </div>
  )
}

export default DownloadCVButton
