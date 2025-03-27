"use client";

import { RootState } from "@/redux/store";
import { useRouter, usePathname, useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useProtectedRoutesForLecture = () => {
  const data = useSelector((store: RootState) => store.auth.user?.coursePurhcased);
  const {courseId}=useParams()
  
  const isPurchased=data?.some((course)=>course==courseId)
  console.log(isPurchased);
  


  const router = useRouter();

 

  useEffect(() => {
   
      if(!isPurchased){
      router.replace(`/courses/${courseId}`)
    }
    
    
    
   
  }, [isPurchased,router]);
  if(!isPurchased) return null
  
  
};




