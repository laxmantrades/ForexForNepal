import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col overflow-hidden  border border-[#d8d8db] bg-[#f5f6f9]  w-full pt-20 bg-gradient-to-r from-blue-100 to-purple-100 p-20">
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `
   url("https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e84d2aafab5df981424158_grid.svg"), 
   url("https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e84c1f1cc8a00e8f633418_gradient2.avif"), 
   url("https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e84c1bf3134413fea84cd2_gradient1.avif"), 
   url("https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e84c1ba84d2edd7c424f24_gradient3.avif"),
    url("https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e84c1b7118d4f0d6df750d_gradient4.avif"),
    url("https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e84c1be9734769c3aba2cd_gradient5.avif")
  `,
          backgroundPosition:
            "50%, 0 100%, 100% 100%, 100% 100%, 0 100%, 0 100%",
          backgroundRepeat:
            "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
          backgroundSize: "cover, contain, contain, contain, contain, contain",
        }}
      />
      {/* Your content here */}
      <div className="  flex  justify-center ">
        <div>
          <div className="relative flex flex-col items-center  text-center mt-30 space-x-3">
            {/* Background Overlay */}

            {/* Content */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Master Forex Trading from Nepal
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Learn Forex strategies, risk management, and live trading insights
              with experts. Join Nepal’s #1 Forex learning platform today!
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700">
                Start Learning Today
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-100">
                Join Free Webinar
              </button>
            </div>

            <div className="mt-20">
              <Button className="text-5xl fon-bold shadow-2xl py-10 cursor-pointer bg-orange-400 hover:bg-orange-400 hover:scale-105 ">
                Explore Courses
              </Button>
            </div>
          </div>
        </div>

        <Image
          src={"/g1.png"}
          alt="maniamge"
          height={100}
          className="relative  shadow-2xl shadow-pink-600  rounded-full"
          width={600}
        ></Image>
      </div>
    </div>
  );
};
export default HeroSection;
