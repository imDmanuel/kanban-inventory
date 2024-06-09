"use client";

import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

import DashboardIcon from "@/assets/home-icon.svg";
import InventoryIcon from "@/assets/inventory-icon.svg";
import ReportIcon from "@/assets/report-icon.svg";
import SuppliersIcon from "@/assets/supplers-icon.svg";
import OrderIcon from "@/assets/order-icon.svg";
import ManagestoreIcon from "@/assets/store-icon.svg";
import SettingsIcon from "@/assets/settings-icon.svg";
import LogoutIcon from "@/assets/logout-icon.svg";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const sidebarLinks = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    to: "/dashboard",
  },
  {
    icon: InventoryIcon,
    title: "Inventory",
    to: "/inventory",
  },
  {
    icon: ReportIcon,
    title: "Reports",
    to: "/reports",
  },
  {
    icon: SuppliersIcon,
    title: "Suppliers",
    to: "/suppliers",
  },
  {
    icon: OrderIcon,
    title: "Orders",
    to: "/orders",
  },
  {
    icon: ManagestoreIcon,
    title: "Manage Store",
    to: "/manage-store",
  },
  {
    icon: SettingsIcon,
    title: "Settings",
    to: "/settings",
  },
  {
    icon: LogoutIcon,
    title: "Log Out",
    to: "/logout",
  },
];

export default function Sidebar() {
  const activePath = usePathname();

  return (
    <aside className="min-w-72 bg-white text-grey-600 font-medium flex flex-col pb-6">
      <div className="border-b border-b-grey-50">
        {/* LOGO */}
        <h2 className="flex items-center pl-9 font-semibold gap-2 h-[--navbar-height]">
          <Image src={Logo} alt="" className="size-12" />

          <div className="text-primary-500">KANBAN</div>
        </h2>
        {/* END LOGO */}
      </div>
      <ScrollArea className="pt-3 flex-1 overflow-y-auto max-h-[calc(100dvh_-_var(--navbar-height))] [&>div]:h-full [&>div>div]:h-full">
        <div className="flex flex-col h-full justify-between">
          {/* SIDEBAR LINKS */}
          <ul className="">
            {sidebarLinks.slice(0, 6).map(({ icon, title, to }) => (
              <li key={to}>
                <Link
                  data-active={activePath === to}
                  href={to}
                  className={
                    "flex items-center space-x-4 py-4 hover:text-grey-400 data-[active=true]:text-primary-500 px-9"
                  }
                >
                  <Image src={icon} alt="" />
                  <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* END SIDEBAR LINKS */}

          {/* ACCOUNT ACTION LINKS */}
          <ul className="space-y-3">
            {sidebarLinks.slice(6).map(({ icon, title, to }) => (
              <li key={to}>
                <Link
                  data-active={activePath === to}
                  href={to}
                  className={
                    "flex items-center space-x-4 py-4 hover:text-grey-400 data-[active=true]:text-primary-500 px-9"
                  }
                >
                  <Image src={icon} alt="" />
                  <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* END ACCOUNT ACTION LINKS */}
        </div>
      </ScrollArea>
    </aside>
  );
}
