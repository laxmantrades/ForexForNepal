import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className=" flex flex-col overflow-hidden  border border-[#4f4fdf] bg-black    w-full pt-20 py-20 text-white">
      <div
        className="absolute inset-0 "
        
      />
      {/* Your content here */}
      <div className="flex  justify-center ">
        <div>
          <div className="relative flex flex-col items-center  text-center md:mt-30 space-x-3">
            {/* Background Overlay */}

            {/* Content */}
            <Image
              src={"/g1.png"}
              alt="maniamge"
              height={100}
              className="relative    rounded-full w-auto h-auto   block md:hidden "
              width={300}
              priority
            ></Image>
            <h1 className="text-4xl sm:text-xl md:text-3xl  xl:text-7xl font-extrabold ">
              Master Forex Trading from AnyWhere
            </h1>
            <p className="mt-4 text-lg  max-w-2xl">
              Learn Forex strategies, risk management, and live trading insights
              with experts. Join Nepal’s #1 Forex learning platform today!
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-1 md:gap-4">
              <Button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700">
                Start Learning Today
              </Button>
              <Button className="px-6 py-3 border border-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-100">
                Join Free Webinar
              </Button>
            </div>

            <div className="md:mt-20 mt-10">
              <Button className="text-2xl sm:text-5xl fon-bold shadow-2xl py-5 sm:py-10 cursor-pointer bg-blue-400 hover:bg-orange-400 hover:scale-105 ">
                Explore Courses
              </Button>
            </div>
          </div>
        </div>

        <Image
          src={"/g1.png"}
          alt="maniamge"
          height={100}
          className="relative  shadow-2xl  shadow-white  rounded-full  sm:w-96 hidden md:block "
          width={700}
          priority
        ></Image>
      </div>
    </div>
  );
};
export default HeroSection;
