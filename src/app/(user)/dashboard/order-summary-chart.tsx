"use client";

import { AreaChart } from "@/components/charts/area-chart";
import { Card } from "@/components/ui/card";
import React from "react";

const chartdata = [
  {
    date: "Jan 23",
    Ordered: 2890,
    Delivered: 2338,
  },
  {
    date: "Feb 23",
    Ordered: 2756,
    Delivered: 2103,
  },
  {
    date: "Mar 23",
    Ordered: 3322,
    Delivered: 2194,
  },
  {
    date: "Apr 23",
    Ordered: 3470,
    Delivered: 2108,
  },
  {
    date: "May 23",
    Ordered: 3475,
    Delivered: 1812,
  },
  {
    date: "Jun 23",
    Ordered: 3129,
    Delivered: 1726,
  },
  {
    date: "Jul 23",
    Ordered: 3490,
    Delivered: 1982,
  },
  {
    date: "Aug 23",
    Ordered: 2903,
    Delivered: 2012,
  },
  {
    date: "Sep 23",
    Ordered: 2643,
    Delivered: 2342,
  },
  {
    date: "Oct 23",
    Ordered: 2837,
    Delivered: 2473,
  },
  {
    date: "Nov 23",
    Ordered: 2954,
    Delivered: 3848,
  },
  {
    date: "Dec 23",
    Ordered: 3239,
    Delivered: 3736,
  },
];

export default function OrderSummaryChart() {
  return (
    <Card>
      <h2 className="text-grey-800 font-medium pb-8">Order Summary</h2>

      <AreaChart
        className="h-64"
        data={chartdata}
        index="date"
        categories={["Ordered", "Delivered"]}
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat("us").format(number).toString()}`
        }
        onValueChange={(v) => console.log(v)}
        colors={["ordered", "delivered"]}
      />
    </Card>
  );
}
