"use client";

import * as TabsPrimitives from "@radix-ui/react-tabs";
import React from "react";

import { cx, focusRing } from "@/lib/utils";

const Tabs = (
  props: Omit<
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.Root>,
    "orientation"
  >
) => {
  return <TabsPrimitives.Root {...props} />;
};

Tabs.displayName = "Tabs";

type TabsListVariant = "line" | "solid";

const TabsListVariantContext = React.createContext<TabsListVariant>("line");

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitives.List> {
  variant?: TabsListVariant;
}

const variantStyles: Record<TabsListVariant, string> = {
  line: cx(
    // base
    "flex items-center justify-start border-b",
    // border color
    "border-grey-50 -dark:border-grey-800"
  ),
  solid: cx(
    // base
    "inline-flex items-center justify-center rounded-md p-1",
    // border color
    // "border-grey-200 -dark:border-grey-800",
    // background color
    "bg-grey-100 -dark:bg-grey-800"
  ),
};

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.List>,
  TabsListProps
>(({ className, variant = "line", children, ...props }, forwardedRef) => (
  <TabsPrimitives.List
    ref={forwardedRef}
    className={cx(variantStyles[variant], className)}
    {...props}
  >
    <TabsListVariantContext.Provider value={variant}>
      {children}
    </TabsListVariantContext.Provider>
  </TabsPrimitives.List>
));

TabsList.displayName = "TabsList";

function getVariantStyles(tabVariant: TabsListVariant) {
  switch (tabVariant) {
    case "line":
      return cx(
        // base
        "-mb-px items-center justify-center whitespace-nowrap border-b-2 border-transparent pb-2 text-sm font-medium transition-all",
        // text color
        "text-grey-500 --dark:text-grey-500",
        // hover
        "hover:text-grey-700 hover:--dark:text-grey-400",
        // border hover
        // "hover:border-grey-300 hover:--dark:border-grey-400",
        // selected
        "data-[state=active]:border-primary-600 data-[state=active]:text-grey-700",
        "data-[state=active]:--dark:border-grey-50 data-[state=active]:--dark:text-grey-50",
        // disabled
        "disabled:pointer-events-none",
        "disabled:text-grey-300 disabled:--dark:text-grey-700"
      );
    case "solid":
      return cx(
        // base
        "inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1 transition-all text-sm font-medium",
        // text color
        "text-grey-500 -dark:text-grey-400",
        // hover
        "hover:text-grey-700 hover:--dark:text-grey-200",
        // selected
        " data-[state=active]:bg-white data-[state=active]:text-grey-900 data-[state=active]:shadow",
        "data-[state=active]:--dark:bg-grey-900 data-[state=active]:--dark:text-grey-50",
        // disabled
        "disabled:pointer-events-none disabled:text-grey-400 disabled:--dark:text-grey-600 disabled:opacity-50"
      );
  }
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger>
>(({ className, children, ...props }, forwardedRef) => {
  const variant = React.useContext(TabsListVariantContext);
  return (
    <TabsPrimitives.Trigger
      ref={forwardedRef}
      className={cx(getVariantStyles(variant), focusRing, className)}
      {...props}
    >
      {children}
    </TabsPrimitives.Trigger>
  );
});

TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({ className, ...props }, forwardedRef) => (
  <TabsPrimitives.Content
    ref={forwardedRef}
    className={cx("outline-none", focusRing, className)}
    {...props}
  />
));

TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, TabsTrigger };
