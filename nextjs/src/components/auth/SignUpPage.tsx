"use client";

import { Button } from "@/components/ui/button";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";

const SignUpPage = () => {
  const[checked,setChecked]=useState(false)
  
  const signUpHandler = () => {
    try {
      if(!checked){
        toast.error("Please accept terms and condition")
        return
      }
      window.location.href = "http://localhost:5005/login";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen relative ">
      <div className="border p-50 radius-xl">
        <h1 className="text-4xl font-bold text-center">
          Sign up your account!
        </h1>
        <div className="text-center mt-5">
          <Checkbox id="terms" required={true} checked={checked} onCheckedChange={(checked) => setChecked(checked === "indeterminate" ? false : checked)} className="mr-1 h-5 w-5" />
          <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
        </div>
        <Button
          variant={"outline"}
          onClick={signUpHandler}
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
          <h1>Already have account?</h1>
          <span>
            {" "}
            <Link href={"/login"} className="underline text-blue-600">
              Login
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
      </div>
    </div>
  );
};
export default SignUpPage;
