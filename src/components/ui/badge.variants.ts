import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-white",
        outline: "text-foreground",
        success:
          "border-transparent bg-green-500/10 text-green-600 dark:text-green-400",
        warning:
          "border-transparent bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
