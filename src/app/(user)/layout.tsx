"use client";

import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-grey-50 min-h-[100dvh]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <ScrollArea className="max-h-[calc(100dvh_-_var(--navbar-height))] overflow-y-auto">
          {children}

          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </main>
  );
}
