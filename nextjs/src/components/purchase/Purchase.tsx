"use client";
import Image from "next/image";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
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
  const [couponCode, setCouponcode] = useState("");
  const { courseId } = useParams();
  const router = useRouter();

  const userId = useSelector((store: RootState) => store.auth.user?._id);

  //!hooks
  const [coursePurchase, { data, isError, isLoading, isSuccess }] =
    useCoursePurchaseMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Successfyully Purchased Course");
      router.push(`/courses/${courseId}`);
    }
    if (isError) {
      toast.error(data?.message || "Failed to  Purchase Course");
    }
  }, [isError, isSuccess, data]);

  //! onClick event
  const onClick = async () => {
    await coursePurchase({ couponCode, userId, courseId });
  };
  return (
    <div className="flex justify-center mt-7 ">
      <div>
        {" "}
        <h1 className="text-red-600 text-xl text-center  md:text-3xl">
          Please write your name only on remarks!
        </h1>
        <Image
          src={
            "https://res.cloudinary.com/dqrza04p1/image/upload/f_auto/q_auto/v1744307752/QRCODE_bkpgu6.png"
          }
          alt="qr code"
          width={500}
          height={100}
          className="mt-10 h-auto w-auto px-2"
        />
        <div className="flex justify-center ">
          <Dialog>
            <DialogTrigger className="text-center">
              {" "}
              <h1 className="mt-5 text text-2xl border bg-blue-600 rounded text-center  text-white">
                Continue
              </h1>
            </DialogTrigger>

            <DialogContent className="h-2/3 ">
              <DialogTitle></DialogTitle>
              <DialogHeader className="mt-20">
                <h1 className="text-xl underline">
                  Enter your coupon code here!
                </h1>
                <Input
                  value={couponCode}
                  onChange={(e) => setCouponcode(e.target.value)}
                  className=""
                  placeholder="Please enter your coupon here!"
                />
                <Button onClick={onClick}>
                  {!isLoading ? (
                    "Apply Coupon Code"
                  ) : (
                    <Loader2 className="animate-spin" />
                  )}
                </Button>

                <div className="">
                  <h1 className="h-10 flex items-center text-xl text-red-600">
                    Paid but don't have coupon code? Message us
                  </h1>

                  <div className="flex justify-center space-x-3.5">
                    <Link target="_blank" href="https://t.me/laxman_trades">
                      <svg
                        width="40"
                        height="100"
                        viewBox="0 0 240 240"
                        xmlns="http://www.w3.org/2000/svg"
                        
                      >
                        <circle cx="120" cy="120" r="120" fill="#0088cc" />
                        <path
                          d="M179 70L153 177c-2 8-7 10-14 6l-39-29-19 19c-2 2-3 3-6 3l2-33 60-54c3-3-1-5-5-2l-74 46-32-10c-7-2-7-7 1-10l128-49c6-2 11 1 9 10z"
                          fill="#ffffff"
                        />
                      </svg>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/laxmantrades/"
                    >
                      <Instagram className="mt-7 bg-red-200 rounded-full h-10 w-10 " />
                    </Link>
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
export default Purchase;
