import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardItem from '@/app/(admin)/dashboard/dashboard-components/CardItem';
// import CircularProgressBar from '@/app/(admin)/dashboard/dashboard-components/CircularProgressBar';
import { DollarSign, Fuel, TrendingUp, Wrench, Truck, Scale } from "lucide-react"; // Import relevant icons
import CircularProgressBar from '@/app/(admin)/dashboard/dashboard-components/CircularProgressBar';
import TotalVehiclesCard from '@/app/(admin)/dashboard/dashboard-components/TotalVehicleCard';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen space-y-4 p-4 overflow-y-auto">
            {/* Top row with the new cards */}
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

            {/* Bottom row with Total Vehicles and Vehicles Condition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TotalVehiclesCard />

                <Card>
                    <CardHeader>
                        <CardTitle>Vehicles Condition</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {['Good', 'Satisfactory', 'Critical'].map((condition, index) => (
                                <div key={condition} className="text-center">
                                    <div className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto">
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                                            <circle cx="50" cy="50" r="45" fill="none" stroke={index === 0 ? "#22c55e" : index === 1 ? "#fbbf24" : "#ef4444"} strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="141.35" transform="rotate(-90 50 50)" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-lg sm:text-xl font-bold">83%</span>
                                        </div>
                                    </div>
                                    <p className="mt-2 font-semibold">{condition}</p>
                                    <p className="text-sm text-gray-500">234 Vehicles</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardLayout;
