import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRouteForAdmin = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const user = useSelector(
    (store: RootState) => store.auth.user
  );
  useEffect(() => {
    
      if (user?.role !== "owner") {
        router.replace("/");
      }
    
  }, [router,user]);
  return<>{children}</>;
};
export default ProtectedRouteForAdmin;
