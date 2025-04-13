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
                width="48"
                height="48"
                className="mt-5"
                viewBox="0 0 240 240"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="120" cy="120" r="120" fill="#0088cc" />
                <path
                  d="M179.1 74.8L150.2 181.7c-2.3 8.7-8.4 10.8-17 6.7l-47-34.7-22.7-11.1-27.7-9.1c-9.4-3.1-9.6-9.4 1.9-13.9l106.5-41.1c7.8-2.9 14.6 1.9 11.5 13.5z"
                  fill="#fff"
                />
                <path
                  d="M97.5 166.3l-4.1 38.6c6 0 8.6-2.6 11.8-5.7l18.1-17.6-25.8-15.3z"
                  fill="#c8daea"
                />
                <path
                  d="M97.9 166l56.4 41.6c6.5 3.6 11.2 1.7 12.8-6.1l25.1-125.3c2.4-11.8-4.3-17.2-14.2-13.5l-133.8 51.6c-9.1 3.6-9 8.6-1.6 10.9l34.2 10.7 79.3-50.2c3.7-2.5 7.1-1.1 4.3 1.6z"
                  fill="#fff"
                />
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
            <Link href={"https://t.me/+SNQ8nJ6uvzYzYzhl"} target="_blank">
              <Button className="font-bold mt-3 border-2 border-red-700 text-xl cursor-pointer mb-2">
                Join Telegram
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Herosection4;
