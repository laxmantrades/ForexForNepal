"use client";

import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";

export default function LoadingWrapper() {
  const  loading  = useSelector((store: RootState) => store.auth.loading);

    
  if (!loading) return null; // Don't render anything if not loading

  return (
    <div className="fixed inset-0 z-50">
      <LoadingSpinner />
      </div>
   
  );
}
