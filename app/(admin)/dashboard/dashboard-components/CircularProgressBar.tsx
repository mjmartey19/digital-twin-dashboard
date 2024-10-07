import React from 'react';

const CircularProgressBar = () => {
    const totalVehicles = 194;
    const enRoutePercentage = 80; // 80% of vehicles are en route
    const availablePercentage = 15; // 15% of vehicles are available
    const outOfServicePercentage = 5; // 5% are out of service

    // These values represent the dashoffsets for the circular paths
    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    const enRouteDashOffset = circumference - (enRoutePercentage / 100) * circumference;
    const availableDashOffset = circumference - (availablePercentage / 100) * circumference;
    const outOfServiceDashOffset = circumference - (outOfServicePercentage / 100) * circumference;

    return (
        <div className="relative w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                />
                {/* En Route segment */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#22c55e" // Green for En Route
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={enRouteDashOffset}
                    transform="rotate(-90 50 50)"
                />
                {/* Available segment */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#a3e635" // Lime for Available
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={availableDashOffset}
                    transform="rotate(-90 50 50)"
                />
                {/* Out of Service segment */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#ef4444" // Red for Out of Service
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={outOfServiceDashOffset}
                    transform="rotate(-90 50 50)"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{totalVehicles}</span>
                <span className="text-gray-500">Vehicles</span>
            </div>
        </div>
    );
};

export default CircularProgressBar;
