import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import { LoginForm } from "./login-form";
import Link from "next/link";

export default function Login() {
  return (
    <main>
      <div className="flex items-center min-h-dvh">
        {/* LEFT SECTION */}
        <div className="flex flex-col items-center flex-1 gap-y-8">
          <Image src={Logo} alt="" className="w-64" />
          <p className="text-[#009ED8] font-semibold text-5xl">KANBAN</p>
        </div>
        {/* END LEFT SECTION */}

        {/* RIGHT SECTION */}
        <div className="flex-1">
          <div className="text-center">
            <Image src={Logo} alt="" className="w-12 inline-block" />
            <h1 className="font-semibold text-grey-900 mt-6 mb-3">
              Log in to your account
            </h1>
            <p className="text-grey-500">
              Welcome back! Please enter your details.
            </p>
          </div>

          <LoginForm />

          <div className="mt-8 text-grey-500 text-sm text-center">
            Don’t have an account?
            <Link
              href={"/auth/signup"}
              className="text-primary-600 font-medium pl-1"
            >
              Sign up
            </Link>
          </div>
        </div>
        {/* END RIGHT SECTION */}
      </div>
    </main>
  );
}
