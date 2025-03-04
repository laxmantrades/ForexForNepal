"use client";

import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProtectRoute = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = useSelector((store: RootState) => store.auth.isAuthenticated);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push("/login"); // Redirect to login if user is not authenticated
    } else {
      setLoading(false); // User is authenticated, stop loading
    }
  }, [user, router]);

  // If still loading or user is not authenticated, return null (prevents flashing content)
  if (loading) return null;

  // Render the children (protected content) if user is authenticated
  return <>{children}</>;
};
export default ProtectRoute;
