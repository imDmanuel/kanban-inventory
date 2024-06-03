// Tremor Raw Badge [v0.0.0]

import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx } from "@/lib/utils";

const badgeVariants = tv({
  base: cx(
    "inline-flex items-center gap-x-1 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium"
  ),
  variants: {
    variant: {
      default: [
        "bg-blue-50 text-blue-900",
        "-dark:bg-blue-400/10 -dark:text-blue-400",
      ],
      neutral: [
        "bg-grey-50 text-grey-900 ring-grey-500/30",
        "-dark:bg-grey-400/10 -dark:text-grey-400",
      ],
      success: [
        "bg-emerald-50 text-emerald-900 ring-emerald-600/30",
        "-dark:bg-emerald-400/10 -dark:text-emerald-400",
      ],
      error: [
        "bg-error-50 text-error-700 ring-error-600/20",
        "-dark:bg-error-400/10 -dark:text-error-400",
      ],
      warning: [
        "bg-yellow-50 text-yellow-900 ring-yellow-600/30",
        "-dark:bg-yellow-400/10 -dark:text-yellow-500",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps
  extends React.ComponentPropsWithoutRef<"span">,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={cx(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants, type BadgeProps };
