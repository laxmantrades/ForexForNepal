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
import { useEffect, useState } from "react";
import { useCreateOutlookMutation } from "@/redux/api/outlookApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const OutLook=()=>{
    const [Time,setTime]=useState("")
    const [Pair,setPair]=useState("")
    const [outLookDesc,setDesc]=useState({
      Description:"",
      OutLookPhotoUrl:""
    })
 
    
   const [createOutLook,{data,isLoading,isError,isSuccess}]=useCreateOutlookMutation()
    const OutLookChangeHandler:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
      const {value,type,files,name}=e?.target
      setDesc({...outLookDesc,[name]:type=="file"?files?.[0]:value})
    }

    const OutLookFormHandler=async()=>{
      const outlookData=new FormData()
      outlookData.append("Time",Time)
      outlookData.append("Pair",Pair)
      outlookData.append("Description",outLookDesc.Description)
      outlookData.append("OutLookPhotoUrl",outLookDesc.OutLookPhotoUrl)
      await createOutLook(outlookData)

    }

    useEffect(()=>{
      if(isSuccess){
        toast.success(data?.message||"Successfully Posted OutLook")
      }
      if(isError){
        toast.error(data?.message||"Failed to post OutLook")
      }

    },[isError,isSuccess])
   
    

  
    
  return (
    <div className="mt-5 flex justify-center  ">
      <div className="mt-5">
        <h1 className="text-center text-2xl font-extrabold underline ">
          Outlooks
        </h1>
        <div className="my-5">
          <div>
            <Input name="Description" value={outLookDesc.Description} onChange={OutLookChangeHandler} />
            <Input name="OutLookPhotoUrl" type="file" className="mt-2" value={outLookDesc.OutLookPhotoUrl} onChange={OutLookChangeHandler} />
            <div className="flex justify-between">
              <Select value={Pair} onValueChange={setPair}>
                <SelectTrigger className="w-[180px] mt-4">
                  <SelectValue placeholder="Select TimeFrame" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4H">4H</SelectItem>
                  <SelectItem value="15min">15 Min</SelectItem>
                </SelectContent>
              </Select>
              <Select value={Time} onValueChange={setTime}>
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
              {!isLoading?<Button className="mt-2 ">Create a Post</Button>:<Button className="mt-2 "><Loader2 className=" animate-spin"/></Button>}
              
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
    </div>)
}
export default OutLook