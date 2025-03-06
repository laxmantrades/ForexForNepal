import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import Image from "next/image";


const Herosection2 = () => {
    const enrolled=false
    
    
  return (
    <div className="relative text-center mt-4">
      <Card className="w-5/6 mx-auto mt-4 mb-4">
        <CardHeader>
          <CardTitle className="text-red-600">
            <h1 className="text-3xl mt-4 font-bold">
              🚀 Master Trading with ICT+ SMC (Fractals) 
            </h1>
            <h1 className="text-3xl mt-4 font-bold">
               – Limited Time Offer!
            </h1>
            
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-full justify-center text-left">
            <div className=" text-xl ml-10 flex">
              <div>
              <h1 className="text-2xl font-bold ">✅ What’s Included?</h1>
              <ul>
                <li className="mt-4">
                  📌 <strong>Recorded Course</strong> – Learn at your own pace!
                </li>
                <li className="mt-4">
                  📌 <strong>ICT+ SMC (Fractals) Concepts</strong> – Master
                  Smart Money strategies.
                </li>
                <li className="mt-4">
                  📌 <strong>Proven Data Records</strong> – Backtested
                  strategies with real results.
                </li>
                <li className="mt-4">
                  📌 <strong>1-Year Full Course Access</strong> – Rewatch &
                  refine your skills anytime.
                </li>
                <li className="mt-4">
                  📌 <strong>Best Course to Trade With</strong> – Practical,
                  profitable, and easy to follow.
                </li>
                <li className="mt-4">
                  📌 <strong>Daily Market Outlook</strong> – Stay ahead with
                  expert insights.
                </li>
                <li className="mt-4">
                  📌 <strong>Exclusive Community Access</strong> – Get support
                  from experts & fellow traders.
                </li>
                <li className="mt-4">
                  📌 <strong>BONUS:</strong> Extra Trading Materials – PDFs,
                  tools, and exclusive insights.
                </li>
              </ul>
              </div>
              <Image src={"/trading.png"} alt="trading" height={100} width={420} className="rounded-md md:w-36"/>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 mt-5">
            <div className=" border bg-[#ffeb3b] p-2 text-xl rounded">
              <h1 className="font-bold">💰 Limited Time Discount</h1>

              <div className="flex space-x-2 font-bold">
                <h1 className="line-through">₹ 30000</h1>
                <h1 className="text-[#28a745]">Now Only:</h1>
                <h1 className="text-[#28a745]"> ₹ 3000</h1>
                <h1 className="text-[#28a745]"> (90% OFF!)</h1>
              </div>
            </div>
          </div>

          <div className="mt-5 ">
            <Button className="bg-blue-700 text-3xl h-15 mb-10">Enroll Now</Button>
          </div>
         
          <h1>📅 Offer Valid for a Limited Time – Don't Miss Out!</h1>
        </CardContent>
      </Card>
      
     
    </div>
  );
};
export default Herosection2;
