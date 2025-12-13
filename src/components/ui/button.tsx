"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        "destructive-outline":
          "border border-destructive/50 text-destructive hover:bg-destructive/10 focus-visible:ring-destructive/20 dark:border-destructive/50 dark:text-destructive dark:hover:bg-destructive/20",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-6 rounded-md gap-1 px-2 text-xs has-[>svg]:px-1.5",
        sm: "h-7 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        default: "h-8 px-4 py-2 has-[>svg]:px-3",
        lg: "h-9 rounded-md px-5 has-[>svg]:px-4",
        xl: "h-10 rounded-md px-6 has-[>svg]:px-5",
        icon: "size-8",
        "icon-sm": "size-7",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    render?: React.ReactElement<{ className?: string; children?: React.ReactNode }>
  }

function Button({
  className,
  variant,
  size,
  render,
  children,
  ...props
}: ButtonProps) {
  const combinedClassName = cn(buttonVariants({ variant, size, className }))

  // If render prop is provided, clone the element with button props
  if (render && React.isValidElement(render)) {
    return React.cloneElement(render, {
      ...props,
      className: cn(combinedClassName, (render.props as { className?: string })?.className),
      children: children ?? (render.props as { children?: React.ReactNode })?.children,
    } as React.HTMLAttributes<HTMLElement>)
  }

  return (
    <button
      data-slot="button"
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button, buttonVariants }
