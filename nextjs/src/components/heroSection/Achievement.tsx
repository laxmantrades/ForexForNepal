import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";

const Achievement = () => {
  return (
    <div className="w-full bg-gray-100 h-full pb-20 mt-10">
      <h1 className="text-3xl font-extrabold text-center mt-20">
        Our Tutors Certifications
      </h1>
      <h1 className="text-center font-bold">Tutor Certifications</h1>
      <div className="flex-none md:flex  justify-center md:space-x-8 space-y-10  md:space-y-0  m-4 ">
        {" "}
        <Card className="p-0 md:p-4 shadow-xl shadow-orange-500">
          <CardContent className="flex justify-center p-0">
            <Image src="/defunded1.jpeg" width={500} height={100} alt="" />
          </CardContent>
        </Card>
        <Card className=" p-0 md:p-4 shadow-xl shadow-red-700">
          <CardContent className="flex justify-center p-0 ">
            <Image
              src="/defunded1.jpeg"
              width={500}
              height={100}
              alt=""
              className=""
            />
          </CardContent>
        </Card>
        <Card className="p-0 md:p-2 shadow-xl shadow-orange-500">
          <CardContent className="flex justify-center p-0 md:p-2">
            <Image src="/mff.jpeg" width={500} height={100} alt="" />
          </CardContent>
        </Card>
      </div>
      <h1 className="text-center text-4xl   font-extrabold mt-30">
        Called trade calls with 6% returns on telegram for free!
      </h1>
      <Image
        src="/tradecalls.png"
        width={600}
        height={100}
        alt=""
        className="mx-auto mt-10 rounded-md p-1"
      />
      <div className="text-center font-extrabold italic mt-10  w-full p-2 flex justify-center">
        <svg
          className="h-8 w-8 text-amber-400 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          id="el-oqzne6a6"
        >
          <path
            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
            id="el-m5cfjonc"
          ></path>
        </svg>
        <div className="text-4xl">
          {" "}
          <h1>You just need to build more capital</h1>
          <h1>💰 6% on $100K is $6,000</h1>
          <h1>💰 6% on 1M account is $60,000</h1>
        </div>
      </div>
    </div>
  );
};
export default Achievement;
