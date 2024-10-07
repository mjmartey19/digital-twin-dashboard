import NestedCircularProgress from "./NestedCircularProgress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TotalVehiclesCard = () => {
  const totalVehicles = 700;
  const enRoute = 400;
  const available = 250;
  const outOfService = 50;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Vehicles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-8">
          <NestedCircularProgress total={totalVehicles} enRoute={enRoute} available={available} outOfService={outOfService} />
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span>EN ROUTE: {enRoute.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-lime-400 rounded-full mr-2"></div>
              <span>AVAILABLE: {available.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <span>OUT OF SERVICE: {outOfService.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalVehiclesCard;