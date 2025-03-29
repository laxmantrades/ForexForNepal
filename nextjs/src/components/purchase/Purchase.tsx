"use client"
import Image from "next/image";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import { Instagram, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useCoursePurchaseMutation } from "@/redux/api/coursePurchaseApi";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

const Purchase = () => {
const[couponCode,setCouponcode]=useState("")
const {courseId}=useParams()
const router=useRouter()

const userId=useSelector((store:RootState)=>store.auth.user?._id)


//!hooks
const[coursePurchase,{data,isError,isLoading,isSuccess}]=useCoursePurchaseMutation()
console.log(data);

useEffect(()=>{
if(isSuccess){
  toast.success(data?.message||"Successfyully Purchased Course")
  router.push(`/courses/${courseId}`)

}
if(isError){
  toast.error(data?.message||"Failed to  Purchase Course")
  
  
}
},[isError,isSuccess])



//! onClick event
const onClick=async()=>{
  await coursePurchase({couponCode,userId,courseId})
    
}
  return (
    <div className="flex justify-center mt-7 ">
      <div>
        {" "}
        <h1 className="text-red-600 text-3xl">
          Please write your name only on remarks!
        </h1>
        <Image
          src={"/QRCODE.png"}
          alt="qr code"
          width={500}
          height={100}
          className="mt-10 h-auto w-auto"
        />
        <div className="flex justify-center "><Dialog >
          <DialogTrigger className="text-center">
            {" "}
            <h1 className="mt-5 text text-2xl border bg-blue-600 rounded text-center  text-white">Continue</h1>
          </DialogTrigger>

          <DialogContent className="h-2/3 ">
          <DialogTitle></DialogTitle>
            <DialogHeader className="mt-20">
              <h1 className="text-xl underline">Enter your coupon code here!</h1>
              <Input
              value={couponCode}
              onChange={(e)=>setCouponcode(e.target.value)}
                className=""
                placeholder="Please enter your coupon here!"
              />
              <Button onClick={onClick}>{!isLoading?"Apply Coupon Code":<Loader2 className="animate-spin"/>}</Button>

              <div className="">
                <h1 className="h-10 flex items-center text-xl text-red-600">
                  Paid but don't have coupon code? Message us
                </h1>
                
                <div className="flex justify-center">
                   
                  <Link target="_blank" href="https://t.me/laxman_trades">
                    <Image
                      src={"/telegram.webp"}
                      alt="telegram"
                      width={80}
                      height={10}
                      className="p-2"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/laxmantrades/"
                  >
                    <Instagram className="mt-5 bg-red-200 rounded-full h-10 w-10 " />
                  </Link>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog></div>
        
      </div>
    </div>
  );
};
export default Purchase;
