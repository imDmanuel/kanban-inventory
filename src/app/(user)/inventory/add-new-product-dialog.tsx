import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Dropzone from "react-dropzone";
import AddNewProductForm from "./add-new-product-form";
import { addNewFormSchema } from "@/lib/schemas";
import { z } from "zod";

export default function AddNewProductDialog() {
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof addNewFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle className="text-xl font-medium text-grey-800">
          New Product
        </DialogTitle>
      </DialogHeader>
      <div className="mt-3 mb-8">
        {/* DRAG AND DROP SECTION */}
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <div className="grid place-content-center">
              <div
                {...getRootProps()}
                className="inline-flex items-center gap-x-5"
              >
                <div className="border border-grey-400 border-dashed size-20 rounded-xl"></div>
                <input id="fileInputField" {...getInputProps()} />
                <p className="text-grey-400 text-center text-sm">
                  Drag image here <br />
                  or <br />
                  <label htmlFor="fileInputField" className="text-primary-400">
                    Browse image
                  </label>
                </p>
              </div>
            </div>
          )}
        </Dropzone>
        {/* END DRAG AND DROP SECTION */}

        {/* ADD NEW PRODUCT FORM */}
        <AddNewProductForm onSubmit={onSubmit} />
        {/* END ADD NEW PRODUCT FORM */}
      </div>
      <DialogFooter className="mt-6">
        <Button type="reset" className="" variant="outline">
          Discard
        </Button>
        <Button variant="primary" className="">
          Add Product
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
