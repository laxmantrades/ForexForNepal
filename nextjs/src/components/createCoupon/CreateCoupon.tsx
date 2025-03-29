"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useCreateCouponMutation,
  useDeleteCouponCodeMutation,
  useGetCoponcodeQuery,
} from "@/redux/api/couponApi";
import { toast } from "sonner";

const CreateCoupon = () => {
  const [couponType, setCouponType] = useState("");
  const [couponCode, setCouponcode] = useState("");
  
  

  //!rtk queries

  const { data,refetch } = useGetCoponcodeQuery(null);
  const [createCoupon, { data: coupondata, isSuccess, isError }] =
    useCreateCouponMutation();
  const [
    deleteCouponCode,
    {
      data: deletedCoupon,
      isError: errordeletecopon,
      isSuccess: deleteSuccessCoupon,
    },
  ] = useDeleteCouponCodeMutation();
  //! onClick handler
  const onClickHandler = () => {
    createCoupon({ couponCode, subtype: couponType });
  };
  //! deletecouponcodeHandler
  const deleteCouponHandler = (couponId: string) => {
    deleteCouponCode(couponId);
  };
  //!useEffect
  useEffect(() => {
    if (isSuccess) {
      toast.success(coupondata?.message || "Coupon Code created successfully!");
    }

    if (isError) {
      toast.error(coupondata?.message || "Error creating Coupon Code!");
    }
    if (deleteSuccessCoupon) {
      toast.success(
        deletedCoupon?.message || "Coupon Code deleted successfully!"
      );
      refetch()
    }
    if (errordeletecopon) {
      toast.error(deletedCoupon?.message || "Error deleting Coupon Code!");
    }
  }, [isSuccess, isError, deleteSuccessCoupon, errordeletecopon]);

  return (
    <div>
      <div className="px-4 md:w-1/2 md:p-0 mx-auto mt-10 max-w-xl">
        <h1 className="text-2xl font-extrabold">Create Coupon</h1>
        <Input
          placeholder="Enter a coupon name"
          value={couponCode}
          onChange={(e) => setCouponcode(e.target.value)}
        />
        <Select onValueChange={setCouponType} defaultValue="paid">
          <SelectTrigger className="w-[200px] mt-2">
            <SelectValue placeholder="Coupon Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">free</SelectItem>
            <SelectItem value="paid">paid</SelectItem>
            <SelectItem value="permanent">permanent</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex justify-center">
          <Button onClick={onClickHandler} className="mt-5 ">
            Create Coupon
          </Button>
        </div>
        <h1 className="text-2xl font-extrabold">Active Coupons</h1>
        {data?.couponcode?.length > 0 ? (
          data?.couponcode?.map((couponCode: any) => (
            <Card className="mt-2" key={couponCode?._id}>
              <CardContent>
                <div className="flex justify-between">
                  <h1 className="bg-blue-500 text-white font-bold px-2 rounded">
                    {couponCode?.couponCode}
                  </h1>
                  <h1>{couponCode?.subtype}</h1>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={() => deleteCouponHandler(couponCode?._id)}
                    className="mt-5 bg-red-600 hover:bg-red-500"
                  >
                    Delete Coupon
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="mt-2">
            <CardContent>No coupon codes</CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
export default CreateCoupon;
