import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

const CreateCoupon = () => {
  return (
    <div>
      <div className="px-4 md:w-1/2 md:p-0 mx-auto mt-10 max-w-xl">
        <h1 className="text-2xl font-extrabold">Create Coupon</h1>
        <Input placeholder="Enter a coupon name" />
        <div className="flex justify-center">
          <Button className="mt-5 ">Create Coupon</Button>
        </div>
        <h1 className="text-2xl font-extrabold">Active Coupons</h1>
        {Array.from({ length: 2 }).map(() => (
          <Card className="mt-2">
            <CardContent>{"LAXMAN"}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default CreateCoupon;
