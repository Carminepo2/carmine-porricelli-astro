import type { FunctionalComponent, ComponentChildren } from "preact"
import cn from "clsx"

interface Props {
  as?: string
  className?: string
  children: ComponentChildren
  disabled?: boolean
  onClick?: (event: Event) => void
  href?: string;
  target?: string;
  rel?: string;
}

const ButtonIcon: FunctionalComponent<Props> = ({
  as,
  className,
  children,
  ...props
}) => {
  const Component = as || "button"

  return (
    // @ts-ignore
    <Component
      className={cn(
        "opacity-50 transition-opacity hover:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default ButtonIcon
