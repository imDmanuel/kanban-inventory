import { z } from "zod";

export const addNewFormSchema = z.object({
  productName: z
    .string({ required_error: "Product name is required" })
    .min(2)
    .max(50),
  productId: z
    .string({ required_error: "Product ID is required" })
    .min(5)
    .max(30),
  category: z.string({ required_error: "Product category is required" }),
  buyingPrice: z.number({ required_error: "Buying price is requied" }),
  quantity: z.number({ required_error: "Quantity is requied" }),
  unit: z.number({ required_error: "Unit is requied" }),
  expiryDate: z.date({ required_error: "Expiry Date is requied" }),
  thresholdValue: z.number({ required_error: "Threshold Value is requied" }),
});
