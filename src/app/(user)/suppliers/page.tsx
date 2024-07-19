import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { FaFilter } from "react-icons/fa6";

export default function SuppliersPage() {
  return (
    <main>
      <div className="container py-6 space-y-4">
        <Card>
          <div className="flex items-center gap-x-6 justify-between">
            <h3 className="font-medium">Suppliers</h3>

            <div className="flex items-center gap-x-3">
              <Button variant="primary">Add new supplier</Button>
              <Button className="space-x-2">
                <FaFilter />
                <span>Filters</span>
              </Button>
              <Button>Download all</Button>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
