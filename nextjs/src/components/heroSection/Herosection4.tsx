import Image from "next/image";
import { Card, CardContent } from "../ui/card";


import { Button } from "../ui/button";
import Link from "next/link";

const Herosection4 = () => {
  return (
    <div className="p-2  sm:w-2/3 sm:mx-auto mt-5  ">
      <Card className="p-0 border-3 border-blue-700 shadow-blue-400 shadow-2xl">
        <CardContent className="p-0 ">
          <div className="absolute inset-0 ">
            
          </div>

          <div className="  text-center  z-50    ">
            <div className="flex justify-center">
              <Image
                src="/telegram.webp"
                alt="Image"
                className="rounded-md object-cover "
                height={100}
                width={100}
              />
             
            </div>
            <h1 className="font-extrabold">Join Community!</h1>
            <div className="mt-7 text-wrap">
                <h1>Join a dynamic community of traders where you can connect, collaborate, and grow your trading skills. Elevate your trading game and build valuable connections with fellow traders today!</h1>
            </div>
            <Link href={"https://t.me/+SNQ8nJ6uvzYzYzhl"} target="_blank"><Button className="font-bold mt-3 border-2 border-red-700 text-xl cursor-pointer mb-2">Join Telegram</Button></Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Herosection4;
