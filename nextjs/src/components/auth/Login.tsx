"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { toast } from "sonner";
import { Card } from "../ui/card";

const LoginPage = () => {
  const [checked, setChecked] = useState(false);

  const loginHandler = () => {
    try {
      if (!checked) {
        toast.error("Please accept terms and condition");
        return;
      }
      window.location.href = "http://localhost:5005/login";
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
        <div className="text-center mt-5">
          <Checkbox
            id="terms"
            required={true}
            checked={checked}
            onCheckedChange={(checked) =>
              setChecked(checked === "indeterminate" ? false : checked)
            }
            className="mr-1 h-5 w-5"
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>

        <Button
          variant={"outline"}
          onClick={loginHandler}
          className="text-xl text-center px-20 mt-5 cursor-pointer"
        >
          <Image
            src={"/google.png"}
            width={30}
            height={1}
            className=""
            priority
            alt="googleimage"
          ></Image>
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
          <Link href={"/"} className="underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href={"/"} className="underline">
            Privacy Policy.
          </Link>{" "}
        </h1>
      </Card>
    </div>
  );
};
export default LoginPage;
