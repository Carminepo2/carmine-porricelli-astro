import type { FC } from "react"
import Container from "@/components/shared/Container"
import Logo from "@/components/shared/Logo"
import LINKS from "@/data/links"

const Footer: FC = () => {
  return (
    <footer className="py-16 md:py-28">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto" />
        <div className="mt-6 text-center text-xs md:mt-0 md:text-right md:text-sm ">
          <p>
            Copyright &copy; {new Date().getFullYear()} Carmine Porricelli All
            rights reserved.
          </p>
          <a
            className="text-primary-700 hover:underline dark:text-primary-400"
            target="__blank"
            rel="noreferrer"
            href={LINKS.GITHUB_SITE_REPO}
          >
            Checkout the source code!
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
