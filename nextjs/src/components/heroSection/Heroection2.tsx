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
  const enrolled = false;

  return (
    <div className="relative text-center -mt-10 grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 ">
      <Card className="sm:mx-2  h-auto   ml-2 sm:mt-0 mt-4">
        <CardHeader className="">
          <CardTitle className="flex items-center justify-center ">
            <Image
              src={"/medal-18.png"}
              height={50}
              width={100}
              alt="icon"
              className="w-10 sm:w-20"
            />{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="sm:text-xl font-bold "> Win Rate 45%(1:3RR)</p>
        </CardContent>
      </Card>
      <Card className="sm:mx-2 h-auto  ml-2 sm:mt-0 mt-4 md:mt-0">
        <CardHeader className="">
          <CardTitle className="flex items-center justify-center">
            <Image
              src={"/beststrat.png"}
              height={50}
              width={100}
              alt="icon"
              className="w-10 sm:w-20"
              priority
            />{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="sm:text-xl font-bold">Learn Best Strategy </p>
        </CardContent>
      </Card>
      <Card className="sm:mx-2 h-auto ml-2  mt-4 md:mt-0">
        <CardHeader className="">
          <CardTitle className="flex items-center justify-center">
            <Image
              src={"/exper.png"}
              height={50}
              width={100}
              alt="icon"
              className="w-10 sm:w-20"
            />{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="sm:text-xl font-bold">Expert Mentors </p>
        </CardContent>
      </Card>
      <Card className="sm:mx-2  ml-2  mt-4 md:mt-0">
        <CardHeader className="">
          <CardTitle className="flex items-center justify-center">
            <Image
              src={"/learn.png"}
              height={50}
              width={100}
              alt="icon"
              className="w-10 sm:w-20"
            />{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="sm:text-xl font-bold ">Recorded Videos</p>
        </CardContent>
      </Card>
    </div>
  );
};
export default Herosection2;
