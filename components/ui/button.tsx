import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 dark:focus-visible:ring-ring/60 shadow-md active:scale-[0.97] will-change-transform backdrop-blur-md backdrop-saturate-150",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary/80 hover:shadow-lg hover:scale-105 dark:bg-primary/80 dark:hover:bg-primary/70",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-red-500/30 hover:shadow-md",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted/30 hover:border-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70 hover:shadow-md",
        ghost:
          "bg-transparent text-foreground hover:bg-muted/30 hover:shadow-sm dark:hover:bg-muted/20",
        link: "text-primary underline underline-offset-4 hover:text-primary/80 hover:underline-offset-2",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
