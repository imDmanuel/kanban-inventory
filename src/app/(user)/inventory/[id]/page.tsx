import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import productImage from "@/assets/product-image.png";
import Image from "next/image";

export default function ProductInfo() {
  return (
    <main>
      <div className="container py-6">
        <Card>
          <div className="flex items-center mb-8 gap-x-2">
            <h2 className="font-medium text-grey-800">Maggi</h2>

            <Button className="inline-flex items-center gap-x-2 ml-auto">
              <FiEdit2 />
              <span>Edit</span>
            </Button>
            <Button>Download</Button>
          </div>

          <Tabs>
            <TabsList
              defaultValue={"overview"}
              className="text-grey-700 font-normal gap-x-12 border-b-grey-50"
            >
              <TabsTrigger value="overview" className="px-0">
                Overview
              </TabsTrigger>
              <TabsTrigger value="purchases" className="px-0">
                Purchases
              </TabsTrigger>
              <TabsTrigger value="adjustments" className="px-0">
                Adjustments
              </TabsTrigger>
              <TabsTrigger value="history" className="px-0">
                History
              </TabsTrigger>
            </TabsList>

            <div className="mt-7">
              <TabsContent value="overview">
                <div className="flex">
                  {/* LEFT SIDE */}
                  <div className="flex-1">
                    <div className="text-grey-700 font-semibold">
                      Primary Details
                    </div>

                    <Table className="[&_tr]:border-none border-none">
                      <TableBody>
                        <TableRow>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Maggi</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Product ID</TableCell>
                          <TableCell>456567</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Product Category</TableCell>
                          <TableCell>Instant food</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Expiry Date</TableCell>
                          <TableCell>13/4/23</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Threshold Value</TableCell>
                          <TableCell>12</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <div className="text-grey-700 font-semibold mt-10">
                      Supplier Details
                    </div>
                    <Table className="[&_tr]:border-none border-none">
                      <TableBody>
                        <TableRow>
                          <TableCell>Supplier Name</TableCell>
                          <TableCell>Ronald Martin</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Contact Number</TableCell>
                          <TableCell>98789 86757</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <div className="text-grey-700 font-semibold mt-10">
                      Stock Locations
                    </div>
                    <Table>
                      <TableHead className="bg-grey-50">
                        <TableHeaderCell>Store Name</TableHeaderCell>
                        <TableHeaderCell>Stock in hand</TableHeaderCell>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Sulur Branch</TableCell>
                          <TableCell>15</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Singanallur Branch</TableCell>
                          <TableCell>19</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  {/* END LEFT SIDE */}

                  <div className="flex-grow-[0.2]">
                    <div className="mb-14 mx-auto border border-dashed border-grey-400 grid place-items-center size-44 ">
                      <Image src={productImage} alt="" />
                    </div>

                    <Table className="[&_tr]:border-none border-none text-grey-400 font-light">
                      <TableBody>
                        <TableRow>
                          <TableCell>Opening Stock</TableCell>
                          <TableCell>40</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Remaining Stock</TableCell>
                          <TableCell>34</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>On the way</TableCell>
                          <TableCell>15</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Threshold Value</TableCell>
                          <TableCell>12</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="purchases">Purchases</TabsContent>
              <TabsContent value="adjustments">Adjustments</TabsContent>
              <TabsContent value="history">History</TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>
    </main>
  );
}
