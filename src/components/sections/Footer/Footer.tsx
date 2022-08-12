import type { FC } from "react"
import Container from "@/components/shared/Container"
import Logo from "@/components/shared/Logo"
import LINKS from "@/static/data/links"

const Footer: FC = () => {
  return (
    <footer className="py-16 md:py-28">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto" />
        <div className="mt-6 text-center text-xs md:mt-0 md:text-right md:text-sm ">
          <p>
            Copyright {new Date().getFullYear()} &copy; Carmine Porricelli - All
            Right Reserved.
          </p>
          <a
            className="mt-0.5 text-primary-700 hover:underline dark:text-primary-400 sm:mt-0"
            target="__blank"
            rel="noreferrer"
            href={LINKS.GITHUB_SITE_REPO}
          >
            Made by me, checkout the source code!
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
