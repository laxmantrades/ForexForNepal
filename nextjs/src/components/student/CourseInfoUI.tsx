import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CirclePlay } from "lucide-react";
import { Button } from "../ui/button";

const CourseInfoUI = () => {
  return (
    <div className="">
      <div className="mt-20 flex justify-center w-full ">
        <Image
          src={"/ForexForNepal.png"}
          width={1400}
          height={100}
          alt="image"
          className="w-full h-40  bg-cover bg-center bg-no-repeat "
        />
        <div className="absolute w-3/4 mt-5 ">
          {" "}
          <h1 className="text-2xl sm:text-4xl font-bold">
            Master Fractals with ICT
          </h1>
          <h1>Master How to Trade in Forex Markets Using Fractals and ICT</h1>
          <h1>For Trader By Trader</h1>
        </div>
      </div>

      <div className=" w-5/6 mx-auto flex  justify-between flex-col-reverse md:flex-row max-w-7xl">
        <div className="mt-4">
          <h1 className="mt-2 ml-4 text-3xl">Description</h1>
          <h1>
            ✅ In depth High-Quality videos Hands-on experience with Express.js
          </h1>
          <h1>
            ✅ & MongoDB Deep dive into the architecture of Node.js Building
          </h1>
          <h1>
            ✅Real world Projects from scratch Premium community of Node.js
          </h1>
          <h1>
            ✅ In depth High-Quality videos Hands-on experience with Express.js
          </h1>
          <h1>
            ✅ & MongoDB Deep dive into the architecture of Node.js Building
          </h1>
          <h1>
            ✅Real world Projects from scratch Premium community of Node.js
          </h1>
          <h1>
            ✅ In depth High-Quality videos Hands-on experience with Express.js
          </h1>
          <h1>
            ✅ & MongoDB Deep dive into the architecture of Node.js Building
          </h1>
          <h1>
            ✅Real world Projects from scratch Premium community of Node.js
          </h1>

          <Card className="mt-10 ">
            <CardHeader>
              <CardTitle>
                {" "}
                <h1 className="text-2xl font-bold ">Course Content 1</h1>
                <h1>{"5"} lectures</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {Array.from({ length: 10 }).map((item) => (
                <div className="flex space-x-2.5 space-y-2.5">
                  <CirclePlay /> <h1>Intro to SMC</h1>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="md:-mt-20 mt-2  md:ml-5 w-full md:w-96  ">
          <Card className="">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <video></video>
            </CardContent>
            <CardFooter className="flex-col text-">
              <div className="flex justify-evenly space-x-18">
                <h1>Price:{"RS 3000"}</h1>
                <h1>30%Off</h1>
              </div>

              <Button className="w-full cursor-pointer">Buy Course Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default CourseInfoUI;
