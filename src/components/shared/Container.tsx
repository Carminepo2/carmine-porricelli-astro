import type { FunctionalComponent } from "preact"
import cn from "clsx"

interface Props {
  as?: string;
  className?: string
}

const Container: FunctionalComponent<Props> = ({
  as,
  className,
  children,
}) => {
  const Component = as || "div"

  return (
    //@ts-ignore
    <Component
      className={cn(
        "mx-auto max-w-3xl px-4 pt-12 lg:max-w-5xl xl:max-w-6xl",
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Container
