// Tremor Raw Button [v0.0.0]

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { RiLoader2Fill } from "@remixicon/react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx, focusRing } from "@/lib/utils";

const buttonVariants = tv({
  base: [
    // base
    "relative inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out",
    // disabled
    "disabled:pointer-events-none disabled:shadow-none",
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      outline: [],
      primary: [
        // border
        "border-transparent",
        // text color
        "text-white -dark::text-grey-900",
        // background color
        "bg-grey-900 -dark::bg-grey-50",
        // hover color
        "hover:bg-grey-800 -dark::hover:bg-grey-200",
        // disabled
        "disabled:bg-grey-100 disabled:text-grey-400",
        "disabled:-dark::bg-grey-800 disabled:-dark::text-grey-600",
      ],
      secondary: [
        // border
        "border-grey-300 -dark::border-grey-800",
        // text color
        "text-grey-900 -dark::text-grey-50",
        // background color
        " bg-white -dark::bg-grey-950",
        //hover color
        "hover:bg-grey-50 -dark::hover:bg-grey-900/60",
        // disabled
        "disabled:text-grey-400",
        "disabled:-dark::text-grey-600",
      ],
      light: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-grey-900 -dark::text-grey-50",
        // background color
        "bg-grey-200 -dark::bg-grey-900",
        // hover color
        "hover:bg-grey-300/70 -dark::hover:bg-grey-800/80",
        // disabled
        "disabled:bg-grey-100 disabled:text-grey-400",
        "disabled:-dark::bg-grey-800 disabled:-dark::text-grey-600",
      ],
      destructive: [
        // text color
        "text-white",
        // border
        "border-transparent",
        // background color
        "bg-red-600 -dark::bg-red-700",
        // hover color
        "hover:bg-red-700 -dark::hover:bg-red-600",
        // disabled
        "disabled:bg-red-300 disabled:text-white",
        "disabled:-dark::bg-red-950 disabled:-dark::text-red-400",
      ],
    },
  },
  defaultVariants: {
    variant: "outline",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      children,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <RiLoader2Fill
              className="size-4 shrink-0 animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">
              {loadingText ? loadingText : "Loading"}
            </span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
