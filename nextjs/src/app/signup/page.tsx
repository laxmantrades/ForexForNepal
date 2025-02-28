import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SignUp= () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="">
        <h1 className="text-3xl text-center">Sign up  your account!</h1>
        <Button variant={"outline"} className="text-xl text-center px-20 mt-5 cursor-pointer">
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
          <span> <Link href={"/login"} className="underline ">Login</Link></span>
        </div>
        <h1 className="text-center mt-10">By clicking continue, you agree to our</h1>
        <h1 className="text-center "><Link href={"/"} className="underline">Terms of Service</Link> and <Link href={"/"} className="underline">Privacy Policy.</Link> </h1>
      </div>
    </div>
  );
};

export default SignUp;
