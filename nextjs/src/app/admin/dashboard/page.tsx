import MainBar from "@/components/admin/MainBar";
import TotalSales from "@/components/admin/TotalSales";

export default function Dashboard() {
  return (
    <div className=" flex text-xl ">
      <MainBar />
      <TotalSales />
    </div>
  );
}
