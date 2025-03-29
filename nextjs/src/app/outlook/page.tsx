"use client"
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Page = () => {
    const [timeFrame,setTimeFrame]=useState("")
    const [pair,setPair]=useState("")
    console.log(timeFrame);
    
  return (
    <div className="mt-5 flex justify-center  ">
      <div className="mt-5">
        <h1 className="text-center text-2xl font-extrabold underline ">
          Outlooks
        </h1>
        <div className="my-5">
          <div>
            <Input />
            <Input type="file" className="mt-2" />
            <div className="flex justify-between">
              <Select value={pair} onValueChange={setPair}>
                <SelectTrigger className="w-[180px] mt-4">
                  <SelectValue placeholder="Select TimeFrame" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4H">4H</SelectItem>
                  <SelectItem value="15min">15 Min</SelectItem>
                </SelectContent>
              </Select>
              <Select value={timeFrame} onValueChange={setTimeFrame}>
                <SelectTrigger className="w-[180px] mt-4">
                  <SelectValue placeholder="Select Pair" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EURUSD">EURUSD</SelectItem>
                  <SelectItem value="USDCHF">USDCHF</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-center">
              {" "}
              <Button className="mt-2 ">Create a Post</Button>
            </div>
          </div>
        </div>

        <div className=" flex justify-center flex-col-reverse">
          <Tabs defaultValue="account" className="">
            <TabsList className="w-full mb-10">
              <TabsTrigger value="account">4H Outlooks</TabsTrigger>
              <TabsTrigger value="password">15min Trades</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="flex flex-col-reverse">
                {["THIS IS 1ST", "Today it is bearish", "Today it is NFT"].map(
                  (TITLE) => (
                    <div key={TITLE}>
                      <Card className=" shadow-2xl bg-gray-200 shadow-indigo-500 mx-2 ">
                        <CardTitle className="flex justify-between p-2">
                          <h1>Posted On:</h1>
                          <h1 className="text-xl border bg-indigo-500 rounded-2xl p-2 text-white">
                            Pair: EURUSD
                          </h1>
                        </CardTitle>
                        <CardContent className="p-0">
                          <Image
                            src={"/eu.png"}
                            width={700}
                            height={100}
                            alt="image"
                          />
                          <h1>{TITLE}</h1>
                        </CardContent>
                      </Card>
                      <Separator className="text-black mt-2 mb-2 bg-black" />
                    </div>
                  )
                )}
              </div>
            </TabsContent>
            <TabsContent value="password">
              {["THIS IS 1ST", "Today it is bearish", "Today it is NFT"].map(
                (TITLE) => (
                  <>
                    <Card className=" shadow-2xl shadow-indigo-500">
                      <CardTitle className="flex justify-between p-2">
                        <h1>Posted On:</h1>
                        <h1 className="text-xl border bg-indigo-500 rounded-2xl p-2 text-white">
                          Pair: EURUSD
                        </h1>
                      </CardTitle>
                      <CardContent>
                        <Image
                          src={"/eu.png"}
                          width={700}
                          height={100}
                          alt="image"
                        />
                        <h1>{TITLE}</h1>
                      </CardContent>
                    </Card>
                    <Separator className="text-black mt-2 mb-2 bg-black" />
                  </>
                )
              )}
            </TabsContent>
          </Tabs>{" "}
        </div>
      </div>
    </div>
  );
};
export default Page;
