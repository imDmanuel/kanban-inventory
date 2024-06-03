import NotificationIcon from "@/assets/notification-icon.svg";
import ProfileImage from "@/assets/profile-image.png";

import { Input } from "@/components/ui/input";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white w-full">
      <div className="container flex items-center h-[--navbar-height]">
        <Input
          placeholder="Search product, supplier,order"
          id="search"
          name="search"
          type="search"
          className="mt-2 max-w-96 border-grey-50 text-grey-400"
        />

        <div className="ml-auto flex items-center gap-x-5">
          <Image src={NotificationIcon} alt="" />

          <Image src={ProfileImage} alt="" className="rounded-full size-10" />
        </div>
      </div>
    </nav>
  );
}
