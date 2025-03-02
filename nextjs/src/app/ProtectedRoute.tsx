"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectRoute = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  //const user = useSelector((store: RootState) => store.auth.isAuthenticated);
    const user=true
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login if user is not authenticated
    }
    if(user){
        router.push("/")
    }
  }, [user, router]);

  //if (!user) return null; // Prevents rendering protected content before redirect

  return <>{children}</>
};
export default ProtectRoute;
