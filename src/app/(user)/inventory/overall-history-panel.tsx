import { Card } from "@/components/ui/card";
import React from "react";

export default function OverallHistoryPanel() {
  return (
    <Card>
      <h2 className="font-medium text-grey-800 mb-5">Overall Inventory</h2>

      <div className="flex items-start gap-10">
        <div className="space-y-3 flex-grow-[0.5] border-r border-r-grey-50 pr-10">
          <div className="text-primary-500 font-semibold">Categories</div>
          <div className="text-grey-600 font-semibold">14</div>
          <div className="text-grey-400 text-sm">Last 7 days</div>
        </div>
        <div className="space-y-3 flex-grow border-r border-r-grey-50 pr-10">
          <div className="text-[#E19133] font-semibold">Total Products</div>
          <div className="flex justify-between">
            <div>
              <div className="text-grey-600 font-semibold">868</div>
              <div className="text-grey-400 text-sm mt-3">Last 7 days</div>
            </div>
            <div>
              <div className="text-grey-600 font-semibold">₹25000</div>
              <div className="text-grey-400 text-sm mt-3">Revenue</div>
            </div>
          </div>
        </div>
        <div className="space-y-3 flex-grow border-r border-r-grey-50 pr-10">
          <div className="text-[#845EBC] font-semibold">Top Selling</div>
          <div className="flex justify-between">
            <div>
              <div className="text-grey-600 font-semibold">5</div>
              <div className="text-grey-400 text-sm mt-3">Last 7 days</div>
            </div>
            <div>
              <div className="text-grey-600 font-semibold">₹25000</div>
              <div className="text-grey-400 text-sm mt-3">Cost</div>
            </div>
          </div>
        </div>
        <div className="space-y-3 flex-grow">
          <div className="text-error-400 font-semibold">Low Stocks</div>
          <div className="flex justify-between">
            <div>
              <div className="text-grey-600 font-semibold">12</div>
              <div className="text-grey-400 text-sm mt-3">Ordered</div>
            </div>
            <div>
              <div className="text-grey-600 font-semibold">2</div>
              <div className="text-grey-400 text-sm mt-3">Not in stock</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
