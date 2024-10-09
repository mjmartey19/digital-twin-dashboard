import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardItem from '@/app/(admin)/dashboard/dashboard-components/CardItem';
import { DollarSign, Fuel, Wrench, Truck, Scale } from "lucide-react";
import TotalVehiclesCard from '@/app/(admin)/dashboard/dashboard-components/TotalVehicleCard';

// Import chart components
import BarChart from '@/app/(admin)/dashboard/dashboard-components/BarChart';
import LineChart from '@/app/(admin)/dashboard/dashboard-components/LineChart';
import PieChart from '@/app/(admin)/dashboard/dashboard-components/PieChart';

const DashboardLayout = () => {
    return (
        <div className="space-y-4 p-4">
            {/* Top row with the KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <CardItem
                    title="Total Weight Collected (kg)"
                    count="12,500"
                    icon={Scale}
                    iconColor="text-green-500"
                />
                <CardItem
                    title="Fuel Efficiency (km/L)"
                    count="5.8"
                    icon={Fuel}
                    iconColor="text-blue-500"
                />
                <CardItem
                    title="Total Fuel Consumed (L)"
                    count="3,200"
                    icon={Fuel}
                    iconColor="text-yellow-500"
                />
                <CardItem
                    title="Revenue Generated ($)"
                    count="75,000"
                    icon={DollarSign}
                    iconColor="text-green-500"
                />
                <CardItem
                    title="Maintenance Costs ($)"
                    count="18,000"
                    icon={Wrench}
                    iconColor="text-red-500"
                />
                <CardItem
                    title="Active Vehicles"
                    count="45"
                    icon={Truck}
                    iconColor="text-orange-500"
                />
            </div>

            {/* Charts section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Waste Collection by Vehicle (Bar Chart) */}
                <Card>
                    <CardHeader>
                        <CardTitle>Waste Collection by Vehicle</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BarChart
                            data={[5000, 3000, 4500]} // Example data
                            labels={['Vehicle A', 'Vehicle B', 'Vehicle C']}
                            dataSetLabel="Waste Collected (kg)"
                        />
                    </CardContent>
                </Card>

                {/* Fuel Consumption Efficiency (Line Chart) */}
                <Card>
                    <CardHeader>
                        <CardTitle>Fuel Consumption Efficiency</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <LineChart
                            data={[6.5, 5.8, 6.1]} // Example data
                            labels={['Day 1', 'Day 2', 'Day 3']}
                            dataSetLabel="Fuel Efficiency (km/L)"
                        />
                    </CardContent>
                </Card>

                {/* Revenue vs Dumping Costs (Bar Chart) */}
                <Card>
                    <CardHeader>
                        <CardTitle>Revenue vs Dumping Costs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BarChart
                            data={[75000, 18000, 15000]} // Example data
                            labels={['Vehicle A', 'Vehicle B', 'Vehicle C']}
                            dataSetLabel="Revenue ($) / Dumping Costs ($)"
                        />
                    </CardContent>
                </Card>

                {/* Maintenance Costs Distribution (Pie Chart) */}
                <Card>
                    <CardHeader>
                        <CardTitle>Maintenance Costs Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <PieChart
                            data={[5000, 7000, 6000]} // Example data
                            labels={['Oil Change', 'Tire Rotation', 'Repairs']}
                        />
                    </CardContent>
                </Card>
            </div>

            {/* Bottom row with Total Vehicles and Vehicles Condition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TotalVehiclesCard />
                {/* Vehicles Condition logic remains unchanged */}
            </div>
        </div>
    );
};

export default DashboardLayout;
