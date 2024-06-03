import React from "react";
import { Card } from "@/components/ui/card";

import SuppliersIcon from "@/assets/supplers-icon.svg";
import CategoriesIcon from "@/assets/categories-icon.svg";
import Image from "next/image";

export default function InventorySummaryPanel() {
  return (
    <Card>
      <h2 className="text-grey-800 font-medium mb-6">Product Summary</h2>

      <div className="grid grid-cols-[1fr_1px_1fr] gap-8">
        <div>
          <Image src={SuppliersIcon} alt="" className="size-8 mx-auto" />

          <div className="flex gap-x-2 justify-between mt-3">
            <span className="text-grey-600 flex-1 font-semibold whitespace-nowrap">
              ₹ 832
            </span>
            <span className="text-grey-500 flex-1 text-right truncate">
              No. of Supliers
            </span>
          </div>
        </div>
        <div className="border-r border-r-grey-50"></div>
        <div>
          <Image src={CategoriesIcon} alt="" className="size-8 mx-auto" />

          <div className="flex gap-x-2 justify-between mt-3">
            <span className="text-grey-600 flex-1 font-semibold whitespace-nowrap">
              ₹ 18,300
            </span>
            <span className="text-grey-500 flex-1 text-right truncate">
              No. of Categories
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
