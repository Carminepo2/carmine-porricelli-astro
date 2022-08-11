import type { ComponentProps } from "preact"
import type { JSXInternal } from "preact/src/jsx"

import cn from "clsx"

export type ButtonType = "primary" | "secondary" | "outline"
export type ButtonSize = "small" | "medium" | "large"

interface Props<T extends keyof JSXInternal.IntrinsicElements> {
  as?: T
  btnSize?: ButtonSize
  btnType?: ButtonType
}

const Button = <T extends keyof JSXInternal.IntrinsicElements = "button">({
  as,
  className,
  children,
  btnSize = "medium",
  btnType = "primary",
  ...props
}: Props<T> & ComponentProps<T>) => {
  const Component = (as || "button") as T

  const buttonClassName = cn(
    "inline-block font-medium leading-normal rounded transition duration-200",
    {
      "dark:bg-primary-400 dark:hover:bg-primary-300 dark:text-gray-800 bg-primary-500 hover:bg-primary-400 text-white":
        btnType === "primary",
      "bg-primary-50 hover:bg-primary-100 text-primary-600 dark:bg-opacity-10 hover:bg-opacity-20 dark:text-white":
        btnType === "secondary",
      "hover:text-gray-700 border": btnType === "outline",
    },
    {
      "px-2.5 py-1.5 text-xs": btnSize === "small",
      "px-4 py-2 text-sm": btnSize === "medium",
      "px-6 py-3 text-base": btnSize === "large",
    },
    className
  )

  return (
    //@ts-ignore
    <Component className={buttonClassName} {...props}>
      {children}
    </Component>
  )
}

export default Button
