import ProfitAndRevenue from "@/components/charts/profit-and-revenue";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import BestSellingProductTable from "./best-selling-product-table";

export default function ReportsPage() {
  return (
    <main>
      <div className="container py-6 space-y-4">
        {/* INFO PANEL */}
        <div className="grid grid-cols-2 gap-x-4">
          {/* OVERVIEW CARD */}
          <Card>
            <h3 className="font-medium text-grey-800">Overview</h3>

            {/* PROFIT, REVENUE, SALES */}
            <div className="mt-5 grid grid-cols-3 border-b border-b-grey-50 pb-5">
              <div className="flex flex-col gap-y-3">
                <span className="text-grey-600">₹21,190</span>
                <span className="text-[#555555] text-sm">Total Profit</span>
              </div>
              <div className="flex flex-col gap-y-3">
                <span className="text-grey-600">₹18,300</span>
                <span className="text-[#DBA362] text-sm">Revenue</span>
              </div>
              <div className="flex flex-col gap-y-3">
                <span className="text-grey-600">₹17,432</span>
                <span className="text-[#845EBC] text-sm">Sales</span>
              </div>
            </div>
            {/* END PROFIT, REVENUE, SALES */}

            {/* PROFIT, REVENUE, SALES */}
            <div className="mt-5 grid gap-x-5 grid-cols-4">
              <div className="flex flex-col gap-y-3">
                <span className="text-grey-600">₹1,17,432</span>
                <span className="text-grey-500 text-sm">
                  Net purchase value
                </span>
              </div>
              <div className="flex flex-col gap-y-3">
                <span className="text-grey-600">₹80,432</span>
                <span className="text-grey-500 text-sm">Net sales value</span>
              </div>
              <div className="flex flex-col gap-y-3">
                <span className="text-grey-600">₹30,432</span>
                <span className="text-grey-500 text-sm">MoM Profit</span>
              </div>
              <div className="flex flex-col gap-y-3">
                <span className="text-grey-600">₹1,10,432</span>
                <span className="text-grey-500 text-sm">YoY Profit</span>
              </div>
            </div>
            {/* END PROFIT, REVENUE, SALES */}
          </Card>
          {/* END OVERVIEW CARD */}

          {/* TODO: WORK ON THIS TABLE */}
          {/* BEST SELLING CATEGORY CARD */}
          <Card>
            <h3 className="font-medium text-grey-800">Best selling category</h3>

            <Table className="text-sm">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Category</TableHeaderCell>
                  <TableHeaderCell>Turn Over</TableHeaderCell>
                  <TableHeaderCell>Increase By</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>₹26,000</TableCell>
                  <TableCell className="text-success-600">3.2%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Instant Food</TableCell>
                  <TableCell>₹22,000</TableCell>
                  <TableCell className="text-success-600">2%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Households</TableCell>
                  <TableCell>₹22,000</TableCell>
                  <TableCell className="text-success-600">1.5%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
          {/* ENDBEST SELLING CATEGORY CARD */}
        </div>
        {/* END INFO PANEL */}

        <ProfitAndRevenue />

        <BestSellingProductTable />
      </div>
    </main>
  );
}
