import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRoot,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

import RemainingStock1 from "@/assets/remaining-stock-1.png";
import RemainingStock2 from "@/assets/remaining-stock-2.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const data = [
  {
    id: 1,
    title: "Tata Salt",
    image: RemainingStock1,
    quantity: 10,
    status: "Low",
  },
  {
    id: 2,
    title: "Lays",
    image: RemainingStock2,
    quantity: 15,
    status: "Low",
  },
  {
    id: 3,
    title: "Lays",
    image: RemainingStock2,
    quantity: 15,
    status: "Low",
  },
];

export default function LowQualityStock() {
  return (
    <Card className="pb-5">
      <div className="flex items-baseline mb-2">
        <h2>Low Quality Stock</h2>

        <Link href={"#"} className="text-primary-700 text-sm ml-auto">
          See all
        </Link>
      </div>

      <div className="grid grid-cols-[64px_1fr_30px] items-center">
        {data.map((item) => (
          <>
            <div className="w-16">
              <Image src={item.image} alt="" />
            </div>
            <div>
              <div className="text-grey-800 font-semibold mb-1">
                {item.title}
              </div>
              <div className="text-grey-500 text-sm">
                Remaining Quantity: {item.quantity}
              </div>
            </div>
            <div className="text-right">
              <Badge variant="error" className="rounded-full">
                {item.status}
              </Badge>
            </div>
          </>
        ))}
      </div>
    </Card>
  );
}
