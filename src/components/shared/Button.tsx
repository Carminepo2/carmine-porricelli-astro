import type { ComponentChildren, FunctionalComponent } from "preact"
import cn from "clsx"

export type ButtonMode = "primary" | "secondary" | "outline"
export type ButtonSize = "small" | "medium" | "large"

interface Props {
  as?: string
  className?: string
  children: ComponentChildren
  size?: ButtonSize
  mode?: ButtonMode
  disabled?: boolean,
  onClick?: (event: Event) => void
  href?: string;
  download?: boolean;
}

const Button: FunctionalComponent<Props> = ({
  as,
  className,
  children,
  size = "medium",
  mode = "primary",
  ...props
}) => {
  const Component = as || "button"

  const buttonClassName = cn(
    "inline-block font-medium leading-normal rounded transition duration-200",
    {
      "dark:bg-primary-400 dark:hover:bg-primary-300 dark:text-gray-800 bg-primary-500 hover:bg-primary-400 text-white":
        mode === "primary",
      "bg-primary-50 hover:bg-primary-100 text-primary-600 dark:bg-opacity-10 hover:bg-opacity-20 dark:text-white":
        mode === "secondary",
      "hover:text-gray-700 border": mode === "outline",
    },
    {
      "px-2.5 py-1.5 text-xs": size === "small",
      "px-4 py-2 text-sm": size === "medium",
      "px-6 py-3 text-base": size === "large",
    },
    className
  )

  return (
    // @ts-ignore
    <Component className={buttonClassName} {...props}>
      {children}
    </Component>
  )
}

export default Button
