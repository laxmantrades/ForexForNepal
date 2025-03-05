"use client";

import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useProtectedRoute = (redirectPATH: string) => {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (store: RootState) => store.auth.isAuthenticated
  );
  useEffect(() => {
    if (!isAuthenticated) {
      router.push(redirectPATH);
    }
    if(isAuthenticated){
      return router.push("/courses")
    }
    
    
  }, [isAuthenticated, router]);
};
export default useProtectedRoute;
