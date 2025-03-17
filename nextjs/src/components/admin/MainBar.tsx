import { Chart } from "./Chart";
import TotalSales from "./TotalSales";

const MainBar = () => {
  return (
    <div className="flex justify-center items-center p-4 w-full">
    <div className="flex justify-center space-x-10">
      <Chart />
      
    </div>
  </div>
  
  );
};
export default MainBar;
