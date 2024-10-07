import React from 'react';

// Define the prop types for the component
interface NestedCircularProgressProps {
    total: number;
    enRoute: number;
    available: number;
    outOfService: number;
}

const NestedCircularProgress: React.FC<NestedCircularProgressProps> = ({ total, enRoute, available, outOfService }) => {
    // Helper function to calculate the percentage
    const calculatePercentage = (value: number): number => (value / total) * 100;

    // Calculate the percentages for each category
    const enRoutePercentage = calculatePercentage(enRoute);
    const availablePercentage = calculatePercentage(available);
    const outOfServicePercentage = calculatePercentage(outOfService);

    return (
        <div className="relative w-100 h-100">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {/* Outer circle (En Route) */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="5"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="5"
                    strokeDasharray="282.7"
                    strokeDashoffset={`${282.7 - (282.7 * enRoutePercentage) / 100}`}
                />

                {/* Middle circle (Available) */}
                <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="5"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#a3e635"
                    strokeWidth="5"
                    strokeDasharray="219.9"
                    strokeDashoffset={`${219.9 - (219.9 * availablePercentage) / 100}`}
                />

                {/* Inner circle (Out of Service) */}
                <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="5"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="5"
                    strokeDasharray="157.1"
                    strokeDashoffset={`${157.1 - (157.1 * outOfServicePercentage) / 100}`}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold">{total.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default NestedCircularProgress;
