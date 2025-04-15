"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { toast } from "sonner";
import { Card } from "../ui/card";

let URI = "";
if (typeof window !== "undefined") {
  URI =
    window.location.hostname == "forexfornepal.com"
      ? "https://api.forexfornepal.com/login"
      : "http://localhost:5005/login";
}

const LoginPage = () => {
  const [checked, setChecked] = useState(false);

  const loginHandler = () => {
    try {
      if (!checked) {
        toast.error("Please accept terms and condition");
        return;
      }
      window.location.href = URI;
    } catch (error) {
      console.log(error);
    }
  };

  //useProtectedRouteLndS()

  return (
    <div className="flex md:items-center justify-center relative">
      <Card className="border-none bg-white shadow-none sm:shadow-md md:p-20 mt-20 md:mt-20">
        <h1 className="text-4xl font-bold text-center">
          Sign in to your account
        </h1>
        <div className="text-center mt-5 space-x-1.5 flex justify-center ">
          <div className=" ">
            <Checkbox
              id="terms"
              required={true}
              checked={checked}
              onCheckedChange={(checked) =>
                setChecked(checked === "indeterminate" ? false : checked)
              }
              className=" h-5 w-5  "
            />
          </div>

          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-1"
          >
            Accept terms and conditions
          </label>
        </div>

        <Button
          variant={"outline"}
          onClick={loginHandler}
          className="text-xl text-center px-20 mt-5 cursor-pointer"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="display: block;"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            ></path>
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            ></path>
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            ></path>
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            ></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </svg>
          Continue with Google
        </Button>

        <div className="flex text-center items-center justify-center space-x-2 mt-4">
          <h1>Dont't have account?</h1>
          <span>
            Create an{" "}
            <Link href={"/signup"} className="underline text-blue-600 ">
              account
            </Link>
          </span>
        </div>
        <h1 className="text-center mt-10">
          By clicking continue, you agree to our
        </h1>
        <h1 className="text-center ">
          <Link href={"/termsofservice"} className="underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href={"/privacypolicy"} className="underline">
            Privacy Policy.
          </Link>{" "}
        </h1>
      </Card>
    </div>
  );
};
export default LoginPage;
