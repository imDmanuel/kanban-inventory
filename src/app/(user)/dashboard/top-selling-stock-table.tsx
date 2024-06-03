import { Card } from "@/components/ui/card";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/components/ui/table";
const data: Array<{
  id: number;
  name: string;
  soldQuantity: string;
  remainingQuantity: string;
  price: string;
}> = [
  {
    id: 1,
    name: "Surf Excel",
    soldQuantity: "30",
    remainingQuantity: "12",
    price: "100",
  },
  {
    id: 2,
    name: "Rin",
    soldQuantity: "21",
    remainingQuantity: "15",
    price: "207",
  },
  {
    id: 3,
    name: "Parle G",
    soldQuantity: "19",
    remainingQuantity: "17",
    price: "105",
  },
  //   {
  //     id: 4,
  //     name: "Maxime Bujet",
  //     soldQuantity: "19",
  //     remainingQuantity: "Region D",
  //     price: "overperforming",
  //   },
  //   {
  //     id: 5,
  //     name: "Emma Nelly",
  //     soldQuantity: "600,000",
  //     remainingQuantity: "Region E",
  //     price: "underperforming",
  //   },
];
export default function TopSellingStockTable() {
  return (
    <Card>
      <h2 className="font-medium text-grey-800 mb-5">Top Selling Stock</h2>

      <TableRoot>
        <Table className="text-sm">
          <TableHead>
            <TableRow className="text-grey-500">
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Sold Quantity</TableHeaderCell>
              <TableHeaderCell>Remaining Quantity</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody className="text-[#666666]">
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="">{item.soldQuantity}</TableCell>
                <TableCell>{item.remainingQuantity}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </Card>
  );
}
