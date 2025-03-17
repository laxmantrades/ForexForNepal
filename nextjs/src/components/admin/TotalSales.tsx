import {
  Card,
  CardContent,
  
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TotalSales = () => {
  return (
    <Card className=" w-xl text-center">
      <CardHeader>
        <CardTitle>Total Sales</CardTitle>
       
      </CardHeader>
      <CardContent >
       Rs12000
      </CardContent>
      
    </Card>
  );
};
export default TotalSales;
