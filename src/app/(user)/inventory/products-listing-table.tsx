"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";
import { RiFilter3Line } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Dropzone from "react-dropzone";
import AddNewProductDialog from "./add-new-product-dialog";

interface IProductListing {
  itemName: string;
  buyingPrice: string;
  quantity: string;
  thresholdValue: string;
  expiryDate: string;
  availability: "In stock" | "Out of stock" | "Low stock";
}

const data: IProductListing[] = [
  {
    itemName: "Maggi",
    buyingPrice: "₹430",
    quantity: "43 Packets",
    thresholdValue: "12 Packets",
    expiryDate: "11/12/22",
    availability: "In stock",
  },
  {
    itemName: "Bru",
    buyingPrice: "₹257",
    quantity: "22 Packets",
    thresholdValue: "12 Packets",
    expiryDate: "21/12/22",
    availability: "Out of stock",
  },
  {
    itemName: "Red Bull",
    buyingPrice: "₹405",
    quantity: "36 Packets",
    thresholdValue: "9 Packets",
    expiryDate: "5/12/22",
    availability: "In stock",
  },
  {
    itemName: "Bourn Vita",
    buyingPrice: "₹502",
    quantity: "14 Packets",
    thresholdValue: "6 Packets",
    expiryDate: "8/12/22",
    availability: "Out of stock",
  },
  {
    itemName: "Horlicks",
    buyingPrice: "₹530",
    quantity: "5 Packets",
    thresholdValue: "5 Packets",
    expiryDate: "9/1/23",
    availability: "In stock",
  },
  {
    itemName: "Harpic",
    buyingPrice: "₹605",
    quantity: "10 Packets",
    thresholdValue: "5 Packets",
    expiryDate: "9/1/23",
    availability: "In stock",
  },
  {
    itemName: "Ariel",
    buyingPrice: "₹408",
    quantity: "23 Packets",
    thresholdValue: "7 Packets",
    expiryDate: "15/12/23",
    availability: "Out of stock",
  },
  {
    itemName: "Scotch Brite",
    buyingPrice: "₹359",
    quantity: "43 Packets",
    thresholdValue: "8 Packets",
    expiryDate: "6/6/23",
    availability: "In stock",
  },
  {
    itemName: "Coca cola",
    buyingPrice: "₹205",
    quantity: "41 Packets",
    thresholdValue: "10 Packets",
    expiryDate: "11/11/22",
    availability: "Low stock",
  },
];
export default function ProductsListingTable() {
  const [newProductDialogOpen, setNewProductDialogOpen] = useState(false);
  return (
    <>
      <Dialog>
        <Card>
          <div className="flex justify-between gap-x-20 mb-3">
            <h2 className="font-medium text-grey-800">Products</h2>

            <div className="flex gap-x-3">
              <DialogTrigger asChild>
                <Button
                  variant="primary"
                  onClick={() => setNewProductDialogOpen(true)}
                >
                  Add Product
                </Button>
              </DialogTrigger>
              <Button variant="outline" className="flex gap-x-2">
                <RiFilter3Line />
                <span>Filters</span>
              </Button>
              <Button variant="outline">Download all</Button>
            </div>
          </div>
          <TableRoot>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Products</TableHeaderCell>
                  <TableHeaderCell>Buying Price</TableHeaderCell>
                  <TableHeaderCell>Quantity</TableHeaderCell>
                  <TableHeaderCell>Threshold Value</TableHeaderCell>
                  <TableHeaderCell>Expiry Date</TableHeaderCell>
                  <TableHeaderCell className="text-right">
                    Availability
                  </TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(
                  ({
                    itemName,
                    availability,
                    buyingPrice,
                    expiryDate,
                    quantity,
                    thresholdValue,
                  }) => (
                    <TableRow key={itemName}>
                      <TableCell>{itemName}</TableCell>
                      <TableCell>{buyingPrice}</TableCell>
                      <TableCell>{quantity}</TableCell>
                      <TableCell>{thresholdValue}</TableCell>
                      <TableCell>{expiryDate}</TableCell>
                      <TableCell className="text-right">
                        {availability == "In stock" ? (
                          <span className="text-success-600 text-sm font-medium">
                            In stock
                          </span>
                        ) : availability == "Out of stock" ? (
                          <span className="text-error-600 text-sm font-medium">
                            Out of stock
                          </span>
                        ) : (
                          <span className="text-[#E19133] text-sm font-medium">
                            Low stock
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>

            <div className="flex justify-between w-full mt-5">
              <Button variant="outline">Previous</Button>

              <div className="text-grey-700 text-sm font-normal">
                Page <span className="font-medium">1</span> of{" "}
                <span className="font-medium">10</span>
              </div>

              <Button variant="outline">Next</Button>
            </div>
          </TableRoot>
        </Card>

        <AddNewProductDialog />
      </Dialog>
      {/* END ADD NEW PRODUCT DIALOG */}
    </>
  );
}
