"use client";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import {
  useCreateOutlookMutation,
  useGetOutLookQuery,
} from "@/redux/api/outlookApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import DeleteAlert from "./DeleteAlert";
import { outLookType } from "@/types/outlookType";

const OutLook = () => {
  //!constants
  const [Time, setTime] = useState("");
  const [Pair, setPair] = useState("");
  const [outLookDesc, setDesc] = useState({
    Description: "",
    OutLookPhotoUrl: "",
  });
  const [selectedTab, setSelectedTab] = useState("4H");

  //!selector if the role is admin
  const user = useSelector((store: RootState) => store?.auth?.user?.role);

  //helper for date
  const dateConvert = (date: string) => {
    const formatDate = format(new Date(date), "yyyy-MM HH:mm:ss");
    return formatDate;
  };

  //!RTK API Calls

  const [createOutLook, { data, isLoading, isError, isSuccess }] =
    useCreateOutlookMutation();

  const { data: OutLookData, refetch } = useGetOutLookQuery(selectedTab);

  //Onchange Handler
  const OutLookChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { value, type, files, name } = e?.target;
    setDesc({ ...outLookDesc, [name]: type == "file" ? files?.[0] : value });
  };

  //submitHandler
  const OutLookFormHandler = async () => {
    const outlookData = new FormData();
    outlookData.append("Time", Time);
    outlookData.append("Pair", Pair);
    outlookData.append("Description", outLookDesc.Description);
    outlookData.append("OutLookPhotoUrl", outLookDesc.OutLookPhotoUrl);

    await createOutLook(outlookData);
  };

  //!UseEffect Called
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Successfully Posted OutLook");
      refetch();
    }
    refetch();
    if (isError) {
      toast.error(data?.message || "Failed to post OutLook");
    }
  }, [isError, isSuccess,data]);

  return (
    <div className="mt-5 flex justify-center  ">
      <div className="mt-5">
        <h1 className="text-center text-2xl font-extrabold underline ">
          Outlooks
        </h1>
        {user === "owner" && (
          <div className="my-5">
            <div>
              <Input
                name="Description"
                value={outLookDesc.Description}
                onChange={OutLookChangeHandler}
              />
              <Input
                name="OutLookPhotoUrl"
                type="file"
                className="mt-2"
                onChange={OutLookChangeHandler}
              />
              <div className="flex justify-between">
                <Select value={Time} onValueChange={setTime}>
                  <SelectTrigger className="w-[180px] mt-4">
                    <SelectValue placeholder="Select TimeFrame" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4H">4H</SelectItem>
                    <SelectItem value="15min">15 Min</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={Pair} onValueChange={setPair}>
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
                {!isLoading ? (
                  <Button className="mt-2 " onClick={OutLookFormHandler}>
                    Create a Post
                  </Button>
                ) : (
                  <Button className="mt-2 ">
                    <Loader2 className=" animate-spin" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        <div className=" flex justify-center flex-col-reverse">
          <Tabs defaultValue="4H" className="">
            <TabsList className="w-full mb-10">
              <TabsTrigger value="4H" onClick={() => setSelectedTab("4H")}>
                4H Outlooks
              </TabsTrigger>
              <TabsTrigger
                value="15min"
                onClick={() => setSelectedTab("15min")}
              >
                15min Trades
              </TabsTrigger>
            </TabsList>
            <TabsContent value="4H">
              <div className="flex flex-col-reverse">
                {OutLookData?.outLook?.map((outlook: outLookType) => (
                  <div key={outlook?._id}>
                    <Card className=" shadow-2xl bg-gray-200 shadow-indigo-500 mx-2 ">
                      <CardTitle className="flex justify-between p-2">
                        <h1>Posted On:{dateConvert(outlook?.createdAt)}</h1>
                        <h1 className="text-xl border bg-indigo-500 rounded-2xl p-2 text-white">
                          Pair: {outlook?.Pair}
                        </h1>
                      </CardTitle>
                      <CardContent className="p-0 ">
                        <Image
                          src={outlook.OutLookPhotoUrl}
                          width={700}
                          height={100}
                          alt="image"
                        />
                        <h1 className="px-2 text-wrap w-auto md:w-[700]">{outlook?.Description}</h1>
                      </CardContent>
                      {user === "owner" && (
                        <CardFooter className="flex justify-end">
                          <h1 className="bg-red-500 hover:bg-red-500  p-2 text-white font-bold rounded">
                            <DeleteAlert id={outlook?._id}/>
                          </h1>
                        </CardFooter>
                      )}
                    </Card>
                    <Separator className="text-black mt-2 mb-2 bg-black" />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="15min">
              {OutLookData?.outLook?.map((outlook: outLookType) => (
                <div key={outlook?._id}>
                  <Card className=" shadow-2xl bg-gray-200 shadow-indigo-500 mx-2 ">
                    <CardTitle className="flex justify-between p-2">
                      <h1>Posted On:{dateConvert(outlook?.createdAt)}</h1>
                      <h1 className="text-xl border bg-indigo-500 rounded-2xl p-2 text-white">
                        Pair: {outlook?.Pair}
                      </h1>
                    </CardTitle>
                    <CardContent className="p-0 ">
                      <Image
                        src={outlook.OutLookPhotoUrl}
                        width={700}
                        height={100}
                        alt="image"
                        className="h-"
                      />
                      <h1 className="px-2 text-wrap w-auto md:w-[700] ">{outlook?.Description}</h1>
                    </CardContent>

                    {user === "owner" && (
                      <CardFooter className="flex justify-end">
                        <h1 className="bg-red-500 hover:bg-red-500 p-2 text-white font-bold rounded">
                          <DeleteAlert id={outlook?._id}/>
                        </h1>
                      </CardFooter>
                    )}
                  </Card>
                  <Separator className="text-black mt-2 mb-2 bg-black" />
                </div>
              ))}
            </TabsContent>
          </Tabs>{" "}
        </div>
      </div>
    </div>
  );
};
export default OutLook;
