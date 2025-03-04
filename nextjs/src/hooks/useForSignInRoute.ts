import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useForSignInRoute = () => {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (store: RootState) => store.auth.isAuthenticated
  );
  useEffect(() => {
    if (isAuthenticated) {
      return;
    }
  }, []);
};
export default useForSignInRoute;
