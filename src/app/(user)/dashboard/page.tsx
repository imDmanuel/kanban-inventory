import React from "react";
import SalesOverviewPanel from "./sales-overview-panel";
import ProuductSummaryPanel from "./product-summary-panel";
import PurchaseOverviewPanel from "./purchase-overview-panel";
import InventorySummaryPanel from "./inventory-summary-panel";
import SalesAndPurchaseChart from "./sales-and-purchase-chart";
import TopSellingStockTable from "./top-selling-stock-table";
import OrderSummaryChart from "./order-summary-chart";
import LowQualityStock from "./low-quantity-stock";

export default function Dashboard() {
  return (
    <section>
      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6">
          <div className="space-y-6">
            <SalesOverviewPanel />

            <PurchaseOverviewPanel />
          </div>

          <div className="space-y-6">
            <InventorySummaryPanel />

            <ProuductSummaryPanel />
          </div>

          <div className="space-y-6">
            <SalesAndPurchaseChart />

            <TopSellingStockTable />
          </div>

          <div className="space-y-6">
            <OrderSummaryChart />

            <LowQualityStock />
          </div>
        </div>
      </div>
    </section>
  );
}
