import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

import PurchaseIcon from "@/assets/purchase-icon.svg";
import CostIcon from "@/assets/cost-icon.svg";
import CancelIcon from "@/assets/cancel-icon.svg";
import ReturnIcon from "@/assets/profit-icon.svg";

export default function PurchaseOverviewPanel() {
  return (
    <Card>
      <h2 className="text-grey-800 font-medium mb-6">Purchase Overview</h2>

      <div className="grid grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] gap-8">
        <div>
          <Image src={PurchaseIcon} alt="" className="size-8 mx-auto" />

          <div className="flex gap-x-2 justify-between mt-3">
            <span className="text-grey-600 flex-1 font-semibold whitespace-nowrap">
              82
            </span>
            <span className="text-grey-500 flex-1 text-right">Purchase</span>
          </div>
        </div>
        <div className="border-r border-r-grey-50"></div>
        <div>
          <Image src={CostIcon} alt="" className="size-8 mx-auto" />

          <div className="flex gap-x-2 justify-between mt-3">
            <span className="text-grey-600 flex-1 font-semibold whitespace-nowrap">
              ₹ 18,300
            </span>
            <span className="text-grey-500 flex-1 text-right">Revenue</span>
          </div>
        </div>
        <div className="border-r border-r-grey-50"></div>
        <div>
          <Image src={CancelIcon} alt="" className="size-8 mx-auto" />

          <div className="flex gap-x-2 justify-between mt-3">
            <span className="text-grey-600 flex-1 font-semibold whitespace-nowrap">
              ₹ 868
            </span>
            <span className="text-grey-500 flex-1 text-right">Profit</span>
          </div>
        </div>
        <div className="border-r border-r-grey-50"></div>
        <div>
          <Image src={ReturnIcon} alt="" className="size-8 mx-auto" />

          <div className="flex gap-x-2 justify-between mt-3">
            <span className="text-grey-600 flex-1 font-semibold whitespace-nowrap">
              ₹ 832
            </span>
            <span className="text-grey-500 flex-1 text-right">Sales</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
