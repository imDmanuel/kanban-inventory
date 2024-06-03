// Tremor Raw Checkbox [v0.0.0]

import React from "react";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";

import { cx, focusRing } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root>
>(({ className, checked, ...props }, forwardedRef) => {
  return (
    <CheckboxPrimitives.Root
      ref={forwardedRef}
      {...props}
      checked={checked}
      className={cx(
        // base
        "relative inline-flex size-4 shrink-0 appearance-none items-center justify-center rounded border shadow-sm outline-none transition duration-100 enabled:cursor-pointer",
        // text color
        "text-white -dark::text-grey-50",
        // background color
        "bg-white -dark::bg-grey-900",
        // border color
        "border-grey-300 -dark::border-grey-800",
        // disabled
        "data-[disabled]:border-grey-300 data-[disabled]:bg-grey-100 data-[disabled]:text-grey-400",
        "data-[disabled]:-dark::border-grey-700 data-[disabled]:-dark::bg-grey-800 data-[disabled]:-dark::text-grey-500",
        // "disabled:-dark::border-grey-700 disabled:-dark::bg-grey-800 disabled:-dark::text-grey-500",
        // checked and enabled
        "enabled:data-[state=checked]:border-0 enabled:data-[state=checked]:border-transparent enabled:data-[state=checked]:bg-primary-500",
        // indeterminate
        "enabled:data-[state=indeterminate]:border-0 enabled:data-[state=indeterminate]:border-transparent enabled:data-[state=indeterminate]:bg-blue-500",
        // focus
        focusRing,
        className
      )}
    >
      <CheckboxPrimitives.Indicator className="flex size-full items-center justify-center">
        {checked === "indeterminate" ? (
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              x1="4"
              x2="12"
              y1="8"
              y2="8"
            ></line>
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2 5.59998L6.79999 9.99998L4.79999 7.99998"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        )}
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };
