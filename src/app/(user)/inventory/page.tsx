import { Card } from "@/components/ui/card";
import React from "react";
import OverallHistoryPanel from "./overall-history-panel";
import ProductsListingTable from "./products-listing-table";

export default function InventoryPage() {
  return (
    <section>
      <div className="container py-6 space-y-6">
        <OverallHistoryPanel />

        <ProductsListingTable />
      </div>
    </section>
  );
}
