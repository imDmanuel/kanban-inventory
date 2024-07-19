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

const bestSellingProductData = [
  {
    name: "Tomato",
    id: "23567",
    category: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "₹17,000",
    increment: "2.3%",
  },
  {
    name: "Tomato",
    id: "23567",
    category: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "₹17,000",
    increment: "2.3%",
  },
  {
    name: "Tomato",
    id: "23567",
    category: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "₹17,000",
    increment: "2.3%",
  },
  {
    name: "Tomato",
    id: "23567",
    category: "Vegetable",
    remainingQuantity: "225 kg",
    turnOver: "₹17,000",
    increment: "2.3%",
  },
];

export default function BestSellingProductTable() {
  return (
    <Card>
      <h3 className="text-grey-800 font-medium mb-5">Best selling product</h3>
      <Table>
        <TableHead>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell>Product ID</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Remaining Quantity</TableHeaderCell>
          <TableHeaderCell>Turn Over</TableHeaderCell>
          <TableHeaderCell>Increase By</TableHeaderCell>
        </TableHead>
        <TableBody>
          {bestSellingProductData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.remainingQuantity}</TableCell>
              <TableCell>{item.turnOver}</TableCell>
              <TableCell>{item.increment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
