"use client";

import { RootState } from "@/redux/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useProtectedRouteLndS = () => {
  const { isAuthenticated } = useSelector((store: RootState) => store.auth);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lastVisited: string | null = localStorage.getItem("lastVisitedUrl");
      const validateURl = lastVisited ? lastVisited : "/";
      if (isAuthenticated) {
        router.replace(validateURl);
      }
    }
  }, [isAuthenticated]);
  if (isAuthenticated) return null;
};

export const useProtectedRoutesForNotAuthenticated = () => {
  const pathname = usePathname();
  const { isAuthenticated } = useSelector(
    (store: RootState) => store.auth
  );
 
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/signup");
     
      
    }
    
  }, [router, isAuthenticated,pathname]);
};


