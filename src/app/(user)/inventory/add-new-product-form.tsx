"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addNewFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function AddNewProductForm({
  onSubmit,
}: {
  onSubmit: (values: z.infer<typeof addNewFormSchema>) => void;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof addNewFormSchema>>({
    resolver: zodResolver(addNewFormSchema),
    defaultValues: {
      productName: "",
      productId: "",
      category: "",
      buyingPrice: undefined,
      quantity: undefined,
      unit: undefined,
      expiryDate: undefined,
      thresholdValue: undefined,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto mt-8">
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem className="mt-5 mb-6 flex items-center gap-x-10 justify-between">
              <FormLabel className="whitespace-nowrap">Product Name</FormLabel>
              <FormControl>
                <Input
                  className="w-64"
                  placeholder="Enter product name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productId"
          render={({ field }) => (
            <FormItem className="mt-5 mb-6 flex items-center gap-x-10 justify-between">
              <FormLabel className="whitespace-nowrap">Product ID</FormLabel>
              <FormControl>
                <Input
                  className="w-64"
                  placeholder="Enter product ID"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="mt-5 mb-6 flex items-center gap-x-10 justify-between">
              <FormLabel className="whitespace-nowrap">Catetory</FormLabel>
              <FormControl>
                <Input
                  className="w-64"
                  placeholder="Enter product category"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="buyingPrice"
          render={({ field }) => (
            <FormItem className="mt-5 mb-6 flex items-center gap-x-10 justify-between">
              <FormLabel className="whitespace-nowrap">Buying Price</FormLabel>
              <FormControl>
                <Input
                  className="w-64"
                  placeholder="Enter buying price"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="mt-5 mb-6 flex items-center gap-x-10 justify-between">
              <FormLabel className="whitespace-nowrap">Quantity</FormLabel>
              <FormControl>
                <Input
                  className="w-64"
                  placeholder="Enter product quantity"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem className="mt-5 mb-6 flex items-center gap-x-10 justify-between">
              <FormLabel className="whitespace-nowrap">Unit</FormLabel>
              <FormControl>
                <Input
                  className="w-64"
                  placeholder="Enter product unit"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expiryDate"
          render={({ field }) => (
            <FormItem className="mt-5 mb-6 flex items-center gap-x-10 justify-between">
              <FormLabel className="whitespace-nowrap">Expiry Date</FormLabel>
              <FormControl>
                <Input
                  className="w-64"
                  placeholder="Enter expiry date"
                  type="date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thresholdValue"
          render={({ field }) => (
            <FormItem className="mt-5 mb-6 flex items-center gap-x-10 justify-between">
              <FormLabel className="whitespace-nowrap">
                Threshold Value
              </FormLabel>
              <FormControl>
                <Input
                  className="w-64"
                  placeholder="Enter threshold value"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
