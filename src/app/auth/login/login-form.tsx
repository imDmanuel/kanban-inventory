"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import GoogleIcon from "@/assets/google-icon.png";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string({
      required_error: "Password field is required",
    })
    .min(6, "Please enter at least 6 charachers"),
});

export function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-96 mx-auto mt-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-5 mb-6">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center">
          {/* REMEMBER PASSWORD */}
          <div className="flex items-center space-x-2">
            <Checkbox id="rememberMe" />
            <Label htmlFor="rememberMe">Remember for 30 days</Label>
          </div>
          {/* END REMEMBER PASSWORD */}

          <Link
            href={"#"}
            className="text-sm text-primary-600 font-medium ml-auto"
          >
            Forgot password
          </Link>
        </div>

        {/* SIGN IN BUTTONS */}
        <div className="flex flex-col items-stretch mt-6">
          <Button className="bg-primary-600 text-white">Sign in</Button>
          <Button className="text-grey-800 space-x-3 mt-4 border-[#D0D5DD] flex items-center">
            <Image src={GoogleIcon} alt="" className="size-6" />
            <span>Sign in with Google</span>
          </Button>
        </div>
        {/* ENDSIGN IN BUTTONS */}
      </form>
    </Form>
  );
}
