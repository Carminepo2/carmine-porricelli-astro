import type { ComponentProps } from "preact"
import type { JSXInternal } from "preact/src/jsx"

import cn from "clsx"

interface Props<T extends keyof JSXInternal.IntrinsicElements> {
  as?: T
}

const ButtonIcon = <T extends keyof JSXInternal.IntrinsicElements = "button">({
  as,
  className,
  children,
  ...props
}: Props<T> & ComponentProps<T>) => {
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
