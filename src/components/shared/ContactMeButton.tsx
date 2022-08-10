import type { FunctionalComponent } from "preact"
import Button from "@/components/shared/Button"
import { MailIcon } from "@/components/icons"
import LINKS from "@/data/links"

const ContactMeButton: FunctionalComponent = () => {
  return (
    <Button
      as="a"
      className="flex items-center space-x-2"
      size="large"
      href={LINKS.CONTACT_ME}
    >
      <MailIcon aria-hidden className="h-5 w-5" />
      <span>header.ctaContactMe</span>
    </Button>
  )
}

export default ContactMeButton
