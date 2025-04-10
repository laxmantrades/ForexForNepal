import {  ShieldCheck } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const cards = [
  {
    title: "Morning Market Briefings",
    Description:
      "Start your day with pre-market analysis covering key economic events, overnight developments, and potential trading opportunities.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-15 h-15 bg-[#DBEAFE] ml-5 p-2 rounded"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Step-by-Step Courses",
    Description:
      "Structured learning paths from beginner to advanced levels with practical exercises and real-world case studies.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-15 h-15  bg-[#16A34A] ml-5 p-2 rounded"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Risk Management Tools",
    Description:
      "Learn to protect your capital with advanced risk assessment calculators and position sizing strategies.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-15 h-15 bg-yellow-300 ml-5 p-2 rounded"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Verified Strategies",
    Description:
      "Access proven trading strategies with backtested results across different market conditions and timeframes.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-15 h-15 bg-[#74e4d5] ml-5 p-2 rounded"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        ></path>
      </svg>
    ),
  },
];

const DailyOutLook = () => {
  return (
    <div className="text-center mt-15">
      <Card className="p-0 md:w-4/5 md:mx-auto m-2 mt-20 py-10">
        <CardContent className=" text-center  py-2 mx-auto grid md:grid-cols-2 ">
          <div className="space-y-3.5  text-center flex justify-center  ">
            <div className="space-y-5">
              <h1 className="text-xl font-bold">
                Interactive Chart Analysis
              </h1>
              <span className="flex text-wrap ">
                {" "}
                <ShieldCheck color="#23ab21" />
                Tracking Trades
              </span>
              <span className="flex mt-5">
                {" "}
                <ShieldCheck color="#23ab21" />
                Multi-timeframe analysis!
              </span>
              <span className="flex ">
                {" "}
                <ShieldCheck color="#23ab21" />
                Possible Trade Ideas
              </span>
              <span className="flex ">
                {" "}
                <ShieldCheck color="#23ab21" />
                Advanced pattern recognition!
              </span>
              <span className="flex ">
                {" "}
                <ShieldCheck color="#23ab21" />
                Journal Of Trades!
              </span>
              <span className="flex ">
                {" "}
                <ShieldCheck color="#23ab21" />
                Psychology!
              </span>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/dqrza04p1/image/upload/macbook_3_hxopvj.jpg"
            alt=""
            width={900}
            height={100}
            className="w-3xl md:w-xl mt-5 "
          />
        </CardContent>
      </Card>
      <h1 className="text-4xl font-bold mt-20 ">Daily Market Outlooks</h1>
      <h1 className="mt-10">
        Stay ahead with our comprehensive daily market analysis and trading
        insights delivered directly to our students.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
        {cards.map((card: any) => (
          <Card key={card.title} className="w-full">
            <CardTitle className="flex justify-center">{card?.svg}</CardTitle>
            <CardContent className="text-left">
              <h1 className="text-xl font-bold">{card.title}</h1>
              <p className="text-wrap">{card.Description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-1/2 mx-auto mt-20">
        <svg
          className="w-10 h-10 text-primary-500 dark:text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
        </svg>
        <h1 className="text-xl text-wrap font-bold">
          "The trading analysis tools and personalized mentorship completely
          transformed my approach to the markets. Within 3 months, my win rate
          improved from 32% to 68%. "{" "}
        </h1>
        <div className="flex justify-center ">
          <Avatar className="mt-5">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Raj</AvatarFallback>
          </Avatar>
          <h1 className=" ml-1 mt-5 text-center">Raj Tamang</h1>
        </div>
      </div>
    </div>
  );
};
export default DailyOutLook;
