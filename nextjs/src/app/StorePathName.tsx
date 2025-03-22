"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const StorePathName = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/login" && pathname !== "/signup") {
      localStorage.setItem("lastVisitedUrl", pathname);
    }
  }, [pathname]);
  return <>{children}</>;
};
export default StorePathName;
