import type { FunctionalComponent } from "preact"
import { t } from "i18next"
import Button from "@/components/shared/Button"
import { MailIcon } from "@/components/icons"
import LINKS from "@/static/data/links"

const ContactMeButton: FunctionalComponent = () => {
  return (
    <Button
      as="a"
      className="flex items-center space-x-2"
      href={LINKS.CONTACT_ME}
      btnSize="large"
    >
      <MailIcon aria-hidden className="h-5 w-5" />
      <span>{t("header.ctaContactMe")}</span>
    </Button>
  )
}

export default ContactMeButton
