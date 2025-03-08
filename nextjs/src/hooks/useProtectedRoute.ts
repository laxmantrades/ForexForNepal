"use client";

import { RootState } from "@/redux/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useProtectedRoute = (redirectPATH: string) => {
  const pathname = usePathname();

  const router = useRouter();
  const { isAuthenticated, user, loading } = useSelector(
    (store: RootState) => store.auth
  );

  const storeLastVisitedUrl = () => {
    localStorage.setItem("lastVisitedUrl", pathname);
  };

  useEffect(() => {
    if (loading) return;

    if (!user && !isAuthenticated) {
      router.push(redirectPATH);
    }

    storeLastVisitedUrl();
  }, [pathname, router, isAuthenticated, loading]);
};
export default useProtectedRoute;
