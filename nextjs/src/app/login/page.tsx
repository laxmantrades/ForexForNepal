"use client";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const loginHandler = () => {
    try {
      window.location.href = "http://localhost:5005/login";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="border p-50 rounded-xl">
        <h1 className="text-4xl font-bold text-center">
          Sign in to your account
        </h1>

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
      </div>
    </div>
  );
};

export default Login;
