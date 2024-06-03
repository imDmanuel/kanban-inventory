import React from "react";
import { Card } from "@/components/ui/card";

import QuantityIcon from "@/assets/quantity-icon.svg";
import OnTheWayIcon from "@/assets/on-the-way-icon.svg";
import Image from "next/image";

export default function ProductSummaryPanel() {
  return (
    <Card>
      <h2 className="text-grey-800 font-medium mb-6">Inventory Summary</h2>

      <div className="grid grid-cols-[1fr_1px_1fr] gap-8">
        <div>
          <Image src={QuantityIcon} alt="" className="size-8 mx-auto" />

          <div className="flex gap-x-2 justify-between mt-3">
            <span className="text-grey-600 flex-1 font-semibold whitespace-nowrap">
              ₹ 832
            </span>
            <span className="text-grey-500 flex-1 text-right">Sales</span>
          </div>
        </div>
        <div className="border-r border-r-grey-50"></div>
        <div>
          <Image src={OnTheWayIcon} alt="" className="size-8 mx-auto" />

          <div className="flex gap-x-2 justify-between mt-3">
            <span className="text-grey-600 flex-1 font-semibold whitespace-nowrap">
              ₹ 18,300
            </span>
            <span className="text-grey-500 flex-1 text-right">Revenue</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
