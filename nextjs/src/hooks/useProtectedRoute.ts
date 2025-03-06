"use client";

import { RootState } from "@/redux/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useProtectedRoute = (redirectPATH: string) => {
  const pathname = usePathname();
  console.log(pathname);

  const router = useRouter();
  const { isAuthenticated } = useSelector((store: RootState) => store.auth);

  const storeLastVisitedUrl=()=>{
    localStorage.setItem("lastVisitedUrl",pathname)
  }

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(redirectPATH);
    }
    storeLastVisitedUrl()
  }, [isAuthenticated, router, pathname]);
};
export default useProtectedRoute;
