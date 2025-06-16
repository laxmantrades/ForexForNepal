import Image from "next/image";
import { Card, CardContent } from "../ui/card";

import { Button } from "../ui/button";
import Link from "next/link";

const Herosection4 = () => {
  return (
    <div className="p-2  sm:w-2/3 sm:mx-auto mt-5  ">
      <Card className="p-0 border-3 border-blue-700 shadow-blue-400 shadow-2xl">
        <CardContent className="p-0 ">
          <div className="absolute inset-0 "></div>

          <div className="  text-center  z-50    ">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 512"
                height={100}
              >
                <path
                  fill="#5865F2"
                  d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"
                />
                <g data-name="å¾å± 2">
                  <g data-name="Discord Logos">
                    <path
                      fill="#fff"
                      fill-rule="nonzero"
                      d="M360.932 160.621a250.49 250.49 0 00-62.384-19.182 174.005 174.005 0 00-7.966 16.243 232.677 232.677 0 00-34.618-2.602c-11.569 0-23.196.879-34.623 2.58-2.334-5.509-5.044-10.972-7.986-16.223a252.55 252.55 0 00-62.397 19.222c-39.483 58.408-50.183 115.357-44.833 171.497a251.546 251.546 0 0076.502 38.398c6.169-8.328 11.695-17.193 16.386-26.418a161.718 161.718 0 01-25.813-12.318c2.165-1.569 4.281-3.186 6.325-4.756 23.912 11.23 50.039 17.088 76.473 17.088 26.436 0 52.563-5.858 76.475-17.09 2.069 1.689 4.186 3.306 6.325 4.756a162.642 162.642 0 01-25.859 12.352 183.919 183.919 0 0016.386 26.396 250.495 250.495 0 0076.553-38.391l-.006.006c6.278-65.103-10.724-121.529-44.94-171.558zM205.779 297.63c-14.908 0-27.226-13.53-27.226-30.174 0-16.645 11.889-30.294 27.179-30.294 15.289 0 27.511 13.649 27.249 30.294-.261 16.644-12.007 30.174-27.202 30.174zm100.439 0c-14.933 0-27.202-13.53-27.202-30.174 0-16.645 11.889-30.294 27.202-30.294 15.313 0 27.44 13.649 27.178 30.294-.261 16.644-11.984 30.174-27.178 30.174z"
                      data-name="Discord Logo - Large - White"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h1 className="font-extrabold">Join Community!</h1>
            <div className="mt-7 text-wrap">
              <h1>
                Join a dynamic community of traders where you can connect,
                collaborate, and grow your trading skills. Elevate your trading
                game and build valuable connections with fellow traders today!
              </h1>
            </div>
            <Link href={"https://discord.gg/mp7zTafm"} target="_blank">
              <Button className="font-bold mt-3 border-2 border-red-700 text-xl cursor-pointer mb-2">
                Join Discord
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Herosection4;
